import WhiteLabelPage from "@/components/white-label/WhiteLabelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label Website Development | Wildrank Technologies",
  description: "White label web development for agencies. Custom websites, e-commerce, and web apps built under your brand.",
  alternates: { canonical: "/white-label-website-development" },
};

const features = [
  { icon: "Globe", title: "Custom Websites", desc: "Brand-aligned, conversion-focused websites built for your clients under your name.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: "ShoppingCart", title: "E-Commerce Stores", desc: "Shopify, WooCommerce, and custom storefronts that drive online sales.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: "Code2", title: "Web Applications", desc: "Custom web apps and SaaS platforms built with modern frameworks.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "Layers", title: "CMS Development", desc: "WordPress and headless CMS builds that clients can easily manage.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: "Smartphone", title: "Responsive Design", desc: "Mobile-first, pixel-perfect designs that look great on every device.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: "Settings", title: "Maintenance & Support", desc: "Ongoing updates and support delivered as your agency's service.", color: "text-pink-400", bg: "bg-pink-500/10" },
];

const faqs = [
  { q: "What platforms do you build on?", a: "React/Next.js, WordPress, Shopify, WooCommerce, and custom stacks. We recommend the best fit for each client's needs." },
  { q: "Who owns the code?", a: "Your client does. Full source code ownership transfers upon project completion." },
  { q: "How long does a typical build take?", a: "Landing pages: 1–2 weeks. Business sites: 3–5 weeks. E-commerce and apps: 6–12 weeks depending on scope." },
  { q: "Is the work white-labeled?", a: "Yes. We communicate through you, and all deliverables are presented as your agency's work." },
];

export default function Page() {
  return <WhiteLabelPage badge="White Label Website Development" title="White Label" highlight="Website Development"
    description="Deliver stunning, high-performing websites to your clients without an in-house dev team."
    intro="Web development is one of the highest-margin services an agency can offer — if you have the talent to deliver. Our white-label development team builds custom websites, e-commerce stores, and web apps under your brand, so you can take on web projects confidently and profitably."
    features={features} faqs={faqs} />;
}
