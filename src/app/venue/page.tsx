import React from 'react';

export default function VenuePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white">
      {/* Hero / Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Venue &amp; Logistics</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            We’ll be picking you up from the airport and bringing you straight to our camp venue.  
            Stay tuned for the exact pickup locations and schedule!
          </p>
        </div>
      </section>
    </main>
  );
}