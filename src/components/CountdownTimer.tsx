'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);
    
    const targetDate = new Date('2025-07-12T00:00:00');
    
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Initial update
    updateTimer();
    
    // Update every second
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days', max: 365 },
    { value: timeLeft.hours, label: 'Hours', max: 24 },
    { value: timeLeft.minutes, label: 'Minutes', max: 60 },
    { value: timeLeft.seconds, label: 'Seconds', max: 60 }
  ];

  return (
    <div className="flex justify-center gap-4 md:gap-8 mb-8">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="5"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="white"
                strokeWidth="5"
                strokeDasharray={`${(unit.value / unit.max) * 283} 283`}
                transform="rotate(-90 50 50)"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold text-white">
                {unit.value.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
          <span className="text-white/80 mt-2 text-sm md:text-base">{unit.label}</span>
        </div>
      ))}
    </div>
  );
} 