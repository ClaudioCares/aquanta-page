// Prepara los logos de clientes para la grilla "Confían en nosotros":
//  - copia a public/logo/clientes los logos nuevos entregados por AQuanta
//  - genera public/logo/clientes/mono/<nombre>.webp: versión blanca con transparencia de cada logo
//    (los originales son PNG con fondo blanco y no se pueden mostrar directo sobre el fondo oscuro)
// Uso: node scripts/build-client-logos.mjs ["<carpeta Descargas>"]
import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const DIR = 'public/logo/clientes'
const SRC = process.argv[2]
const nuevos = [
  ['Logotipo Capstone Copper restaurado en alta resolución.png', 'capstone-copper.png'],
  ['Logotipo MOLYMET restaurado.png', 'molymet.png'],
  ['imagnes para pagina/Logo_de_Claro.svg.webp', 'claro-chile.png'],
  ['Logotipo Capredena restaurado y transparente.png', 'capredena.png'],
  ['EMPRESAS JORDAN LOGO.png', 'empresas-jordan.png'],
  ['umce logo.png', 'umce.png'],
]
if (SRC) for (const [src, out] of nuevos) {
  const file = path.join(SRC, src)
  if (!fs.existsSync(file)) { console.log('(no encontrado) ' + src); continue }
  await sharp(file).flatten({ background: '#ffffff' }).trim().resize({ height: 160 }).png().toFile(path.join(DIR, out))
  console.log('nuevo: ' + out)
}

fs.mkdirSync(path.join(DIR, 'mono'), { recursive: true })
for (const f of fs.readdirSync(DIR).filter((n) => /\.(png|jpe?g|webp)$/i.test(n))) {
  const { data, info } = await sharp(path.join(DIR, f)).flatten({ background: '#ffffff' }).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  for (let i = 0; i < data.length; i += 4) {
    // opacidad = cuánto se aleja el píxel del blanco (por su canal más oscuro, así los colores vivos no se pierden)
    const a = Math.min(255, Math.round((255 - Math.min(data[i], data[i + 1], data[i + 2])) * 1.35))
    data[i] = data[i + 1] = data[i + 2] = 255
    data[i + 3] = a
  }
  await sharp(data, { raw: info }).trim().webp({ quality: 90, alphaQuality: 100 }).toFile(path.join(DIR, 'mono', f.replace(/\.\w+$/, '.webp')))
}
console.log('logos en blanco: ' + fs.readdirSync(path.join(DIR, 'mono')).length)
