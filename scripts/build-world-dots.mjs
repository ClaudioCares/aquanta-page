// Genera src/data/worldDots.js: la grilla de puntos del mapamundi de la sección "Alcance regional".
// Cada punto de la grilla que cae sobre tierra queda como [columna, fila]; los que caen en un país
// donde opera AQuanta se guardan aparte para destacarlos.
// Uso: node scripts/build-world-dots.mjs
import fs from 'node:fs'
import { createRequire } from 'node:module'
import { feature } from 'topojson-client'

const require = createRequire(import.meta.url)
const topo = require('world-atlas/countries-110m.json')
const countries = feature(topo, topo.objects.countries).features

const STEP = 2 // grados entre puntos
const LAT_TOP = 74, LAT_BOTTOM = -56 // sin Antártica ni el extremo ártico
const OURS = new Set(['Chile', 'Colombia', 'Peru'])

const inRing = (ring, x, y) => {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}
const inPoly = (poly, x, y) => inRing(poly[0], x, y) && !poly.slice(1).some((hole) => inRing(hole, x, y))
const shapes = countries.map((f) => {
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates
  let x0 = 180, x1 = -180, y0 = 90, y1 = -90
  for (const p of polys) for (const [x, y] of p[0]) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y) }
  return { name: f.properties.name, polys, box: [x0, y0, x1, y1] }
})

const land = [], ours = []
const rows = Math.floor((LAT_TOP - LAT_BOTTOM) / STEP) + 1, cols = 360 / STEP
for (let r = 0; r < rows; r++) {
  const lat = LAT_TOP - r * STEP
  for (let c = 0; c < cols; c++) {
    const lon = -180 + c * STEP + (r % 2 ? STEP / 2 : 0) // filas alternadas desplazadas medio paso
    const hit = shapes.find((s) => lon >= s.box[0] && lon <= s.box[2] && lat >= s.box[1] && lat <= s.box[3] && s.polys.some((p) => inPoly(p, lon, lat)))
    if (hit) (OURS.has(hit.name) ? ours : land).push(c, r)
  }
}
const out = `// Generado por scripts/build-world-dots.mjs (no editar a mano). Pares [columna, fila] de la grilla.
export default { step: ${STEP}, latTop: ${LAT_TOP}, cols: ${cols}, rows: ${rows}, land: [${land.join(',')}], ours: [${ours.join(',')}] }
`
fs.writeFileSync('src/data/worldDots.js', out)
console.log(`puntos de tierra: ${land.length / 2}, en países AQuanta: ${ours.length / 2}, archivo ${(out.length / 1024).toFixed(1)} KB`)
