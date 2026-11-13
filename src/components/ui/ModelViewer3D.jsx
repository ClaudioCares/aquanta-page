import { useEffect, useRef, useState } from 'react'

/**
 * Visualizador 3D interactivo (archivos .glb) con selector de modelos.
 * El modelo aparece solo; la librería y el archivo (decenas de MB) se descargan
 * recién cuando la sección se acerca a la pantalla.
 * models: [{ key, label, src, poster? }]
 */
export default function ModelViewer3D({ models }) {
  const [active, setActive] = useState(models[0].key)
  const [ready, setReady] = useState(false) // librería cargada y visor activado
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(false)
  const ref = useRef(null)
  const m = models.find((x) => x.key === active)

  const stageRef = useRef(null)

  // El modelo se muestra solo, sin botón: se activa al acercarse la sección a la pantalla
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      import('@google/model-viewer').then(() => setReady(true)).catch(() => setError(true))
    }, { rootMargin: '600px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Progreso de descarga y errores del modelo activo
  useEffect(() => {
    const el = ref.current
    if (!ready || !el) return
    setProgress(0)
    setError(false)
    const onProgress = (e) => setProgress(e.detail.totalProgress)
    const onError = () => setError(true)
    el.addEventListener('progress', onProgress)
    el.addEventListener('error', onError)
    return () => {
      el.removeEventListener('progress', onProgress)
      el.removeEventListener('error', onError)
    }
  }, [ready, active])

  return (
    <div className="m3d" data-reveal>
      {models.length > 1 && (
        <div className="m3d__tabs" role="tablist" aria-label="Modelos 3D">
          {models.map((x) => (
            <button key={x.key} role="tab" aria-selected={x.key === active} className={`m3d__tab ${x.key === active ? 'is-active' : ''}`} onClick={() => setActive(x.key)}>
              {x.label}
            </button>
          ))}
        </div>
      )}

      {/* data-lenis-prevent: la rueda del mouse hace zoom en el modelo en vez de desplazar la página */}
      <div className="m3d__stage" ref={stageRef} data-lenis-prevent={ready ? '' : undefined}>
        {ready ? (
          <>
            <model-viewer
              key={m.key}
              ref={ref}
              src={m.src}
              alt={`Modelo 3D: ${m.label}`}
              camera-controls=""
              camera-orbit={m.orbit || '-35deg 78deg 105%'}
              min-camera-orbit="auto auto 15%"
              field-of-view="16deg"
              min-field-of-view="3deg"
              max-field-of-view="16deg"
              auto-rotate=""
              auto-rotate-delay="1500"
              interaction-prompt="none"
              shadow-intensity="0.8"
              exposure="0.9"
              environment-image="legacy"
              touch-action="pan-y"
            />
            {progress < 1 && !error && (
              <div className="m3d__loading" aria-live="polite">
                <span className="mono">Cargando modelo… {Math.round(progress * 100)}%</span>
                <div className="m3d__bar"><i style={{ width: `${progress * 100}%` }} /></div>
              </div>
            )}
          </>
        ) : (
          !error && <div className="m3d__loading" aria-live="polite"><span className="mono">Cargando modelo…</span></div>
        )}
        {error && <p className="m3d__error">No se pudo cargar el modelo 3D. Intenta nuevamente más tarde.</p>}
      </div>

      <p className="m3d__hint mono">Arrastra para girar · rueda o pellizco para acercar · dos dedos o clic derecho para mover</p>
    </div>
  )
}
