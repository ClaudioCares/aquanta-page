import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis = null

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Scroll suave a un número (px) o a un selector ('#proyectos'). */
export function scrollToTarget(target, opts = {}) {
  const offset = typeof target === 'string' ? -70 : 0
  if (typeof target === 'string' && !document.querySelector(target)) return
  if (lenis) {
    lenis.scrollTo(target, { offset, ...opts })
    return
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: opts.immediate ? 'auto' : 'smooth' })
  } else {
    const el = document.querySelector(target)
    const top = el.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

/** Lenis (scroll suave) sincronizado con GSAP ScrollTrigger. */
export default function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis && lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenis = null
    }
  }, [])
}
