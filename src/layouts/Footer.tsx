import React from "react";
import logo from "../assets/logo.png";

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-gray-500 font-medium">{title}</h3>
    <ul className="flex flex-col gap-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            {link.text}
            {link.badge && (
              <span className="px-2 py-0.5 text-xs font-medium text-green-700 bg-green-50 rounded-full">
                {link.badge}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { text: "Overview" },
        { text: "Features" },
        { text: "Solutions", badge: "New" },
        { text: "Tutorials" },
        { text: "Pricing" },
        { text: "Releases" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About us" },
        { text: "Careers" },
        { text: "Press" },
        { text: "News" },
        { text: "Media kit" },
        { text: "Contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog" },
        { text: "Newsletter" },
        { text: "Events" },
        { text: "Help centre" },
        { text: "Tutorials" },
        { text: "Support" },
      ],
    },
    {
      title: "Use cases",
      links: [
        { text: "Startups" },
        { text: "Enterprise" },
        { text: "Government" },
        { text: "SaaS centre" },
        { text: "Marketplaces" },
        { text: "Ecommerce" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter" },
        { text: "LinkedIn" },
        { text: "Facebook" },
        { text: "GitHub" },
        { text: "AngelList" },
        { text: "Dribbble" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms" },
        { text: "Privacy" },
        { text: "Cookies" },
        { text: "Licenses" },
        { text: "Settings" },
        { text: "Contact" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 xl:gap-12">
          {footerLinks.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <img src={logo} alt="Zysk Logo" className="h-8 w-auto" />
          <p className="text-gray-600 text-sm">
            © 2077 zysktechnologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
