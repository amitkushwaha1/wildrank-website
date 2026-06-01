import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import Stats from "@/components/home/Stats";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Stats />
      <Industries />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}