import React from 'react';

export default function VenuePage() {
  return (
    <main className="min-h-screen  bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-white/20 text-center">
            <h1 className="text-3xl font-bold mb-6 text-white">Venue Information</h1>
            <p className="text-white/90 text-lg mb-8">
              The venue for the EYP Summer Training Camp 2025 is currently being finalized.
              We will announce the location and accommodation details soon.
            </p>
            <p className="text-white/90 text-lg">
              Please check back later for updates on the venue, travel arrangements, and accommodation options.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 