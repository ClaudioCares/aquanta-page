/* ---------- 8. CLOUD (/servicios/cloud) ---------- */
export const cloud = {
  seo: {
    title: 'Cloud y virtualización | AQuanta',
    description: 'Backup como servicio, disaster recovery, nube híbrida y privada, virtualización y archiving para llevar la potencia de la nube a tu operación.',
  },
  hero: {
    eyebrow: '', // TODO: la fuente no define antetítulo para Cloud
    h1: 'Cloud y virtualización',
    text: 'Virtualiza tu infraestructura TI con las plataformas más confiables del mundo. Lleva la potencia de la computación en nube a tu centro de datos para reducir costos, maximizar la eficiencia y responder rápido a los requisitos de tu negocio.',
    img: '/img/sol-dc.jpg',
    video: '/video/cloud.mp4', // clip de Pexels (ver public/video/CREDITOS.txt)
    seals: true,
  },
  intro: {
    title: 'Servicios empresariales según demanda.',
    paragraphs: [
      'Las soluciones de virtualización empresarial te permiten aumentar el control de tu infraestructura TI y preservar la flexibilidad para elegir cualquier sistema operativo, aplicación y hardware. Al llevar la potencia de la nube a tu operación, virtualizas recursos de servidor, almacenamiento y redes, con niveles de consolidación de más de 15:1. Esto aumenta la disponibilidad, seguridad y escalabilidad de tus aplicaciones y simplifica la administración para que implementes tus próximos proyectos en la nube con confianza.',
    ],
  },
  services: {
    eyebrow: 'SERVICIOS',
    title: 'Soluciones cloud para tu continuidad',
    items: [
      { titulo: 'Backup como servicio (BaaS)', icon: 'download', items: ['Copia de seguridad personalizada e integrada en la nube.', 'Respaldo simple de servidores físicos y virtuales.', 'Copia de seguridad híbrida en nube local.', 'Replicación, cifrado y restauración granular.'] },
      { titulo: 'Almacenamiento global', icon: 'cloud', items: ['Programa de copia de seguridad personalizada.', 'Almacenamiento en la nube de hasta 1.000 GB.', 'Arquitectura con redundancia global.', 'Gestión centralizada de herramientas de backup.'] },
      { titulo: 'Monitor activo TI', icon: 'chart', items: ['Monitoreo en tiempo real de los componentes del data center.', 'Análisis de riesgo y salud para Active Directory (AD).', 'Monitoreo profundo para SQL Server.', 'Evaluación automatizada de riesgos de configuración.'] },
      { titulo: 'Seguridad y continuidad (SQL/AD)', icon: 'shield', items: ['Recomendaciones proactivas de seguridad.', 'Monitoreo de replicación de AD para nube y servidores.', 'Análisis de riesgo para SQL enfocado en 6 áreas críticas.', 'Visibilidad total para la toma de decisiones.'] },
      { titulo: 'Disaster recovery', icon: 'refresh', items: ['Recuperación de datos, hardware y software crítico.', 'Servidor físico y virtual replicado en la nube.', 'Imagen del servidor almacenada directo en la nube.', 'Recuperación de servidor preconfigurado con monitoreo remoto.'] },
      { titulo: 'Alta disponibilidad', icon: 'server', items: ['Identidades seguras en la nube con AD en cloud.', 'Protección de recursos TI críticos para la empresa.', 'Servidor AD listo para contingencia y autenticación de usuarios.', 'Rendimiento flexible y ajustable on-demand.'] },
    ],
  },
  brands: ['Acronis', 'Microsoft Azure'],
  models: {
    eyebrow: 'MODELOS',
    title: 'Diseñamos la arquitectura de nube exacta para tu negocio',
    items: [
      { titulo: 'Cloud híbrida: lo mejor de ambos mundos', texto: 'Cada nube es única y cada modelo híbrido es distinto. La nube híbrida combina lo mejor del entorno público y privado: mayor control de las cargas críticas en tu propio entorno, aprovechando la escalabilidad y flexibilidad de la nube pública.' },
      { titulo: 'Cloud privada: mayor control y privacidad', texto: 'Entornos de nube ejecutados fuera de tus instalaciones o provistos en tu centro de datos local, donde la distinción entre ubicación y propiedad pierde importancia. Reduce costos, simplifica la gestión, da flexibilidad on-demand y opera sin contratos de permanencia.' },
      { titulo: 'Beneficios: agilidad y menores costos', texto: 'Usamos virtualización para combinar los recursos del hardware físico en conjuntos compartidos, administrados desde una sola fuente. Así tu empresa obtiene el mayor nivel de control, seguridad, privacidad y fiabilidad técnica.' },
      { titulo: 'Virtualización de infraestructura (core)', texto: 'La base de cualquier entorno cloud. Reduce costos operacionales y de capital consolidando tus recursos de servidor y redes, simplifica la administración y mantén la libertad de operar con cualquier plataforma de software o hardware.' },
    ],
  },
  archiving: {
    eyebrow: 'ARCHIVING',
    title: 'Archiving y resguardo: el valor de tu información',
    // TODO: reemplazar fotos por imágenes reales de archiving
    items: [
      { titulo: 'El riesgo operativo', img: '/img/news-1.jpg', texto: '"¡Llevaba 3 horas trabajando en ese archivo y no lo encuentro!". En una era digital, perder un reporte no guardado o extraviar documentos recientes es una falla común que golpea directo la productividad de los equipos.' },
      { titulo: 'Fallas críticas de hardware', img: '/img/news-2.jpg', texto: '¿Qué pasa si un disco duro falla y se pierden 4 años de trabajo? El problema crece cuando la falla ocurre en el servidor principal de la empresa, comprometiendo bases de datos y la operación completa.' },
      { titulo: 'Continuidad del negocio', img: '/img/news-3.jpg', texto: 'Ningún medio es infalible, por nuevo o avanzado que sea. No poder recuperar la información de clientes, contabilidad o proyectos ha hecho desaparecer empresas enteras ante eventos inesperados.' },
      { titulo: 'Archiving inteligente', img: '/img/news-4.jpg', texto: 'Implementamos herramientas, procesos y buenos hábitos de almacenamiento y respaldo para que tu información histórica y crítica esté archivada de forma segura, inmutable y siempre disponible.' },
    ],
  },
}
