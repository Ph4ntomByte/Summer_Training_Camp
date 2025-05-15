import {Navbar} from '@/components/Navbar/Navbar'
import {Hero} from '@/components/Hero/Hero'
import {SectionHeading} from '@/components/SectionHeading/SectionHeading'
import {Button} from '@/components/UI/Button'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="min-h-screen bg-campGray-light">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Intro Section */}
      <section id="intro" className="container mx-auto py-16 text-center">
        <SectionHeading>Welcome to the EYP Summer Training Camp</SectionHeading>
        <p className="text-lg text-campGray-dark max-w-3xl mx-auto">
          Join us for an immersive two-week program in Baku where you will engage in debate simulations,
          leadership workshops, and cultural excursions designed to expand your horizons
          and network with peers from across Europe.
        </p>
        <Link href="/register">
          <Button>Apply Now</Button>
        </Link>
      </section>

      {/* Footer will come here */}
    </main>
  )
}
