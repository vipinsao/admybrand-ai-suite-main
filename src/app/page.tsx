import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import VisionSection from "../components/VisionSection";
import TestimonialCarousel from "../components/TestimonialCarousel";
import PricingCalculator from "../components/PricingCalculator";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-black relative overflow-x-hidden select-none">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Vision & Mission Section */}
      <VisionSection />

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* Interactive Pricing Calculator (Bonus Feature) */}
      <PricingCalculator />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
