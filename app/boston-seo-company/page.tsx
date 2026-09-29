import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boston SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Boston, MA. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/boston-seo-company" },
};

export default function Page() {
  return <LocationPage city="Boston" state="MA" />;
}
