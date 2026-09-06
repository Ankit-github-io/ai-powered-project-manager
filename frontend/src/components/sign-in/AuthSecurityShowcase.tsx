import React from "react";
import { ShieldCheck, Cpu, Lock, Activity, Sparkles, CheckCircle2 } from "lucide-react";

export function AuthSecurityShowcase() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full min-h-screen p-12 bg-linear-to-br from-neutral-950 via-[#0a0a0a] to-emerald-950/20 overflow-hidden border-l border-neutral-900">
      
      {/* Background Glow Effect */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-md w-full space-y-6">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Enterprise-Grade Security</span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Secure, scalable, and built for modern teams.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Sprint AI safeguards your projects with end-to-end encryption, real-time activity monitoring, and automated threat detection.
          </p>
        </div>

        {/* Interactive Feature Cards Mockup */}
        <div className="space-y-3 pt-2">
          
          {/* Feature 1: Encryption */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-xl transition-all hover:border-emerald-500/40">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Lock className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-medium text-white flex items-center gap-2">
                <span>Zero-Knowledge Encryption</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-neutral-400">Your data remains private with client-side hashing.</p>
            </div>
          </div>

          {/* Feature 2: AI Protection */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-xl transition-all hover:border-emerald-500/40">
            <div className="h-10 w-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5 text-teal-400" />
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-medium text-white">Advanced Threat Defense</div>
              <p className="text-xs text-neutral-400">Automated bot blocking and suspicious login detection.</p>
            </div>
          </div>

          {/* Feature 3: Live System Status */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-xl transition-all hover:border-emerald-500/40">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Activity className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="flex-1 flex justify-between items-center">
              <div className="space-y-0.5">
                <div className="text-sm font-medium text-white">System Status</div>
                <p className="text-xs text-neutral-400">All clusters operational</p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-medium border border-emerald-500/20">
                <CheckCircle2 className="h-3 w-3" />
                <span>99.99%</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer tiny quote */}
        <div className="pt-2 flex items-center gap-3 text-xs text-neutral-500">
          <Cpu className="h-4 w-4 text-neutral-400 shrink-0" />
          <span>Powered by Sprint AI Security Infrastructure v2.4</span>
        </div>

      </div>
    </div>
  );
}