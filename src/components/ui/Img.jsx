import { useEffect, useState } from 'react'

/** Imagen con placeholder. Si el archivo no existe, muestra un recuadro
 *  con el nombre esperado (o el `fallback` que se indique) para encontrarlo después.
 *  TODO: reemplazar los placeholders por las imágenes reales (ver sección 16 del contenido). */
export default function Img({ src, alt = '', fallback, className = '', phClassName = '', ...rest }) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [src])
  if (failed) {
    const name = src.split('/').pop()
    return (
      <span className={`img-ph ${phClassName}`} title={`TODO: ${src}`} role="img" aria-label={alt || name} {...rest}>
        {fallback || <span className="img-ph__name mono">{name}</span>}
      </span>
    )
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} {...rest} />
}
