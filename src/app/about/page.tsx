'use client'

import React, { useState } from 'react'
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'
import Timeline, { TimelineItem } from '@/components/Timeline/Timeline'
import CountUp from '@/components/CountUp'

export default function AboutPage() {
  const eypTimeline: TimelineItem[] = [
    { year: '1987', title: 'First session in Fontainebleau, France' },
    { year: '2000', title: '500 participants milestone' },
    { year: '2011', title: 'Azerbaijan recognized as National Committee' },
    { year: '2017', title: 'Hosts 1st Summer Training Camp' },
    { year: '2023', title: 'Azerbaijan hosted International Session' },
    { year: '2025', title: '7th Summer Training Camp' },
  ]

  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white">

      {/* Global Overview */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <SectionHeading>What is EYP?</SectionHeading>
          <p className="text-lg max-w-3xl mx-auto">
            The European Youth Parliament is one of Europe&apos;s largest youth platforms for civic education, intercultural encounters, and the exchange of ideas – run by young people, for young people. Our mission is to inspire and empower a young generation of informed, open-minded, responsible, and active citizens that shape society and drive impact.
          </p>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>EYP by the Numbers</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#FBCFE8]">
                <CountUp start={2025} end={1987} duration={1} onComplete={() => setShow2(true)} />
              </p>
              <p>Founded</p>
            </div>
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#EC4899]">
                {show2 ? <CountUp end={40} duration={1} onComplete={() => setShow3(true)} /> : '-'}
              </p>
              <p>Countries Represented</p>
            </div>
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#F59E0B]">
                {show3 ? <CountUp end={400} duration={2} onComplete={() => setShow4(true)} /> : '-'}
              </p>
              <p>Sessions annually</p>
            </div>
            <div className="p-6 bg-white/20 rounded-lg text-center">
              <p className="text-4xl font-bold text-[#10B981]">
                {show4 ? <CountUp end={25000} duration={5} /> : '-'}
              </p>
              <p>Participants annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* National Focus */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <SectionHeading>EYP in Azerbaijan</SectionHeading>
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            Azerbaijan officially joined the EYP network as a National Committee in 2011, marking the beginning of a new chapter in youth engagement in the South Caucasus. Since then, EYP Azerbaijan has hosted dozens of regional and international events, becoming one of the most dynamic NCs in the network. Our Summer Training Camp is a key example of how we invest in our young leaders.
          </p>
        </div>
      </section>

      {/* Camp History */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <SectionHeading>Camp History</SectionHeading>
          <p className="text-lg max-w-3xl mx-auto">
            The 1st Summer Training Camp was organised in 2017 to cultivate the culture of trainings in EYP Azerbaijan. The event brought together active alumni of EYP Azerbaijan and EYPers from all around Europe. Since then, EYP Azerbaijan has organised Summer Camps each year except 2020. This year, we continue the tradition with the 7th Summer Training Camp.
          </p>
        </div>
      </section>

      <div className="mx-auto h-108 aspect-video">
        <iframe
          src="https://www.youtube.com/embed/3rAZD_fg4To"
          title="EYP Being EYP"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        />
      </div>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>Our Journey</SectionHeading>
          <Timeline items={eypTimeline} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Now It&apos;s Your Turn</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            You&apos;ve seen the journey – now it&apos;s your time to contribute to EYP.<br />
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