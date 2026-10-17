import type { Metadata } from "next";
import EmailMarketingServicesClient from "./client";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Email Marketing Services | WildRank",
  description: "Email that earns the open. Segmented lifecycle campaigns, automations and copywriting that turn subscribers into repeat revenue.",
  alternates: { canonical: "/email-marketing-services" },
};

export default function Page() {
  return <EmailMarketingServicesClient />;
}
