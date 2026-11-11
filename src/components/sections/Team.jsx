import Icon from '../ui/Icon.jsx'
import Img from '../ui/Img.jsx'
import slug from '../../utils/slug.js'

/* ---------- Equipo ----------
   lineup: recortes sin fondo de pie sobre una base luminosa (fotos en /img/equipo/<slug>.webp).
   roster: solo datos (nombre, cargo y correo) para quienes no tienen foto. */

const initials = (name) => name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

function Silhouette({ name }) {
  return (
    <span className="figure__ph" aria-label={name}>
      <svg viewBox="0 0 120 160" width="140" height="186" aria-hidden="true">
        <defs>
          <linearGradient id="sil" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="rgba(255,255,255,0.16)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="46" r="30" fill="url(#sil)" />
        <path d="M8 160c0-40 24-62 52-62s52 22 52 62z" fill="url(#sil)" />
      </svg>
      <b>{initials(name)}</b>
    </span>
  )
}

export function Lineup({ people = [], title, compact = false }) {
  return (
    <div className={`lineup ${compact ? 'lineup--compact' : ''}`}>
      {title && <h3 className="team__group-title" data-reveal>{title}</h3>}
      <div className="lineup__row">
        {people.map((p, i) => (
          <article key={p.correo || p.nombre} className="figure" data-reveal={Math.min((i % 4) + 1, 4)}>
            <div className="figure__img">
              <Img src={`/img/equipo/${slug(p.nombre)}.webp`} alt={p.nombre} fallback={<Silhouette name={p.nombre} />} loading="lazy" />
            </div>
            <div className="figure__cap">
              <h4>{p.nombre}</h4>
              <p>{p.cargo}</p>
              {p.correo && <a href={`mailto:${p.correo}`} aria-label={`Escribir a ${p.nombre}`}><Icon name="mail" size={14} /> {p.correo}</a>}
            </div>
          </article>
        ))}
      </div>
      <div className="lineup__floor" aria-hidden="true" />
    </div>
  )
}

export function Roster({ people = [], title }) {
  return (
    <div className="roster">
      {title && <h3 className="team__group-title" data-reveal>{title}</h3>}
      <ul className="roster__list">
        {people.map((p, i) => (
          <li key={p.correo || p.nombre} className="roster__item" data-reveal={Math.min((i % 4) + 1, 4)}>
            <span className="roster__ini mono">{initials(p.nombre)}</span>
            <span className="roster__who"><b>{p.nombre}</b><small>{p.cargo}</small></span>
            {p.correo && <a className="roster__mail" href={`mailto:${p.correo}`}><Icon name="mail" size={14} /><span>{p.correo}</span></a>}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** groups: [{ title, people, photos: true|false }] */
export default function Team({ people, groups, photos = true }) {
  if (groups) {
    return groups.map((g) => (g.photos === false ? <Roster key={g.title} title={g.title} people={g.people} /> : <Lineup key={g.title} title={g.title} people={g.people} />))
  }
  return photos ? <Lineup people={people} /> : <Roster people={people} />
}
