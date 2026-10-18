import PricingHero from "@/components/pricing/PricingHero";
import WebPricingTable from "@/components/pricing/WebPricingTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTA from "@/components/home/CTA";
import { pricingServiceSchema } from "@/lib/pricingSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Pricing | Wildrank Technologies",
  description: "Web development pricing for landing pages, business websites, e-commerce stores and custom web apps. Transparent packages with no hidden fees.",
  alternates: { canonical: "/web-development-pricing" },
};

const schema = pricingServiceSchema({
  path: "/web-development-pricing",
  name: "Web Development",
  serviceType: "Web Design and Development",
  lowPrice: 799,
  highPrice: 9999,
  offerCount: 4,
});

export default function WebPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
