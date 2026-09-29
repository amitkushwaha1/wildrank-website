import TeamHero from "@/components/company/team/TeamHero";
import TeamGrid from "@/components/company/team/TeamGrid";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Wildrank Technologies",
  description: "Meet the 350+ experts behind Wildrank Technologies — strategists, developers, designers, and marketers.",
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
