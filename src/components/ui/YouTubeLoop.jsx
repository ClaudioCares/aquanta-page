import { useEffect, useRef } from 'react'

/** Reproduce un tramo de un video de YouTube en bucle, silenciado y sin interfaz (para usarlo como fondo).
 *  Usa la IFrame API para volver al inicio del tramo antes de que el reproductor se pause. */
let apiPromise = null
function loadApi() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT)
  if (!apiPromise) {
    apiPromise = new Promise((resolve) => {
      const prev = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => { if (prev) prev(); resolve(window.YT) }
      const s = document.createElement('script')
      s.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(s)
    })
  }
  return apiPromise
}

export default function YouTubeLoop({ id, start = 0, end, title = '' }) {
  const box = useRef(null)
  useEffect(() => {
    let player, timer, alive = true
    loadApi().then((YT) => {
      if (!alive || !box.current) return
      player = new YT.Player(box.current, {
        videoId: id,
        playerVars: { autoplay: 1, mute: 1, controls: 0, rel: 0, modestbranding: 1, playsinline: 1, start, disablekb: 1, iv_load_policy: 3 },
        events: {
          onReady: (e) => { e.target.mute(); e.target.seekTo(start, true); e.target.playVideo() },
          onStateChange: (e) => {
            // Si termina o se pausa (por ejemplo al llegar al final), vuelve al inicio del tramo
            if (e.data === YT.PlayerState.ENDED || e.data === YT.PlayerState.PAUSED) { e.target.seekTo(start, true); e.target.playVideo() }
          },
        },
      })
      timer = setInterval(() => {
        if (!player || !player.getCurrentTime) return
        if (end && player.getCurrentTime() >= end - 0.3) player.seekTo(start, true)
      }, 250)
    })
    return () => { alive = false; clearInterval(timer); if (player && player.destroy) player.destroy() }
  }, [id, start, end])
  return <div className="ytloop" aria-hidden="true" title={title}><div ref={box} /></div>
}
