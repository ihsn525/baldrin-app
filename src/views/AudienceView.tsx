import React from 'react';
import { GlassCard } from "../components/GlassCard";
import { Users, Globe, Clock } from 'lucide-react';

export default function AudienceView({ platform }: { platform: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <GlassCard className="p-8 space-y-6">
        <div className="flex items-center gap-4 text-teal-400"><Globe size={24}/> <h4 className="font-bold uppercase tracking-widest text-xs">Top Geographies</h4></div>
        <ul className="space-y-4 text-sm font-medium">
          <li className="flex justify-between"><span>USA</span> <span className="text-white/40">42%</span></li>
          <li className="flex justify-between"><span>India</span> <span className="text-white/40">28%</span></li>
          <li className="flex justify-between"><span>UK</span> <span className="text-white/40">12%</span></li>
        </ul>
      </GlassCard>

      <GlassCard className="p-8 space-y-6">
        <div className="flex items-center gap-4 text-orange-400"><Clock size={24}/> <h4 className="font-bold uppercase tracking-widest text-xs">Active Hours</h4></div>
        <p className="text-2xl font-black font-lexend glow-text-orange">6:00 PM - 9:00 PM</p>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Standard Time (EST)</p>
      </GlassCard>

      <GlassCard className="p-8 flex flex-col items-center justify-center text-center space-y-4">
        <Users size={48} className="text-white/10" />
        <h4 className="font-lexend font-bold text-lg">Community Pulse</h4>
        <p className="text-slate-500 text-xs px-4 italic">"Audience sentiment is 84% positive following your last AI tutorial."</p>
      </GlassCard>
    </div>
  );
}