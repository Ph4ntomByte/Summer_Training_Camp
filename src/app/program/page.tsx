import Image from 'next/image';

const scheduleData = [
  {
    day: 'Day 1',
    date: 'July 15, 2024',
    activities: [
      {
        time: '09:00 - 10:30',
        title: 'Opening Ceremony',
        description: 'Welcome speeches and introduction to the camp',
        location: 'Main Hall'
      },
      {
        time: '11:00 - 12:30',
        title: 'Leadership Workshop',
        description: 'Introduction to leadership styles and team dynamics',
        location: 'Workshop Room A'
      },
      {
        time: '14:00 - 15:30',
        title: 'Debate Training',
        description: 'Basic debate techniques and parliamentary procedure',
        location: 'Conference Room'
      }
    ]
  },
  {
    day: 'Day 2',
    date: 'July 16, 2024',
    activities: [
      {
        time: '09:00 - 10:30',
        title: 'European Politics',
        description: 'Overview of current European political landscape',
        location: 'Main Hall'
      },
      {
        time: '11:00 - 12:30',
        title: 'Public Speaking',
        description: 'Techniques for effective public speaking',
        location: 'Workshop Room B'
      },
      {
        time: '14:00 - 15:30',
        title: 'Cultural Exchange',
        description: 'Interactive session on European cultural diversity',
        location: 'Conference Room'
      }
    ]
  }
];

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32]">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Program & Schedule
          </h1>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Daily Schedule</h2>
            
            {scheduleData.map((day, index) => (
              <div key={index} className="mb-12">
                <div className="bg-white/10 backdrop-blur-sm text-white p-4 rounded-t-lg">
                  <h3 className="text-2xl font-bold">{day.day}</h3>
                  <p className="text-white/80">{day.date}</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-b-lg shadow-md">
                  {day.activities.map((activity, actIndex) => (
                    <div
                      key={actIndex}
                      className={`p-6 ${
                        actIndex !== day.activities.length - 1
                          ? 'border-b border-white/20'
                          : ''
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-white">
                            {activity.title}
                          </h4>
                          <p className="text-white/80 mt-1">
                            {activity.description}
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0 md:text-right">
                          <p className="text-white font-medium">
                            {activity.time}
                          </p>
                          <p className="text-white/60 text-sm">
                            {activity.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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
    </main>
  );
} 