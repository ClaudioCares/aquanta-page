import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { nav, megaMenus, brand } from '../../data/site.js'
import Logo from '../ui/Logo.jsx'
import Icon from '../ui/Icon.jsx'
import SmartLink from '../ui/SmartLink.jsx'
import PillButton from '../ui/PillButton.jsx'
import MegaMenu from './MegaMenu.jsx'
import './layout.css'

/** 2.1 Header: logo con bajada, menú principal (Nosotros, Servicios, Club, Hablemos)
 *  y botón destacado "Portal Clientes". */
export default function Header() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(null) // clave del mega menú abierto
  const [mobile, setMobile] = useState(false)
  const [acc, setAcc] = useState(null) // acordeón móvil
  const closeTimer = useRef()
  const { pathname, hash } = useLocation()

  // Transparente arriba, vidrio al bajar; se oculta al bajar y aparece al subir
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > last && y > 240)
      last = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menús al navegar
  useEffect(() => {
    setOpen(null)
    setMobile(false)
  }, [pathname, hash])

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
  }, [mobile])

  const enter = (key) => {
    clearTimeout(closeTimer.current)
    setOpen(key)
  }
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 160)
  }

  // TODO: Portal de Clientes queda fuera de esta etapa; el botón apunta a "#"
  const portal = (e) => { if (brand.portal.to === '#') e.preventDefault(); else { e.preventDefault(); navigate(brand.portal.to); setMobile(false) } }

  const cls = ['header', scrolled && 'is-scrolled', hidden && !open && !mobile && 'is-hidden', (open || mobile) && 'is-solid']
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <header className={cls} onMouseLeave={leave}>
        <div className="header__inner">
          <Link to="/" className="header__logo" aria-label="Inicio AQuanta">
            <Logo />
          </Link>

          <nav className="header__nav" aria-label="Principal">
            {nav.map((item) =>
              item.mega ? (
                <button
                  key={item.label}
                  className={`header__link ${open === item.mega ? 'is-open' : ''}`}
                  onMouseEnter={() => enter(item.mega)}
                  onFocus={() => enter(item.mega)}
                  onClick={() => setOpen(open === item.mega ? null : item.mega)}
                  aria-expanded={open === item.mega}
                >
                  {item.label}
                  <Icon name="chevron-down" size={14} />
                </button>
              ) : (
                <SmartLink key={item.label} to={item.to} className="header__link" onMouseEnter={() => enter(null)}>
                  {item.label}
                </SmartLink>
              )
            )}
          </nav>

          <div className="header__actions">
            <a href={brand.portal.to} onClick={portal} className="pill pill--accent pill--sm header__cta" title="Portal de Clientes">
              <span className="pill__label">{brand.portal.label}</span>
              <span className="pill__icon"><Icon name="lock" size={14} stroke={2} /></span>
            </a>
            <button className="header__burger round-btn" onClick={() => setMobile(!mobile)} aria-label="Menú">
              <Icon name={mobile ? 'close' : 'menu'} />
            </button>
          </div>
        </div>

        {Object.entries(megaMenus).map(([key, data]) => (
          <MegaMenu key={key} data={data} open={open === key} onEnter={() => enter(key)} />
        ))}
      </header>

      <div className={`mega-backdrop ${open ? 'is-on' : ''}`} onMouseEnter={leave} aria-hidden="true" />

      {/* -------- Menú móvil -------- */}
      <div className={`mobile-menu ${mobile ? 'is-open' : ''}`}>
        <div className="mobile-menu__body">
          {nav.map((item) =>
            item.mega ? (
              <div key={item.label} className={`mobile-menu__group ${acc === item.mega ? 'is-open' : ''}`}>
                <button className="mobile-menu__link" onClick={() => setAcc(acc === item.mega ? null : item.mega)}>
                  {item.label}
                  <Icon name="chevron-down" />
                </button>
                <div className="mobile-menu__sub">
                  {[...(megaMenus[item.mega].featured || []), ...megaMenus[item.mega].items].map((s) => (
                    <SmartLink key={s.title} to={s.to}>{s.title}</SmartLink>
                  ))}
                  {megaMenus[item.mega].more && (
                    <SmartLink to={megaMenus[item.mega].more.to} className="link-arrow">
                      {megaMenus[item.mega].more.label} <Icon name="arrow-right" size={14} />
                    </SmartLink>
                  )}
                </div>
              </div>
            ) : (
              <SmartLink key={item.label} to={item.to} className="mobile-menu__link">
                {item.label}
              </SmartLink>
            )
          )}
        </div>
        <div className="mobile-menu__foot">
          <a href={brand.portal.to} onClick={portal} className="pill pill--accent" title="Portal de Clientes">
            <span className="pill__label">{brand.portal.label}</span>
            <span className="pill__icon"><Icon name="lock" size={16} stroke={2} /></span>
          </a>
          <PillButton to="/contacto" size="sm">Hablemos</PillButton>
          <span className="mono">{brand.countries.join(' · ')}</span>
        </div>
      </div>
    </>
  )
}
