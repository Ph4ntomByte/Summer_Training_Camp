'use client'

import { useRef, useState, useEffect } from 'react'

interface CountUpProps {
  start?: number
  end: number
  duration?: number
  className?: string
  onComplete?: () => void
}

export default function CountUp({ start, end, duration = 2, className, onComplete }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(start ?? 0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return

    let raf: number
    let animationStart: number | null = null
    const actualStart = start ?? 0
    const range = end - actualStart

    function step(timestamp: number) {
      if (!animationStart) animationStart = timestamp
      const progress = Math.min((timestamp - animationStart) / (duration * 1000), 1)
      const currentValue = actualStart + range * progress
      setValue(Math.floor(currentValue))

      if (progress < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setValue(end)
        hasAnimated.current = true
        if (onComplete) onComplete()
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          raf = requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [start, end, duration, onComplete])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}