// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Brickspring Enterprises</h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing how weight scales and computers work together since 2023. We provide cutting-edge solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition cursor-pointer">Home</a></li>
              <li><a href="about-us" className="text-gray-400 hover:text-white transition cursor-pointer">About Us</a></li>
              <li><a href="products" className="text-gray-400 hover:text-white transition cursor-pointer">Products</a></li>
              <li><a href="solutions" className="text-gray-400 hover:text-white transition cursor-pointer">Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">Case Studies</a></li>
              <li><a href="contact" className="text-gray-400 hover:text-white transition cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products & Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">SmartScale Pro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">WeighConnect Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">ScaleLink Gateway</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">Consultation Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">Implementation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">Support Plans</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates, industry insights, and exclusive offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-l-md border-none focus:outline-none text-gray-800"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition whitespace-nowrap cursor-pointer">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <i className="fab fa-cc-visa text-2xl"></i>
              </div>
              <div className="flex items-center">
                <i className="fab fa-cc-mastercard text-2xl"></i>
              </div>
              <div className="flex items-center">
                <i className="fab fa-cc-amex text-2xl"></i>
              </div>
              <div className="flex items-center">
                <i className="fab fa-cc-paypal text-2xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Brickspring Enterprises. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition cursor-pointer">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition cursor-pointer">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
