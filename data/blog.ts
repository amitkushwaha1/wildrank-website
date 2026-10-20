/**
 * Blog content.
 *
 * The site had a /blog route that promised "Marketing Guides & Insights" and
 * rendered fourteen topic cards, every one of which linked to a service page.
 * There were no articles at all. That is the reason there is nothing on the
 * domain worth linking to: directories give citations, not links, and links are
 * what come from pages people cite.
 *
 * Posts are plain structured data rather than MDX because the site builds with
 * `output: 'export'` and carries no markdown dependency. Adding one to render
 * three files would put a parser in the bundle for no benefit.
 *
 * Content rules, same as the rest of the site:
 *  - No invented statistics. Numbers appear only as worked examples with their
 *    assumptions stated, so a reader can check the arithmetic.
 *  - No personal bylines. The author is the company.
 *  - Every article links to the service page it belongs to, and those pages
 *    link back, so the cluster is crawlable in both directions.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "note"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Used as the meta description and the card summary. Keep under ~160 chars. */
  description: string;
  /** ISO date. Also emitted as datePublished in Article schema. */
  date: string;
  updated?: string;
  category: "AI Search" | "SEO" | "Local SEO" | "AI Systems" | "Paid Media";
  readingMinutes: number;
  /** The service page this article supports, and the anchor text to use. */
  related: { href: string; label: string };
  sections: Block[];
  faqs?: { q: string; a: string }[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "how-to-get-cited-by-chatgpt-and-ai-overviews",
    title: "How to Get Cited by ChatGPT, Perplexity and Google AI Overviews",
    description:
      "A practical guide to Generative Engine Optimization: how answer engines choose what to cite, and the changes that make a business quotable.",
    date: "2026-10-20",
    category: "AI Search",
    readingMinutes: 9,
    related: { href: "/geo-aeo-services", label: "GEO and AEO services" },
    sections: [
      {
        type: "p",
        text: "When someone asks an assistant for a recommendation, the assistant does not rank pages the way a search results page does. It assembles an answer and cites the sources it used. Those two things come apart: a page can rank in the ordinary top ten and never be quoted, and a page that ranks poorly can be quoted constantly because it answers the question cleanly.",
      },
      {
        type: "p",
        text: "This guide is about the second thing. It covers what answer engines actually look at, what makes a passage quotable, and the work that changes your odds — in the order it is worth doing.",
      },
      { type: "h2", text: "Answer engines retrieve, then summarise" },
      {
        type: "p",
        text: "Every major assistant follows roughly the same shape. Your question becomes a set of searches. Those searches return candidate pages. A model reads the candidates and writes an answer, attaching citations to the passages it drew from. Anything that was not retrieved cannot be cited, and anything that was retrieved but is hard to lift a clean sentence from will be skipped in favour of a competitor that is easier to quote.",
      },
      {
        type: "p",
        text: "That gives three distinct failure points: you are not retrieved, you are retrieved but not understood, or you are understood but not quotable. Most advice online only addresses the first one. In practice the third is where most businesses lose.",
      },
      { type: "h2", text: "Be retrievable" },
      {
        type: "h3", text: "Let the crawlers in" },
        {
          type: "p",
          text: "Check your robots.txt actually allows the crawlers that feed assistants, not just Googlebot. GPTBot and OAI-SearchBot for OpenAI, PerplexityBot, ClaudeBot, Google-Extended for Gemini and AI Overviews, and Applebot-Extended for Apple Intelligence. A file that blocks them makes every other step pointless. Ours lists them explicitly.",
        },
      { type: "h3", text: "Answer in the language people use" },
      {
        type: "p",
        text: "Assistants match the phrasing of the question. If every page on your site says \"digital solutions\" and buyers ask \"who can run my Google Ads\", the words do not meet. Write the service names people actually type, and keep the internal jargon for your sales deck.",
      },
      { type: "h3", text: "Cover the question, not just the keyword" },
      {
        type: "p",
        text: "A page targeting \"local SEO services\" competes with a page titled \"what does a local SEO agency do and what does it cost\". The second one answers a question and gets quoted. The first one announces a service and gets ranked, if you are lucky.",
      },
      { type: "h2", text: "Be understood as an entity" },
      {
        type: "p",
        text: "An assistant has to be confident it knows who you are before it will put your name in an answer. That confidence comes from consistency across the sources it reads, not from any single page.",
      },
      {
        type: "ul",
        items: [
          "One name, spelled the same way everywhere. If your site says \"Wildrank Technologies\" and a directory says \"WildRank Tech\", you are two weaker entities instead of one strong one.",
          "One address and phone number, matching character for character across your site, your profiles and your listings. Mismatches read as uncertainty.",
          "Structured data that states the facts machine-readably: legal name, founding date, headquarters, and the services you offer. A crawler should not have to infer your industry from prose.",
          "A consistent entity across profiles. Link your site from every profile you control, and link those profiles back from the site. This is what sameAs is for.",
        ],
      },
      {
        type: "note",
        text: "The practical test: search your own brand in an assistant and read what it says. If it hedges, describes a different company, or says it has no information, the entity is not resolved yet. That is the problem to fix before writing another word of content.",
      },
      { type: "h2", text: "Be quotable" },
      {
        type: "p",
        text: "This is the part most sites get wrong. A model needs a self-contained sentence it can lift and cite. Long introductions, throat-clearing and \"in today's fast-paced digital landscape\" give it nothing to take.",
      },
      {
        type: "ul",
        items: [
          "Put the answer in the first sentence under the heading. Not after context, not after a story. The heading asks the question; the sentence answers it.",
          "Make each section stand alone. Assume the reader arrives mid-page. If a section only makes sense after the previous four, it will not be quoted.",
          "Use concrete nouns and numbers over adjectives. \"We respond within one business day\" is quotable. \"Lightning-fast turnaround\" is not.",
          "Define your terms once, plainly. If you have a specific way of doing something, name it and describe it in one sentence a stranger could repeat.",
        ],
      },
      { type: "h2", text: "What does not work" },
      {
        type: "ul",
        items: [
          "Keyword-stuffed pages written for a crawler. They are retrieved less often and quoted almost never, because there is no clean sentence in them.",
          "Claiming to be the best. Every competitor claims it, so it carries no information. Specifics carry information.",
          "Blocking AI crawlers as a protest. You keep your content and lose the citation; the assistant answers from someone else's page.",
          "Padding an article to hit a word count. Length is not the signal — the number of self-contained answers is.",
        ],
      },
      { type: "h2", text: "The order to do this in" },
      {
        type: "ol",
        items: [
          "Fix robots.txt so the AI crawlers are allowed. Ten minutes, and nothing else matters without it.",
          "Resolve the entity: consistent name, address and phone across site and profiles, with sameAs links both ways.",
          "Add structured data for the organisation and each service, so facts do not have to be inferred.",
          "Rewrite the top of your money pages so each section opens with a direct answer.",
          "Publish content that answers the questions buyers actually ask, in their words.",
          "Re-check monthly. Assistants change what they cite, and a citation you had is not a citation you keep.",
        ],
      },
      {
        type: "p",
        text: "None of this is separate from ordinary good SEO. It is the same work with a different reader in mind — one that reads a page looking for a sentence it can reuse.",
      },
    ],
    faqs: [
      {
        q: "What is Generative Engine Optimization?",
        a: "Generative Engine Optimization, or GEO, is the work of making a business retrievable, understandable and quotable to AI answer engines such as ChatGPT, Perplexity, Gemini and Google AI Overviews. It overlaps with technical SEO but optimises for being cited in a generated answer rather than for a position on a results page.",
      },
      {
        q: "How long does it take to appear in AI answers?",
        a: "Entity fixes and crawler access can show up in weeks because they are technical changes. Being cited consistently for competitive commercial questions usually takes months, because it depends on how much corroborating content and third-party mention exists around your brand.",
      },
      {
        q: "Do I need to block or allow AI crawlers?",
        a: "Allow them if you want to be cited. GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended and Applebot-Extended are the main ones. Blocking them removes you from the answer entirely while your competitors remain in it.",
      },
    ],
  },
  {
    slug: "what-a-missed-call-costs-a-service-business",
    title: "What a Missed Call Actually Costs a Service Business",
    description:
      "Missed calls are treated as an annoyance. Worked through with your own numbers, they are usually the largest recoverable line in a service business.",
    date: "2026-10-20",
    category: "AI Systems",
    readingMinutes: 7,
    related: { href: "/ai-receptionist", label: "AI receptionist" },
    sections: [
      {
        type: "p",
        text: "A missed call does not feel expensive. It feels like a busy afternoon. The cost only becomes visible when you count the calls and multiply by what a job is worth, which is why almost nobody does it.",
      },
      {
        type: "p",
        text: "This article works the arithmetic with your numbers, explains why the loss is bigger than the call count suggests, and covers what actually fixes it.",
      },
      { type: "h2", text: "Start with the calls you already know about" },
      {
        type: "p",
        text: "Most phone systems will tell you how many calls were answered and how many were not. If yours does not, the number is still recoverable: compare the calls that produced a job against the calls you remember taking.",
      },
      {
        type: "p",
        text: "Take a service business that receives 120 calls a month and misses 15 of them. That is a miss rate of 12.5 percent, which sounds tolerable until the next step.",
      },
      { type: "h2", text: "Multiply by job value, not by call value" },
      {
        type: "p",
        text: "A missed call is not worth the price of a phone call. It is worth the job it would have become, adjusted for the fact that not every caller buys.",
      },
      {
        type: "ol",
        items: [
          "Count missed calls per month. In the example: 15.",
          "Estimate what share of answered calls turn into booked work. In the example: 30 percent.",
          "Multiply by your average job value. In the example: $900.",
        ],
      },
      {
        type: "note",
        text: "Worked example: 15 missed calls × 30% close rate × $900 average job = $4,050 a month, or $48,600 a year, from calls that were never answered. Change any one input and the answer changes; the point is the shape of the sum, not the specific figure.",
      },
      {
        type: "p",
        text: "That is the conservative version, because it assumes a missed caller is as likely to buy as an answered one. In practice the caller who reaches a person is more likely to convert, so the real figure is usually higher.",
      },
      { type: "h2", text: "Why the loss is larger than the call count" },
      {
        type: "h3", text: "The caller does not wait" },
      {
        type: "p",
        text: "Someone with a burst pipe or a leaking roof calls the first number, and if nobody picks up, they call the second. You did not lose a lead to a slow decision. You lost it in the time it took them to dial again.",
      },
      { type: "h3", text: "You paid for the call" },
      {
        type: "p",
        text: "If that call came from paid search, you were billed for it whether or not anyone answered. A missed call from an ad is the worst version of this: you paid to be interrupted and declined the work.",
      },
      { type: "h3", text: "Missed calls are invisible in reporting" },
      {
        type: "p",
        text: "Your marketing report shows cost per lead, not cost per call that nobody picked up. The channel looks like it underperforms while the real problem sits with the phone. Businesses routinely cut ad spend when the fix was answering the phone.",
      },
      { type: "h2", text: "What does not solve it" },
      {
        type: "ul",
        items: [
          "A better voicemail greeting. The caller is already dialling the next number while yours plays.",
          "An answering service that takes a message. A message is a lead that still needs calling back, and by then the urgency is gone.",
          "Hiring a full-time receptionist for the peaks. You pay for the quiet hours and still miss calls when two lines ring at once.",
        ],
      },
      { type: "h2", text: "What actually solves it" },
      {
        type: "p",
        text: "The recovery step matters more than the answering. A call that cannot be picked up should trigger an immediate text back, because a text reaches the caller on the same device they just used and does not need them to be free to talk.",
      },
      {
        type: "ol",
        items: [
          "Answer when you can, with a person.",
          "When you cannot, text the caller back within seconds rather than taking a message.",
          "Qualify in the text thread: what the job is, where it is, when they need it.",
          "Book it into the calendar or CRM so it becomes a job rather than a note.",
          "Report on recovered calls as a separate line, so the improvement is visible.",
        ],
      },
      {
        type: "p",
        text: "That is the workflow our AI receptionist implements: it answers or texts back every missed call, qualifies the caller and books the job, and it does it at two in the morning as readily as at two in the afternoon.",
      },
      { type: "h2", text: "Run your own numbers first" },
      {
        type: "p",
        text: "Before buying anything, spend ten minutes with your call log. If missed calls multiplied by your close rate and average job value comes to a number you would notice on a bank statement, it is worth fixing. If it does not, this is not your problem and you should spend the money elsewhere.",
      },
    ],
    faqs: [
      {
        q: "How many calls does a service business typically miss?",
        a: "It varies too much to quote a single figure, which is why the useful approach is to read your own call log. Count inbound calls and unanswered calls over one normal month and divide. The result is your miss rate, and it is the only number that matters for your business.",
      },
      {
        q: "Is texting a missed caller better than voicemail?",
        a: "Usually yes, for service work. A text reaches the caller on the device they just used and does not require them to be free to talk. Voicemail requires them to dial in, listen and call back, and most callers who reach voicemail simply ring the next business instead.",
      },
      {
        q: "What is an AI receptionist?",
        a: "An AI receptionist answers calls and text messages, qualifies the caller, and books the job into a calendar or CRM. It handles the calls a team cannot pick up, including evenings and weekends, and passes anything complex to a person.",
      },
    ],
  },
  {
    slug: "local-seo-checklist-for-service-businesses",
    title: "Local SEO Checklist for Service Businesses",
    description:
      "The order that matters: fix the map listing, make the site say where you work, then earn the signals you cannot fake. A practical local SEO checklist.",
    date: "2026-10-20",
    category: "Local SEO",
    readingMinutes: 8,
    related: { href: "/local-seo-services", label: "local SEO services" },
    sections: [
      {
        type: "p",
        text: "Local SEO fails for boring reasons. Not because a competitor found a trick, but because the listing is half-filled, the site never says which towns it serves, and nobody has asked a customer for a review in two years.",
      },
      {
        type: "p",
        text: "This checklist is ordered by return on effort. Work top to bottom; the later items are worthless if the earlier ones are wrong.",
      },
      { type: "h2", text: "1. Get the map listing right" },
      {
        type: "p",
        text: "For most service businesses this single asset outranks the entire website for local queries. Fill every field, because completeness is used as a quality signal.",
      },
      {
        type: "ul",
        items: [
          "Exact business name. No keyword stuffing — adding \"Best Plumber\" to the name is a suspension risk, not a ranking trick.",
          "The primary category that matches what you actually sell, plus secondary categories only where you genuinely do the work.",
          "Address, phone and hours matching your website character for character.",
          "Service area, if you travel to customers rather than serving them at your premises.",
          "Services with descriptions, and products where they apply.",
          "Photos added regularly. Real photos of real work, not stock.",
          "Business description written in plain language, without promotional filler.",
        ],
      },
      {
        type: "note",
        text: "If you use a registered-agent or virtual office address, expect verification to be harder and expect the listing to compete with every other business at that address. A staffed location you actually operate from will always outperform one you do not.",
      },
      { type: "h2", text: "2. Make the site say where you work" },
      {
        type: "p",
        text: "A page that mentions a city once in the footer is not a local page. Each location or service area needs a page that would be genuinely useful to someone living there.",
      },
      {
        type: "ul",
        items: [
          "A dedicated page per service area, not a list of towns on one page.",
          "Local proof on each: jobs done nearby, neighbourhoods covered, travel radius, local suppliers or regulations that affect the work.",
          "Embedded map and directions, plus a phone number that is clickable on mobile.",
          "Local business structured data naming the areas served.",
          "Internal links from the homepage and the main service page to each area page.",
        ],
      },
      {
        type: "p",
        text: "The test is simple: if you swapped the town name and the page still made sense, it is a doorway page and it will not help.",
      },
      { type: "h2", text: "3. Keep your details identical everywhere" },
      {
        type: "p",
        text: "Every directory, social profile and industry listing that carries your name, address and phone should carry the same ones. Inconsistency splits the signals that tell a search engine these all describe one business.",
      },
      {
        type: "ul",
        items: [
          "Same business name, formatted the same way.",
          "Same phone number — use one tracking number or none, not both.",
          "Same address, including how you abbreviate the street.",
          "Same website URL, https and the canonical host.",
        ],
      },
      { type: "h2", text: "4. Earn reviews continuously" },
      {
        type: "p",
        text: "Reviews are the strongest signal you can influence directly, and the one most businesses handle badly: they ask once, in a batch, after a quiet month.",
      },
      {
        type: "ol",
        items: [
          "Ask every customer, at the moment the work is finished and they are pleased.",
          "Send a direct link to the review form rather than telling them to search for you.",
          "Reply to every review, including the bad ones. A calm reply to a complaint is more persuasive than a wall of five stars.",
          "Never buy or incentivise reviews. Filtering and penalties are the usual outcome, and the loss of the whole listing costs more than the reviews were worth.",
        ],
      },
      { type: "h2", text: "5. Publish answers, not adverts" },
      {
        type: "p",
        text: "Local searches are often questions: what a job costs, whether a permit is needed, how long a repair takes. Pages that answer those questions earn links and get quoted by AI assistants, which increasingly sit above the map pack.",
      },
      { type: "h2", text: "6. Then measure it" },
      {
        type: "ul",
        items: [
          "Calls and direction requests from the map listing, month over month.",
          "Which queries triggered the listing to appear.",
          "Ranking for your money terms in each service area, checked from that area.",
          "Booked jobs traced back to local search, not just sessions.",
        ],
      },
      {
        type: "p",
        text: "Work in that order and most local problems resolve without anything clever. Skip to the last step and you will spend money measuring a listing that was never complete.",
      },
    ],
    faqs: [
      {
        q: "How long does local SEO take to work?",
        a: "Completing and verifying a business profile can affect visibility within weeks. Ranking for competitive money terms in a city usually takes several months, because it depends on review volume, local content and links, none of which move quickly.",
      },
      {
        q: "Do I need a separate page for every city I serve?",
        a: "Only for areas where you genuinely work and can write something useful. A page per city with swapped place names is a doorway page and will not help. A smaller number of pages with real local detail performs better.",
      },
      {
        q: "Can I rank locally without a physical address?",
        a: "Yes, as a service-area business, but with limits. You can hide the address and define areas you serve, which is legitimate for trades that travel to customers. You cannot rank as well as a staffed location in the area you are targeting.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function sortedPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}
