import React from 'react';

export default function Consultation() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: '#FEFAEA' }} // warm cream page bg
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1F6632]">
            Consultation Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#1F6632]/80">
            Our expert team provides tailored consultation services to help you implement
            the perfect weight scale integration solution for your business.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Basic Package */}
          <div className="flex flex-col bg-[#FFFEFB] rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 text-center" style={{ backgroundColor: '#1F6632' }}>
              <h3 className="text-2xl font-bold text-white">Basic Package</h3>
              <p className="text-4xl font-bold mt-2 text-white">$499</p>
              <p className="text-sm mt-1 text-[#FEFAEA]">One-time consultation</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 flex-grow">
                {[
                  'Initial needs assessment',
                  '2-hour consultation session',
                  'Basic implementation plan',
                  'Product recommendations',
                ].map(item => (
                  <li key={item} className="flex items-center text-[#1F6632]">
                    <span className="mr-2">✔️</span>
                    <span>{item}</span>
                  </li>
                ))}
                {[
                  'Custom integration design',
                  'On-site implementation',
                ].map(item => (
                  <li key={item} className="flex items-center text-gray-400">
                    <span className="mr-2">❌</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 w-full py-3 rounded-md text-white transition focus:outline-none focus:ring-2 focus:ring-[#1F6632]"
                style={{ backgroundColor: '#1F6632' }}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Professional Package */}
          <div className="flex flex-col bg-[#FFFEFB] rounded-2xl shadow-xl overflow-hidden transform scale-100 md:scale-105 border-2 border-[#1F6632]">
            <div className="p-6 text-center relative" style={{ backgroundColor: '#145022' }}>
              <div
                className="absolute top-0 right-0 text-xs font-bold px-3 py-1"
                style={{
                  backgroundColor: '#FFFDEE',
                  color: '#1F6632',
                  transform: 'translate(8px, -8px) rotate(12deg)',
                }}
              >
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-[#FEFAEA]">Professional Package</h3>
              <p className="text-4xl font-bold mt-2 text-[#FEFAEA]">$1,499</p>
              <p className="text-sm mt-1 text-[#FEFAEA]">Comprehensive solution</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 flex-grow">
                {[
                  'Detailed business analysis',
                  '8-hour consultation (4 sessions)',
                  'Custom implementation plan',
                  'Product recommendations',
                  'Custom integration design',
                ].map(item => (
                  <li key={item} className="flex items-center text-[#1F6632]">
                    <span className="mr-2">✔️</span>
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex items-center text-gray-400">
                  <span className="mr-2">❌</span>
                  <span>On-site implementation</span>
                </li>
              </ul>
              <button
                className="mt-6 w-full py-3 rounded-md text-white transition focus:outline-none focus:ring-2 focus:ring-[#1F6632]"
                style={{ backgroundColor: '#145022' }}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="flex flex-col bg-[#FFFEFB] rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 text-center" style={{ backgroundColor: '#1F6632' }}>
              <h3 className="text-2xl font-bold text-white">Enterprise Package</h3>
              <p className="text-4xl font-bold mt-2 text-white">$4,999</p>
              <p className="text-sm mt-1 text-[#FEFAEA]">End-to-end solution</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-3 flex-grow">
                {[
                  'Comprehensive business analysis',
                  'Unlimited consultation hours',
                  'Enterprise implementation plan',
                  'Custom product configuration',
                  'Advanced integration design',
                  'On-site implementation & training',
                ].map(item => (
                  <li key={item} className="flex items-center text-[#1F6632]">
                    <span className="mr-2">✔️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 w-full py-3 rounded-md text-white transition focus:outline-none focus:ring-2 focus:ring-[#1F6632]"
                style={{ backgroundColor: '#1F6632' }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Custom Consultation Request */}
        <div className="bg-[#FFFEFB] rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-[#1F6632]">
            Request Custom Consultation
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form className="space-y-6">
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Your Company, Inc.' },
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block mb-2 text-[#1F6632]">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{ borderColor: '#1F6632', color: '#1F6632' }}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="needs" className="block mb-2 text-[#1F6632]">
                  Consultation Needs
                </label>
                <textarea
                  id="needs"
                  rows={4}
                  placeholder="Please describe your specific needs and challenges..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  style={{ borderColor: '#1F6632', color: '#1F6632' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-md text-white transition focus:outline-none focus:ring-2 focus:ring-[#1F6632]"
                style={{ backgroundColor: '#1F6632' }}
              >
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
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#FFFCED' }}>
                <h4 className="text-lg sm:text-xl font-bold mb-2 text-[#1F6632]">
                  Why Request a Custom Consultation?
                </h4>
                <p className="text-sm sm:text-base text-[#1F6632]/80">
                  Our tailored consultation services are designed to address your specific
                  business challenges and requirements. Our experts will work closely with
                  your team to develop a customized solution that optimizes your operations
                  and maximizes ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
