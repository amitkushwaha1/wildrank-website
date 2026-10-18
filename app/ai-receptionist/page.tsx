import type { Metadata } from "next";
import Link from "next/link";
import { PHONE_E164 } from "@/lib/site";
import IndustriesSection from "@/components/shared/IndustriesSection";

const SITE = "https://wildranktechnologies.com";

export const metadata: Metadata = {
  title: "AI Receptionist & Missed Call Recovery System | WildRank",
  description:
    "Never lose a lead to a missed call again. An AI receptionist answers 24/7 and texts missed callers back within seconds. Setup from $499. Book a consultation.",
  alternates: { canonical: "/ai-receptionist" },
  keywords: [
    "ai receptionist for missed calls",
    "missed call text back system",
    "24/7 ai virtual receptionist",
    "ai phone agent for small business",
    "automated missed call response system",
    "instant lead follow up ai",
    "ai receptionist setup for law firms",
    "ai receptionist for dental clinics",
    "ai phone receptionist cost",
    "best ai receptionist setup",
  ],
};

const FAQS = [
  {
    q: "How does an AI receptionist recover missed calls?",
    a: "It watches for calls that ring out or go unanswered. When one does, it sends an automated SMS to the caller's number within seconds, identifies your business and gives them a direct route to a live answer or a booking link. The caller gets contacted before they dial the next competitor.",
  },
  {
    q: "Which businesses get the most from this?",
    a: "Any business where an inbound call is worth money and someone is regularly not at the phone: home service contractors, law firms, dental and medical clinics, real estate agencies, and auto repair. The pattern that loses money is a missed call that never gets a second chance.",
  },
  {
    q: "What does it cost?",
    a: "Setup is $499. Ongoing usage depends on call volume and is agreed at the consultation rather than listed as a number we would then have to revise.",
  },
  {
    q: "Will customers know it is an AI?",
    a: "We are straight about that with you rather than hiding it from your callers. How prominently the agent identifies itself is your call, and we will tell you where the disclosure line sits.",
  },
  {
    q: "Does it replace our receptionist?",
    a: "No. It covers the hours and the overflow where calls are currently lost. Most clients keep their staff and stop losing the calls that fall through.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/ai-receptionist/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}/ai-receptionist/#service`,
  name: "AI Receptionist and Missed Call Recovery",
  alternateName: ["AI virtual receptionist", "missed call text back", "AI phone agent"],
  serviceType: ["AI Receptionist", "Missed Call Recovery", "Call Answering Automation"],
  provider: { "@id": `${SITE}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
  url: `${SITE}/ai-receptionist`,
  offers: {
    "@type": "Offer",
    price: "499.00",
    priceCurrency: "USD",
  },
  description:
    "24/7 AI call answering with automated SMS text-back to callers whose call was missed, plus CRM lead capture.",
};

export default function AIReceptionistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-light font-semibold uppercase tracking-widest text-sm mb-4">
            Missed Call Recovery
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight max-w-4xl">
            57% of inbound calls go unanswered
          </h1>
          <p className="mt-6 text-lg text-muted max-w-3xl leading-relaxed">
            Most of those callers do not leave a voicemail. They dial the next
            result on their phone. An AI receptionist answers when your line rings
            and nobody is free to, and texts back anyone who gets through to voicemail.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
            >
              Book a consultation
            </Link>
            <a
              href="#how"
              className="px-8 py-3 rounded-lg border border-hairline/20 text-ink font-semibold hover:bg-tint/5 transition"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      <section id="how" className="py-16 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-8">What it does</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Answers when you cannot", "Picks up outside hours, during peak, or when the line is busy."],
              ["Texts back in seconds", "Caller reaches voicemail or hangs up? An SMS goes out almost immediately."],
              ["Qualifies the lead", "Asks the questions that tell you whether a callback is worth making."],
              ["Books or routes", "Sends a booking link, or routes urgent calls to a human."],
            ].map(([t, d]) => (
              <div key={t} className="glass-card rounded-2xl p-6 border border-dark-border">
                <h3 className="text-ink font-bold mb-2">{t}</h3>
                <p className="text-sm text-muted leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-10">Where it pays for itself</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Home services", "Roofing, HVAC, plumbing, electrical. Emergency calls that ring out are the whole margin."],
              ["Professional services", "Law firms, dental and medical clinics. Intake that goes to voicemail is intake you do not get back."],
              ["Sales-led local business", "Real estate, auto repair, agencies. High-value enquiries made while the team is on a job."],
            ].map(([t, d]) => (
              <div key={t} className="glass-card rounded-2xl p-6 border border-dark-border">
                <h3 className="text-lg font-bold text-ink mb-2">{t}</h3>
                <p className="text-sm text-muted leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-16 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-8">Pricing</h2>
          <div className="glass-card rounded-2xl p-8 border border-dark-border max-w-lg">
            <p className="text-sm text-muted uppercase tracking-widest mb-2">Setup</p>
            <p className="text-4xl font-extrabold text-ink mb-2">$499</p>
            <p className="text-sm text-muted">
              One-time. Ongoing usage depends on your call volume and is agreed at the
              consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-10">Questions</h2>
          <div className="space-y-8">
            {FAQS.map((f) => (
              <div key={f.q} className="border-b border-dark-border pb-6">
                <h3 className="text-lg font-bold text-ink mb-2">{f.q}</h3>
                <p className="text-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />

      <section className="py-20 lg:py-16 bg-dark-card border-t border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">Count the calls you are losing</h2>
          <p className="text-muted mb-8">
            We will tell you if your volume does not justify it.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
          >
            Book a consultation
          </Link>
          <p className="text-subtle text-sm mt-6">Prefer to talk? {PHONE_E164}</p>
        </div>
      </section>
    </>
  );
}