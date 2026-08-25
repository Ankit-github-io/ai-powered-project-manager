import { LayoutDashboard } from "lucide-react";

export function KanbanCard() {
  return (
    <div className="h-full bg-[#111111] border border-[#1e1e1e] rounded-2xl p-7 group hover:border-violet-500/30 transition-all duration-300 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* {Chilldre} */}
      <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mb-5">
        <LayoutDashboard size={17} className="text-violet-400" />
      </div>
      <h3 className="text-lg font-semibold text-[#EDEDED] mb-2">
        Real-Time Kanban
      </h3>
      <p className="text-sm text-[#525252] leading-relaxed mb-7 max-w-sm">
        Drag, drop, and reassign tasks instantly. Changes propagate to every
        teammate.
      </p>
      <div className="flex gap-2">
        {["Backlog", "In Progress", "Review", "Done"].map((col, ci) => (
          <div
            key={col}
            className={`flex-1 rounded-lg border p-2 ${ci === 1 ? "border-violet-500/30 bg-violet-600/8" : "border-[#1e1e1e] bg-[#0d0d0d]"}`}
          >
            <div className="text-[9px] text-[#4e4e4e] font-semibold uppercase tracking-widest mb-2">
              {col}
            </div>
            {Array.from({
              length: ci === 1 ? 3 : ci === 0 ? 2 : ci === 2 ? 2 : 1,
            }).map((_, i) => (
              <div
                key={i}
                className={`h-7 rounded-md mb-1 border ${ci === 1 && i === 0 ? "border-violet-500/30 bg-violet-600/10" : "border-[#1a1a1a] bg-[#141414]"}`}
              />
            ))}
          </div>
        ))}
      </div>
      {/* end */}
    </div>
  );
}
