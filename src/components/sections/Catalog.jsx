import { useState } from 'react'
import Img from '../ui/Img.jsx'
import { SectionHead } from './index.jsx'

/** Catálogo de equipos con filtro por categoría (Energía). */
export default function Catalog({ data, id = 'catalogo', defaultCat = '' }) {
  const [cat, setCat] = useState(defaultCat)
  const items = data.items.filter((p) => !cat || p.cat === cat)
  const catLabel = (k) => data.categories.find((c) => c.key === k)?.label || ''
  const areas = [...new Set(data.categories.map((c) => c.area))]

  return (
    <section className="section section--deep" id={id}>
      <div className="container">
        <SectionHead eyebrow={data.eyebrow} title={data.title} lead={data.lead} />
        <div className="filters filters--grouped" data-reveal>
          <button className={!cat ? 'is-active' : ''} onClick={() => setCat('')}>{data.all}</button>
          {areas.map((a) => (
            <span key={a} className="filters__group">
              <small className="mono">{a}</small>
              {data.categories.filter((c) => c.area === a).map((c) => (
                <button key={c.key} className={cat === c.key ? 'is-active' : ''} onClick={() => setCat(c.key)}>{c.label}</button>
              ))}
            </span>
          ))}
        </div>
        <div className="catalog" key={cat}>
          {items.map((p, i) => (
            <article key={p.slug} className="product" data-reveal={Math.min((i % 4) + 1, 4)}>
              <div className="product__img"><Img src={p.img} alt={`${p.marca} ${p.titulo}`} loading="lazy" /></div>
              <div className="product__body">
                <div className="product__meta">
                  <span className="product__brand">{p.marca}</span>
                  <span className="product__cat">{catLabel(p.cat)}</span>
                </div>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
                {p.specs && <ul className="product__specs">{p.specs.map((s) => <li key={s}>{s}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
