"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const categories = ["All", "SEO", "PPC", "Social Media", "Web Dev", "Mobile App"];

const caseStudies = [
  {
    title: "E-Commerce Brand Grows Organic Traffic by 340%",
    client: "FashionRetail Inc.",
    category: "SEO",
    industry: "E-Commerce",
    duration: "6 months",
    results: [{ metric: "Organic Traffic", value: "+340%" }, { metric: "Revenue", value: "+$2.4M" }, { metric: "Keywords on Page 1", value: "180+" }],
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "Healthcare Clinic Reduces Cost Per Lead by 58%",
    client: "MedPlus Clinics",
    category: "PPC",
    industry: "Healthcare",
    duration: "3 months",
    results: [{ metric: "Cost Per Lead", value: "−58%" }, { metric: "Leads/Month", value: "+220%" }, { metric: "ROAS", value: "7.2x" }],
    color: "from-green-500 to-green-700",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    title: "SaaS Platform Achieves 340% Trial Signup Growth",
    client: "GrowthStack SaaS",
    category: "PPC",
    industry: "SaaS",
    duration: "4 months",
    results: [{ metric: "Trial Signups", value: "+340%" }, { metric: "CAC Reduced", value: "−45%" }, { metric: "MRR Growth", value: "+$180K" }],
    color: "from-purple-500 to-purple-700",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    title: "Real Estate Agency Doubles Qualified Leads",
    client: "PrimeProperty Group",
    category: "SEO",
    industry: "Real Estate",
    duration: "8 months",
    results: [{ metric: "Qualified Leads", value: "+220%" }, { metric: "Organic Traffic", value: "+280%" }, { metric: "Listings Sold", value: "+65%" }],
    color: "from-orange-500 to-orange-700",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    title: "Restaurant Chain Builds 50K Social Following",
    client: "TasteBuds Restaurants",
    category: "Social Media",
    industry: "Food & Beverage",
    duration: "5 months",
    results: [{ metric: "Followers Gained", value: "50K+" }, { metric: "Engagement Rate", value: "+185%" }, { metric: "Foot Traffic", value: "+42%" }],
    color: "from-pink-500 to-pink-700",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    title: "EdTech Platform Launches App with 50K Users",
    client: "EduLearn Platform",
    category: "Mobile App",
    industry: "Education",
    duration: "7 months",
    results: [{ metric: "Active Users", value: "50K+" }, { metric: "App Store Rating", value: "4.8★" }, { metric: "Daily Sessions", value: "120K+" }],
    color: "from-cyan-500 to-cyan-700",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    title: "Finance Brand Achieves 12x ROAS on Google Ads",
    client: "WealthWise Finance",
    category: "PPC",
    industry: "Finance",
    duration: "3 months",
    results: [{ metric: "ROAS", value: "12x" }, { metric: "Conversions", value: "+310%" }, { metric: "CPC Reduced", value: "−38%" }],
    color: "from-yellow-500 to-yellow-700",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    title: "Travel Agency Rebuilds Website, Bookings Up 89%",
    client: "WanderWorld Travel",
    category: "Web Dev",
    industry: "Travel",
    duration: "3 months",
    results: [{ metric: "Online Bookings", value: "+89%" }, { metric: "Page Speed", value: "98/100" }, { metric: "Bounce Rate", value: "−52%" }],
    color: "from-teal-500 to-teal-700",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
  {
    title: "Automotive Dealer Dominates Local SEO",
    client: "DriveFirst Auto",
    category: "SEO",
    industry: "Automotive",
    duration: "6 months",
    results: [{ metric: "Local Rankings", value: "#1 in 12 cities" }, { metric: "Showroom Visits", value: "+78%" }, { metric: "Test Drive Leads", value: "+145%" }],
    color: "from-red-500 to-red-700",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
];

export default function CaseStudiesGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? caseStudies : caseStudies.filter((c) => c.category === active);

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-accent text-white"
                  : "glass-card border border-dark-border text-gray-400 hover:text-white hover:border-primary/30"
              }`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((cs) => (
              <motion.div key={cs.title} layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }} whileHover={{ y: -6 }}
                className={`glass-card rounded-2xl border ${cs.border} overflow-hidden group cursor-pointer`}>
                {/* Header */}
                <div className={`h-2 bg-gradient-to-r ${cs.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cs.bg} ${cs.color.replace("from-", "text-").split(" ")[0]}`}>
                      {cs.category}
                    </span>
                    <span className="text-xs text-gray-500">{cs.industry}</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-1 leading-snug">{cs.title}</h3>
                  <p className="text-gray-500 text-xs mb-4">{cs.client} · {cs.duration}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {cs.results.map((r) => (
                      <div key={r.metric} className="text-center">
                        <p className={`text-sm font-extrabold ${cs.color.replace("from-", "text-").split(" ")[0]}`}>{r.value}</p>
                        <p className="text-gray-600 text-xs leading-tight mt-0.5">{r.metric}</p>
                      </div>
                    ))}
                  </div>

                  <a href="/contact"
                    className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all duration-200">
                    <TrendingUp className="w-3.5 h-3.5" /> Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
