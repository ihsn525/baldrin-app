import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function CountUp({ value, duration = 1.5, suffix = "", prefix = "", decimals = 0 }: CountUpProps) {
  const count = useMotionValue(0);
  
  // This handles the string formatting (e.g., adding % or .0)
  const displayValue = useTransform(count, (latest) => {
    return prefix + latest.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    // Starts the animation from 0 to the target value on mount
    const controls = animate(count, value, { 
      duration: duration,
      ease: [0.4, 0, 0.2, 1] // Smooth 'Vantage' style easing
    });
    return controls.stop;
  }, [value, count, duration]);

  return <motion.span>{displayValue}</motion.span>;
}