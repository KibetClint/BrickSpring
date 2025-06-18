import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden bg-gradient-to-r from-green-700/70 to-transparent">
        <img
          src="/images/quote-hero.jpg"
          alt="Request a Quote"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/50 to-transparent z-10"></div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
          <div className="flex items-center text-xs sm:text-sm mb-2 text-white/80">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <FaChevronRight className="mx-2" />
            <span className="font-semibold">Request a Quote</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Need a Custom Solution? Request a Quote
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-xl">
            Share your requirements and we'll send over a tailored estimate
            shortly.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Request a Quote
          </h2>

          {submitted ? (
            <div className="text-center">
              <p className="text-green-600 font-semibold mb-4">
                Thank you! Your quote request has been submitted.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {[
                {
                  label: "Full Name",
                  name: "name",
                  type: "text",
                  required: true,
                },
                {
                  label: "Email Address",
                  name: "email",
                  type: "email",
                  required: true,
                },
                {
                  label: "Company / Organization",
                  name: "company",
                  type: "text",
                },
                { label: "Phone Number", name: "phone", type: "tel" },
                {
                  label: "Product / Service",
                  name: "product",
                  type: "text",
                  required: true,
                },
                {
                  label: "Quantity Needed",
                  name: "quantity",
                  type: "number",
                  required: true,
                },
              ].map((field) => (
                <div key={field.name} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required || false}
                    placeholder={field.label}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-800 transition"
                  />
                </div>
              ))}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details / Requirements
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any specific requirements, timeline, etc."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-800 transition"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-md transition text-sm">
                  Submit Quote Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;
