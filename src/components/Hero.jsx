import React from "react";
import { ArrowRight, Play } from "lucide-react";
import chat from "../assets/chat.png";
const HeroBanner = () => {
  return (
    <div className="w-full px-4 pt-8 pb-16 md:pt-12 lg:pt-16">
      {/* Announcement Bar */}
      <div className="flex justify-center mb-8">
        <a
          href="/dashboard"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <span className="text-sm text-red-500 font-medium">New feature</span>
          <span className="text-sm text-gray-600">
            Check out the team dashboard
          </span>
          <ArrowRight className="w-4 h-4 text-gray-600" />
        </a>
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium transition-colors">
            <Play className="w-5 h-5" />
            Demo
          </button>
          <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-colors">
            Sign up
          </button>
        </div>
      </div>

      {/* Feature Preview */}
      <div className="max-w-[1280px] h-[560px] mx-auto px-8 gap-8">
        <img
          src={chat}
          alt=""
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
    </div>
  );
};
export default HeroBanner;
