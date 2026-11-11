import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../../hooks/useSmoothScroll.js'

/** Texto que se escribe y borra palabra a palabra. */
export default function Typewriter({ prefix, words = [] }) {
  const still = prefersReducedMotion()
  const [i, setI] = useState(0)
  const [len, setLen] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    if (still || !words.length) return
    const word = words[i]
    let t
    if (!del && len < word.length) t = setTimeout(() => setLen(len + 1), 55)
    else if (!del && len === word.length) t = setTimeout(() => setDel(true), 1600)
    else if (del && len > 0) t = setTimeout(() => setLen(len - 1), 30)
    else { setDel(false); setI((i + 1) % words.length) }
    return () => clearTimeout(t)
  }, [len, del, i, words, still])

  return (
    <p className="typewriter" data-reveal>
      {prefix}{' '}
      <span className="typewriter__word">{still ? words.join(' / ') : words[i].slice(0, len)}</span>
      {!still && <span className="typewriter__cursor" aria-hidden="true" />}
    </p>
  )
}
