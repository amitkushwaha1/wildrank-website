import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chicago SEO Company - Wildrank Technologies",
  description: "Chicago SEO company offering technical SEO, local SEO and link building for B2B, service and ecommerce brands. Book a free strategy session.",
  alternates: { canonical: "/chicago-seo-company" },
};

export default function Page() {
  return <LocationPage city="Chicago" state="IL" />;
}
