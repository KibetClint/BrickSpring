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
      imgUrl: "/images/UNIWA V710 PDA.png",
      link: "/products",
      pageName: "Explore Products",
    },
    {
      id: 2,
      title: "Optimize Operations with Real-Time Data",
      subtitle: "Harness the power of instant weight analytics",
      imgUrl: "/images/payrollspring.png",
      link: "/consultation",
      pageName: "Get a Consultation",
    },
    {
      id: 3,
      title: "Custom Integration, Maximum ROI",
      subtitle: "Tailored solutions for your unique business needs",
      imgUrl: "/images/cybersecurity.webp",
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
        {/* Hero Slider - responsive heights */}
        <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
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
                <div className="max-w-3xl mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20 text-center">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-4 sm:mb-6">
                    {slide.subtitle}
                  </p>
                  <Link
                    to={slide.link}
                    className="block mx-auto bg-[#236837] hover:bg-[#1a5129] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm md:text-base transition">
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
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-[#236837]">
              Our Products
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#236837] max-w-2xl mx-auto">
              Discover our range of innovative solutions designed to transform
              how weight scales and computers work together.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["All", "Hardware", "Software", "Services"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm md:text-base transition ${
                    activeFilter === cat
                      ? "bg-[#236837] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
                  <div className="w-full h-40 sm:h-48 md:h-56 overflow-hidden">
                    <img
                      src={`/images/${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#236837]">
                        {product.name}
                      </h3>
                      <span className="bg-[#236837]/20 text-[#236837] text-xs sm:text-sm font-medium px-2 py-0.5 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 flex-grow">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Link
                to="/products"
                className="bg-[#236837] hover:bg-[#1a5129] text-white px-6 py-2 rounded-md text-sm sm:text-base md:text-lg transition inline-flex items-center gap-1">
                More Products
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
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
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - responsive */}
        <section className="py-8 bg-[#FFF9E6]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#236837]">
                Why Choose Us
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#236837] max-w-3xl mx-auto">
                At Brickspring Enterprises, we combine innovation with expertise
                to deliver unparalleled weight scale technology solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FaRegLightbulb,
                  title: "Innovation Leadership",
                  desc: "Pioneering the latest advancements in weight scale technology and computer integration.",
                },
                {
                  icon: FaCogs,
                  title: "Technical Expertise",
                  desc: "Our certified engineers bring decades of experience in scale technology and system integration.",
                },
                {
                  icon: FaHeadset,
                  title: "Customer Support",
                  desc: "Dedicated 24/7 support ensuring minimal downtime and maximum efficiency.",
                },
                {
                  icon: FaChartLine,
                  title: "Proven Results",
                  desc: "Helping hundreds of businesses achieve measurable improvements.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#236837]/10 rounded-lg p-6 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-[#236837] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#236837]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#236837]">
                Let's Connect
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#236837] max-w-3xl mx-auto">
                Have questions or ready to get started? Reach out to our team
                today.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <form className="bg-[#FFF9E6] rounded-lg shadow-lg p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-3 py-2 border rounded focus:ring-[#236837] focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-3 py-2 border rounded focus:ring-[#236837] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 border rounded focus:ring-[#236837] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-3 py-2 border rounded focus:ring-[#236837] focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 py-2 border rounded focus:ring-[#236837] focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border rounded focus:ring-[#236837] focus:outline-none"></textarea>
                <button className="w-full bg-[#236837] hover:bg-[#1a5129] text-white py-2 rounded transition">
                  Send Message
                </button>
              </form>
              <div className="space-y-6">
                {[
                  {
                    icon: FaMapMarker,
                    title: "Address",
                    info: "1234 Innovation Way, Tech District, SF, CA 94105",
                  },
                  {
                    icon: FaPhone,
                    title: "Phone",
                    info: "Sales: (800) 123-4567 | Support: (800) 765-4321",
                  },
                  {
                    icon: FaEnvelope,
                    title: "Email",
                    info: "sales@brickspring.com | support@brickspring.com",
                  },
                  {
                    icon: FaClock,
                    title: "Hours",
                    info: "Mon-Fri: 8am-6pm, Sat: 9am-1pm",
                  },
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-[#236837] text-white p-3 rounded-full mr-4">
                      <contact.icon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#236837] mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{contact.info}</p>
                    </div>
                  </div>
                ))}
                <div className="flex space-x-4 mt-4">
                  {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                    (Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="bg-[#236837] text-white p-3 rounded-full hover:bg-[#1a5129] transition">
                        <Icon />
                      </a>
                    )
                  )}
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
