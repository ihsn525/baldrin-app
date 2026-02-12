import React from 'react';
import { GlassCard } from "../components/GlassCard";

export default function SettingsView({ platform }: { platform: string }) {
  return (
    <div className="max-w-3xl space-y-6">
      <GlassCard className="p-8 flex items-center justify-between border-l-4 border-teal-500">
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest">Platform API Sync</h4>
          <p className="text-xs text-slate-500 mt-1">Real-time data fetching is currently active.</p>
        </div>
        <div className="w-12 h-6 bg-teal-500/20 rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-teal-500 rounded-full"></div></div>
      </GlassCard>

      <GlassCard className="p-8 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest">Notifications</h4>
          <p className="text-xs text-slate-500 mt-1">Alert me of critical retention drop-offs.</p>
        </div>
        <div className="w-12 h-6 bg-white/10 rounded-full relative"><div className="absolute left-1 top-1 w-4 h-4 bg-white/20 rounded-full"></div></div>
      </GlassCard>
    </div>
  );
}