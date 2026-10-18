import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { PHONE_E164, SITE_URL as SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Generative Engine Optimization (GEO) & AEO | WildRank",
  description: "GEO and AEO services that get your brand cited inside ChatGPT, Claude, Gemini and Perplexity answers. Entity work, schema and prompt measurement.",
  alternates: { canonical: "/geo-aeo-services" },
  keywords: [
    "geo agency",
    "generative engine optimization company",
    "answer engine optimization agency",
    "aeo agency usa",
    "ai visibility agency",
    "llm seo agency",
    "how to rank on chatgpt search",
    "perplexity ranking strategy",
    "generative engine optimization meaning",
    "ai search optimization services",
  ],
};

const ENGINES = [
  ["ChatGPT", "OpenAI"],
  ["Claude", "Anthropic"],
  ["Perplexity", "Perplexity AI"],
  ["Google AI Overviews", "Google"],
  ["Gemini", "Google"],
];

const FAQS = [
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "GEO is the work of getting your brand cited and recommended inside AI answers. A search engine returns a list of links; an assistant writes one answer and names a few sources. A page can rank first in Google and still be absent from what ChatGPT or Perplexity says, because the assistant read three other sources it found easier to trust. Ranking and being cited are different outcomes, measured in different places.",
  },
  {
    q: "What is AEO, and how is it different from GEO?",
    a: "AEO — Answer Engine Optimization — is the broader category: getting your brand into the answer surfaces of Google AI Overviews, voice assistants, Bing Chat and AI Overviews generally. GEO is the generative subset of that, specific to LLM answers from ChatGPT, Claude, Gemini and Perplexity. We run both together because they share the same underlying work: clear definitions, accurate entity data, and trustworthy sources.",
  },
  {
    q: "Can you actually rank me first in ChatGPT?",
    a: "No, and anyone who promises that is either misunderstanding the problem or hoping you do. Nobody controls what a model says. What we do is raise the odds your brand is the one that gets named: accurate entity data, structured markup, definitional content that answers the question directly, and presence in the sources AI engines actually pull from.",
  },
  {
    q: "How do you measure GEO if there is no ranking position?",
    a: "We pick a fixed set of prompts a real buyer would type, run them repeatedly across the main assistants, and record three things: whether your brand is mentioned at all, whether it is cited with a link, and what the assistant actually says about it. Running them by hand once a month tells you almost nothing, because answers vary between runs.",
  },
  {
    q: "Which AI engines do you work on?",
    a: "ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews are the core set. Coverage across more engines is not automatically better — the engines that matter are the ones your buyers actually ask.",
  },
  {
    q: "How long before it shows results?",
    a: "Entity and schema fixes show up within weeks because they are things Google and the model providers read directly. Citation gains take longer, since they depend on the sources the assistants choose to pull from. We report both separately rather than blurring them into one number.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/geo-aeo-services/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}/geo-aeo-services/#service`,
  name: "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO)",
  alternateName: ["GEO agency", "AEO agency", "AI visibility agency", "LLM SEO"],
  serviceType: [
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AI Search Visibility",
    "Entity and Knowledge Graph Optimization",
  ],
  provider: { "@id": `${SITE}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
  url: `${SITE}/geo-aeo-services`,
  description:
    "Entity, schema and content work that raises the likelihood a brand is cited inside AI-generated answers across ChatGPT, Claude, Gemini and Perplexity.",
};

export default function GeoAeoServicesPage() {
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
            AI Search Visibility
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight max-w-4xl">
            Generative Engine Optimization and AEO
          </h1>
          <p className="mt-6 text-lg text-muted max-w-3xl leading-relaxed">
            A search engine returns a list. An assistant writes one answer and
            names a few sources. Ranking first on Google and being absent from
            that answer are not the same problem — this page is about the second one.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
            >
              Book a consultation
            </Link>
            <a
              href="#definition"
              className="px-8 py-3 rounded-lg border border-hairline/20 text-ink font-semibold hover:bg-tint/5 transition"
            >
              What GEO actually is
            </a>
          </div>
        </div>
      </section>

      {/* Definitional block — the part AI engines quote most */}
      <section id="definition" className="py-16 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-6">What is GEO?</h2>
          <p className="text-muted leading-relaxed max-w-4xl mb-8">
            Generative Engine Optimization is the process of structuring your
            brand's digital assets, entity data and content so that AI engines
            select and recommend you as the primary answer. It covers ChatGPT,
            Claude, Gemini and Perplexity. Answer Engine Optimization (AEO) is the
            broader category, adding Google AI Overviews and voice assistants.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["Entity accuracy", "Who you are, stated the same way everywhere. Assistants repeat whatever they find, including errors."],
              ["Structured markup", "Schema that describes the business and its services unambiguously."],
              ["Definitional content", "Answers that state the plain definition before arguing anything."],
              ["Off-site presence", "AI engines cite directories, forums and press — not just your own site."],
            ].map(([t, d]) => (
              <div key={t} className="glass-card rounded-xl p-5 border border-dark-border">
                <h3 className="text-ink font-bold mb-2">{t}</h3>
                <p className="text-sm text-muted leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engines */}
      <section className="py-20 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-4">Engines we optimise for</h2>
          <p className="text-muted mb-10 max-w-3xl">
            Five surfaces that matter commercially. Covering more is not
            automatically better — the ones that matter are the ones your buyers ask.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ENGINES.map(([name, by]) => (
              <div key={name} className="glass-card rounded-xl p-5 text-center border border-dark-border">
                <h3 className="text-ink font-bold">{name}</h3>
                <p className="text-xs text-subtle mt-1">{by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison — the structure AI engines cite most */}
      <section className="py-20 lg:py-16 bg-dark-card border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-8">GEO vs AEO vs traditional SEO</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-dark-border">
                  {["", "Traditional SEO", "AEO", "GEO"].map((h) => (
                    <th key={h} className="p-4 text-ink font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["What it optimises", "Rank in a results list", "Appear in an answer surface", "Be named inside an LLM answer"],
                  ["Measured by", "Position, clicks", "Presence in the answer", "Mention, citation, and what is said"],
                  ["Main lever", "Links, relevance, crawl", "Structured data, entity clarity", "Source authority, definitional content"],
                  ["How you win", "Outrank the page next to you", "Be the snippet that gets read", "Be one of three sources it chose"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-dark-border/50">
                    {row.map((c, i) => (
                      <td key={i} className={`p-4 ${i === 0 ? "text-muted font-semibold" : "text-muted"}`}>
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Honest limits */}
      <section className="py-20 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink mb-6">What we will not promise</h2>
          <div className="space-y-4">
            {[
              "We cannot guarantee a position in an AI answer. No one can — models change without notice and nobody controls their output.",
              "We will not report a vanity metric. If a dashboard shows you a rising score and nothing changes in what assistants actually say, that is not a result.",
              "If your buyers do not ask assistants about your category, GEO is not the right spend and we will tell you so.",
            ].map((t) => (
              <div key={t} className="flex gap-3">
                <span className="text-primary-light mt-1">→</span>
                <p className="text-muted leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — the same shared accordion the homepage renders. This was a flat
          list of always-open answers under a bare "Questions" heading, so the
          same standard of answer arrived looking like a different website. */}
      <FaqAccordion
        items={FAQS}
        heading="GEO & AEO"
        accent="Questions"
        intro="What clients ask us before they commit to a generative-search programme."
        className="bg-dark-card border-y border-dark-border"
      />

      <section className="py-20 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">Find out whether AI search matters to you yet</h2>
          <p className="text-muted mb-8">
            It may not, depending on how your buyers research. We will say so.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
          >
            Book a consultation
          </Link>
          <p className="text-subtle text-sm mt-6">
            Prefer to talk? {PHONE_E164}
          </p>
          <p className="mt-10 text-sm leading-relaxed text-muted">
            Being cited in an answer is half of it. If the enquiry arrives as a
            phone call,{" "}
            <Link
              href="/ai-receptionist"
              className="font-semibold text-accent underline-offset-4 transition-colors hover:text-primary-light hover:underline"
            >
              an AI receptionist answers the ones your team cannot
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}