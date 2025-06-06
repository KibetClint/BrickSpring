import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#236434] text-white py-4 md:py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
            Brickspring Enterprises
          </h2>
          <p className="text-xs md:text-sm">
            Revolutionizing how weight scales and computers work together since
            2023. We provide cutting-edge solutions for businesses of all sizes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
            Quick Links
          </h2>
          <ul className="text-xs md:text-sm space-y-1 md:space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-gray-300">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gray-300">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
            Contact Us
          </h2>
          <ul className="text-xs md:text-sm space-y-1 md:space-y-2">
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
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
            Follow Us
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400">
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300">
              <FaXTwitter size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400">
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400">
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-400">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-6 md:mt-8 pt-2 md:pt-4 text-center">
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Brickspring. All rights reserved.
          <Link to="/privacy-policy" className="hover:text-gray-300 mx-2">
            Privacy Policy
          </Link>
          |
          <Link to="/terms" className="hover:text-gray-300 mx-2">
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
