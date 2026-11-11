/* ---------- 11. CERTIFICACIONES (/certificaciones) ---------- */
export const certificaciones = {
  seo: {
    title: 'Certificaciones | AQuanta',
    description: 'AQuanta cuenta con certificación ISO 9001 e ISO/IEC 27001 y un equipo certificado por Acronis, Fortinet, Huawei, AWS, Microsoft, HPE, VMware, Veeam y Cisco.',
  },
  hero: {
    h1: 'Certificaciones',
    text: 'Ingeniería y comerciales',
    img: '/img/case-2.jpg',
    video: '/video/certificaciones.mp4', // clip de Pexels (ver public/video/CREDITOS.txt)
  },
  iso: {
    eyebrow: 'CERTIFICADOS ISO',
    title: 'Certificados ISO',
    issuer: 'Emitidos por TÜV Rheinland Cert GmbH.',
    scope: 'Alcance: Comercialización, implementación, mantenimiento y soporte de soluciones tecnológicas en nuestros seis pilares principales de servicios, tales como: soporte de infraestructura de equipos, programas informáticos y centros de datos, respaldos, redes, nube, ciberseguridad y externalización.',
    button: 'Ver certificado',
    // TODO: colocar los certificados en /public/docs/
    items: [
      { norma: 'ISO/IEC 27001:2022', registro: '01 153 2432271', titular: 'AQUANTA INGENIERIA COMPUTACIONAL SpA', desde: '2025-03-07', hasta: '2028-03-06', emision: '2025-03-11', file: '/docs/certificado-iso-27001.pdf', seal: '/logo/sellos/iso-27001.png' },
      { norma: 'ISO 9001:2015', registro: '01 100 2432271', titular: 'AQUANTA INGENIERIA COMPUTACIONAL SpA', desde: '2025-02-08', hasta: '2028-02-07', emision: '2025-02-20', file: '/docs/certificado-iso-9001.pdf', seal: '/logo/sellos/iso-9001.png' },
    ],
  },
  badges: {
    eyebrow: 'EQUIPO',
    title: 'Certificaciones del equipo',
    all: 'Todas',
    // Insignias en /public/logo/certs/<fabricante>-<cert>.webp
    items: [
      { fabricante: 'Acronis', certs: ['Associate Cybersecurity (Tech)', 'Fundamentals (Tech)', 'Associate Backup and Recovery (Tech)', 'Professional Security Awareness Training (Cloud Sales)', 'Fundamentals (Cloud Sales)', 'Fundamentals (Cloud Tech)'] },
      { fabricante: 'Fortinet', certs: ['Certified Associate Cybersecurity', 'Certified Fundamentals Cybersecurity'] },
      { fabricante: 'Huawei', certs: ['HCSP Field', 'HCIA Digital Power'] },
      { fabricante: 'AWS', certs: ['Cloud Practitioner', 'Solutions Architect Associate'] },
      { fabricante: 'Microsoft', certs: ['Azure Administrator Associate', 'Azure Solutions Architect Expert'] },
      { fabricante: 'HPE', certs: ['HPE Sales Hybrid Cloud Solutions (2023)', 'HPE ATP Hybrid Cloud', 'Workload Solution HPE GreenLake', 'Services Partner Silver', 'Services Partner HPE Pointnext Services Silver', 'Solution Provider Silver'] },
      { fabricante: 'Aruba', certs: ['Solution Provider Silver Partner'] },
      { fabricante: 'VMware', certs: ['Certified Professional Data Center Virtualization 2022', 'Certified Professional Data Center Virtualization 2022 (segunda insignia)'] },
      { fabricante: 'Veeam', certs: ['Certified Engineer V9', 'Certified Engineer 2020', 'Cloud & Service Provider Registered'] },
      { fabricante: 'Paessler', certs: ['Partner Silver'] },
      { fabricante: 'Cisco', certs: ['Networking Academy: Introduction to Cybersecurity', 'Cisco Qualified Series 700 Completed'] },
    ],
  },
}
