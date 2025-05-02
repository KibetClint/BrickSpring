import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Autoplay, Navigation, } from 'swiper';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Home = () => {
  // Cart state
  const addToCart = () => {};

  // Hero slides data
  const slides = [
    {
      id: 1,
      title: "Revolutionizing Weight Scale Technology Integration",
      subtitle: "Seamless solutions for modern business operations",
      imgUrl: "/src/assets/img/UNIWA V710 PDA.png",
    },
    {
      id: 2,
      title: "Optimize Operations with Real-Time Data",
      subtitle: "Harness the power of instant weight analytics",
      imgUrl: "/src/assets/img/Checkered plate platform scales.png",
    },
    {
      id: 3,
      title: "Custom Integration, Maximum ROI",
      subtitle: "Tailored solutions for your unique business needs",
      imgUrl: "/src/assets/img/Computing.jpg",
    },
  ];

  // Product data
  const products = [
    { 
      id: 1,
      name: "SmartScale Pro", 
      description: "Enterprise-grade digital scale with advanced computer integration", 
      price: 1299.99, 
      category: "Hardware", 
      imageUrl: "/src/assets/img/Accessories.png"
    },
    { 
        id: 2, 
        name: "WeighConnect Software", 
        description: "Cloud-based software for real-time weight data analysis", 
        price: 499.99, 
        category: "Software", 
        imageUrl: "/src/assets/img/Computing.jpg"
    },
    { 
        id: 3, 
        name: "ScaleLink Gateway", 
        description: "Interface for connecting legacy scales to modern systems", 
        price: 349.99, 
        category: "Integration", 
        imageUrl: "/src/assets/img/L36 printer.png" 
    },
    // ... other products ...
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOption, setSortOption] = useState("category");

  const filtered = activeFilter === "All" ? products : products.filter(p => p.category === activeFilter);
  const sorted = [...filtered].sort((a, b) => sortOption === 'price-low' ? a.price - b.price : sortOption === 'price-high' ? b.price - a.price : a.id - b.id);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main>
        {/* Hero Slider */}
        <section className="relative h-[600px] overflow-hidden">
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
                <img src={slide.imgUrl} alt={slide.title} className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent z-10" />
                <div className="container mx-auto px-4 h-full flex items-center relative z-20">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-5xl font-bold leading-tight mb-4">{slide.title}</h1>
                    <p className="text-xl mb-8">{slide.subtitle}</p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition duration-300 whitespace-nowrap">Explore Products</button>
                      <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 rounded-md text-lg transition duration-300 whitespace-nowrap">Book Consultation</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-white">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Products</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our range of innovative solutions designed to transform
                how weight scales and computers work together.
              </p>
            </div>
          <div className="container mx-auto px-4">
            {/* Filters & Sort UI... */}
            <div className="mb-8 flex justify-between items-center">
              {/* Category Filters */}
              <div className="flex space-x-2">
                {['All','Hardware','Software','Integration'].map(cat => (
                  <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-4 py-2 rounded-md transition ${activeFilter===cat?'bg-blue-600 text-white':'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{cat}</button>
                ))}
              </div>
              {/* Sort Dropdown */}
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2">Sort by:</label>
                <select id="sort" value={sortOption} onChange={e=>setSortOption(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="category">Category</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sorted.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{product.category}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-700">${product.price.toFixed(2)}</span>
                      <button onClick={addToCart} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Consultation Services */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Consultation Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert team provides tailored consultation services to help
                you implement the perfect weight scale integration solution for
                your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 p-6 text-white text-center">
                  <h3 className="text-2xl font-bold">Basic Package</h3>
                  <p className="text-4xl font-bold mt-2">$499</p>
                  <p className="text-sm mt-1">One-time consultation</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Initial needs assessment</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>2-hour consultation session</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Basic implementation plan</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Product recommendations</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <i className="fas fa-times text-red-400 mr-2"></i>
                      <span>Custom integration design</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <i className="fas fa-times text-red-400 mr-2"></i>
                      <span>On-site implementation</span>
                    </li>
                  </ul>
                  <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
              {/* Professional Package */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform scale-105 border-2 border-blue-500">
                <div className="bg-blue-700 p-6 text-white text-center relative">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                    POPULAR
                  </div>
                  <h3 className="text-2xl font-bold">Professional Package</h3>
                  <p className="text-4xl font-bold mt-2">$1,499</p>
                  <p className="text-sm mt-1">Comprehensive solution</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Detailed business analysis</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>8-hour consultation (4 sessions)</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Custom implementation plan</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Product recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Custom integration design</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <i className="fas fa-times text-red-400 mr-2"></i>
                      <span>On-site implementation</span>
                    </li>
                  </ul>
                  <button className="w-full mt-8 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
              {/* Enterprise Package */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 p-6 text-white text-center">
                  <h3 className="text-2xl font-bold">Enterprise Package</h3>
                  <p className="text-4xl font-bold mt-2">$4,999</p>
                  <p className="text-sm mt-1">End-to-end solution</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Comprehensive business analysis</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Unlimited consultation hours</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Enterprise implementation plan</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Custom product configuration</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Advanced integration design</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>On-site implementation & training</span>
                    </li>
                  </ul>
                  <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Request Custom Consultation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Company, Inc."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="needs"
                        className="block text-gray-700 mb-2">
                        Consultation Needs
                      </label>
                      <textarea
                        id="needs"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Please describe your specific needs and challenges..."></textarea>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                      Submit Request
                    </button>
                  </form>
                </div>
                <div className="flex flex-col justify-center">
                  <img
                    src="https://readdy.ai/api/search-image?query=Business%20consulting%20session%20with%20professionals%20discussing%20technology%20integration%2C%20modern%20office%20setting%20with%20digital%20displays%20showing%20weight%20scale%20data%2C%20professional%20team%20reviewing%20charts%20and%20diagrams%2C%20collaborative%20environment%20with%20blue%20accent%20lighting&width=600&height=400&seq=consult1&orientation=landscape"
                    alt="Consultation Services"
                    className="rounded-lg shadow-md mb-6"
                  />
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 text-blue-800">
                      Why Request a Custom Consultation?
                    </h4>
                    <p className="text-gray-700">
                      Our tailored consultation services are designed to address
                      your specific business challenges and requirements. Our
                      experts will work closely with your team to develop a
                      customized solution that optimizes your operations and
                      maximizes ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Brickspring Enterprises, we combine innovation with expertise
                to deliver unparalleled weight scale technology solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-lightbulb text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Innovation Leadership
                </h3>
                <p className="text-gray-600">
                  Pioneering the latest advancements in weight scale technology
                  and computer integration to keep your business ahead of the
                  curve.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-cogs text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Technical Expertise</h3>
                <p className="text-gray-600">
                  Our team of certified engineers and developers brings decades
                  of combined experience in scale technology and system
                  integration.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-headset text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Customer Support</h3>
                <p className="text-gray-600">
                  Dedicated 24/7 support team committed to ensuring your systems
                  run smoothly with minimal downtime and maximum efficiency.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-chart-line text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Our solutions have helped hundreds of businesses achieve
                  measurable improvements in efficiency, accuracy, and
                  operational costs.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Case Studies */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our innovative solutions have transformed businesses
                across various industries.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-blue-600 font-semibold mb-2">
                    Manufacturing Industry
                  </span>
                  <h3 className="text-2xl font-bold mb-4">
                    Global Manufacturing Co.
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-700">Challenge:</h4>
                    <p className="text-gray-600">
                      Inefficient manual weight recording process causing delays
                      and errors in production tracking.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-700">Solution:</h4>
                    <p className="text-gray-600">
                      Implemented SmartScale Pro with custom WeighConnect
                      Software integration across 12 production facilities.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-700">Results:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>97% reduction in weight recording errors</li>
                      <li>35% increase in production throughput</li>
                      <li>
                        Annual savings of $1.2 million in operational costs
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg italic">
                    <p className="text-gray-700">
                      "Brickspring's solution revolutionized our production
                      tracking capabilities. The seamless integration between
                      our scales and ERP system has eliminated countless hours
                      of manual data entry and significantly improved our
                      accuracy."
                    </p>
                    <p className="font-semibold mt-2">
                      — Sarah Johnson, Operations Director
                    </p>
                  </div>
                </div>
                <div className="bg-blue-600">
                  <img
                    src="https://readdy.ai/api/search-image?query=Modern%20manufacturing%20facility%20with%20advanced%20weight%20scale%20technology%20integrated%20with%20computer%20systems%2C%20workers%20using%20digital%20interfaces%20to%20monitor%20production%20data%2C%20industrial%20setting%20with%20blue%20accent%20lighting%2C%20professional%20environment%20showing%20weight%20data%20visualization%20on%20large%20screens&width=700&height=600&seq=case1&orientation=portrait"
                    alt="Manufacturing Case Study"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="bg-green-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition flex items-center !rounded-button whitespace-nowrap cursor-pointer">
                View All Case Studies
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                        className="block text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="block text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="contactPhone"
                        className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactCompany"
                        className="block text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="contactCompany"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Company, Inc."
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="contactSubject"
                      className="block text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contactSubject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="contactMessage"
                      className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please provide details about your inquiry..."></textarea>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <div className="bg-blue-50 rounded-lg shadow-lg p-8 h-full">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-3 mr-4">
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
                      <div className="bg-blue-600 rounded-full p-3 mr-4">
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
                      <div className="bg-blue-600 rounded-full p-3 mr-4">
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
                      <div className="bg-blue-600 rounded-full p-3 mr-4">
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
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer">
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
