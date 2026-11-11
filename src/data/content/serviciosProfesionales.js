/* ---------- 9. SERVICIOS PROFESIONALES (/servicios/servicios-profesionales) ---------- */
export const serviciosProfesionales = {
  seo: {
    title: 'Servicios profesionales y Mesa de Servicios 24/7 | AQuanta Proactive',
    description: 'AQuanta Proactive 24/7: soporte multimarca, monitoreo proactivo, mesa de servicios ITIL, parchado preventivo y consultoría de arquitectura e ingeniería.',
  },
  hero: {
    eyebrow: 'SERVICIOS PROFESIONALES Y SOPORTE',
    h1: 'AQuanta Proactive 24/7',
    text: 'Continuidad operativa integral, monitoreo avanzado y soporte técnico especializado, con un equipo experto que se convierte en el pulso vital de tu organización.',
    img: '/img/hero-ups.jpg',
    video: '/video/servicios-profesionales.mp4', // clip de Pexels (ver public/video/CREDITOS.txt)
    anchors: [
      { label: 'Cobertura 24/7', to: '#cobertura' },
      { label: 'Metodología', to: '#metodologia' },
      { label: 'Equipo', to: '#equipo' },
      { label: 'Mesa de Servicios', to: '#mesa-de-servicios' },
    ],
    seals: true,
  },
  intro: {
    title: 'Más que soporte técnico, somos parte de tu equipo',
    paragraphs: [
      'En AQuanta sabemos que la diferencia real en la continuidad operativa no la hacen solo las máquinas, sino las personas. Por eso, nuestro equipo de Arquitectura e Innovación no actúa como un proveedor externo tradicional: se integra completamente a la dinámica de tu negocio.',
      'Tomamos cada proyecto desde el diseño y la preventa (evaluando, cubicando y seleccionando las herramientas precisas) hasta la consultoría y la ingeniería de detalle. Con un equipo altamente certificado y vocación de servicio 24/7, construimos relaciones basadas en la confianza, asegurando que tu infraestructura crítica nunca se detenga. Extendemos la vida útil de tus plataformas, mitigamos riesgos y optimizamos tus costos de operación, pasando de CAPEX a un modelo OPEX predecible.',
    ],
  },
  pillars: {
    id: 'cobertura',
    eyebrow: 'PORTAFOLIO INTEGRADO',
    title: 'Protección integral para tu infraestructura TI',
    lead: 'Al unificar el monitoreo activo con una mesa de servicio siempre disponible, minimizamos las interrupciones en la operación.',
    items: [
      { titulo: 'Equipos fuera de garantía (soporte multimarca)', icon: 'wrench', items: ['Soporte especializado para extender la vida útil de hardware (servidores, almacenamiento y networking).', 'Personal certificado en las grandes marcas mundiales.', 'Menores costos frente a las renovaciones de fabricante (OEM).'] },
      { titulo: 'Visibilidad de operaciones', icon: 'chart', items: ['Monitoreo avanzado con detección proactiva de fallas en tiempo real.', 'Supervisión que detecta anomalías antes de que degraden la operación.', 'Informes periódicos sobre el estado y la salud de la plataforma.'] },
      { titulo: 'Mesa de servicio 24x7', icon: 'headset', items: ['Punto único de contacto multicanal con atención local especializada.', 'Operación alineada con estándares y buenas prácticas internacionales (ITIL).', 'Resolución de incidentes críticos a cualquier hora.'] },
      { titulo: 'Actualizaciones y parchado (mantenimiento preventivo)', icon: 'refresh', items: ['Gestión automatizada y calendarizada de sistemas operativos y plataformas.', 'Blindaje de la infraestructura TI frente a amenazas y mitigación de vulnerabilidades.'] },
    ],
  },
  brands: ['VMware', 'Microsoft', 'Aruba', 'Dell', 'Cisco', 'Veeam', 'Arcserve', 'Aranda Software', 'PRTG Network Monitor', 'Acronis', 'Veritas', 'HPE', 'Red Hat'],
  methodology: {
    id: 'metodologia',
    eyebrow: 'CONTINUIDAD OPERACIONAL',
    title: 'Del diagnóstico a la operación continua',
    // Fotos de metodología en /img/metodologia-1.jpg ... -5.jpg (ilustraciones entregadas por AQuanta)
    steps: [
      { n: 1, titulo: 'Consultoría, diseño y preventa', texto: 'El trabajo comienza mucho antes de tocar un servidor. Nuestro equipo de preventa evalúa tu infraestructura actual, realiza la cubicación exacta y define qué equipos y software se requieren. Junto a los arquitectos, diseñamos una solución a medida para que inviertas solo en lo que tu operación realmente necesita.' },
      { n: 2, titulo: 'Gestión estructurada del proyecto (6 etapas)', texto: 'Ejecutamos con una metodología de integración sistémica en 6 etapas: kick off, evaluación y planificación, ingeniería de detalle, implementación, QA (aseguramiento de calidad) y cierre. Todo el alcance queda documentado desde el inicio (SOW) y calendarizado en una carta Gantt, con control de avance riguroso.', sub: ['Kick off', 'Evaluación y planificación', 'Ingeniería de detalle', 'Implementación', 'QA', 'Cierre'] },
      { n: 3, titulo: 'Auditoría y despliegue de monitoreo (AQuanta Proactive)', texto: 'Levantamos todo el hardware y el estado de licenciamiento de los sistemas críticos. Con eso mapeado, desplegamos las herramientas de supervisión proactiva para tener visibilidad en tiempo real del rendimiento de la plataforma.' },
      { n: 4, titulo: 'Configuración de la mesa de servicio ITIL', texto: 'Integramos tu operación a nuestro centro de atención. Configuramos los flujos de escalamiento y la matriz de alertas según el marco de buenas prácticas ITIL, para que cada incidente tenga una ruta clara de resolución rápida.' },
      { n: 5, titulo: 'Aceptación formal y operación continua', texto: 'Cerramos con la transferencia de conocimientos y la firma formal del QA. Desde ahí, nuestro equipo asume el soporte activo 24/7, con parchado preventivo mensual e informes periódicos de salud tecnológica, para que tú te enfoques en tu negocio.' },
    ],
  },
  faq: {
    eyebrow: 'PREGUNTAS FRECUENTES',
    title: 'Cómo ayudamos a nuestros clientes',
    items: [
      { q: '¿Por qué elegir AQuanta Proactive frente al soporte oficial (OEM)?', a: 'El soporte de fabricante sube de costo año a año y te obliga a tener contratos separados por marca. Nuestro modelo OPEX es optimizado, predecible y cubre múltiples marcas con un solo punto de contacto.' },
      { q: '¿Qué nivel de certificación tiene el equipo?', a: 'Contamos con ingenieros certificados directamente por marcas tecnológicas de clase mundial. Además, nuestros procesos están certificados bajo ISO 9001 (calidad) e ISO/IEC 27001 (seguridad de la información).' },
      { q: '¿El servicio de soporte es reactivo o preventivo?', a: 'Es 100% proactivo. No esperamos a que un servicio se caiga: con monitoreo constante y un plan de parchado estructurado detectamos anomalías antes de que afecten la operación.' },
      { q: '¿Cómo funciona la disponibilidad del equipo?', a: 'La Mesa de Servicios 24x7 atiende incidentes a cualquier hora. En nuestras encuestas, los clientes destacan que nuestros ingenieros siempre están disponibles para resolver cualquier contingencia.' },
      { q: '¿Hacen consultoría de diseño antes de implementar?', a: 'Sí. Nuestro equipo de preventa y arquitectura diseña a medida (cubicación, equipos y software) antes de que ingeniería ejecute el proyecto, para que pagues exactamente por lo que tu operación necesita.' },
      { q: '¿Cómo manejan la confidencialidad y los datos de mi empresa?', a: 'Nos regimos por los más altos estándares de seguridad y la normativa vigente. Puedes revisar nuestra Política de Privacidad y Tratamiento de Datos Personales.', link: { label: 'Política de Privacidad', to: '/politica-de-privacidad' } },
    ],
  },
  team: {
    id: 'equipo',
    eyebrow: 'NUESTRO EQUIPO',
    title: 'Conoce a los expertos detrás de tu operación',
    // CONFIRMAR tildes de nombres: Rubén, Nicolás, Isaí, Bastián (el sitio viejo los tenía sin tilde en esta página)
    groups: [
      { title: 'Jefatura de proyectos', people: [{ nombre: 'Jonathan Venturelli', cargo: 'Gerente de Arquitectura e Innovación', correo: 'jventurelli@aquanta.cl' }] },
      { title: 'Arquitectura e innovación', photos: false, people: [
        { nombre: 'Rubén Valenzuela', cargo: 'Ingeniero de Arquitectura e Innovación', correo: 'rvalenzuela@aquanta.cl' },
        { nombre: 'José Luis Soto', cargo: 'Ingeniero de Arquitectura e Innovación', correo: 'jsoto@aquanta.cl' },
      ] },
      { title: 'Ingeniería especialista', photos: false, people: [
        { nombre: 'Nicolás Carreño', cargo: 'Ingeniero Especialista', correo: 'ncarreno@aquanta.cl' },
        { nombre: 'Nicolás Haddad', cargo: 'Ingeniero Especialista', correo: 'nhaddad@aquanta.cl' },
        { nombre: 'Isaí Villalobos', cargo: 'Ingeniero Especialista', correo: 'ivillalobos@aquanta.cl' },
      ] },
      { title: 'Administración y soporte', photos: false, people: [
        { nombre: 'Bastián Ramos', cargo: 'Administrador de Plataformas', correo: 'bramos@aquanta.cl' },
        { nombre: 'Richard Reyes', cargo: 'Técnico Especialista Junior', correo: 'rreyes@aquanta.cl' },
      ] },
    ],
  },
  desk: {
    id: 'mesa-de-servicios',
    eyebrow: 'MESA DE SERVICIOS 24/7',
    title: 'Mesa de Servicios 24/7',
    text: 'Garantizamos la continuidad operativa de tu negocio. Somos tu punto único de contacto (SPOC) para resolver cualquier requerimiento o incidente tecnológico, a cualquier hora y todos los días del año.',
    subtitle: '¿Qué incluye el servicio?',
    items: [
      { titulo: 'Soporte ininterrumpido (24/7/365)', icon: 'headset', texto: 'Atención omnicanal gestionada bajo estándares ITIL.' },
      { titulo: 'Cumplimiento de SLA', icon: 'clock', texto: 'Tiempos de respuesta estrictos según la criticidad de tu empresa.' },
      { titulo: 'Monitoreo preventivo', icon: 'chart', texto: 'Detectamos y solucionamos anomalías antes de que impacten al usuario.' },
      { titulo: 'Foco en tu negocio', icon: 'target', texto: 'Al externalizar el soporte, tu equipo TI interno se libera para proyectos estratégicos e innovación.' },
    ],
    teamTitle: 'Nuestro equipo a tu disposición',
    people: [
      { nombre: 'Cristián Cortés', cargo: 'Jefe Mesa de Servicios', correo: 'ccortes@aquanta.cl' },
      { nombre: 'Aylyn Valenzuela', cargo: 'Gestora de Continuidad Operativa', correo: 'avalenzuela@aquanta.cl' },
    ],
  },
  closing: {
    eyebrow: 'EL MOMENTO DE ACTUAR ES AHORA',
    title: 'Tu continuidad operacional es nuestra prioridad.',
    steps: ['Diagnóstico gratuito', 'Presupuesto personalizado', 'Plan de implementación'],
    button: { label: 'Hablemos de tu proyecto', to: '/contacto' },
  },
}
