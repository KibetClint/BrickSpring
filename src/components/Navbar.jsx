import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/BG1.png';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { throttle } from 'lodash';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const inactivityTimer = useRef(null);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = throttle(() => setScrolled(window.scrollY > 50), 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close menu after inactivity
  useEffect(() => {
    if (!menuOpen) return;
    const resetTimer = () => {
      clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => setMenuOpen(false), 5000);
    };
    resetTimer();
    ['mousemove','mousedown','scroll','keydown','touchstart'].forEach(evt => document.addEventListener(evt, resetTimer));
    return () => {
      clearTimeout(inactivityTimer.current);
      ['mousemove','mousedown','scroll','keydown','touchstart'].forEach(evt => document.removeEventListener(evt, resetTimer));
    };
  }, [menuOpen]);

  const navLinks = ['Home','About Us','Products','Solutions','Consultation','Contact'];
  const getRoute = item => item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g,'-')}`;

  return (
    <>
      {/* Top Info Bar */}
      <div className={`${scrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 fixed inset-x-0 top-0 z-50 bg-[#1F6632] text-[#FFFEFB] sm:flex hidden`}>
        <div className="max-w-7xl mx-auto flex items-center px-4 py-2 text-sm">
          <div className="flex space-x-4">
            <FaFacebook className="hover:opacity-80 transition cursor-pointer" />
            <FaTwitter className="hover:opacity-80 transition cursor-pointer" />
            <FaInstagram className="hover:opacity-80 transition cursor-pointer" />
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <FaEnvelope />
            <span className="text-[#FFFEFB]/80">contact@brickspring.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-sm bg-[#1F6632]/90 top-0 shadow-md' : 'bg-[#1F6632] top-4'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Brickspring" className="h-10 w-10 sm:h-12 sm:w-12 mr-2 rounded-full" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#FFFEFB]">Brickspring</span>
          </Link>

          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm sm:text-base">
            {navLinks.map(item => (
              <Link key={item} to={getRoute(item)} className="text-[#FFFEFB] hover:text-[#FEFAEA] transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          <button onClick={() => setMenuOpen(prev => !prev)} className="md:hidden text-[#FFFEFB] p-2 focus:outline-none focus:ring-2 focus:ring-[#FFFEFB]">
            {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}          
          </button>
        </div>

        {/* Mobile Slide-out Menu: auto height, always visible on scroll */}
        <div className={`fixed top-0 right-0 w-auto max-w-[80%] bg-[#1F6632] text-[#FFFEFB] transform transition-transform duration-300 z-50 shadow-lg ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ height: 'auto' }}>
          <div className="px-6 pt-20 pb-6 flex flex-col space-y-6">
            {navLinks.map(item => (
              <Link key={item} to={getRoute(item)} onClick={() => setMenuOpen(false)} className="text-lg hover:text-[#FEFAEA] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer to prevent layout shift */}
      <div className={`${scrolled ? 'h-14' : 'h-20'} transition-all duration-300`} />
    </>
  );
}
