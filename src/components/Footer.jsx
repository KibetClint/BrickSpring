import React from 'react';

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: '#1F6632', color: '#FFFEFB' }} // deep green bg, cream text
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#FFFEFB]">
              Brickspring Enterprises
            </h3>
            <p className="mb-4 text-sm sm:text-base text-[#FFFEFB]/80">
              Revolutionizing how weight scales and computers work together since 2023.
              We provide cutting-edge solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              {['linkedin-in','twitter','facebook-f','instagram'].map(icon => (
                <a
                  key={icon}
                  href="#"
                  className="transition hover:opacity-80"
                  style={{ color: '#FFFEFB' }}
                >
                  <i className={`fab fa-${icon} text-xl`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#FFFEFB]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Products', href: '/products' },
                { label: 'Solutions', href: '/solutions' },
                { label: 'Case Studies', href: '#' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:opacity-80"
                    style={{ color: '#FFFEFB' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#FFFEFB]">
              Products & Services
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                'SmartScale Pro',
                'WeighConnect Software',
                'ScaleLink Gateway',
                'Consultation Services',
                'Implementation',
                'Support Plans',
              ].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition hover:opacity-80"
                    style={{ color: '#FFFEFB' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#FFFEFB]">
              Newsletter
            </h3>
            <p className="mb-4 text-sm sm:text-base text-[#FFFEFB]/80">
              Subscribe to our newsletter for the latest updates, industry insights, and exclusive offers.
            </p>
            <form className="mb-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full sm:flex-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFFEFB]"
                style={{
                  backgroundColor: '#FFFEFB',
                  color: '#1F6632',
                  border: '1px solid #FFFEFB',
                }}
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 px-4 py-2 rounded-md transition focus:outline-none focus:ring-2"
                style={{ backgroundColor: '#FFFEFB', color: '#1F6632' }}
              >
                <i className="fas fa-paper-plane" />
              </button>
            </form>
            <div className="flex space-x-4 justify-start sm:justify-center">
              {['cc-visa','cc-mastercard','cc-amex','cc-paypal'].map(icon => (
                <i
                  key={icon}
                  className={`fab fa-${icon} text-2xl`}
                  style={{ color: '#FFFEFB', opacity: 0.8 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t" style={{ borderColor: '#FFFEFB', paddingTop: '1rem' }}>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm sm:text-base">
            <p className="mb-4 md:mb-0" style={{ color: '#FFFEFB', opacity: 0.8 }}>
              © 2025 Brickspring Enterprises. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {['Privacy Policy','Terms of Service','Cookie Policy'].map(text => (
                <a
                  key={text}
                  href="#"
                  className="transition hover:opacity-80"
                  style={{ color: '#FFFEFB' }}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
