/**
 * Single source of truth for the FAQ content rendered by
 * components/locations/LocationPage.tsx and asserted as FAQPage structured
 * data by every /{city}-seo-company page.
 *
 * Both consumers must agree: a FAQPage schema that does not match the visible
 * text is a structured-data violation, not a bonus. Keep them here together so
 * they cannot drift.
 *
 * These answers describe our process and pricing ranges. They assert no
 * ranking positions, traffic percentages, client counts or ratings — those
 * were removed from the city pages on 2026-10-10 because they were
 * unverifiable.
 */

export type FaqEntry = { q: string; a: string };

export function buildFaqEntries(city: string, location: string): FaqEntry[] {
  return [
    {
      q: `How much does SEO cost in ${city}?`,
      a: `Most ${city} businesses start between $499 and $999 per month depending on how many locations and pages need work. The price that matters is not the monthly figure but what is included: Google Business Profile management, citation cleanup, on-page work and content are not interchangeable, and cheaper plans usually cover only one of them.`,
    },
    {
      q: `How long does SEO take to work in ${city}?`,
      a: `Local listings and Business Profile changes can move within weeks. Competitive organic terms in ${city} typically need three to six months of sustained work before they hold a position, because Google has to recrawl the changes, reassess the page and confirm the improvement holds. Anyone promising page one in a month is selling something other than SEO.`,
    },
    {
      q: `What is the fastest way to rank in ${city}?`,
      a: `For most ${city} businesses the answer is a complete, active Google Business Profile. It is free, it controls map-pack placement, and it is the element most competitors have left half-finished. Work on your website helps, but a neglected profile costs you the local clicks before any ranking work begins.`,
    },
    {
      q: `Do I need SEO if I already run ads?`,
      a: `They do different jobs. Ads buy immediate placement and stop the moment you stop paying. SEO compounds, and the traffic you earn keeps arriving without a monthly media budget. Running both is common, but ads cannot repair a site with no local relevance, and SEO cannot rescue a business that needs demand this week.`,
    },
    {
      q: `Can you work with businesses outside ${city}?`,
      a: `Yes. We work with businesses nationwide, including companies based outside ${city} that need visibility in the ${city} market. If you have customers there but no local presence, that is a solvable problem and worth a conversation about what it would take.`,
    },
    {
      q: `What does G.E.O and A.E.O mean?`,
      a: `G.E.O is Generative Engine Optimization and A.E.O is Answer Engine Optimization. They cover the shift from clicking links to asking questions: ChatGPT, Perplexity and AI Overviews quote sources and attribute claims clearly, so being structured and specific about what you do matters more than it used to. Every plan includes both alongside conventional SEO.`,
    },
  ];
}