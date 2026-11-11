/* ---------- PORTAL DE CLIENTES (/portal-clientes) ----------
   Textos tomados de https://aquantalatam.com/portal-clientes/ (sitio actual).
   TODO: definir la URL real del portal Aranda Software (campo loginUrl); mientras esté vacío el formulario avisa que está en habilitación. */
export const portal = {
  seo: {
    title: 'Portal de Clientes | AQuanta',
    description: 'Mesa de servicios AQuanta Ingeniería: tu punto de partida para soporte. Registra tu requerimiento o incidente.',
  },
  hero: {
    eyebrow: 'BIENVENIDOS',
    h1: 'Mesa de servicios AQuanta Ingeniería',
    text: 'Tu punto de partida para soporte: registra tu requerimiento o incidente.',
    img: '/img/hero-datacenter.jpg',
    video: '/video/servicios.mp4',
  },
  login: {
    title: 'Portal del cliente',
    user: 'Usuario',
    password: 'Contraseña',
    button: 'Ingresar',
    forgot: '¿Olvidaste tu contraseña?',
    forgotTo: '', // TODO: enlace de recuperación de contraseña del portal
    loginUrl: '', // TODO: URL del portal Aranda (ej. https://xxxx.arandasoft.com/...)
    pending: 'El acceso al portal está en habilitación. Mientras tanto, escríbenos a contacto@aquantalatam.com o llama al +56 2 2204 0909 y registramos tu requerimiento.',
    note: 'Plataforma segura y confiable | Powered by Aranda Software',
  },
  cta: { label: 'Hablemos de tu proyecto', to: '/contacto' },
  // Qué puedes hacer en el portal (propuesta a partir del alcance de la Mesa de Servicios; CONFIRMAR)
  features: [
    { titulo: 'Registra requerimientos', icon: 'headset', texto: 'Abre tickets de soporte e incidentes y haz seguimiento de su estado.' },
    { titulo: 'Historial de atención', icon: 'file', texto: 'Consulta tus solicitudes anteriores y las respuestas del equipo.' },
    { titulo: 'Cobertura 24/7', icon: 'clock', texto: 'La Mesa de Servicios recibe tus requerimientos todos los días del año.' },
  ],
}
