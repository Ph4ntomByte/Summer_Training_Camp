import React from 'react'
import {SectionHeading} from '@/components/SectionHeading/SectionHeading'

export default function PastCampsPage() {
  const pastCamps = [
    { year: 2017, location: 'Baku, Azerbaijan' },
    { year: 2018, location: 'Guba, Azerbaijan' },
    { year: 2019, location: 'Gabala, Azerbaijan' },
    { year: 2021, location: 'Baku, Azerbaijan' },
    { year: 2022, location: 'Ismailli, Azerbaijan' },
    { year: 2023, location: 'Nabran, Azerbaijan' },
    { year: 2024, location: 'Choosing, Azerbaijan' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeading>Past Summer Training Camps</SectionHeading>
        <ul className="space-y-6 max-w-3xl mx-auto">
          {pastCamps.map((camp) => (
            <li key={camp.year} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold">{camp.year}</h3>
              <p className="text-white/80">{camp.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}