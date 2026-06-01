import WLHero from "@/components/solutions/whitelabel/WLHero";
import WLServices from "@/components/solutions/whitelabel/WLServices";
import WLBenefits from "@/components/solutions/whitelabel/WLBenefits";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label Services | Wildrank Technologies",
  description: "Fully managed white-label digital marketing for agencies. Scale without overhead, deliver under your brand.",
};

export default function WhiteLabelPage() {
  return (
    <>
      <WLHero />
      <WLServices />
      <WLBenefits />
      <CTA />
    </>
  );
}
