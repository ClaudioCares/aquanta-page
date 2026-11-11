import { useState } from 'react'
import PillButton from '../ui/PillButton.jsx'
import submitForm, { isEmail } from '../../utils/submit.js'
import './forms.css'

/** Formulario corto "Solicitar presentación completa" (Energía: uno por pestaña).
 *  TODO: envío real en src/utils/submit.js */
export default function MiniForm({ button = 'Solicitar presentación completa', subject = 'Solicitud de presentación' }) {
  const [form, setForm] = useState({ nombre: '', email: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const er = {}
    if (!form.nombre.trim()) er.nombre = true
    if (!isEmail(form.email)) er.email = true
    setErrors(er)
    if (Object.keys(er).length) return
    setStatus('sending')
    try {
      await submitForm({ subject, fields: { Nombre: form.nombre, Correo: form.email } })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="miniform" onSubmit={submit} noValidate aria-label={button}>
      <label>Nombre
        <input value={form.nombre} onChange={set('nombre')} aria-invalid={!!errors.nombre} autoComplete="name" />
      </label>
      <label>Correo electrónico
        <input type="email" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} autoComplete="email" />
      </label>
      <PillButton type="submit" variant="accent" size="sm" disabled={status === 'sending'}>{button}</PillButton>
      {status === 'sent' && <span className="miniform__status" role="status">Solicitud enviada. Te enviaremos la presentación a tu correo.</span>}
      {status === 'error' && <span className="miniform__status miniform__status--error" role="alert">No pudimos enviar la solicitud. Escríbenos a contacto@aquantalatam.com.</span>}
    </form>
  )
}
