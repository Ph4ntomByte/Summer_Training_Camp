import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="EYP Conference"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32]/80 to-[#E91E63]/80" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            About the Camp
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#2E7D32]">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              The European Youth Parliament Summer Training Camp aims to empower young leaders
              through debate, cultural exchange, and hands-on learning experiences. We believe
              in fostering critical thinking, leadership skills, and international understanding
              among Europe's youth.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#E91E63]">History of EYP</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 1987, the European Youth Parliament has grown to become one of the
              largest European platforms for political debate, intercultural encounters,
              political educational work, and the exchange of ideas among young people in Europe.
            </p>
            <p className="text-lg text-gray-700">
              Our Summer Training Camp in Azerbaijan represents a unique opportunity to
              experience the rich cultural heritage of the Caucasus region while developing
              essential skills for future leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Key Outcomes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2E7D32]">Key Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#2E7D32]">
              <h3 className="text-xl font-semibold mb-4 text-[#2E7D32]">Leadership Skills</h3>
              <p className="text-gray-700">
                Develop essential leadership qualities through practical workshops and
                real-world challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#E91E63]">
              <h3 className="text-xl font-semibold mb-4 text-[#E91E63]">International Network</h3>
              <p className="text-gray-700">
                Connect with young leaders from across Europe and build lasting
                professional relationships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#2E7D32]">
              <h3 className="text-xl font-semibold mb-4 text-[#2E7D32]">Cultural Understanding</h3>
              <p className="text-gray-700">
                Experience the rich cultural heritage of Azerbaijan while learning about
                European diversity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 