import React from 'react';
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { CountUp } from "./CountUp";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  platform: 'youtube' | 'instagram';
}

export function KPICard({ title, value, change, isPositive, icon, platform }: KPICardProps) {
  const themeColor = platform === 'youtube' ? '#14b8a6' : '#f97316';
  const changeNum = parseFloat(change.replace(/[^0-9.]/g, '')) || 0;

  const renderValue = () => {
    // Handle Time Format "8:24"
    if (value.includes(':')) {
      const parts = value.split(':');
      return (
        <span className="flex items-baseline gap-1">
          <CountUp value={parseInt(parts[0])} suffix=":" />
          <CountUp value={parseInt(parts[1])} decimals={0} />
        </span>
      );
    }

    // Handle standard "1.2M", "6.4%" etc
    const numValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    const suffix = value.replace(/[0-9.]/g, '');
    
    return (
      <CountUp 
        value={numValue} 
        suffix={suffix} 
        decimals={value.includes('.') ? 1 : 0} 
      />
    );
  };

  return (
    <GlassCard className="p-8 group hover:border-white/20 transition-all duration-500 relative overflow-hidden">
      <div 
        className="absolute -right-4 -top-4 w-24 h-24 blur-[60px] opacity-20 rounded-full transition-colors duration-700"
        style={{ backgroundColor: themeColor }}
      />

      <div className="flex justify-between items-start relative z-10">
        <div className="p-3 rounded-2xl bg-white/5 text-slate-400 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        
        <div 
          className={`px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1 transition-all duration-500 ${
            isPositive 
              ? 'bg-teal-500/10 text-teal-400' 
              : 'bg-orange-500/10 text-orange-500'
          }`}
        >
          {isPositive ? '▲' : '▼'} 
          <CountUp value={changeNum} suffix="%" decimals={changeNum % 1 === 0 ? 0 : 1} />
        </div>
      </div>
      
      <div className="mt-8 relative z-10">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
          {title}
        </p>
        <h3 className="text-4xl font-black font-lexend mt-2 tracking-tighter">
          {renderValue()}
        </h3>
      </div>
      
      <div className="mt-8 h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
          className="h-full w-full"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${themeColor})`,
            boxShadow: `0 0 10px ${themeColor}40`
          }}
        />
      </div>
    </GlassCard>
  );
}