"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(79,70,229,0.1),transparent_50%)]" />

        {/* Animated Background Lines */}
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <motion.path
              d="M0,500 Q250,300 500,500 T1000,500"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,600 Q300,400 600,600 T1200,600"
              stroke="url(#gradient2)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0" />
                <stop offset="50%" stopColor="#9333ea" stopOpacity="1" />
                <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
                <stop offset="50%" stopColor="#4f46e5" stopOpacity="1" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Announcement Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 backdrop-blur-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full mr-3 font-semibold">
                AI-Powered
              </span>
              <span className="text-gray-300 text-sm font-medium">
                Revolutionary Brand Intelligence Platform
              </span>
              <ArrowRight size={16} className="ml-2 text-emerald-400" />
            </motion.div>
          </motion.div>

          {/* Main Headlines */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-tight mb-6 tracking-tight">
              Transform Your Brand with
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                AI Intelligence
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              ADmyBRAND's cutting-edge AI platform revolutionizes how brands
              connect, engage, and grow in the digital landscape. Experience the
              future of marketing today.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl shadow-emerald-500/30 backdrop-blur-sm border border-white/10"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(16, 185, 129, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Launch Your Brand AI
              </motion.button>
              <motion.button
                className="flex items-center space-x-3 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-xl hover:bg-white/10"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Play size={20} />
                <span>Watch Demo</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mb-16"
          >
            <motion.div variants={statsVariants} className="text-center">
              <div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-400 text-sm font-medium">
                Brand Growth Rate
              </div>
            </motion.div>
            <motion.div variants={statsVariants} className="text-center">
              <div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-400 text-sm font-medium">
                Brands Transformed
              </div>
            </motion.div>
            <motion.div variants={statsVariants} className="text-center">
              <motion.div
                className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-emerald-400 text-sm font-bold mb-2">
                  AI INNOVATION LEADER
                </div>
                <div className="text-white text-xs font-medium">
                  Pioneering the future of brand
                </div>
                <div className="text-white text-xs font-medium">
                  intelligence and marketing automation
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Brand Logos */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Nike", "Apple", "Google", "Tesla", "Amazon", "Microsoft"].map(
                (brand, index) => (
                  <motion.div
                    key={brand}
                    className="text-gray-400 text-xl font-bold tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    transition={{ delay: index * 0.1 + 1 }}
                    whileHover={{ opacity: 1, y: -2, color: "#10b981" }}
                  >
                    {brand}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
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

export default HeroSection;
