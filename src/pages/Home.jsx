import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Home = () => {
  // Placeholder cart function
  const addToCart = () => {};

  // Hero slides data
  const slides = [
    { id: 1, title: 'Revolutionizing Weight Scale Technology Integration', subtitle: 'Seamless solutions for modern business operations', imgUrl: '/images/UNIWA V710 PDA.png' },
    { id: 2, title: 'Optimize Operations with Real-Time Data', subtitle: 'Harness the power of instant weight analytics', imgUrl: '/images/Checkered plate platform scales.png' },
    { id: 3, title: 'Custom Integration, Maximum ROI', subtitle: 'Tailored solutions for your unique business needs', imgUrl: '/images/Computing.jpg' }
  ];

  // Product data
  const products = [
    { id: 1, name: 'SmartScale Pro', description: 'Enterprise-grade digital scale with advanced computer integration', price: 1199, category: 'Hardware', imageUrl: '/images/Accessories.png' },
    { id: 2, name: 'WeighConnect Software', description: 'Cloud-based software for real-time weight data analysis', price: 499, category: 'Software', imageUrl: '/images/Computing.jpg' },
    { id: 3, name: 'ScaleLink Gateway', description: 'Interface for connecting legacy scales to modern systems', price: 349, category: 'Integration', imageUrl: '/images/L36 printer.png' }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOption, setSortOption] = useState('category');

  const filtered = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter);
  const sorted = [...filtered].sort((a, b) =>
    sortOption === 'price-low' ? a.price - b.price :
    sortOption === 'price-high' ? b.price - a.price : a.id - b.id
  );

  return (
    <div className="bg-[#FFF9E6] text-gray-800">
      <main>
        {/* Hero Slider */}
        <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop
            className="h-full"
          >
            {slides.map(slide => (
              <SwiperSlide key={slide.id} className="relative h-full">
                <img
                  src={slide.imgUrl}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#236837]/80 to-transparent z-10" />
                <div className="max-w-3xl mx-auto px-4 py-16 h-full flex items-center relative z-20">
                  <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-8">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-[#236837] hover:bg-[#1a5129] text-white px-5 py-3 rounded-md text-sm sm:text-base md:text-lg transition">
                        Explore Products
                      </button>
                      <button className="border-2 border-white hover:bg-white/20 text-white px-5 py-3 rounded-md text-sm sm:text-base md:text-lg transition">
                        Book Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-[#FFF9E6]">
          <div className="text-center mb-12 px-4">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-[#236837]">
              Our Products
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#236837] max-w-2xl mx-auto">
              Discover our range of innovative solutions designed to transform how weight scales and computers work together.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4">
            {/* Filters & Sort UI */}
            <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
              <div className="flex flex-wrap gap-2">
                {['All', 'Hardware', 'Software', 'Integration'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1.5 rounded-full transition ${
                      activeFilter === cat ? 'bg-[#236837] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    } text-xs sm:text-sm md:text-base`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-xs sm:text-sm md:text-base text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={e => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-md px-2 py-1 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#236837]"
                >
                  <option value="category">Category</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sorted.map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                  <div className="h-48 sm:h-56 w-full">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#236837]">
                        {product.name}
                      </h3>
                      <span className="bg-[#236837]/20 text-[#236837] text-xs sm:text-sm md:text-base font-medium px-2 py-0.5 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#236837]">
                        Ksh {product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={addToCart}
                        className="bg-[#236837] hover:bg-[#1a5129] text-white px-4 py-2 rounded-md text-xs sm:text-sm md:text-base transition focus:outline-none focus:ring-2 focus:ring-[#236837]"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
                <section className="py-20 bg-[#FFF9E6]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#236837]">Why Choose Us</h2>
              <p className="text-xl text-[#236837] max-w-3xl mx-auto">
                At Brickspring Enterprises, we combine innovation with expertise
                to deliver unparalleled weight scale technology solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#236837]/10 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-[#236837] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-lightbulb text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#236837]">
                  Innovation Leadership
                </h3>
                <p className="text-gray-600">
                  Pioneering the latest advancements in weight scale technology
                  and computer integration to keep your business ahead of the
                  curve.
                </p>
              </div>
              <div className="bg-[#236837]/10 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-[#236837] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-cogs text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#236837]">Technical Expertise</h3>
                <p className="text-gray-600">
                  Our team of certified engineers and developers brings decades
                  of combined experience in scale technology and system
                  integration.
                </p>
              </div>
              <div className="bg-[#236837]/10 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-[#236837] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-headset text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#236837]">Customer Support</h3>
                <p className="text-gray-600">
                  Dedicated 24/7 support team committed to ensuring your systems
                  run smoothly with minimal downtime and maximum efficiency.
                </p>
              </div>
              <div className="bg-[#236837]/10 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-[#236837] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-chart-line text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#236837]">Proven Results</h3>
                <p className="text-gray-600">
                  Our solutions have helped hundreds of businesses achieve
                  measurable improvements in efficiency, accuracy, and
                  operational costs.
                </p>
              </div>
            </div>
          </div>
        </section>
                <section className="py-20 bg-[#FFF9E6]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#236837]">Contact Us</h2>
              <p className="text-xl text-[#236837] max-w-3xl mx-auto">
                Have questions or ready to get started? Reach out to our team
                today.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <form className="bg-white rounded-lg shadow-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#236837]"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="block text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#236837]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="contactPhone"
                        className="block text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#236837]"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactCompany"
                        className="block text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="contactCompany"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#236837]"
                        placeholder="Your Company, Inc."
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="contactSubject"
                      className="block text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contactSubject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#236837]"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="contactMessage"
                      className="block text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#236837]"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-[#236837] hover:bg-[#1a5129] text-white py-3 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <div className="bg-[#236837]/10 rounded-lg shadow-lg p-8 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-[#236837]">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-[#236837] rounded-full p-3 mr-4">
                        <i className="fas fa-map-marker-alt text-white"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Address</h4>
                        <p className="text-gray-600">
                          1234 Innovation Way
                          <br />
                          Tech District
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#236837] rounded-full p-3 mr-4">
                        <i className="fas fa-phone text-white"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Phone</h4>
                        <p className="text-gray-600">
                          Sales: (800) 123-4567
                          <br />
                          Support: (800) 765-4321
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#236837] rounded-full p-3 mr-4">
                        <i className="fas fa-envelope text-white"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Email</h4>
                        <p className="text-gray-600">
                          Sales: sales@brickspring.com
                          <br />
                          Support: support@brickspring.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#236837] rounded-full p-3 mr-4">
                        <i className="fas fa-clock text-white"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Business Hours
                        </h4>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 6:00 PM PST
                          <br />
                          Saturday: 9:00 AM - 1:00 PM PST
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-800 mb-4">
                      Connect With Us
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-[#236837] hover:bg-[#1a5129] text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-[#236837] hover:bg-[#1a5129] text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-[#236837] hover:bg-[#1a5129] text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-[#236837] hover:bg-[#1a5129] text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;