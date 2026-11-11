import { club as d } from '../data/content/index.js'
import Seo from '../components/ui/Seo.jsx'
import { PageHero, Intro, SectionHead, Gallery } from '../components/sections/index.jsx'

/* 13. CLUB DE INGENIEROS 2026 */
export default function Club() {
  return (
    <>
      <Seo {...d.seo} />
      <PageHero logo={d.hero.logo} eyebrow={d.hero.eyebrow} title={d.hero.h1} img={d.hero.img} video={d.hero.video} />

      {/* 13.2 Crónica */}
      <Intro title={d.chronicle.title} paragraphs={d.chronicle.paragraphs} />

      {/* 13.3 Expositores */}
      <section className="section section--deep">
        <div className="container">
          <SectionHead eyebrow={d.speakers.eyebrow} title={d.speakers.title} />
          <ul className="speakers" data-reveal>
            {d.speakers.items.map((s) => (
              <li key={s.nombre}>
                <strong>{s.nombre}</strong>
                <span>{s.empresa}</span>
                {s.partner && <small>con {s.partner}</small>}
              </li>
            ))}
          </ul>
          <p className="lead" style={{ marginTop: 26 }} data-reveal>{d.speakers.text}</p>
        </div>
      </section>

      {/* 13.4 Banda de cierre */}
      <section className="band">
        <div className="container" data-reveal>
          {d.band.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      {/* 13.5 Galería */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={d.gallery.eyebrow} title={d.gallery.title} />
          <Gallery items={d.gallery.items} />
        </div>
      </section>
    </>
  )
}
