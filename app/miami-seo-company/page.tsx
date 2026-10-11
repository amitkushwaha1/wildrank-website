import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miami SEO Company - Wildrank Technologies",
  description: "Miami SEO company helping real estate, travel and ecommerce brands get found on Google, Gemini and ChatGPT. Book your free strategy call today.",
  alternates: { canonical: "/miami-seo-company" },
};

export default function Page() {
  return <LocationPage city="Miami" state="FL" />;
}
