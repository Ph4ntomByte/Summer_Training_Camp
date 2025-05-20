import React from 'react';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'

export default function VenuePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white">
      {/* Hero / Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Venue &amp; Logistics</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            We will be picking you up from the appointed location and bringing you straight to our camp venue.
            Stay tuned for the exact pickup locations and schedule!
          </p>
        </div>
      </section>
      {/* Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>Location &amp; Directions</SectionHeading>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3613450450616!2d49.84847596155934!3d40.400845199999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5d7fa0b117%3A0x934d34ea5fb96947!2sG%C9%99nclik%20Parking!5e0!3m2!1sen!2shu!4v1747728406074!5m2!1sen!2shu"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
            {/* Address */}
            <div className="space-y-4 lg:col-span-1">
              <h3 className="text-xl font-semibold">Camp Venue Address</h3>
              <p className="text-white/90">
                [Venue Name]<br />
                123 Street <br />
                Baku, Azerbaijan
              </p>
              {/* <a
                href="https://maps.google.com/?q=123+Training+Road+Baku"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium underline hover:text-white"
              >
                Open in Google Maps
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}