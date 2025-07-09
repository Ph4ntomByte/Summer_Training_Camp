'use client'
import React, { useState } from 'react'
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'
import { Button } from '@/components/UI/Button'
import { AnimatePresence, motion } from 'framer-motion'

export const scheduleData = [
  {
    day: 'Day 0 – CJO Day',
    date: 'July 10, 2025 (GMT+4)',
    activities: [
      { time: '10:30–11:30', title: 'Officials Registration', location: 'Globus Centre' },
      { time: '11:30–12:00', title: 'General Teambuilding', location: 'Globus Centre' },
      { time: '12:00–12:30', title: 'Safe Talk', location: 'Globus Centre' },
      { time: '12:30–13:30', title: 'Officials Training I', location: 'Globus Centre' },
      { time: '13:30–14:00', title: 'Coffee Break', location: 'Cafeteria' },
      { time: '14:00–15:00', title: 'Officials Training II', location: 'Globus Centre' },
      { time: '15:00–16:00', title: 'Lunch Break', location: 'Dining Area' },
      { time: '16:00–17:30', title: 'Officials Training III', location: 'Globus Centre' },
      { time: '17:30–18:00', title: 'Coffee Break', location: 'Cafeteria' },
      { time: '18:00–19:00', title: 'Officials Training IV', location: 'Globus Centre' },
      { time: '19:00', title: 'Officials Dinner', location: 'Globus Centre' },
    ],
  },
  {
    day: 'Day 1 – Teambuilding Day',
    date: 'July 12, 2025 (GMT+4)',
    activities: [
      { time: '09:30–10:30', title: 'Trainees Arrive', location: 'Campus Entrance' },
      { time: '10:30–12:30', title: 'Trip to Gobuland', location: 'Coach Departure Point' },
      { time: '12:30–14:00', title: 'General Teambuilding + Opening Ceremony', location: 'Gobuland' },
      { time: '14:00–15:00', title: 'Lunch Break', location: 'Restaurant' },
      { time: '15:00–17:00', title: 'Training I', location: 'Gobuland' },
      { time: '17:00–17:30', title: 'Coffee Break', location: 'Gobuland' },
      { time: '17:30–18:30', title: 'Training II', location: 'Gobuland' },
      { time: '18:30–19:30', title: 'Evening Activity', location: 'Gobuland' },
      { time: '19:30–20:30', title: 'Dinner', location: 'Restaurant' },
    ],
  },
  {
    day: 'Day 2 – Training Day',
    date: 'July 13, 2025 (GMT+4)',
    activities: [
      { time: '08:00–08:40', title: 'Breakfast', location: 'Dining Area' },
      { time: '08:40–09:00', title: 'Meditation', location: 'Gobuland' },
      { time: '09:00–11:00', title: 'Training III', location: 'Gobuland' },
      { time: '11:00–11:30', title: 'Coffee Break', location: 'Gobuland' },
      { time: '11:30–13:30', title: 'Training IV', location: 'Gobuland' },
      { time: '13:30–14:30', title: 'Lunch Break', location: 'Restaurant' },
      { time: '14:30–15:30', title: 'Training V', location: 'Gobuland' },
      { time: '15:30–16:00', title: 'Coffee Break', location: 'Gobuland' },
      { time: '16:00–18:00', title: 'Training VI', location: 'Gobuland' },
      { time: '18:00–19:00', title: 'Evening Activity', location: 'Gobuland' },
      { time: '19:00–20:00', title: 'Dinner', location: 'Restaurant' },
      { time: '20:00–22:00', title: 'Closing Ceremony', location: 'Gobuland' },
    ],
  },
  {
    day: 'Day 3 – Training Day',
    date: 'July 14, 2025 (GMT+4)',
    activities: [
      { time: '08:00–08:30', title: 'Morning Activity', location: 'Gobuland' },
      { time: '08:30–09:30', title: 'Breakfast', location: 'Dining Area' },
      { time: '09:30–10:30', title: 'Training VII', location: 'Gobuland' },
      { time: '10:30–11:30', title: 'Packing Up', location: 'Gobuland' },
      { time: '11:30–14:00', title: 'Trip to Baku', location: 'Coach Departure Point' },
      { time: '15:30–16:00', title: 'Coffee Break', location: 'Gobuland' },
    ],
  },
]

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
                        <p className="text-white/80 mt-1">{activity.description}</p>
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
      <section className="py-16">
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
      </section>
    </main >
  );
} 