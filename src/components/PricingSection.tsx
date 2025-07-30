"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const pricingPlans = [
    {
      name: "Brand Starter",
      price: 99,
      originalPrice: 129,
      period: "/mo",
      description: "Perfect for emerging brands and startups",
      features: [
        "AI Brand Analysis & Insights",
        "Smart Content Generation (50/month)",
        "Basic Audience Intelligence",
        "Social Media Automation",
        "Brand Performance Dashboard",
      ],
      popular: false,
      cta: "Get Started",
      gradient: "from-gray-800/60 to-gray-900/60",
      borderGradient: "from-gray-600/50 to-gray-700/50",
    },
    {
      name: "Brand Professional",
      price: 299,
      originalPrice: 399,
      period: "/mo",
      description: "Ideal for established brands scaling growth",
      features: [
        "Everything in Brand Starter",
        "Advanced AI Campaign Optimization",
        "Unlimited Content Generation",
        "Predictive Analytics & Forecasting",
        "Multi-Channel Brand Orchestration",
        "Priority Support & Strategy Sessions",
      ],
      popular: true,
      cta: "Get Started",
      gradient: "from-emerald-600/20 to-cyan-800/20",
      borderGradient: "from-emerald-500 to-cyan-700",
    },
    {
      name: "Brand Enterprise",
      price: 799,
      originalPrice: 999,
      period: "/mo",
      description: "Complete AI solution for enterprise brands",
      features: [
        "Everything in Brand Professional",
        "Custom AI Model Training",
        "White-label Brand Solutions",
        "Dedicated Success Manager",
        "API Access & Custom Integrations",
        "24/7 Premium Support",
        "Advanced Security & Compliance",
      ],
      popular: false,
      cta: "Get Started",
      gradient: "from-gray-800/60 to-gray-900/60",
      borderGradient: "from-gray-600/50 to-gray-700/50",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1),transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
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
            <Sparkles size={16} className="text-emerald-400 mr-2" />
            <span className="text-emerald-300 text-sm font-bold">
              LAUNCH SPECIAL OFFER
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Supercharge Your Brand with
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ADmyBRAND AI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Choose the perfect AI-powered plan to transform your brand's digital
            presence and accelerate growth
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-full p-1 flex">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isAnnual
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isAnnual
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Annual <span className="text-xs text-purple-300">(Save 20%)</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative group ${plan.popular ? "lg:scale-105" : ""}`}
              whileHover={{ y: -10, scale: plan.popular ? 1.08 : 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div
                className={`relative h-full bg-gradient-to-br ${
                  plan.gradient
                } backdrop-blur-xl border ${
                  plan.popular ? "border-purple-500/50" : "border-gray-700/50"
                } rounded-3xl p-8 overflow-hidden`}
              >
                {/* Background Glow */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5" />
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-white">
                        ${isAnnual ? Math.round(plan.price * 0.8) : plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: featureIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-shrink-0 w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center mt-0.5">
                            <Check size={12} className="text-purple-400" />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white shadow-lg shadow-purple-500/25"
                        : "bg-gray-700/50 hover:bg-gray-600/50 text-white border border-gray-600/50 hover:border-gray-500/50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl border-2 ${
                    plan.popular
                      ? "border-purple-500/0 group-hover:border-purple-500/50"
                      : "border-gray-500/0 group-hover:border-gray-400/30"
                  } transition-colors duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <motion.button
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span>Compare all features</span>
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default PricingSection;
