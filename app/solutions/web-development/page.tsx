import WebHero from "@/components/solutions/web/WebHero";
import WebServices from "@/components/solutions/web/WebServices";
import WebTech from "@/components/solutions/web/WebTech";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | Wildrank Technologies",
  description: "Custom high-performance websites and web apps built with modern tech, optimized for speed and conversions.",
};

export default function WebDevPage() {
  return (
    <>
      <WebHero />
      <WebServices />
      <WebTech />
      <CTA />
    </>
  );
}
