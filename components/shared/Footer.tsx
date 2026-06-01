"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import Logo from "@/components/shared/Logo";

const footerLinks = {
  Solutions: [
    { label: "SEO Services", href: "/seo-pricing" },
    { label: "PPC Advertising", href: "/solutions/ppc" },
    { label: "Social Media Marketing", href: "/solutions/social-media" },
    { label: "Web Development", href: "/solutions/web-development" },
    { label: "Mobile App Development", href: "/solutions/mobile-app" },
    { label: "White Label Services", href: "/solutions/white-label" },
  ],
  Company: [
    { label: "About Us", href: "/company/about" },
    { label: "Our Team", href: "/company/team" },
    { label: "Careers", href: "/company/careers" },
    { label: "Contact", href: "/company/contact" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
  ],
  Resources: [
    { label: "AI Marketing Agency", href: "/ai-marketing" },
    { label: "Pricing", href: "/seo-pricing" },
    { label: "Resources", href: "/resources" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      {/* Newsletter */}
      <div className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Stay ahead of the curve</h3>
              <p className="text-gray-400 text-sm">Get digital marketing insights delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 bg-dark border border-dark-border text-white placeholder-gray-500 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-accent hover:bg-accent-light text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-5">
              <Logo size="md" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Award-winning digital marketing and IT services company helping brands dominate their markets through AI-powered strategies and white-label execution.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>info@wildrank.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Noida, India &amp; USA</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 bg-dark border border-dark-border rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-accent transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Wildrank Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
