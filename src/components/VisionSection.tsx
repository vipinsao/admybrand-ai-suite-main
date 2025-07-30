"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, Heart, Lightbulb, Shield } from "lucide-react";

const VisionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(79,70,229,0.1),transparent_50%)]" />
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
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            ADmyBRAND's Vision for
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Brand Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Pioneering the future of brand intelligence through cutting-edge AI
            technology, empowering businesses to create authentic connections
            and drive meaningful growth.
          </p>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            {/* Placeholder for hero image - you can replace with actual image */}
            <div className="aspect-[16/9] bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center relative px-4 sm:px-8 lg:px-16">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

              {/* Vision Badge */}
              <motion.div
                className="absolute top-8 left-8 w-[420px] h-[220px] bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-6 shadow-lg flex flex-col justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-emerald-400 text-sm font-bold mb-2">
                  OUR MISSION
                </div>
                <h3 className="text-2xl font-black text-white mb-4">
                  Democratizing AI-Powered Brand
                  <br />
                  Intelligence for Everyone
                </h3>
              </motion.div>

              {/* Team Image Placeholder */}
              <div className="w-[420px] h-[220px] bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-emerald-400/30 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Heart size={32} className="text-white" />
                  </div>
                  <p className="text-emerald-400 text-sm font-medium">
                    Brand Innovation Hub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission and Vision Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="group relative"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-emerald-400 text-sm font-bold mb-4">
                  OUR MISSION
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
                  Empowering Brands with
                  <br />
                  Next-Gen AI Intelligence
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  ADmyBRAND democratizes advanced AI technology, making
                  sophisticated brand intelligence accessible to businesses of
                  all sizes, from startups to enterprises.
                </p>

                <motion.button
                  className="inline-flex items-center space-x-2 text-white bg-gradient-to-r from-emerald-500/20 to-cyan-600/20 backdrop-blur-sm border border-emerald-400/30 px-8 py-4 rounded-full hover:from-emerald-500/30 hover:to-cyan-600/30 transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Start Your Journey</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              {/* Decorative Icon */}
              <motion.div
                className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-emerald-400/30"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Target size={32} className="text-emerald-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            className="group relative"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-cyan-400 text-sm font-bold mb-4">
                  OUR VISION
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
                  Transforming Brand Experiences
                  <br />
                  Through AI Innovation
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  We envision a future where every brand can harness the power
                  of AI to create authentic, meaningful connections with their
                  audiences and drive sustainable growth.
                </p>

                <motion.button
                  className="inline-flex items-center space-x-2 text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30 px-8 py-4 rounded-full hover:from-cyan-500/30 hover:to-blue-600/30 transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              {/* Decorative Icon */}
              <motion.div
                className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-cyan-400/30"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Lightbulb size={32} className="text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-emerald-500/30 backdrop-blur-sm border border-white/10"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(16, 185, 129, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Transform Your Brand Today
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/3 right-20 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          y: [0, 25, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </section>
  );
};

export default VisionSection;
