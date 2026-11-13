import { useEffect } from 'react'

/** Agrega .is-visible a los elementos [data-reveal] cuando entran en pantalla.
 *  También observa el DOM para contenido que aparece después (pestañas, filtros). */
export default function useReveal(dep) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    const scan = () => document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => io.observe(el))
    const t = setTimeout(scan, 50)
    let raf
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(scan)
    })
    // también se vigilan los cambios de clase: si un componente reescribe la clase de un elemento ya
    // mostrado y le quita .is-visible, se vuelve a observar para que no quede invisible
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] })
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf)
      mo.disconnect()
      io.disconnect()
    }
  }, [dep])
}
