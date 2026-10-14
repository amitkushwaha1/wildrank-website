/**
 * Industry verticals.
 *
 * Every entry carries copy written for that trade specifically. The same
 * service rendered against seven industries is seven pages that read as one
 * page with the nouns swapped — which is what Google filters out, and what
 * AI engines have no reason to cite.
 *
 * No invented metrics. `proof` is only present where the owner has verified it.
 */

export type ServiceSlug =
  | "hermes-ai-system"
  | "ai-receptionist"
  | "geo-aeo-services"
  | "white-label-agency";

export interface Industry {
  slug: string;
  name: string;
  /** The specific operational pain this trade actually has. */
  painPoint: string;
  /** What the job looks like when the call is lost. */
  lostCallScene: string;
  /** Search phrases this industry genuinely uses. */
  keywords: string[];
  /** Industry-specific objections worth answering on the page. */
  objections: { q: string; a: string }[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "roofing",
    name: "Roofing Contractors",
    painPoint:
      "Crews are on roofs. When a storm call rings during a tear-off, nobody answers, and by the time the office opens the homeowner has already booked the next roofer on their list.",
    lostCallScene:
      "A storm hits at 4pm on a Tuesday. Eight calls come in while two crews are up a ladder. Seven of those homeowners call someone else before anyone gets back to them.",
    keywords: [
      "missed call text back roofing",
      "ai call answering for roofers",
      "roofing lead capture phone",
      "24/7 roofing receptionist service",
      "ai receptionist for roofing companies",
      "roofing emergency call automation",
    ],
    objections: [
      {
        q: "Will a homeowner know they are talking to an AI?",
        a: "Yes, and we would rather you told them than have them find out. Some roofers lead with it because it works — a homeowner calling after a storm does not much mind who picks up, as long as someone does.",
      },
      {
        q: "We already have a call answering service.",
        a: "Then this replaces the part that does not work. Most answering services take a message and hang up. The difference here is the immediate text-back to the caller, which is what actually converts a missed storm call.",
      },
    ],
  },
  {
    slug: "hvac-plumbing",
    name: "HVAC & Plumbing Services",
    painPoint:
      "Emergency calls arrive at the worst possible moment — nights, weekends, when the office is shut. Every call that hits voicemail is a homeowner standing in water calling the next number.",
    lostCallScene:
      "A pipe bursts at 11pm. The homeowner rings three plumbers before reaching one who answers. The third one is you, if you answered at all.",
    keywords: [
      "ai receptionist for plumbing contractors",
      "24/7 automated call answering hvac",
      "lead recovery software plumbers",
      "emergency hvac call answering service",
      "after hours plumber call answering",
      "hvac missed call text back",
    ],
    objections: [
      {
        q: "Can it tell an emergency from a routine booking?",
        a: "That is configured during setup. You decide which phrases route to an on-call number immediately and which go into the normal booking flow.",
      },
      {
        q: "Does it work when a call comes at 2am?",
        a: "That is most of the value. Nights and weekends are where the highest-margin emergency work comes from and where you are currently unreachable.",
      },
    ],
  },
  {
    slug: "legal",
    name: "Law Firms & Legal Intake",
    painPoint:
      "Prospective clients call three or four firms and take the first one who answers properly. Voicemail is not an option — it is an instruction to call the next firm.",
    lostCallScene:
      "Someone has been served, is stressed, and rings you during a hearing. It goes to voicemail. They ring the next firm on the page and you never hear about it.",
    keywords: [
      "ai receptionist setup for law firms",
      "legal lead intake automation ai",
      "law firm missed call text back",
      "24/7 legal intake answering service",
      "ai phone intake for attorneys",
      "legal secretary call answering alternative",
    ],
    objections: [
      {
        q: "Can an AI screen a case properly?",
        a: "It screens and captures, not advises. Matter type, deadline awareness, conflict-check basics, and a booking — then a human picks it up. Configure it to your intake criteria.",
      },
      {
        q: "We have a receptionist.",
        a: "Then this covers nights, weekends and overflow, and takes first-level calls when she is in a hearing. Most firms find it pays for itself on unreturned after-hours calls alone.",
      },
    ],
  },
  {
    slug: "dental-medical",
    name: "Dental & Medical Clinics",
    painPoint:
      "The front desk is buried in check-ins while the phone rings. Calls go to voicemail during the busiest part of the day, and unfilled appointment slots sit there every month.",
    lostCallScene:
      "A new patient calls twice about a cleaning. Both times it rings out during a morning rush. They find a clinic with online booking and book there.",
    keywords: [
      "dental clinic ai receptionist",
      "ai receptionist for dental offices",
      "patient call automation system",
      "dental missed call text back",
      "medical clinic after hours answering",
      "dental office phone system answer calls",
    ],
    objections: [
      {
        q: "Is this HIPAA relevant?",
        a: "Ask that question early and properly. Configure the agent to collect only what your booking flow needs, and agree what is never captured. This is a conversation for the consultation, not a sales page.",
      },
      {
        q: "Can it handle a genuine emergency?",
        a: "Route it. Configure the agent to recognise emergency language and put the caller straight through to your urgent line rather than trying to handle it.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate & Property Management",
    painPoint:
      "Agents are in showings, on site, or driving between them. Buyer calls arrive precisely when the agent cannot pick up, and a buyer who is ghosted moves on.",
    lostCallScene:
      "A buyer calls about the Hackney Road flat at 7pm. The agent is at a viewing. The buyer emails the next morning, asks the listing agent, and by then two offers are in.",
    keywords: [
      "real estate ai lead capture",
      "realtor missed call text back",
      "property management call automation",
      "24/7 property enquiry answering",
      "ai assistant for estate agents",
      "tenant enquiry call answering",
    ],
    objections: [
      {
        q: "Will it qualify buyers properly?",
        a: "Configurable. Financing status, budget band, property criteria, viewing availability — you set the questions and what gets passed to you.",
      },
      {
        q: "We already have a 24-hour booking line.",
        a: "Often it only takes bookings and loses enquiries. This answers and qualifies, and text-backs anyone the line does not reach.",
      },
    ],
  },
  {
    slug: "auto-repair",
    name: "Auto Repair & Dealerships",
    painPoint:
      "Service advisors are on bays, phones ring during peak, and customers calling for a quote hear music instead of an answer — then take the quote somewhere else.",
    lostCallScene:
      "A customer rings for a quote you could have given in two minutes. Voicemail. They ring the garage down the road and get served there.",
    keywords: [
      "auto repair shop phone automation",
      "car dealership ai call responder",
      "auto shop missed call recovery",
      "dealership appointment booking ai",
      "24/7 auto service call answering",
      "vehicle service enquiry phone system",
    ],
    objections: [
      {
        q: "Can it quote for us?",
        a: "For standard, repeatable work, yes — configured with your labour rates and common jobs. Anything unusual gets qualified and passed to an advisor.",
      },
      {
        q: "We already have a dealership group system.",
        a: "Then it feeds it. The point is the phone stops being the bottleneck between a ringing line and a booked bay.",
      },
    ],
  },
  {
    slug: "b2b-saas",
    name: "B2B SaaS & Tech Companies",
    painPoint:
      "Nobody is on the phone at 2am in London or Singapore, and inbound demo requests from those hours are the ones that get answered by a competitor in their own working day.",
    lostCallScene:
      "A prospect in Singapore emails at 3am their time. By the time your team wakes, a competitor who answered overnight has replied. You lose it without ever knowing it existed.",
    keywords: [
      "b2b saas generative engine optimization",
      "aeo services for saas",
      "ai marketing agency for tech startups",
      "llm seo for saas companies",
      "saas ai visibility agency",
      "24/7 saas inbound call handling",
    ],
    objections: [
      {
        q: "Do buyers in SaaS actually call?",
        a: "Less than consumer services, but not rarely — especially for pricing, security and procurement questions. Worth checking your own missed-call volume before committing.",
      },
      {
        q: "Why GEO for us specifically?",
        a: "Software buyers increasingly ask assistants which tool fits before they look at vendor sites. If you are not named in that answer, you are not in the consideration set at all.",
      },
    ],
  },
];

export interface ServiceDef {
  slug: ServiceSlug;
  name: string;
  /** Short label used in nav and headings. */
  shortName: string;
  /** H1 suffix — reads as: "<verb> <city>" or "<service> for <industry>". */
  headline: string;
  summary: string;
  /** What this service does, phrased generically. */
  whatItDoes: string;
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "hermes-ai-system",
    name: "Hermes AI System Deployment",
    shortName: "Hermes AI System",
    headline: "Hermes AI System deployment",
    summary:
      "The Hermes AI agent configured for your business and connected to your phone line and CRM.",
    whatItDoes:
      "An autonomous AI agent that answers inbound calls, works the conversation, qualifies the caller and hands the outcome to your existing systems.",
  },
  {
    slug: "ai-receptionist",
    name: "AI Receptionist & Missed Call Recovery",
    shortName: "AI Receptionist",
    headline: "AI receptionist and missed call recovery",
    summary:
      "Answers when you cannot, and texts back anyone whose call reached voicemail.",
    whatItDoes:
      "Watches for calls that ring out or go unanswered, then sends an SMS to that number within seconds so the lead does not silently become a competitor's customer.",
  },
  {
    slug: "geo-aeo-services",
    name: "Generative Engine Optimization & AEO",
    shortName: "GEO & AEO",
    headline: "Generative Engine Optimization and AEO",
    summary:
      "Entity, schema and content work so assistants name you inside their answers.",
    whatItDoes:
      "Raises the likelihood your brand is mentioned and cited when a buyer asks ChatGPT, Claude, Gemini or Perplexity a question about your category.",
  },
  {
    slug: "white-label-agency",
    name: "White Label Agency Services",
    shortName: "White Label",
    headline: "White label AI and marketing services",
    summary:
      "Resell these systems under your own brand, with the technical work done by us.",
    whatItDoes:
      "Agencies and resellers get unbranded delivery, their own client reporting, and none of the integration burden.",
  },
];

export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);
export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);