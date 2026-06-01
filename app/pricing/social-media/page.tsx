import PricingHero from "@/components/pricing/PricingHero";
import SMMPricingTable from "@/components/pricing/SMMPricingTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Pricing | Wildrank Technologies",
  description: "Social media management pricing plans. Content creation, community management, and paid social campaigns.",
};

export default function SMMPricingPage() {
  return (
    <>
      <PricingHero
        badge="Social Media Pricing"
        title="Social Plans That"
        highlight="Build Your Brand"
        description="Full-service social media management — content, community, and paid campaigns — at transparent monthly rates."
        color="pink"
      />
      <SMMPricingTable />
      <PricingFAQ service="Social Media" />
      <CTA />
    </>
  );
}
