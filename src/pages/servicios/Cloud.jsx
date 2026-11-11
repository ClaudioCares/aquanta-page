import { cloud as d } from '../../data/content/index.js'
import Seo from '../../components/ui/Seo.jsx'
import { PageHero, Intro, SectionHead, CardGrid, LogoWall, Accordion, ClosingCta } from '../../components/sections/index.jsx'

/* 8. CLOUD */
export default function Cloud() {
  return (
    <>
      <Seo {...d.seo} />
      <PageHero {...d.hero} title={d.hero.h1} />

      {/* 8.2 Intro */}
      <Intro title={d.intro.title} paragraphs={d.intro.paragraphs} />

      {/* 8.3 Servicios cloud */}
      <section className="section section--deep">
        <div className="container">
          <SectionHead eyebrow={d.services.eyebrow} title={d.services.title} />
          <CardGrid items={d.services.items} cols={3} />
        </div>
      </section>

      {/* 8.4 Marcas */}
      <section className="section">
        <div className="container">
          <LogoWall items={d.brands} />
        </div>
      </section>

      {/* 8.5 Modelos de nube */}
      <section className="section section--deep">
        <div className="container">
          <SectionHead eyebrow={d.models.eyebrow} title={d.models.title} />
          <Accordion items={d.models.items} />
        </div>
      </section>

      {/* 8.6 Archiving */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={d.archiving.eyebrow} title={d.archiving.title} />
          <CardGrid items={d.archiving.items} cols={4} glass />
        </div>
      </section>

      {/* 8.7 Cierre */}
      <ClosingCta />
    </>
  )
}
