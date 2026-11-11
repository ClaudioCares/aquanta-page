import { brand, footer } from '../../data/site.js'
import Logo from '../ui/Logo.jsx'
import SmartLink from '../ui/SmartLink.jsx'
import Icon from '../ui/Icon.jsx'
import { Seals } from '../sections/index.jsx'
import './layout.css'

/** 2.6 Footer: logo + bajada, columnas Empresa / Servicios / Legal, sellos ISO y copyright. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <Logo className="logo-lockup--lg" tagline={false} />
            <p className="footer__tagline">{brand.taglineShort}</p>
            <ul className="footer__contact">
              <li><a href={`mailto:${brand.email}`}><Icon name="mail" size={15} /> {brand.email}</a></li>
              <li><a href={`tel:${brand.phone.replace(/\s/g, '')}`}><Icon name="phone" size={15} /> {brand.phone}</a></li>
              <li><Icon name="globe" size={15} /> {brand.countries.join(' · ')}</li>
            </ul>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="footer__col">
              <span className="footer__col-title">{col.title}</span>
              <ul>
                {col.links.map((l) =>
                  l.href !== undefined ? (
                    // Enlaces externos pendientes (encuesta, canal de denuncias)
                    <li key={l.label}><a href={l.href} title={l.todo} onClick={(e) => l.href === '#' && e.preventDefault()}>{l.label}</a></li>
                  ) : (
                    <li key={l.label}><SmartLink to={l.to}>{l.label}</SmartLink></li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <Seals items={footer.seals} />
          <span>{footer.copyright}</span>
        </div>
      </div>
      <div className="footer__glow" aria-hidden="true" />
    </footer>
  )
}
