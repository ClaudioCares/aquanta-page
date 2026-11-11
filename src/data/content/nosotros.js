/* ---------- 4. NOSOTROS (/nosotros) ---------- */
export const nosotros = {
  seo: {
    title: 'Nosotros | AQuanta Ingeniería',
    description: 'Conoce a AQuanta Ingeniería: más de dos décadas integrando tecnología, nuestra misión, visión, valores y el equipo detrás de cada proyecto.',
  },
  hero: {
    eyebrow: 'AQuanta Ingeniería',
    // CONFIRMAR cifra de años
    h1: 'Integrando tecnología de vanguardia por más de 25 años',
    img: '/img/mission.jpg',
    video: '/video/nosotros.mp4', // clip de Pexels (ver public/video/CREDITOS.txt)
  },
  about: {
    quote: '"En la Grecia antigua, los navegantes utilizaban el concepto de AQuanta para identificar los mares con aguas tranquilas, profundas y seguras. 2500 años después, en el apogeo de la cibernética, el concepto AQuanta sigue estando presente, continúa siendo el lugar para navegar serenos en los complejos océanos del conocimiento y las tecnologías."',
    paragraphs: [
      // CONFIRMAR: unificar con "más de 25 años" del inicio
      'AQuanta ha estado presente en la industria de las Tecnologías de la Información por más de 20 años, en una exitosa trayectoria que nos ha permitido consolidarnos en el mercado. En ello han sido pilares fundamentales los valores que nos inspiran y mueven nuestro quehacer: compromiso, para estar presentes en todos los procesos de la implementación de nuestras soluciones, y profesionalismo, que nos distingue por entregar una valiosa y convincente propuesta de valor de productos y servicios del más alto nivel.',
      'Nos destacamos en el mercado TI con más de dos décadas de trayectoria. AQuanta cuenta con la confianza de sus clientes y partners gracias a una estrategia de servicio con gran valor agregado y profesionalismo, que ha derivado en soluciones consistentes, estables y continuas en el tiempo.',
    ],
  },
  purpose: [
    { titulo: 'Propósito', texto: 'Dar un sentido al negocio, posicionándonos como una organización comprometida con generar un impacto positivo en la sociedad, el entorno y el medio ambiente donde opera.', icon: 'compass' },
    { titulo: 'Misión', texto: 'Ser los mejores socios en los campos de Ingeniería e Integración Tecnológica, logrando crear sólidos vínculos de confianza mutua con nuestros clientes, producto de un trabajo profesional y efectivo.', icon: 'target' },
    { titulo: 'Visión', texto: 'Lograr que nuestro trabajo potencie la gestión de negocios de nuestros clientes, optimizando sus niveles y uso de sus estructuras informáticas y de comunicaciones, haciéndolos ganar ventajas cualitativas frente a los competitivos mercados.', icon: 'eye' },
  ],
  values: {
    title: 'Valores',
    items: [
      { valor: 'Adaptabilidad', texto: 'Tomamos las acciones necesarias y oportunas para ajustarnos a la organización y su entorno.' },
      { valor: 'Profesionalismo', texto: 'Realizamos nuestras actividades con efectividad y respeto.' },
      { valor: 'Compromiso', texto: 'Vamos más allá de cumplir con una obligación: ponemos en juego nuestra capacidad para sacar adelante todo lo que se nos ha confiado.' },
      { valor: 'Confianza', texto: 'Cabal seguridad de que una persona va a actuar como ha declarado hacerlo y como se espera que actúe.' },
      { valor: 'Respeto', texto: 'Reconocemos y valoramos en forma integral a los demás como un legítimo otro.' },
    ],
  },
  team: {
    title: 'Equipo',
    groups: [
      {
        title: 'Gerencia',
        people: [
          { nombre: 'Juan Bustos', cargo: 'Gerente General', correo: 'jbustos@aquanta.cl' },
          { nombre: 'Carlos Cánepa', cargo: 'Gerente Regional de Negocios', correo: 'ccanepa@aquanta.cl' },
          // CONFIRMAR: Nosotros decía Jonatan, Servicios Profesionales decía Jonathan
          { nombre: 'Jonathan Venturelli', cargo: 'Gerente de Arquitectura e Innovación', correo: 'jventurelli@aquanta.cl' },
          { nombre: 'Pamela Villanueva', cargo: 'Gerente de Administración y Finanzas', correo: 'pvillanueva@aquanta.cl' },
        ],
      },
      {
        title: 'Unidades de negocio',
        people: [
          { nombre: 'Alexis Ponce', cargo: 'Líder Área Energía', correo: 'aponce@aquanta.cl' },
          { nombre: 'Felipe Bustos', cargo: 'Jefe de Ventas', correo: 'fbustos@aquanta.cl' },
          { nombre: 'Carlos Paniagua', cargo: 'Líder Área Ciberseguridad y Análisis', correo: 'cpaniagua@aquanta.cl' },
          { nombre: 'Cristián Cortés', cargo: 'Líder de Servicios Gestionados', correo: 'ccortes@aquanta.cl' },
        ],
      },
      {
        title: 'Consultores',
        photos: false,
        people: [
          { nombre: 'Margarita Vásquez', cargo: 'Consultora', correo: 'mvasquez@aquanta.cl' },
          { nombre: 'Carolina Melo', cargo: 'Consultora', correo: 'cmelo@aquanta.cl' },
          { nombre: 'Héctor Moya', cargo: 'Consultor', correo: 'hmoya@aquanta.cl' },
          { nombre: 'Manuel Flores', cargo: 'Consultor', correo: 'mflores@aquanta.cl' },
          { nombre: 'Fernando Peyresblanques', cargo: 'Consultor', correo: 'fpeyresblanques@aquanta.cl' },
          // CONFIRMAR: el sitio viejo decía GUTIÉREZ y el correo no sigue el patrón inicial+apellido
          { nombre: 'Carlos Gutiérrez', cargo: 'Consultor', correo: 'gutierrez@aquanta.cl' },
          { nombre: 'Pablo Ramírez', cargo: 'Consultor', correo: 'pramirez@aquanta.cl' },
        ],
      },
    ],
  },
  rse: {
    title: 'Responsabilidad social',
    items: ['Colegiosenchile.cl', 'Greenpeace', 'CODEFF', 'Rescatemos Juan Fernández'],
  },
}
