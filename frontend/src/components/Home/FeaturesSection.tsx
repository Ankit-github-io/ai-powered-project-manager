"use client";

import { FeatureGrid } from "./FeatureGrid";

export function FeaturesSection() {
  return (
    // bento feature grid
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3 block">Features</span>
            <h2 className="text-4xl font-bold text-[#EDEDED] tracking-tight mb-3">Everything your team needs</h2>
            <p className="text-[#525252] max-w-md mx-auto">Built for speed, designed for clarity. No feature bloat — just the tools that matter.</p>
        </div>
        <FeatureGrid/>
      </div>
    </section>
  );
}