import Seo from '../components/ui/Seo.jsx'
import PillButton from '../components/ui/PillButton.jsx'
import './pages.css'

export default function NotFound() {
  return (
    <section className="notfound">
      <Seo title="Página no encontrada | AQuanta" description="" />
      <span className="eyebrow">Error 404</span>
      <h1 className="page-hero__title">Página no encontrada</h1>
      <PillButton to="/">Volver al inicio</PillButton>
    </section>
  )
}
