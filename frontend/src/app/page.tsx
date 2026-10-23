"use client";

import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { SocialMomentumSection } from "@/components/Home/SocialMomentumSection";
import { TestimonialSection } from "@/components/Home/TestimonialSection";
import { PricingSection } from "@/components/Home/PricingSection";
import { CTABanner } from "@/components/Home/CTABanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function LandingPage() {
  const{data:session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status==="authenticated") {
      router.replace("/dashboard");
    }
  
  }, [status,router]);

  if (status==="loading"||status==="authenticated") {
    return (<>
    <div></div>
    </>)
  }
  
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <HeroSection />
      <SocialMomentumSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
