import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chicago SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Chicago, IL. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/chicago-seo-company" },
};

export default function Page() {
  return <LocationPage city="Chicago" state="IL" />;
}
