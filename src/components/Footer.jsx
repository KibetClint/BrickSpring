import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#236434] text-white py-4 sm:py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
            Brickspring Enterprises
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm">
            Revolutionizing how weight scales and computers work together since
            2023. We provide cutting-edge solutions for businesses of all sizes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
            Quick Links
          </h2>
          <ul className="text-[10px] sm:text-xs md:text-sm space-y-1 sm:space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/solutions", label: "Solutions" },
              { to: "/contact", label: "Contact" },
              { to: "/faq", label: "FAQ" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-gray-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
            Contact Us
          </h2>
          <ul className="text-[10px] sm:text-xs md:text-sm space-y-1 sm:space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:hello@brickspace.com"
                className="hover:text-gray-300">
                hello@brickspace.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+254725903309" className="hover:text-gray-300">
                +254 725 903309
              </a>
            </li>
            <li>
              Address:{" "}
              <span className="hover:text-gray-300">Neema Avenue, Nairobi</span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
            Follow Us
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 text-lg sm:text-xl">
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 text-lg sm:text-xl">
              <FaXTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 text-lg sm:text-xl">
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 text-lg sm:text-xl">
              <FaYoutube />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-400 text-lg sm:text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-6 sm:mt-8 pt-2 sm:pt-3 md:pt-4 text-center">
        <p className="text-[10px] sm:text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Brickspring. All rights reserved.
          <Link
            to="/privacy-policy"
            className="hover:text-gray-300 mx-1 sm:mx-2">
            Privacy Policy
          </Link>
          |
          <Link to="/terms" className="hover:text-gray-300 mx-1 sm:mx-2">
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
