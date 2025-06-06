import React, { useState } from "react";

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 text-left">
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
