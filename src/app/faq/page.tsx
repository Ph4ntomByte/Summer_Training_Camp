import React from 'react';
// import Link from 'next/link'

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border-2 border-white/20">
            <h1 className="text-4xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h1>

            {/* Application Process Section */}
            {/* <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">How to Apply</h2>
              <div className="space-y-4 text-white/90">
                <p>The application process for the EYP Summer Training Camp consists of the following steps:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdJWQ-NIDmaYDLFJCfCWo0MyEDHJxLRIzvIPw8p20DeyksdCA/viewform?usp=header"
                      className="text-current hover:underline"
                    >
                      Complete the online application form
                    </Link>
                  </li>
                  <li>Receive invitation for the interview</li>
                  <li>Get acceptance email</li>
                  <li>Confirm participation</li>
                  <li>Pay the participation fee</li>
                  <li>Sign and send Code of Conduct</li>
                  <li>Complete registration form and medical sheet</li>
                </ol>
              </div>
            </section> */}

            {/* What to Bring Section */}
            {/* What to Bring Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">What to Bring</h2>
              <div className="space-y-4 text-white/90">
                <p>Essential items to pack for the camp:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Valid ID and travel documents</li>
                  <li>Comfortable clothing for various activities</li>
                  <li>Notebook and writing materials</li>
                  <li>Laptop or tablet (if available)</li>
                  <li>Power adapter and chargers</li>
                  <li>Water bottle</li>
                  <li>Any necessary medications</li>
                  <li>Small backpack for daily activities</li>
                </ul>

                <p>Personal items:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Toothbrush, toothpaste, deodorant, shampoo, shower gel, etc.</li>
                  <li>Sunscreen (it might be very sunny)</li>
                  <li>Towel and flip-flops or slippers for shower</li>
                  <li>Hand sanitizer or wet wipes (just in case)</li>
                  <li>Enough clothes for 3 days (plus one extra set)</li>
                  <li>Comfortable outfits for daytime activities</li>
                  <li>Sports shoes (expect lots of movement—don’t bring your best pair)</li>
                  <li>Light jacket or hoodie (nights can get chilly)</li>
                  <li>Hat or cap and sunglasses for sun protection</li>
                  <li>Fully charged power bank</li>
                  <li>Reusable water bottle</li>
                </ul>

                <p>Things to do before camp:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Charge all your devices</li>
                  <li>Download music or offline games for the trip and evenings</li>
                  <li>Bring any personal medications (ESPs provide only basic medical supplies)</li>
                </ul>
              </div>
            </section>

            {/* Dress Code Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">Dress Code</h2>
              <div className="space-y-4 text-white/90">
                <p>At the Camp, we do not have Dress Code but we recommend to take with you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comfortable casual wear for evening activities and free time</li>
                  <li>Appropriate footwear for both indoor and outdoor activities</li>
                  <li>Warm clothes since it might get cold at nights</li>
                </ul>
              </div>
            </section>

            {/* Program Overview Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">What to Expect</h2>
              <div className="space-y-4 text-white/90">
                <p>The EYP Summer Training Camp offers a comprehensive Trainings program including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Trainings on becoming official for each postion (Chairperson, Organiser, Media Team Member)</li>
                  <li>Workshops on skills development (public speaking, negotiation, leadership)</li>
                  <li>Interesting team-building games </li>
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
                  <li>Travel information will be provided soon</li>
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