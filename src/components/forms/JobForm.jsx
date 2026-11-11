import { useState } from 'react'
import PillButton from '../ui/PillButton.jsx'
import Icon from '../ui/Icon.jsx'
import submitForm, { isEmail } from '../../utils/submit.js'
import './forms.css'

const MAX_MB = 5

/** 12.4 Formulario de postulación con CV (PDF, máx. 5 MB).
 *  TODO: envío real con adjunto en src/utils/submit.js (mailto no adjunta archivos). */
export default function JobForm({ data }) {
  const f = data.fields
  const [form, setForm] = useState({ nombre: '', email: '', titulo: '', casa: '', area: '', cv: null })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const onFile = (e) => {
    const file = e.target.files[0] || null
    setForm({ ...form, cv: file })
    const er = { ...errors }
    delete er.cv
    if (file && file.type !== 'application/pdf') er.cv = 'El archivo debe ser PDF.'
    else if (file && file.size > MAX_MB * 1024 * 1024) er.cv = `El archivo supera los ${MAX_MB} MB.`
    setErrors(er)
  }

  const submit = async (e) => {
    e.preventDefault()
    const er = {}
    if (!form.nombre.trim()) er.nombre = 'Ingresa tu nombre y apellido.'
    if (!isEmail(form.email)) er.email = 'Ingresa un correo válido.'
    if (form.cv && form.cv.type !== 'application/pdf') er.cv = 'El archivo debe ser PDF.'
    if (form.cv && form.cv.size > MAX_MB * 1024 * 1024) er.cv = `El archivo supera los ${MAX_MB} MB.`
    setErrors(er)
    if (Object.keys(er).length) return
    setStatus('sending')
    try {
      await submitForm({
        subject: 'Postulación: antecedentes para futuras oportunidades',
        fields: { [f.nombre]: form.nombre, [f.email]: form.email, [f.titulo]: form.titulo, [f.casa]: form.casa, [f.area]: form.area, CV: form.cv },
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="form glass" onSubmit={submit} noValidate id={data.id}>
      <p className="form__notice">{data.notice}</p>
      <label>{f.nombre} *
        <input required value={form.nombre} onChange={set('nombre')} aria-invalid={!!errors.nombre} autoComplete="name" />
        {errors.nombre && <span className="form__err">{errors.nombre}</span>}
      </label>
      <label>{f.email} *
        <input type="email" required value={form.email} onChange={set('email')} aria-invalid={!!errors.email} autoComplete="email" />
        {errors.email && <span className="form__err">{errors.email}</span>}
      </label>
      <label>{f.titulo}<input value={form.titulo} onChange={set('titulo')} /></label>
      <label>{f.casa}<input value={form.casa} onChange={set('casa')} /></label>
      <label className="form__full">{f.area}<input value={form.area} onChange={set('area')} /></label>
      <label className="form__full">{f.cv}
        <input type="file" accept="application/pdf,.pdf" onChange={onFile} aria-invalid={!!errors.cv} />
        {errors.cv && <span className="form__err">{errors.cv}</span>}
      </label>
      {status === 'sent' && <p className="form__status form__status--ok" role="status"><Icon name="check" size={16} /> Postulación enviada. Gracias por tu interés.</p>}
      {status === 'error' && <p className="form__status form__status--error" role="alert">No pudimos enviar tu postulación. Escríbenos a contacto@aquantalatam.com.</p>}
      <div className="form__actions">
        <PillButton type="submit" variant="accent" icon="upload" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando' : data.submit}</PillButton>
      </div>
    </form>
  )
}
