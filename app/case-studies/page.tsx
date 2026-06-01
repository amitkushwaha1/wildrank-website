import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Wildrank Technologies",
  description: "Real results from real clients. Explore our case studies and see how we drive measurable growth.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CTA />
    </>
  );
}
