import { nosotros } from '../data/content/index.js'
import Seo from '../components/ui/Seo.jsx'
import { PageHero, Intro, SectionHead, CardGrid, Team, LogoWall, ClosingCta } from '../components/sections/index.jsx'

/* 4. NOSOTROS */
export default function Nosotros() {
  const d = nosotros
  return (
    <>
      <Seo {...d.seo} />
      <PageHero eyebrow={d.hero.eyebrow} title={d.hero.h1} img={d.hero.img} video={d.hero.video} short />

      {/* 4.2 Sobre nosotros */}
      <Intro title="Sobre nosotros" quote={d.about.quote} paragraphs={d.about.paragraphs} />

      {/* 4.3 Propósito, misión y visión */}
      <section className="section section--deep">
        <div className="container">
          <CardGrid items={d.purpose} cols={3} glass />
        </div>
      </section>

      {/* 4.4 Valores */}
      <section className="section">
        <div className="container">
          <SectionHead title={d.values.title} />
          <CardGrid items={d.values.items.map((v) => ({ titulo: v.valor, texto: v.texto, icon: 'check' }))} cols={5} />
        </div>
      </section>

      {/* 4.5 Equipo */}
      <section className="section section--deep" id="equipo">
        <div className="container">
          <SectionHead title={d.team.title} />
          <Team groups={d.team.groups} />
        </div>
      </section>

      {/* 4.6 Responsabilidad social */}
      <section className="section">
        <div className="container">
          <SectionHead title={d.rse.title} />
          <LogoWall items={d.rse.items} folder="rse" />
        </div>
      </section>

      {/* 4.7 Cierre */}
      <ClosingCta />
    </>
  )
}
