import { useMemo } from 'react'
import dots from '../../data/worldDots.js'

/**
 * Mapamundi de puntos con las oficinas marcadas.
 * points: [{ key, label, geo: [lon, lat] }]; active = key resaltada; onActive(key|null) al pasar el mouse.
 * La grilla de puntos se genera con scripts/build-world-dots.mjs.
 */
const PAD = 2 // margen en grados alrededor de la grilla
const W = 360, H = (dots.rows - 1) * dots.step + PAD * 2
const px = (lon) => lon + 180
const py = (lat) => dots.latTop - lat + PAD

function path(list) {
  // cada punto es un círculo dibujado como arco dentro de un único <path> (miles de nodos menos en el DOM)
  let d = ''
  const r = 0.62
  for (let i = 0; i < list.length; i += 2) {
    const c = list[i], row = list[i + 1]
    const x = c * dots.step + (row % 2 ? dots.step / 2 : 0), y = row * dots.step + PAD
    d += `M${x - r} ${y}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`
  }
  return d
}

export default function WorldMap({ points = [], active, onActive }) {
  const land = useMemo(() => path(dots.land), [])
  const ours = useMemo(() => path(dots.ours), [])
  return (
    <div className="wmap" data-reveal>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Mapa con presencia en ${points.map((p) => p.label).join(', ')}`}>
        <path d={land} className="wmap__land" />
        <path d={ours} className="wmap__ours" />
      </svg>
      {points.map((p) => (
        <button
          key={p.key}
          type="button"
          className={`wmap__pin ${active === p.key ? 'is-active' : ''}`}
          style={{ left: `${(px(p.geo[0]) / W) * 100}%`, top: `${(py(p.geo[1]) / H) * 100}%` }}
          onMouseEnter={() => onActive?.(p.key)}
          onMouseLeave={() => onActive?.(null)}
          onFocus={() => onActive?.(p.key)}
          onBlur={() => onActive?.(null)}
          aria-label={p.label}
        >
          <span className="wmap__pulse" aria-hidden="true" />
          <span className="wmap__dot" aria-hidden="true" />
          <span className="wmap__label">{p.label}</span>
        </button>
      ))}
    </div>
  )
}
