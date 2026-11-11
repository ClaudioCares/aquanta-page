# AQuanta · Sitio web

Sitio corporativo en React + Vite + React Router + CSS, con scroll suave (Lenis) y animaciones de aparición.
Contenido tomado de `AQUANTA_CONTENIDO_WEB.md` (fuente única de textos). Diseño y componentes base de la plantilla original.

## Cómo correrlo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera /dist
npm run preview    # prueba el build en el puerto 3000
```

En Vercel: importar el repo, comando de build `npx vite build` y carpeta de salida `dist`. `vercel.json` trae las rutas internas y las redirecciones 301 desde el sitio viejo.

## Mapa del sitio

| Página | Ruta | Archivo |
| --- | --- | --- |
| Inicio | `/` | `pages/Home.jsx` |
| Nosotros | `/nosotros` | `pages/Nosotros.jsx` |
| Servicios (índice) | `/servicios` | `pages/Servicios.jsx` |
| Data Center | `/servicios/data-center` | `pages/servicios/DataCenter.jsx` |
| Ciberseguridad y Análisis | `/servicios/ciberseguridad` | `pages/servicios/Ciberseguridad.jsx` |
| Energía (5 líneas: UPS, BESS, tableros, salas modulares, electromovilidad) | `/servicios/energia` | `pages/servicios/Energia.jsx` |
| Cloud | `/servicios/cloud` | `pages/servicios/Cloud.jsx` |
| Servicios Profesionales + Mesa 24/7 | `/servicios/servicios-profesionales` | `pages/servicios/ServiciosProfesionales.jsx` |
| Certificaciones | `/certificaciones` | `pages/Certificaciones.jsx` |
| Trabaja con nosotros | `/trabaja-con-nosotros` | `pages/Trabaja.jsx` |
| Club de Ingenieros 2026 | `/club-de-ingenieros` | `pages/Club.jsx` |
| Hablemos | `/contacto` | `pages/Contact.jsx` |
| Portal de Clientes (Mesa de Servicios, Aranda) | `/portal-clientes` | `pages/Portal.jsx` |
| Políticas (calidad, privacidad, cookies) | `/politica-de-*` | `pages/politicas/Policy.jsx` |

## Mapa de archivos

```
public/
  img/              Fotos (las actuales son de relleno). Ver img/LEEME.txt, img/equipo, img/club
  logo/             isologo.png + carpetas marcas/, clientes/, sellos/, rse/, certs/ (cada una con LEEME.txt)
  video/            14 clips MP4 de encabezado (Pexels) + CREDITOS.txt
  docs/             Certificados ISO en PDF
src/
  data/site.js              Marca, menú, sellos, bloque Hablemos, oficinas, formulario, footer, redirecciones
  data/content/*.js         Contenido de cada página (textos, tarjetas, FAQ, equipo, marcas)
  components/layout/        Header (con Portal Clientes), MegaMenu, Footer, FloatingActions, ScrollProgress
  components/ui/            PillButton, Icon, Logo, SmartLink, Img (placeholder), Seo
  components/sections/      PageHero, Intro, CardGrid, Accordion, Steps, LogoWall, Team, Seals, ClosingCta, Offices, DataTable, Compare, Gallery, Typewriter
  components/forms/         ContactForm (2.5), MiniForm (Energía), JobForm (CV)
  components/home/          Hero de la portada + estilos propios de Inicio
  utils/submit.js           Punto único de envío de formularios (hoy mailto; TODO backend)
  utils/slug.js             Nombre -> nombre de archivo de logo/foto
```

## Si no ves los cambios en el navegador

El navegador guarda en caché la versión anterior. Recarga con **Ctrl + Shift + R** (o abre una ventana de incógnito). Las fotos, insignias y productos están en formato WebP dentro de `public/`.

## Equipo y videos

- Tipografía y espaciado: la escala se redujo el 2026-11-11 a pedido del equipo (cuerpo 14 px, títulos máx. 42 px en heros y 30 px en secciones, contenedor 1200 px, secciones de 56 a 96 px de alto) para un look más minimalista; los tamaños viven en `global.css`, `sections.css`, `pages.css`, `home.css` y `ui.css`. En celular (hasta 700 px) hay una segunda escala aún más compacta al final de `global.css`, `ui.css`, `home.css`, `sections.css` y `pages.css` (header 56 px, cuerpo 13,5 px, botones 36 px). Revisado sin scroll lateral en 320, 360 y 390 px. Ojo: `.page-hero__inner` se declara como `.page-hero .page-hero__inner` para que `.container` no le anule el padding superior.
- Las fotos del equipo van recortadas sin fondo en `public/img/equipo/<slug>.webp`; el componente `Team` las muestra de pie sobre una base luminosa. Los grupos sin fotos se marcan con `photos: false` en el contenido y se muestran como lista de datos.
- Los encabezados de todas las páginas y de las tres líneas de Energía reproducen un video en bucle (MP4 silencioso, 1080p o 720p, 3 a 10 MB) desde `public/video/`. Doce clips son de Pexels (licencia libre) y cinco son material de Huawei y Sigenergy tomado de itelogic.com y sigenergy.com (salas modulares, data center modular, tableros, BESS y Sigenergy): **confirmar el permiso de uso con cada marca antes de publicar**. Autores y enlaces en `public/video/CREDITOS.txt`; se reemplazan por material propio guardando el archivo con el mismo nombre. Los bloques de Energía también aceptan `video` (ver `BlockHead` en `Energia.jsx`). La ruta va en el campo `video` del contenido (ver `public/video/LEEME.txt`); si se deja vacío, vuelve la imagen con zoom lento.

## Imágenes y logos

Cada carpeta de `public/` tiene un `LEEME.txt` con los nombres de archivo esperados. Mientras un archivo no exista, el sitio muestra un placeholder con el nombre (componente `Img`), así que basta con copiar el archivo con ese nombre.

## Pendientes (buscar `TODO` y `CONFIRMAR` en el código)

- Envío real de formularios (`src/utils/submit.js`): hoy abre el cliente de correo.
- URL real del portal Aranda y enlace de recuperación de contraseña (`loginUrl` y `forgotTo` en `src/data/content/portal.js`); mientras estén vacíos el formulario avisa que el acceso está en habilitación.
- URL de la encuesta de satisfacción y canal de denuncias (footer en `site.js`).
- Texto de la Política de Cookies y ampliación de la Política de Privacidad.
- Faltan: logos de Aranda Software, PRTG Network Monitor, Veritas y Red Hat;  fotos de 15 personas del equipo (consultores, arquitectura e innovación, ingeniería, soporte y mesa de servicios); certificados ISO en PDF (ver LEEME de cada carpeta). Ya están: logo AQuanta, 4 logos de responsabilidad social, 22 logos de clientes (tomados del sitio actual, 150 px; CONFIRMAR permiso y pedir versiones en alta), 25 logos de marcas, sellos ISO/ITIL, 29 insignias, logo y 7 fotos del Club, 9 fotos del equipo (gerencia, unidades de negocio y Energía) y 17 videos (12 de Pexels y 5 de fabricantes, reemplazables por material propio).
- Catálogo de equipos en Energía (`src/data/content/catalogo.js`): 36 productos tomados del catálogo de itelogic.com con descripciones propias; revisar textos y especificaciones con el área de Energía. FusionCol8000-A no tiene descripción en la fuente.
- Permiso de uso de los videos de Huawei y Sigenergy (ver `public/video/CREDITOS.txt`) y las líneas de Energía "Tableros eléctricos" y "Electromovilidad" (textos y preguntas propuestos; la intro de Tableros usa un tramo de YouTube en bucle vía `YouTubeLoop.jsx`, marcados CONFIRMAR; faltan fotos propias de tableros y un render de tableros ABB o Prisma SeT para el video, que los fabricantes solo publican en YouTube: pedir el archivo al contacto de ABB o Schneider).
- Años de experiencia, razones sociales de Colombia y Perú, nombres y tildes del equipo, permiso de logos de clientes, nivel 1 RTO/RPO.
