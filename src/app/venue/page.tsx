import React from 'react';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'
import Image from 'next/image'

const venueImages = [
  { src: '/venues/gobuland_area.jpeg', alt: 'Grand Hall interior' },
  { src: '/venues/gobuland_entry.jpeg', alt: 'Outdoor Arena' },
  { src: '/venues/gobuland_ship.webp', alt: 'Dining Area setup' },
]
export default function VenuePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white">

      {/*Pick up Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>Location and Directions</SectionHeading>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3613450450616!2d49.84847596155934!3d40.400845199999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5d7fa0b117%3A0x934d34ea5fb96947!2sG%C9%99nclik%20Parking!5e0!3m2!1sen!2shu!4v1747728406074!5m2!1sen!2shu"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>

            <div className="space-y-4 lg:col-span-1">
              <h3 className="text-xl font-semibold">Pick-Up Location</h3>
              <p className="text-white/90">
                <br />
                Parking in front of Ganclik Mall <br />
              </p>
              <a
                href="https://maps.google.com/?q=123+Training+Road+Baku"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium underline hover:text-white"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-8 text-white text-center">Venue Images</h1>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {venueImages.map(({ src, alt }, i) => (
                <div
                  key={i}
                  className="relative rounded-lg overflow-hidden shadow-lg h-48 bg-white/20"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}