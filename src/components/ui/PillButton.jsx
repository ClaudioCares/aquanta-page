import SmartLink from './SmartLink.jsx'
import Icon from './Icon.jsx'
import './ui.css'

/** Botón píldora con círculo de flecha (estilo principal del sitio).
 *  variant: 'dark' | 'accent' | 'ghost'   size: 'md' | 'sm' */
export default function PillButton({ to, href, onClick, type, children, variant = 'dark', size = 'md', icon = 'arrow-right', className = '' }) {
  const cls = `pill pill--${variant} pill--${size} ${className}`
  const inner = (
    <>
      <span className="pill__label">{children}</span>
      <span className="pill__icon"><Icon name={icon} size={size === 'sm' ? 14 : 16} stroke={2} /></span>
    </>
  )
  if (to || href) return <SmartLink to={to} href={href} className={cls}>{inner}</SmartLink>
  return <button type={type || 'button'} onClick={onClick} className={cls}>{inner}</button>
}
