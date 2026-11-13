// Aligera un modelo .glb: suelda vértices, simplifica mallas y reescribe el binario.
// Los .glb de SketchUp repiten cada vértice por triángulo y traen piezas con decenas de miles de caras
// repetidas muchas veces. Se sueldan vértices iguales, se reduce cada malla según su peso en la escena
// (caras x repeticiones) y se descartan las líneas sueltas y todo lo que ya no se usa.
import { MeshoptSimplifier } from 'meshoptimizer'

export const ready = MeshoptSimplifier.ready

/** glb = { json, rest } (rest = chunk BIN con su cabecera de 8 bytes). budget = triángulos totales en escena. */
export function optimize(glb, { label, budget = 2_000_000 }) {
  const g = glb.json, bin = glb.rest.subarray(8)
  const uses = new Map()
  const reach = (i) => { const n = g.nodes[i]; if (n.mesh !== undefined) uses.set(n.mesh, (uses.get(n.mesh) || 0) + 1); for (const c of n.children || []) reach(c) }
  for (const r of g.scenes[g.scene || 0].nodes) reach(r)

  const read = (accIdx, Type, comps) => {
    const acc = g.accessors[accIdx], bv = g.bufferViews[acc.bufferView]
    const base = (bv.byteOffset || 0) + (acc.byteOffset || 0), size = Type.BYTES_PER_ELEMENT, stride = bv.byteStride || size * comps
    const out = new Type(acc.count * comps), dv = new DataView(bin.buffer, bin.byteOffset + base)
    const get = Type === Float32Array ? 'getFloat32' : Type === Uint32Array ? 'getUint32' : Type === Uint16Array ? 'getUint16' : 'getUint8'
    for (let i = 0; i < acc.count; i++) for (let c = 0; c < comps; c++) out[i * comps + c] = dv[get](i * stride + c * size, true)
    return out
  }
  const chunks = [], views = [], accessors = []
  let offset = 0
  const push = (typed, target) => {
    const buf = Buffer.from(typed.buffer, typed.byteOffset, typed.byteLength)
    views.push({ buffer: 0, byteOffset: offset, byteLength: buf.length, ...(target ? { target } : {}) })
    chunks.push(buf); offset += buf.length
    const pad = (4 - (offset % 4)) % 4
    if (pad) { chunks.push(Buffer.alloc(pad)); offset += pad }
    return views.length - 1
  }
  const addAcc = (a) => { accessors.push(a); return accessors.length - 1 }

  // peso total de la escena, para repartir el presupuesto de triángulos
  const triCount = (pr) => ((pr.mode ?? 4) === 4 ? g.accessors[pr.indices ?? pr.attributes.POSITION].count / 3 : 0)
  // una misma geometría puede estar en varias mallas (piezas repetidas): se procesa una vez y se comparte
  const geoKey = (pr) => [pr.attributes.POSITION, pr.attributes.NORMAL, pr.attributes.TEXCOORD_0, pr.indices].join('|')
  const geoUses = new Map(), cache = new Map()
  for (const [m, c] of uses) for (const pr of g.meshes[m].primitives) geoUses.set(geoKey(pr), (geoUses.get(geoKey(pr)) || 0) + c)
  let total = 0
  for (const [m, c] of uses) for (const pr of g.meshes[m].primitives) total += triCount(pr) * c
  const baseRatio = Math.min(1, budget / total)
  let before = 0, after = 0

  for (const [m, count] of uses) {
    const mesh = g.meshes[m], prims = []
    for (const pr of mesh.primitives) {
      if ((pr.mode ?? 4) !== 4) continue // líneas sueltas
      const key = geoKey(pr), hit = cache.get(key)
      if (hit) { if (hit.tris) { after += hit.tris * count; prims.push({ attributes: hit.attributes, indices: hit.indices, ...(pr.material !== undefined ? { material: pr.material } : {}) }) } before += hit.before * count; continue }
      const pos = read(pr.attributes.POSITION, Float32Array, 3)
      const nor = pr.attributes.NORMAL !== undefined ? read(pr.attributes.NORMAL, Float32Array, 3) : null
      const uv = pr.attributes.TEXCOORD_0 !== undefined ? read(pr.attributes.TEXCOORD_0, Float32Array, 2) : null
      const n = pos.length / 3
      let idx
      if (pr.indices !== undefined) {
        const ct = g.accessors[pr.indices].componentType
        idx = Uint32Array.from(read(pr.indices, ct === 5125 ? Uint32Array : ct === 5123 ? Uint16Array : Uint8Array, 1))
      } else { idx = new Uint32Array(n); for (let i = 0; i < n; i++) idx[i] = i }
      before += (idx.length / 3) * count

      // soldar vértices: con textura se respeta posición + normal + uv; sin textura solo la posición
      // (SketchUp exporta cada cara con vértices propios y así el simplificador no podría unirlas);
      // las normales se recalculan al final
      const full = !!uv
      const W = full ? 3 + (nor ? 3 : 0) + 2 : 3
      const packed = new Float32Array(n * W)
      for (let i = 0; i < n; i++) {
        let o = i * W
        packed[o++] = pos[i * 3]; packed[o++] = pos[i * 3 + 1]; packed[o++] = pos[i * 3 + 2]
        if (full && nor) for (let k = 0; k < 3; k++) packed[o++] = Math.round(nor[i * 3 + k] * 127) / 127
        if (full) { packed[o++] = uv[i * 2]; packed[o++] = uv[i * 2 + 1] }
      }
      const words = new Uint32Array(packed.buffer)
      let cap = 1; while (cap < n * 2) cap <<= 1
      const table = new Int32Array(cap).fill(-1), remap = new Uint32Array(n)
      let unique = 0
      for (let i = 0; i < n; i++) {
        let h = 2166136261
        for (let k = 0; k < W; k++) { h ^= words[i * W + k]; h = Math.imul(h, 16777619) }
        let slot = (h >>> 0) & (cap - 1)
        for (;;) {
          const j = table[slot]
          if (j === -1) { table[slot] = i; remap[i] = unique++; break }
          let same = true
          for (let k = 0; k < W; k++) if (words[i * W + k] !== words[j * W + k]) { same = false; break }
          if (same) { remap[i] = remap[j]; break }
          slot = (slot + 1) & (cap - 1)
        }
      }
      let vp = new Float32Array(unique * 3), vn = full && nor ? new Float32Array(unique * 3) : null
      const vu = full ? new Float32Array(unique * 2) : null
      for (let i = 0; i < n; i++) {
        const r = remap[i]
        vp.set(pos.subarray(i * 3, i * 3 + 3), r * 3)
        if (vn) vn.set(nor.subarray(i * 3, i * 3 + 3), r * 3)
        if (vu) vu.set(uv.subarray(i * 2, i * 2 + 2), r * 2)
      }
      let tri = new Uint32Array(idx.length)
      for (let i = 0; i < idx.length; i++) tri[i] = remap[idx[i]]

      // simplificar: las piezas chicas se dejan; las pesadas se reducen más
      const tris = tri.length / 3
      if (!full && tris > 150 && baseRatio < 1) {
        const weight = tris * geoUses.get(key)
        const ratio = Math.max(0.03, Math.min(1, baseRatio * (weight > 200_000 ? 0.6 : weight > 20_000 ? 1 : 2.5)))
        const target = Math.max(36, Math.floor(tris * ratio) * 3)
        tri = MeshoptSimplifier.simplify(tri, vp, 3, target, 0.03)[0]
      }
      if (!tri.length) { cache.set(key, { tris: 0, before: idx.length / 3 }); continue }

      // normales nuevas: lisas dentro de una superficie, con arista viva si las caras difieren más de ~35°
      if (!full) {
        const F = tri.length / 3, fn = new Float32Array(F * 3)
        for (let f = 0; f < F; f++) {
          const a = tri[f * 3] * 3, b = tri[f * 3 + 1] * 3, c = tri[f * 3 + 2] * 3
          const ux = vp[b] - vp[a], uy = vp[b + 1] - vp[a + 1], uz = vp[b + 2] - vp[a + 2]
          const wx = vp[c] - vp[a], wy = vp[c + 1] - vp[a + 1], wz = vp[c + 2] - vp[a + 2]
          fn[f * 3] = uy * wz - uz * wy; fn[f * 3 + 1] = uz * wx - ux * wz; fn[f * 3 + 2] = ux * wy - uy * wx // ponderada por área
        }
        const COS = Math.cos((35 * Math.PI) / 180)
        const head = new Int32Array(unique).fill(-1) // primer grupo de cada vértice
        const next = [], src = [], sum = [] // grupos: siguiente, vértice origen, normal acumulada
        const out = new Uint32Array(tri.length)
        for (let f = 0; f < F; f++) {
          const nx = fn[f * 3], ny = fn[f * 3 + 1], nz = fn[f * 3 + 2], nl = Math.hypot(nx, ny, nz)
          for (let k = 0; k < 3; k++) {
            const v = tri[f * 3 + k]
            let c = head[v]
            if (nl > 0) for (; c !== -1; c = next[c]) { const l = Math.hypot(sum[c * 3], sum[c * 3 + 1], sum[c * 3 + 2]); if (l === 0 || (sum[c * 3] * nx + sum[c * 3 + 1] * ny + sum[c * 3 + 2] * nz) / (l * nl) > COS) break }
            if (c === -1 || nl === 0) { if (c === -1) { c = src.length; src.push(v); next.push(head[v]); head[v] = c; sum.push(0, 0, 0) } }
            sum[c * 3] += nx; sum[c * 3 + 1] += ny; sum[c * 3 + 2] += nz
            out[f * 3 + k] = c
          }
        }
        const G = src.length, np = new Float32Array(G * 3), nn = new Float32Array(G * 3)
        for (let c = 0; c < G; c++) { np.set(vp.subarray(src[c] * 3, src[c] * 3 + 3), c * 3); nn[c * 3] = sum[c * 3]; nn[c * 3 + 1] = sum[c * 3 + 1]; nn[c * 3 + 2] = sum[c * 3 + 2] }
        vp = np; vn = nn; tri = out; unique = G
      }

      // compactar: solo los vértices que siguen en uso
      const map = new Int32Array(unique).fill(-1)
      let used = 0
      for (let i = 0; i < tri.length; i++) { if (map[tri[i]] === -1) map[tri[i]] = used++; tri[i] = map[tri[i]] }
      const cp = new Float32Array(used * 3), cn = vn ? new Float32Array(used * 3) : null, cu = vu ? new Float32Array(used * 2) : null
      const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity]
      for (let v = 0; v < unique; v++) {
        const r = map[v]
        if (r === -1) continue
        for (let k = 0; k < 3; k++) { const x = vp[v * 3 + k]; cp[r * 3 + k] = x; if (x < mn[k]) mn[k] = x; if (x > mx[k]) mx[k] = x }
        if (cn) { const l = Math.hypot(vn[v * 3], vn[v * 3 + 1], vn[v * 3 + 2]) || 1; for (let k = 0; k < 3; k++) cn[r * 3 + k] = vn[v * 3 + k] / l }
        if (cu) { cu[r * 2] = vu[v * 2]; cu[r * 2 + 1] = vu[v * 2 + 1] }
      }
      after += (tri.length / 3) * count
      const attributes = { POSITION: addAcc({ bufferView: push(cp, 34962), componentType: 5126, count: used, type: 'VEC3', min: mn, max: mx }) }
      if (cn) attributes.NORMAL = addAcc({ bufferView: push(cn, 34962), componentType: 5126, count: used, type: 'VEC3' })
      if (cu) attributes.TEXCOORD_0 = addAcc({ bufferView: push(cu, 34962), componentType: 5126, count: used, type: 'VEC2' })
      const small = used <= 65535
      const indices = addAcc({ bufferView: push(small ? Uint16Array.from(tri) : tri, 34963), componentType: small ? 5123 : 5125, count: tri.length, type: 'SCALAR' })
      cache.set(key, { attributes, indices, tris: tri.length / 3, before: idx.length / 3 })
      prims.push({ attributes, indices, ...(pr.material !== undefined ? { material: pr.material } : {}) })
    }
    mesh.primitives = prims
  }

  // mallas vacías o sin uso: se sueltan de los nodos y se renumeran las que quedan
  const newIndex = new Map(), meshes = []
  g.meshes.forEach((m, i) => { if (uses.has(i) && m.primitives.length) { newIndex.set(i, meshes.length); meshes.push(m) } })
  for (const n of g.nodes) if (n.mesh !== undefined) { if (newIndex.has(n.mesh)) n.mesh = newIndex.get(n.mesh); else delete n.mesh }
  g.meshes = meshes

  // imágenes incrustadas
  for (const im of g.images || []) if (im.bufferView !== undefined) {
    const bv = g.bufferViews[im.bufferView]
    im.bufferView = push(new Uint8Array(bin.buffer, bin.byteOffset + (bv.byteOffset || 0), bv.byteLength))
  }
  g.accessors = accessors; g.bufferViews = views
  const data = Buffer.concat(chunks), head = Buffer.alloc(8)
  head.writeUInt32LE(data.length, 0); head.writeUInt32LE(0x004e4942, 4) // 'BIN'
  glb.rest = Buffer.concat([head, data]); g.buffers = [{ byteLength: data.length }]
  console.log(`${label}: ${(before / 1e6).toFixed(2)} M de triángulos en escena -> ${(after / 1e6).toFixed(2)} M; binario ${(data.length / 1e6).toFixed(1)} MB`)
}
