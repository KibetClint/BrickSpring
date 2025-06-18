import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

const faqs = [
  {
    question: "What does Brickspring Enterprises specialize in?",
    answer:
      "Brickspring Enterprises specializes in integrating weight-scale technology with computing systems to deliver innovative and reliable IT solutions for businesses.",
  },
  {
    question: "When was Brickspring Enterprises established?",
    answer:
      "Brickspring Enterprises was established in 2023 with a vision to transform how technology and measurement systems work together.",
  },
  {
    question: "What industries does Brickspring serve?",
    answer:
      "We serve multiple industries including manufacturing, processing, construction, and retail, offering tailored IT and scale integration solutions.",
  },
  {
    question: "What products do you offer?",
    answer:
      "We offer table scales, pallet scales, low-profile platform scales, computing accessories, rugged phones, and Bluetooth printers, among others.",
  },
  {
    question: "Do you provide custom software development?",
    answer:
      "Yes, we develop custom point-of-sale (POS) software that integrates scale readings with product databases and financial systems.",
  },
  {
    question: "What cybersecurity services do you provide?",
    answer:
      "Our cybersecurity services include 24/7 threat monitoring, incident response, penetration testing, and compliance support.",
  },
  {
    question: "How can I contact Brickspring Enterprises?",
    answer:
      "You can reach us via email at hello@brickspace.com or call +254 725 903309. Our office is located on Neema Avenue, Nairobi.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] bg-gradient-to-r from-[#1F6632]/70 to-transparent overflow-hidden">
        <img
          src="/images/faqs.jpg"
          alt="FAQs Hero"
          className="absolute inset-0 w-full h-full object-cover object-bottom-right opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#1F6632]/70 to-transparent z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
          <div className="flex items-center text-xs sm:text-sm mb-2 text-white/80">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <FaChevronRight className="mx-2" />
            <span className="font-semibold">FAQs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1F6632] leading-tight">
            Frequently {"  "}
            <span className="inline-block bg-gradient-to-r from-[#1F6632] to-[#4CAF50] bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-[#1F6632]/90 leading-relaxed">
            Find quick answers to the questions we hear most often.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100">
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`text-xl text-gray-700 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen py-4" : "max-h-0"}`}>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
