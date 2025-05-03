import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Brickspring Enterprises</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Revolutionizing how weight scales and computers work together since 2023. We provide cutting-edge solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="about-us" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="products" className="text-gray-400 hover:text-white transition">Products</a></li>
              <li><a href="solutions" className="text-gray-400 hover:text-white transition">Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
              <li><a href="contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Products & Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="text-gray-400 hover:text-white transition">SmartScale Pro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">WeighConnect Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">ScaleLink Gateway</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Consultation Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Implementation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Support Plans</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Subscribe to our newsletter for the latest updates, industry insights, and exclusive offers.
            </p>
            <form className="mb-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full sm:flex-1 rounded-l-md sm:rounded-l-md rounded-t-md sm:rounded-t-none border-none focus:outline-none text-gray-800"
              />
              <button className="mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md sm:rounded-r-md rounded-b-md sm:rounded-b-none transition whitespace-nowrap">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <div className="flex space-x-4 justify-start sm:justify-center">
              <i className="fab fa-cc-visa text-2xl"></i>
              <i className="fab fa-cc-mastercard text-2xl"></i>
              <i className="fab fa-cc-amex text-2xl"></i>
              <i className="fab fa-cc-paypal text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm sm:text-base">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 Brickspring Enterprises. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
