import React, { useState, useRef } from "react";
import { GlassCard } from "./GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from "./CountUp";

interface Props {
  platform: 'youtube' | 'instagram';
  color: string;
}

const RETENTION_DATA = {
  youtube: {
    points: [0, 110, 40, 90, 60, 100, 80, 70, 100],
    avg: 58.2 
  },
  instagram: {
    points: [0, 40, 70, 50, 90, 80, 100, 110, 120],
    avg: 84.0
  }
};

export function RetentionChart({ platform, color }: Props) {
  const [hoverData, setHoverData] = useState({ x: 0, y: 0, value: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  
  const current = RETENTION_DATA[platform] || RETENTION_DATA.youtube;
  const width = 400; 
  const height = 150;

  const generatePath = (points: number[], isArea = false) => {
    if (!points.length) return "";
    const step = width / (points.length - 1);
    let path = `M 0 ${height - (points[0] / 120) * height}`;
    
    for (let i = 0; i < points.length - 1; i++) {
      const x1 = i * step;
      const y1 = height - (points[i] / 120) * height;
      const x2 = (i + 1) * step;
      const y2 = height - (points[i + 1] / 120) * height;
      const cx = (x1 + x2) / 2;
      path += ` C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
    }
    
    if (isArea) path += ` L ${width} ${height} L 0 ${height} Z`;
    return path;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * width;
    const step = width / (current.points.length - 1);
    const index = Math.round(mouseX / step);
    const clampedIndex = Math.max(0, Math.min(current.points.length - 1, index));
    setHoverData({ 
      x: clampedIndex * step, 
      y: height - (current.points[clampedIndex] / 120) * height, 
      value: current.points[clampedIndex] 
    });
  };

  return (
    <GlassCard 
      className="h-[420px] w-full flex flex-col relative overflow-hidden group cursor-crosshair p-8"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex justify-between items-start mb-8 z-10 pointer-events-none">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight font-lexend">Audience Retention</h3>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-medium">Performance Curve Sync</p>
        </div>
        <div className="flex flex-col items-end">
          <AnimatePresence mode="wait">
            <motion.span 
              key={platform + (isHovering ? hoverData.value : 'avg')}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black font-lexend" 
              style={{ color, textShadow: `0 0 20px ${color}60` }}>
              {isHovering ? (
                `${Math.round((hoverData.value / 120) * 100)}%`
              ) : (
                <CountUp value={Number(current.avg)} suffix="%" decimals={1} />
              )}
            </motion.span>
          </AnimatePresence>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            {isHovering ? 'Snapshot Intensity' : 'Average Duration'}
          </span>
        </div>
      </div>
      
      <div className="flex-1 flex gap-4">
        <div className="flex flex-col justify-between text-[9px] font-black text-slate-700 pb-10 uppercase pr-2 border-r border-white/5">
          <span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span>
        </div>

        <div className="flex-1 relative">
          <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0, 37.5, 75, 112.5, 150].map(y => (
              <line key={y} x1="0" y1={y} x2={width} y2={y} stroke="white" strokeOpacity="0.03" strokeWidth="1" />
            ))}
            <motion.path animate={{ d: generatePath(current.points, true) }} fill="url(#curveGradient)" />
            <motion.path animate={{ d: generatePath(current.points), stroke: color }} fill="none" strokeWidth="3" strokeLinecap="round" />
            {isHovering && (
              <g>
                <line x1={hoverData.x} y1="0" x2={hoverData.x} y2={height} stroke="white" strokeOpacity="0.2" strokeDasharray="4" />
                <circle cx={hoverData.x} cy={hoverData.y} r="6" fill={color} />
                <circle cx={hoverData.x} cy={hoverData.y} r="2.5" fill="white" />
              </g>
            )}
          </svg>
          <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-[10px] text-slate-700 font-black tracking-widest uppercase border-t border-white/5 pt-4">
            <span>0:00</span><span>2:30</span><span>5:00</span><span>7:30</span><span>10:00</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}