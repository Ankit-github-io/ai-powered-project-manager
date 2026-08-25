import { BarChart3 } from "lucide-react";

export function AnalyticsCard() {
  return (
    <div className="md:col-span-7 bg-[#111111] border border-[#1e1e1e] rounded-2xl p-7 group hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center mb-5">
            <BarChart3 size={17} className="text-emerald-400" />
          </div>
          <h3 className="text-lg font-semibold text-[#EDEDED] mb-2">
            Velocity Analytics
          </h3>
          <p className="text-sm text-[#525252] leading-relaxed max-w-xs">
            Track sprint velocity, burndown charts, and team throughput with
            live visualizations.
          </p>
        </div>
      </div>
      <div className="flex items-end gap-1.5 h-20 mt-2">
        {[35, 52, 41, 68, 59, 78, 65, 83, 72, 91, 80, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm relative overflow-hidden group/bar"
          >
            <div
              className="absolute bottom-0 left-0 right-0 rounded-t-sm transition-all duration-700"
              style={{
                height: `${h}%`,
                background: `linear-gradient(to top, #059669${Math.round(
                  h * 2.55,
                )
                  .toString(16)
                  .padStart(2, "0")}, #10b98160)`,
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        {["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
          <span
            key={m}
            className="text-[11px] text-[#4e4e4e] flex-1 text-center"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
