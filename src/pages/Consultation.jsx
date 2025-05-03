import React from 'react';

export default function Consultation() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Consultation Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert team provides tailored consultation services to help you implement the perfect weight scale integration solution for your business.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Basic Package */}
          <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 p-6 text-white text-center">
              <h3 className="text-2xl font-bold">Basic Package</h3>
              <p className="text-4xl font-bold mt-2">$499</p>
              <p className="text-sm mt-1">One-time consultation</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 flex-grow">
                {[
                  'Initial needs assessment',
                  '2-hour consultation session',
                  'Basic implementation plan',
                  'Product recommendations'
                ].map(item => (
                  <li key={item} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>{item}</span>
                  </li>
                ))}
                {[
                  'Custom integration design',
                  'On-site implementation'
                ].map(item => (
                  <li key={item} className="flex items-center text-gray-400">
                    <i className="fas fa-times text-red-400 mr-2"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-400">
                Book Now
              </button>
            </div>
          </div>

          {/* Professional Package */}
          <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden transform scale-100 md:scale-105 border-2 border-blue-500">
            <div className="bg-blue-700 p-6 text-white text-center relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold">Professional Package</h3>
              <p className="text-4xl font-bold mt-2">$1,499</p>
              <p className="text-sm mt-1">Comprehensive solution</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 flex-grow">
                {[
                  'Detailed business analysis',
                  '8-hour consultation (4 sessions)',
                  'Custom implementation plan',
                  'Product recommendations',
                  'Custom integration design'
                ].map(item => (
                  <li key={item} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-times text-red-400 mr-2"></i>
                  <span>On-site implementation</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-500">
                Book Now
              </button>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 p-6 text-white text-center">
              <h3 className="text-2xl font-bold">Enterprise Package</h3>
              <p className="text-4xl font-bold mt-2">$4,999</p>
              <p className="text-sm mt-1">End-to-end solution</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              {[
                'Comprehensive business analysis',
                'Unlimited consultation hours',
                'Enterprise implementation plan',
                'Custom product configuration',
                'Advanced integration design',
                'On-site implementation & training'
              ].map(item => (
                <li key={item} className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>{item}</span>
                </li>
              ))}
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-400">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Custom Consultation Request */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">Request Custom Consultation</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form className="space-y-6">
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Your Company, Inc.' }
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-gray-700 mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="needs" className="block text-gray-700 mb-2">Consultation Needs</label>
                <textarea
                  id="needs"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please describe your specific needs and challenges..."
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-500">
                Submit Request
              </button>
            </form>

            <div className="flex flex-col justify-center space-y-6">
              <div className="w-full aspect-w-3 aspect-h-2">
                <img
                  src="https://readdy.ai/api/search-image?query=Business%20consulting%20session%20with%20professionals%20discussing%20technology%20integration%2C%20modern%20office%20setting%20with%20digital%20displays%20showing%20weight%20scale%20data%2C%20professional%20team%20reviewing%20charts%20and%20diagrams%2C%20collaborative%20environment%20with%20blue%20accent%20lighting&width=800&height=600&orientation=landscape"
                  alt="Consultation Services"
                  className="rounded-2xl shadow-md object-cover w-full h-full"
                />
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-bold mb-2 text-blue-800">Why Request a Custom Consultation?</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Our tailored consultation services are designed to address your specific business challenges and requirements. Our experts will work closely with your team to develop a customized solution that optimizes your operations and maximizes ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
