import { useEffect } from 'react'

/** Title y meta description por página (sin dependencias extra). */
export default function Seo({ title, description = '' }) {
  useEffect(() => {
    if (title) document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }, [title, description])
  return null
}
