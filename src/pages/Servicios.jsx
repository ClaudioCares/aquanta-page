import { home, serviciosIndex } from '../data/content/index.js'
import Seo from '../components/ui/Seo.jsx'
import { PageHero, CardGrid, ClosingCta } from '../components/sections/index.jsx'

/* 10. SERVICIOS (índice): las mismas 6 tarjetas del portafolio de la portada */
export default function Servicios() {
  return (
    <>
      <Seo {...serviciosIndex.seo} />
      <PageHero eyebrow="SERVICIOS" title={serviciosIndex.h1} text={serviciosIndex.lead} img="/img/hero-intro.jpg" video="/video/servicios.mp4" short />
      <section className="section">
        <div className="container">
          <CardGrid items={home.portfolio.items} cols={3} />
        </div>
      </section>
      <ClosingCta />
    </>
  )
}
