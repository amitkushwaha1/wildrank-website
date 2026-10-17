import TeamHero from "@/components/company/team/TeamHero";
import TeamGrid from "@/components/company/team/TeamGrid";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | The People Behind Wildrank Technologies",
  description: "Meet the strategists, developers, designers and marketers behind Wildrank Technologies — 500+ clients served across SEO, PPC and web development.",
  alternates: { canonical: "/our-team" },
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
      <CTA />
    </>
  );
}
