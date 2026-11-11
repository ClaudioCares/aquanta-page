import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import FloatingActions from './components/layout/FloatingActions.jsx'
import ScrollProgress from './components/layout/ScrollProgress.jsx'
import Home from './pages/Home.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Servicios from './pages/Servicios.jsx'
import DataCenter from './pages/servicios/DataCenter.jsx'
import Ciberseguridad from './pages/servicios/Ciberseguridad.jsx'
import Energia from './pages/servicios/Energia.jsx'
import Cloud from './pages/servicios/Cloud.jsx'
import ServiciosProfesionales from './pages/servicios/ServiciosProfesionales.jsx'
import Certificaciones from './pages/Certificaciones.jsx'
import Trabaja from './pages/Trabaja.jsx'
import Club from './pages/Club.jsx'
import Contact from './pages/Contact.jsx'
import Portal from './pages/Portal.jsx'
import Policy from './pages/politicas/Policy.jsx'
import NotFound from './pages/NotFound.jsx'
import { politicaCalidad, politicaPrivacidad, politicaCookies } from './data/content/index.js'
import { redirects } from './data/site.js'
import useSmoothScroll, { scrollToTarget } from './hooks/useSmoothScroll.js'
import useReveal from './hooks/useReveal.js'

/* Mapa del sitio (sección 1 del contenido) */
export default function App() {
  const { pathname, hash, search } = useLocation()
  useSmoothScroll()
  useReveal(pathname + search)

  // Al cambiar de ruta: ir arriba, o a la sección del hash (/servicios/data-center#hci)
  useEffect(() => {
    const t = setTimeout(() => {
      ScrollTrigger.refresh()
      if (hash) scrollToTarget(hash)
      else scrollToTarget(0, { immediate: true })
    }, hash ? 450 : 0)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/data-center" element={<DataCenter />} />
          <Route path="/servicios/ciberseguridad" element={<Ciberseguridad />} />
          <Route path="/servicios/energia" element={<Energia />} />
          <Route path="/servicios/cloud" element={<Cloud />} />
          <Route path="/servicios/servicios-profesionales" element={<ServiciosProfesionales />} />
          <Route path="/certificaciones" element={<Certificaciones />} />
          <Route path="/trabaja-con-nosotros" element={<Trabaja />} />
          <Route path="/club-de-ingenieros" element={<Club />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/portal-clientes" element={<Portal />} />
          <Route path="/politica-de-calidad" element={<Policy data={politicaCalidad} />} />
          <Route path="/politica-de-privacidad" element={<Policy data={politicaPrivacidad} />} />
          <Route path="/politica-de-cookies" element={<Policy data={politicaCookies} />} />
          {/* Redirecciones desde el sitio viejo (las 301 reales están en vercel.json) */}
          {redirects.map((r) => (
            <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
      <ScrollProgress />
    </>
  )
}
