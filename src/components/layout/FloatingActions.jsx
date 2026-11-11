import { useEffect, useState } from 'react'
import { brand } from '../../data/site.js'
import Icon from '../ui/Icon.jsx'
import SmartLink from '../ui/SmartLink.jsx'
import { scrollToTarget } from '../../hooks/useSmoothScroll.js'

/** Botones flotantes: contacto (WhatsApp o /contacto) y volver arriba. */
export default function FloatingActions() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const contact = brand.whatsapp ? `https://wa.me/${brand.whatsapp}` : '/contacto'
  return (
    <div className="floating">
      <SmartLink to={contact} className="floating__btn floating__btn--accent" aria-label="Contacto">
        <Icon name="chat" size={19} />
      </SmartLink>
      <button className={`floating__btn ${show ? '' : 'is-hidden'}`} onClick={() => scrollToTarget(0)} aria-label="Volver arriba">
        <Icon name="arrow-up" size={18} />
      </button>
    </div>
  )
}
