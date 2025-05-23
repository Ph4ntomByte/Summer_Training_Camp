'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import CountdownTimer from '@/components/CountdownTimer'

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32]">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative h-[60vh] pt-20 pb-16 overflow-hidden"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
        >
          <div className="mb-8">
            <div className="block sm:hidden">
              <Image
                src="/images/camp_logo_no_background.png"
                alt="EYP Logo"
                width={115}
                height={115}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block md:hidden">
              <Image
                src="/images/camp_logo_no_background.png"
                alt="EYP Logo"
                width={140}
                height={140}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/camp_logo_no_background.png"
                alt="EYP Logo"
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
            EYP Summer Training Camp
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white/90 font-light">
            Join us for an unforgettable experience in Azerbaijan
          </p>
          <div className="flex-shrink-0 h-40 w-full max-w-xs">
            <CountdownTimer />
          </div>
          <a
            href="https://members.eyp.org/events/7th-summer-training-camp-of-eyp-azerbaijan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
          >
            Apply Now
          </a>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/about" className="group h-full">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-white h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">About the Camp</h3>
                <p className="text-white/80 flex-grow">Learn about our mission and history</p>
              </div>
            </Link>

            <Link href="/program" className="group h-full">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-white h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">Program & Schedule</h3>
                <p className="text-white/80 flex-grow">View daily activities and workshops</p>
              </div>
            </Link>

            <Link href="/venue" className="group h-full">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-white h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">Venue & Logistics</h3>
                <p className="text-white/80 flex-grow">Travel and accommodation details</p>
              </div>
            </Link>

            <Link href="/faq" className="group h-full">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-white h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">FAQ</h3>
                <p className="text-white/80 flex-grow">Frequently Asked Questions</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}