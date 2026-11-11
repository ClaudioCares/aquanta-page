import { home } from '../data/content/index.js'
import Seo from '../components/ui/Seo.jsx'
import Icon from '../components/ui/Icon.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import Hero from '../components/home/Hero.jsx'
import ContactForm from '../components/forms/ContactForm.jsx'
import { SectionHead, Seals, Steps, CardGrid, LogoWall, Offices } from '../components/sections/index.jsx'
import '../components/home/home.css'

/* 3. INICIO: hero, certificaciones, metodología, portafolio, marcas, clientes, hablemos, oficinas */
export default function Home() {
  const { seo, certifications, methodology, portfolio, brands, clients, contact } = home
  return (
    <>
      <Seo {...seo} />
      <Hero />

      {/* 3.2 Certificaciones */}
      <section className="certs-strip">
        <div className="container certs-strip__inner" data-reveal>
          <div>
            <span className="eyebrow">{certifications.eyebrow}</span>
            <h2 className="h3">{certifications.title}</h2>
          </div>
          <div className="certs-strip__right">
            <Seals />
            <SmartLink to={certifications.to} className="link-arrow">Ver certificaciones <Icon name="arrow-right" size={14} /></SmartLink>
          </div>
        </div>
      </section>

      {/* 3.3 Metodología */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={methodology.eyebrow} title={methodology.title} />
          <Steps items={methodology.steps} />
        </div>
      </section>

      {/* 3.4 Portafolio */}
      <section className="section section--deep" id="portafolio">
        <div className="container">
          <SectionHead eyebrow={portfolio.eyebrow} title={portfolio.title} lead={portfolio.lead} />
          <CardGrid items={portfolio.items} cols={3} />
        </div>
      </section>

      {/* 3.5 Marcas */}
      <section className="section">
        <div className="container">
          <SectionHead title={brands.title} />
          <LogoWall items={brands.items} folder="marcas" />
        </div>
      </section>

      {/* 3.6 Clientes. CONFIRMAR: permiso para publicar estos logos */}
      <section className="section section--tight">
        <div className="container">
          <SectionHead title={clients.title} />
          <LogoWall items={clients.items} folder="clientes" small />
        </div>
      </section>

      {/* 3.7 Formulario Hablemos */}
      <section className="section section--glow" id="hablemos">
        <div className="container home-contact">
          <div className="home-contact__intro" data-reveal>
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2 className="h2">{contact.title}</h2>
            <p className="lead">{contact.text}</p>
          </div>
          <div data-reveal="2"><ContactForm /></div>
        </div>
      </section>

      {/* 3.8 Oficinas */}
      <Offices deep />
    </>
  )
}
