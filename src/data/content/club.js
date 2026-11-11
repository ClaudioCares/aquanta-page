/* ---------- 13. CLUB DE INGENIEROS 2026 (/club-de-ingenieros) ---------- */
export const club = {
  seo: {
    title: 'Club de Ingenieros AQuanta 2026',
    description: 'El encuentro anual de AQuanta con clientes, partners y amigos. Revive la versión 2026 del Club de Ingenieros con HPE, Microsoft, VMware, Acronis, Dell y Cisco.',
  },
  hero: {
    logo: '/logo/club-de-ingenieros.png', // TODO: logo propio del Club de Ingenieros
    eyebrow: 'ENCUENTRO · TECNOLOGÍA · PERSONAS · FUTURO',
    h1: 'Club de Ingenieros AQuanta 2026',
    img: '/img/case-1.jpg',
    video: '/video/club.mp4', // clip de Pexels (ver public/video/CREDITOS.txt)
  },
  chronicle: {
    title: 'Estamos con el corazón contento',
    paragraphs: [
      'Desde hace 21 años, nuestro evento anual Club de Ingenieros busca ser un aporte a la industria y un reencuentro con nuestros clientes y amigos.',
      'Agradecemos a todos nuestros aliados estratégicos que, como siempre, nos apoyaron para que todo resultara; trabajando en equipo se logró el objetivo. A quienes participaron como expositores, gracias de corazón por su tiempo, conocimientos y compañía en este camino.',
    ],
  },
  speakers: {
    eyebrow: 'EXPOSITORES',
    title: 'Expositores',
    items: [
      { nombre: 'Héctor Urrutia', empresa: 'Hewlett Packard Enterprise' },
      { nombre: 'Ariel Silva', empresa: 'Microsoft Security', partner: 'Licencias OnLine' },
      { nombre: 'Álvaro Faundez', empresa: 'VMware by Broadcom', partner: 'Adistec' },
      { nombre: 'Guillermo Márquez', empresa: 'Acronis' },
      { nombre: 'Felipe Montenegro Pohlhammer', empresa: 'Dell Technologies' },
      { nombre: 'Rodrigo Cortés', empresa: 'Cisco', partner: 'TECNOGLOBAL' },
    ],
    text: 'También nos acompañaron Veeam Backup and Disaster Recovery, junto a Adistec, y nuestros amigos de i2 Group.',
  },
  band: [
    'Muchas gracias a todos quienes nos acompañaron en esta versión 2026.',
    'Les dejamos nuestro «PULSO VITAL» y los esperamos el próximo año en «EL CLUB DE INGENIEROS» by AQuanta LATAM.',
  ],
  gallery: {
    eyebrow: 'GALERÍA',
    title: 'Galería',
    // TODO: fotos en /public/img/club/club-1.jpg ... club-7.jpg
    items: [
      'Juan Bustos, Gerente General AQuanta; Lucas Carmona, i2 Unitech Argentina; Carlos Paniagua y Margarita Vásquez, AQuanta; Germán Mena, Licencias OnLine; y Julio Salas, Rapsag.',
      'Manuel Flores, AQuanta, con Catherine Avendaño y José Antonio Navarro, HPE.',
      'Álvaro Faundez, VMware by Broadcom.',
      'Felipe Montenegro, Dell Technologies.',
      'Héctor Urrutia, Hewlett Packard Enterprise.',
      'Nicolás Carreño e Isaí Villalobos, AQuanta, con Guillermo Márquez y María Les Spalthoff, Acronis.',
      'Nuestro partner estratégico Adistec, presente con Veeam y VMware by Broadcom.',
    ].map((caption, i) => ({ caption, img: `/img/club/club-${i + 1}.webp` })),
  },
}
