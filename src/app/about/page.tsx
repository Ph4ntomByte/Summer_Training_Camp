import React from 'react'
import {SectionHeading} from '@/components/SectionHeading/SectionHeading'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white">
      {/* EYP in General */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>EYP in General</SectionHeading>
          <p className="text-lg max-w-3xl mx-auto">
            The European Youth Parliament (EYP) is a pan-European network of motivated young people that brings together youth across Europe to discuss political, cultural, and social topics. Founded in 1987, EYP has empowered thousands of young leaders to exchange ideas, develop critical thinking, and foster intercultural understanding.
          </p>
        </div>
      </section>

      {/* EYP Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>EYP by the Numbers</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#FBCFE8]">1987</p>
              <p>Founded</p>
            </div>
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#10B981]">5000+</p>
              <p>Participants to Date</p>
            </div>
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#EC4899]">40+</p>
              <p>Countries Represented</p>
            </div>
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#F59E0B]">2000+</p>
              <p>Sessions Held</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>Our Journey</SectionHeading>
          <div className="relative overflow-x-auto">
            <div className="flex items-center space-x-12 py-8">
              {[
                { year: '1987', event: 'First session in Berlin' },
                { year: '2000', event: '500 participants milestone' },
                { year: '2011', event: 'Azerbaijan got recognized as National Committee' },
                { year: '2017', event: 'Azerbaijan hosts first Summer tr' },
                { year: '2023', event: 'Youth Parliament workshops' },
                { year: '2024', event: 'National committee formation' },
                { year: '2025', event: '7th Summer Training Camp in Baku' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center min-w-[200px]">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                    <span className="text-sm font-semibold text-[#2E7D32]">{item.year}</span>
                  </div>
                  <p className="text-white/90">{item.event}</p>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/40 -translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </main>
  )
}
