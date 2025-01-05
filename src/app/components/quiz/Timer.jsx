import { useState, useEffect } from 'react';

export default function Timer({ onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  return <div className="text-center text-lg">Time Left: {timeLeft}s</div>;
}
