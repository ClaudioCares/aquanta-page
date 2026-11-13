/* ---------- 3. INICIO (/) ---------- */
export const home = {
  seo: {
    title: 'AQuanta | Continuidad operativa, data center, ciberseguridad y energía',
    description: 'Más de 25 años integrando soluciones de data center, ciberseguridad, energía y cloud para la continuidad operativa de empresas en Chile, Colombia y Perú.',
  },
  hero: {
    // CONFIRMAR: Nosotros decía "más de 20 años"; el Club de Ingenieros cumple 21 años
    eyebrow: 'MÁS DE 25 AÑOS DE EXPERIENCIA',
    h1: 'Sosteniendo la continuidad operativa de nuestros clientes',
    text: 'Integramos soluciones a la medida para empresas en el ámbito de la seguridad, observabilidad y rendimiento en cada etapa de su operación.',
    motto: '', // lema quitado del hero a pedido del equipo (2026-11-11); el texto sigue en el contenido original
    img: '/img/hero-intro.jpg',
    video: '/video/home.mp4', // clip de Pexels (ver public/video/CREDITOS.txt)
    buttons: [
      { label: 'Nuestras soluciones', to: '/servicios', variant: 'accent' },
      { label: 'Hablemos de tu proyecto', to: '/contacto', variant: 'dark' },
    ],
  },
  certifications: {
    eyebrow: 'CERTIFICACIONES',
    title: 'Estándares que respaldan nuestra operación',
    to: '/certificaciones',
  },
  methodology: {
    eyebrow: 'NUESTRA METODOLOGÍA',
    title: 'Del diagnóstico a la operación continua',
    steps: [
      { n: '01', titulo: 'Diagnóstico', subtitulo: 'Entendemos tu operación', texto: 'Evaluamos la infraestructura, necesidades y desafíos de tu negocio para identificar oportunidades de optimización y definir la solución adecuada.' },
      { n: '02', titulo: 'Implementación', subtitulo: 'Construimos la solución', texto: 'Diseñamos e implementamos soluciones de infraestructura, seguridad, redes, cloud y protección de datos según cada necesidad.' },
      { n: '03', titulo: 'Operación 24/7', subtitulo: 'Monitoreo, respuesta y reporte', texto: 'Monitoreamos, administramos y damos soporte a la plataforma para mantener la disponibilidad, seguridad y rendimiento de los servicios críticos.' },
    ],
  },
  portfolio: {
    eyebrow: 'NUESTRO PORTAFOLIO INTEGRADO',
    title: 'Plataformas de continuidad y resiliencia operacional',
    lead: 'Soluciones transversales diseñadas para proteger y escalar tu negocio, sin importar la industria.',
    items: [
      { titulo: 'Data Center', subtitulo: 'Infraestructura y continuidad', texto: 'Reducimos tus tiempos de downtime a cero con soporte experto, hiperconvergencia y recuperación ante desastres (DRaaS).', link: '/servicios/data-center', icon: 'server' },
      { titulo: 'Cloud', subtitulo: 'Plataformas cloud', texto: 'Lleva la potencia de la nube a tu negocio. Diseñamos entornos híbridos, públicos o privados para maximizar tu eficiencia operativa.', link: '/servicios/cloud', icon: 'cloud' },
      { titulo: 'Energía', subtitulo: 'Continuidad energética', texto: 'Soluciones de respaldo y calidad de energía para asegurar que tu infraestructura de misión crítica opere sin interrupciones.', link: '/servicios/energia', icon: 'bolt' },
      { titulo: 'Ciberseguridad y Análisis', subtitulo: 'Protección integral', texto: 'Resguardamos tus activos de información y plataformas de negocio con estrategias avanzadas de seguridad y prevención.', link: '/servicios/ciberseguridad', icon: 'shield' },
      { titulo: 'Servicios Profesionales', subtitulo: 'Arquitectura e ingeniería', texto: 'Consultoría experta y diseño de soluciones. Nuestro equipo certificado acompaña tu proyecto desde la preventa hasta la ejecución.', link: '/servicios/servicios-profesionales', icon: 'grid' },
      { titulo: 'Mesa de Ayuda', subtitulo: 'Soporte especializado 24/7', texto: 'Gestión de continuidad operativa y mesa de servicios experta para asegurar el correcto funcionamiento de tus plataformas tecnológicas.', link: '/servicios/servicios-profesionales#mesa-de-servicios', icon: 'headset' },
    ],
  },
  brands: {
    title: 'Marcas que nos respaldan',
    items: ['HPE', 'Veeam', 'Fortinet', 'IBM', 'i2', 'Acronis', 'Cisco', 'VMware', 'Aruba', 'Microsoft', 'Huawei', 'Sophos', 'Safetica', 'Kaspersky', 'Dell', 'RSA', 'Radware', 'ShadowDragon', 'Zella DC', 'Observer'],
  },
  // CONFIRMAR: permiso para publicar estos logos
  clients: {
    eyebrow: 'CLIENTES',
    title: 'Confían en nosotros',
    // CONFIRMAR: rubros mencionados en la bajada
    lead: 'Organizaciones de salud, medios, minería, telecomunicaciones, industria, educación y sector público operan su infraestructura crítica con AQuanta.',
    items: ['LUN', 'Hospital Dipreca', 'Hospital del Profesor', 'FALP', 'Cochilco', 'Canal 13', 'CHV', 'CCU', 'CMPC', 'Vestas', 'Tecnovoa', 'NCG', 'Autopista', 'Iconstruye', 'Sovos', 'STG', 'SAG', 'PUC', 'PTLA', 'Mutual', 'Minvu', 'Mega', 'Capstone Copper', 'Molymet', 'Claro Chile', 'Capredena', 'Empresas Jordan', 'UMCE'],
  },
  contact: {
    eyebrow: 'HABLEMOS',
    title: 'Aumenta tu gestión TI y agiliza tu compañía',
    text: 'Solicita tu asesoría con uno de nuestros expertos, con más de 25 años en la industria integrando soluciones TI a medida.',
  },
}
