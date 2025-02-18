"use client";
import { useState, useEffect } from "react";

export default function TimerWithProgressBar({ onTimeout = () => {} }) { 
  const [timeLeft, setTimeLeft] = useState(60); 
  const totalTime = 60; 
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout(); 
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  
  const progress = (timeLeft / totalTime) * 100;

  return (
    <div>
      <ProgressBar progress={progress} />
     
    </div>
  );
}

function ProgressBar({ progress }) {
  return (
    <div className="relative w-full h-3 bg-gray-200 rounded-full mb-4">
      <div
        className="absolute top-0 left-0 h-full bg-purple-500 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

