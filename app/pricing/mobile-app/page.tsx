import PricingHero from "@/components/pricing/PricingHero";
import MobilePricingTable from "@/components/pricing/MobilePricingTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Pricing | Wildrank Technologies",
  description: "Mobile app development pricing for iOS, Android, and cross-platform apps. React Native and Flutter specialists.",
};

export default function MobilePricingPage() {
  return (
    <>
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
