import type { Metadata } from "next";
import RelatedReading from "@/components/shared/RelatedReading";
import ContentMarketingServicesClient from "./client";
import ServiceSchema from "@/components/shared/ServiceSchema";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Content Marketing Services | Wildrank Technologies",
  description: "Content that attracts, engages and converts. Research-led articles, landing pages and thought leadership built around what people actually search.",
  alternates: { canonical: "/content-marketing-services" },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        path="/content-marketing-services"
        name="Content Marketing Services"
        serviceType={[
          "Content Marketing",
          "Content Strategy",
          "Thought Leadership",
        ]}
        description="Research-led articles, landing pages and thought leadership built around what people actually search for."
      />
      <ContentMarketingServicesClient />
      <RelatedReading slug="how-to-get-cited-by-chatgpt-and-ai-overviews" title="How to Get Cited by ChatGPT, Perplexity and Google AI Overviews" />
    </>
  );
}
