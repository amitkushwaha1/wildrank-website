import ContactHero from "@/components/company/contact/ContactHero";
import ContactForm from "@/components/company/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Wildrank Technologies",
  description: "Get in touch with Wildrank Technologies. We respond within 24 hours.",
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
