import PricingHero from "@/components/pricing/PricingHero";
import WebPricingTable from "@/components/pricing/WebPricingTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Pricing | Wildrank Technologies",
  description: "Web development pricing for landing pages, business websites, e-commerce stores, and custom web applications.",
};

export default function WebPricingPage() {
  return (
    <>
      <PricingHero
        badge="Web Dev Pricing"
        title="Web Development Plans"
        highlight="Built to Convert"
        description="From landing pages to full e-commerce platforms — transparent project-based and retainer pricing."
        color="cyan"
      />
      <WebPricingTable />
      <PricingFAQ service="Web Development" />
      <CTA />
    </>
  );
}
