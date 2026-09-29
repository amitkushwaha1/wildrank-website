import AboutHero from "@/components/company/about/AboutHero";
import AboutStory from "@/components/company/about/AboutStory";
import AboutValues from "@/components/company/about/AboutValues";
import AboutStats from "@/components/company/about/AboutStats";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Wildrank Technologies",
  description: "17+ years of digital excellence. Learn about Wildrank Technologies — our story, mission, and the team behind your growth.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <CTA />
    </>
  );
}
