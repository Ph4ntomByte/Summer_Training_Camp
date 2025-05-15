import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-forest-dark">About the Camp</h2>
          <p className="text-lg text-campGray-dark">
            The European Youth Parliament (EYP) Summer Training Camp is a two-week immersive experience designed to foster leadership,
            public speaking, and cultural exchange among motivated young Europeans.
          </p>
          <p className="text-lg text-campGray-dark">
            <strong>Mission:</strong> Empower youth to become active citizens and open-minded leaders.<br/>
            <strong>History:</strong> Founded by EYP alumni in 2000, with over 5,000 participants to date.<br/>
            <strong>Why Azerbaijan:</strong> A vibrant crossroads of East and West, offering rich history, modern architecture, and warm hospitality.<br/>
            <strong>Outcomes:</strong> Improved debate skills, lasting friendships, and a deeper understanding of European issues.
          </p>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2 relative h-80 w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/about-camp.jpg"
            alt="Participants debating outdoors"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}