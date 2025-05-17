'use client'
import React, { useState } from 'react'
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'
import { Button } from '@/components/UI/Button'

const scheduleData = [
  {
    day: 'Day 0 – CJO Day',
    date: 'July 11, 2025 (GMT+4)',
    activities: [
      { time: '11:00–12:00', title: 'Officials Arrival & General TB', description: 'Welcome and overview of team‐building exercises', location: 'Globus centre' },
      { time: '12:00–13:30', title: 'Officials Training I', description: 'N/A', location: 'N/A' },
      { time: '13:30–14:00', title: 'Coffee break', description: 'Refreshments served', location: 'Cafeteria' },
      { time: '14:00–15:00', title: 'Officials Training II', description: 'N/A', location: 'N/A' },
      { time: '15:00–16:00', title: 'Lunch break', description: 'Buffet lunch provided', location: 'Dining Area' },
      { time: '16:00–17:30', title: 'Officials Training III', description: 'N/A', location: 'N/A' },
      { time: '17:30–18:00', title: 'Coffee break', description: 'Afternoon tea and snacks', location: 'Cafeteria' },
      { time: '18:00–19:00', title: 'Officials Training IV', description: 'N/A', location: 'N/A' },
      { time: '19:00', title: 'Officials Dinner', description: 'Formal dinner', location: 'N/A' },
    ],
  },
  {
    day: 'Day 1 – Teambuilding Day',
    date: 'July 12, 2025 (GMT+4)',
    activities: [
      { time: '07:30–08:00', title: 'Morning activity', description: 'Sunrise yoga and ice-breakers', location: 'Garden Area' },
      { time: '10:00–13:00', title: 'Trip to the venue', description: 'Guided site tour', location: 'Off-site Venue' },
      { time: '13:00–14:00', title: 'General Teambuilding', description: 'Group challenges and games', location: 'Outdoor Field' },
      { time: '14:00–15:00', title: 'Lunch break', description: 'Picnic-style lunch', location: 'Outdoor Dining' },
      { time: '15:00–16:30', title: 'Training I', description: 'N/A', location: 'N/A' },
      { time: '16:30–17:00', title: 'Coffee break', description: 'Afternoon refreshments', location: 'Cafeteria' },
      { time: '17:00–18:30', title: 'Training II', description: 'N/A', location: 'N/A' },
      { time: '18:30–19:30', title: 'Evening activity', description: 'Campfire & storytelling', location: 'Campfire Circle' },
      { time: '19:30–20:30', title: 'Dinner', description: 'Buffet dinner', location: 'Dining Hall' },
      { time: '20:30–22:30', title: 'Board games night', description: 'Casual games', location: 'Common Room' },
    ],
  },
  {
    day: 'Day 2 – Training Day',
    date: 'July 13, 2025 (GMT+4)',
    activities: [
      { time: '08:00–08:30', title: 'Morning activity', description: 'Brain-teasers and warm-ups', location: 'Workshop Room A' },
      { time: '08:00–09:00', title: 'Breakfast', description: 'Continental breakfast', location: 'Dining Area' },
      { time: '09:00–10:30', title: 'Training III', description: 'N/A', location: 'N/A' },
      { time: '10:30–11:00', title: 'Coffee break', description: 'Mid-morning snacks', location: 'Cafeteria' },
      { time: '11:00–12:30', title: 'Training IV', description: 'N/A', location: 'N/A' },
      { time: '12:30–13:30', title: 'Lunch break', description: 'Hot lunch service', location: 'Dining Area' },
      { time: '13:30–14:30', title: 'Training V', description: 'N/A', location: 'N/A' },
      { time: '14:30–15:00', title: 'Break', description: '', location: 'Media Lab' },
      { time: '15:00–16:30', title: 'Training VI', description: 'N/A', location: 'N/A' },
      { time: '16:30–17:00', title: 'Coffee break', description: 'Afternoon tea', location: 'Cafeteria' },
      { time: '17:00–18:00', title: 'Training VII', description: 'N/A', location: 'N/A' },
      { time: '18:00–19:00', title: 'Roundtable', description: 'Panel discussion with experts', location: 'Main Hall' },
      { time: '19:00–20:00', title: 'Dinner', description: 'Theme dinner night', location: 'Dining Hall' },
      { time: '20:00–22:00', title: 'Closing ceremony', description: 'Imagine and Farewell', location: 'Main Hall' },
    ],
  },
  {
    day: 'Day 3 – Training Day',
    date: 'July 14, 2025 (GMT+4)',
    activities: [
      { time: '08:30–09:30', title: 'Breakfast', description: 'Final group breakfast', location: 'Dining Area' },
      { time: '11:00–14:00', title: 'Trip to Baku', description: 'Homecoming', location: 'Baku City Center' },
    ],
  },
]

export default function ProgramPage() {
  const [dayIndex, setDayIndex] = useState(0)
  const day = scheduleData[dayIndex]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32]">

      {/* Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading>Daily Schedule</SectionHeading>

          {/* Day Navigation */}
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

          {/* Only this one day’s activities */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
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