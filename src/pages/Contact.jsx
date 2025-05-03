import React from 'react';

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Contact Us</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We’re here to help you streamline your operations and integrate cutting-edge scale and computing solutions.
            </p>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start">
                <span className="font-semibold w-20">Address:</span>
                <span>Neema Avenue, 20100, Nairobi, Kenya</span>
              </p>
              <p className="flex items-start">
                <span className="font-semibold w-20">Phone:</span>
                <a href="tel:+254725903309" className="hover:underline">+254 725 903309</a>
              </p>
              <p className="flex items-start">
                <span className="font-semibold w-20">Email:</span>
                <a href="mailto:hello@brickspace.com" className="hover:underline">hello@brickspace.com</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message or inquiry"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
