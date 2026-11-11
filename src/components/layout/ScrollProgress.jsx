import { useEffect, useRef } from 'react'

/** Indicador de avance en el borde derecho de la pantalla. */
export default function ScrollProgress() {
  const thumb = useRef(null)
  useEffect(() => {
    let raf
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      if (thumb.current) thumb.current.style.transform = `translateY(${p * (window.innerHeight - 64)}px)`
    }
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
  }, [])
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={thumb} />
    </div>
  )
}
