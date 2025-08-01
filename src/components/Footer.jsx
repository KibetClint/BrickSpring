import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#236434] text-white py-4 sm:py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* About Section */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
            Brickspring Enterprises
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm">
            Brickspring engineers digital transformation by combining
            industrial-grade hardware, specialized software suites, and tailored
            services from installation to integration and security. Whether
            you're scaling operations, digitizing safety practices, securing
            data, or building custom apps, Brickspring is your trusted partner
            for a seamless, end-to-end solution.
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
                info@brickspring.co.ke
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
              <span className="hover:text-gray-300">
                373-20210 - Litein, Kericho
              </span>
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
              href="https://www.facebook.com/profile.php?id=61577392503207"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 text-lg sm:text-xl">
              <FaFacebook />
            </a>
            <a
              href="https://x.com/brick_spring"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 text-lg sm:text-xl">
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/brick_spring/"
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
              href="https://www.linkedin.com/in/brickspring/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-400 text-lg sm:text-xl">
              <FaLinkedin />
            </a>
            <a
              href="https://www.tiktok.com/@brickspring?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black-400 text-lg sm:text-xl"
              aria-label="TikTok">
              <FaTiktok />
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
