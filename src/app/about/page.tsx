import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32]">
      
      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-white/20">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Mission</h2>
            <p className="text-lg text-white/90 mb-6">
              The European Youth Parliament Summer Training Camp aims to empower young leaders
              through debate, cultural exchange, and hands-on learning experiences. We believe
              in fostering critical thinking, leadership skills, and international understanding
              among Europe's youth.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white/15 backdrop-blur-sm p-8 rounded-lg border-2 border-white/20">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">History of EYP</h2>
            <p className="text-lg text-white/90 mb-6">
              Founded in 1987, the European Youth Parliament has grown to become one of the
              largest European platforms for political debate, intercultural encounters,
              political educational work, and the exchange of ideas among young people in Europe.
            </p>
            <p className="text-lg text-white/90">
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
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Key Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border-2 border-white/20 hover:border-white/40 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-white">Leadership Skills</h3>
              <p className="text-white/90">
                Develop essential leadership qualities through practical workshops and
                real-world challenges.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-2 border-white/20 hover:border-white/40 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-white">International Network</h3>
              <p className="text-white/90">
                Connect with young leaders from across Europe and build lasting
                professional relationships.
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-lg border-2 border-white/20 hover:border-white/40 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-white">Cultural Understanding</h3>
              <p className="text-white/90">
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