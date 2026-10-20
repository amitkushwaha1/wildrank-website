import type { Metadata } from "next";
import RelatedReading from "@/components/shared/RelatedReading";
import SearchEngineOptimizationServicesClient from "./client";
import ServiceSchema from "@/components/shared/ServiceSchema";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "SEO Services That Drive Real Revenue | Wildrank Technologies",
  description: "SEO that pays for itself. Technical fixes, on-page optimisation and content built for Google, ChatGPT and Perplexity - all in one plan.",
  alternates: { canonical: "/search-engine-optimization-services" },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        path="/search-engine-optimization-services"
        name="Search Engine Optimization (SEO) Services"
        alternateName={["SEO agency", "SEO company", "SEO services USA"]}
        serviceType={[
          "Search Engine Optimization",
          "Technical SEO",
          "On-Page SEO",
          "Content SEO",
        ]}
        description="SEO that pays for itself: technical fixes, on-page optimisation and content built for Google, ChatGPT and Perplexity, delivered in one plan."
      />
      <SearchEngineOptimizationServicesClient />
      <RelatedReading slug="how-to-get-cited-by-chatgpt-and-ai-overviews" title="How to Get Cited by ChatGPT, Perplexity and Google AI Overviews" />
    </>
  );
}
