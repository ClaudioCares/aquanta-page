import { brand } from '../data/site.js'
import { contacto as d } from '../data/content/index.js'
import Seo from '../components/ui/Seo.jsx'
import Icon from '../components/ui/Icon.jsx'
import ContactForm from '../components/forms/ContactForm.jsx'
import { Offices } from '../components/sections/index.jsx'
import './pages.css'

/* 14. CONTACTO (Hablemos): formulario 2.5 + oficinas 2.4 */
export default function Contact() {
  return (
    <>
      <Seo {...d.seo} />
      <section className="contact">
        <div className="container contact__inner">
          <div className="contact__intro" data-reveal>
            <span className="eyebrow">{d.eyebrow}</span>
            <h1 className="page-hero__title">{d.h1}</h1>
            <p className="lead">{d.text}</p>
            <ul className="contact__info">
              <li><Icon name="mail" size={18} /><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
              <li><Icon name="phone" size={18} /><a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a></li>
              <li><Icon name="globe" size={18} />{brand.countries.join(' · ')}</li>
            </ul>
          </div>
          <div data-reveal="2"><ContactForm title={d.formTitle} /></div>
        </div>
      </section>
      <Offices deep />
    </>
  )
}
