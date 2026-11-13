// Limpia los .glb exportados desde SimLab antes de publicarlos en public/models:
//  - RPP Siemens: quita los pernos sueltos y la barra de cobre que quedaron fuera del gabinete.
//  - TTA: fija en la geometría la puerta exterior, que SimLab exporta con una matriz deformada (se veía torcida).
//  - Orion y Sala (SketchUp): aíslan el objeto principal de la escena y activan el sombreado.
//  - Electrohub (SketchUp): además se aligera (ver optimize-glb.mjs), porque el original pesa 262 MB.
// Uso: node scripts/fix-models.mjs "<carpeta Descargas con los .glb originales>" [filtro de destino]
import fs from 'node:fs'
import path from 'node:path'
import { optimize, ready } from './optimize-glb.mjs'

const SRC = process.argv[2]
const OUT = path.resolve('public/models')

/* ---------- lectura / escritura GLB ---------- */
function readGlb(file) {
  const buf = fs.readFileSync(file)
  const jsonLen = buf.readUInt32LE(12)
  const json = JSON.parse(buf.subarray(20, 20 + jsonLen).toString('utf8'))
  const rest = buf.subarray(20 + jsonLen) // chunk BIN tal cual
  return { json, rest }
}
function writeGlb(file, { json, rest }) {
  let j = Buffer.from(JSON.stringify(json), 'utf8')
  const pad = (4 - (j.length % 4)) % 4
  if (pad) j = Buffer.concat([j, Buffer.alloc(pad, 0x20)])
  const head = Buffer.alloc(20)
  head.writeUInt32LE(0x46546c67, 0) // 'glTF'
  head.writeUInt32LE(2, 4)
  head.writeUInt32LE(20 + j.length + rest.length, 8)
  head.writeUInt32LE(j.length, 12)
  head.writeUInt32LE(0x4e4f534a, 16) // 'JSON'
  fs.writeFileSync(file, Buffer.concat([head, j, rest]))
}

/* ---------- matrices 4x4 (column-major, como glTF) ---------- */
const I = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
const mul = (a, b) => { const o = new Array(16).fill(0); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) o[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k]; return o }
const local = (n) => {
  if (n.matrix) return n.matrix
  const [x, y, z, w] = n.rotation || [0, 0, 0, 1], [sx, sy, sz] = n.scale || [1, 1, 1], [tx, ty, tz] = n.translation || [0, 0, 0]
  return [
    (1 - 2 * (y * y + z * z)) * sx, 2 * (x * y + z * w) * sx, 2 * (x * z - y * w) * sx, 0,
    2 * (x * y - z * w) * sy, (1 - 2 * (x * x + z * z)) * sy, 2 * (y * z + x * w) * sy, 0,
    2 * (x * z + y * w) * sz, 2 * (y * z - x * w) * sz, (1 - 2 * (x * x + y * y)) * sz, 0,
    tx, ty, tz, 1]
}
function inv(m) {
  const a = m.map((v) => v), o = I.slice()
  const at = (M, r, c) => M[c * 4 + r], set = (M, r, c, v) => { M[c * 4 + r] = v }
  for (let i = 0; i < 4; i++) {
    let p = i
    for (let r = i + 1; r < 4; r++) if (Math.abs(at(a, r, i)) > Math.abs(at(a, p, i))) p = r
    for (let c = 0; c < 4; c++) { let t = at(a, i, c); set(a, i, c, at(a, p, c)); set(a, p, c, t); t = at(o, i, c); set(o, i, c, at(o, p, c)); set(o, p, c, t) }
    const d = at(a, i, i)
    for (let c = 0; c < 4; c++) { set(a, i, c, at(a, i, c) / d); set(o, i, c, at(o, i, c) / d) }
    for (let r = 0; r < 4; r++) if (r !== i) { const f = at(a, r, i); for (let c = 0; c < 4; c++) { set(a, r, c, at(a, r, c) - f * at(a, i, c)); set(o, r, c, at(o, r, c) - f * at(o, i, c)) } }
  }
  return o
}
const xf = (m, v) => [0, 1, 2].map((r) => m[r] * v[0] + m[4 + r] * v[1] + m[8 + r] * v[2] + m[12 + r])

/* ---------- recorrido de la escena ---------- */
function index(g) {
  const info = new Map() // nodo -> { parent, world, parentWorld }
  const walk = (i, parent, pw) => {
    const w = mul(pw, local(g.nodes[i]))
    info.set(i, { parent, world: w, parentWorld: pw })
    for (const c of g.nodes[i].children || []) walk(c, i, w)
  }
  for (const r of g.scenes[g.scene || 0].nodes) walk(r, -1, I)
  return info
}
/** Caja en mundo de un nodo y sus hijos; también devuelve la malla más grande (hoja de la puerta). */
function bounds(g, info, i) {
  const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity]
  let biggest = null
  const walk = (k) => {
    const n = g.nodes[k]
    if (n.mesh !== undefined) for (const pr of g.meshes[n.mesh].primitives) {
      const a = g.accessors[pr.attributes.POSITION], w = info.get(k).world
      const size = a.max.reduce((s, v, q) => s + (v - a.min[q]) * Math.hypot(w[q * 4], w[q * 4 + 1], w[q * 4 + 2]), 0)
      if (!biggest || size > biggest.size) biggest = { size, a, w }
      for (let c = 0; c < 8; c++) {
        const p = xf(w, [c & 1 ? a.max[0] : a.min[0], c & 2 ? a.max[1] : a.min[1], c & 4 ? a.max[2] : a.min[2]])
        for (let r = 0; r < 3; r++) { mn[r] = Math.min(mn[r], p[r]); mx[r] = Math.max(mx[r], p[r]) }
      }
    }
    for (const c of n.children || []) walk(c)
  }
  walk(i)
  return { mn, mx, biggest }
}
const findByName = (g, name) => g.nodes.findIndex((n) => n.name === name)

/* ---------- RPP: quitar piezas fuera del gabinete ---------- */
function fixRpp(g) {
  const info = index(g)
  const asm = findByName(g, 'Assembly-1213')
  const kept = [], removed = []
  for (const c of g.nodes[asm].children) {
    const { mn, mx, biggest } = bounds(g, info, c)
    if (!biggest) { kept.push(c); continue } // sin geometría (cámara, etc.)
    // el gabinete ocupa x 0..1.02, z -0.47..-0.01 (m); lo que queda entero fuera es sobrante
    const outside = mn[0] > 1.2 || mn[2] > 0.2 || mx[0] < -0.2 || mx[2] < -0.7
    ;(outside ? removed : kept).push(c)
  }
  g.nodes[asm].children = kept
  console.log(`RPP: ${removed.length} piezas sobrantes quitadas (${removed.map((c) => g.nodes[c].name || '#' + c).join(', ')})`)
}

/* ---------- TTA: puerta exterior ---------- */
// SimLab exporta la puerta con una matriz con sesgo (shear) que glTF no admite: los visores la
// descomponen mal y la hoja se ve torcida. Aquí se aplica esa matriz EXACTA a los vértices de cada
// pieza de la puerta (posiciones y normales) y la pieza se cuelga del ensamble sin transformación,
// así se ve igual que en el modelo original.
function bake(glb, meshIdx, m, done) {
  const g = glb.json, bin = glb.rest.subarray(8) // datos del chunk BIN (tras su cabecera de 8 bytes)
  const det = m[0] * (m[5] * m[10] - m[9] * m[6]) - m[4] * (m[1] * m[10] - m[9] * m[2]) + m[8] * (m[1] * m[6] - m[5] * m[2])
  // normales: transpuesta de la inversa de la parte 3x3
  const im = inv([m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, 0, 0, 0, 1])
  const each = (accIdx, fn) => {
    if (accIdx === undefined || done.has(accIdx)) return
    done.add(accIdx)
    const acc = g.accessors[accIdx], bv = g.bufferViews[acc.bufferView]
    if (acc.componentType !== 5126 || acc.type !== 'VEC3' || acc.sparse) throw new Error('accessor no soportado')
    const base = (bv.byteOffset || 0) + (acc.byteOffset || 0), stride = bv.byteStride || 12
    const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity]
    for (let i = 0; i < acc.count; i++) {
      const o = base + i * stride
      const v = fn([bin.readFloatLE(o), bin.readFloatLE(o + 4), bin.readFloatLE(o + 8)])
      for (let r = 0; r < 3; r++) { bin.writeFloatLE(v[r], o + r * 4); const f = bin.readFloatLE(o + r * 4); mn[r] = Math.min(mn[r], f); mx[r] = Math.max(mx[r], f) }
    }
    return { acc, mn, mx }
  }
  for (const pr of g.meshes[meshIdx].primitives) {
    const r = each(pr.attributes.POSITION, (v) => xf(m, v))
    if (r) { r.acc.min = r.mn; r.acc.max = r.mx }
    each(pr.attributes.NORMAL, (v) => {
      const n = [im[0] * v[0] + im[1] * v[1] + im[2] * v[2], im[4] * v[0] + im[5] * v[1] + im[6] * v[2], im[8] * v[0] + im[9] * v[1] + im[10] * v[2]]
      const l = Math.hypot(...n) || 1
      return n.map((x) => x / l)
    })
    if (det < 0 && pr.indices !== undefined && !done.has('i' + pr.indices)) { // espejo: invertir el sentido de los triángulos
      done.add('i' + pr.indices)
      const acc = g.accessors[pr.indices], bv = g.bufferViews[acc.bufferView]
      const size = { 5121: 1, 5123: 2, 5125: 4 }[acc.componentType], base = (bv.byteOffset || 0) + (acc.byteOffset || 0)
      for (let i = 0; i + 2 < acc.count; i += 3) { const x = base + (i + 1) * size, y = base + (i + 2) * size; const t = Buffer.from(bin.subarray(x, x + size)); bin.copy(bin, x, y, y + size); t.copy(bin, y) }
    }
  }
  return det
}
function fixTta(g, glb) {
  const info = index(g)
  const asm = findByName(g, 'Assembly-1191')
  const asmInv = inv(info.get(asm).world)
  const door = g.nodes[asm].children.find((c) => g.nodes[c].name === '850X_00_16_M51(2)')
  // accessors usados por piezas fuera de la puerta: no se pueden modificar
  const inDoor = new Set(); const mark = (i) => { inDoor.add(i); for (const c of g.nodes[i].children || []) mark(c) }; mark(door)
  const foreign = new Set()
  g.nodes.forEach((n, i) => { if (n.mesh !== undefined && !inDoor.has(i)) for (const pr of g.meshes[n.mesh].primitives) { foreign.add(pr.attributes.POSITION); foreign.add(pr.attributes.NORMAL) } })
  const added = [], done = new Set()
  for (const i of inDoor) {
    const n = g.nodes[i]
    if (n.mesh === undefined) continue
    for (const pr of g.meshes[n.mesh].primitives) if (foreign.has(pr.attributes.POSITION) || foreign.has(pr.attributes.NORMAL)) throw new Error('geometría compartida con otra pieza')
    const det = bake(glb, n.mesh, mul(asmInv, info.get(i).world), done)
    g.nodes.push({ name: n.name, mesh: n.mesh })
    added.push(g.nodes.length - 1)
    console.log(`TTA: pieza de puerta ${n.name || '#' + i} fijada (det ${det > 0 ? '+' : '-'})`)
  }
  g.nodes[asm].children = g.nodes[asm].children.filter((c) => c !== door).concat(added)
}

/* ---------- Modelos exportados desde SketchUp (OpenSKP) ---------- */
// La escena de SketchUp trae el objeto principal junto a copias, piezas sueltas y líneas sin agrupar.
// Se conserva solo lo que cae dentro de la zona indicada (x/z en metros) y los materiales pasan de
// "unlit" (planos, todo se ve blanco) a materiales con sombreado.
function fixSketchup(g, { label, x, z, drop }) {
  const info = index(g)
  const root = g.scenes[g.scene || 0].nodes[0]
  delete g.nodes[root].mesh // caras sueltas dibujadas fuera de todo grupo
  const kept = []
  let removed = 0
  for (const c of g.nodes[root].children || []) {
    const { mn, mx, biggest } = bounds(g, info, c)
    const cx = (mn[0] + mx[0]) / 2, cz = (mn[2] + mx[2]) / 2
    const inside = biggest && cx >= x[0] && cx <= x[1] && cz >= z[0] && cz <= z[1] && !/loose edges/i.test(g.nodes[c].name || '')
    if (inside) kept.push(c); else removed++
  }
  g.nodes[root].children = kept
  // piezas a quitar por nombre en cualquier nivel (por ejemplo, un logo pegado en una puerta)
  let dropped = 0
  if (drop) {
    // drop(nombre, nombres de los nodos padre) -> true si la pieza se quita
    const prune = (i, path) => { const n = g.nodes[i]; if (!n.children) return
      const here = [...path, n.name || '']
      n.children = n.children.filter((c) => { if (drop(g.nodes[c].name || '', here)) { dropped++; return false } return true })
      n.children.forEach((c) => prune(c, here)) }
    prune(root, [])
  }
  for (const m of g.materials || []) {
    if (m.extensions) { delete m.extensions.KHR_materials_unlit; if (!Object.keys(m.extensions).length) delete m.extensions }
    m.pbrMetallicRoughness = { ...(m.pbrMetallicRoughness || {}), metallicFactor: 0, roughnessFactor: 0.75 }
    m.doubleSided = true // SketchUp no garantiza la orientación de las caras
    // el blanco por defecto de SketchUp se quema con la luz del visor: se baja a gris claro
    const c = m.pbrMetallicRoughness.baseColorFactor || [1, 1, 1, 1]
    if (!m.pbrMetallicRoughness.baseColorTexture && Math.min(c[0], c[1], c[2]) > 0.9) m.pbrMetallicRoughness.baseColorFactor = [0.62, 0.64, 0.66, c[3] ?? 1]
  }
  for (const k of ['extensionsUsed', 'extensionsRequired']) if (g[k]) { g[k] = g[k].filter((e) => e !== 'KHR_materials_unlit'); if (!g[k].length) delete g[k] }
  console.log(`${label}: ${kept.length} conjuntos conservados, ${removed} fuera de la zona quitados${drop ? `, ${dropped} piezas quitadas por nombre` : ''}`)
}

/* ---------- Modelos de SimLab: nodos con matriz deformada ---------- */
// Algunos subconjuntos traen una matriz con sesgo que los visores descomponen mal (las piezas hijas
// quedarían corridas). Cada pieza de esos subconjuntos se cuelga de la raíz con su matriz final exacta.
function flattenSheared(g, label) {
  const info = index(g)
  const shear = (m) => { const c = [0, 1, 2].map((q) => [m[q * 4], m[q * 4 + 1], m[q * 4 + 2]]), L = c.map((v) => Math.hypot(...v)); let s = 0
    for (const [a, b] of [[0, 1], [0, 2], [1, 2]]) s = Math.max(s, Math.abs(c[a][0] * c[b][0] + c[a][1] * c[b][1] + c[a][2] * c[b][2]) / (L[a] * L[b] || 1)); return s }
  const roots = g.scenes[g.scene || 0].nodes
  let moved = 0, groups = 0
  const lift = (i) => { const n = g.nodes[i]
    if (n.mesh !== undefined) { const w = info.get(i).world; if (shear(w) > 0.02) throw new Error(label + ': pieza con deformación real, requiere fijarla en la geometría'); g.nodes.push({ name: n.name, mesh: n.mesh, matrix: w }); roots.push(g.nodes.length - 1); moved++ }
    for (const c of n.children || []) lift(c) }
  const walk = (i) => { const n = g.nodes[i]; if (!n.children) return
    n.children = n.children.filter((c) => { if (shear(local(g.nodes[c])) > 0.02) { lift(c); groups++; return false } return true })
    for (const c of n.children) walk(c) }
  for (const r of [...roots]) walk(r)
  console.log(`${label}: ${groups} subconjuntos con matriz deformada corregidos (${moved} piezas)`)
}

/* ---------- ejecutar ---------- */
const MODELOS = path.join(SRC, 'imagnes para pagina', 'MODELOS')
const jobs = [
  [SRC, '326 - AQANTA - TTA MANTOS VERDES.glb', 'tablero-tta.glb', fixTta],
  [SRC, 'INGENEO - RPP - 3D SIEMENS 1.glb', 'tablero-rpp-siemens.glb', fixRpp],
  // Orion: la escena trae dos copias del tablero; se publica la abierta (x 3..5), que muestra el interior
  [MODELOS, 'TABLERO_ORION_250.glb', 'tablero-orion-250.glb', (g, glb) => { fixSketchup(g, { label: 'Orion', x: [2, 6], z: [-4, 1], drop: (name, path) => /^logo$/i.test(name) || (/^LettreLegrand/i.test(name) && path.includes('PANEL')) }) /* logo suelto y letras de marca grabadas en el frente de la puerta */; optimize(glb, { label: 'Orion', budget: 1_200_000 }) }],
  // Sala: el resto de la escena son piezas de repuesto y contenedores lejos de la sala
  [MODELOS, 'SALA_ELECTRICA_3.5.glb', 'sala-electrica.glb', (g, glb) => { fixSketchup(g, { label: 'Sala', x: [-5, 21.5], z: [-50.5, -43.5] }); optimize(glb, { label: 'Sala', budget: 1_200_000 }) }],
  // Electrohub: 262 MB y 23 M de triángulos en origen; se quita la figura de escala y se aligera para la web
  [MODELOS, 'ELECTROHUB.glb', 'nexvolthub.glb', (g, glb) => { fixSketchup(g, { label: 'NexVoltHub', x: [-0.1, 8], z: [-4, 4] }); optimize(glb, { label: 'NexVoltHub', budget: 2_000_000 }) }],
  // Tablero general (SimLab): viene limpio, solo se aligera
  [MODELOS, 'TG - OPEN MACUL.glb', 'tablero-general.glb', (g, glb) => optimize(glb, { label: 'TG', budget: 1_500_000 })],
  // versión liviana del mismo tablero para la animación de construcción de la intro de Tableros
  [MODELOS, 'TG - OPEN MACUL.glb', 'tablero-general-lite.glb', (g, glb) => optimize(glb, { label: 'TG liviano', budget: 300_000 })],
  // Sala con filas de equipos (SimLab): 62 M de triángulos en origen por las piezas repetidas
  [MODELOS, 'GTD SALAS.glb', 'sala-equipos.glb', (g, glb) => { flattenSheared(g, 'Sala equipos'); optimize(glb, { label: 'Sala equipos', budget: 2_500_000 }) }],
  // Sala eléctrica de una planta de 3,5 MVA (SimLab): viene limpia, solo se compacta
  [MODELOS, 'SALA ELECTRICA bess.glb', 'sala-electrica-3-5-mva.glb', (g, glb) => { flattenSheared(g, 'Sala 3,5 MVA'); optimize(glb, { label: 'Sala 3,5 MVA', budget: 1_500_000 }) }],
  // Sala BESS (SimLab): viene limpia; se compacta y se aligera un poco
  [MODELOS, 'SALA BESS.glb', 'sala-bess.glb', (g, glb) => { flattenSheared(g, 'Sala BESS'); optimize(glb, { label: 'Sala BESS', budget: 2_000_000 }) }],
]
const only = process.argv[3] // opcional: procesar solo los destinos que contengan este texto
await ready
for (const [dir, src, out, fix] of jobs) {
  if (only && !out.includes(only)) continue
  if (!fs.existsSync(path.join(dir, src))) { console.log('(no encontrado, se omite) ' + src); continue }
  const glb = readGlb(path.join(dir, src))
  fix(glb.json, glb)
  writeGlb(path.join(OUT, out), glb)
}
