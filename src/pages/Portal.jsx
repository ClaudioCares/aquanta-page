import { useState } from 'react'
import { portal as d } from '../data/content/index.js'
import Seo from '../components/ui/Seo.jsx'
import Icon from '../components/ui/Icon.jsx'
import PillButton from '../components/ui/PillButton.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { PageHero, CardGrid, SectionHead } from '../components/sections/index.jsx'
import '../components/home/home.css'
import '../components/forms/forms.css'

/* PORTAL DE CLIENTES: hero + acceso a la Mesa de Servicios (Aranda) + qué puedes hacer */
export default function Portal() {
  const [pending, setPending] = useState(false)
  const l = d.login

  const submit = (e) => {
    // Sin URL del portal, avisamos que está en habilitación (no se envían credenciales a ningún lado)
    if (!l.loginUrl) {
      e.preventDefault()
      setPending(true)
    }
  }

  return (
    <>
      <Seo {...d.seo} />
      <PageHero eyebrow={d.hero.eyebrow} title={d.hero.h1} text={d.hero.text} img={d.hero.img} video={d.hero.video} short />

      <section className="section section--glow">
        <div className="container home-contact">
          <div className="home-contact__intro" data-reveal>
            <SectionHead title={l.title} lead={d.hero.text} />
            <PillButton to={d.cta.to} variant="ghost">{d.cta.label}</PillButton>
          </div>
          <div data-reveal="2">
            <form className="form glass portal__form" action={l.loginUrl || undefined} method="post" onSubmit={submit}>
              <label className="form__full">{l.user}<input name="username" autoComplete="username" required /></label>
              <label className="form__full">{l.password}<input name="password" type="password" autoComplete="current-password" required /></label>
              <div className="form__actions form__full">
                <button type="submit" className="pill pill--accent">
                  <span className="pill__label">{l.button}</span>
                  <span className="pill__icon"><Icon name="lock" size={16} stroke={2} /></span>
                </button>
                {l.forgotTo ? <SmartLink to={l.forgotTo} className="portal__forgot">{l.forgot}</SmartLink> : <span className="portal__forgot" title="TODO: enlace de recuperación">{l.forgot}</span>}
              </div>
              {pending && <p className="form__status form__full" role="status">{l.pending}</p>}
              <p className="form__notice portal__note"><Icon name="shield" size={14} /> {l.note}</p>
            </form>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CardGrid items={d.features} cols={3} />
        </div>
      </section>
    </>
  )
}
