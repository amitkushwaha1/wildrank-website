import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Houston SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Houston, TX. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/houston-seo-company" },
};

export default function Page() {
  return <LocationPage city="Houston" state="TX" />;
}
