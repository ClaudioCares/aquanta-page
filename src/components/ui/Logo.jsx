import { useState } from 'react'
import { brand } from '../../data/site.js'
import './ui.css'

/** Logo AQuanta con bajada "INTEGRACIÓN SISTÉMICA DE TECNOLOGÍA".
 *  Si existe /public/logo/logo.png lo usa; si no, isologo + texto. */
export default function Logo({ className = '', tagline = true }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className={`logo-lockup ${className}`}>
      {!failed ? (
        <img src={brand.logoLight} alt={brand.name} className="logo" onError={() => setFailed(true)} />
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
