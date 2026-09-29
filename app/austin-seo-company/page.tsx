import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Austin SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Austin, TX. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/austin-seo-company" },
};

export default function Page() {
  return <LocationPage city="Austin" state="TX" />;
}
