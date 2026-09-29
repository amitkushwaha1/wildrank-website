import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Columbus SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Columbus, OH. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/columbus-seo-company" },
};

export default function Page() {
  return <LocationPage city="Columbus" state="OH" />;
}
