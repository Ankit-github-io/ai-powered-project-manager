import { Icons } from "@/svg/icons";
import { Button } from "../ui/button";

export function CTABanner() {
  return (
    <section className="py-20 bg-[#050505] px-6">
      <div className="max-w-3xl mx-auto bg-linear-to-br from-violet-900/40 to-cyan-900/20 border border-violet-500/20 rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-violet-600/10 via-transparent to-transparent pointer-events-none" />
        <h2 className="text-3xl font-bold text-[#EDEDED] mb-4 relative">
          Start shipping faster today
        </h2>
        <p className="text-[#717171] mb-8 relative">
          Join 12,000+ teams already using Nexus.
        </p>
        <Button
          className="h-12 relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white text-[#0A0A0A] font-semibold text-sm hover:bg-gray-100 transition-all shadow-2xl"
        >
          <Icons.google  />
          Continue with Google — it&apos;s free
        </Button>
      </div>
    </section>
  );
}
