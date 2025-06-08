import React, { useState } from "react";
import { FaHeadset } from "react-icons/fa6";
import { FaFilePdf, FaLaptop, FaPhone } from "react-icons/fa";

export default function Consultation() {
  const [formData] = useState({
    name: "",
    email: "",
    company: "",
    needs: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  const packages = [
    {
      name: "Basic Package",
      price: "Ksh2,500",
      subtitle: "One-time consultation",
      color: "#1F6632",
      popular: false,
      features: [
        { text: "Initial needs assessment", included: true },
        { text: "2-hour consultation session", included: true },
        { text: "Basic implementation plan", included: true },
        { text: "Product recommendations", included: true },
        { text: "Custom integration design", included: false },
        { text: "On-site implementation", included: false },
      ],
    },
    {
      name: "Professional Package",
      price: "Ksh5,000",
      subtitle: "Comprehensive solution",
      color: "#145022",
      popular: true,
      features: [
        { text: "Detailed business analysis", included: true },
        { text: "8-hour consultation (4 sessions)", included: true },
        { text: "Custom implementation plan", included: true },
        { text: "Product recommendations", included: true },
        { text: "Custom integration design", included: true },
        { text: "On-site implementation", included: false },
      ],
    },
    {
      name: "Enterprise Package",
      price: "Ksh10,000",
      subtitle: "End-to-end solution",
      color: "#1F6632",
      popular: false,
      features: [
        { text: "Comprehensive business analysis", included: true },
        { text: "Unlimited consultation hours", included: true },
        { text: "Enterprise implementation plan", included: true },
        { text: "Custom product configuration", included: true },
        { text: "Advanced integration design", included: true },
        { text: "On-site implementation & training", included: true },
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEFAEA] via-[#FFF9E6] to-[#FEFAEA] -z-10" />

      {/* Decorative static elements */}
      <div className="absolute top-32 right-16 w-24 h-24 bg-[#1F6632]/10 rounded-full blur-xl -z-10" />
      <div className="absolute bottom-64 left-16 w-32 h-32 bg-[#1F6632]/5 rounded-full blur-2xl -z-10" />

      <section className="relative bg-gradient-to-r from-[#236837]/80 to-transparent text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/consultation.jpg"
            className="w-full h-full object-cover object-top opacity-20"
            alt="Consultation background"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex items-center mb-4">
            <a
              href="/"
              className="text-blue-200 hover:text-white cursor-pointer">
              <i className="fas fa-home mr-2"></i>Home
            </a>
            <i className="fas fa-chevron-right mx-2 text-blue-300 text-xs"></i>
            <span className="font-semibold">Consultation</span>
          </div>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#1F6632] leading-tight">
              Consultation{" "}
              <span className="inline-block bg-gradient-to-r from-[#1F6632] to-[#4CAF50] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#1F6632] to-[#4CAF50] mx-auto rounded-full mb-6" />
            <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-[#1F6632]/80 leading-relaxed">
              Our expert team provides tailored consultation services to help
              you implement the perfect weight scale integration solution for
              your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-300 ${
                  pkg.popular
                    ? "border-[#1F6632] transform scale-105"
                    : "border-white/20 hover:border-[#1F6632]/30"
                }`}>
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1F6632] text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      POPULAR
                    </div>
                  </div>
                )}

                {/* Header */}
                <div
                  className="p-8 text-center text-white relative overflow-hidden"
                  style={{ backgroundColor: pkg.color }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 relative z-10">
                    {pkg.name}
                  </h3>
                  <p className="text-4xl sm:text-5xl font-bold mb-2 relative z-10">
                    {pkg.price}
                  </p>
                  <p className="text-sm opacity-90 relative z-10">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div className="p-8 flex flex-col flex-grow">
                  <ul className="space-y-4 flex-grow mb-8">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-center transition-colors duration-200 ${
                          feature.included ? "text-[#1F6632]" : "text-gray-400"
                        }`}>
                        <span className="mr-3 text-lg">
                          {feature.included ? "✅" : "❌"}
                        </span>
                        <span className="text-sm sm:text-base">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: pkg.color }}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Consultation Request */}
          <section className="py-16 bg-green-900 text-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Ready to Transform Your Operations?
                  </h2>
                  <p className="text-xl mb-8">
                    Schedule a consultation with our solution experts to discuss
                    your specific challenges and discover how Brickspring's
                    technology can optimize your processes.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <FaHeadset className="fas fa-headset text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Expert Consultation
                        </h3>
                        <p className="text-blue-100">
                          Our specialists will analyze your requirements and
                          recommend tailored solutions for your industry and
                          specific use cases.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <FaLaptop className="fas fa-headset text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Live Demo</h3>
                        <p className="text-blue-100">
                          See our solutions in action with a personalized
                          demonstration focused on your specific industry
                          challenges.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <FaFilePdf className="fas fa-headset text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Technical Documentation
                        </h3>
                        <p className="text-blue-100">
                          Access detailed specifications, integration guides,
                          and implementation resources for our solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="bg-green-600 text-white-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition mr-4 whitespace-nowrap cursor-pointer">
                      <i className="fas fa-download mr-2"></i>Download Brochure
                    </button>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 hover:bg-opacity-10 transition whitespace-nowrap cursor-pointer">
                      <i className="fas fa-phone-alt mr-2"></i>
                      Contact Sales
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
                  <h3 className="text-2xl font-bold mb-6 text-green-800">
                    Schedule a Consultation
                  </h3>
                  <form
                    id="consultationForm"
                    className="space-y-4"
                    onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Industry
                      </label>
                      <div className="relative">
                        <select
                          id="industry"
                          className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 cursor-pointer">
                          <option value="">Select your industry</option>
                          <option value="retail">Retail & Commerce</option>
                          <option value="manufacturing">
                            Manufacturing & Production
                          </option>
                          <option value="logistics">
                            Logistics & Warehousing
                          </option>
                          <option value="healthcare">
                            Healthcare & Laboratory
                          </option>
                          <option value="other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <i className="fas fa-chevron-down text-xs"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us about your specific needs or challenges"
                      />
                    </div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="consent"
                        className="ml-2 block text-sm text-gray-600">
                        I agree to receive communications from Brickspring
                        Enterprises. See our{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-800 hover:bg-blue-700 text-white py-3 rounded-md transition font-semibold whitespace-nowrap">
                      Schedule Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
