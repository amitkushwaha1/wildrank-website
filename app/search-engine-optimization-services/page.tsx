import type { Metadata } from "next";
import SearchEngineOptimizationServicesClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "SEO Services That Drive Real Revenue | WildRank",
  description: "SEO that pays for itself. Technical fixes, on-page optimisation and content built for Google, ChatGPT and Perplexity - all in one plan.",
  alternates: { canonical: "/search-engine-optimization-services" },
};

export default function Page() {
  return <SearchEngineOptimizationServicesClient />;
}
