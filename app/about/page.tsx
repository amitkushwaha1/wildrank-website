import AboutHero from "@/components/company/about/AboutHero";
import AboutStory from "@/components/company/about/AboutStory";
import AboutValues from "@/components/company/about/AboutValues";
import AboutStats from "@/components/company/about/AboutStats";
import IndustriesSection from "@/components/shared/IndustriesSection";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Wildrank Technologies | Digital Marketing Agency",
  description: "500+ clients served company-wide. Learn about Wildrank Technologies — our story, mission, and the team behind your growth.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <IndustriesSection />
      <CTA />
    </>
  );
}
