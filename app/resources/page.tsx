import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesGrid from "@/components/resources/ResourcesGrid";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Wildrank Technologies",
  description: "Free guides, templates, checklists, and tools to help you grow your digital presence.",
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
