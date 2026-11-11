/* ---------- 5. DATA CENTER (/servicios/data-center) ---------- */
export const dataCenter = {
  seo: {
    title: 'Data Center, HCI y DRaaS | AQuanta',
    description: 'Infraestructura de data center, hiperconvergencia, recuperación ante desastres (DRaaS), redes, seguridad perimetral y soporte de servidores Microsoft, Linux y VMware.',
  },
  hero: {
    eyebrow: 'DATA CENTER',
    h1: 'Infraestructura de Data Center',
    text: 'La información es el aire de tu empresa. Reducimos tus tiempos de downtime a cero y aseguramos la continuidad de tu negocio con soporte experto, hiperconvergencia y recuperación ante desastres (DRaaS).',
    img: '/img/hero-datacenter.jpg',
    video: '/video/data-center.mp4', // clip de Pexels (ver public/video/CREDITOS.txt)
    anchors: [
      { label: 'Servicios y redes', to: '#servicios' },
      { label: 'Soporte de servidores', to: '#soporte' },
      { label: 'Hiperconvergencia', to: '#hci' },
    ],
    seals: true,
  },
  intro: {
    title: 'Disponibilidad total para tomar mejores decisiones.',
    paragraphs: [
      'Vivimos en un mundo de constantes cambios que genera un incremento exponencial en los volúmenes de información. Esto exige mantener los sistemas actualizados para poder enfocarse en el crecimiento del negocio. En AQuanta Ingeniería realizamos consultorías especializadas para que los tiempos de downtime tiendan a cero, previniendo fallas de hardware, software o administración y manteniendo tu información siempre disponible con las herramientas líderes del mercado.',
    ],
  },
  services: {
    id: 'servicios',
    eyebrow: 'NUESTRO PORTAFOLIO',
    title: 'Servicios de infraestructura y redes',
    items: [
      { titulo: 'Auditoría y análisis de riesgo', icon: 'search', items: ['Análisis forense y pruebas de acceso.', 'Revisión de políticas y procesos de seguridad.', 'Auditoría de vulnerabilidades en dispositivos de red.', 'Capacity planning de servidores y comunicaciones.'] },
      { titulo: 'Diseño y optimización de redes', icon: 'network', items: ['Diseño, instalación y rediseño de redes LAN/WAN.', 'Diseño de topologías seguras internas y perimetrales.', 'Certificación de cableados bajo normas ISO-ANSI-TIA.', 'Diagnóstico y optimización de tráfico.'] },
      { titulo: 'Infraestructura eléctrica', icon: 'plug', items: ['Levantamiento y diseño eléctrico para TI.', 'Instalación y mantención de redes eléctricas.', 'Construcción de mallas a tierra.', 'Implementación de tableros eléctricos certificados.'] },
      { titulo: 'Implementación perimetral', icon: 'shield', items: ['Implantación y administración de firewall.', 'Soluciones IDS (Intrusion Detection System).', 'Configuración de equipamiento Cisco (routers, switches).', 'Pruebas de penetración a servicios de Internet.'] },
      { titulo: 'Seguridad de datos', icon: 'lock', items: ['Seguridad y alta disponibilidad con herramientas Symantec.', 'Definición de procesos estrictos de seguridad.', 'Auditoría continua de servidores.', 'Protección de plataformas de misión crítica.'] },
      { titulo: 'Aseguramiento de sistemas', icon: 'server', items: ['Hardening de sistemas operativos.', 'Aseguramiento de servidores web y mail.', 'Protección de servidores DNS.', 'Resguardo de máquinas críticas de comunicación.'] },
    ],
  },
  brands: ['HPE', 'Veeam', 'Dell', 'VMware', 'Cisco', 'IBM', 'Zella DC', 'Arcserve'],
  hci: {
    id: 'hci',
    eyebrow: 'HCI Y DRAAS',
    title: 'Evolución tecnológica y recuperación de desastres',
    items: [
      { titulo: 'Infraestructura hiperconvergente (HCI)', texto: 'La HCI combina recursos informáticos, almacenamiento y red en un solo sistema. Utiliza software y servidores x86 para sustituir el hardware caro y diseñado con fines específicos, reduciendo la complejidad del centro de datos y aumentando su escalabilidad de forma inmediata.' },
      { titulo: 'Ventajas de la tecnología vSAN', texto: 'Permite una evolución sencilla a la pila HCI completa con integración nativa en el hipervisor y en las principales clouds. Protege la inversión actual utilizando herramientas de virtualización existentes y ofrece recursos unificados gracias a su gestión basada en políticas.' },
      { titulo: 'Beneficios: agilidad y menores costos', texto: 'Elimina procesos manuales y simplifica las operaciones. Reduce tu inversión en capital (CAPEX) con una arquitectura de escalabilidad vertical y horizontal. Acelera el rendimiento de aplicaciones esenciales y bases de datos relacionales configurando el hardware en pocas horas.' },
      { titulo: 'Análisis estratégico (RPO y RTO)', texto: 'El RPO (punto de recuperación) y el RTO (tiempo de recuperación) son la base de un Plan de Continuidad de Negocio (BCP). Analizamos tus aplicaciones mediante un Análisis de Impacto (BIA) para establecer acciones viables que permitan reanudar tus procesos sin pérdida de información.' },
      { titulo: 'AQuanta DRaaS (como servicio)', texto: 'Nuestro servicio de Recuperación de Desastres como Servicio (DRaaS) te permite garantizar el RPO y RTO acordados sin duplicar tu infraestructura TI física, con una solución corporativa a una fracción del costo tradicional.' },
    ],
    levels: {
      intro: 'Clasificamos tu operación en tres niveles para optimizar tu inversión.',
      head: ['Nivel', 'Tipo de aplicación', 'RTO', 'RPO'],
      // CONFIRMAR: el sitio viejo decía "RTPO menor a 15 min" para el Nivel 1; se interpretó como RTO y RPO menores a 15 min
      rows: [
        ['Nivel 1', 'Críticas', 'menos de 15 min', 'menos de 15 min'],
        ['Nivel 2', 'Esenciales', '2 h', '4 h'],
        ['Nivel 3', 'No esenciales', '4 h', '24 h'],
      ],
    },
  },
  support: {
    id: 'soporte',
    eyebrow: 'SOPORTE',
    title: 'Soporte especializado de servidores y plataformas',
    items: [
      { titulo: 'Entornos Microsoft', icon: 'grid', texto: 'Instalación y soporte de todas las ediciones de Windows Server. Implementación de Active Directory, DNS, DHCP, WSUS, IIS, GPMC y ejecución de migraciones complejas hacia Microsoft 365 o Exchange.' },
      { titulo: 'Sistemas open source (Linux)', icon: 'terminal', texto: 'Reducción de costos de licenciamiento con distribuciones CentOS, Debian, Ubuntu y Red Hat. Soporte integral de firewall, VPN, filtros web, FTP, telefonía IP y portales cautivos para tu red.' },
      { titulo: 'Plataformas virtuales (VMware)', icon: 'layers', texto: 'Implementación y soporte de soluciones VMware (ESX, ESXi, vCenter, Workstation, Fusion). Desde un nodo con licencias gratuitas hasta entornos empresariales complejos y consolidados.' },
      { titulo: 'Virtualización de alta disponibilidad', icon: 'server', texto: 'Diseño y soporte de clústeres de alta disponibilidad con múltiples nodos conectados por una SAN a storage de alta velocidad, con tecnologías como Microsoft Hyper-V y Red Hat Enterprise Virtualization (RHEV).' },
    ],
  },
}
