/* ---------- 6. CIBERSEGURIDAD Y ANÁLISIS (/servicios/ciberseguridad) ---------- */
export const ciberseguridad = {
  seo: {
    title: 'Ciberseguridad y Análisis | AQuanta',
    description: 'Ciberseguridad de punta a punta: cumplimiento de la Ley 21.663 y 21.719, SOC 24x7, EDR/XDR, Zero Trust, pentesting, respuesta a incidentes y análisis e inteligencia.',
  },
  hero: {
    eyebrow: 'SEGURIDAD Y ANÁLISIS',
    h1: 'Ciberseguridad',
    text: 'Integramos tecnología, consultoría y servicios especializados para acompañar todo el ciclo de ciberseguridad.',
    img: '/img/esc-telecom.jpg',
    video: '/video/ciberseguridad.mp4', // clip de Pexels (ver public/video/CREDITOS.txt)
    anchors: [
      { label: 'Soluciones', to: '#soluciones' },
      { label: 'Metodología', to: '#metodologia' },
      { label: 'Preguntas clave', to: '#faq' },
      { label: 'Equipo', to: '#equipo' },
    ],
    seals: true,
  },
  intro: {
    title: 'Protegemos cada etapa de tu operación',
    paragraphs: [
      'AQuanta integra tecnología, consultoría y servicios especializados para diseñar, implementar, operar y mejorar las capacidades de ciberseguridad y análisis de organizaciones públicas y privadas.',
      'Nuestro enfoque parte de las necesidades, riesgos y objetivos de cada organización, combinando tecnologías líderes, servicios especializados y alianzas estratégicas para acompañar todo el ciclo: diagnóstico, diseño, implementación, protección, monitoreo, respuesta y mejora continua.',
      'No buscamos entregar productos aislados, sino construir soluciones que permitan a nuestros clientes reducir riesgos, proteger su información, fortalecer su resiliencia, avanzar en el cumplimiento regulatorio y desarrollar capacidades de análisis e inteligencia.',
    ],
  },
  solutions: {
    id: 'soluciones',
    eyebrow: 'NUESTRO PORTAFOLIO',
    title: 'Soluciones de ciberseguridad y análisis',
    items: [
      { titulo: 'Gobierno, riesgo y cumplimiento', icon: 'award', items: ['Assessments y GAP analysis.', 'Gestión de riesgos y madurez.', 'Ley Marco de Ciberseguridad N°21.663.', 'Ley de Protección de Datos Personales N°21.719.', 'Lineamientos y controles ANCI.', 'ISO 27001, NIST, CIS y otros marcos aplicables.', 'Auditorías y roadmaps de ciberseguridad.', 'CISO as a Service.'] },
      { titulo: 'Protección de datos y riesgo interno', icon: 'lock', items: ['Data Loss Prevention (DLP).', 'Protección y clasificación de información.', 'IRM y análisis del comportamiento.', 'Prevención de fuga de información.', 'Borrado seguro.', 'Protección de datos personales.'] },
      { titulo: 'Endpoint, identidad y Zero Trust', icon: 'users', items: ['EDR / XDR / MDR.', 'IAM y gobierno de identidades.', 'MFA.', 'Gestión de privilegios.', 'Zero Trust / ZTNA.', 'Protección contra ransomware y malware.'] },
      { titulo: 'Seguridad de infraestructura, cloud y aplicaciones', icon: 'cloud', items: ['Seguridad perimetral.', 'Firewall / WAF / IDS / IPS.', 'Protección DDoS.', 'Seguridad de aplicaciones web.', 'Protección de APIs y gestión de bots.', 'Segmentación y microsegmentación.', 'SASE / ZTNA.', 'Cloud & Application Security.'] },
      { titulo: 'SOC y servicios administrados', icon: 'headset', items: ['SOC as a Service.', 'Monitoreo de seguridad 24x7.', 'SIEM y correlación de eventos.', 'MDR y Managed XDR.', 'Detección y respuesta ante amenazas.', 'Gestión y escalamiento de incidentes.'] },
      { titulo: 'Threat management y seguridad ofensiva', icon: 'target', items: ['Threat intelligence.', 'Análisis de vulnerabilidades.', 'Ethical hacking y pentesting.', 'Red Team / Purple Team.', 'Ingeniería social y simulaciones de phishing.'] },
      { titulo: 'Resiliencia y respuesta', icon: 'shield', items: ['Incident response.', 'Preparación y respuesta ante ransomware.', 'Continuidad operacional.', 'BCP / DRP.', 'Gestión de crisis y recuperación.'] },
      { titulo: 'Análisis e inteligencia', icon: 'search', items: ['Análisis investigativo.', 'Análisis visual y relacional.', 'Análisis de vínculos.', 'OSINT.', 'Investigación digital.', 'Análisis de grandes volúmenes de información.', 'Inteligencia aplicada a investigaciones y toma de decisiones.'] },
    ],
  },
  brands: ['Acronis', 'Safetica', 'RSA', 'Kaspersky', 'i2', 'Radware', 'Sophos', 'ShadowDragon', 'Observer'],
  faq: {
    id: 'faq',
    eyebrow: 'PREGUNTAS FRECUENTES',
    title: 'Cómo ayudamos a nuestros clientes',
    items: [
      { q: '¿Necesitas avanzar en el cumplimiento de la Ley 21.663, la Ley 21.719 o los requerimientos de la ANCI?', a: 'Evaluamos tu situación actual, identificamos brechas y construimos un roadmap que permita priorizar e implementar los controles necesarios.' },
      { q: '¿Sabes dónde está tu información sensible y quién tiene acceso a ella?', a: 'Te ayudamos a identificar, clasificar y proteger información crítica, reduciendo el riesgo de fuga de datos y amenazas internas.' },
      { q: '¿Puedes detectar y responder oportunamente ante un ciberataque?', a: 'Integramos capacidades EDR/XDR/MDR con monitoreo SOC y servicios de detección y respuesta.' },
      { q: '¿Qué estás haciendo para proteger tus aplicaciones web, APIs y servicios expuestos a Internet?', a: 'Implementamos capacidades para proteger aplicaciones, APIs, infraestructura y servicios frente a ataques, DDoS, bots maliciosos y amenazas de capa de aplicación.' },
      { q: '¿Necesitas investigar información compleja y descubrir relaciones que no son evidentes?', a: 'Nuestras capacidades de análisis e inteligencia permiten integrar, correlacionar y visualizar grandes volúmenes de información para apoyar investigaciones y procesos de toma de decisiones.' },
      { q: '¿Están adecuadamente protegidas las identidades y accesos de tu organización?', a: 'Implementamos MFA, IAM, gestión de privilegios y estrategias Zero Trust para reducir el riesgo asociado a credenciales y accesos no autorizados.' },
    ],
  },
  methodology: {
    id: 'metodologia',
    eyebrow: 'ENFOQUE DE CIBERSEGURIDAD',
    title: 'Metodología de protección integral',
    steps: [
      { n: 1, titulo: 'Diagnosticar', texto: 'Conocer el nivel actual de seguridad, identificar activos críticos, evaluar riesgos operativos, detectar vulnerabilidades técnicas y analizar brechas de cumplimiento normativo.' },
      { n: 2, titulo: 'Priorizar', texto: 'Clasificar vulnerabilidades y amenazas según su impacto y probabilidad, enfocando los recursos estratégicos en las áreas de mayor riesgo para la continuidad del negocio.' },
      { n: 3, titulo: 'Implementar controles esenciales', texto: 'Desplegar soluciones tecnológicas avanzadas y políticas de seguridad robustas, estableciendo barreras de defensa eficientes a nivel perimetral, de red y de usuarios finales.' },
      { n: 4, titulo: 'Proteger la información y los datos personales', texto: 'Aplicar protocolos de cifrado, gestión de identidades y controles de acceso estrictos para garantizar la confidencialidad e integridad de los datos sensibles de la organización.' },
      { n: 5, titulo: 'Monitorear y responder', texto: 'Vigilar continuamente la infraestructura tecnológica para detectar anomalías en tiempo real, permitiendo contener y neutralizar incidentes antes de que escalen.' },
      { n: 6, titulo: 'Evaluar y mejorar continuamente', texto: 'Realizar auditorías periódicas, pruebas de penetración y revisión de métricas para adaptar y madurar la estrategia de defensa ante la constante evolución de las ciberamenazas.' },
    ],
  },
  team: {
    id: 'equipo',
    eyebrow: 'NUESTRO EQUIPO',
    title: 'Conoce a los expertos detrás de tu seguridad',
    people: [
      { nombre: 'Carlos Paniagua', cargo: 'Líder Área Ciberseguridad', correo: 'cpaniagua@aquanta.cl' },
      { nombre: 'Carolina Melo', cargo: 'Área Ciberseguridad', correo: 'cmelo@aquanta.cl' },
    ],
  },
}
