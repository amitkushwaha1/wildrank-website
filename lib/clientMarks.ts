/**
 * Client wall — the logos the homepage "Trusted by" band renders.
 *
 * ⚠ THIS LIST IS NOT YET A CLIENT LIST. It is a set of real company marks,
 * gathered so the band can be reviewed at the size it actually runs at.
 * Every entry asserts a commercial relationship, so it must be replaced by
 * the real, permissioned list before the site is published.
 *
 * TO REPLACE: this array is the only input — the wall renders exactly what is
 * here. Drop the real logos into public/clients/ (any format an <img> can
 * display, colour or mono, any aspect) and point `file` at each. Nothing
 * else needs touching. Files with a near-1:1 aspect hold the tile shape
 * best; the tile sizes the mark to 24px tall and lets the width follow.
 *
 * `region` is what keeps the list honest about where the work actually is.
 * The wall draws from both rows in both markets, so a reader sees the mix
 * rather than one row per country. US currently leads 26–6.
 *
 * The list is weighted towards US mid-market names rather than only the
 * biggest vendors, because a wall of Fortune-100 marks on a young agency
 * site invites exactly the question it is meant to answer. Six of the US
 * entries are deliberately mid-sized.
 */
export interface ClientMark {
  name: string;
  /** Path under /public. */
  file: string;
  region: "us" | "in";
}

export const clientMarks: ClientMark[] = [
  { name: "Google", file: "/clients/google.svg", region: "us" },
  { name: "YETI", file: "/clients/yeti.svg", region: "us" },
  { name: "Tata", file: "/clients/tata.svg", region: "in" },
  { name: "Etsy", file: "/clients/etsy.svg", region: "us" },
  { name: "Cisco", file: "/clients/cisco.svg", region: "us" },
  { name: "Yelp", file: "/clients/yelp.svg", region: "us" },
  { name: "Infosys", file: "/clients/infosys.svg", region: "in" },
  { name: "Tripadvisor", file: "/clients/tripadvisor.svg", region: "us" },
  { name: "SAP", file: "/clients/sap.svg", region: "us" },
  { name: "Mailchimp", file: "/clients/mailchimp.svg", region: "us" },
  { name: "Wipro", file: "/clients/wipro.svg", region: "in" },
  { name: "HubSpot", file: "/clients/hubspot.svg", region: "us" },
  { name: "Intel", file: "/clients/intel.svg", region: "us" },
  { name: "Calendly", file: "/clients/calendly.svg", region: "us" },
  { name: "Zomato", file: "/clients/zomato.svg", region: "in" },
  { name: "Zapier", file: "/clients/zapier.svg", region: "us" },
  { name: "NVIDIA", file: "/clients/nvidia.svg", region: "us" },
  { name: "WP Engine", file: "/clients/wpengine.svg", region: "us" },
  { name: "Paytm", file: "/clients/paytm.svg", region: "in" },
  { name: "GoDaddy", file: "/clients/godaddy.svg", region: "us" },
  { name: "Dell", file: "/clients/dell.svg", region: "us" },
  { name: "AutoZone", file: "/clients/autozone.svg", region: "us" },
  { name: "Mahindra", file: "/clients/mahindra.svg", region: "in" },
  { name: "Macy's", file: "/clients/macys.svg", region: "us" },
  { name: "Accenture", file: "/clients/accenture.svg", region: "us" },
  { name: "Squarespace", file: "/clients/squarespace.svg", region: "us" },
  { name: "Roku", file: "/clients/roku.svg", region: "us" },
  { name: "Siemens", file: "/clients/siemens.svg", region: "us" },
  { name: "Unilever", file: "/clients/unilever.svg", region: "us" },
  { name: "Coca-Cola", file: "/clients/coca-cola.svg", region: "us" },
  { name: "Samsung", file: "/clients/samsung.svg", region: "us" },
  { name: "FedEx", file: "/clients/fedex.svg", region: "us" },
];
