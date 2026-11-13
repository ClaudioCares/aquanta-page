import { useEffect, useRef, useState } from 'react'

/**
 * Animación de "construcción" de un modelo 3D (.glb): el modelo se va armando de abajo hacia arriba
 * mientras gira, con un marco de luz que marca la capa en construcción; al completarse se muestra
 * entero unos segundos y el ciclo vuelve a empezar. No es interactivo: reemplaza a un video.
 * three.js y el modelo se cargan recién cuando el bloque se acerca a la pantalla.
 */
const BUILD = 8 // segundos armando
const HOLD = 6 // segundos mostrando el modelo completo

export default function ModelBuild3D({ src, label = 'Modelo 3D' }) {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const el = ref.current
    let cancelled = false
    let cleanup = () => {}

    async function start() {
      const THREE = await import('three')
      const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js')
      const { RoomEnvironment } = await import('three/addons/environments/RoomEnvironment.js')
      if (cancelled) return

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.localClippingEnabled = true
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 0.95
      el.appendChild(renderer.domElement)

      const scene = new THREE.Scene()
      const pmrem = new THREE.PMREMGenerator(renderer)
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
      const key = new THREE.DirectionalLight(0xffffff, 1.6)
      key.position.set(3, 5, 4)
      scene.add(key)

      const gltf = await new GLTFLoader().loadAsync(src)
      if (cancelled) { renderer.dispose(); return }
      const model = gltf.scene
      const box = new THREE.Box3().setFromObject(model)
      const size = box.getSize(new THREE.Vector3())
      model.position.sub(box.getCenter(new THREE.Vector3()))
      const pivot = new THREE.Group()
      pivot.add(model)
      scene.add(pivot)

      // plano de corte horizontal: solo se dibuja lo que queda bajo la altura "construida"
      const plane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0)
      model.traverse((o) => {
        if (!o.isMesh) return
        for (const m of Array.isArray(o.material) ? o.material : [o.material]) { m.clippingPlanes = [plane]; m.side = THREE.DoubleSide }
      })

      // capa en construcción: marco y lámina de luz verde a la altura del corte
      const accent = new THREE.Color(getComputedStyle(el).getPropertyValue('--accent').trim() || '#a8e63d')
      const w = size.x * 0.62, d = size.z * 0.62
      const frame = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-w, 0, -d), new THREE.Vector3(w, 0, -d), new THREE.Vector3(w, 0, d), new THREE.Vector3(-w, 0, d)]),
        new THREE.LineBasicMaterial({ color: accent, transparent: true }),
      )
      const sheet = new THREE.Mesh(new THREE.PlaneGeometry(w * 2, d * 2), new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false }))
      sheet.rotation.x = -Math.PI / 2
      const layer = new THREE.Group()
      layer.add(frame, sheet)
      pivot.add(layer)

      const camera = new THREE.PerspectiveCamera(22, 1, 0.05, 200)
      const fit = () => {
        const { clientWidth: cw, clientHeight: ch } = el
        if (!cw || !ch) return
        renderer.setSize(cw, ch, false)
        camera.aspect = cw / ch
        const half = Math.tan((camera.fov * Math.PI) / 360)
        const radius = Math.hypot(size.x, size.z) / 2
        const dist = Math.max(size.y / 2 / half, radius / (half * camera.aspect)) * 1.18
        camera.position.set(0, size.y * 0.32, dist)
        camera.lookAt(0, 0, 0)
        camera.updateProjectionMatrix()
      }
      fit()
      const ro = new ResizeObserver(fit)
      ro.observe(el)

      const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      let visible = true
      const vis = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
      vis.observe(el)

      const clock = new THREE.Clock()
      let raf = 0
      const tick = () => {
        raf = requestAnimationFrame(tick)
        if (!visible) return
        const t = clock.getElapsedTime()
        const c = t % (BUILD + HOLD)
        const p = still ? 1 : Math.min(1, c / BUILD)
        const eased = p * p * (3 - 2 * p)
        const h = -size.y / 2 + size.y * 1.02 * eased
        plane.constant = h
        layer.position.y = h
        layer.visible = p < 1
        frame.material.opacity = Math.min(1, (1 - p) * 6)
        pivot.rotation.y = still ? -0.6 : t * 0.22 - 0.6
        renderer.render(scene, camera)
      }
      tick()
      setReady(true)

      cleanup = () => {
        cancelAnimationFrame(raf)
        ro.disconnect()
        vis.disconnect()
        scene.traverse((o) => { o.geometry?.dispose?.(); for (const m of [].concat(o.material || [])) { m.map?.dispose?.(); m.dispose?.() } })
        pmrem.dispose()
        renderer.dispose()
        renderer.domElement.remove()
      }
      if (cancelled) cleanup()
    }

    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      start().catch(() => setFailed(true))
    }, { rootMargin: '400px 0px' })
    io.observe(el)
    return () => { cancelled = true; io.disconnect(); cleanup() }
  }, [src])

  return (
    <div className="mbuild" ref={ref} role="img" aria-label={label}>
      {!ready && !failed && <span className="mbuild__msg mono">Cargando modelo…</span>}
      {failed && <span className="mbuild__msg mono">No se pudo cargar el modelo 3D</span>}
    </div>
  )
}
