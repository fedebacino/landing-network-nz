import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export default function CountdownTimer({ targetDate = "2026-09-17T09:00:00" }) {
  const calculateTimeLeft = () => {
    // Target date set to September 17th of the current event year
    const target = new Date("2026-09-17T18:00:00-03:00").getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl">
      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/15">
        <div className="flex items-center gap-2 text-network-green font-semibold text-xs sm:text-sm uppercase tracking-wider">
          <Clock className="w-4 h-4 animate-pulse" />
          <span>El evento comienza en:</span>
        </div>
        <span className="inline-flex items-center gap-1 bg-network-green/20 text-network-green-light text-xs font-semibold px-2.5 py-0.5 rounded-full border border-network-green/30">
          <Sparkles className="w-3 h-3" />
          Cupos Limitados
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
        <div className="bg-white/10 rounded-xl p-2 sm:p-3 border border-white/10">
          <span className="block text-2xl sm:text-3xl font-extrabold text-white">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs text-blue-200 uppercase font-medium">Días</span>
        </div>
        <div className="bg-white/10 rounded-xl p-2 sm:p-3 border border-white/10">
          <span className="block text-2xl sm:text-3xl font-extrabold text-white">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs text-blue-200 uppercase font-medium">Horas</span>
        </div>
        <div className="bg-white/10 rounded-xl p-2 sm:p-3 border border-white/10">
          <span className="block text-2xl sm:text-3xl font-extrabold text-white">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs text-blue-200 uppercase font-medium">Min</span>
        </div>
        <div className="bg-white/10 rounded-xl p-2 sm:p-3 border border-white/10">
          <span className="block text-2xl sm:text-3xl font-extrabold text-network-green font-mono">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs text-blue-200 uppercase font-medium">Seg</span>
        </div>
      </div>
    </div>
  );
}
