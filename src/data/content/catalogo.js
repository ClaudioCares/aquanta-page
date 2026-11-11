/* ---------- CATÁLOGO DE EQUIPOS Y SUMINISTROS (sección de Energía) ----------
   Equipos tomados del catálogo de itelogic.com (soluciones/energia y soluciones/datacenter).
   Las descripciones están redactadas para este sitio a partir de las fichas; las imágenes
   están en /public/img/productos/ (origen: Descargas/imagnes para pagina/cosas itelogic). */

export const catalogo = {
  eyebrow: 'EQUIPOS Y SUMINISTROS',
  title: 'Catálogo de energía y data center',
  lead: 'Equipos de respaldo, almacenamiento, generación y data center modular que integramos en nuestros proyectos. Filtra por categoría para encontrar el que necesitas.',
  all: 'Todos',
  categories: [
    { key: 'ups', label: 'Respaldo UPS y litio', area: 'Energía' },
    { key: 'ci', label: 'FV y almacenamiento C&I', area: 'Energía' },
    { key: 'gran-escala', label: 'Almacenamiento a gran escala', area: 'Energía' },
    { key: 'dc-modular', label: 'Data center modular', area: 'Data center' },
    { key: 'dc-prefab', label: 'Data center prefabricado', area: 'Data center' },
    { key: 'dc-clima', label: 'Enfriamiento inteligente', area: 'Data center' },
    { key: 'dc-gestion', label: 'Gestión inteligente (DCIM)', area: 'Data center' },
  ],
  items: [
    /* ===== Respaldo UPS y litio ===== */
    { slug: 'forza-fdc-1002r-i', marca: 'Forza', titulo: 'FDC-1002R-I', cat: 'ups', texto: 'UPS en línea de 1000 VA / 900 W con onda sinusoidal pura y tres salidas IEC. Formato torre o rack para equipos de red y servidores pequeños.', specs: ['1000 VA / 900 W', '220 V', 'Torre o rack'] },
    { slug: 'forza-fdc-1502r', marca: 'Forza', titulo: 'FDC-1502R', cat: 'ups', texto: 'UPS en línea de 1500 VA / 1350 W con cuatro salidas y onda sinusoidal. Respaldo de emergencia en formato torre o rack.', specs: ['1500 VA / 1350 W', '220 V', 'Torre o rack'] },
    { slug: 'forza-fdc-3002r', marca: 'Forza', titulo: 'FDC-3002R', cat: 'ups', texto: 'UPS en línea de 3 kVA / 2700 W con seis salidas y onda sinusoidal. Pensada para salas TI pequeñas y gabinetes de comunicaciones.', specs: ['3 kVA / 2700 W', '220 V', 'Torre o rack'] },
    { slug: 'forza-fdc-110k', marca: 'Forza', titulo: 'FDC-110K', cat: 'ups', texto: 'UPS en línea de 10 kVA / 10 kW con transformador, escalable en autonomía. Formato torre para cargas críticas de 120/240 V.', specs: ['10 kVA / 10 kW', '120 / 240 V', 'Escalable'] },
    { slug: 'forza-ftp-3xxk', marca: 'Forza', titulo: 'FTP-3xxK', cat: 'ups', texto: 'Familia de UPS trifásicas de 380 V con factor de potencia 1 y salida sinusoidal, escalable desde 10 hasta 80 kVA para respaldo de emergencia industrial.', specs: ['10 a 80 kVA', 'Trifásica 380 V', 'PF 1'] },
    { slug: 'gxt5-3000irt2uxl', marca: 'Vertiv', titulo: 'Liebert GXT5 3 kVA', cat: 'ups', texto: 'UPS de doble conversión en línea con factor de potencia unitario y pantalla LCD. Autonomía ampliable con gabinetes de baterías externos de detección automática.', specs: ['3 kVA', 'Doble conversión', 'Rack 2U o torre'] },
    { slug: 'gxt5li-3000irt2uxl', marca: 'Vertiv', titulo: 'Liebert GXT5 Li 3 kVA', cat: 'ups', texto: 'Versión con baterías de ion-litio del GXT5: doble conversión en línea, sin tiempo de transferencia y factor de potencia de 0,9 o superior para servidores y redes.', specs: ['3 kVA', 'Ion-litio', 'Rack 2U o torre'] },
    { slug: 'gxt5-10kirt5uxln', marca: 'Vertiv', titulo: 'Liebert GXT5 10 kVA', cat: 'ups', texto: 'UPS de doble conversión en línea de 10 kVA con factor de potencia unitario, gestión de red completa y actualización remota. Protege ante cortes, caídas y sobretensiones.', specs: ['10 kVA', 'Doble conversión', 'Rack 5U o torre'] },
    { slug: 'liebert-ita2-30-kva', marca: 'Vertiv', titulo: 'Liebert ITA2 30 kVA', cat: 'ups', texto: 'UPS compacta en formato rack o torre con factor de potencia de salida unitario. Su amplio rango de entrada reduce el uso de la batería y alarga su vida útil.', specs: ['30 kVA', 'PF unitario', 'Rack o torre'] },
    { slug: 'vertiv-powerups-9000', marca: 'Vertiv', titulo: 'PowerUPS 9000', cat: 'ups', texto: 'Plataforma UPS modular de alta potencia, muy compacta y con monitoreo digital. Se integra al tren de potencia existente de empresas y centros de datos sin cambiar la infraestructura.', specs: ['Modular', 'Monitoreo digital', 'Data center'] },
    { slug: 'vertiv-hpl', marca: 'Vertiv', titulo: 'Vertiv HPL', cat: 'ups', texto: 'Gabinete de baterías de ion-litio en rack estándar de 24 pulgadas con seis módulos de 78 Ah. Opera hasta 30 °C, con BMS redundante y garantía de 10 años.', specs: ['38 kWh', '200 kW', 'Garantía 10 años'] },
    { slug: 'ups-2000-h', marca: 'Huawei', titulo: 'UPS2000-H', cat: 'ups', texto: 'UPS de doble conversión en línea de 6 a 10 kVA para escenarios pequeños, en rack o torre, con 96 % de eficiencia y Wi-Fi integrado para controlar el estado desde la app móvil.', specs: ['6 a 10 kVA', 'Eficiencia 96 %', 'Rack o torre'] },
    { slug: 'ups-5000-e', marca: 'Huawei', titulo: 'UPS5000-E', cat: 'ups', texto: 'UPS modular de 30 a 800 kVA para centros de datos medianos. Sus módulos intercambiables en caliente reducen el mantenimiento a cinco minutos y elevan la disponibilidad.', specs: ['30 a 800 kVA', 'Hot-swap', 'Eficiencia 96 %'] },
    { slug: 'ups-5000-h', marca: 'Huawei', titulo: 'UPS5000-H', cat: 'ups', texto: 'UPS modular de alta densidad de 200 a 1600 kVA con módulos de 100 kVA en 3U: hasta 1 MVA en un solo rack. El modo S-ECO alcanza 99,1 % de eficiencia.', specs: ['200 a 1600 kVA', '1 MVA por rack', 'S-ECO 99,1 %'] },
    { slug: 'smartli', marca: 'Huawei', titulo: 'SmartLi', cat: 'ups', texto: 'Almacenamiento en baterías de litio para UPS de centros de datos medianos y grandes. Larga vida útil, diseño compacto y mantenimiento sencillo para energía de reserva segura.', specs: ['Litio', 'Compacto', 'Data center'] },
    { slug: 'huawei-fusionpower9000', marca: 'Huawei', titulo: 'FusionPower9000', cat: 'ups', texto: 'Solución de alimentación eléctrica prefabricada para exteriores, diseñada para centros de datos a gran escala.', specs: ['Exterior', 'Gran escala', 'Prefabricado'] },

    /* ===== FV y almacenamiento C&I ===== */
    { slug: 'huawei-sun2000-150k-mg0', marca: 'Huawei', titulo: 'SUN2000-150K-MG0', cat: 'ci', texto: 'Inversor fotovoltaico de 150 kW para plantas comerciales e industriales. Combinado con almacenamiento, se adapta a entornos exigentes como acero, transporte, textil u hormigón.', specs: ['150 kW', 'Inversor FV', 'C&I'] },
    { slug: 'huawei-luna2000-241-series', marca: 'Huawei', titulo: 'LUNA2000 serie 241', cat: 'ci', texto: 'Sistema de almacenamiento híbrido para C&I con refrigeración líquida y capacidad de formación de red (grid-forming).', specs: ['ESS C&I', 'Refrigeración líquida', 'Grid-forming'] },
    { slug: 'luna2000-200kwh-2h1', marca: 'Huawei', titulo: 'LUNA2000-200KWH-2H1', cat: 'ci', texto: 'Sistema Smart String ESS de 200 kWh para aplicaciones comerciales e industriales. Cada pack de baterías tiene su propia BMU, lo que mejora la eficiencia y la seguridad.', specs: ['200 kWh', 'Smart String', 'BMU por pack'] },
    { slug: 'sigenergy-sigenstack', marca: 'Sigenergy', titulo: 'SigenStack', cat: 'ci', texto: 'BESS modular apilable para aplicaciones comerciales. Simplifica la selección del sitio y la instalación, con gestión de seguridad a nivel de cada pack.', specs: ['Modular apilable', 'C&I', 'Seguridad por pack'] },
    { slug: 'sigenergy-ci-inverter', marca: 'Sigenergy', titulo: 'Sigen C&I Inverter', cat: 'ci', texto: 'Inversor comercial e industrial muy compacto y liviano para su rango de potencia, fácil de transportar e instalar. Incluye puerto de batería para conectar SigenStack.', specs: ['Inversor C&I', 'Compacto', 'Puerto BESS'] },
    { slug: 'sigenergy-business-energy-gateway', marca: 'Sigenergy', titulo: 'Business Energy Gateway', cat: 'ci', texto: 'Centro de control de la microrred: integra el inversor híbrido y SigenStack para gestionar la energía, dar respaldo continuo y escalar en paralelo desde kilovatios hasta megavatios.', specs: ['Microrred CC', 'kW a MW', 'Respaldo continuo'] },

    /* ===== Almacenamiento a gran escala ===== */
    { slug: 'luna2000-4472-2s', marca: 'Huawei', titulo: 'LUNA2000-4472-2S', cat: 'gran-escala', texto: 'Sistema de almacenamiento Smart String con capacidad de formación de red para proyectos de gran escala y estabilización de la red eléctrica.', specs: ['Gran escala', 'Grid-forming', 'Smart String'] },
    { slug: 'luna2000-2-0mwh', marca: 'Huawei', titulo: 'LUNA2000-2.0MWH', cat: 'gran-escala', texto: 'Contenedor BESS todo en uno de 2,0 MWh con carga y descarga de hasta 2 MW, ampliable. Integra distribución, monitoreo, control ambiental, extinción de incendios y cableado, con Smart PCS acoplado en AC.', specs: ['2,0 MWh', 'Hasta 2 MW', 'Prefabricado'] },

    /* ===== Data center modular ===== */
    { slug: 'fusion-module-500', marca: 'Huawei', titulo: 'FusionModule500', cat: 'dc-modular', texto: 'Micro data center en un solo gabinete para sucursales y sitios pequeños: UPS, PDU, SmartLi, enfriamiento, monitoreo y extinción opcional, probado en fábrica para despliegue plug-and-play.', specs: ['1 gabinete', 'Sucursales', 'Plug-and-play'] },
    { slug: 'fusion-module-800', marca: 'Huawei', titulo: 'FusionModule800', cat: 'dc-modular', texto: 'Data center modular pequeño con pasillo confinado, escalable de 1 a 15 gabinetes con redundancia N+1 y enfriamiento de alta densidad en el mismo rack.', specs: ['1 a 15 gabinetes', 'N+1', 'Pasillo confinado'] },
    { slug: 'fusion-module-2000', marca: 'Huawei', titulo: 'FusionModule2000', cat: 'dc-modular', texto: 'Data center modular de sala completa para empresas, finanzas, gobierno y operadores. Alimentación, enfriamiento, racks, estructura, cableado y gestión en un solo módulo de entrega rápida.', specs: ['Sala completa', 'Tier III / IV', 'Entrega rápida'] },

    /* ===== Data center prefabricado ===== */
    { slug: 'fusion-dc-1000a', marca: 'Huawei', titulo: 'FusionDC1000A', cat: 'dc-prefab', texto: 'Data center prefabricado todo en uno en módulo ISO de 20 o 40 pies para exteriores. Llega probado de fábrica y resiste sismos, viento, polvo y agua.', specs: ['ISO 20 / 40 pies', 'Exterior', 'Plug-and-play'] },
    { slug: 'fusion-dc-1000b', marca: 'Huawei', titulo: 'FusionDC1000B', cat: 'dc-prefab', texto: 'Data center prefabricado y modular de tamaño pequeño y mediano para exteriores. Reduce a la mitad el plazo de puesta en marcha e integra enfriamiento, alimentación y O&M inteligentes.', specs: ['Pequeño y mediano', 'Exterior', 'Plazo reducido'] },
    { slug: 'fusion-dc-1000c', marca: 'Huawei', titulo: 'FusionDC1000C', cat: 'dc-prefab', texto: 'Data center prefabricado sin obra civil para colocación, nube y cómputo de IA. Permite crecer piso por piso e integra IA en el enfriamiento y la alimentación para mejorar el PUE.', specs: ['Sin obra civil', 'Crece por piso', 'IA en PUE'] },

    /* ===== Enfriamiento inteligente ===== */
    { slug: 'fusioncol8000-e', marca: 'Huawei', titulo: 'FusionCol8000-E', cat: 'dc-clima', texto: 'Enfriamiento indirecto por evaporación para grandes centros de datos. Prefabricado, con expansión directa integrada y free cooling para bajar el PUE.', specs: ['Evaporativo indirecto', 'Free cooling', 'Prefabricado'] },
    // TODO: la fuente no entrega descripción para FusionCol8000-A
    { slug: 'fusioncol8000-a', marca: 'Huawei', titulo: 'FusionCol8000-A', cat: 'dc-clima', texto: 'Unidad de enfriamiento inteligente de la familia FusionCol8000 para centros de datos.', specs: ['Enfriamiento inteligente'] },
    { slug: 'fusioncol8000-c', marca: 'Huawei', titulo: 'FusionCol8000-C', cat: 'dc-clima', texto: 'Enfriamiento por agua fría con flujo de aire horizontal en sala para data centers medianos y grandes. Admite agua a mayor temperatura y no requiere piso técnico.', specs: ['Agua fría', 'Flujo horizontal', 'Sin piso técnico'] },

    /* ===== Gestión inteligente ===== */
    { slug: 'neteco6000', marca: 'Huawei', titulo: 'NetEco6000', cat: 'dc-gestion', texto: 'Sistema de gestión local de infraestructura (DCIM) con visualización 3D, monitoreo de dispositivos, app móvil, video y O&M automatizado para optimizar recursos y costos.', specs: ['DCIM', 'Visualización 3D', 'O&M automático'] },
    { slug: 'icooling', marca: 'Huawei', titulo: 'iCooling', cat: 'dc-gestion', texto: 'Optimización de eficiencia energética con IA a nivel de sistema para grandes data centers. Ajusta las políticas de enfriamiento en tiempo real y reduce el PUE entre 8 y 15 %.', specs: ['IA', 'PUE -8 a -15 %', 'Tiempo real'] },
    { slug: 'edcm', marca: 'Huawei', titulo: 'EDCM', cat: 'dc-gestion', texto: 'Gestión en la nube de data centers de borde: mapa GIS, monitoreo de dispositivos, app, video y alarmas para operar y mantener sitios remotos con menor costo.', specs: ['Nube', 'Edge', 'Mapa GIS'] },
  ].map((p) => ({ ...p, img: `/img/productos/${p.slug}.webp` })),
}
