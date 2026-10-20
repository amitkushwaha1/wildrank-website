import type { Metadata } from "next";
import EmailMarketingServicesClient from "./client";
import ServiceSchema from "@/components/shared/ServiceSchema";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Email Marketing Services | Wildrank Technologies",
  description: "Email that earns the open. Segmented lifecycle campaigns, automations and copywriting that turn subscribers into repeat revenue.",
  alternates: { canonical: "/email-marketing-services" },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        path="/email-marketing-services"
        name="Email Marketing Services"
        serviceType={[
          "Email Marketing",
          "Marketing Automation",
          "Lifecycle Email",
        ]}
        description="Segmented lifecycle email campaigns, automations and copywriting that turn subscribers into repeat revenue."
      />
      <EmailMarketingServicesClient />
    </>
  );
}
