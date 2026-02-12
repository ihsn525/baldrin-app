import React from 'react';
import { GlassCard } from "../components/GlassCard";
import { RetentionChart } from "../components/RetentionChart";

export default function AnalyticsView({ platform }: { platform: string }) {
  const accent = platform === 'youtube' ? '#14b8a6' : '#f97316';

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="p-8">
          <h3 className="font-lexend font-bold text-sm uppercase tracking-widest mb-6">Advanced Retention</h3>
          <RetentionChart platform={platform} color={accent} />
        </GlassCard>
        
        <GlassCard className="p-8">
           <h3 className="font-lexend font-bold text-sm uppercase tracking-widest mb-6">Engagement Distribution</h3>
           <div className="h-64 flex items-end justify-between gap-2">
              {[40, 70, 45, 90, 65, 80, 30].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-lg transition-all duration-1000" style={{ height: `${h}%`, backgroundColor: `${accent}30`, borderTop: `2px solid ${accent}` }} />
              ))}
           </div>
           <p className="mt-6 text-xs text-slate-500 font-medium">Peaks indicate moments of high audience "Re-watch" activity.</p>
        </GlassCard>
      </div>
    </div>
  );
}