import React from "react";
import logo from "../assets/testiminial/Fictional company logo (6).png";
import pfp from "../assets/testiminial/Avatar.png";

const TestimonialSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Company Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Sisyphus Logo"
                className="h-6 w-auto object-contain"
              />
              <span className="text-xl font-semibold text-gray-900">
                Sisyphus
              </span>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-2xl md:text-4xl font-medium text-center text-gray-900 mb-12 leading-relaxed">
            We've been using Untitled to kick start every new project and can't
            imagine working without it.
          </blockquote>

          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <img
              src={pfp}
              alt="Candice Wu profile"
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Candice Wu
              </h3>
              <p className="text-gray-600">Product Manager, Sisyphus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
