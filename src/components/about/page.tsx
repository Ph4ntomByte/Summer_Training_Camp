import {SectionHeading} from '@/components/SectionHeading/SectionHeading'
import {Navbar} from '@/components/Navbar/Navbar'
import {Footer} from '@/components/Footer/Footer'

import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section className="container mx-auto py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="lg:w-1/2 space-y-6">
          <SectionHeading>About the Camp</SectionHeading>
          <p className="text-lg text-campGray-dark">
            The European Youth Parliament (EYP) Summer Training Camp is a two-week immersive experience
            designed to foster leadership, public speaking, and cultural exchange among motivated
            young Europeans.
          </p>
          <ul className="list-disc list-inside space-y-2 text-campGray-dark">
            <li><strong>Mission:</strong> Empower youth to become active citizens and open-minded leaders.</li>
            <li><strong>History:</strong> Founded in 2000; over 5,000 participants so far.</li>
            <li><strong>Why Azerbaijan:</strong> A vibrant crossroads of East and West, offering rich history and warm hospitality.</li>
            <li><strong>Outcomes:</strong> Enhanced debate skills, lasting friendships, and deeper cultural understanding.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 relative h-80 w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/about-camp.jpg"
            alt="Participants debating outdoors"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}