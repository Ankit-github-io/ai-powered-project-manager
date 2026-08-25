"use client";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/testimonial";
import { TestimonialCard } from "./cards/TestimonialCard";

export function TestimonialSection() {

  return (
    <section className="py-18 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#525252] text-center">
          TRUSTED BY TEAMS AT
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Left Blur/Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-[#050505] to-transparent" />

        {/* Right Blur/Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-[#050505] to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex gap-6 pr-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="min-w-75">
              <TestimonialCard {...t} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
