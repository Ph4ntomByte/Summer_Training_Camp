'use client'

import { useRef, useState, useEffect } from 'react'

interface CountUpProps {
  end: number
  duration?: number
  className?: string
}

export default function CountUp({ end, duration = 2, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start: number | null = null
    let raf: number

    function step(timestamp: number) {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      setValue(Math.floor(progress * end))
      if (progress < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setValue(end)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {value.toString()}
    </span>
  )
}