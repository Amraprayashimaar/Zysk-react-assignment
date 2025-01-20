import React from "react";
import logo1 from "../assets/fictional/Fictional company logo (1).png";
import logo2 from "../assets/fictional/Fictional company logo (2).png";
import logo3 from "../assets/fictional/Fictional company logo (3).png";
import logo4 from "../assets/fictional/Fictional company logo (4).png";
import logo5 from "../assets/fictional/Fictional company logo (5).png";

const CompanyLogos = () => {
  const logos = [
    { src: logo1, alt: "Boltshift Logo" },
    { src: logo2, alt: "Lightbox Logo" },
    { src: logo3, alt: "FeatherDev Logo" },
    { src: logo4, alt: "Spherule Logo" },
    { src: logo5, alt: "GlobalBank Logo" },
    { src: logo1, alt: "Nietzsche Logo" }, // Using logo1 as placeholder for the sixth logo
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-xl text-gray-600 mb-12">
          Join 4,000+ companies already growing
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="h-12 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
