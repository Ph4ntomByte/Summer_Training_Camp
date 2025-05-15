import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <h1 className="text-2xl font-semibold text-gray-800">EYP Summer Camp</h1>
        <ul className="flex gap-8 text-gray-600">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#program">Program</Link></li>
          <li><Link href="#speakers">Speakers</Link></li>
          <li><Link href="#venue">Venue</Link></li>
          <li><Link href="#register" className="font-medium text-blue-600">Register</Link></li>
        </ul>
      </nav>

      <section className="relative h-screen">
        <Image
          src="/images/azerbaijan-hero.jpg"
          alt="Baku skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            EYP Summer Training Camp
          </h2>
          <p className="text-lg sm:text-2xl text-gray-200 mb-8 max-w-2xl">
            Discover your voice, build leadership skills, and explore Azerbaijan with peers from across Europe.
          </p>
          <Link
            href="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Placeholder for additional sections to be built: About, Program, Speakers, Venue, FAQ, Blog, Gallery */}
    </main>
  )
}
