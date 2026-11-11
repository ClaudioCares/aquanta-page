import { ciberseguridad as d } from '../../data/content/index.js'
import Seo from '../../components/ui/Seo.jsx'
import { PageHero, Intro, SectionHead, CardGrid, LogoWall, Accordion, Steps, Team, ClosingCta } from '../../components/sections/index.jsx'

/* 6. CIBERSEGURIDAD Y ANÁLISIS */
export default function Ciberseguridad() {
  return (
    <>
      <Seo {...d.seo} />
      <PageHero {...d.hero} title={d.hero.h1} />

      {/* 6.2 Intro */}
      <Intro title={d.intro.title} paragraphs={d.intro.paragraphs} />

      {/* 6.3 Soluciones */}
      <section className="section section--deep" id={d.solutions.id}>
        <div className="container">
          <SectionHead eyebrow={d.solutions.eyebrow} title={d.solutions.title} />
          <CardGrid items={d.solutions.items} cols={4} />
        </div>
      </section>

      {/* 6.4 Marcas */}
      <section className="section">
        <div className="container">
          <LogoWall items={d.brands} />
        </div>
      </section>

      {/* 6.6 Metodología */}
      <section className="section section--deep" id={d.methodology.id}>
        <div className="container">
          <SectionHead eyebrow={d.methodology.eyebrow} title={d.methodology.title} />
          <Steps items={d.methodology.steps} cols={3} />
        </div>
      </section>

      {/* 6.5 Preguntas clave */}
      <section className="section" id={d.faq.id}>
        <div className="container">
          <SectionHead eyebrow={d.faq.eyebrow} title={d.faq.title} />
          <Accordion items={d.faq.items} />
        </div>
      </section>

      {/* 6.7 Equipo */}
      <section className="section section--deep" id={d.team.id}>
        <div className="container">
          <SectionHead eyebrow={d.team.eyebrow} title={d.team.title} />
          <Team people={d.team.people} />
        </div>
      </section>

      {/* 6.8 Cierre */}
      <ClosingCta />
    </>
  )
}
