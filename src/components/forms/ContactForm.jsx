import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { contactForm } from '../../data/site.js'
import PillButton from '../ui/PillButton.jsx'
import SmartLink from '../ui/SmartLink.jsx'
import Icon from '../ui/Icon.jsx'
import submitForm, { isEmail } from '../../utils/submit.js'
import './forms.css'

/** 2.5 Formulario de contacto reutilizable (Inicio y /contacto).
 *  El servicio se puede precargar con ?servicio=... en la URL.
 *  TODO: envío real en src/utils/submit.js */
export default function ContactForm({ title }) {
  const [params] = useSearchParams()
  const [form, setForm] = useState({ nombre: '', email: '', servicio: params.get('servicio') || '', mensaje: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const validate = () => {
    const er = {}
    if (!form.nombre.trim()) er.nombre = 'Ingresa tu nombre.'
    if (!isEmail(form.email)) er.email = 'Ingresa un correo válido.'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      await submitForm({
        subject: `Contacto web${form.servicio ? `: ${form.servicio}` : ''}`,
        fields: { Nombre: form.nombre, Correo: form.email, 'Servicio de interés': form.servicio, Mensaje: form.mensaje },
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="form glass" onSubmit={submit} noValidate>
      {title && <h3 className="form__title">{title}</h3>}
      <label>Nombre *
        <input required value={form.nombre} onChange={set('nombre')} aria-invalid={!!errors.nombre} autoComplete="name" />
        {errors.nombre && <span className="form__err">{errors.nombre}</span>}
      </label>
      <label>Correo electrónico *
        <input type="email" required value={form.email} onChange={set('email')} aria-invalid={!!errors.email} autoComplete="email" />
        {errors.email && <span className="form__err">{errors.email}</span>}
      </label>
      <label className="form__full">Servicio de interés
        <select value={form.servicio} onChange={set('servicio')}>
          <option value="">Selecciona una opción</option>
          {contactForm.services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className="form__full">Mensaje
        <textarea rows="5" value={form.mensaje} onChange={set('mensaje')} />
      </label>
      {status === 'sent' && <p className="form__status form__status--ok" role="status"><Icon name="check" size={16} /> Mensaje enviado. Te contactaremos a la brevedad.</p>}
      {status === 'error' && <p className="form__status form__status--error" role="alert">No pudimos enviar tu mensaje. Escríbenos a contacto@aquantalatam.com.</p>}
      <div className="form__actions">
        <PillButton type="submit" variant="accent" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando' : contactForm.submit}</PillButton>
        <span className="form__legal">{contactForm.legal} <SmartLink to={contactForm.legalLink.to}>{contactForm.legalLink.label}</SmartLink>.</span>
      </div>
    </form>
  )
}
