// `electron-react-boilerplate/src/renderer/Components/Timer.tsx`
import React, { useState, useEffect } from 'react';

interface TimerProps {
  time: number; // in minutes
  increment: number; // in seconds
}

const Timer: React.FC<TimerProps> = ({ time, increment }) => {
  const [secondsLeft, setSecondsLeft] = useState(time * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev === 0) {
          return increment;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [increment]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>{formatTime(secondsLeft)}</p>
    </div>
  );
};

export default Timer;
