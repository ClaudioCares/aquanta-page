import { useEffect, useState } from 'react'

/**
 * Entrada a la línea de Energía: un telón oscuro con el logo AQuanta Energía que "se enciende"
 * (barrido de luz + línea de energía) y luego vuela hacia la esquina del encabezado, donde el logo
 * del sitio queda cambiado por el de Energía (ver Logo.jsx).
 * Se muestra una vez por sesión de navegador y no aparece si la persona pidió menos animaciones.
 */
const KEY = 'aq-energia-intro'
const DURATION = 2600 // ms; debe calzar con la animación .eintro en pages.css

export default function EnergiaIntro() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    try { return !sessionStorage.getItem(KEY) } catch { return true }
  })

  useEffect(() => {
    if (!show) return
    try { sessionStorage.setItem(KEY, '1') } catch { /* sin almacenamiento: se mostrará de nuevo */ }
    const t = setTimeout(() => setShow(false), DURATION)
    return () => clearTimeout(t)
  }, [show])

  if (!show) return null
  return (
    <div className="eintro" aria-hidden="true">
      <div className="eintro__logo">
        <img src="/logo/logo-energia.png" alt="" />
        <span className="eintro__sweep" />
      </div>
      <span className="eintro__line" />
    </div>
  )
}
