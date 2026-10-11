import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Antonio SEO Company - Wildrank Technologies",
  description: "Wildrank is a San Antonio SEO company helping healthcare and local service brands improve rankings, traffic and leads. Start with a free audit.",
  alternates: { canonical: "/san-antonio-seo-company" },
};

export default function Page() {
  return <LocationPage city="San Antonio" state="TX" />;
}
