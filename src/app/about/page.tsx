import React from 'react'
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'
import Timeline, { TimelineItem } from '@/components/Timeline/Timeline'
import CountUp from '@/components/CountUp'


export default function AboutPage() {
  const eypTimeline: TimelineItem[] = [
    { year: '1987', title: 'First session in Fontainebleau, France' },
    { year: '2000', title: '500 participants milestone' },
    { year: '2011', title: 'Azerbaijan recognized as National Committee' },
    { year: '2017', title: 'Hosts 1st Summer Training Camp' },
    { year: '2023', title: 'Azerbaiajn hosted International session' },
    { year: '2025', title: '7th Summer Training Camp' },
  ]
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white">
      {/* EYP in General */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>EYP in General</SectionHeading>
          <p className="text-lg max-w-3xl mx-auto">
            The European Youth Parliament is one of Europe&apos;s largest youth platforms for civic education, intercultural encounters, and the exchange of ideas – run by young people, for young people. Our mission is to inspire and empower a young generation of informed, open-minded, responsible, and active citizens that shape society and drive impact.
          </p>
        </div>
      </section>

      {/* EYP Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>EYP by the Numbers</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#FBCFE8]"><CountUp end={1987} duration={2} /></p>
              <p>Founded</p>
            </div>
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#10B981]"><CountUp end={5000} duration={2} /></p>
              <p>Participants to Date</p>
            </div>
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#EC4899]"><CountUp end={40} duration={2} /></p>
              <p>Countries Represented</p>
            </div>
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#F59E0B]"> <CountUp end={2000} duration={2} /></p>
              <p>Sessions Held</p>
            </div>
          </div>
        </div>
      </section>

      {/* Camp History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>Camp History</SectionHeading>
          <p className="text-lg max-w-3xl mx-auto">
            The 1st Summmer Training Camp was organised in 2017 in to cultivate the culture of trainings in EYP Azerbaijan. The event brought together active alumni of EYP Azerbaijan and EYPers from all around the Europe. Since that EYP Azerbaijan organised Summer Camps each year except 2020. This year we continue EYP Azerbaijan tradition by bringing to life 7th Summer Training Camp.
          </p>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Timeline items={eypTimeline} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Now It’s Your Turn</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Now it is your time to contribute to EYP <br/>
            Join us at the next EYP Summer Training Camp in Azerbaijan!
          </p>
          <a
            href="https://members.eyp.org/events/7th-summer-training-camp-of-eyp-azerbaijan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
          >
            Apply Now
          </a>
        </div>
      </section>

    </main>
  )
}
