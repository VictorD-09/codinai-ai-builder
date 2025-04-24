
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

// Set expiration date to 3 days from now
const getExpiryDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const expiryDate = getExpiryDate();
    
    const calculateTimeLeft = () => {
      const difference = +expiryDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 text-white mb-2">
        <Clock className="text-[#F97316]" />
        <p className="font-medium">Esta oferta expira em:</p>
      </div>
      
      <div className="flex gap-4 justify-center text-white">
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold bg-black/30 w-16 h-16 flex items-center justify-center rounded-lg">{timeLeft.days}</div>
          <span className="text-xs mt-1">Dias</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold bg-black/30 w-16 h-16 flex items-center justify-center rounded-lg">{timeLeft.hours}</div>
          <span className="text-xs mt-1">Horas</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold bg-black/30 w-16 h-16 flex items-center justify-center rounded-lg">{timeLeft.minutes}</div>
          <span className="text-xs mt-1">Minutos</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold bg-black/30 w-16 h-16 flex items-center justify-center rounded-lg">{timeLeft.seconds}</div>
          <span className="text-xs mt-1">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
