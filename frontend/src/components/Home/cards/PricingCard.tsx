import { CreditCard } from "lucide-react";

export function PricingCard() {
  return (
    <div className="md:col-span-5 bg-[#111111] border border-[#1e1e1e] rounded-2xl p-7 group hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center mb-5">
        <CreditCard size={17} className="text-amber-400" />
      </div>
      <h3 className="text-lg font-semibold text-[#EDEDED] mb-2">
        Stripe Subscriptions
      </h3>
      <p className="text-sm text-[#525252] leading-relaxed mb-6">
        Upgrade, downgrade, or cancel anytime. Per-seat billing with instant
        provisioning and Stripe&apos;s secure checkout.
      </p>
      <div className="flex gap-2">
        {[
          { t: "Free", p: "$0", active: false },
          { t: "Pro", p: "$19", active: true },
          { t: "Team", p: "$49", active: false },
        ].map((tier) => (
          <div
            key={tier.t}
            className={`flex-1 rounded-lg border p-3 text-center ${tier.active ? "border-violet-500/40 bg-violet-600/10" : "border-[#1e1e1e]"}`}
          >
            <div
              className={`text-[12px] font-semibold mb-1 ${tier.active ? "text-violet-400" : "text-[#4e4e4e]"}`}
            >
              {tier.t}
            </div>
            <div className="text-sm font-bold text-[#EDEDED]">{tier.p}</div>
            <div className="text-[11px] text-[#4e4e4e] mt-0.5">/month</div>
          </div>
        ))}
      </div>
    </div>
  );
}
