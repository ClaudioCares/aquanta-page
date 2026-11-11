/** Convierte un nombre en un slug de archivo: 'Zella DC' -> 'zella-dc' */
export default function slug(str = '') {
  return String(str)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, 'y')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
