"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Globe,
  Sparkles,
  Users,
  TrendingUp,
  Workflow,
  BarChart3,
  Zap,
  Shield,
  Brain,
  Rocket,
  Heart,
} from "lucide-react";

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const features = [
    {
      icon: Target,
      title: "Intelligent Brand Targeting",
      description:
        "Advanced AI algorithms analyze consumer behavior to deliver hyper-personalized brand experiences that convert.",
    },
    {
      icon: Globe,
      title: "Global Brand Orchestration",
      description:
        "Seamlessly manage multi-channel brand campaigns across all digital touchpoints with intelligent automation.",
    },
    {
      icon: Sparkles,
      title: "Predictive Brand Analytics",
      description:
        "Harness real-time data intelligence to predict market trends and optimize brand positioning strategies.",
    },
    {
      icon: Users,
      title: "Audience Intelligence Engine",
      description:
        "Deep customer insights powered by AI to create meaningful connections and drive brand loyalty.",
    },
    {
      icon: TrendingUp,
      title: "Brand Performance Optimization",
      description:
        "Real-time performance tracking with AI-driven recommendations for continuous brand improvement.",
    },
    {
      icon: Workflow,
      title: "Smart Brand Automation",
      description:
        "Intelligent workflow automation that scales your brand operations while maintaining authenticity.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            ADmyBRAND's AI-Powered
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Brand Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Revolutionary AI technology that transforms how brands connect with
            audiences, optimize campaigns, and drive unprecedented growth in the
            digital ecosystem.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 overflow-hidden">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent size={32} className="text-purple-400" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/30 transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Features Row */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Brain,
              title: "AI Intelligence",
              desc: "Advanced ML algorithms",
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              desc: "Bank-level encryption",
            },
            {
              icon: Rocket,
              title: "Lightning Fast",
              desc: "Optimized performance",
            },
            { icon: Heart, title: "24/7 Support", desc: "Always here to help" },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl mb-4 group-hover:bg-purple-500/20 transition-colors duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <IconComponent size={24} className="text-purple-400" />
                </motion.div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-purple-500/25"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(147, 51, 234, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
