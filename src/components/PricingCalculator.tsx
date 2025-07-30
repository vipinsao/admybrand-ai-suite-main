"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Users, TrendingUp, Zap, Check } from "lucide-react";

const PricingCalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [features, setFeatures] = useState(["basic"]);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const featureOptions = [
    { id: "basic", name: "Basic Analytics", price: 5 },
    { id: "advanced", name: "Advanced AI", price: 15 },
    { id: "automation", name: "Workflow Automation", price: 10 },
    { id: "support", name: "Priority Support", price: 8 },
    { id: "integration", name: "Custom Integrations", price: 12 },
  ];

  const calculatePrice = () => {
    const basePrice = employees * 3; // $3 per employee
    const featuresPrice = features.reduce((total, featureId) => {
      const feature = featureOptions.find((f) => f.id === featureId);
      return total + (feature ? feature.price * employees : 0);
    }, 0);

    const monthlyTotal = basePrice + featuresPrice;
    const finalPrice =
      billingCycle === "annual" ? monthlyTotal * 0.8 : monthlyTotal;

    setCalculatedPrice(finalPrice);
  };

  useEffect(() => {
    calculatePrice();
  }, [employees, features, billingCycle]);

  const handleFeatureToggle = (featureId: string) => {
    if (features.includes(featureId)) {
      setFeatures(features.filter((f) => f !== featureId));
    } else {
      setFeatures([...features, featureId]);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_60%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Calculator size={16} className="text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">
              PRICING CALCULATOR
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Calculate Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Customize your pricing based on your team size and feature
            requirements. Get an instant quote tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Controls */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Team Size Slider */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Users size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Team Size
                  </h3>
                  <p className="text-gray-400 text-sm">Number of employees</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Employees</span>
                  <span className="text-2xl font-bold text-purple-400">
                    {employees}
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #9333ea 0%, #9333ea ${
                        (employees / 500) * 100
                      }%, #374151 ${(employees / 500) * 100}%, #374151 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1</span>
                    <span>500+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Cycle */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp size={24} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Billing Cycle
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Choose your payment frequency
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  onClick={() => setBillingCycle("monthly")}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    billingCycle === "monthly"
                      ? "bg-purple-500/20 border-purple-500/50 text-white"
                      : "bg-gray-700/30 border-gray-600/50 text-gray-300 hover:bg-gray-600/30"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <div className="font-semibold">Monthly</div>
                    <div className="text-sm opacity-75">Flexible</div>
                  </div>
                </motion.button>

                <motion.button
                  onClick={() => setBillingCycle("annual")}
                  className={`p-4 rounded-xl border transition-all duration-300 relative ${
                    billingCycle === "annual"
                      ? "bg-purple-500/20 border-purple-500/50 text-white"
                      : "bg-gray-700/30 border-gray-600/50 text-gray-300 hover:bg-gray-600/30"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <div className="font-semibold">Annual</div>
                    <div className="text-sm opacity-75">Save 20%</div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Feature Selection */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Zap size={24} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Features</h3>
                  <p className="text-gray-400 text-sm">
                    Select your required features
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {featureOptions.map((feature) => (
                  <motion.div
                    key={feature.id}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                      features.includes(feature.id)
                        ? "bg-purple-500/10 border-purple-500/50"
                        : "bg-gray-700/20 border-gray-600/50 hover:bg-gray-600/30"
                    }`}
                    onClick={() => handleFeatureToggle(feature.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            features.includes(feature.id)
                              ? "bg-purple-500 border-purple-500"
                              : "border-gray-500"
                          }`}
                        >
                          {features.includes(feature.id) && (
                            <Check size={12} className="text-white" />
                          )}
                        </div>
                        <span className="text-white font-medium">
                          {feature.name}
                        </span>
                      </div>
                      <span className="text-purple-400 font-semibold">
                        ${feature.price}/user
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Price Display */}
          <motion.div
            className="lg:sticky lg:top-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 h-fit">
              {/* Price Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Your Custom Plan
                </h3>
                <p className="text-gray-300">Tailored to your business needs</p>
              </div>

              {/* Price Display */}
              <div className="text-center mb-8">
                <motion.div
                  className="text-6xl font-bold text-white mb-2"
                  key={calculatedPrice}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ${Math.round(calculatedPrice).toLocaleString()}
                </motion.div>
                <div className="text-gray-400">
                  per {billingCycle === "monthly" ? "month" : "year"}
                  {billingCycle === "annual" && (
                    <span className="ml-2 text-green-400 text-sm">
                      ($
                      {Math.round(
                        calculatedPrice * 12 * 0.2
                      ).toLocaleString()}{" "}
                      saved annually)
                    </span>
                  )}
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">
                    Base ({employees} employees)
                  </span>
                  <span className="text-white">${employees * 3}/month</span>
                </div>
                {features.map((featureId) => {
                  const feature = featureOptions.find(
                    (f) => f.id === featureId
                  );
                  if (!feature) return null;
                  return (
                    <div
                      key={featureId}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-300">{feature.name}</span>
                      <span className="text-white">
                        ${feature.price * employees}/month
                      </span>
                    </div>
                  );
                })}
                {billingCycle === "annual" && (
                  <div className="flex justify-between text-sm border-t border-gray-700/50 pt-4">
                    <span className="text-green-400">
                      Annual Discount (20%)
                    </span>
                    <span className="text-green-400">
                      -${Math.round(calculatedPrice * 0.25)}
                    </span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-purple-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Start Free Trial
                </motion.button>

                <motion.button
                  className="w-full bg-transparent border border-gray-600/50 hover:border-gray-500/50 text-gray-300 hover:text-white py-4 rounded-2xl font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Demo
                </motion.button>
              </div>

              {/* Features List */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <h4 className="text-white font-semibold mb-4">
                  What's included:
                </h4>
                <ul className="space-y-2">
                  {features.map((featureId) => {
                    const feature = featureOptions.find(
                      (f) => f.id === featureId
                    );
                    if (!feature) return null;
                    return (
                      <li
                        key={featureId}
                        className="flex items-center space-x-2"
                      >
                        <Check size={16} className="text-purple-400" />
                        <span className="text-gray-300 text-sm">
                          {feature.name}
                        </span>
                      </li>
                    );
                  })}
                  <li className="flex items-center space-x-2">
                    <Check size={16} className="text-purple-400" />
                    <span className="text-gray-300 text-sm">24/7 Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check size={16} className="text-purple-400" />
                    <span className="text-gray-300 text-sm">
                      14-day free trial
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-16 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default PricingCalculator;
