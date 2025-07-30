"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, Calculator } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1); // Open second FAQ by default

  const faqs = [
    {
      id: 0,
      question:
        "What makes ADmyBRAND different from other AI marketing platforms?",
      answer:
        "ADmyBRAND combines cutting-edge AI technology with deep brand intelligence to deliver hyper-personalized experiences. Our platform uses advanced machine learning algorithms to analyze consumer behavior, predict market trends, and optimize campaigns in real-time, providing unprecedented ROI for your brand investments.",
    },
    {
      id: 1,
      question: "How quickly can I see results with ADmyBRAND AI?",
      answer:
        "Most brands see significant improvements within the first 30 days. Our AI algorithms begin optimizing your campaigns immediately, with initial insights available within 24-48 hours. Full optimization typically occurs within 60-90 days as our system learns your brand's unique patterns and audience behaviors.",
    },
    {
      id: 2,
      question:
        "Is ADmyBRAND suitable for small businesses or just enterprises?",
      answer:
        "ADmyBRAND is designed to scale with businesses of all sizes. Our Brand Starter plan is perfect for small businesses and startups, while our Enterprise solution serves Fortune 500 companies. The AI adapts to your budget, goals, and complexity requirements.",
    },
    {
      id: 3,
      question:
        "How does ADmyBRAND protect my brand data and customer information?",
      answer:
        "Security is our top priority. We use enterprise-grade encryption, comply with GDPR, CCPA, and SOC 2 standards, and employ zero-trust security architecture. Your data is processed in secure, isolated environments with full audit trails and access controls.",
    },
    {
      id: 4,
      question: "Can ADmyBRAND integrate with my existing marketing tools?",
      answer:
        "Yes! ADmyBRAND seamlessly integrates with 200+ popular marketing tools including Google Analytics, Facebook Ads, Salesforce, HubSpot, Shopify, and more. Our API allows custom integrations, and our team provides white-glove setup assistance.",
    },
    {
      id: 5,
      question: "What kind of ROI can I expect from ADmyBRAND?",
      answer:
        "Our clients typically see 3-5x ROI within the first year. Average improvements include 40% increase in conversion rates, 60% reduction in customer acquisition costs, and 25% improvement in customer lifetime value. Results vary based on industry and implementation scope.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 backdrop-blur-xl mb-8 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Calculator size={16} className="text-emerald-400 mr-2" />
              <span className="text-emerald-300 text-sm font-bold">
                FREQUENTLY ASKED
              </span>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Everything About
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ADmyBRAND AI
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light max-w-3xl mx-auto">
              Discover how ADmyBRAND's revolutionary AI technology can transform
              your brand's digital presence and accelerate growth through
              intelligent automation.
            </p>

            <motion.button
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-purple-500/25"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Header and CTA */}
          <motion.div
            className="lg:sticky lg:top-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                asked questions
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Get the answers you need to understand and how we can help your
              business thrive.Feel free to adjust the wording to better match
              your brand's tone!
            </p>

            <motion.button
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-purple-500/25"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden group-hover:border-purple-500/30 transition-all duration-300">
                  {/* Question Header */}
                  <motion.button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between group-hover:bg-gray-800/30 transition-colors duration-300"
                    whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-purple-300 transition-colors duration-300">
                      {faq.question}
                    </h3>

                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center"
                      animate={{
                        rotate: openFAQ === faq.id ? 180 : 0,
                        backgroundColor:
                          openFAQ === faq.id
                            ? "rgba(147, 51, 234, 0.3)"
                            : "rgba(147, 51, 234, 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {openFAQ === faq.id ? (
                        <Minus size={16} className="text-purple-400" />
                      ) : (
                        <Plus size={16} className="text-purple-400" />
                      )}
                    </motion.div>
                  </motion.button>

                  {/* Answer Content */}
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                          opacity: { delay: openFAQ === faq.id ? 0.1 : 0 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-gray-700/30">
                          <motion.p
                            className="text-gray-300 leading-relaxed pt-4"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Our team is here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="bg-transparent border border-gray-600/50 hover:border-gray-500/50 text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-16 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-16 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          y: [0, 25, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default FAQSection;
