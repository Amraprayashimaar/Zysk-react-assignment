import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import avatar from "../assets/pfp.png";

const NavLink = ({ text, hasDropdown = false }) => (
  <div className="relative group">
    <button className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900">
      {text}
      {hasDropdown && <ChevronDown className="w-4 h-4" />}
    </button>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Primary Nav */}
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img src={logo} alt="Zysk Logo" className="h-8 w-auto" />
            </a>

            {/* Primary Navigation */}
            <div className="hidden md:ml-10 md:flex items-center space-x-2">
              <NavLink text="Home" />
              <NavLink text="Products" hasDropdown />
              <NavLink text="Resources" hasDropdown />
              <NavLink text="Pricing" />
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src={avatar}
                alt="Profile"
                className="h-10 w-10 rounded-full"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <div className="h-6 w-6">
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16m-16 6h16"></path>
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Products
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Resources
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Pricing
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
