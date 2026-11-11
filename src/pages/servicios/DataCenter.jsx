import { dataCenter as d } from '../../data/content/index.js'
import Seo from '../../components/ui/Seo.jsx'
import { PageHero, Intro, SectionHead, CardGrid, LogoWall, Accordion, DataTable, ClosingCta } from '../../components/sections/index.jsx'

/* 5. DATA CENTER */
export default function DataCenter() {
  return (
    <>
      <Seo {...d.seo} />
      <PageHero {...d.hero} title={d.hero.h1} />

      {/* 5.2 Intro */}
      <Intro title={d.intro.title} paragraphs={d.intro.paragraphs} />

      {/* 5.3 Servicios y redes */}
      <section className="section section--deep" id={d.services.id}>
        <div className="container">
          <SectionHead eyebrow={d.services.eyebrow} title={d.services.title} />
          <CardGrid items={d.services.items} cols={3} />
        </div>
      </section>

      {/* 5.4 Marcas */}
      <section className="section">
        <div className="container">
          <LogoWall items={d.brands} />
        </div>
      </section>

      {/* 5.5 HCI y DRaaS */}
      <section className="section section--deep" id={d.hci.id}>
        <div className="container">
          <SectionHead eyebrow={d.hci.eyebrow} title={d.hci.title} />
          <Accordion items={d.hci.items} />
          <div style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
            <SectionHead title={d.hci.levels.intro} as="h3" />
            {/* CONFIRMAR: Nivel 1, RTO y RPO menores a 15 min */}
            <DataTable head={d.hci.levels.head} rows={d.hci.levels.rows} />
          </div>
        </div>
      </section>

      {/* 5.6 Soporte de servidores y plataformas */}
      <section className="section" id={d.support.id}>
        <div className="container">
          <SectionHead eyebrow={d.support.eyebrow} title={d.support.title} />
          <CardGrid items={d.support.items} cols={4} />
        </div>
      </section>

      {/* 5.7 Cierre */}
      <ClosingCta />
    </>
  )
}
