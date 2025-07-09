'use client'
import React, { useState } from 'react'
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'
import { Button } from '@/components/UI/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { scheduleData } from './scheduleData';



export default function ProgramPage() {
  const [dayIndex, setDayIndex] = useState(0)
  const day = scheduleData[dayIndex]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32]">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading>Daily Schedule</SectionHeading>
          <div className="flex items-center justify-between mb-8">
            {dayIndex > 0 ? (
              <Button onClick={() => setDayIndex(dayIndex - 1)}>← Prev</Button>
            ) : (
              <div className="w-20" />
            )}
            <div className="flex-1 text-center text-white font-semibold">
              {day.day} — <span className="italic">{day.date}</span>
            </div>
            {dayIndex < scheduleData.length - 1 ? (
              <Button onClick={() => setDayIndex(dayIndex + 1)}>Next →</Button>
            ) : (
              <div className="w-20" />
            )}
          </div>
          {dayIndex === 0 && (
            <p className="max-w-3xl mx-auto text-center text-white/70 italic mb-6">
              Day 0 is for Officials only. Trainees begin on Day 1.
            </p>
          )}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                {day.activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className={`p-6 ${idx !== day.activities.length - 1 ? 'border-b border-white/20' : ''}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{activity.title}</h4>
                        <p className="text-white/60 text-sm">{activity.location}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:text-right">
                        <p className="text-white font-medium">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Workshops</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">Leadership Development</h3>
                <p className="text-white/80 mb-4">
                  Learn essential leadership skills through interactive exercises and
                  real-world scenarios.
                </p>
                <ul className="list-disc list-inside text-white/80">
                  <li>Team building exercises</li>
                  <li>Conflict resolution techniques</li>
                  <li>Strategic planning</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">Debate & Public Speaking</h3>
                <p className="text-white/80 mb-4">
                  Master the art of persuasive communication and structured debate.
                </p>
                <ul className="list-disc list-inside text-white/80">
                  <li>Rhetorical techniques</li>
                  <li>Argument construction</li>
                  <li>Audience engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main >
  );
} 