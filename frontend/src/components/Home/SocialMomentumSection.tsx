"use client";

import { motion } from "framer-motion";
import { PillBadge } from "../ui/pillbadge";


export function SocialMomentumSection() {
  return (
    <section className="py-15 border-b border-[#1a1a1a] bg-[#050505]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-6 text-center"
      >
        <PillBadge showDot={true} dotColor="emerald" className="mb-6">
          12,000+ teams active in Public Beta
        </PillBadge>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Ready to ship faster?
        </h2>
        
        <p className="text-[#525252] text-sm leading-relaxed">
          Sprint AI gives you the clarity to build better products without the overhead. 
          Stop managing the process, and start shipping the work.
        </p>
      </motion.div>
    </section>
  );
}