/* ---------- 12. TRABAJA CON NOSOTROS (/trabaja-con-nosotros) ---------- */
export const trabaja = {
  seo: {
    title: 'Trabaja con nosotros | AQuanta',
    description: 'Súmate a AQuanta Ingeniería. Envíanos tus antecedentes y sé parte de un equipo que impulsa soluciones tecnológicas de alto impacto en Latinoamérica.',
  },
  hero: {
    eyebrow: 'TALENTO QUE IMPULSA EL FUTURO',
    h1: 'Oportunidad laboral',
    text: 'Postula y sé parte de nuestra comunidad integradora AQuanta Ingeniería.',
    img: '/img/esc-ci.jpg',
    video: '/video/trabaja.mp4', // clip de Pexels (ver public/video/CREDITOS.txt)
  },
  motto: {
    phrase: '"Tecnología que conecta personas"',
    words: ['Personas', 'Innovación', 'Crecimiento', 'Un mejor futuro'],
  },
  intro: {
    title: 'Sé parte de una de las empresas más exitosas, de mayor crecimiento y líderes en el mercado TI',
    paragraphs: ['En AQuanta Ingeniería creemos en el talento, la colaboración y el poder de la tecnología para transformar organizaciones. Te invitamos a ser parte de un equipo que impulsa soluciones de alto impacto en Latinoamérica.'],
  },
  form: {
    id: 'formulario',
    title: 'Personas que hacen la diferencia',
    text: 'Buscamos talentos con pasión por la tecnología, la mejora continua y el trabajo en equipo.',
    notice: 'En este momento no tenemos vacantes abiertas. Si quieres enviarnos tus antecedentes para futuras oportunidades, completa el formulario.',
    fields: {
      nombre: 'Nombre y apellido',
      email: 'Correo electrónico',
      titulo: 'Título profesional',
      casa: 'Casa de estudios',
      area: 'Área a la que deseas postular',
      cv: 'Adjuntar CV (PDF, máx. 5 MB)',
    },
    submit: 'Enviar postulación',
  },
  why: {
    title: '¿Por qué trabajar con nosotros?',
    lead: 'Más que un trabajo, te ofrecemos la oportunidad de crecer, aprender y ser parte de un equipo que genera impacto.',
    items: [
      { titulo: 'Crecimiento profesional', icon: 'chart', texto: 'Impulsamos tu desarrollo con nuevos desafíos y aprendizaje continuo.' },
      { titulo: 'Innovación constante', icon: 'bolt', texto: 'Trabaja con tecnologías de vanguardia en proyectos de alto impacto.' },
      { titulo: 'Trabajo en equipo', icon: 'users', texto: 'Un entorno colaborativo, diverso e integrador.' },
      { titulo: 'Estabilidad y proyección', icon: 'shield', texto: 'Sé parte de una empresa sólida y en constante crecimiento en la región.' },
    ],
  },
  closing: {
    title: 'Tu talento también impulsa un mejor mañana',
    text: 'Súmate a AQuanta Ingeniería y construyamos juntos el futuro de la tecnología.',
    button: { label: 'Envía tu CV', to: '#formulario' },
  },
}
