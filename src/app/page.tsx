import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/azerbaijan-hero.jpg"
            alt="Azerbaijan Landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            EYP Summer Training Camp
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Join us for an unforgettable experience in Azerbaijan
          </p>
          <Link
            href="/registration"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/about" className="group">
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">About the Camp</h3>
                <p className="text-gray-600">Learn about our mission and history</p>
              </div>
            </Link>
            
            <Link href="/program" className="group">
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Program & Schedule</h3>
                <p className="text-gray-600">View daily activities and workshops</p>
              </div>
            </Link>
            
            <Link href="/facilitators" className="group">
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Facilitators</h3>
                <p className="text-gray-600">Meet our expert speakers</p>
              </div>
            </Link>
            
            <Link href="/venue" className="group">
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Venue & Logistics</h3>
                <p className="text-gray-600">Travel and accommodation details</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
