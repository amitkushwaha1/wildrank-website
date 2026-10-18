import FaqAccordion from "@/components/shared/FaqAccordion";
import { homeFaqs } from "@/lib/homeFaqs";

/**
 * The homepage Q&A. The questions and answers live in lib/homeFaqs.ts so the
 * same array feeds both this accordion and the page's FAQPage markup; the
 * presentation lives in the shared FaqAccordion, which /geo-aeo-services also
 * uses, so the two pages can no longer look like different sites.
 */
export default function FAQ() {
  return (
    <FaqAccordion
      items={homeFaqs}
      eyebrow="FAQ"
      heading="Frequently Asked"
      accent="Questions"
      intro="Everything you need to know before getting started."
    />
  );
}
