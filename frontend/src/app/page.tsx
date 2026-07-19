import Image from 'next/image';
import Link from 'next/link';
import { FaGoogle, FaArrowRight, FaBolt, FaHandSparkles, FaCreditCard, FaChartLine } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0D0D0D]/80 border-b border-[#27272A]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7C3AED] to-[#9333EA] flex items-center justify-center text-white">
                <HiSparkles className="w-5 h-5" />
              </span>
              <span>Nexus</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <Link href="#" className="hover:text-white transition-colors">Changelog</Link>
              <Link href="#" className="hover:text-white transition-colors">Docs</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/login" className="text-zinc-400 hover:text-white transition-colors font-medium">
              Sign in
            </Link>
            <Link
              href="/login"
              className="bg-gradient-to-r from-[#7C3AED] to-[#9333EA] hover:opacity-90 px-4 py-2 rounded-lg font-medium transition-all shadow-lg shadow-purple-900/30"
            >
              Get started free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161618] border border-[#27272A] text-xs font-medium text-purple-400 mb-8">
          <HiSparkles className="w-4 h-4 text-purple-400" />
          <span>Powered by GPT-4o · Now in public beta</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          Manage Projects <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">10x Faster</span> with AI
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Real-time Kanban, AI-generated sprint roadmaps, and seamless team collaboration — so you ship faster without the chaos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            href="/login"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black hover:bg-zinc-200 font-semibold px-6 py-3.5 rounded-xl transition-all"
          >
            <FaGoogle className="w-4 h-4" />
            Continue with Google
          </Link>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#161618] hover:bg-[#202023] text-white border border-[#27272A] font-semibold px-6 py-3.5 rounded-xl transition-all"
          >
            Open dashboard
            <FaArrowRight className="w-4 h-4 text-zinc-400" />
          </Link>
        </div>

        <p className="text-xs text-zinc-500">Free forever · No credit card required · 2-minute setup</p>

        {/* Live Interactive Preview / Kanban Mockup */}
        <div className="mt-16 rounded-xl border border-[#27272A] bg-[#161618] p-4 md:p-6 shadow-2xl text-left">
          <div className="flex items-center justify-between border-b border-[#27272A] pb-4 mb-6 text-xs text-zinc-400 font-mono">
            <span>app.nexus.so/project/design-system</span>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Column 1: To Do */}
            <div className="bg-[#0D0D0D] p-3 rounded-lg border border-[#27272A]">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-3">
                <span>To Do</span>
                <span className="bg-[#27272A] px-2 py-0.5 rounded-full text-zinc-300">3</span>
              </div>
              <div className="space-y-2">
                <div className="bg-[#161618] p-3 rounded-lg border border-[#27272A]">
                  <p className="text-sm font-medium mb-2">Design token audit</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded font-mono">HIGH</span>
                    <span className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center text-[10px] font-bold">AS</span>
                  </div>
                </div>
                <div className="bg-[#161618] p-3 rounded-lg border border-[#27272A]">
                  <p className="text-sm font-medium mb-2">Set up Storybook</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded font-mono">MEDIUM</span>
                    <span className="w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-[10px] font-bold">JK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: In Progress */}
            <div className="bg-[#0D0D0D] p-3 rounded-lg border border-[#27272A]">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-3">
                <span>In Progress</span>
                <span className="bg-[#27272A] px-2 py-0.5 rounded-full text-zinc-300">4</span>
              </div>
              <div className="space-y-2">
                <div className="bg-[#161618] p-3 rounded-lg border border-[#27272A]">
                  <p className="text-sm font-medium mb-2">Component library v2</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded font-mono">HIGH</span>
                    <span className="w-6 h-6 rounded-full bg-emerald-900 flex items-center justify-center text-[10px] font-bold">MR</span>
                  </div>
                </div>
                <div className="bg-[#161618] p-3 rounded-lg border border-[#27272A]">
                  <p className="text-sm font-medium mb-2">Dark mode tokens</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded font-mono">MEDIUM</span>
                    <span className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center text-[10px] font-bold">AS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Under Review */}
            <div className="bg-[#0D0D0D] p-3 rounded-lg border border-[#27272A]">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-3">
                <span>Under Review</span>
                <span className="bg-[#27272A] px-2 py-0.5 rounded-full text-zinc-300">2</span>
              </div>
              <div className="space-y-2">
                <div className="bg-[#161618] p-3 rounded-lg border border-[#27272A]">
                  <p className="text-sm font-medium mb-2">Icon set export</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded font-mono">MEDIUM</span>
                    <span className="w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-[10px] font-bold">JK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Complete */}
            <div className="bg-[#0D0D0D] p-3 rounded-lg border border-[#27272A]">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-3">
                <span>Complete</span>
                <span className="bg-[#27272A] px-2 py-0.5 rounded-full text-zinc-300">5</span>
              </div>
              <div className="space-y-2">
                <div className="bg-[#161618] p-3 rounded-lg border border-[#27272A]">
                  <p className="text-sm font-medium mb-2">Grid system</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono">LOW</span>
                    <span className="w-6 h-6 rounded-full bg-emerald-900 flex items-center justify-center text-[10px] font-bold">MR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-[#27272A] bg-[#0D0D0D]/50 text-center">
        <p className="text-xs font-semibold text-zinc-500 tracking-wider uppercase mb-6">Trusted by teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 text-lg font-semibold text-zinc-400">
          <span>Linear</span>
          <span>Vercel</span>
          <span>Stripe</span>
          <span>Figma</span>
          <span>Notion</span>
          <span>Loom</span>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-purple-400 tracking-wider uppercase mb-2">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold">Everything your team needs</h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Built for speed, designed for clarity. No feature bloat — just the tools that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#161618] p-8 rounded-xl border border-[#27272A] hover:border-purple-500/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
              <FaBolt className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-Time Kanban</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Drag, drop, and reassign tasks instantly. Changes propagate to every teammate the moment they happen — zero refresh needed.
            </p>
          </div>

          <div className="bg-[#161618] p-8 rounded-xl border border-[#27272A] hover:border-purple-500/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
              <FaHandSparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Roadmap Engine</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Describe your goal in plain English. Nexus generates a full sprint roadmap with tasks, milestones, and deadlines.
            </p>
          </div>

          <div className="bg-[#161618] p-8 rounded-xl border border-[#27272A] hover:border-purple-500/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
              <FaCreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Stripe Subscriptions</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Upgrade, downgrade, or cancel anytime. Per-seat billing with instant provisioning and Stripe's secure checkout.
            </p>
          </div>

          <div className="bg-[#161618] p-8 rounded-xl border border-[#27272A] hover:border-purple-500/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
              <FaChartLine className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Velocity Analytics</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Track sprint velocity, burndown charts, and team throughput with live visualizations.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#27272A]">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-purple-400 tracking-wider uppercase mb-2">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold">Simple, honest pricing</h2>
          <p className="text-zinc-400 mt-4">Start free. No credit card needed. Upgrade when your team grows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-[#161618] p-8 rounded-xl border border-[#27272A] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Free</h3>
                <span className="text-zinc-400 text-sm">Forever</span>
              </div>
              <div className="text-4xl font-extrabold mb-2">$0 <span className="text-base text-zinc-400 font-normal">/ month</span></div>
              <p className="text-sm text-zinc-400 mb-6">Up to 3 projects, always free.</p>
              <ul className="space-y-3 text-sm text-zinc-300 mb-8">
                <li>✓ 3 active projects</li>
                <li>✓ 5 team members</li>
                <li>✓ Basic Kanban board</li>
                <li>✓ Community support</li>
                <li>✓ 1 AI roadmap / month</li>
              </ul>
            </div>
            <Link
              href="/login"
              className="block text-center bg-[#27272A] hover:bg-zinc-700 text-white font-medium py-3 rounded-lg transition-all"
            >
              Get started free
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="bg-[#161618] p-8 rounded-xl border-2 border-purple-600 relative flex flex-col justify-between shadow-2xl shadow-purple-900/20">
            <span className="absolute -top-3 right-6 bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              MOST POPULAR
            </span>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Pro</h3>
              </div>
              <div className="text-4xl font-extrabold mb-2">$19 <span className="text-base text-zinc-400 font-normal">/ month</span></div>
              <p className="text-sm text-zinc-400 mb-6">Per workspace. Unlimited seats.</p>
              <ul className="space-y-3 text-sm text-zinc-300 mb-8">
                <li>✓ Unlimited projects</li>
                <li>✓ Unlimited team members</li>
                <li>✓ Advanced Kanban + timeline view</li>
                <li>✓ Unlimited AI roadmaps</li>
                <li>✓ Priority email & Slack support</li>
                <li>✓ Custom integrations & webhooks</li>
              </ul>
            </div>
            <Link
              href="/login"
              className="block text-center bg-gradient-to-r from-[#7C3AED] to-[#9333EA] hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Start 14-day free trial
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 px-6 text-center border-t border-[#27272A]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start shipping faster today</h2>
        <p className="text-zinc-400 mb-8">Join 12,000+ teams already using Nexus.</p>
        <Link
          href="/login"
          className="inline-flex items-center gap-3 bg-white text-black hover:bg-zinc-200 font-semibold px-8 py-4 rounded-xl transition-all"
        >
          <FaGoogle className="w-5 h-5" />
          Continue with Google — it's free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#27272A] py-8 px-6 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold text-white text-sm">
            <span>Nexus</span>
          </div>
          <p>© 2026 Nexus Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-300">Privacy</a>
            <a href="#" className="hover:text-zinc-300">Terms</a>
            <a href="#" className="hover:text-zinc-300">Status</a>
            <a href="#" className="hover:text-zinc-300">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}