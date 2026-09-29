import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philadelphia SEO Company | Wildrank Technologies",
  description: "Top-rated SEO company in Philadelphia, PA. Drive local traffic, dominate Google rankings, and grow your business with proven SEO strategies.",
  alternates: { canonical: "/philadelphia-seo-company" },
};

export default function Page() {
  return <LocationPage city="Philadelphia" state="PA" />;
}
