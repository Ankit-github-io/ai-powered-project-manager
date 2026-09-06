import { CheckCircle2, Sparkles } from "lucide-react";

export function RoadmapCard () {
  return (
    <div className="md:col-span-5 bg-[#111111] border border-[#1e1e1e] rounded-2xl p-7 group hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center mb-5">
        <Sparkles size={17} className="text-cyan-400" />
      </div>
      <h3 className="text-lg font-semibold text-[#EDEDED] mb-2">
        AI Roadmap Engine
      </h3>
      <p className="text-sm text-[#525252] leading-relaxed mb-6">
        Describe your goal in plain English. Sprint AI generates a full sprint
        roadmap with tasks, milestones, and deadlines.
      </p>
      <div className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-xl p-4 space-y-2.5">
        <div className="text-[10px] font-semibold text-cyan-400 mb-3 flex items-center gap-1.5">
          <Sparkles size={9} /> Generated 3-Sprint Plan
        </div>
        {[
          "Sprint 1 — Auth & Setup",
          "Sprint 2 — Core UI & API",
          "Sprint 3 — QA & Launch",
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <CheckCircle2
              size={12}
              className={i < 1 ? "text-emerald-400" : "text-[#2a2a2a]"}
            />
            <div
              className={
                i < 1 ? "text-[#A3A3A3] line-through" : "text-[#717171]"
              }
            >
              {s}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
