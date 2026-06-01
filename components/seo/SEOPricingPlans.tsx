"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, DollarSign, ChevronDown, ChevronUp, Zap } from "lucide-react";

type FeatureValue = boolean | string | number;

interface Plan {
  name: string;
  price: number;
  keywords: number;
  backlinks: number;
  landingPages: number;
  gmb: boolean;
  badge?: string;
  color: string;
  borderColor: string;
  glowColor: string;
  features: Record<string, Record<string, FeatureValue>>;
}

const plans: Plan[] = [
  {
    name: "Silver",
    price: 499,
    keywords: 30,
    backlinks: 50,
    landingPages: 10,
    gmb: false,
    color: "from-slate-400 to-slate-600",
    borderColor: "border-slate-500/30",
    glowColor: "shadow-slate-500/10",
    features: {
      "SEO Analysis": {
        "Pre-Optimization Website Analysis": true,
        "Competitor Analysis": true,
        "Keyword Research & Analysis": true,
        "Baseline Ranking Check": true,
        "Duplicate Content Check": true,
        "Google Penalty Check": true,
        "Backlink Analysis": false,
      },
      "On-Page Optimization": {
        "Website Canonical Check": true,
        "Title Tag Optimization": true,
        "META Tags Optimization": true,
        "Heading Tags Optimization": false,
        "Image Alt Tags Optimization": true,
        "Content Optimization": true,
        "SEO Friendly URL Setup": true,
        "Site Navigation Analysis": false,
        "404 Page Implementation": true,
        "Broken Links Check": false,
        "Website Speed Check": true,
        "Google Indexed Pages Check": true,
        "Robots.txt Creation": true,
        "Google XML Sitemap": true,
        "HTML Sitemap Setup": true,
        "Google Webmaster Tools Setup": true,
        "Google Analytics Setup": true,
        "Structured Data Setup": false,
        "On Site Blog Posting (from Month 3)": "3/mo",
        "Keyword Mapping & Internal Linking": true,
      },
      "GEO Tagging & AEO": {
        "Geotagging & Local SEO": false,
        "Answer Engine Optimization (AEO)": false,
        "Featured Snippet Optimization": false,
        "GEO SEO Strategy": false,
        "City/Region Landing Pages": false,
        "Geo-targeted Keywords": false,
        "Localized Link Building": false,
        "Geo-based Analytics Tracking": false,
      },
      "Off-Page Optimization": {
        "Search Engine Submission": true,
        "Article Writing & Posting": true,
        "Business Listing": true,
        "Blog Writing & Posting": true,
        "Image Sharing": true,
        "PPT Submissions": true,
        "Social Bookmarking": true,
        "PDF Sharing": true,
        "Profile Creation": true,
        "Quora Answering": true,
        "Infographic Creation": true,
        "Video Marketing": true,
        "Press Release (Client Provides)": true,
        "Guest Blog Outreach": "Paid Add-on",
        "Premium Press Release": "Paid Add-on",
      },
      "SMO Activities": {
        "Facebook Page Creation & Posting": false,
        "Instagram Business Profile": false,
        "LinkedIn Profile & Posting": false,
        "Pinterest Profile & Sharing": false,
        "Twitter Profile & Posting": false,
        "Social Bookmarking Links": "15",
        "Micro Blogging": "4",
      },
      "Reports & Support": {
        "Monthly Analytics Report": true,
        "Monthly Keyword Ranking Report": true,
        "Monthly Off-Page Report": true,
        "Email Support": true,
        "Phone Support": true,
        "Chat Support": true,
      },
    },
  },
  {
    name: "Gold",
    price: 699,
    keywords: 40,
    backlinks: 70,
    landingPages: 15,
    gmb: true,
    color: "from-yellow-400 to-yellow-600",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/10",
    features: {
      "SEO Analysis": {
        "Pre-Optimization Website Analysis": true,
        "Competitor Analysis": true,
        "Keyword Research & Analysis": true,
        "Baseline Ranking Check": true,
        "Duplicate Content Check": true,
        "Google Penalty Check": true,
        "Backlink Analysis": false,
      },
      "On-Page Optimization": {
        "Website Canonical Check": true,
        "Title Tag Optimization": true,
        "META Tags Optimization": true,
        "Heading Tags Optimization": false,
        "Image Alt Tags Optimization": true,
        "Content Optimization": true,
        "SEO Friendly URL Setup": true,
        "Site Navigation Analysis": false,
        "404 Page Implementation": true,
        "Broken Links Check": false,
        "Website Speed Check": true,
        "Google Indexed Pages Check": true,
        "Robots.txt Creation": true,
        "Google XML Sitemap": true,
        "HTML Sitemap Setup": true,
        "Google Webmaster Tools Setup": true,
        "Google Analytics Setup": true,
        "Structured Data Setup": false,
        "On Site Blog Posting (from Month 3)": "5/mo",
        "Keyword Mapping & Internal Linking": true,
      },
      "GEO Tagging & AEO": {
        "Geotagging & Local SEO": true,
        "Answer Engine Optimization (AEO)": true,
        "Featured Snippet Optimization": true,
        "GEO SEO Strategy": false,
        "City/Region Landing Pages": false,
        "Geo-targeted Keywords": false,
        "Localized Link Building": false,
        "Geo-based Analytics Tracking": false,
      },
      "Off-Page Optimization": {
        "Search Engine Submission": true,
        "Article Writing & Posting": true,
        "Business Listing": true,
        "Blog Writing & Posting": true,
        "Image Sharing": true,
        "PPT Submissions": true,
        "Social Bookmarking": true,
        "PDF Sharing": true,
        "Profile Creation": true,
        "Quora Answering": true,
        "Infographic Creation": true,
        "Video Marketing": true,
        "Press Release (Client Provides)": true,
        "Guest Blog Outreach": "Paid Add-on",
        "Premium Press Release": "Paid Add-on",
      },
      "SMO Activities": {
        "Facebook Page Creation & Posting": true,
        "Instagram Business Profile": true,
        "LinkedIn Profile & Posting": true,
        "Pinterest Profile & Sharing": true,
        "Twitter Profile & Posting": true,
        "Social Bookmarking Links": "25",
        "Micro Blogging": "6",
      },
      "Reports & Support": {
        "Monthly Analytics Report": true,
        "Monthly Keyword Ranking Report": true,
        "Monthly Off-Page Report": true,
        "Email Support": true,
        "Phone Support": true,
        "Chat Support": true,
      },
    },
  },
  {
    name: "Platinum",
    price: 999,
    keywords: 50,
    backlinks: 150,
    landingPages: 20,
    gmb: true,
    badge: "Most Popular",
    color: "from-blue-400 to-blue-600",
    borderColor: "border-blue-500/40",
    glowColor: "shadow-blue-500/20",
    features: {
      "SEO Analysis": {
        "Pre-Optimization Website Analysis": true,
        "Competitor Analysis": true,
        "Keyword Research & Analysis": true,
        "Baseline Ranking Check": true,
        "Duplicate Content Check": true,
        "Google Penalty Check": true,
        "Backlink Analysis": false,
      },
      "On-Page Optimization": {
        "Website Canonical Check": true,
        "Title Tag Optimization": true,
        "META Tags Optimization": true,
        "Heading Tags Optimization": false,
        "Image Alt Tags Optimization": true,
        "Content Optimization": true,
        "SEO Friendly URL Setup": true,
        "Site Navigation Analysis": false,
        "404 Page Implementation": true,
        "Broken Links Check": false,
        "Website Speed Check": true,
        "Google Indexed Pages Check": true,
        "Robots.txt Creation": true,
        "Google XML Sitemap": true,
        "HTML Sitemap Setup": true,
        "Google Webmaster Tools Setup": true,
        "Google Analytics Setup": true,
        "Structured Data Setup": false,
        "On Site Blog Posting (from Month 3)": "10/mo",
        "Keyword Mapping & Internal Linking": true,
      },
      "GEO Tagging & AEO": {
        "Geotagging & Local SEO": true,
        "Answer Engine Optimization (AEO)": true,
        "Featured Snippet Optimization": true,
        "GEO SEO Strategy": false,
        "City/Region Landing Pages": true,
        "Geo-targeted Keywords": true,
        "Localized Link Building": false,
        "Geo-based Analytics Tracking": false,
      },
      "Off-Page Optimization": {
        "Search Engine Submission": true,
        "Article Writing & Posting": true,
        "Business Listing": true,
        "Blog Writing & Posting": true,
        "Image Sharing": true,
        "PPT Submissions": true,
        "Social Bookmarking": true,
        "PDF Sharing": true,
        "Profile Creation": true,
        "Quora Answering": true,
        "Infographic Creation": true,
        "Video Marketing": true,
        "Press Release (Client Provides)": true,
        "Guest Blog Outreach": "Paid Add-on",
        "Premium Press Release": "Paid Add-on",
      },
      "SMO Activities": {
        "Facebook Page Creation & Posting": true,
        "Instagram Business Profile": true,
        "LinkedIn Profile & Posting": true,
        "Pinterest Profile & Sharing": true,
        "Twitter Profile & Posting": true,
        "Social Bookmarking Links": "45",
        "Micro Blogging": "10",
      },
      "Reports & Support": {
        "Monthly Analytics Report": true,
        "Monthly Keyword Ranking Report": true,
        "Monthly Off-Page Report": true,
        "Email Support": true,
        "Phone Support": true,
        "Chat Support": true,
      },
    },
  },
  {
    name: "Diamond",
    price: 1799,
    keywords: 100,
    backlinks: 200,
    landingPages: 25,
    gmb: true,
    color: "from-cyan-400 to-purple-600",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/10",
    features: {
      "SEO Analysis": {
        "Pre-Optimization Website Analysis": true,
        "Competitor Analysis": true,
        "Keyword Research & Analysis": true,
        "Baseline Ranking Check": true,
        "Duplicate Content Check": true,
        "Google Penalty Check": true,
        "Backlink Analysis": true,
      },
      "On-Page Optimization": {
        "Website Canonical Check": true,
        "Title Tag Optimization": true,
        "META Tags Optimization": true,
        "Heading Tags Optimization": true,
        "Image Alt Tags Optimization": true,
        "Content Optimization": true,
        "SEO Friendly URL Setup": true,
        "Site Navigation Analysis": true,
        "404 Page Implementation": true,
        "Broken Links Check": true,
        "Website Speed Check": true,
        "Google Indexed Pages Check": true,
        "Robots.txt Creation": true,
        "Google XML Sitemap": true,
        "HTML Sitemap Setup": true,
        "Google Webmaster Tools Setup": true,
        "Google Analytics Setup": true,
        "Structured Data Setup": true,
        "On Site Blog Posting (from Month 3)": "20/mo",
        "Keyword Mapping & Internal Linking": true,
      },
      "GEO Tagging & AEO": {
        "Geotagging & Local SEO": true,
        "Answer Engine Optimization (AEO)": true,
        "Featured Snippet Optimization": true,
        "GEO SEO Strategy": true,
        "City/Region Landing Pages": true,
        "Geo-targeted Keywords": true,
        "Localized Link Building": true,
        "Geo-based Analytics Tracking": true,
      },
      "Off-Page Optimization": {
        "Search Engine Submission": true,
        "Article Writing & Posting": true,
        "Business Listing": true,
        "Blog Writing & Posting": true,
        "Image Sharing": true,
        "PPT Submissions": true,
        "Social Bookmarking": true,
        "PDF Sharing": true,
        "Profile Creation": true,
        "Quora Answering": true,
        "Infographic Creation": true,
        "Video Marketing": true,
        "Press Release (Client Provides)": true,
        "Guest Blog Outreach": "Paid Add-on",
        "Premium Press Release": "Paid Add-on",
      },
      "SMO Activities": {
        "Facebook Page Creation & Posting": true,
        "Instagram Business Profile": true,
        "LinkedIn Profile & Posting": true,
        "Pinterest Profile & Sharing": true,
        "Twitter Profile & Posting": true,
        "Social Bookmarking Links": "Unlimited",
        "Micro Blogging": "Unlimited",
      },
      "Reports & Support": {
        "Monthly Analytics Report": true,
        "Monthly Keyword Ranking Report": true,
        "Monthly Off-Page Report": true,
        "Email Support": true,
        "Phone Support": true,
        "Chat Support": true,
      },
    },
  },
];

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true)
    return <Check className="w-4 h-4 text-green-400 mx-auto" />;
  if (value === false)
    return <X className="w-4 h-4 text-gray-600 mx-auto" />;
  if (value === "Paid Add-on")
    return (
      <span className="flex items-center justify-center gap-0.5 text-yellow-400 text-xs font-semibold">
        <DollarSign className="w-3 h-3" />Add-on
      </span>
    );
  return <span className="text-xs text-accent font-semibold">{value}</span>;
}

export default function SEOPricingPlans() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "SEO Analysis": true,
    "On-Page Optimization": true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const allSections = Object.keys(plans[0].features);

  return (
    <section id="plans" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            SEO Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Choose the Right <span className="gradient-text">SEO Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            All plans include a dedicated SEO manager, monthly reports, and full transparency. Scale up anytime.
          </p>
        </motion.div>

        {/* Plan header cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 border ${plan.borderColor} relative ${
                plan.badge ? `shadow-xl ${plan.glowColor}` : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    <Zap className="w-3 h-3" /> {plan.badge}
                  </span>
                </div>
              )}

              <div className={`text-lg font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-1`}>
                {plan.name}
              </div>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-3xl font-extrabold text-white">${plan.price}</span>
                <span className="text-gray-500 text-sm mb-1">/mo</span>
              </div>

              <div className="space-y-2 mb-5 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Keywords</span>
                  <span className="text-white font-semibold">{plan.keywords}</span>
                </div>
                <div className="flex justify-between">
                  <span>Backlinks/mo</span>
                  <span className="text-white font-semibold">{plan.backlinks}</span>
                </div>
                <div className="flex justify-between">
                  <span>Landing Pages</span>
                  <span className="text-white font-semibold">{plan.landingPages}</span>
                </div>
                <div className="flex justify-between">
                  <span>Google My Business</span>
                  <span>{plan.gmb ? <Check className="w-3.5 h-3.5 text-green-400 inline" /> : <X className="w-3.5 h-3.5 text-gray-600 inline" />}</span>
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all ${
                  plan.badge
                    ? "bg-accent hover:bg-accent-light text-white"
                    : "border border-dark-border hover:border-primary/50 text-gray-300 hover:text-white"
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Feature comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 glass-card rounded-2xl border border-dark-border overflow-hidden"
        >
          {allSections.map((section) => (
            <div key={section} className="border-b border-dark-border last:border-0">
              {/* Section header */}
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-sm font-bold text-white uppercase tracking-wider">{section}</span>
                {openSections[section] ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openSections[section] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    {/* Column headers (sticky on scroll) */}
                    <div className="grid grid-cols-5 border-b border-dark-border bg-dark-card">
                      <div className="px-6 py-2 text-xs text-gray-600 font-medium">Feature</div>
                      {plans.map((p) => (
                        <div
                          key={p.name}
                          className={`px-2 py-2 text-center text-xs font-bold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}
                        >
                          {p.name}
                        </div>
                      ))}
                    </div>

                    {/* Feature rows */}
                    {Object.entries(plans[0].features[section]).map(([feature], fi) => (
                      <div
                        key={feature}
                        className={`grid grid-cols-5 border-b border-dark-border/50 last:border-0 ${
                          fi % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"
                        }`}
                      >
                        <div className="px-6 py-3 text-sm text-gray-400">{feature}</div>
                        {plans.map((plan) => (
                          <div key={plan.name} className="px-2 py-3 flex items-center justify-center">
                            <FeatureCell value={plan.features[section][feature]} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Custom plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 glass-card rounded-2xl p-8 border border-accent/20 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-2">Need a Custom Plan?</h3>
          <p className="text-gray-400 mb-5 max-w-xl mx-auto">
            Enterprise brands and agencies get custom pricing with dedicated resources, white-label options, and priority support.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
          >
            Talk to Sales
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
