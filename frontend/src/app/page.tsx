// frontend/src/app/page.tsx
import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { SocialMomentumSection } from "@/components/Home/SocialMomentumSection";
import { TestimonialSection } from "@/components/Home/TestimonialSection";
import { PricingSection } from "@/components/Home/PricingSection";
import { CTABanner } from "@/components/Home/CTABanner";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <SocialMomentumSection/>
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <CTABanner/>
    </main>
  );
}