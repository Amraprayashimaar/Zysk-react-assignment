import React from "react";

const CTASection = () => {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Start your free trial
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join over 4,000+ startups already growing with Untitled.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-5 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 border border-gray-300 transition-colors">
              Learn more
            </button>
            <button className="px-5 py-3 bg-[#E4360B] text-white font-medium rounded-lg hover:bg-[#C32F0A] transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
