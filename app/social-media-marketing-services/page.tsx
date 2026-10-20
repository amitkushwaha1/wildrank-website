import type { Metadata } from "next";
import RelatedReading from "@/components/shared/RelatedReading";
import SocialMediaMarketingServicesClient from "./client";
import ServiceSchema from "@/components/shared/ServiceSchema";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Social Media Marketing Services | Wildrank Technologies",
  description: "Social media that builds brands people remember. Strategy, content and community management across every platform that matters.",
  alternates: { canonical: "/social-media-marketing-services" },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        path="/social-media-marketing-services"
        name="Social Media Marketing Services"
        serviceType={[
          "Social Media Marketing",
          "Social Media Strategy",
          "Community Management",
        ]}
        description="Social media strategy, content and community management across the platforms that matter for your customers."
      />
      <SocialMediaMarketingServicesClient />
      <RelatedReading slug="how-to-get-cited-by-chatgpt-and-ai-overviews" title="How to Get Cited by ChatGPT, Perplexity and Google AI Overviews" />
    </>
  );
}
