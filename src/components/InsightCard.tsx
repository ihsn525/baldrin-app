import { GlassCard } from "./GlassCard";
import { Lightbulb, ArrowRight } from "lucide-react";

interface InsightCardProps {
  title: string;
  description: string;
  category?: "tip" | "warning" | "trend";
  onViewDetails?: () => void;
}

export function InsightCard({ title, description, category = "tip", onViewDetails }: InsightCardProps) {
  const accentColor = category === "trend" ? "text-teal-400" : category === "warning" ? "text-orange-400" : "text-orange-400";

  return (
    <GlassCard 
      onClick={onViewDetails}
      className="flex flex-col justify-between hover:border-white/20 transition-all cursor-pointer group active:scale-[0.98]"
    >
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg bg-white/5 ${accentColor}`}>
          <Lightbulb size={20} />
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1">{title}</h4>
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{description}</p>
        </div>
      </div>
      
      <div className="flex justify-end mt-4">
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevents double trigger if clicking button
            onViewDetails?.();
          }}
          className="text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity"
        >
          View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </GlassCard>
  );
}