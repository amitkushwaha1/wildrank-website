# WildRank — Programmatic SEO Expansion Plan

Status: approved by owner, 2026-10-14. Metrics below are owner-verified.
Phone: **+1-775-471-5295** (replaces the 363-222-1815 currently in schema).

---

## 1. The cannibalization problem, and how this avoids it

The naive build — 41 locations × 4 services — creates real duplication because
two page families want the same keywords.

**Existing (20):** `/denver-seo-company` → *"denver seo company"*, *"denver seo firm"*
**Naive plan (164):** `/locations/us/denver/geo-aeo-services` → also *"denver seo"*

Same intent, two URLs, Google picks one and the other dies.

### The rule

Each page family owns a **distinct primary keyword**. No page is allowed to
target a head term another page family already owns.

| Page family | Owns | Never targets |
|---|---|---|
| `/<city>-seo-company` (existing 20) | `<city> seo company`, `<city> seo firm`, `<city> seo consulting`, `<city> local seo` | any service-product term |
| `/locations/<country>/<city>/hermes-ai-system` | `hermes ai system <city>`, `ai call agent <city>` | `<city> seo company` |
| `/locations/<country>/<city>/ai-receptionist` | `ai receptionist <city>`, `missed call text back <city>` | `<city> seo company` |
| `/locations/<country>/<city>/geo-aeo-services` | `geo agency <city>`, `aeo <city>`, `ai visibility <city>` | `<city> seo company` |
| `/locations/<country>/<city>/white-label-agency` | `white label seo <city>`, `outsourced marketing team <city>` | `<city> seo company` |
| `/industries/<industry>/<service>` | `<service> for <industry>` | any `<city>` term |

Every URL has exactly one home. Cross-linking is one-directional: city SEO page
links down to its service pages, never the reverse.

---

## 2. Scale, with the duplication removed

```
existing city SEO pages           20   (unchanged)
locations x services             41 x 4 = 164
industries x services              7 x 4 =  28
new service landing pages          4
geo-aeo services page              1
link-building rewrite              1
                                     ---
new URLs                          198
```

The 21 locations with no existing city page get all four service pages. The 20
that have one **keep it** and still get their four — under a different keyword.

---

## 3. Owner-verified metrics — the only figures used

| Claim | Value |
|---|---|
| Leads captured in 30 days | **34** |
| Monthly revenue recovered | **$22,000** |
| More bookings | **52%** |
| Setup price | **$499** |
| Inbound calls unanswered | **57%** |

These appear only in the service-page context they belong to. They are **not**
copied into city SEO pages or industry pages, which keeps them scarce rather
than wallpapered across 198 pages.

---

## 4. Build order

1. **Phone swap** — one constant, applied to layout + LocationPage + new pages
2. **Service landing pages** (4) — the parent pages everything links to
3. **Industry pages** (28) — highest intent, fewest, prove the template
4. **Location × service pages** (164) — the bulk, last, after the pattern is proven
5. **Link building rewrite** — existing page at zero impressions

Building in this order means each layer is verified before the next multiplies it.

---

## 5. Schema

Reuse the working pattern in `components/locations/LocationPage.tsx`:
valid `https://schema.org` context, `@id` anchoring, one `@graph` per page.

- Service pages → `Service` + `FAQPage`
- Location pages → `ProfessionalService` (areaServed city) + `FAQPage`
- Industry pages → `Service` + `FAQPage`

**No `sameAs` entries** until the profiles actually exist. LinkedIn and GitHub
return 404 today, verified. Adding them would be structured-data spam.

**No `logo`/`image` fields** pointing at files that don't exist. Assets get added
when we do the visual pass, and the fields go in then.

---

## 6. What I am not doing

- **192 templated thin pages in one deploy.** 198 is the ceiling, not the floor.
  Each phase ships, gets indexed, and is measured before the next.
- **Copy-pasting the same 400 words 198 times.** Each location page gets content
  specific to that city and service. If the template is visible, the page is
  rewritten, not patched.
- **Reusing "34 leads" on every page.** Scarcity reads as truth; repetition reads
  as a template.

---

## 7. Measurement

Baseline, recorded before this work:

```
4,608 non-brand impressions / 0 clicks / 180 days
65 queries at positions 4-20
denver seo firm  290 impressions  pos 9.2  CTR 0.00%
```

Success is not "more pages indexed." It is the first non-brand click, and
queries moving out of positions 4-20.