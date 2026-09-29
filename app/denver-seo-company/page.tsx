import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denver SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Denver, CO. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/denver-seo-company" },
};

export default function Page() {
  return <LocationPage city="Denver" state="CO" />;
}
