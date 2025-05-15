import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#2E7D32] to-[#E91E63]">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
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
            className="btn-primary bg-white text-[#2E7D32] hover:bg-gray-100"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/about" className="group">
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#2E7D32]">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#2E7D32]">About the Camp</h3>
                <p className="text-gray-600">Learn about our mission and history</p>
              </div>
            </Link>
            
            <Link href="/program" className="group">
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#E91E63]">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#E91E63]">Program & Schedule</h3>
                <p className="text-gray-600">View daily activities and workshops</p>
              </div>
            </Link>
            
            <Link href="/facilitators" className="group">
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#2E7D32]">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#2E7D32]">Facilitators</h3>
                <p className="text-gray-600">Meet our expert speakers</p>
              </div>
            </Link>
            
            <Link href="/venue" className="group">
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#E91E63]">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#E91E63]">Venue & Logistics</h3>
                <p className="text-gray-600">Travel and accommodation details</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
