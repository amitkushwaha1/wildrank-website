import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://wildranktechnologies.com";

export const metadata: Metadata = {
  title: "Hermes AI System — AI Call Agent Setup & Missed Call Recovery | Wildrank",
  description:
    "Deploy the Hermes AI System as your 24/7 call answering agent. Instant SMS text-back on missed calls, lead qualification and CRM sync. Booked by consultation.",
  alternates: { canonical: "/hermes-ai-system" },
};

const FAQS = [
  {
    q: "What is the Hermes AI System?",
    a: "Hermes is an autonomous AI agent. Deployed as a call-handling agent, it answers inbound calls, responds conversationally, and pushes every conversation to your CRM. Wildrank configures the agent for your business: your services, your hours, your booking rules, and your CRM destination.",
  },
  {
    q: "How does it handle a call my staff misses?",
    a: "When a caller reaches voicemail or hangs up, the system fires an automated SMS to that number within seconds. The text identifies your business and gives the caller a direct path back to a live answer or a booking link, so the lead does not silently go to a competitor.",
  },
  {
    q: "Where does the call data go?",
    a: "Any endpoint you nominate. We configure the integration so lead details, transcripts and call outcomes land in your existing CRM or booking system rather than in a separate dashboard you would have to remember to check.",
  },
  {
    q: "How long does setup take?",
    a: "Setup is booked as a consultation rather than sold as a fixed package, because the work depends on your existing phone provider, your CRM and how many services you want the agent to handle. You get a concrete timeline after the first call.",
  },
  {
    q: "Do you offer support after deployment?",
    a: "Yes. The agent is tuned over time as we watch which calls it handles well and which need a human. Ongoing support is agreed as part of the engagement.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/hermes-ai-system/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}/hermes-ai-system/#service`,
  name: "Hermes AI System — AI Call Agent Setup",
  serviceType: ["AI Call Answering", "Missed Call Recovery", "AI Receptionist", "CRM Lead Sync"],
  provider: { "@id": `${SITE}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
  url: `${SITE}/hermes-ai-system`,
  description:
    "Configuration and deployment of the Hermes AI agent for inbound call answering, missed-call text-back and CRM lead capture.",
};

export default function HermesAISystemPage() {
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

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-light font-semibold uppercase tracking-widest text-sm mb-4">
            AI Call Automation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight max-w-4xl">
            The Hermes AI System, deployed for your business
          </h1>
          <p className="mt-6 text-lg text-muted max-w-3xl leading-relaxed">
            A missed call is a lost customer. Hermes answers when you cannot, texts
            back the caller within seconds, and puts every lead straight into your CRM.
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

      {/* What it is */}
      <section className="py-16 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-6">What the Hermes AI System actually does</h2>
          <p className="text-muted leading-relaxed max-w-4xl">
            Hermes is an autonomous AI agent. Out of the box it is a general-purpose
            system; what Wildrank does is configure and deploy it for a specific
            business — wiring it to your phone line, teaching it your services and
            booking rules, and connecting it to the systems you already use.
          </p>
          <p className="text-muted leading-relaxed max-w-4xl mt-4">
            That is the honest scope. It is not a turnkey box that plugs into any
            phone system. The work is the integration, and the quality of the result
            depends on how well we know your business before we start.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-10">Core capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["24/7 call answering", "The agent picks up when your line rings and nobody is free to."],
              ["Instant missed-call text-back", "Caller reaches voicemail or hangs up? An SMS goes out within seconds."],
              ["Lead qualification", "The agent asks the questions that tell you whether to follow up."],
              ["Direct CRM sync", "Conversations land in your CRM or booking system, not a separate inbox."],
              ["Booking and scheduling", "Callers can be booked, rescheduled or qualified without a human."],
              ["Tuned over time", "We watch which calls it handles well and adjust from there."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-6 border border-dark-border"
              >
                <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="py-20 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-10">How deployment works</h2>
          <ol className="space-y-6 max-w-3xl">
            {[
              ["Consultation", "We map your services, opening hours, call routing and CRM."],
              ["Phone integration", "Your existing line is connected to the agent's voice endpoint."],
              ["Knowledge and rules", "Your FAQs, pricing boundaries and booking rules are loaded into the agent."],
              ["CRM and webhook wiring", "Lead data is formatted and pushed to where you already work."],
              ["Go live and tune", "The agent starts taking calls. We adjust it based on real call data."],
            ].map(([title, desc], i) => (
              <li key={title} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary-light font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-ink font-bold text-lg">{title}</h3>
                  <p className="text-muted mt-1 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
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

      {/* CTA */}
      <section className="py-20 bg-dark-card border-t border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Find out whether Hermes fits your call volume
          </h2>
          <p className="text-muted mb-8">
            We will tell you honestly if your call pattern does not justify it.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
          >
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}