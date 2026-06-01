"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  MousePointerClick,
  Share2,
  Globe,
  Smartphone,
  Layers,
  Code2,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    description:
      "AI-powered search engine optimization that drives organic traffic and improves rankings across all major search engines.",
    iconColor: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    tags: ["Technical SEO", "Link Building", "Content Strategy"],
  },
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    description:
      "Data-driven pay-per-click campaigns on Google, Bing, and social platforms that maximize ROI and minimize wasted spend.",
    iconColor: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    tags: ["Google Ads", "Bing Ads", "Retargeting"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Strategic social media management and paid campaigns that build brand awareness and drive meaningful engagement.",
    iconColor: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    tags: ["Meta Ads", "LinkedIn", "Content Creation"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom, high-performance websites and web applications built with modern technologies and optimized for conversions.",
    iconColor: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    tags: ["React / Next.js", "E-Commerce", "CMS"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
    iconColor: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    tags: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    icon: Layers,
    title: "White Label Services",
    description:
      "Fully managed white-label digital marketing and development services for agencies looking to scale without overhead.",
    iconColor: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    tags: ["Agency Partner", "Reseller", "Managed"],
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "End-to-end custom software solutions, SaaS platforms, and enterprise applications tailored to your business needs.",
    iconColor: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    tags: ["SaaS", "Enterprise", "API Integration"],
  },
  {
    icon: BarChart3,
    title: "IT Outsourcing",
    description:
      "Dedicated development teams and IT outsourcing solutions that save up to 60% in costs while maintaining quality.",
    iconColor: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    tags: ["Dedicated Teams", "Staff Aug", "Cost Saving"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-gradient py-24">
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
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Full-Spectrum Digital{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From strategy to execution, we cover every aspect of your digital growth — under one roof.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass-card rounded-2xl p-6 border ${service.border} cursor-pointer group transition-all duration-300 hover:shadow-xl`}
              >
                <div
                  className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>

                <h3 className="text-white font-bold text-base mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all duration-200"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
