import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/BG1.png";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { throttle } from "lodash";
import { FaSquareXTwitter } from "react-icons/fa6";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hide top bar on scroll
  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close mobile menu after 5s
  useEffect(() => {
    if (!menuOpen) return;
    const timer = setTimeout(() => setMenuOpen(false), 5000);
    return () => clearTimeout(timer);
  }, [menuOpen]);

  const navLinks = [
    "Home",
    "About",
    "Products",
    "Solutions",
    "Consultation",
    "Contact",
    "FAQs",
  ];

  const getRoute = (item) => {
    return item === "Home" ? "/" : `/${item.toLowerCase()}`;
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-[#116452] ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}>
        <div className="container mx-auto flex justify-between items-center px-4 py-1 text-xs sm:text-sm text-white">
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-blue-300">
              <FaFacebook size={16} />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaSquareXTwitter size={16} />
            </a>
            <a href="#" className="hover:text-pink-300">
              <FaInstagram size={16} />
            </a>
          </div>
          <div className="flex items-center space-x-4 text-xs sm:text-sm">
            <div className="flex items-center space-x-1">
              <FaEnvelope size={16} />
              <span>info@brickspring.co.ke</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaPhone size={16} />
              <span>+254 725 903309</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 w-full z-40 transition-all duration-300 bg-[#236434] shadow-md ${
          scrolled ? "top-0" : "top-4"
        }`}>
        <div className="container mx-auto flex items-center justify-between px-2 py-2 sm:py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
            />
            <span className="text-lg sm:text-xl font-bold text-white">
              Brickspring
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-4 text-sm lg:space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={getRoute(item)}
                className="text-white hover:text-blue-300 transition duration-300">
                {item}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl p-2 focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation: reduced height on small screens */}
        <div
          className={`fixed top-2 right-0 w-34 bg-[#236434] text-white transform transition-transform duration-300 z-50 
            ${menuOpen ? "translate-x-0" : "translate-x-full"} 
            h-[70vh] sm:h-full
          `}>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-xl focus:outline-none">
            <FaTimes />
          </button>
          <nav className="mt-12 px-4 space-y-3 text-base">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={getRoute(item)}
                className="block hover:text-blue-300 transition duration-300"
                onClick={() => setMenuOpen(false)}>
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 sm:h-20" />
    </>
  );
}

export default Header;
