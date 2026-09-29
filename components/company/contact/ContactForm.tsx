"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 border border-dark-border">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="space-y-5" action="https://formsubmit.co/info@wildranktechnologies.com" method="POST">
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Wildrank Technologies" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5" htmlFor="c-fname">First Name</label>
                    <input id="c-fname" name="First Name" type="text" required placeholder="John"
                      className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5" htmlFor="c-lname">Last Name</label>
                    <input id="c-lname" name="Last Name" type="text" required placeholder="Doe"
                      className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5" htmlFor="c-email">Email Address</label>
                  <input id="c-email" name="Email" type="email" required placeholder="john@company.com"
                    className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5" htmlFor="c-phone">Phone Number</label>
                  <input id="c-phone" name="Phone" type="tel" placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5" htmlFor="c-company">Company Name</label>
                  <input id="c-company" name="Company" type="text" placeholder="Your Company"
                    className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5" htmlFor="c-service">Service Interested In</label>
                  <select id="c-service" name="Service Interested In" required style={{ colorScheme: "dark" }}
                    className="w-full bg-[#111] border border-white/10 text-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select a service</option>
                    <option>Search Engine Optimization</option>
                    <option>PPC Management</option>
                    <option>Social Media Marketing</option>
                    <option>Digital Marketing</option>
                    <option>Local SEO</option>
                    <option>Content Marketing</option>
                    <option>Email Marketing</option>
                    <option>Mobile Marketing</option>
                    <option>White Label Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5" htmlFor="c-budget">Monthly Budget</label>
                  <select id="c-budget" name="Monthly Budget" style={{ colorScheme: "dark" }}
                    className="w-full bg-[#111] border border-white/10 text-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select budget range</option>
                    <option>Under $500/mo</option>
                    <option>$500 – $1,000/mo</option>
                    <option>$1,000 – $2,500/mo</option>
                    <option>$2,500 – $5,000/mo</option>
                    <option>$5,000+/mo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5" htmlFor="c-message">Message</label>
                  <textarea id="c-message" name="Message" rows={4} required placeholder="Tell us about your project and goals..."
                    className="w-full bg-[#111] border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-accent/20">
                  Send Message <ArrowRight className="w-4 h-4" />
                </motion.button>
                <p className="text-xs text-gray-600 text-center">We respond within 24 hours. No spam, ever.</p>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 border border-dark-border">
              <h3 className="text-white font-bold mb-4">Office Locations</h3>
              <div className="space-y-4">
                {[
                  { city: "Noida, India", address: "Sector 63, Noida, UP 201301", flag: "🇮🇳" },
                  { city: "Sheridan, USA", address: "30 N Gould St, WY 82801", flag: "🇺🇸" },
                  { city: "London, UK", address: "71-75 Shelton Street, WC2H 9JQ", flag: "🇬🇧" },
                ].map((loc) => (
                  <div key={loc.city} className="flex items-start gap-3">
                    <span className="text-xl">{loc.flag}</span>
                    <div>
                      <p className="text-white text-sm font-semibold">{loc.city}</p>
                      <p className="text-gray-500 text-xs">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-6 border border-dark-border">
              <h3 className="text-white font-bold mb-4">Direct Contact</h3>
              <div className="space-y-3">
                <a href="mailto:info@wildranktechnologies.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-accent" /> info@wildranktechnologies.com
                </a>
                <a href="tel:+13072150728" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-accent" /> +1 (307) 215-0728
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-accent" /> Noida, India & USA
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 border border-dark-border">
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Facebook, label: "Facebook" },
                ].map(({ icon: Icon, label }) => (
                  <motion.a key={label} href="#" aria-label={label} whileHover={{ scale: 1.15, y: -2 }}
                    className="w-10 h-10 bg-[#111] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-colors">
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
