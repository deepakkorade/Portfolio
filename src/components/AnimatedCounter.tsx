import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number; // duration in ms
  suffix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 1500, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || value <= 0) return;

    const end = value;
    const totalMiliseconds = duration;
    // Set a minimum frame step to make the increment smooth
    const incrementTime = 16; // ~60fps
    const totalSteps = totalMiliseconds / incrementTime;
    const stepIncrement = end / totalSteps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += stepIncrement;
      if (currentCount >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, hasStarted]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;
