'use client'
import React from 'react'
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'
import Gallery from '@/components/Gallery/Gallery'

interface PastCamp {
  year: number
  location: string
  media: { type: 'image' | 'video'; src?: string; alt?: string }[]
}

const pastCamps: PastCamp[] = [
  {
    year: 2017,
    location: 'Baku, Azerbaijan',
    media: [
      { type: 'video', src: 'https://www.youtube.com/embed/3rAZD_fg4To?si=yGFcaGxeu2KjM5Z6', alt: 'Highlights 2017' },
      { type: 'image', src: '/images/camp-2017-hero.jpg', alt: 'Opening Camp 2017' },
      { type: 'image', src: '/images/camp-2017-training.jpg', alt: 'Trainings 2017' },
    ],
  },
  {
    year: 2018,
    location: 'Guba, Azerbaijan',
    media: [
      { type: 'video', src: '/videos/camp-2018-highlights.mp4', alt: 'Highlights 2018' },
      { type: 'image', src: '/images/camp-2018-hero.jpg', alt: 'Opening Camp 2018' },
      { type: 'image', src: '/images/camp-2018-training.jpg', alt: 'Trainings 2018' },
    ],
  },
  {
    year: 2019,
    location: 'Gabala, Azerbaijan',
    media: [
      { type: 'video', src: '/videos/camp-2019-highlights.mp4', alt: 'Highlights 2019' },
      { type: 'image', src: '/images/camp-2019-hero.jpg', alt: 'Opening Camp 2019' },
      { type: 'image', src: '/images/camp-2019-training.jpg', alt: 'Trainings 2019' },
    ],
  },
  {
    year: 2021,
    location: 'Baku, Azerbaijan',
    media: [
      { type: 'video', src: '/videos/camp-2021-highlights.mp4', alt: 'Highlights 2021' },
      { type: 'image', src: '/images/camp-2021-hero.jpg', alt: 'Opening Camp 2021' },
      { type: 'image', src: '/images/camp-2021-training.jpg', alt: 'Trainings 2021' },
    ],
  },
  {
    year: 2022,
    location: 'Ismailli, Azerbaijan',
    media: [
      { type: 'video', src: '/videos/camp-2022-highlights.mp4', alt: 'Highlights 2022' },
      { type: 'image', src: '/images/camp-2022-hero.jpg', alt: 'Opening Camp 2022' },
      { type: 'image', src: '/images/camp-2022-training.jpg', alt: 'Trainings 2022' },
    ],
  },
  {
    year: 2023,
    location: 'Nabran, Azerbaijan',
    media: [
      { type: 'video', src: '/videos/camp-2023-highlights.mp4', alt: 'Highlights 2023' },
      { type: 'image', src: '/images/camp-2023-hero.jpg', alt: 'Opening Camp 2023' },
      { type: 'image', src: '/images/camp-2023-training.jpg', alt: 'Trainings 2023' },
    ],
  },
  {
    year: 2024,
    location: 'Khachmaz, Azerbaijan',
    media: [
      { type: 'video', src: '/videos/camp-2024-highlights.mp4', alt: 'Highlights 2024' },
      { type: 'image', src: '/images/camp-2024-hero.jpg', alt: 'Opening Camp 2024' },
      { type: 'image', src: '/images/camp-2024-training.jpg', alt: 'Trainings 2024' },
    ],
  },
]

export default function PastCampsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-16">
      <div className="container mx-auto px-4 space-y-12">
        <SectionHeading>Past Summer Training Camps</SectionHeading>

        {pastCamps.map((camp) => (
          <section key={camp.year} className="space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <h2 className="text-3xl font-semibold">{camp.year}</h2>
              <p className="text-white/80">{camp.location}</p>
            </div>

            <Gallery items={camp.media.slice(0, 4)} />
          </section>
        ))}
      </div>
    </main>
  )
}