import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShieldAlt, FaPaperPlane, FaHeart, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F6632] via-[#1F6632] to-[#1a5429]" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFFEFB] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFFEFB] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="relative pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 mb-10">
            {/* Company Info - Takes more space */}
            <div className="lg:col-span-4">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#FFFEFB] mb-3">
                  Brickspring
                  <span className="block text-base font-normal text-[#FFFEFB]/80">
                    Enterprises
                  </span>
                </h3>
                <p className="text-[#FFFEFB]/90 leading-relaxed text-sm">
                  Revolutionizing how weight scales and computers work together since 2023. 
                  We provide cutting-edge solutions for businesses of all sizes.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="mb-6">
                <h4 className="text-[#FFFEFB] font-semibold mb-3 text-sm">Connect With Us</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: FaLinkedinIn, color: "#0077B5", url: "https://linkedin.com/company/brickspring-enterprises" },
                    { icon: FaTwitter, color: "#1DA1F2", url: "https://linkedin.com/company/brickspring-enterprises"  },
                    { icon: FaFacebookF, color: "#1877F2", url: "https://linkedin.com/company/brickspring-enterprises"  },
                    { icon: FaInstagram, color: "#E4405F", url: "https://linkedin.com/company/brickspring-enterprises"  }
                  ].map(({ icon, color }, index) => {
                    const Icon = icon;
                    return (
                      <a
                        key={index}
                        href="/"
                        className="group w-12 h-12 bg-[#FFFEFB]/10 hover:bg-[#FFFEFB] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Icon 
                          className="text-lg group-hover:text-[#1F6632] transition-colors duration-300"
                          style={{ color: color }}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-[#FFFEFB]/80 text-sm">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-4 h-4" />
                  <span>info@brickspring.co.ke</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-base font-bold mb-4 text-[#FFFEFB]">Navigation</h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about-us" },
                  { label: "Products", href: "/products" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Case Studies", href: "#" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#FFFEFB]/80 hover:text-[#FFFEFB] transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products & Services */}
            <div className="lg:col-span-3">
              <h4 className="text-base font-bold mb-4 text-[#FFFEFB]">Products & Services</h4>
              <ul className="space-y-2">
                {[
                  "SmartScale Pro",
                  "WeighConnect Software",
                  "ScaleLink Gateway",
                  "Consultation Services",
                  "Implementation",
                  "Support Plans",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#FFFEFB]/80 hover:text-[#FFFEFB] transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Newsletter */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFFEFB]/5 to-transparent rounded-2xl" />
                
                <div className="relative p-4 bg-[#1F6632]/20 backdrop-blur-sm rounded-2xl border border-[#FFFEFB]/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#FFFEFB]/20 to-[#FFFEFB]/10 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-[#FFFEFB] text-sm" />
                    </div>
                    <h4 className="text-base font-bold text-[#FFFEFB]">Stay Connected</h4>
                  </div>
                  
                  <p className="mb-4 text-xs text-[#FFFEFB]/90 leading-relaxed">
                    Get exclusive insights and industry updates.
                  </p>
                  
                  <form className="mb-4">
                    <div className="relative">
                      <div className="flex flex-col gap-2 p-1 bg-[#FFFEFB]/10 backdrop-blur-sm rounded-lg border border-[#FFFEFB]/20">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="px-3 py-2 bg-[#FFFEFB] text-[#1F6632] placeholder-[#1F6632]/60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFEFB]/50 transition-all duration-300 font-medium text-sm"
                        />
                        <button
                          type="submit"
                          className="group px-3 py-2 bg-gradient-to-r from-[#FFFEFB] to-[#FFFEFB]/90 text-[#1F6632] font-semibold rounded-md hover:from-[#FFFEFB]/90 hover:to-[#FFFEFB] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFFEFB]/50 text-sm"
                        >
                          <span className="flex items-center justify-center gap-2">
                            Subscribe
                            <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#FFFEFB]/20 pt-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <p className="text-[#FFFEFB]/80 text-sm">
                  © 2025 Brickspring Enterprises. All rights reserved.
                </p>
               
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text) => (
                  <a
                    key={text}
                    href="#"
                    className="text-[#FFFEFB]/80 hover:text-[#FFFEFB] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFFEFB] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}