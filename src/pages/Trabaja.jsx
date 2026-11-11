import { trabaja as d } from '../data/content/index.js'
import Seo from '../components/ui/Seo.jsx'
import JobForm from '../components/forms/JobForm.jsx'
import { PageHero, Intro, SectionHead, CardGrid, ClosingCta } from '../components/sections/index.jsx'
import '../components/home/home.css'

/* 12. TRABAJA CON NOSOTROS */
export default function Trabaja() {
  return (
    <>
      <Seo {...d.seo} />
      <PageHero eyebrow={d.hero.eyebrow} title={d.hero.h1} text={d.hero.text} img={d.hero.img} video={d.hero.video} short />

      {/* 12.2 Lema */}
      <section className="band">
        <div className="container center">
          <p style={{ margin: '0 auto 26px' }} data-reveal>{d.motto.phrase}</p>
          <div className="words" data-reveal="2">
            {d.motto.words.map((w) => <span key={w}>{w}</span>)}
          </div>
        </div>
      </section>

      {/* 12.3 Intro */}
      <Intro title={d.intro.title} paragraphs={d.intro.paragraphs} />

      {/* 12.4 Formulario */}
      <section className="section section--glow" id="postula">
        <div className="container home-contact">
          <div className="home-contact__intro" data-reveal>
            <h2 className="h2">{d.form.title}</h2>
            <p className="lead">{d.form.text}</p>
          </div>
          <div data-reveal="2"><JobForm data={d.form} /></div>
        </div>
      </section>

      {/* 12.5 Por qué trabajar con nosotros */}
      <section className="section section--deep">
        <div className="container">
          <SectionHead title={d.why.title} lead={d.why.lead} />
          <CardGrid items={d.why.items} cols={4} />
        </div>
      </section>

      {/* 12.6 Cierre */}
      <ClosingCta data={d.closing} />
    </>
  )
}
