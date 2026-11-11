import { useState } from 'react'
import { certificaciones as d } from '../data/content/index.js'
import Seo from '../components/ui/Seo.jsx'
import Img from '../components/ui/Img.jsx'
import PillButton from '../components/ui/PillButton.jsx'
import slug from '../utils/slug.js'
import { PageHero, SectionHead, ClosingCta } from '../components/sections/index.jsx'

/* 11. CERTIFICACIONES: certificados ISO + insignias del equipo (filtrables por fabricante) */
export default function Certificaciones() {
  const [filter, setFilter] = useState('')
  const vendors = d.badges.items.map((b) => b.fabricante)
  const badges = d.badges.items
    .filter((b) => !filter || b.fabricante === filter)
    .flatMap((b) => b.certs.map((c) => ({ fabricante: b.fabricante, cert: c })))

  return (
    <>
      <Seo {...d.seo} />
      <PageHero title={d.hero.h1} text={d.hero.text} img={d.hero.img} video={d.hero.video} short />

      {/* 11.2 Certificados ISO */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={d.iso.eyebrow} title={d.iso.title} lead={d.iso.issuer} />
          <div className="certs">
            {d.iso.items.map((c, i) => (
              <article key={c.norma} className="cert" data-reveal={i + 1}>
                <div className="cert__seal"><Img src={c.seal} alt={c.norma} fallback={c.norma} /></div>
                <div>
                  <h3>{c.norma}</h3>
                  <dl>
                    <dt>Registro</dt><dd>{c.registro}</dd>
                    <dt>Titular</dt><dd>{c.titular}</dd>
                    <dt>Vigencia</dt><dd>{c.desde} al {c.hasta}</dd>
                    <dt>Emisión</dt><dd>{c.emision}</dd>
                  </dl>
                  {/* TODO: subir el certificado a /public/docs/ */}
                  <PillButton href={c.file} size="sm" icon="file">{d.iso.button}</PillButton>
                </div>
              </article>
            ))}
          </div>
          <p className="lead" style={{ marginTop: 28 }} data-reveal>{d.iso.scope}</p>
        </div>
      </section>

      {/* 11.3 Certificaciones del equipo */}
      <section className="section section--deep">
        <div className="container">
          <SectionHead eyebrow={d.badges.eyebrow} title={d.badges.title} />
          <div className="filters" data-reveal>
            <button className={!filter ? 'is-active' : ''} onClick={() => setFilter('')}>{d.badges.all}</button>
            {vendors.map((v) => (
              <button key={v} className={filter === v ? 'is-active' : ''} onClick={() => setFilter(v)}>{v}</button>
            ))}
          </div>
          <div className="badges" key={filter}>
            {badges.map((b, i) => (
              <article key={b.fabricante + b.cert} className="badge" data-reveal={Math.min((i % 4) + 1, 4)}>
                <div className="badge__img"><Img src={`/logo/certs/${slug(b.fabricante)}-${slug(b.cert)}.webp`} alt="" loading="lazy" /></div>
                <small>{b.fabricante}</small>
                <span>{b.cert}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11.4 Cierre */}
      <ClosingCta />
    </>
  )
}
