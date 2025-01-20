import React from "react";
import HeroBanner from "../components/Hero";
import CompanyLogos from "../components/Colaboration";
import FeaturesSection from "../components/Feature";
import TestimonialSection from "../components/Testimonial";
import FAQSection from "../components/FAQ";
import BlogSection from "../components/Blog";
import CTASection from "../components/CTA";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <CompanyLogos />
      <FeaturesSection />
      <TestimonialSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
    </>
  );
};

export default Home;
