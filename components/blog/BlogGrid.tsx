"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";

const categories = ["All", "SEO", "PPC", "Social Media", "Web Dev", "AI Marketing"];

const posts = [
  { title: "10 SEO Trends That Will Dominate in 2025", category: "SEO", author: "Vikram Patel", readTime: "8 min", date: "May 28, 2025", excerpt: "From AI-generated search results to zero-click queries, here are the SEO shifts every marketer needs to prepare for.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { title: "How to Cut Your Google Ads Cost Per Lead by 50%", category: "PPC", author: "Ananya Roy", readTime: "6 min", date: "May 22, 2025", excerpt: "Practical bid strategies, negative keyword tactics, and landing page optimizations that dramatically reduce CPL.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { title: "The Complete Guide to LinkedIn B2B Advertising", category: "Social Media", author: "Rohan Gupta", readTime: "10 min", date: "May 15, 2025", excerpt: "Step-by-step guide to running LinkedIn campaigns that generate qualified B2B leads at scale.", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { title: "Core Web Vitals: What Developers Need to Know in 2025", category: "Web Dev", author: "Aditya Kumar", readTime: "7 min", date: "May 10, 2025", excerpt: "Google's page experience signals are evolving. Here's how to keep your site scoring in the green.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { title: "How AI is Changing Keyword Research Forever", category: "AI Marketing", author: "Kavya Nair", readTime: "9 min", date: "May 5, 2025", excerpt: "AI tools are uncovering keyword opportunities that traditional research methods completely miss.", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  { title: "Local SEO in 2025: The Definitive Playbook", category: "SEO", author: "Vikram Patel", readTime: "12 min", date: "Apr 28, 2025", excerpt: "Everything you need to dominate local search — from Google Business Profile to geo-targeted content.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { title: "Meta Ads vs Google Ads: Which Drives Better ROI?", category: "PPC", author: "Ananya Roy", readTime: "8 min", date: "Apr 20, 2025", excerpt: "A data-driven comparison of both platforms across 50+ campaigns to help you allocate budget smarter.", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  { title: "Building a Content Strategy That Actually Ranks", category: "SEO", author: "Kavya Nair", readTime: "11 min", date: "Apr 14, 2025", excerpt: "How to build a content calendar aligned with search intent, topical authority, and business goals.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { title: "React Native vs Flutter: Which to Choose in 2025", category: "Web Dev", author: "Shreya Joshi", readTime: "7 min", date: "Apr 8, 2025", excerpt: "An honest comparison of both frameworks covering performance, ecosystem, and developer experience.", color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20" },
];

export default function BlogGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === cat ? "bg-accent text-white" : "glass-card border border-dark-border text-gray-400 hover:text-white hover:border-primary/30"
              }`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article key={post.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ y: -6 }}
              className={`glass-card rounded-2xl border ${post.border} overflow-hidden group cursor-pointer`}>
              {/* Color bar */}
              <div className={`h-1.5 bg-gradient-to-r ${post.color.replace("text-", "from-")} to-transparent`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.bg} ${post.color}`}>{post.category}</span>
                  <span className="text-xs text-gray-600">{post.date}</span>
                </div>
                <h2 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-accent transition-colors">{post.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all duration-200">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12">
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="border border-dark-border hover:border-primary/40 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 glass-card">
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
