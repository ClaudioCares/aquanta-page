import { home } from '../../data/content/index.js'
import PillButton from '../ui/PillButton.jsx'
import Img from '../ui/Img.jsx'
import './home.css'

/** 3.1 Hero de la portada: antetítulo, H1, texto, lema y dos botones.
 *  Reutiliza el fondo con zoom lento (Ken Burns) del hero de la plantilla. */
export default function Hero() {
  const h = home.hero
  return (
    <section className="hero">
      <div className="hero__slide is-active">
        <div className="hero__media">
          {h.video ? (
            <video src={h.video} poster={h.img} autoPlay muted loop playsInline aria-hidden="true" />
          ) : (
            <Img src={h.img} alt="" fetchpriority="high" />
          )}
        </div>
        <div className="hero__shade" />
        <div className="hero__content">
          <span className="hero__label eyebrow">{h.eyebrow}</span>
          <h1 className="hero__title">{h.h1}</h1>
          <p className="hero__desc">{h.text}</p>
          {h.motto && <span className="hero__motto mono">{h.motto}</span>}
          <div className="hero__cta">
            {h.buttons.map((b) => (
              <PillButton key={b.label} to={b.to} variant={b.variant}>{b.label}</PillButton>
            ))}
          </div>
        </div>
      </div>
      <div className="hero__scroll mono" aria-hidden="true">
        <span />
        Scroll
      </div>
    </section>
  )
}
