import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaClock,
  FaCogs,
  FaEnvelope,
  FaFacebook,
  FaHeadset,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPhone,
  FaRegLightbulb,
  FaTwitter,
} from "react-icons/fa";
import { productsData } from "../components/ProductsCard";

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Revolutionizing Weight Scale Technology Integration",
      subtitle: "Seamless solutions for modern business operations",
      imgUrl: "images/UNIWA V710 PDA.png",
      link: "/products",
      pageName: "Explore Products",
    },
    {
      id: 2,
      title: "Optimize Operations with Real-Time Data",
      subtitle: "Harness the power of instant weight analytics",
      imgUrl: "images/payrollspring.png",
      link: "/consultation",
      pageName: "Get a Consultation",
    },
    {
      id: 3,
      title: "Custom Integration, Maximum ROI",
      subtitle: "Tailored solutions for your unique business needs",
      imgUrl: "images/cybersecurity.webp",
      link: "/solutions",
      pageName: "Custom Solutions",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? productsData.slice(0, 4)
      : productsData.filter((p) => p.category === activeFilter).slice(0, 4);

  return (
    <div className="bg-[#FFF9E6] text-gray-800">
      <main>
        {/* Hero Slider */}
        <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="h-full">
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="relative h-full">
                <img
                  src={slide.imgUrl}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#236837]/100 to-transparent z-10" />
                <div className="max-w-3xl mx-auto px-4 py-16 h-full flex flex-col justify-center items-center relative z-20 text-center">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-8">
                    {slide.subtitle}
                  </p>
                  <Link
                    to={slide.link}
                    className="block mx-auto bg-[#236837] hover:bg-[#1a5129] text-white px-5 py-3 rounded-md text-sm sm:text-base md:text-lg transition">
                    {slide.pageName}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Products Section */}
        <section className="py-6 bg-[#FFF9E6]">
          <div className="text-center mb-12 px-4">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-[#236837]">
              Our Products
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#236837] max-w-2xl mx-auto">
              Discover our range of innovative solutions designed to transform
              how weight scales and computers work together.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
              <div className="flex flex-wrap gap-2">
                {["Hardware", "Software", "Services"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1.5 rounded-full transition ${
                      activeFilter === cat
                        ? "bg-[#236837] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    } text-xs sm:text-sm md:text-base`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
                  <div className="h-48 sm:h-56 w-full">
                    <img
                      src={`/images/${product.image}`}
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
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="/products"
                className="bg-[#236837] hover:bg-[#1a5129] text-white px-9 py-1 rounded-md text-sm sm:text-base md:text-lg transition focus:outline-none focus:ring-2 focus:ring-[#236837] flex items-center gap-2">
                More Products
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="py-2 bg-[#FFF9E6]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#236837]">
                Why Choose Us
              </h2>
              <p className="text-xl text-[#236837] max-w-3xl mx-auto">
                At Brickspring Enterprises, we combine innovation with expertise
                to deliver unparalleled weight scale technology solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#236837]/10 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-[#236837] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaRegLightbulb className="fas fa-lightbulb text-white text-3xl" />
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
                  <FaCogs className="fas fa-cogs text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#236837]">
                  Technical Expertise
                </h3>
                <p className="text-gray-600">
                  Our team of certified engineers and developers brings decades
                  of combined experience in scale technology and system
                  integration.
                </p>
              </div>
              <div className="bg-[#236837]/10 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-[#236837] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHeadset className="fas fa-headset text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#236837]">
                  Customer Support
                </h3>
                <p className="text-gray-600">
                  Dedicated 24/7 support team committed to ensuring your systems
                  run smoothly with minimal downtime and maximum efficiency.
                </p>
              </div>
              <div className="bg-[#236837]/10 rounded-lg p-8 text-center transition-transform hover:scale-105">
                <div className="w-20 h-20 bg-[#236837] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaChartLine className="fas fa-chart-line text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#236837]">
                  Proven Results
                </h3>
                <p className="text-gray-600">
                  Our solutions have helped hundreds of businesses achieve
                  measurable improvements in efficiency, accuracy, and
                  operational costs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 bg-[#FFF9E6]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#236837]">
                Let's Connect
              </h2>
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
                        className="block text-gray-700 mb-2">
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
                        className="block text-gray-700 mb-2">
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
                        className="block text-gray-700 mb-2">
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
                        className="block text-gray-700 mb-2">
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
                      className="block text-gray-700 mb-2">
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
                      className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#236837]"
                      placeholder="Please provide details about your inquiry..."></textarea>
                  </div>
                  <button className="w-full bg-[#236837] hover:bg-[#1a5129] text-white py-3 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <div className="bg-[#236837]/10 rounded-lg shadow-lg p-8 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-[#236837]">
                    Get In Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-[#236837] rounded-full p-3 mr-4">
                        <FaMapMarker className="fas fa-map-marker-alt text-white" />
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
                        <FaPhone className="fas fa-phone text-white" />
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
                        <FaEnvelope className="fas fa-envelope text-white" />
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
                        <FaClock className="fas fa-clock text-white" />
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
                        className="bg-[#236837] hover:bg-[#1a5129] text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer">
                        <FaLinkedin className="fab fa-linkedin-in" />
                      </a>
                      <a
                        href="#"
                        className="bg-[#236837] hover:bg-[#1a5129] text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer">
                        <FaTwitter className="fab fa-twitter" />
                      </a>
                      <a
                        href="#"
                        className="bg-[#236837] hover:bg-[#1a5129] text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer">
                        <FaFacebook className="fab fa-facebook-f" />
                      </a>
                      <a
                        href="#"
                        className="bg-[#236837] hover:bg-[#1a5129] text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer">
                        <FaInstagram className="fab fa-instagram color-red" />
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
