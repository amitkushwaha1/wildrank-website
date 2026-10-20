import type { Metadata } from "next";
import MobileMarketingServicesClient from "./client";
import ServiceSchema from "@/components/shared/ServiceSchema";

// This page was originally a single "use client" component, which cannot export
// metadata. The server shell owns the SEO surface; the client component owns
// the interactive markup. Do not merge them back.
export const metadata: Metadata = {
  title: "Mobile Marketing Services | Wildrank Technologies",
  description: "Reach customers on the device they carry. Mobile-first campaigns, app promotion and SMS that turn attention into action.",
  alternates: { canonical: "/mobile-marketing-services" },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        path="/mobile-marketing-services"
        name="Mobile Marketing Services"
        serviceType={[
          "Mobile Marketing",
          "SMS Marketing",
          "App Promotion",
        ]}
        description="Mobile-first campaigns, app promotion and SMS that turn attention on the device customers carry into action."
      />
      <MobileMarketingServicesClient />
    </>
  );
}
