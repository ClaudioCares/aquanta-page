// Limpia los .glb exportados desde SimLab antes de publicarlos en public/models:
//  - RPP Siemens: quita los pernos sueltos y la barra de cobre que quedaron fuera del gabinete.
//  - TTA: fija en la geometría la puerta exterior, que SimLab exporta con una matriz deformada (se veía torcida).
// Uso: node scripts/fix-models.mjs "<carpeta con los .glb originales>"
import fs from 'node:fs'
import path from 'node:path'

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

/* ---------- ejecutar ---------- */
const jobs = [
  ['326 - AQANTA - TTA MANTOS VERDES.glb', 'tablero-tta.glb', fixTta],
  ['INGENEO - RPP - 3D SIEMENS 1.glb', 'tablero-rpp-siemens.glb', fixRpp],
]
for (const [src, out, fix] of jobs) {
  const glb = readGlb(path.join(SRC, src))
  fix(glb.json, glb)
  writeGlb(path.join(OUT, out), glb)
}
