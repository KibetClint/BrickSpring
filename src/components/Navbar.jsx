import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/BG1.png";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { throttle } from "lodash";
import { FaSquareXTwitter } from "react-icons/fa6";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    if (item === "Home") return "/";
    return `/${item.toLowerCase()}`;
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "hidden" : "bg-[#236434]"
        }`}>
        <div className="container mx-auto flex justify-between items-center px-6 py-3 text-sm text-gray-100">
          <div className="flex space-x-4">
            <a href="#" className=" text-blue-500 hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400">
              <FaSquareXTwitter />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <div className=" text-black flex items-center space-x-2">
              <FaEnvelope />
              <span>info@birckspring.co.ke</span>
            </div>
            <div className=" text-black flex items-center space-x-2">
              <FaPhone />
              <span>+254 725 903309</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "top-0 bg-[#236434] shadow-md" : "top-[40px] bg-[#236434]"
        }`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-14 mr-3 rounded-full"
            />
            <span className="text-xl font-bold text-white">Brickspring</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={getRoute(item)}
                className="text-white hover:text-blue-300 transition duration-300 text-sm">
                {item}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl text-white focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 w-40 bg-[#236434] text-white transform transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-xl absolute top-6 left-6 focus:outline-none">
            <FaTimes />
          </button>
          <nav className="mt-16 px-4 space-y-3 pb-6 text-sm">
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

      {/* Spacer to Avoid Overlap */}
      <div className={scrolled ? "h-[72px]" : "h-[112px] bg-[#fffbf0]"}></div>
    </>
  );
}

export default Header;
