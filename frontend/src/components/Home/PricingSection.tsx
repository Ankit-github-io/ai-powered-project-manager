"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { PillBadge } from "../ui/pillbadge";
import { Card, CardTheme } from "../ui/Card";
import { useRouter } from "next/navigation";

interface PricingTier {
  name: string;
  tag: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
  theme: CardTheme;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    tag: "Forever",
    priceMonthly: 0,
    priceAnnual: 0,
    description: "Up to 3 projects, always free.",
    features: [
      "3 active projects",
      "5 team members",
      "Basic Kanban board",
      "Community support",
      "1 AI roadmap / month",
      "Stripe payment link",
    ],
    ctaText: "Get Started Free",
    ctaHref: "/signup",
    theme: "amber",
  },
  {
    name: "Pro",
    tag: "Most Popular",
    priceMonthly: 19,
    priceAnnual: 15,
    description: "Per workspace. Unlimited seats.",
    features: [
      "unlimted projects",
      "Unlimited team members",
      "Advanced Real-time Kanban & Filters",
      "Unlimited AI sprint roadmaps",
      "Priority email & Slack support",
      "Custom integrations & webhooks",
      "Analytics & velocity reports",
    ],
    popular: true,
    ctaText: "Start 14-Days Free Trial",
    ctaHref: "/signup?plan=pro",
    theme: "violet",
  },
  {
    name: "Team",
    tag: "Scale",
    priceMonthly: 49,
    priceAnnual: 39,
    description: "Enterprise-grade governance, custom security, and scale.",
    features: [
      "Everything in Pro Tier",
      "Custom AI model fine-tuning",
      "Advanced audit logs & SAML/SSO",
      "Dedicated account manager",
      "99.99% SLA Uptime Guarantee",
      "Custom Webhooks & API Access",
    ],
    ctaText: "Contact Sales",
    ctaHref: "/contact",
    theme: "emerald",
  },
];

export const PricingSection = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"section">
>(({ className, ...props }, ref) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const router= useRouter();

  return (
    <section
      ref={ref}
      id="pricing"
      className={cn(
        "relative py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3 block">
            Pricing & Plans
          </h2>
          <p className="text-4xl sm:text-5xl font-bold tracking-tight text-[#EDEDED] mb-3">
            Simple, honest pricing
          </p>
          <p className="text-[#525252]">
            Choose the ideal plan to scale your project execution. Upgrade or
            cancel anytime.
          </p>

          {/* Billing Toggle Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-[#111111] border border-[#1e1e1e] shadow-inner">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-3 py-2 text-sm rounded-full transition-all duration-300",
                !isAnnual
                  ? "bg-violet-600 text-[#ededed] shadow-sm"
                  : "text-neutral-400 hover:text-white",
              )}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-2",
                isAnnual
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-neutral-400 hover:text-white",
              )}
            >
              <span>Annual billing</span>
              <span
                className={cn(
                  "inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full border",
                  isAnnual
                    ? "bg-emerald-600/50 text-emerald-400 border-emerald-500/20"
                    : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
                )}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center">
          {pricingTiers.map((tier, index) => {
            const currentPrice = isAnnual
              ? tier.priceAnnual
              : tier.priceMonthly;

            return (
              <Card
                key={index}
                theme={tier.theme}
                isActive={index === 1}
                activeTheme={tier.theme}
                className="h-full rounded-2xl p-7 overflow-hidden relative flex flex-col justify-between"
              >
                <div className="flex justify-between items-center mb-6 relative">
                  <span className="text-sm font-semibold text-[#EDEDED]">
                    {tier.name}
                  </span>
                  <PillBadge
                    showDot={false}
                    variant={tier.popular ? "violet" : tier.name=="Free"?"amber":"emerald"}
                  >
                    {tier.tag}
                  </PillBadge>
                </div>
                {/* Price display */}
                <div className="relative mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#EDEDED]">
                      ${currentPrice}
                    </span>
                    <span className="text-[#717171] text-sm">
                      /
                      {isAnnual && tier.priceAnnual > 0
                        ? "Month  (Billed annually)"
                        : "Monthly"}
                    </span>
                  </div>
                  <p className="text-xs text-[#525252] mt-2">
                    {tier.description}
                  </p>
                </div>
                {/* Feature Checklist */}
                <ul className="space-y-3 mb-8 flex-1 relative">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#A3A3A3]"
                    >
                      <div
                        className={cn(
                          "w-4 h-4 flex items-center justify-center shrink-0",
                          tier.popular
                            ? "rounded-full bg-violet-600/25 border border-violet-500/40"
                            : "",
                        )}
                      >
                        <Check size={11} className={cn(tier.theme)} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    "w-full h-10 py-3 px-2 rounded-xl border border-[#262626] text-[#717171] text-sm font-medium transition-all active:scale-[0.97] duration-150 cursor-pointer",
                    tier.popular
                      ? "text-white bg-violet-600  hover:bg-violet-500 shadow-lg shadow-violet-600/30 transition-colors"
                      : "hover:border-[#3a3a3a] hover:text-[#ededed] hover:bg-[#141414]",
                  )}
                  onClick={()=>router.push("/sign-up")}
                >
                  {tier.ctaText}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="text-center text-xs text-[#2e2e2e] mt-18">
          All plans include Stripe secure checkout, automatic SSL certificates,
          and 99.9% uptime guarantees. Need a custom enterprise deployment?{" "}
          <a
            href="/contact"
            className="text-violet-400 underline hover:text-violet-300"
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
});

PricingSection.displayName = "PricingSection";
