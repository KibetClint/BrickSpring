import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/BG1.png';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { throttle } from 'lodash';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Throttled scroll handler for background and top bar
  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'Home', 'Products', 'Solutions', 'Consultation', 'About Us', 'Contact'
  ];
  const getRoute = item => item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <>
      {/* Top Info Bar */}
      <div
        className={`${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300 fixed inset-x-0 top-0 z-50 bg-green-800 text-white sm:flex hidden`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 text-sm">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>contact@brickspring.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-sm bg-green-900/90 shadow-md top-0' : 'bg-green-900/100 top-4'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Brickspring logo"
              className="h-10 w-10 sm:h-12 sm:w-12 mr-2 rounded-full object-cover"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Brickspring
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-white text-sm sm:text-base">
            {navLinks.map(item => (
              <Link
                key={item}
                to={getRoute(item)}
                className="hover:text-green-300 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 p-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Slide-out Menu */}
        <div
          className={`fixed inset-y-0 right-0 w-3/4 max-w-xs bg-green-900/100 text-white transform transition-transform duration-300 z-50 shadow-lg ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="px-6 pt-20 pb-4 flex flex-col space-y-6">
            {navLinks.map(item => (
              <Link
                key={item}
                to={getRoute(item)}
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-green-300 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer to avoid layout shift */}
      <div className={`${scrolled ? 'h-14' : 'h-20'} transition-all duration-300`} />
    </>
  );
}
