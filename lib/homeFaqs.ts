import type { FaqItem } from "@/components/shared/FaqAccordion";

/**
 * The homepage Q&A lives in its own module because it has two consumers that
 * cannot share a client component: the accordion renders it in the browser, and
 * app/page.tsx emits it as FAQPage structured data at build time.
 *
 * Worth knowing: the homepage was the single page on the site with a visible
 * FAQ and no markup behind it — 51 other pages shipped FAQPage and this one did
 * not, so the page most likely to be quoted in an AI answer was the one page
 * without machine-readable answers.
 */
export const homeFaqs: FaqItem[] = [
  {
    q: "What makes Wildrank different from other digital marketing agencies?",
    a: "We pair AI-powered tools and a dedicated team. Unlike generalist agencies, we offer end-to-end services — from SEO and PPC to custom software development — all under one roof. Our white-label model also lets agencies scale without hiring.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term investment. Most clients start seeing measurable improvements in rankings and traffic within 3–6 months. However, the timeline depends on your industry competitiveness, current website health, and the scope of work. We provide monthly reports so you always know where you stand.",
  },
  {
    q: "Do you offer white-label services for agencies?",
    a: "Yes — white-label is one of our core offerings. We work as a silent partner for agencies worldwide, delivering SEO, PPC, social media, web development, and content services under your brand. Our clients typically save 40–60% compared to hiring in-house.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep experience across e-commerce, healthcare, real estate, education, finance, travel, automotive, and B2B SaaS. Our strategies are always tailored to your specific industry dynamics, audience behavior, and competitive landscape.",
  },
  {
    q: "How do you measure and report on campaign performance?",
    a: "We use a combination of Google Analytics, Search Console, and proprietary dashboards to track KPIs that matter — organic traffic, conversion rates, cost per acquisition, and revenue attribution. You get a detailed monthly report plus access to a live dashboard.",
  },
  {
    q: "Can you handle both digital marketing and software development?",
    a: "Absolutely. We are a full-service digital company. Our development team builds websites, mobile apps, and custom software, while our marketing team drives traffic and conversions. Having both under one roof means faster execution and better alignment between your tech and marketing.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer flexible engagement models — monthly retainers, project-based pricing, and dedicated team models. Pricing depends on the scope and services required. We always start with a free audit and consultation to understand your needs before proposing a plan.",
  },
];
