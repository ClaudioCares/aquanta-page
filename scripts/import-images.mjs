// Convierte las imágenes entregadas por AQuanta a .webp dentro de public/img.
// Uso: node scripts/import-images.mjs "<carpeta 'imagnes para pagina'>"
import sharp from 'sharp'
import path from 'node:path'

const SRC = process.argv[2]

// Cloud > Archiving y resguardo (imágenes cuadradas de la página original)
const cloud = [
  ['imagen_2026-10-16_155843375-1024x1024.png', 'archiving-riesgo.webp'],
  ['imagen_2026-10-16_160243230-1024x1024.png', 'archiving-hardware.webp'],
  ['imagen_2026-10-16_155925335-1024x1024.png', 'archiving-continuidad.webp'],
  ['imagen_2026-10-16_155948623-1024x1024.png', 'archiving-inteligente.webp'],
]
for (const [src, out] of cloud) {
  await sharp(path.join(SRC, 'cluade', src)).resize(900, 900, { fit: 'cover' }).webp({ quality: 80 }).toFile(path.join('public/img/cloud', out))
  console.log('cloud/' + out)
}

// Foto de equipo con fondo azul de estudio: se recorta el fondo (croma) para igualar al resto del equipo
async function cutout(src, out) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    // "azulidad" relativa: cuánto domina el azul sobre rojo y verde (sirve igual en el centro claro
    // del fondo y en las esquinas oscuras del viñeteado)
    const k = b - Math.max(r, g * 0.92), rel = k / (b + 1)
    const aRel = k < 12 || rel < 0.28 ? 255 : rel > 0.42 ? 0 : Math.round(255 * (1 - (rel - 0.28) / 0.14))
    const aAbs = k < 38 ? 255 : k > 70 ? 0 : Math.round(255 * (1 - (k - 38) / 32)) // centro claro del fondo
    const a = Math.min(aRel, aAbs)
    data[i + 3] = a
    if (a < 255 && a > 0) { const lim = Math.max(r, g) + 12; if (b > lim) data[i + 2] = lim } // quita el reflejo azul del borde
  }
  // se recorta el margen transparente para que la figura quede del mismo tamaño que el resto del equipo
  const cut = await sharp(data, { raw: info }).trim().png().toBuffer()
  await sharp(cut).resize(700).webp({ quality: 86, alphaQuality: 90 }).toFile(out)
  console.log(out)
}
await cutout(path.join(SRC, 'servicios profesionales', 'imagen_2026-10-19_094959742.png'), 'public/img/equipo/aylyn-valenzuela.webp')
