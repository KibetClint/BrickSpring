import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeadset } from "react-icons/fa6";
import { FaCheck, FaChevronRight, FaFilePdf, FaLaptop } from "react-icons/fa";

export default function Consultation() {
  const [formData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: "",
    message: "",
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
        "Initial needs assessment",
        "2-hour consultation session",
        "Basic implementation plan",
        "Product recommendations",
      ],
    },
    {
      name: "Professional Package",
      price: "Ksh5,000",
      subtitle: "Comprehensive solution",
      color: "#145022",
      popular: true,
      features: [
        "Detailed business analysis",
        "8-hour consultation (4 sessions)",
        "Custom implementation plan",
        "Product recommendations",
        "Custom integration design",
      ],
    },
    {
      name: "Enterprise Package",
      price: "Ksh10,000",
      subtitle: "End-to-end solution",
      color: "#1F6632",
      popular: false,
      features: [
        "Comprehensive business analysis",
        "Unlimited consultation hours",
        "Enterprise implementation plan",
        "Custom product configuration",
        "Advanced integration design",
        "On-site training & support",
      ],
    },
  ];

  return (
    <div className="bg-[#FFF9E6] text-gray-800">
      <main>
        {/* Header Banner */}
        <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden bg-gradient-to-r from-[#236837]/80 to-transparent text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/consultation.jpg"
              alt="About background"
              className="w-full h-full object-cover object-top opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10 text-center">
            <div className="flex justify-center items-center mb-4 text-xs sm:text-sm">
              <a href="/" className="text-blue-200 hover:text-white">
                Home
              </a>
              <FaChevronRight className="mx-2 text-blue-300" />
              <span className="font-semibold">Consultations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1F6632] leading-tight">
              Consultation{"  "}
              <span className="inline-block bg-gradient-to-r from-[#1F6632] to-[#4CAF50] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#1F6632] to-[#4CAF50] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-[#1F6632]/80 leading-relaxed">
              Our expert team provides tailored consultation to implement
              perfect weight scale integration solutions.
            </p>
          </div>
        </section>

        {/* Packages */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 ${pkg.popular ? "border-2 border-[#1F6632]" : "border"} `}>
                {pkg.popular && (
                  <div className="bg-yellow-400 text-[#1F6632] text-xs font-bold px-3 py-1 text-center">
                    POPULAR
                  </div>
                )}
                <div
                  className="p-6 text-center"
                  style={{ backgroundColor: pkg.color }}>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl font-extrabold text-white mb-1">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-white/80">{pkg.subtitle}</p>
                </div>
                <ul className="p-6 space-y-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-6">
                  <button className="w-full bg-[#1F6632] text-white py-2 rounded hover:bg-[#145022] transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="mb-6">
                Schedule a consultation with our experts to discuss challenges
                and discover optimal solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-3 bg-[#236837] rounded mr-3">
                    <FaHeadset className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Consultation</h3>
                    <p className="text-sm text-gray-600">
                      Tailored recommendations for your industry needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-[#236837] rounded mr-3">
                    <FaLaptop className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Live Demo</h3>
                    <p className="text-sm text-gray-600">
                      See solutions in action with a tailored demo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-[#236837] rounded mr-3">
                    <FaFilePdf className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Technical Docs</h3>
                    <p className="text-sm text-gray-600">
                      Access detailed integration guides and specs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border rounded focus:ring-[#236837]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border rounded focus:ring-[#236837]"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border rounded focus:ring-[#236837]"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-3 py-2 border rounded focus:ring-[#236837]"
              />
              <select className="w-full px-3 py-2 border rounded focus:ring-[#236837]">
                <option value="">Select Industry</option>
                <option>Retail & Commerce</option>
                <option>Manufacturing</option>
                <option>Logistics</option>
                <option>Healthcare</option>
                <option>Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your specific needs"
                className="w-full px-3 py-2 border rounded focus:ring-[#236837]"></textarea>
              <div className="flex items-center">
                <input type="checkbox" id="consent" className="mr-2" />
                <label htmlFor="consent" className="text-sm">
                  I agree to receive communications (Privacy Policy)
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#236837] text-white py-2 rounded hover:bg-[#145022] transition">
                Schedule Consultation
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
