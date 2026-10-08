import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indianapolis SEO Company - Wildrank Technologies",
  description: "Indianapolis SEO company delivering local SEO, on-page optimization and content for B2B, healthcare and local businesses. Get your free audit.",
  alternates: { canonical: "/indianapolis-seo-company" },
};

export default function Page() {
  return <LocationPage city="Indianapolis" state="IN" />;
}
