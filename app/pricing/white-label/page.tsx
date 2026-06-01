import PricingHero from "@/components/pricing/PricingHero";
import WLPricingTable from "@/components/pricing/WLPricingTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label Services Pricing | Wildrank Technologies",
  description: "White label digital marketing pricing for agencies. SEO, PPC, social media, and web dev under your brand.",
};

export default function WLPricingPage() {
  return (
    <>
      <PricingHero
        badge="White Label Pricing"
        title="White Label Plans for"
        highlight="Agency Growth"
        description="Scale your agency without the overhead. Wholesale pricing on every digital marketing service — delivered under your brand."
        color="purple"
      />
      <WLPricingTable />
      <PricingFAQ service="White Label" />
      <CTA />
    </>
  );
}
