import CareersHero from "@/components/company/careers/CareersHero";
import CareersOpenings from "@/components/company/careers/CareersOpenings";
import CareersPerks from "@/components/company/careers/CareersPerks";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Wildrank Technologies",
  description: "Join the Wildrank team. Explore open positions and build your career at a fast-growing digital marketing company.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersPerks />
      <CareersOpenings />
      <CTA />
    </>
  );
}
