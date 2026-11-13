/* ---------- 7. ENERGÍA (/servicios/energia) ---------- */
export const energia = {
  seo: {
    title: 'Energía: salas eléctricas modulares, BESS, UPS y data center | AQuanta',
    description: 'Salas eléctricas modulares RF120, BESS Sigenergy y Huawei, UPS, generación FV y data centers FusionModule. De la red eléctrica a la carga crítica, en un solo sistema.',
  },
  hero: {
    eyebrow: 'ENERGÍA, INNOVACIÓN Y RESPALDO',
    h1: 'De la red eléctrica a la carga crítica, en un solo sistema',
    text: 'Diseñamos e integramos la infraestructura energética que respalda data centers, plantas industriales y operaciones críticas. Desde el almacenamiento solar hasta el módulo de datos, protegemos la continuidad de tu negocio.',
    img: '/img/energia/s6-2.webp', // contenedor BESS Huawei LUNA2000
    video: '/video/energia.mp4', // clip de Pexels (ver public/video/CREDITOS.txt)
    light: true,
    seals: true,
    anchors: [
      { label: 'Líneas de solución', to: '#pestanas' },
      { label: 'Catálogo de equipos', to: '#catalogo' },
      { label: 'Equipo', to: '#equipo' },
    ],
  },
  miniForm: { button: 'Solicitar presentación completa' },
  tabs: [
    /* ===== LÍNEA 1: RESPALDO UPS Y LITIO ===== */
    {
      key: 'ups',
      label: 'Respaldo UPS y litio',
      icon: 'bolt',
      sublabel: 'Huawei, Vertiv y Forza',
      catalogo: 'ups',
      intro: {
        title: 'Cero interrupciones, sin excepciones',
        // CONFIRMAR: bajada redactada a partir de las tarjetas de UPS del contenido
        text: 'Respaldo de energía para salas TI, centros de datos y cargas críticas: UPS de doble conversión desde 1 kVA hasta 1.600 kVA por gabinete, baterías de litio SmartLi y monitoreo predictivo para que la carga nunca se detenga.',
        img: '/img/energia/s14.webp', // UPS Huawei
        video: '/video/ups-gabinete.mp4', // gabinete de potencia Huawei (material vía itelogic; ver public/video/CREDITOS.txt)
      },
      sections: [
        {
          eyebrow: 'CONTINUIDAD UPS',
          title: 'Soluciones de respaldo para cada escala',
          img: '/img/energia/s9-3.webp',
          type: 'cards',
          items: [
            { titulo: 'Soluciones Edge (UPS2000)', icon: 'bolt', texto: 'Equipos de 1 a 6 kVA en formato torre o rack 1U, ideales para salas TI pequeñas y computación en el borde (edge). Doble conversión online, factor de potencia unitario (1.0) y alta eficiencia operativa.' },
            { titulo: 'Respaldo SmartLi (litio)', icon: 'battery', texto: 'Almacenamiento con baterías de litio Huawei: densidad energética 3 veces superior al plomo-ácido y 70% menos espacio físico. Recarga ultrarrápida, BMS inteligente integrado y vida útil prolongada.' },
            { titulo: 'Gran potencia (UPS5000)', icon: 'server', texto: 'Soluciones modulares de alta capacidad, escalables hasta 1.600 kVA por gabinete. Arquitectura hot-swap para reemplazar módulos en caliente sin detener la carga, y crecimiento conectando unidades en paralelo. Ideal para centros de datos corporativos.' },
            { titulo: 'Monitoreo predictivo (iPower)', icon: 'chart', texto: 'Plataforma de gestión inteligente que evalúa en tiempo real el estado de los componentes críticos (capacitores, ventiladores, baterías). Detecta anomalías antes de que ocurran y convierte el mantenimiento correctivo en predictivo.' },
          ],
        },
        {
          eyebrow: 'LITIO',
          title: 'Respaldo SmartLi (litio)',
          img: '/img/energia/s12.webp',
          type: 'text',
          text: 'Almacenamiento con baterías de litio Huawei: densidad energética 3 veces superior al plomo-ácido y 70% menos espacio físico. Recarga ultrarrápida, BMS inteligente integrado y vida útil prolongada.',
        },
      ],
    },

    /* ===== LÍNEA 2: BESS Y GENERACIÓN FV (Huawei + Sigenergy) ===== */
    {
      key: 'bess',
      label: 'BESS y generación FV',
      icon: 'battery',
      sublabel: 'Huawei + Sigenergy',
      catalogo: 'ci',
      anchors: [
        { label: 'Generación FV', to: '#fv' },
        { label: 'Almacenamiento', to: '#almacenamiento' },
        { label: 'Sigenergy', to: '#sigenergy' },
        { label: 'Energía propia', to: '#energia-propia' },
      ],
      intro: {
        title: 'Unidad de energía integral',
        text: 'De la red eléctrica a la carga crítica, en un solo sistema. Diseñamos e integramos la infraestructura energética que respalda data centers, plantas industriales y operaciones críticas con equipos Huawei y Sigenergy, desde el almacenamiento solar hasta el módulo de datos.',
        img: '/img/energia/s10.webp', // inversor y contenedor BESS Huawei
        video: '/video/bess.mp4', // edificio con FV y BESS (material Sigenergy; ver public/video/CREDITOS.txt)
      },
      sections: [
        {
          id: 'fv',
          eyebrow: 'GENERACIÓN FV',
          title: 'La energía que se guarda también se administra',
          img: '/img/energia/s5.webp',
          video: '/video/fv-gestion.mp4', // Huawei Solar (MoreEnergy-02), enlace entregado por AQuanta; ver public/video/CREDITOS.txt
          type: 'cards',
          items: [
            { titulo: 'BESS + solar', icon: 'sun', texto: 'Integración directa mediante acoplamiento DC al inversor híbrido (SigenStack). Máxima eficiencia de conversión sin necesidad de regulador externo.' },
            { titulo: 'Gestión inteligente', icon: 'chart', texto: 'Reducción de demanda en hora punta, respaldo automático ante cortes de red y capacidad probada para operación en isla (full off-grid).' },
            { titulo: 'Sigen Energy Gateway', icon: 'bolt', texto: 'Control desde el kW hasta el MW. Conmutación en 0 ms, conexión de múltiples inversores y control inteligente de generador diésel.' },
          ],
        },
        {
          id: 'almacenamiento',
          eyebrow: 'ALMACENAMIENTO BESS',
          title: 'Almacenamiento industrial y a gran escala',
          img: '/img/energia/s4.webp',
          lead: 'Solución de almacenamiento modular para proteger activos críticos ante microcortes, asegurando continuidad absoluta con transferencia de 0 ms y máxima seguridad.',
          type: 'cards',
          items: [
            { titulo: 'SigenStack C&I modular', icon: 'battery', texto: 'Módulos apilables de 48 kWh con química segura LiFePO4. Su arquitectura permite conectar hasta 21 unidades en paralelo, con una capacidad adaptable y una vida útil superior a 10.000 ciclos.', datos: [['Módulo', '48 kWh'], ['Química', 'LiFePO4'], ['Paralelo', 'hasta 21 unidades'], ['Ciclos', 'más de 10.000']] },
            { titulo: 'Huawei LUNA2000-215', icon: 'battery', texto: 'Solución industrial robusta que integra baterías con enfriamiento líquido y un PCS de 108 kW en un solo gabinete. Escala desde 215 kWh hasta proyectos de varios megavatios.', datos: [['PCS', '108 kW'], ['Capacidad base', '215 kWh']] },
            { titulo: 'Escalamiento sin obra civil', icon: 'layers', texto: 'La capacidad crece de forma dinámica conectando unidades en paralelo (107 / 161 / 215 kWh). Adaptamos la autonomía exacta a tu consumo sin nuevas fundaciones ni remodelaciones complejas.' },
            { titulo: 'Gestión térmica y seguridad', icon: 'thermo', texto: 'Refrigeración líquida inteligente que garantiza una temperatura uniforme, reduce la degradación de las celdas y maximiza el rendimiento continuo bajo condiciones de faena extremas.' },
          ],
        },
        {
          eyebrow: 'CARGA CRÍTICA',
          title: 'Protegemos tu continuidad con trabajo real en terreno.',
          img: '/img/energia/s1-2.webp',
          type: 'text',
          text: 'No vendemos equipos sueltos: diseñamos, construimos y operamos. Integramos paneles FV, sistemas BESS, UPS y centro de datos en una arquitectura única y funcional, con experiencia comprobada desde faenas mineras en altura hasta plantas industriales complejas.',
        },
        {
          id: 'sigenergy',
          eyebrow: 'SIGENERGY',
          title: 'BESS para activos críticos',
          img: '/img/energia/s2.webp',
          video: '/video/sigenergy.mp4', // SigenStack (material Sigenergy; ver public/video/CREDITOS.txt)
          type: 'text',
          text: 'La solución energética modular C&I de Sigenergy resuelve los desafíos operacionales en activos críticos, garantizando la continuidad ante microcortes y reduciendo el OPEX del respaldo tradicional a diésel.',
        },
        {
          eyebrow: 'MICROCORTES',
          title: 'Ride-through y continuidad operacional',
          img: '/img/energia/s3-1.webp',
          type: 'text',
          text: 'Las variaciones de red afectan protecciones, comunicaciones y el control de cargas auxiliares. Evitamos la caída de dispositivos sensibles asegurando 0 ms de interrupción del lado de la carga, con un cambio sin fluctuaciones de energía.',
        },
        {
          eyebrow: 'RESPALDO A DIÉSEL',
          title: 'Optimización del OPEX',
          lead: 'Diseñamos e integramos infraestructura energética crítica que sostiene los servicios de grandes corporaciones y faenas aisladas. Unificamos generación, almacenamiento de energía (BESS) y capacidad de cómputo en arquitecturas modulares gestionadas con telemetría SCADA/EMS 24/7.',
          type: 'cards',
          items: [
            { titulo: 'Reducción de combustible', icon: 'leaf', texto: 'El sistema híbrido disminuye el uso de grupos electrógenos, mejorando la logística y la trazabilidad operacional.' },
            { titulo: 'Sigen Energy Gateway', icon: 'bolt', texto: 'Admite generadores de nivel MW, permitiendo un cambio sin problemas al modo de respaldo con energía abundante.' },
            { titulo: 'Arquitectura on-off grid', icon: 'plug', texto: 'Integración directa con el tablero de transferencia (ATS) para arranque automático a dos cables ante caídas de red.' },
          ],
        },
        {
          eyebrow: 'VENTANAS DE MANTENIMIENTO',
          title: 'Flexibilidad y energía temporal',
          type: 'cards',
          items: [
            { titulo: 'BESS móvil', icon: 'battery', texto: 'Diseñado para entregar energía temporal de respaldo durante ventanas de mantenimiento crítico. Su arquitectura modular permite crear pilotos replicables con máxima flexibilidad operacional, para que el mantenimiento se ejecute sin afectar la continuidad del activo principal.' },
            { titulo: 'Instalación rápida', icon: 'clock', texto: 'El diseño apilable elimina el cableado complejo de comunicación y de los packs de baterías. Con reconocimiento automático de dispositivos, la puesta en marcha toma solo 15 minutos, frente a los 6 días y grúas de alto tonelaje que exigen las soluciones tradicionales.', destacado: '15 min vs 6 días' },
            { titulo: 'Disposición flexible', icon: 'box', texto: 'Requiere solo 1 metro de ancho de instalación y no necesita pasillos ni espacios traseros para operación y mantenimiento (O&M). Con menos de 65 dB de ruido, se adapta a montajes en interiores estrechos.', destacado: '1 m de ancho, menos de 65 dB' },
          ],
        },
        {
          eyebrow: 'SITIOS REMOTOS O CRÍTICOS',
          title: 'Respaldo de servicios auxiliares y seguridad integral',
          img: '/img/energia/s12.webp',
          video: '/video/sitios-remotos.mp4', // Huawei Solar (MoreEnergy-01), enlace entregado por AQuanta
          type: 'cards',
          items: [
            { titulo: 'Respaldo crítico para SS.AA.', icon: 'pin', texto: 'Asegura la continuidad de cargas vitales como AC/DC auxiliares, telecomunicaciones y SCADA. Diseñado para subestaciones y ubicaciones remotas donde la atención rápida es difícil y se exige operación sin interrupciones.' },
            { titulo: 'Seguridad integral de 6 capas', icon: 'shield', texto: 'Incorpora aislamiento térmico avanzado con aerogel, sensores de humo, detección de temperatura y válvulas de descompresión para mitigar riesgos térmicos en sitios no tripulados.' },
            { titulo: 'Extinción de incendios a nivel de pack', icon: 'flame', texto: 'A diferencia de los sistemas que actúan sobre todo el contenedor, cada 12 kWh cuenta con su propio cilindro y sistema de extinción, confinando cualquier evento en su origen.' },
          ],
        },
        {
          id: 'energia-propia',
          eyebrow: 'ENERGÍA PROPIA',
          title: 'Tu energía, bajo tu control.',
          img: '/img/energia/s3-1.webp',
          type: 'typewriter',
          prefix: 'Aprovecha tu energía solar para lograr:',
          // CONFIRMAR: el sitio viejo solo tenía "reducción de huella de carbono"; las otras dos frases son sugeridas
          words: ['reducción de huella de carbono', 'ahorro en tu boleta', 'autoconsumo'],
          text: 'Integra tu generación fotovoltaica (FV) directamente al sistema BESS. Almacena tus excedentes solares para reducir tu boleta eléctrica mediante autoconsumo, recorta los picos de demanda y disminuye la huella de carbono de tu operación.',
        },
        {
          eyebrow: 'PREGUNTAS FRECUENTES',
          title: 'Preguntas frecuentes',
          type: 'faq',
          items: [
            { q: '¿Qué beneficios financieros entrega el sistema BESS LUNA2000?', a: 'Permite peak shaving (recorte de picos de demanda), cargando energía en horas valle y descargándola en punta para reducir costos.' },
            // CONFIRMAR: esta pregunta se reconstruyó a partir de una respuesta suelta que estaba pegada en el sitio viejo
            { q: '¿Se puede operar completamente fuera de la red?', a: 'Sí. El sistema permite configuraciones full off-grid combinando generación solar fotovoltaica con módulos SigenStack.' },
          ],
        },
      ],
    },

    /* ===== LÍNEA 3: TABLEROS ELÉCTRICOS ===== */
    // CONFIRMAR: línea agregada a pedido del área de Energía. Los ítems de "Alcance" vienen de "Infraestructura eléctrica" (5.3) y los de "Fabricación propia" de la línea de salas modulares; títulos, bajadas y preguntas son propuesta.
    {
      key: 'tableros',
      label: 'Tableros eléctricos',
      icon: 'grid',
      sublabel: 'Diseño, fabricación y montaje',
      catalogo: '',
      anchors: [
        { label: 'Alcance', to: '#tableros-alcance' },
        { label: 'Visualizador 3D', to: '#tableros-3d' },
        { label: 'Fabricación propia', to: '#tableros-fabricacion' },
      ],
      intro: {
        title: 'Tableros eléctricos e ingeniería',
        text: 'Diseñamos, fabricamos y montamos tableros eléctricos certificados para TI, industria y energía: desde el levantamiento en terreno hasta la puesta en servicio, con ingeniería propia y pruebas en planta.',
        img: '/img/energia/tableros-1.webp', // sala de tableros (Pexels); TODO: foto de tablero AQuanta
        video: '',
        // Tramo 2:16 a 2:40 del video de YouTube indicado por el área (se incrusta en bucle, silenciado). TODO: reemplazar por un MP4 propio o del fabricante cuando exista
        youtube: { id: 'io0HeA1EzQY', start: 136, end: 160 },
      },
      sections: [
        {
          id: 'tableros-alcance',
          eyebrow: 'ALCANCE',
          title: 'Infraestructura eléctrica de punta a punta',
          type: 'cards',
          items: [
            { titulo: 'Diseño eléctrico', icon: 'chart', texto: 'Levantamiento y diseño eléctrico para TI.' },
            { titulo: 'Redes eléctricas', icon: 'plug', texto: 'Instalación y mantención de redes eléctricas.' },
            { titulo: 'Mallas a tierra', icon: 'layers', texto: 'Construcción de mallas a tierra.' },
            { titulo: 'Tableros certificados', icon: 'grid', texto: 'Implementación de tableros eléctricos certificados.' },
          ],
        },
        {
          id: 'tableros-3d',
          eyebrow: 'VISUALIZADOR 3D',
          title: 'Recorre nuestros tableros en 3D',
          lead: 'Modelos de ingeniería de tableros diseñados por AQuanta. Gíralos, acércate y revisa la distribución interna.',
          type: 'model3d',
          // Archivos en public/models (exportados desde el diseño 3D). CONFIRMAR nombres visibles y permiso del cliente para publicar cada modelo
          models: [
            { key: 'tta', label: 'Tablero de transferencia automática (TTA)', src: '/models/tablero-tta.glb?v=4' },
            { key: 'rpp', label: 'Tablero RPP · Siemens', src: '/models/tablero-rpp-siemens.glb?v=2' },
            { key: 'orion', label: 'Tablero Orion 250', src: '/models/tablero-orion-250.glb?v=5' },
            { key: 'tg', label: 'Tablero general (TG)', src: '/models/tablero-general.glb?v=1' },
          ],
        },
        {
          id: 'tableros-fabricacion',
          eyebrow: 'FABRICACIÓN PROPIA',
          title: 'Tableros industriales propios',
          img: '/img/energia/tableros-1.webp', // fila de tableros en sala eléctrica (Pexels), similar a la referencia de Armetal; TODO: foto del taller AQuanta
          type: 'cards',
          items: [
            { titulo: 'Media y baja tensión', icon: 'bolt', texto: 'Celdas de media tensión, baja tensión y control armadas en la misma planta.' },
            { titulo: 'Sin terceros', icon: 'box', texto: 'No dependemos de un tercero para el equipamiento de potencia del módulo.' },
            { titulo: 'Pruebas en planta', icon: 'wrench', texto: 'El tablero se verifica funcionalmente en planta, levantando observaciones antes de despachar.' },
            { titulo: 'Normativa', icon: 'award', texto: 'Nos apegamos a las normativas SEC, UL y europeas.' },
          ],
        },
        {
          eyebrow: 'PREGUNTAS FRECUENTES',
          title: 'Preguntas frecuentes',
          type: 'faq',
          items: [
            { q: '¿Fabrican tableros a medida o solo normalizados?', a: 'Ambos. Partimos del levantamiento en terreno y diseñamos el tablero según la carga, el espacio y la norma aplicable.' },
            { q: '¿Pueden integrar el tablero con BESS, UPS o generación fotovoltaica?', a: 'Sí. El tablero se diseña como parte del sistema completo, incluyendo transferencia automática (ATS) cuando el proyecto lo requiere.' },
          ],
        },
      ],
    },
    /* ===== LÍNEA 4: SALAS MODULARES Y DATA CENTER MODULAR ===== */
    {
      key: 'modular',
      label: 'Salas modulares y data center',
      icon: 'box',
      sublabel: 'Salas eléctricas RF120 y FusionModule',
      catalogo: 'dc-modular',
      anchors: [
        { label: 'El activo', to: '#activo' },
        { label: 'Visualizador 3D', to: '#salas-3d' },
        { label: 'Integración en fábrica', to: '#fabrica' },
        { label: 'La ejecución', to: '#ejecucion' },
        { label: 'Data center modular', to: '#dc-modular' },
      ],
      intro: {
        title: 'Salas eléctricas y salas modulares',
        text: 'El montaje eléctrico en faena es la etapa donde históricamente se pierde el control del programa, exponiendo los equipos al polvo y retrasando la obra civil. Convertimos esa obra en un equipo plug and play.',
        img: '/img/sol-electrica.jpg', // TODO: foto de sala modular AQuanta
        video: '/video/salas-modulares.mp4', // render Huawei de integración de sala eléctrica (enlace entregado por AQuanta; ver public/video/CREDITOS.txt)
      },
      sections: [
        {
          id: 'activo',
          eyebrow: 'EL ACTIVO',
          title: 'Formatos',
          type: 'cards',
          items: [
            { titulo: 'Módulo normalizado ISO', icon: 'box', texto: 'Estructura fabricada desde cero bajo norma ISO (20\' y 40\') para exportación sin transporte especial.' },
            { titulo: 'Sala eléctrica a medida', icon: 'grid', texto: 'Envolvente proyectada a medida cuando el equipamiento no cabe en un formato normalizado.' },
          ],
        },
        {
          eyebrow: 'EL ACTIVO',
          title: 'Ventajas del formato modular',
          video: '/video/salas-electricas.mp4', // Precision (salas eléctricas y tableros), enlace entregado por AQuanta; CONFIRMAR permiso
          type: 'cards',
          items: [
            { titulo: 'Plug and play', icon: 'plug', texto: 'Llega probada desde fábrica y se conecta directamente al circuito o línea productiva.' },
            { titulo: 'Plazo en paralelo', icon: 'clock', texto: 'La fabricación y la obra civil avanzan al mismo tiempo, comprimiendo el programa.' },
            { titulo: 'Menos HH en faena', icon: 'users', texto: 'En terreno solo queda izaje, conexión de fuerza y puesta en servicio.' },
            { titulo: 'Resistencia al fuego', icon: 'flame', texto: 'RF120 verificable, ejecutado y documentado en taller, no improvisado en terreno.' },
          ],
        },
        {
          id: 'salas-3d',
          eyebrow: 'VISUALIZADOR 3D',
          title: 'Recorre nuestras salas en 3D',
          lead: 'Modelos de ingeniería de salas proyectadas por AQuanta. Gíralas y acércate para revisar la envolvente y la distribución de los equipos.',
          type: 'model3d',
          // Archivo en public/models (exportado desde SketchUp). CONFIRMAR nombre visible y permiso para publicar el modelo
          models: [
            { key: 'sala', label: 'Sala eléctrica modular', src: '/models/sala-electrica.glb?v=5', orbit: '25deg 72deg 105%' },
            { key: 'sala-3-5-mva', label: 'Sala eléctrica de respaldo de energía 3,5 MVA', src: '/models/sala-electrica-3-5-mva.glb?v=1', orbit: '25deg 68deg 105%' },
            { key: 'sala-equipos', label: 'Sala de racks', src: '/models/sala-equipos.glb?v=1', orbit: '20deg 84deg 95%' },
          ],
        },
        {
          id: 'fabrica',
          eyebrow: 'INTEGRACIÓN EN FÁBRICA',
          title: 'Proceso',
          type: 'steps',
          items: [
            { n: 1, titulo: 'Metalmecánica', texto: 'Fabricación estructural desde el perfil de acero con control dimensional.' },
            { n: 2, titulo: 'Envolvente RF120', texto: 'Inserción del material aislante, revestimiento y sellado certificado de todas las penetraciones.' },
            { n: 3, titulo: 'Presurización', texto: 'Inyección de aire filtrado con presión positiva para que el polvo de la faena no entre al recinto.' },
            { n: 4, titulo: 'Tableros', texto: 'Celdas de media tensión, baja tensión y control armadas en la misma planta.' },
            { n: 5, titulo: 'Integración', texto: 'Módulo armado completo (bandejas, iluminación, climatización) por un solo equipo bajo techo.' },
            { n: 6, titulo: 'Pruebas', texto: 'El módulo se verifica funcionalmente como conjunto en planta, levantando observaciones antes de despachar.' },
          ],
        },
        {
          eyebrow: 'POR QUÉ AQUANTA',
          title: 'Por qué AQuanta',
          type: 'cards',
          items: [
            { titulo: 'Un solo interlocutor', icon: 'users', texto: 'Ingeniería, metalmecánica, montaje y puesta en servicio bajo un mismo contrato.' },
            { titulo: 'Estructura propia', icon: 'box', texto: 'No subcontratamos la envolvente: la fabricamos y respondemos por ella.' },
            { titulo: 'RF120 documentado', icon: 'flame', texto: 'La resistencia al fuego se ejecuta en taller y se entrega con su respaldo normativo.' },
            { titulo: 'Tableros industriales propios', icon: 'grid', texto: 'No dependemos de un tercero para el equipamiento de potencia del módulo.' },
            { titulo: 'Personal en terreno', icon: 'wrench', texto: 'Cuadrillas propias para montaje, pruebas y puesta en servicio.' },
            { titulo: 'Alcance ampliable', icon: 'layers', texto: 'Capacidad de integrar respaldo UPS, generación fotovoltaica, BESS y data center.' },
            { titulo: 'Normativa', icon: 'award', texto: 'Nos apegamos a las normativas SEC, UL y europeas en diseño, fabricación y montaje.' }, // agregado a pedido del área (2026-11-11)
          ],
        },
        {
          id: 'ejecucion',
          eyebrow: 'LA EJECUCIÓN',
          title: 'La ejecución',
          type: 'steps',
          items: [
            { n: 1, titulo: 'Llega operativo', texto: 'La faena no recibe un proyecto por armar: recibe una sala terminada.' },
            { n: 2, titulo: 'Transporte', texto: 'Despacho como carga especial coordinada según las dimensiones y el peso final del módulo.' },
            { n: 3, titulo: 'Izaje y calce', texto: 'Posicionamiento sobre la fundación y fijación final ejecutada con personal propio.' },
          ],
        },
        {
          id: 'dc-modular',
          eyebrow: 'DATA CENTER MODULAR',
          title: 'Infraestructura lista, no un proyecto de obra civil',
          img: '/img/energia/s6-2.webp',
          video: '/video/traslado-modular.mp4', // traslado de módulo en contenedor (Pexels); ver public/video/CREDITOS.txt
          type: 'compare',
          items: [
            { titulo: 'Edge pequeño (FusionModule 500)', img: '/img/productos/fusion-module-500.webp', texto: 'Micro data center autocontenido de un solo gabinete (24U o 42U). Integra en el mismo rack la UPS, las baterías, la distribución de energía y un enfriamiento de 3,5 kW. Solución plug and play de rápido despliegue para sucursales, con cargas TI de hasta 10 kW.' },
            { titulo: 'Mediano (FusionModule 800)', img: '/img/productos/fusion-module-800.webp', texto: 'Smart small DC con pasillo confinado para optimizar el flujo térmico. Escala de 1 a 15 gabinetes con redundancia N+1 e incorpora enfriamiento de alta densidad en el mismo rack. Ideal para salas de servidores corporativas que requieren alta disponibilidad térmica y energética.' },
            { titulo: 'Corporativo (FusionModule 2000)', img: '/img/productos/fusion-module-2000.webp', texto: 'Centro de datos modular de sala completa, con confinamiento de pasillo frío/caliente y cumplimiento de estándares Tier III y Tier IV. Refrigeración perimetral o in-row, administración centralizada con la plataforma ECC800-Pro y uno de los PUE más bajos del mercado.' },
            { titulo: 'Gran escala y container (FusionModule 1000)', img: '/img/productos/fusion-dc-1000a.webp', texto: 'Soluciones prefabricadas en contenedores de 20 o 40 pies. Llegan probadas desde fábrica, con certificación IP55/IP65 y resistencia sísmica, listas para energizar y operar en faenas mineras o ubicaciones extremas, desacoplando el proyecto TI de los retrasos de la obra civil.' },
          ],
        },
        {
          eyebrow: 'PREGUNTAS FRECUENTES',
          title: 'Preguntas frecuentes',
          type: 'faq',
          items: [
            { q: '¿Es factible instalar un data center completo en una faena minera?', a: 'Sí. Las soluciones FusionModule en contenedor de 40\' llegan prefabricadas con clima y UPS, listas para operar en ambientes hostiles.' },
            { q: '¿Qué incluye la gestión de ingeniería?', a: 'Un servicio end-to-end (EPC) que cubre diseño, suministro, montaje, canalizaciones subterráneas, estructuras metálicas y telemetría 24/7.' },
          ],
        },
      ],
    },


    /* ===== LÍNEA 5: ELECTROMOVILIDAD ===== */
    // CONFIRMAR: línea agregada a pedido del área. Datos de referencia tomados de Huawei FusionCharge (digitalpower.huawei.com/mx/smart-charging-network/ultra-fast-charging), redactados en palabras propias; las cifras son valores de laboratorio del fabricante.
    {
      key: 'electromovilidad',
      label: 'Electromovilidad',
      icon: 'bolt',
      sublabel: 'Carga ultrarrápida Huawei FusionCharge',
      catalogo: '',
      anchors: [
        { label: 'Beneficios', to: '#ev-beneficios' },
        { label: 'Visualizador 3D', to: '#ev-3d' },
        { label: 'Arquitectura', to: '#ev-arquitectura' },
        { label: 'Integración', to: '#ev-integracion' },
      ],
      intro: {
        title: 'Carga ultrarrápida con enfriamiento líquido',
        text: 'Diseñamos e integramos infraestructura de carga para vehículos eléctricos con tecnología Huawei FusionCharge: cargadores de alta potencia con enfriamiento líquido, matriz de energía compartida y arquitectura preparada para sumar fotovoltaica y almacenamiento.',
        img: '/img/energia/ev-1.webp',
        video: '/video/electromovilidad.mp4', // Huawei FusionCharge (ver public/video/CREDITOS.txt)
      },
      sections: [
        {
          id: 'ev-beneficios',
          eyebrow: 'BENEFICIOS',
          title: 'Más autonomía en menos tiempo',
          img: '/img/energia/ev-2.webp',
          type: 'cards',
          items: [
            { titulo: 'Recarga de 5 minutos', icon: 'clock', texto: 'Más de 200 km de autonomía en una recarga de cinco minutos, con postes de 800 A enfriados por líquido.', destacado: 'Más de 200 km en 5 min' },
            { titulo: 'Silencioso', icon: 'target', texto: 'Menos de 55 dB(A) durante la carga, apto para estacionamientos, centros comerciales y zonas residenciales.' },
            { titulo: '10 años de vida útil', icon: 'award', texto: 'Diseñado para operar de forma confiable durante diez años, con menos mantenimiento que los cargadores enfriados por aire.' },
            { titulo: '96 % de eficiencia', icon: 'chart', texto: 'La matriz de energía compartida reparte la potencia entre postes, ahorra capacidad de empalme y eleva la eficiencia de recarga al 96 %.' },
          ],
        },
        {
          id: 'ev-3d',
          eyebrow: 'VISUALIZADOR 3D',
          title: 'Recorre el NexVoltHub en 3D',
          lead: 'Modelo de ingeniería de una estación de carga integrada por AQuanta. Gírala, acércate y revisa cómo se distribuyen los equipos.',
          type: 'model3d',
          // Archivo en public/models (exportado desde SketchUp y aligerado con scripts/fix-models.mjs). CONFIRMAR nombre visible y permiso para publicar el modelo
          models: [
            { key: 'nexvolthub', label: 'NexVoltHub', src: '/models/nexvolthub.glb?v=1' },
          ],
        },
        {
          id: 'ev-arquitectura',
          eyebrow: 'ARQUITECTURA',
          title: 'Un bus de corriente continua preparado para crecer',
          video: '/video/electromovilidad-2.mp4', // Huawei FusionCharge
          img: '/img/energia/ev-3.webp',
          type: 'text',
          text: 'La unidad de alimentación FusionCharge trabaja sobre un bus de corriente continua que se acopla directamente con sistemas de almacenamiento (ESS) y generación fotovoltaica. Eso permite recortar los picos de demanda de la red, ampliar la potencia de carga sin cambiar el empalme y actualizar cargadores, baterías y paneles por etapas.',
        },
        {
          id: 'ev-integracion',
          eyebrow: 'INTEGRACIÓN AQUANTA',
          title: 'De la subestación al conector',
          type: 'cards',
          items: [
            { titulo: 'Ingeniería eléctrica', icon: 'grid', texto: 'Levantamiento de capacidad, empalme, tableros y canalizaciones para la electrolinera o la flota.' },
            { titulo: 'Energía propia', icon: 'sun', texto: 'Integración con generación fotovoltaica y BESS para cargar con energía propia y reducir el costo por kWh.' },
            { titulo: 'Operación y monitoreo', icon: 'headset', texto: 'Puesta en marcha, telemetría y soporte de la Mesa de Servicios 24/7 para que la red de carga no se detenga.' },
          ],
        },
        {
          eyebrow: 'PREGUNTAS FRECUENTES',
          title: 'Preguntas frecuentes',
          type: 'faq',
          items: [
            { q: '¿Sirve para flotas de buses o camiones?', a: 'Sí. La matriz de energía compartida permite repartir la potencia entre varios postes y escalar la instalación a medida que crece la flota.' },
            { q: '¿Se puede partir con pocos cargadores?', a: 'Sí. La arquitectura en bus de corriente continua permite agregar cargadores, baterías y paneles por etapas sin rehacer la instalación.' },
          ],
        },
      ],
    },
  ],
  /* ===== 7.3 Común a las 5 pestañas ===== */
  brands: ['Huawei', 'Vertiv', 'Sigenergy', 'Forza'], // Forza se agrega por el catálogo de UPS; Huawei cubre también FusionCharge (electromovilidad)
  team: {
    id: 'equipo',
    eyebrow: 'NUESTRO EQUIPO',
    title: 'Expertos detrás de tu energía',
    people: [
      { nombre: 'Alexis Ponce', cargo: 'Líder del Área Energía', correo: 'aponce@aquanta.cl' },
      { nombre: 'Claudio Cares', cargo: 'Solution & Project Manager', correo: 'ccares@aquanta.cl' },
    ],
  },
  closing: {
    eyebrow: 'EL MOMENTO DE ACTUAR ES AHORA',
    title: 'Diseñemos el sistema energético de tu próximo proyecto',
    text: 'Cuéntanos los requerimientos de tu operación: capacidad TI, consumo en hora punta y superficie disponible, y te proponemos la arquitectura adecuada con equipos Huawei y Sigenergy.',
    button: { label: 'Hablemos de tu proyecto', to: '/contacto' },
  },
}
