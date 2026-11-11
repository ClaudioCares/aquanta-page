/* =====================================================================
   DATOS GLOBALES DEL SITIO AQUANTA
   Fuente: AQUANTA_CONTENIDO_WEB.md (secciones 1 y 2).
   El contenido de cada página está en src/data/content/*.js
   ===================================================================== */

export const brand = {
  name: 'AQuanta',
  legal: 'AQuanta Ingeniería',
  tagline: 'INTEGRACIÓN SISTÉMICA DE TECNOLOGÍA',
  taglineShort: 'Integración sistémica de tecnología',
  isologo: '/logo/isologo.png',
  logoLight: '/logo/logo.png', // LOGO BLANCO (header y footer oscuros). Si no existe se muestra isologo + texto
  logoDark: '/logo/logo-color.png', // cropped-AQuanta-Logo (versión a color para fondos claros)
  email: 'contacto@aquantalatam.com',
  phone: '+56 2 2204 0909',
  whatsapp: '', // vacío = el botón flotante lleva a /contacto
  countries: ['Chile', 'Colombia', 'Perú'],
  portal: { label: 'Portal Clientes', to: '/portal-clientes' }, // página propia; la URL del portal Aranda va en content/portal.js
}

/* ---------- Líneas de servicio (menú, índice /servicios, footer, portafolio) ---------- */
export const serviceLines = [
  { slug: 'data-center', label: 'Data Center', to: '/servicios/data-center', img: '/img/hero-datacenter.jpg', icon: 'server' },
  { slug: 'ciberseguridad', label: 'Ciberseguridad y Análisis', to: '/servicios/ciberseguridad', img: '/img/esc-telecom.jpg', icon: 'shield' },
  { slug: 'energia', label: 'Energía', to: '/servicios/energia', img: '/img/hero-solar.jpg', icon: 'bolt' },
  { slug: 'cloud', label: 'Cloud', to: '/servicios/cloud', img: '/img/sol-dc.jpg', icon: 'cloud' },
  { slug: 'servicios-profesionales', label: 'Servicios Profesionales', to: '/servicios/servicios-profesionales', img: '/img/hero-ups.jpg', icon: 'users' },
]

/* ---------- 2.1 Header ---------- */
export const nav = [
  { label: 'Nosotros', mega: 'nosotros' },
  { label: 'Servicios', mega: 'servicios' },
  { label: 'Club de Ingenieros 2026', to: '/club-de-ingenieros' },
  { label: 'Hablemos', to: '/contacto' },
]

const menuImgs = {
  '/servicios/data-center': '/img/menu/data-center.webp',
  '/servicios/ciberseguridad': '/img/menu/ciberseguridad.webp',
  '/servicios/energia': '/img/energia/s10.webp',
  '/servicios/cloud': '/img/menu/cloud.webp',
  '/servicios/servicios-profesionales': '/img/menu/servicios-profesionales.webp',
}

export const megaMenus = {
  // Desplegable Nosotros: solo las tres páginas que indica el contenido (2.1)
  nosotros: {
    cols: 2,
    featured: [{ title: 'Nosotros', img: '/img/club/club-1.webp', to: '/nosotros' }],
    items: [
      { title: 'Certificaciones', icon: 'award', img: '/img/case-2.jpg', to: '/certificaciones' },
      { title: 'Trabaja con nosotros', icon: 'briefcase', img: '/img/club/club-4.webp', to: '/trabaja-con-nosotros' },
    ],
  },
  // Desplegable Servicios: las cinco líneas y el índice
  servicios: {
    cols: 3,
    // Cada línea con su foto (sin destacados duplicados). Fotos de Pexels en /img/menu (ver public/video/CREDITOS.txt); Energía usa el BESS Huawei
    items: serviceLines.map((s) => ({ title: s.label, icon: s.icon, to: s.to, img: menuImgs[s.to] })),
    more: { label: 'Todos los servicios', to: '/servicios' },
  },
}

/* Logos que no vienen en PNG (el resto se busca como /logo/<carpeta>/<slug>.png) */
export const logoExt = { i2: 'jpg', IBM: 'webp', Sigenergy: 'svg', Vertiv: 'svg' }

/* ---------- 2.2 Sellos ---------- */
// TODO: colocar los archivos en /public/logo/sellos/ con estos nombres
export const seals = [
  { name: 'ISO 9001', img: '/logo/sellos/iso-9001.png' },
  { name: 'ISO 27001', img: '/logo/sellos/iso-27001.png' },
  { name: 'ITIL', img: '/logo/sellos/itil.png' },
]

/* ---------- 2.3 Bloque de cierre "Hablemos" ---------- */
export const closingCta = {
  eyebrow: 'HABLEMOS',
  title: 'Contacta a nuestros expertos',
  text: 'Infraestructura a la medida, certificada y evaluada por nuestros ingenieros expertos de AQuanta Ingeniería, integrados con nuestros partners.',
  button: { label: 'Hablemos de tu proyecto', to: '/contacto' },
}

/* ---------- 2.4 Oficinas ---------- */
export const offices = {
  title: 'Integramos tecnología con alcance regional.',
  text: 'Entregamos continuidad operativa y soluciones de vanguardia con presencia directa en Chile, Colombia y Perú.',
  items: [
    { country: 'Chile', company: 'AQUANTA INGENIERÍA SPA', address: 'Puyehue 1324, Providencia, Santiago', phone: '+56 2 2204 0909', email: 'contacto@aquantalatam.com' },
    // CONFIRMAR: el sitio viejo decía S.A.C para Colombia
    { country: 'Colombia', company: 'AQUANTA TECNOLOGÍA S.A.S', address: 'Carrera 7 #75-66, oficina 501, Bogotá D.C., Colombia', phone: '', email: 'contacto@aquantalatam.com' },
    // CONFIRMAR: el sitio viejo decía S.A.S para Perú
    { country: 'Perú', company: 'AQUANTA TECNOLOGÍA S.A.C', address: 'Av. Pardo y Aliaga 699, piso 8, San Isidro, Lima, Perú', phone: '', email: 'contacto@aquantalatam.com' },
  ],
}

/* ---------- 2.5 Formulario de contacto ---------- */
export const contactForm = {
  services: ['Data Center', 'Ciberseguridad y Análisis', 'Energía', 'Cloud', 'Servicios Profesionales', 'Mesa de Servicios 24/7', 'Otro'],
  submit: 'Enviar',
  legal: 'Al enviar aceptas nuestra',
  legalLink: { label: 'Política de Privacidad', to: '/politica-de-privacidad' },
}

/* ---------- 2.6 Footer ---------- */
export const footer = {
  columns: [
    {
      title: 'Empresa',
      links: [
        { label: 'Nosotros', to: '/nosotros' },
        { label: 'Certificaciones', to: '/certificaciones' },
        { label: 'Trabaja con nosotros', to: '/trabaja-con-nosotros' },
        { label: 'Club de Ingenieros 2026', to: '/club-de-ingenieros' },
        { label: 'Hablemos', to: '/contacto' },
      ],
    },
    {
      title: 'Servicios',
      links: serviceLines.map((s) => ({ label: s.label, to: s.to })),
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Calidad y Seguridad de la Información', to: '/politica-de-calidad' },
        { label: 'Política de Privacidad', to: '/politica-de-privacidad' },
        { label: 'Política de Cookies', to: '/politica-de-cookies' },
        { label: 'Encuesta de satisfacción', href: '#', todo: 'TODO: URL de Microsoft Forms' },
        { label: 'Canal de denuncias', href: '#', todo: 'TODO: definir correo o formulario' },
      ],
    },
  ],
  seals: seals.filter((s) => s.name !== 'ITIL'),
  copyright: '© 2026 AQuanta Ingeniería',
}

/* ---------- Redirecciones 301 desde el sitio viejo (también en vercel.json) ---------- */
export const redirects = [
  { from: '/data-center-2', to: '/servicios/data-center' },
  { from: '/ciberseguridad-y-fraude', to: '/servicios/ciberseguridad' },
  { from: '/energia', to: '/servicios/energia' },
  { from: '/cloud', to: '/servicios/cloud' },
  { from: '/servicios-profesionales', to: '/servicios/servicios-profesionales' },
  { from: '/oportunidad-laboral', to: '/trabaja-con-nosotros' },
  { from: '/certificados-iso', to: '/certificaciones' },
  { from: '/politica-de-calidad-y-seguridad-de-la-informacion', to: '/politica-de-calidad' },
]
