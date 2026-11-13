import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { brand } from '../../data/site.js'
import './ui.css'

/** Logo AQuanta con bajada "INTEGRACIÓN SISTÉMICA DE TECNOLOGÍA".
 *  Si existe /public/logo/logo.png lo usa; si no, isologo + texto.
 *  Con `swap` (encabezado), dentro de la línea de Energía el logo cambia con un barrido de luz al
 *  de AQuanta Energía ("Energía · Innovación · Respaldo") y vuelve al normal al salir. */
export default function Logo({ className = '', tagline = true, swap = false }) {
  const [failed, setFailed] = useState(false)
  const { pathname } = useLocation()
  const energia = swap && pathname.startsWith('/servicios/energia')
  return (
    <span className={`logo-lockup ${className} ${energia ? 'is-energia' : ''}`}>
      {!failed ? (
        <span className="logo-swap">
          <img src={brand.logoLight} alt={energia ? '' : brand.name} className="logo logo--base" onError={() => setFailed(true)} />
          {swap && <img src={brand.logoEnergia} alt={energia ? 'AQuanta Energía' : ''} className="logo logo--energia" />}
        </span>
      ) : (
        <span className="logo-text">
          <img src={brand.isologo} alt="" className="logo-text__mark" />
          <span>AQ<span className="logo-text__rest">uanta</span></span>
        </span>
      )}
      {tagline && <span className="logo-tagline mono">{brand.tagline}</span>}
    </span>
  )
}
