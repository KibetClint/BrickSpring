import React from 'react'

export default function Consultation() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Consultation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert team provides tailored consultation services to help you implement the perfect weight scale integration solution for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 p-6 text-white text-center">
              <h3 className="text-2xl font-bold">Basic Package</h3>
              <p className="text-4xl font-bold mt-2">$499</p>
              <p className="text-sm mt-1">One-time consultation</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Initial needs assessment</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>2-hour consultation session</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Basic implementation plan</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Product recommendations</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-times text-red-400 mr-2"></i>
                  <span>Custom integration design</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-times text-red-400 mr-2"></i>
                  <span>On-site implementation</span>
                </li>
              </ul>
              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition whitespace-nowrap">
                Book Now
              </button>
            </div>
          </div>

          {/* Professional Package */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform scale-105 border-2 border-blue-500">
            <div className="bg-blue-700 p-6 text-white text-center relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold">Professional Package</h3>
              <p className="text-4xl font-bold mt-2">$1,499</p>
              <p className="text-sm mt-1">Comprehensive solution</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Detailed business analysis</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>8-hour consultation (4 sessions)</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Custom implementation plan</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Product recommendations</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Custom integration design</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-times text-red-400 mr-2"></i>
                  <span>On-site implementation</span>
                </li>
              </ul>
              <button className="w-full mt-8 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md transition whitespace-nowrap">
                Book Now
              </button>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 p-6 text-white text-center">
              <h3 className="text-2xl font-bold">Enterprise Package</h3>
              <p className="text-4xl font-bold mt-2">$4,999</p>
              <p className="text-sm mt-1">End-to-end solution</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Comprehensive business analysis</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Unlimited consultation hours</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Enterprise implementation plan</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Custom product configuration</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Advanced integration design</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>On-site implementation & training</span>
                </li>
              </ul>
              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition whitespace-nowrap">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Request Custom Consultation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Company, Inc."
                  />
                </div>
                <div>
                  <label htmlFor="needs" className="block text-gray-700 mb-2">Consultation Needs</label>
                  <textarea
                    id="needs"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please describe your specific needs and challenges..."
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition whitespace-nowrap">
                  Submit Request
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center">
              <img
                src="https://readdy.ai/api/search-image?query=Business%20consulting%20session%20with%20professionals%20discussing%20technology%20integration%2C%20modern%20office%20setting%20with%20digital%20displays%20showing%20weight%20scale%20data%2C%20professional%20team%20reviewing%20charts%20and%20diagrams%2C%20collaborative%20environment%20with%20blue%20accent%20lighting&width=600&height=400&seq=consult1&orientation=landscape"
                alt="Consultation Services"
                className="rounded-lg shadow-md mb-6"
              />
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-blue-800">Why Request a Custom Consultation?</h4>
                <p className="text-gray-700">
                  Our tailored consultation services are designed to address your specific business challenges and requirements. Our experts will work closely with your team to develop a customized solution that optimizes your operations and maximizes ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
