import ContactHero from "@/components/company/contact/ContactHero";
import ContactForm from "@/components/company/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Wildrank Technologies | Free Marketing Audit",
  description: "Contact Wildrank Technologies for a free marketing audit. Tell us your goals and we will reply within one business day with clear next steps.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
