import { useState } from 'react'
import { seals as sealsData, closingCta, offices as officesData, logoExt } from '../../data/site.js'
import Icon from '../ui/Icon.jsx'
import Img from '../ui/Img.jsx'
import SmartLink from '../ui/SmartLink.jsx'
import PillButton from '../ui/PillButton.jsx'
import slug from '../../utils/slug.js'
import WorldMap from './WorldMap.jsx'
import './sections.css'

/* ---------- Encabezado de sección (etiqueta + título + bajada) ---------- */
export function SectionHead({ eyebrow, title, lead, center = false, row = false, as: Tag = 'h2', children }) {
  const cls = ['sec-head', center && 'sec-head--center', row && 'sec-head--row'].filter(Boolean).join(' ')
  return (
    <div className={cls} data-reveal>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <Tag className="h2" style={{ marginTop: eyebrow ? 10 : 0 }}>{title}</Tag>}
        {lead && <p className="lead">{lead}</p>}
      </div>
      {children}
    </div>
  )
}

/* ---------- 2.2 Sellos ISO 9001, ISO 27001, ITIL ---------- */
export function Seals({ items = sealsData, size = '', className = '' }) {
  return (
    <div className={`seals ${size ? `seals--${size}` : ''} ${className}`}>
      {items.map((s) => (
        <span key={s.name} className="seals__item" title={s.name}>
          <Img src={s.img} alt={s.name} fallback={s.name} />
        </span>
      ))}
    </div>
  )
}

/* ---------- Hero de páginas interiores ---------- */
export function PageHero({ eyebrow, title, text, img, video, logo, anchors, seals, actions, short = false, light = false, children }) {
  return (
    <section className={`page-hero ${short ? 'page-hero--short' : ''} ${light ? 'page-hero--light' : ''}`}>
      {video ? (
        <video className="page-hero__img" src={video} poster={img} autoPlay muted loop playsInline aria-hidden="true" />
      ) : (
        img && <Img src={img} alt="" className="page-hero__img page-hero__img--zoom" phClassName="page-hero__img" fetchpriority="high" />
      )}
      <div className="page-hero__shade" />
      <div className="container page-hero__inner">
        {logo && <Img src={logo} alt="" className="page-hero__logo" phClassName="page-hero__logo" />}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {text && <p className="page-hero__lead">{text}</p>}
        {actions && <div className="page-hero__actions">{actions}</div>}
        {anchors && anchors.length > 0 && (
          <nav className="page-hero__anchors" aria-label="Secciones de la página">
            {anchors.map((a) => <SmartLink key={a.to} to={a.to}>{a.label}</SmartLink>)}
          </nav>
        )}
        {seals && <Seals className="page-hero__seals" />}
        {children}
      </div>
    </section>
  )
}

/* ---------- Intro: título a la izquierda, párrafos a la derecha ---------- */
export function Intro({ title, paragraphs = [], quote, eyebrow, id, deep = false, children }) {
  return (
    <section className={`section ${deep ? 'section--deep' : ''}`} id={id}>
      <div className="container intro__grid">
        <div data-reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="h2" style={{ marginTop: eyebrow ? 10 : 0 }}>{title}</h2>
        </div>
        <div className="intro__text" data-reveal="2">
          {quote && <blockquote className="intro__quote">{quote}</blockquote>}
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          {children}
        </div>
      </div>
    </section>
  )
}

/* ---------- Tarjetas (6 del portafolio, listas de ítems, equipos, etc.) ---------- */
export function CardGrid({ items = [], cols = 3, glass = false, className = '' }) {
  return (
    <div className={`cards ${glass ? 'cards--glass' : ''} ${className}`} style={{ '--cols': cols }}>
      {items.map((it, i) => {
        const inner = (
          <>
            {it.img && <Img src={it.img} alt="" className="card__img" phClassName="card__img" loading="lazy" />}
            {it.icon && <span className="card__icon"><Icon name={it.icon} size={20} /></span>}
            {it.n && <span className="card__num">{it.n}</span>}
            {it.subtitulo && <span className="card__sub">{it.subtitulo}</span>}
            <h3>{it.titulo}</h3>
            {it.texto && <p>{it.texto}</p>}
            {it.items && <ul className="dot-list">{it.items.map((li) => <li key={li}>{li}</li>)}</ul>}
            {it.datos && (
              <dl className="card__data">
                {it.datos.map(([k, v]) => <div key={k}><dt><small>{k}</small></dt><dd><strong>{v}</strong></dd></div>)}
              </dl>
            )}
            {it.destacado && <span className="card__hl">{it.destacado}</span>}
            {it.link && (<><span className="card__spacer" /><span className="link-arrow">Más información <Icon name="arrow-right" size={13} /></span></>)}
          </>
        )
        const reveal = Math.min((i % cols) + 1, 4)
        return it.link ? (
          <SmartLink key={it.titulo} to={it.link} className="card card--link" data-reveal={reveal}>{inner}</SmartLink>
        ) : (
          <article key={it.titulo} className="card" data-reveal={reveal}>{inner}</article>
        )
      })}
    </div>
  )
}

/* ---------- Acordeón (FAQ, HCI, modelos de nube) ---------- */
export function Accordion({ items = [], firstOpen = true }) {
  const [open, setOpen] = useState(firstOpen ? 0 : null)
  return (
    <div className="acc" data-reveal>
      {items.map((it, i) => {
        const q = it.q || it.titulo
        const a = it.a || it.texto
        const isOpen = open === i
        return (
          <div key={q} className={`acc__item ${isOpen ? 'is-open' : ''}`}>
            <button className="acc__btn" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
              <span>{q}</span>
              <span className="round-btn"><Icon name="chevron-down" size={16} /></span>
            </button>
            <div className="acc__panel">
              <div>
                <div className="acc__body">
                  {a}
                  {it.link && <> <SmartLink to={it.link.to}>{it.link.label}</SmartLink>.</>}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ---------- Pasos / metodología (línea de tiempo) ---------- */
export function Steps({ items = [], vertical = false, imgs = false, cols }) {
  const n = cols || items.length
  const wrap = n < items.length
  return (
    <div className={`steps ${vertical ? 'steps--vertical' : ''} ${wrap ? 'steps--wrap' : ''}`} style={{ '--cols': n }}>
      {items.map((s, i) => (
        <div key={s.titulo} className="step" data-reveal={Math.min(i + 1, 4)}>
          <span className="step__n">{String(s.n).padStart(2, '0')}</span>
          <div>
            {s.subtitulo && <span className="step__sub">{s.subtitulo}</span>}
            <h3>{s.titulo}</h3>
            <p>{s.texto}</p>
            {s.sub && <ul className="step__chips">{s.sub.map((c) => <li key={c}>{c}</li>)}</ul>}
            {imgs && <div className="step__img"><Img src={`/img/metodologia-${s.n}.jpg`} alt="" loading="lazy" /></div>}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ---------- Muro de logos (marcas, clientes, RSE) ----------
   Busca /logo/<folder>/<slug>.png. Si no existe muestra el nombre (placeholder). */
export function LogoWall({ items = [], folder = 'marcas', small = false }) {
  return (
    <div className={`logowall ${small ? 'logowall--sm' : ''}`} data-reveal>
      {items.map((name) => (
        <span key={name} className="logowall__tile" title={name}>
          <Img src={`/logo/${folder}/${slug(name)}.${logoExt[name] || 'png'}`} alt={name} fallback={<span className="logowall__name">{name}</span>} loading="lazy" />
        </span>
      ))}
    </div>
  )
}

/* ---------- Grilla de clientes ----------
   Retícula de líneas finas con los logos en blanco. Un foco de luz sigue al cursor por las líneas
   y la celda bajo el mouse muestra el logo original a color.
   Los logos en blanco se generan con scripts/build-client-logos.mjs (carpeta mono/). */
export function ClientGrid({ items = [], folder = 'clientes' }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  // columnas: la cantidad que deja filas completas; si ninguna calza, 6 y se rellena la última fila con celdas vacías
  const cols = [6, 7, 5].find((c) => items.length % c === 0) || 6
  const blanks = (cols - (items.length % cols)) % cols
  return (
    <div className="cgrid" style={{ '--cols': cols }} onMouseMove={move} data-reveal>
      {items.map((name) => (
        <div key={name} className="cgrid__cell" title={name}>
          <Img src={`/logo/${folder}/mono/${slug(name)}.webp`} alt={name} className="cgrid__mono" phClassName="cgrid__ph" fallback={<span className="cgrid__name">{name}</span>} loading="lazy" />
          <img src={`/logo/${folder}/${slug(name)}.${logoExt[name] || 'png'}`} alt="" className="cgrid__color" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} />
        </div>
      ))}
      {Array.from({ length: blanks }, (_, i) => <div key={`blank-${i}`} className="cgrid__cell cgrid__cell--blank" aria-hidden="true" />)}
    </div>
  )
}

/* ---------- Equipo (ver Team.jsx: recortes sin fondo o lista de datos) ---------- */
export { default as Team, Lineup, Roster } from './Team.jsx'

/* ---------- 2.3 Bloque de cierre "Hablemos" (o uno propio) ---------- */
export function ClosingCta({ data = closingCta }) {
  return (
    <section className="closing section">
      <div className="container closing__inner">
        {data.eyebrow && <span className="eyebrow" data-reveal>{data.eyebrow}</span>}
        <h2 className="h2" data-reveal="2">{data.title}</h2>
        {data.text && <p className="lead" data-reveal="3">{data.text}</p>}
        {data.steps && (
          <div className="closing__steps" data-reveal="3">
            {data.steps.map((s, i) => (
              <span key={s} style={{ display: 'contents' }}>
                {i > 0 && <span className="closing__arrow"><Icon name="arrow-right" size={20} /></span>}
                <span className="closing__step"><b>{i + 1}</b>{s}</span>
              </span>
            ))}
          </div>
        )}
        <div className="closing__btn" data-reveal="4">
          <PillButton to={data.button.to} variant="accent">{data.button.label}</PillButton>
        </div>
      </div>
    </section>
  )
}

/* ---------- 2.4 Oficinas ---------- */
export function Offices({ data = officesData, deep = false }) {
  // país resaltado: el mapa y las tarjetas se iluminan juntos al pasar el mouse.
  // En las tarjetas el resaltado va en data-active y no en la clase: si React reescribiera la clase,
  // borraría .is-visible (la pone la animación de aparición) y la tarjeta quedaría invisible
  const [active, setActive] = useState(null)
  return (
    <section className={`section ${deep ? 'section--deep' : ''}`} id="oficinas">
      <div className="container">
        <SectionHead title={data.title} lead={data.text} />
        <WorldMap points={data.items.filter((o) => o.geo).map((o) => ({ key: o.country, label: `${o.city}, ${o.country}`, geo: o.geo }))} active={active} onActive={setActive} />
        <div className="offices">
          {data.items.map((o, i) => (
            <article key={o.country} className="office" data-active={active === o.country ? '' : undefined} data-reveal={i + 1} onMouseEnter={() => setActive(o.country)} onMouseLeave={() => setActive(null)}>
              <h3 className="office__country"><Icon name="pin" size={18} /> {o.country}</h3>
              <span className="office__company">{o.company}</span>
              <p>{o.address}</p>
              {o.phone && <a href={`tel:${o.phone.replace(/\s/g, '')}`}><Icon name="phone" size={15} /> {o.phone}</a>}
              <a href={`mailto:${o.email}`}><Icon name="mail" size={15} /> {o.email}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Tabla simple ---------- */
export function DataTable({ head = [], rows = [] }) {
  return (
    <div className="dtable-wrap" data-reveal>
      <table className="dtable">
        <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  )
}

/* ---------- Comparador por tamaño (data center modular) ---------- */
export function Compare({ items = [] }) {
  return (
    <div className="compare">
      {items.map((it, i) => (
        <article key={it.titulo} className="compare__item" data-reveal={i + 1}>
          {it.img && <div className="compare__img"><Img src={it.img} alt="" loading="lazy" /></div>}
          <h3>{it.titulo}</h3>
          <p>{it.texto}</p>
        </article>
      ))}
    </div>
  )
}

/* ---------- Galería con pie de foto ---------- */
export function Gallery({ items = [] }) {
  return (
    <div className="gallery">
      {items.map((g, i) => (
        <figure key={g.img} data-reveal={Math.min((i % 3) + 1, 4)}>
          <div className="gallery__img"><Img src={g.img} alt={g.caption} loading="lazy" /></div>
          <figcaption>{g.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}
