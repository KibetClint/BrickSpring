import React from 'react'

export default function Contact() {
  return (
    <section className="min-h-screen container mx-auto px-6 py-12 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-600">
            We’re here to help you streamline your operations and integrate cutting-edge scale and computing solutions.
          </p>
          <p className="flex items-center space-x-2">
            <span className="font-semibold">Address:</span>
            <span>Neema Avenue, 20100, Nairobi, Kenya</span>
          </p>
          <p className="flex items-center space-x-2">
            <span className="font-semibold">Phone:</span>
            <span>+254 725 903309</span>
          </p>
          <p className="flex items-center space-x-2">
            <span className="font-semibold">Email:</span>
            <span>hello@brickspace.com</span>
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message or inquiry"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
)
}
