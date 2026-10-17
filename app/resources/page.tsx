import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesGrid from "@/components/resources/ResourcesGrid";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/resources" },
  title: "Free Marketing Resources, Templates & Checklists | WildRank",
  description: "Free marketing resources: SEO checklists, templates, audit spreadsheets and website launch guides you can put to work on your own site today.",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesGrid />
      <CTA />
    </>
  );
}
