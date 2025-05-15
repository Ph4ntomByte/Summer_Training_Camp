import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32]">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
            <Image
              src="/images/lotus-logo.png"
              alt="EYP Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            EYP Summer Training Camp
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Join us for an unforgettable experience in Azerbaijan
          </p>
          <a
            href="https://members.eyp.org/events/7th-summer-training-camp-of-eyp-azerbaijan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white font-semibold rounded-lg hover:from-[#C2185B] hover:to-[#E91E63] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/about" className="group h-full">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-white h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">About the Camp</h3>
                <p className="text-white/80 flex-grow">Learn about our mission and history</p>
              </div>
            </Link>
            
            <Link href="/program" className="group h-full">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-white h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">Program & Schedule</h3>
                <p className="text-white/80 flex-grow">View daily activities and workshops</p>
              </div>
            </Link>
            
            <Link href="/facilitators" className="group h-full">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-white h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">Facilitators</h3>
                <p className="text-white/80 flex-grow">Meet our expert speakers</p>
              </div>
            </Link>
            
            <Link href="/venue" className="group h-full">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-white h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">Venue & Logistics</h3>
                <p className="text-white/80 flex-grow">Travel and accommodation details</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
