import AIHero from "@/components/ai-marketing/AIHero";
import AICapabilities from "@/components/ai-marketing/AICapabilities";
import AIProcess from "@/components/ai-marketing/AIProcess";
import AIResults from "@/components/ai-marketing/AIResults";
import IndustriesSection from "@/components/shared/IndustriesSection";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/ai-marketing" },
  title: "AI Marketing Agency | Wildrank Technologies",
  description: "AI-powered digital marketing: smarter targeting, faster creative testing and lower acquisition costs — with human strategy behind every campaign.",
};

export default function AIMarketingPage() {
  return (
    <>
      <AIHero />
      <AICapabilities />
      <AIProcess />
      <AIResults />
      <IndustriesSection />
      <CTA />
    </>
  );
}
