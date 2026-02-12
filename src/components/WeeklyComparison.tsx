import React, { useState } from "react";
import { GlassCard } from "./GlassCard";
import { BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import { CountUp } from "./CountUp";

interface Props {
  platform: 'youtube' | 'instagram';
  data: number[];
  color: string;
}

export function WeeklyComparison({ platform, data, color }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // Ensure data exists to prevent Max error
  const safeData = data && data.length > 0 ? data : [0,0,0,0,0,0,0];
  const maxValue = Math.max(...safeData);

  return (
    <GlassCard className="h-full flex flex-col group/container relative overflow-hidden p-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-bold text-white flex items-center gap-3 font-lexend">
          Weekly Growth
          <BarChart2 size={18} style={{ color }} className="animate-pulse" />
        </h3>
        <div className="text-right">
          <span className="block text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Velocity Score</span>
          <span className="text-2xl font-black font-lexend" style={{ color }}>
            +<CountUp value={12.4} decimals={1} suffix="%" />
          </span>
        </div>
      </div>
      
      <div className="flex-1 flex gap-6">
        <div className="flex flex-col justify-between text-[9px] font-black text-slate-800 pb-12 uppercase pr-2 border-r border-white/5">
          <span>Peak</span><span>Mid</span><span>Low</span><span>Min</span>
        </div>

        <div className="flex-1 flex items-end justify-between gap-4 pb-4 relative">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-full h-[1px] bg-white/[0.02]" />
            ))}
          </div>

          {safeData.map((value, i) => {
            const isHovered = hoveredIndex === i;
            const isDimmed = hoveredIndex !== null && !isHovered;
            const barHeight = maxValue > 0 ? (value / maxValue) * 100 : 0;

            return (
              <div 
                key={`${platform}-${i}`} 
                className="flex-1 flex flex-col items-center gap-4 group cursor-pointer h-full"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative w-full h-full bg-white/[0.03] rounded-t-xl transition-all duration-300 overflow-hidden ${isDimmed ? "opacity-20 scale-x-90" : "opacity-100 scale-x-100"}`}>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${barHeight}%`, backgroundColor: isHovered ? color : `${color}40` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.05 }}
                    className="absolute bottom-0 w-full rounded-t-lg"
                  />
                  {isHovered && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-2 py-1 rounded">
                      {value}%
                    </div>
                  )}
                </div>
                <span className={`text-[10px] font-bold transition-colors uppercase tracking-widest ${isHovered ? "text-white" : "text-slate-600"}`}>
                  {days[i]}
                </span>
              </div>
            );
          })} 
        </div>
      </div>
    </GlassCard>
  );
}