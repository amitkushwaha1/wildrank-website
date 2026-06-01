import SMMHero from "@/components/solutions/smm/SMMHero";
import SMMServices from "@/components/solutions/smm/SMMServices";
import SMMPlatforms from "@/components/solutions/smm/SMMPlatforms";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing | Wildrank Technologies",
  description: "Strategic social media management and paid campaigns that build brand awareness and drive real engagement.",
};

export default function SMMPage() {
  return (
    <>
      <SMMHero />
      <SMMServices />
      <SMMPlatforms />
      <CTA />
    </>
  );
}
