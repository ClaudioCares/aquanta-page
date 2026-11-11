import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { energia as d, catalogo } from '../../data/content/index.js'
import Catalog from '../../components/sections/Catalog.jsx'
import Seo from '../../components/ui/Seo.jsx'
import Img from '../../components/ui/Img.jsx'
import Icon from '../../components/ui/Icon.jsx'
import SmartLink from '../../components/ui/SmartLink.jsx'
import MiniForm from '../../components/forms/MiniForm.jsx'
import YouTubeLoop from '../../components/ui/YouTubeLoop.jsx'
import Typewriter from '../../components/sections/Typewriter.jsx'
import { PageHero, SectionHead, CardGrid, Steps, Accordion, Compare, LogoWall, Team, ClosingCta } from '../../components/sections/index.jsx'
import { scrollToTarget } from '../../hooks/useSmoothScroll.js'
import '../pages.css'

/** Cabecera de bloque: etiqueta + título (+ bajada) y, si hay foto, el equipo al lado. */
function BlockHead({ b, children }) {
  if (!b.img && !b.video) return <SectionHead eyebrow={b.eyebrow} title={b.title} lead={b.lead}>{children}</SectionHead>
  return (
    <div className="bsplit">
      <div className="bsplit__text" data-reveal>
        <span className="eyebrow">{b.eyebrow}</span>
        <h2 className="h2">{b.title}</h2>
        {b.lead && <p className="lead">{b.lead}</p>}
        {children}
      </div>
      <div className="bsplit__media" data-reveal="2">
        {b.video ? (
          <video src={b.video} poster={b.img} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        ) : (
          <Img src={b.img} alt="" loading="lazy" />
        )}
      </div>
    </div>
  )
}

/** Bloque de una pestaña según su tipo (cards, steps, compare, faq, text, typewriter). */
function Block({ b }) {
  switch (b.type) {
    case 'cards':
      // 6 tarjetas van en 3 columnas (dos filas completas); el resto hasta 4 columnas
      return (<><BlockHead b={b} /><CardGrid items={b.items} cols={b.items.length % 3 === 0 ? 3 : Math.min(b.items.length, 4)} /></>)
    case 'steps':
      return (<><BlockHead b={b} /><Steps items={b.items} cols={Math.min(b.items.length, 3)} /></>)
    case 'compare':
      return (<><BlockHead b={b} /><Compare items={b.items} /></>)
    case 'faq':
      return (<><BlockHead b={b} /><Accordion items={b.items} /></>)
    case 'typewriter':
      return (
        <BlockHead b={b}>
          <Typewriter prefix={b.prefix} words={b.words} />
          <p className="bsplit__p">{b.text}</p>
        </BlockHead>
      )
    default:
      return (
        <BlockHead b={b}>
          <p className="bsplit__p">{b.text}</p>
        </BlockHead>
      )
  }
}

/* 7. ENERGÍA: hero + selector de 4 líneas + pestañas + catálogo + marcas, equipo y cierre propio */
export default function Energia() {
  const { hash } = useLocation()
  const fromHash = d.tabs.find((t) => `#${t.key}` === hash)
  const [tab, setTab] = useState(fromHash ? fromHash.key : d.tabs[0].key)
  useEffect(() => { if (fromHash) setTab(fromHash.key) }, [fromHash])
  const t = d.tabs.find((x) => x.key === tab)

  const choose = (key) => {
    setTab(key)
    scrollToTarget('#pestanas')
  }

  return (
    <>
      <Seo {...d.seo} />
      <PageHero {...d.hero} title={d.hero.h1} />

      {/* Selector de líneas (pestañas) */}
      <section className="section section--tight" id="pestanas" style={{ paddingTop: 'clamp(40px, 5vw, 64px)' }}>
        <div className="container">
          <div className="etab__nav" role="tablist" data-reveal>
            {d.tabs.map((x, i) => (
              <button key={x.key} role="tab" aria-selected={tab === x.key} className={`etab__card ${tab === x.key ? 'is-active' : ''}`} onClick={() => choose(x.key)}>
                <span className="etab__card-n mono">0{i + 1}</span>
                <span className="etab__card-icon"><Icon name={x.icon || 'bolt'} size={22} /></span>
                <span className="etab__card-label">{x.label}</span>
                {x.sublabel && <span className="etab__card-sub">{x.sublabel}</span>}
              </button>
            ))}
          </div>

          <div key={t.key} role="tabpanel" className="etab__panel">
            {/* Intro de la pestaña + formulario corto */}
            <div className="etab__intro">
              <div className="etab__intro-text" data-reveal>
                <span className="eyebrow">{t.label}</span>
                <h2 className="h2">{t.intro.title}</h2>
                <p className="lead">{t.intro.text}</p>
                {t.anchors && (
                  <nav className="page-hero__anchors" aria-label="Secciones de la pestaña">
                    {t.anchors.map((a) => <SmartLink key={a.to} to={a.to}>{a.label}</SmartLink>)}
                  </nav>
                )}
                <div className="etab__form">
                  <span className="etab__form-title">¿Quieres el detalle completo?</span>
                  <MiniForm button={d.miniForm.button} subject={`Solicitud de presentación: ${t.label}`} />
                </div>
              </div>
              <div className="etab__intro-img" data-reveal="2">
                {t.intro.youtube ? (
                  <YouTubeLoop id={t.intro.youtube.id} start={t.intro.youtube.start} end={t.intro.youtube.end} title={t.intro.title} />
                ) : t.intro.video ? (
                  <video src={t.intro.video} poster={t.intro.img} autoPlay muted loop playsInline aria-hidden="true" />
                ) : (
                  <Img src={t.intro.img} alt="" loading="lazy" />
                )}
              </div>
            </div>
          </div>
        </div>

        {t.sections.map((b, i) => (
          <div key={t.key + b.title + i} className={`etab__block ${i % 2 ? 'etab__block--alt' : ''}`} id={b.id}>
            <div className="container"><Block b={b} /></div>
          </div>
        ))}
      </section>

      {/* Catálogo de equipos y suministros (energía y data center) */}
      <Catalog key={t.key} data={catalogo} defaultCat={t.catalogo || ''} />

      {/* 7.3 Común: marcas, equipo, cierre propio */}
      <section className="section section--tight" style={{ paddingTop: 'clamp(50px, 6vw, 80px)' }}>
        <div className="container">
          <SectionHead title="Marcas que integramos" as="h3" />
          <LogoWall items={d.brands} />
        </div>
      </section>
      <section className="section section--tight" id={d.team.id}>
        <div className="container">
          <SectionHead eyebrow={d.team.eyebrow} title={d.team.title} />
          <Team people={d.team.people} />
        </div>
      </section>
      <ClosingCta data={d.closing} />
    </>
  )
}
