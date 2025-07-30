"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Quote, Star } from "lucide-react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "/api/placeholder/80/80",
      video: true,
      rating: 5,
      content:
        "This AI platform has completely transformed how we approach marketing. Our conversion rates have increased by 300% since implementation.",
      company: "TechStart Inc.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, GrowthCorp",
      image: "/api/placeholder/80/80",
      video: true,
      rating: 5,
      content:
        "The automated workflows saved us countless hours. The AI insights are incredibly accurate and have helped us make better strategic decisions.",
      company: "GrowthCorp",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, ScaleUp Solutions",
      image: "/api/placeholder/80/80",
      video: false,
      rating: 5,
      content:
        "Outstanding support and results. The platform is intuitive and the ROI has been exceptional. Highly recommend to any growing business.",
      company: "ScaleUp Solutions",
    },
    {
      id: 4,
      name: "David Kim",
      role: "CMO, InnovateLab",
      image: "/api/placeholder/80/80",
      video: true,
      rating: 5,
      content:
        "Game-changing technology that has revolutionized our customer acquisition strategy. The results speak for themselves.",
      company: "InnovateLab",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  // Simplified auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonialData =
    testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our Clients Are Saying
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Passionate, Experienced, and Results-Driven All-in-one personal
            finance app that simplifies investment opportunities
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Current Testimonial Video/Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              key={currentIndex}
              className="relative aspect-[4/3] bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Video/Image Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                {/* Placeholder for customer image/video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 flex items-center justify-center">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-28 h-28 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${currentTestimonial.name}&background=9333ea&color=ffffff&size=112`;
                      }}
                    />
                  </div>
                </div>

                {/* Play Button for Video Testimonials */}
                {currentTestimonial.video && (
                  <motion.button
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                      <Play size={32} className="text-gray-900 ml-1" />
                    </div>
                  </motion.button>
                )}
              </div>

              {/* Customer Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4">
                  <h4 className="text-white font-semibold text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {currentTestimonial.role}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < currentTestimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Next Testimonial Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              key={`next-${currentIndex}`}
              className="relative aspect-[4/3] bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.3 }}
              onClick={nextTestimonial}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 flex items-center justify-center">
                    <img
                      src={nextTestimonialData.image}
                      alt={nextTestimonialData.name}
                      className="w-20 h-20 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${nextTestimonialData.name}&background=4f46e5&color=ffffff&size=80`;
                      }}
                    />
                  </div>
                </div>

                {nextTestimonialData.video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <Play size={20} className="text-gray-900 ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/30 rounded-xl p-3">
                  <h4 className="text-white font-medium text-sm">
                    {nextTestimonialData.name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {nextTestimonialData.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonial Content */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            key={`content-${currentIndex}`}
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Quote size={48} className="text-purple-400 mx-auto mb-6" />
            <blockquote className="text-xl sm:text-2xl text-gray-200 leading-relaxed mb-8 font-light">
              "{currentTestimonial.content}"
            </blockquote>
            <div className="text-center">
              <div className="text-white font-semibold text-lg">
                {currentTestimonial.name}
              </div>
              <div className="text-gray-400">{currentTestimonial.role}</div>
              <div className="text-purple-400 text-sm mt-1">
                {currentTestimonial.company}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4">
          {/* Previous Button */}
          <motion.button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-purple-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="text-center">
            <div className="text-gray-400 text-sm mb-2">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </div>
            <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Floating Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-purple-500/3 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-blue-500/3 rounded-full blur-xl animate-pulse" />
    </section>
  );
};

export default TestimonialCarousel;
