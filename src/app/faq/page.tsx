import React from 'react';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-white/20">
            <h1 className="text-4xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h1>
            
            {/* Dress Code Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">Dress Code</h2>
              <div className="space-y-4 text-white/90">
                <p>During the EYP Summer Training Camp, we maintain a professional yet comfortable dress code:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Business casual attire for formal sessions and committee work</li>
                  <li>Comfortable casual wear for evening activities and free time</li>
                  <li>Appropriate footwear for both indoor and outdoor activities</li>
                  <li>National costumes are welcome during cultural events</li>
                </ul>
              </div>
            </section>

            {/* What to Bring Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">What to Bring</h2>
              <div className="space-y-4 text-white/90">
                <p>Essential items to pack for the camp:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Valid ID and travel documents</li>
                  <li>Comfortable clothing for various activities</li>
                  <li>Toiletries and personal items</li>
                  <li>Notebook and writing materials</li>
                  <li>Laptop or tablet (if available)</li>
                  <li>Power adapter and chargers</li>
                  <li>Water bottle</li>
                  <li>Any necessary medications</li>
                  <li>Small backpack for daily activities</li>
                </ul>
              </div>
            </section>

            {/* Application Process Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">How to Apply</h2>
              <div className="space-y-4 text-white/90">
                <p>The application process for the EYP Summer Training Camp consists of the following steps:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Complete the online application form</li>
                  <li>Submit required documents (CV, motivation letter)</li>
                  <li>Pay the participation fee</li>
                  <li>Receive confirmation email</li>
                  <li>Complete pre-camp assignments</li>
                </ol>
                <p className="mt-4">Application deadlines and specific requirements will be announced soon.</p>
              </div>
            </section>

            {/* Program Overview Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">What to Expect</h2>
              <div className="space-y-4 text-white/90">
                <p>The EYP Summer Training Camp offers a comprehensive program including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Workshops on European politics and current affairs</li>
                  <li>Skills development sessions (public speaking, negotiation, leadership)</li>
                  <li>Committee work and resolution writing</li>
                  <li>Cultural exchange activities</li>
                  <li>Networking opportunities with EYP alumni and professionals</li>
                  <li>Social events and team-building activities</li>
                  <li>Field trips and cultural visits</li>
                </ul>
              </div>
            </section>

            {/* Additional Information Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Additional Information</h2>
              <div className="space-y-4 text-white/90">
                <p>Important notes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accommodation and meals are included in the participation fee</li>
                  <li>Travel arrangements should be made independently</li>
                  <li>Insurance coverage is mandatory</li>
                  <li>Special dietary requirements can be accommodated upon request</li>
                  <li>Emergency contact information will be provided before the camp</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 