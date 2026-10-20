import type { Metadata } from "next";
import RelatedReading from "@/components/shared/RelatedReading";
import DigitalMarketingServicesClient from "./client";
import ServiceSchema from "@/components/shared/ServiceSchema";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Digital Marketing Services | Wildrank Technologies",
  description: "Paid and organic digital marketing managed as one system. Campaigns, content and analytics aligned to revenue, not vanity metrics.",
  alternates: { canonical: "/digital-marketing-services" },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        path="/digital-marketing-services"
        name="Digital Marketing Services"
        serviceType={[
          "Digital Marketing",
          "Integrated Marketing",
          "Performance Marketing",
        ]}
        description="Paid and organic digital marketing managed as one system, with campaigns, content and analytics aligned to revenue."
      />
      <DigitalMarketingServicesClient />
      <RelatedReading slug="how-to-get-cited-by-chatgpt-and-ai-overviews" title="How to Get Cited by ChatGPT, Perplexity and Google AI Overviews" />
    </>
  );
}
