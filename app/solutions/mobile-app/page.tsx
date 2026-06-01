import MobileHero from "@/components/solutions/mobile/MobileHero";
import MobileServices from "@/components/solutions/mobile/MobileServices";
import MobileTech from "@/components/solutions/mobile/MobileTech";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development | Wildrank Technologies",
  description: "Native and cross-platform iOS & Android apps that deliver seamless user experiences.",
};

export default function MobileAppPage() {
  return (
    <>
      <MobileHero />
      <MobileServices />
      <MobileTech />
      <CTA />
    </>
  );
}
