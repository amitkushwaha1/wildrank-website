import PricingHero from "@/components/pricing/PricingHero";
import MobilePricingTable from "@/components/pricing/MobilePricingTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTA from "@/components/home/CTA";
import { pricingServiceSchema } from "@/lib/pricingSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Pricing | Wildrank Technologies",
  description: "Mobile app development pricing for iOS, Android and cross-platform builds. React Native and Flutter specialists with fixed, upfront project quotes.",
  alternates: { canonical: "/mobile-app-pricing" },
};

const schema = pricingServiceSchema({
  path: "/mobile-app-pricing",
  name: "Mobile App Development",
  serviceType: "Mobile Application Development",
  lowPrice: 4999,
  highPrice: 19999,
  offerCount: 3,
});

export default function MobilePricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PricingHero
        badge="Mobile App Pricing"
        title="App Development Plans"
        highlight="Users Love"
        description="Native iOS, Android, and cross-platform app development with transparent milestone-based pricing."
        color="green"
      />
      <MobilePricingTable />
      <PricingFAQ service="Mobile App" />
      <CTA />
    </>
  );
}
