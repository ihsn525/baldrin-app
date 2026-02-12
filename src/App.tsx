import React, { useState } from 'react';
import { 
  Youtube, Instagram, LayoutDashboard, PieChart, Users, 
  Settings as SettingsIcon, LogOut, TrendingUp, Zap, MousePointer2, 
  Target, Globe, Clock, Bookmark, Heart, Lock, ArrowRight, Sparkles,
  Bell, Database, ShieldCheck, ChevronRight, Activity, X
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import { GlassCard } from "./components/GlassCard";
import { KPICard } from "./components/KPICard";
import { InsightCard } from "./components/InsightCard";
import { RetentionChart } from "./components/RetentionChart";
import { WeeklyComparison } from "./components/WeeklyComparison";
import { CountUp } from "./components/CountUp";

// --- AUTH PAGE COMPONENT ---
function AuthPage({ onLogin }: { onLogin: (user: string) => void }) {
  const [email, setEmail] = useState('');
  
  return (
    <div className="min-h-screen w-full bg-[#05050a] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full" />
      
      <GlassCard className="max-w-md w-full p-10 relative z-10 border-white/10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-teal-500 flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.4)]">
            <TrendingUp size={32} className="text-black" strokeWidth={3} />
          </div>
          <div>
            <h1 className="text-3xl font-black font-lexend tracking-tighter italic">VANTAGE</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">Intelligence Suite</p>
          </div>

          <div className="w-full space-y-4 pt-4">
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-teal-500 transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="License Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-teal-500/50 transition-all font-medium text-white"
              />
            </div>
            
            <button 
              onClick={() => email && onLogin('User')}
              className="w-full bg-white text-black font-black py-4 rounded-xl text-xs uppercase tracking-widest hover:bg-teal-500 transition-all flex items-center justify-center gap-2 group"
            >
              Initialize Session <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
              <div className="relative flex justify-center text-[10px] uppercase font-black text-slate-600 bg-[#0a0c1a] px-4 tracking-widest">or bypass</div>
            </div>

            <button 
              onClick={() => onLogin('Arjun')}
              className="w-full bg-gradient-to-r from-teal-500/20 to-orange-500/20 border border-white/10 text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest hover:border-white/40 transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              <Sparkles size={16} className="text-teal-400 group-hover:animate-spin" />
              Arjun Login
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

// --- DATA CONSTANTS ---
const PLATFORM_DATA = {
  youtube: {
    title: "YouTube Studio",
    primaryColor: "#14b8a6",
    secondaryColor: "#f97316",
    metrics: [
      { title: "Total Views", value: "1.2M", change: "12%", isPositive: true, icon: <Users size={18}/>, desc: "Total channel reach across all video formats." },
      { title: "Avg. Watch Time", value: "8:24", change: "5%", isPositive: true, icon: <Zap size={18}/>, desc: "Retention average per unique viewer session." },
      { title: "CTR", value: "6.4%", change: "2%", isPositive: false, icon: <MousePointer2 size={18}/>, desc: "Click-through rate on global impressions." }
    ],
    insights: [
      { title: "Hook Warning", description: "Viewer drop-off at 0:25s mark.", category: "warning" as const },
      { title: "Trend Alert", description: "AI topics are peaking.", category: "trend" as const }
    ],
    goals: [
      { label: "Subscribers", current: 850, total: 1000, color: "#14b8a6" },
      { label: "Views", current: 1.2, total: 2.0, color: "#f97316", isM: true }
    ],
    weeklyGrowth: [65, 59, 80, 81, 56, 95, 85],
    watchTimeDist: [60, 80, 45, 90, 100, 70, 85],
    geos: [{ name: "USA", value: 42 }, { name: "India", value: 28 }, { name: "UK", value: 12 }],
    peakTime: "18:00 — 21:00",
    sentiment: 84
  },
  instagram: {
    title: "Instagram Insights",
    primaryColor: "#f97316",
    secondaryColor: "#14b8a6",
    metrics: [
      { title: "Reels Reach", value: "892K", change: "24%", isPositive: true, icon: <Users size={18}/>, desc: "Unique accounts reached via Reels." },
      { title: "Engagement", value: "4.2%", change: "1.5%", isPositive: true, icon: <Heart size={18}/>, desc: "Likes/comments per impressions." },
      { title: "Post Saves", value: "12.4K", change: "8%", isPositive: true, icon: <Bookmark size={18}/>, desc: "Total bookmark actions." }
    ],
    insights: [
      { title: "Optimal Posting", description: "Activity peak: Fridays at 6 PM.", category: "tip" as const },
      { title: "Audio Spiking", description: "Audio 'Midnight Harbor' is trending.", category: "trend" as const }
    ],
    goals: [
      { label: "Followers", current: 4200, total: 5000, color: "#14b8a6" },
      { label: "Visits", current: 150, total: 300, color: "#f97316" }
    ],
    weeklyGrowth: [40, 85, 60, 100, 50, 75, 90],
    watchTimeDist: [30, 50, 95, 40, 60, 80, 55],
    geos: [{ name: "Brazil", value: 35 }, { name: "Germany", value: 20 }, { name: "Canada", value: 15 }],
    peakTime: "12:00 — 15:00",
    sentiment: 92
  }
};

type ViewType = 'Dashboard' | 'Analytics' | 'Audience' | 'Settings';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const [platform, setPlatform] = useState<'youtube' | 'instagram'>('youtube');
  const [activeView, setActiveView] = useState<ViewType>('Dashboard');
  const [selectedDetail, setSelectedDetail] = useState<any>(null);

  const handleLogin = (name: string) => { setUser(name); setIsAuthenticated(true); };
  const handleLogout = () => { setIsAuthenticated(false); setUser(''); };

  const current = PLATFORM_DATA[platform];

  if (!isAuthenticated) return <AuthPage onLogin={handleLogin} />;

  const renderContent = () => {
    switch (activeView) {
      case 'Dashboard':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {current.metrics.map((m, i) => (
                <div key={`${platform}-${i}`} className="relative group cursor-pointer" onClick={() => setSelectedDetail(m)}>
                  <KPICard {...m} platform={platform} />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              <div className="lg:col-span-3">
                <RetentionChart platform={platform} color={current.primaryColor} />
              </div>
              <div className="space-y-8">
                {current.insights.map((insight, i) => (
                  <div key={`${platform}-${i}`} className="cursor-pointer" onClick={() => setSelectedDetail(insight)}>
                    <InsightCard {...insight} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
              <WeeklyComparison platform={platform} data={current.weeklyGrowth} color={current.primaryColor} />
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Target size={20} className="text-slate-400" />
                  <h3 className="font-lexend font-bold text-xs uppercase tracking-widest text-white/80">Goals</h3>
                </div>
                <div className="space-y-8">
                  {current.goals.map((goal, i) => (
                    <GoalItem key={`${platform}-${i}`} {...goal} />
                  ))}
                </div>
              </GlassCard>
              <GlassCard className="p-8">
                <h3 className="font-lexend font-bold text-xs uppercase tracking-widest text-white/80 mb-8 flex justify-between">
                  Activity <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-ping" />
                </h3>
                <div className="space-y-6">
                  <ActivityItem text="Viral spike detected" time="14m ago" active color={current.primaryColor} />
                  <ActivityItem text="New milestone reached" time="1h ago" />
                  <ActivityItem text="System audit complete" time="3h ago" />
                </div>
              </GlassCard>
            </div>
          </motion.div>
        );
      case 'Analytics':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <GlassCard className="p-8 h-[450px]">
                  <h3 className="font-lexend font-bold text-xs uppercase tracking-widest mb-8">Retention Depth</h3>
                  <RetentionChart platform={platform} color={current.primaryColor} />
               </GlassCard>
               <GlassCard className="p-8 h-[450px] flex flex-col">
                  <h3 className="font-lexend font-bold text-xs uppercase tracking-widest mb-8">Watch Time Dist.</h3>
                  <div className="flex-1 flex items-end gap-2 px-4">
                     {current.watchTimeDist.map((h, i) => (
                       <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} key={i} className="flex-1 rounded-t-lg" style={{ backgroundColor: `${current.primaryColor}20`, borderTop: `2px solid ${current.primaryColor}` }} />
                     ))}
                  </div>
               </GlassCard>
            </div>
          </motion.div>
        );
      case 'Audience':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
            <GlassCard className="p-8 space-y-8">
              <div className="flex items-center gap-4 text-teal-400">
                <Globe size={24}/> <h4 className="font-bold uppercase tracking-widest text-[10px]">Geography</h4>
              </div>
              <div className="space-y-6">
                {current.geos.map((geo, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase"><span className="text-white">{geo.name}</span><span className="text-slate-500">{geo.value}%</span></div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${geo.value}%` }} className="h-full bg-teal-500" />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="p-8 flex flex-col justify-center text-center">
                <p className="text-6xl font-black font-lexend tracking-tighter italic" style={{ color: current.primaryColor }}>{current.peakTime}</p>
                <p className="mt-4 text-[10px] text-slate-500 font-black tracking-[0.3em] uppercase">Peak Traffic</p>
            </GlassCard>
            <GlassCard className="p-8 flex flex-col items-center justify-center text-center space-y-4">
              <Users size={40} className="text-teal-500" />
              <h4 className="font-lexend font-bold text-xl">Sentiment: {current.sentiment}%</h4>
            </GlassCard>
          </motion.div>
        );
      case 'Settings':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl space-y-6 pb-20">
             <SettingsToggle icon={<Database size={18}/>} title="API Sync" desc="Real-time production fetching." active color={current.primaryColor} />
             <SettingsToggle icon={<Bell size={18}/>} title="Notifications" desc="Push critical alerts." color={current.primaryColor} />
             <SettingsToggle icon={<ShieldCheck size={18}/>} title="Administrative" desc="Bypass protocols." active color={current.primaryColor} />
             <button className="mt-10 px-8 py-4 bg-orange-500/10 border border-orange-500/20 text-orange-500 font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-orange-500 hover:text-white transition-all w-full md:w-auto">
               Clear System Cache & Reset Session
             </button>
          </motion.div>
        );
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#05050a] text-white">
      <div className="fixed inset-0 opacity-[0.1] blur-[150px] pointer-events-none z-0" style={{ background: `radial-gradient(circle at 10% 20%, ${current.primaryColor} 0%, transparent 50%)` }} />
      
      <aside className="w-72 border-r border-white/5 bg-[#0a0c1a]/60 backdrop-blur-3xl flex flex-col z-50">
        <div className="p-10 flex items-center gap-3 cursor-pointer" onClick={() => setActiveView('Dashboard')}>
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: current.primaryColor }}>
            <TrendingUp size={24} className="text-black" strokeWidth={3} />
          </div>
          <h1 className="text-xl font-black tracking-widest italic font-lexend">VANTAGE</h1>
        </div>

        <nav className="flex-1 px-6 space-y-3">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active={activeView === 'Dashboard'} onClick={() => setActiveView('Dashboard')} color={current.primaryColor} />
          <NavItem icon={<PieChart size={20}/>} label="Analytics" active={activeView === 'Analytics'} onClick={() => setActiveView('Analytics')} color={current.primaryColor} />
          <NavItem icon={<Users size={20}/>} label="Audience" active={activeView === 'Audience'} onClick={() => setActiveView('Audience')} color={current.primaryColor} />
          <NavItem icon={<SettingsIcon size={20}/>} label="Settings" active={activeView === 'Settings'} onClick={() => setActiveView('Settings')} color={current.primaryColor} />
        </nav>

        <div className="p-10 border-t border-white/5">
          <button onClick={handleLogout} className="flex items-center gap-3 text-slate-500 hover:text-white transition-all text-[10px] font-black uppercase tracking-widest">
            <LogOut size={16} /> Log Out ({user})
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-12 z-10">
        <header className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-7xl font-black tracking-tighter leading-none italic uppercase font-lexend">{activeView}</h2>
            <p className="text-slate-500 text-sm">Active Node: <span style={{ color: current.primaryColor }}>{current.title}</span></p>
          </div>
          <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10">
            <button onClick={() => setPlatform('youtube')} className={`px-8 py-2.5 rounded-xl text-[10px] font-black transition-all ${platform === 'youtube' ? 'bg-[#14b8a6] text-black shadow-lg' : 'text-slate-500'}`}>YOUTUBE</button>
            <button onClick={() => setPlatform('instagram')} className={`px-8 py-2.5 rounded-xl text-[10px] font-black transition-all ${platform === 'instagram' ? 'bg-[#f97316] text-black shadow-lg' : 'text-slate-500'}`}>INSTAGRAM</button>
          </div>
        </header>
        {renderContent()}
      </main>

      <AnimatePresence>
        {selectedDetail && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedDetail(null)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-2xl bg-[#0a0c1a] border border-white/10 rounded-[40px] p-12">
              <button onClick={() => setSelectedDetail(null)} className="absolute top-8 right-8 text-slate-500 hover:text-white"><X size={24} /></button>
              <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-8">{selectedDetail.title}</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <GlassCard className="p-8">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Value</p>
                  <p className="text-5xl font-black" style={{ color: current.primaryColor }}>{selectedDetail.value || 'ACTIVE'}</p>
                </GlassCard>
                <GlassCard className="p-8">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Confidence</p>
                  <p className="text-5xl font-black text-teal-400">98%</p>
                </GlassCard>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">{selectedDetail.desc || selectedDetail.description}</p>
              <button onClick={() => setSelectedDetail(null)} className="w-full py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-orange-500 transition-colors">Close Node</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- HELPERS ---
function NavItem({ icon, label, active, onClick, color }: any) {
  return (
    <div onClick={onClick} className={`flex items-center gap-5 px-6 py-4 rounded-2xl cursor-pointer transition-all ${active ? 'bg-white/5 text-white border border-white/10 shadow-lg' : 'text-slate-600 hover:text-slate-300'}`}>
      <span style={{ color: active ? color : 'inherit' }}>{icon}</span>
      <span className="font-black text-[10px] uppercase tracking-[0.2em] font-lexend">{label}</span>
    </div>
  );
}

function GoalItem({ label, current, total, color, isM }: any) {
  const percent = (current / total) * 100;
  return (
    <div>
      <div className="flex justify-between text-[10px] font-black mb-3 uppercase tracking-widest">
        <span className="text-slate-500">{label}</span>
        <span className="text-white">{current}{isM ? 'M' : ''} / {total}{isM ? 'M' : ''}</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${percent}%` }} className="h-full" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}

function ActivityItem({ text, time, active, color }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-2 h-2 rounded-full mt-1 ${active ? 'animate-pulse' : 'bg-slate-800'}`} style={{ backgroundColor: active ? color : undefined }} />
      <div>
        <p className={`text-[11px] font-bold ${active ? 'text-white' : 'text-slate-500'}`}>{text}</p>
        <p className="text-[9px] text-slate-700 font-bold uppercase mt-1">{time}</p>
      </div>
    </div>
  );
}

function SettingsToggle({ icon, title, desc, active, color }: any) {
  const [enabled, setEnabled] = useState(active);
  return (
    <GlassCard className="p-6 flex items-center justify-between cursor-pointer" onClick={() => setEnabled(!enabled)}>
      <div className="flex items-center gap-6">
        <div className="p-3 rounded-xl bg-white/5" style={{ color: enabled ? color : '#475569' }}>{icon}</div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest">{title}</h4>
          <p className="text-[10px] text-slate-500 mt-1">{desc}</p>
        </div>
      </div>
      <div className={`w-12 h-6 rounded-full relative transition-all ${enabled ? '' : 'bg-white/10'}`} style={{ backgroundColor: enabled ? color : undefined }}>
        <motion.div animate={{ x: enabled ? 26 : 4 }} className="absolute top-1 w-4 h-4 bg-white rounded-full" />
      </div>
    </GlassCard>
  );
}