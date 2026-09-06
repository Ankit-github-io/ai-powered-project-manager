import { Button } from "@/components/ui/button";
import { Icons } from "@/svg/icons";
import { ArrowRight } from "lucide-react";
import { GridTexture } from "../ui/background/gridtexture";
import { RadialGlow } from "../ui/background/radialGlow";
import { PillBadge } from "../ui/pillbadge";
import { FloatingUIPreview } from "../ui/FloatingUiPreview";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
      <GridTexture />
      <RadialGlow />
      <div className="relative max-w-5xl mx-auto text-center">
        <PillBadge variant="violet" dotColor="violet" className="mb-10 px-4 py-1">
          <span className="text-[12px]">Powered by GPT-4o · Now in public beta</span>
          <ArrowRight size={12} />
        </PillBadge>

        <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold text-[#EDEDED] leading-[1.05] tracking-[-0.03em] mb-6">
          Manage Projects{" "}
          <span className="relative">
            <span className="bg-linear-to-r from-violet-400 via-fuchisa-400 to-cyan-400 bg-clip-text text-transparent">
              10x Faster
            </span>
          </span>
          <br />
          <span className="text-[#777]">With AI</span>
        </h1>

        <p className="text-[17px] text-[#717171] max-w-xl mx-auto mb-10 leading-relaxed">
          Real-time Kanban, AI-generated sprint roadmaps, and seamless team
          collaboration — so you ship faster without the chaos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
          <Button
            className="h-12 px-6 py-3 gap-4 rounded-xl"
            variant="secondary"
          >
            <Icons.google />
            Continue with Google
          </Button>
          <Button className="h-12 gap-4 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-500 transition-all shadow-xl shadow-violet-600/30">
            Open dashboard
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Button>
        </div>
        <p className="text-xs text-[#3a3a3a] mt-8">
          Free forever · No credit card required · 2-minute setup
        </p>
      </div>
      <FloatingUIPreview />
    </section>
  );
}
