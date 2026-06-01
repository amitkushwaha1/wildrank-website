import PricingHero from "@/components/pricing/PricingHero";
import PPCPricingTable from "@/components/pricing/PPCPricingTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Advertising Pricing | Wildrank Technologies",
  description: "Transparent PPC management pricing. Google Ads, Bing Ads, and social PPC campaigns with full conversion tracking.",
};

export default function PPCPricingPage() {
  return (
    <>
      <PricingHero
        badge="PPC Pricing"
        title="PPC Plans Built for"
        highlight="Maximum ROI"
        description="Data-driven PPC management across Google, Bing, and social platforms. Transparent pricing, no hidden fees."
        color="orange"
      />
      <PPCPricingTable />
      <PricingFAQ service="PPC" />
      <CTA />
    </>
  );
}
