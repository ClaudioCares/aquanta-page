import { serviciosProfesionales as d } from '../../data/content/index.js'
import Seo from '../../components/ui/Seo.jsx'
import { PageHero, Intro, SectionHead, CardGrid, LogoWall, Accordion, Steps, Team, ClosingCta } from '../../components/sections/index.jsx'

/* 9. SERVICIOS PROFESIONALES + MESA DE SERVICIOS 24/7 */
export default function ServiciosProfesionales() {
  return (
    <>
      <Seo {...d.seo} />
      <PageHero {...d.hero} title={d.hero.h1} />

      {/* 9.2 Intro */}
      <Intro title={d.intro.title} paragraphs={d.intro.paragraphs} />

      {/* 9.3 Pilares de cobertura 24/7 */}
      <section className="section section--deep" id={d.pillars.id}>
        <div className="container">
          <SectionHead eyebrow={d.pillars.eyebrow} title={d.pillars.title} lead={d.pillars.lead} />
          <CardGrid items={d.pillars.items} cols={4} />
        </div>
      </section>

      {/* 9.4 Marcas */}
      <section className="section">
        <div className="container">
          <LogoWall items={d.brands} />
        </div>
      </section>

      {/* 9.5 Metodología */}
      <section className="section section--deep" id={d.methodology.id}>
        <div className="container">
          <SectionHead eyebrow={d.methodology.eyebrow} title={d.methodology.title} />
          <Steps items={d.methodology.steps} vertical imgs />
        </div>
      </section>

      {/* 9.6 Preguntas frecuentes */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={d.faq.eyebrow} title={d.faq.title} />
          <Accordion items={d.faq.items} />
        </div>
      </section>

      {/* 9.7 Equipo de Arquitectura e Innovación */}
      <section className="section section--deep" id={d.team.id}>
        <div className="container">
          <SectionHead eyebrow={d.team.eyebrow} title={d.team.title} />
          <Team groups={d.team.groups} />
        </div>
      </section>

      {/* 9.8 Mesa de Servicios 24/7 */}
      <section className="section section--glow" id={d.desk.id}>
        <div className="container">
          <SectionHead eyebrow={d.desk.eyebrow} title={d.desk.title} lead={d.desk.text} />
          <h3 className="h3" style={{ marginBottom: 22 }} data-reveal>{d.desk.subtitle}</h3>
          <CardGrid items={d.desk.items} cols={4} />
          <div style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
            <h3 className="h3" style={{ marginBottom: 22 }} data-reveal>{d.desk.teamTitle}</h3>
            <Team people={d.desk.people} />
          </div>
        </div>
      </section>

      {/* 9.9 Cierre propio con 3 pasos */}
      <ClosingCta data={d.closing} />
    </>
  )
}
