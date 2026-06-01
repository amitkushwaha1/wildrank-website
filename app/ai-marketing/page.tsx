import AIHero from "@/components/ai-marketing/AIHero";
import AICapabilities from "@/components/ai-marketing/AICapabilities";
import AIProcess from "@/components/ai-marketing/AIProcess";
import AIResults from "@/components/ai-marketing/AIResults";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing Agency | Wildrank Technologies",
  description: "AI-powered digital marketing that outperforms traditional agencies. Smarter targeting, faster results, lower costs.",
};

export default function AIMarketingPage() {
  return (
    <>
      <AIHero />
      <AICapabilities />
      <AIProcess />
      <AIResults />
      <CTA />
    </>
  );
}
