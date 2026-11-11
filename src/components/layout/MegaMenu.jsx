import SmartLink from '../ui/SmartLink.jsx'
import Icon from '../ui/Icon.jsx'

/** Panel desplegable del header.
 *  - simple: lista corta de enlaces (Nosotros).
 *  - completo: destacados con foto | grilla de ítems | enlace "ver todos" (Servicios). */
export default function MegaMenu({ data, open, onEnter }) {
  if (data.simple) {
    return (
      <div className={`mega mega--simple ${open ? 'is-open' : ''}`} onMouseEnter={onEnter} aria-hidden={!open}>
        <ul>
          {data.items.map((it) => (
            <li key={it.title}>
              <SmartLink to={it.to} className="mega__row" tabIndex={open ? 0 : -1}>
                <span className="mega__row-icon"><Icon name={it.icon} size={18} /></span>
                <span>{it.title}</span>
                <Icon name="arrow-right" size={14} className="mega__row-arrow" />
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className={`mega ${data.featured ? '' : 'mega--grid'} ${open ? 'is-open' : ''}`} onMouseEnter={onEnter} aria-hidden={!open}>
      {data.featured && <div className="mega__featured">
        {data.featured.map((f) => (
          <SmartLink key={f.title} to={f.to} className="mega__feat" tabIndex={open ? 0 : -1}>
            <img src={f.img} alt="" loading="lazy" />
            <span className="mega__feat-title">
              {f.title} <Icon name="arrow-right" size={14} />
            </span>
          </SmartLink>
        ))}
      </div>}

      <div className="mega__grid" style={data.cols ? { gridTemplateColumns: `repeat(${data.cols}, 1fr)` } : undefined}>
        {data.items.map((it) => (
          <SmartLink key={it.title} to={it.to} className="mega__tile" tabIndex={open ? 0 : -1}>
            {it.badge && <em className="mega__badge">{it.badge}</em>}
            {it.img ? (
              <img src={it.img} alt="" loading="lazy" className="mega__tile-img" />
            ) : (
              <span className="mega__tile-icon"><Icon name={it.icon} size={26} /></span>
            )}
            <span className="mega__tile-title">{it.title}</span>
          </SmartLink>
        ))}
        {data.more && (
          <SmartLink to={data.more.to} className="mega__tile mega__tile--more" tabIndex={open ? 0 : -1}>
            <span>{data.more.label}</span>
            <span className="pill__icon"><Icon name="arrow-right" size={14} stroke={2} /></span>
          </SmartLink>
        )}
      </div>
    </div>
  )
}
