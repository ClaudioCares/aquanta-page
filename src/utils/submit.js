import { brand } from '../data/site.js'

/** Envío de formularios.
 *  TODO: conectar un backend (Formspree, EmailJS o una función de Vercel).
 *  Mientras tanto abre el cliente de correo con los datos (mailto) y resuelve. */
export default function submitForm({ subject, fields }) {
  return new Promise((resolve) => {
    const body = Object.entries(fields)
      .filter(([, v]) => v !== undefined && v !== '' && !(v instanceof File))
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')
    const files = Object.values(fields).filter((v) => v instanceof File).map((f) => f.name)
    const extra = files.length ? `\n\nAdjuntar manualmente: ${files.join(', ')}` : ''
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body + extra)}`
    setTimeout(resolve, 400)
  })
}

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim())
