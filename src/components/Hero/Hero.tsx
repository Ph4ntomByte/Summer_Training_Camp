import Image from 'next/image'
import { Ellipse } from '@/components/Hero/Ellipse'
export function Hero() {
  return (
    <section className="relative h-[75vh] overflow-hidden">
      <Ellipse />
      <Image src="/images/azerbaijan-hero.jpg" alt="Hero" fill className="object-cover" />
      <div className="absolute inset-0 bg-forest-dark bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold text-white mb-4">EYP Summer Training Camp</h1>
      </div>
    </section>
  )
}