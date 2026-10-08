import LocationPage from "@/components/locations/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Houston SEO Company - Wildrank Technologies",
  description: "Grow qualified leads in Houston with data-driven SEO for energy, healthcare and B2B companies. Wildrank offers a free, no-obligation audit.",
  alternates: { canonical: "/houston-seo-company" },
};

export default function Page() {
  return <LocationPage city="Houston" state="TX" />;
}
