"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Send,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
  };

  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Security", "Enterprise", "API Docs"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "News", "Contact"],
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "Community", "Guides", "Webinars"],
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "GDPR",
        "Compliance",
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 relative overflow-hidden py-20 border-t border-gray-800/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm rounded-2xl p-10 lg:p-14 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-400 text-lg">
                Subscribe for updates, insights, and more.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full max-w-md"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-6 py-4 rounded-l-full bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 px-6 py-4 text-white font-medium rounded-r-full transition-all disabled:opacity-50"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={20} />
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-white text-2xl font-bold">ADmyBRAND</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Real stories of growth and success with our AI-powered solutions.
              Experience transformation and elevate your brand.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-purple-400" />{" "}
                hello@ADmyBRAND.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-purple-400" /> +1 (555)
                123-4567
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-purple-400" /> Banglore, India
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-semibold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800/40 pt-8 gap-6 text-sm text-gray-500">
          <div>© 2024 ADmyBRAND. All rights reserved.</div>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, color }, idx) => (
              <motion.a
                key={idx}
                href={href}
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/60 border border-gray-700/40 text-gray-400 ${color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
