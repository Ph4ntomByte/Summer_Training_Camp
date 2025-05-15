import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-[75vh]">
      <Image src="/images/azerbaijan-hero.jpg" alt="Hero" fill className="object-cover" />
      {/* TODO: overlay & text */}
    </section>
  )
}