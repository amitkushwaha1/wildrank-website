import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indianapolis SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Indianapolis, IN. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/indianapolis-seo-company" },
};

export default function Page() {
  return <LocationPage city="Indianapolis" state="IN" />;
}
