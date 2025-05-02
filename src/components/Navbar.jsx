
// src/components/Navbar.jsx
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

  // Navigation links
  const navLinks = [
    'Home', 'Products', 'Solutions', 'Consultation', 'About Us', 'Contact'
  ];
  const getRoute = item => item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <>
      {/* Top Info Bar: hides when scrolled */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
           style={{ backgroundColor: '#064e3b' }}> {/* green-700 */}
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-2 text-sm text-white">
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

      {/* Main Navbar: slides into top */}
      <header className={`fixed w-full z-40 transition-top duration-300 ${scrolled ? 'top-0 shadow-md' : 'top-8'}`} style={{ backgroundColor: '#064e3b' }}> {/* green-900 */}
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-15 w-15 mr-3 rounded-full" />
            <span className="text-xl font-bold text-white">Brickspring</span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-8 text-white">
            {navLinks.map(item => (
              <Link key={item} to={getRoute(item)} className="hover:text-green-300">
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(prev => !prev)} className="md:hidden text-white focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Slide-out Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-2/3 bg-green-900 text-white transform transition-transform duration-300 z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="px-6 pt-16 flex flex-col space-y-6">
            {navLinks.map(item => (
              <Link key={item} to={getRoute(item)} onClick={() => setMenuOpen(false)} className="text-lg hover:text-green-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer to avoid content jump */}
      <div className={scrolled ? 'h-12' : 'h-20'} />
    </>
  );
}