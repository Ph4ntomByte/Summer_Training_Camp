import { ReactNode, useEffect, useRef } from 'react'
export function MarqueeWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start: number
    const speed = 0.05
    function step(timestamp: number) {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      el.scrollLeft = (elapsed * speed) % el.scrollWidth
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [])
  return (
    <div ref={ref} className="whitespace-nowrap overflow-hidden">
      {children}
    </div>
  )
}
