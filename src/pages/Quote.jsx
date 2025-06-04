import React, { useState } from "react";

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
    // In a real app, you would send formData to your backend here.
    console.log("Quote request submitted:", formData);
    setSubmitted(true);
    // Optionally reset form:
    // setFormData({ name: "", email: "", company: "", phone: "", product: "", quantity: "", details: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Company */}
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your company name"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(123) 456-7890"
              />
            </div>

            {/* Product */}
            <div className="mb-4">
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Product / Service
              </label>
              <input
                type="text"
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="E.g., SmartScale Pro"
              />
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity Needed
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1"
              />
            </div>

            {/* Additional Details */}
            <div className="mb-6">
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Additional Details / Requirements
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any specific requirements, delivery timeline, etc."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition text-sm"
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Quote;
