/**
 * Per-city facts for the location pages.
 *
 * The 20 existing city pages were flagged in the 2026-10-17 audit as
 * doorway pages: 1,281 words each, 84-97% identical, city name swapped.
 * Google's spam policy names exactly that pattern, and it is a plausible
 * reason those pages sit at positions 20-56 with zero clicks on ~5,000
 * impressions.
 *
 * Each entry below is meant to make its page genuinely different from the
 * others: local industry mix, real neighbourhoods and districts, and a
 * factual note about the market. Nothing here is a marketing claim about
 * Wildrank — no client counts, no invented case studies. Facts about the
 * city are stated plainly so a reader in that city recognises their own
 * market.
 *
 * Add a city by adding a key here and a page in app/<city>-seo-company/.
 */

export type CityFacts = {
  /** Two or three industries that dominate the local economy. */
  industries: string[];
  /** Real neighbourhoods, districts or suburbs worth naming on the page. */
  areas: string[];
  /** A short factual note about the market. No marketing claims. */
  note: string;
};

export const CITY_FACTS: Record<string, CityFacts> = {
  austin: {
    industries: ["technology and SaaS", "construction and home services", "healthcare and life sciences"],
    areas: ["Downtown", "East Austin", "Round Rock", "Cedar Park", "South Congress"],
    note: "Austin has one of the highest concentrations of tech employers in the US outside the coasts, and a large population of independent home-services businesses serving the metro's growth. Search behaviour splits sharply between enterprise software queries and local trades.",
  },
  boston: {
    industries: ["healthcare and biotech", "education and higher education", "financial services"],
    areas: ["Back Bay", "Cambridge", "Somerville", "South Boston", "Brookline"],
    note: "Boston's economy is anchored by hospitals, universities and financial firms, so local search demand skews toward professional and healthcare services rather than retail. Neighbourhood-level targeting matters because the metro is compact but fragmented.",
  },
  charlotte: {
    industries: ["banking and finance", "energy", "logistics and distribution"],
    areas: ["Uptown", "South End", "Ballantyne", "Lake Norman", "Rock Hill"],
    note: "Charlotte is the second-largest banking centre in the US, which shapes local search: B2B professional services and home services both compete for a fast-growing, transplanted population.",
  },
  chicago: {
    industries: ["manufacturing and logistics", "financial services", "healthcare"],
    areas: ["The Loop", "River North", "Lincoln Park", "Naperville", "Schaumburg"],
    note: "Chicago is a large, multi-centre market rather than a single downtown. Suburban competition is as strong as city-centre competition, and service-area pages need to name the specific suburbs a business actually covers.",
  },
  columbus: {
    industries: ["retail and logistics", "healthcare", "education and government"],
    areas: ["Downtown", "Short North", "Dublin", "Westerville", "Grove City"],
    note: "Columbus is a major retail and logistics hub and one of the fastest-growing large cities in the Midwest. Local search volume is high relative to population size.",
  },
  dallas: {
    industries: ["technology", "real estate and construction", "energy"],
    areas: ["Downtown", "Uptown", "Plano", "Frisco", "Arlington"],
    note: "The Dallas-Fort Worth metro is spread across dozens of municipalities, so a business serving the area is really serving several distinct search markets. City pages need to be honest about which suburbs are actually covered.",
  },
  denver: {
    industries: ["aerospace and defence", "energy", "outdoor and recreation"],
    areas: ["LoDo", "Cherry Creek", "Aurora", "Lakewood", "Boulder"],
    note: "Denver sits at altitude with a distinct climate and a large outdoor-recreation economy, which shapes both the search terms people use and the seasonality of demand for home services.",
  },
  houston: {
    industries: ["energy and petrochemicals", "healthcare", "aerospace"],
    areas: ["Downtown", "The Heights", "Sugar Land", "Katy", "The Woodlands"],
    note: "Houston is the energy capital and one of the most diverse large cities in the US. Service businesses here compete in both English and Spanish search results.",
  },
  indianapolis: {
    industries: ["manufacturing", "logistics and distribution", "healthcare"],
    areas: ["Downtown", "Broad Ripple", "Carmel", "Fishers", "Greenwood"],
    note: "Indianapolis is a major logistics and distribution hub with a compact, driveable metro. Suburban service areas overlap heavily, so targeting needs to be precise to avoid cannibalising your own pages.",
  },
  jacksonville: {
    industries: ["logistics and port trade", "healthcare", "financial services"],
    areas: ["Downtown", "Riverside", "San Marco", "Beaches", "St. Johns County"],
    note: "Jacksonville is the largest city by area in the contiguous US, which means \"local\" search covers a very large radius and the map pack is less competitive per square mile than in denser metros.",
  },
  "los-angeles": {
    industries: ["entertainment and media", "technology", "international trade"],
    areas: ["Downtown", "Santa Monica", "Pasadena", "Glendale", "Long Beach"],
    note: "Los Angeles is not one market. It is dozens of neighbourhoods with their own search behaviour, and a business that serves \"LA\" in practice serves a handful of them. Pages that claim the whole metro rank for nothing.",
  },
  miami: {
    industries: ["tourism and hospitality", "international trade", "real estate"],
    areas: ["Brickell", "Wynwood", "Coral Gables", "Doral", "Miami Beach"],
    note: "Miami is a bilingual market where a large share of local searches happen in Spanish, and the customer base is heavily international. A US-only English site leaves most of the market on the table.",
  },
  "new-york": {
    industries: ["finance", "media and advertising", "technology"],
    areas: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
    note: "New York is five boroughs with five different competitive landscapes. Manhattan and Brooklyn in particular behave like separate cities for local search, and ranking in one does not carry over to the other.",
  },
  philadelphia: {
    industries: ["healthcare and education", "manufacturing", "financial services"],
    areas: ["Center City", "Fishtown", "Manayunk", "King of Prussia", "Cherry Hill"],
    note: "Philadelphia is a dense, neighbourhood-driven market where reputation in a specific area carries more weight than city-wide visibility. Reviews from named neighbourhoods convert better than generic metro reviews.",
  },
  phoenix: {
    industries: ["real estate and construction", "healthcare", "technology"],
    areas: ["Downtown", "Scottsdale", "Tempe", "Mesa", "Chandler"],
    note: "Phoenix is one of the fastest-growing large metros in the US, with a large share of recent movers. Recent movers search differently from long-term residents, which changes which keywords matter.",
  },
  "san-antonio": {
    industries: ["military and defence", "healthcare", "tourism"],
    areas: ["Downtown", "The Pearl", "Stone Oak", "Alamo Heights", "New Braunfels"],
    note: "San Antonio has a strong military and healthcare economy and a large Hispanic population. Local search demand reflects both, and the suburbs north of the city are a distinct market.",
  },
  "san-diego": {
    industries: ["defence and military", "biotech and life sciences", "tourism"],
    areas: ["Downtown", "La Jolla", "North County", "Chula Vista", "Carlsbad"],
    note: "San Diego combines a large defence and biotech economy with a tourism-driven coastal market. The two rarely overlap in search terms.",
  },
  "san-francisco": {
    industries: ["technology and software", "finance", "tourism"],
    areas: ["SoMa", "Mission", "Marina", "Oakland", "San Jose"],
    note: "San Francisco is a small city with an outsized search footprint because of its tech economy. A business targeting the Bay Area is really targeting several separate metros, and city pages need to reflect that.",
  },
  seattle: {
    industries: ["technology and aerospace", "maritime and logistics", "healthcare"],
    areas: ["Downtown", "Capitol Hill", "Bellevue", "Redmond", "Tacoma"],
    note: "Seattle's economy is dominated by a small number of very large technology employers, which creates a large population of well-paid professionals and a corresponding demand for premium home and professional services.",
  },
  toronto: {
    industries: ["financial services", "technology", "film and media"],
    areas: ["Downtown", "Yorkville", "North York", "Mississauga", "Vaughan"],
    note: "Toronto is Canada's largest market and a distinct search jurisdiction: Google.ca, different review platforms, and a bilingual population. Ranking there requires Canadian-specific work, not a copy of a US page.",
  },
};
