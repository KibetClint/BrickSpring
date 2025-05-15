import React from 'react';

export default function Contact() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: '#FEFAEA' }} // warm cream page bg
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#1F6632]">
            Contact Us
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#1F6632]/80">
            Have questions or ready to get started? Reach out to our team today.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form
              className="rounded-lg shadow-lg p-8"
              style={{ backgroundColor: '#FFFEFB' }} // very-light cream
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  { id: 'contactName', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                  { id: 'contactEmail', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  { id: 'contactPhone', label: 'Phone Number', type: 'tel', placeholder: '(123) 456-7890' },
                  { id: 'contactCompany', label: 'Company', type: 'text', placeholder: 'Your Company, Inc.' },
                ].map(field => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block mb-2 font-medium"
                      style={{ color: '#1F6632' }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ borderColor: '#1F6632', color: '#1F6632' }}
                    />
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="contactSubject"
                  className="block mb-2 font-medium"
                  style={{ color: '#1F6632' }}
                >
                  Subject
                </label>
                <input
                  id="contactSubject"
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  style={{ borderColor: '#1F6632', color: '#1F6632' }}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="contactMessage"
                  className="block mb-2 font-medium"
                  style={{ color: '#1F6632' }}
                >
                  Message
                </label>
                <textarea
                  id="contactMessage"
                  rows={5}
                  placeholder="Please provide details about your inquiry..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  style={{ borderColor: '#1F6632', color: '#1F6632' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-md text-white transition focus:outline-none focus:ring-2"
                style={{ backgroundColor: '#1F6632', borderColor: '#1F6632' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div
              className="rounded-lg shadow-lg p-8 h-full"
              style={{ backgroundColor: '#FFFCED' }} // alternate cream
            >
              <h3 className="text-2xl font-bold mb-6 text-[#1F6632]">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: 'map-marker-alt',
                    label: 'Address',
                    lines: ['1234 Innovation Way', 'Tech District', 'San Francisco, CA 94105'],
                  },
                  {
                    icon: 'phone',
                    label: 'Phone',
                    lines: ['Sales: (800) 123-4567', 'Support: (800) 765-4321'],
                  },
                  {
                    icon: 'envelope',
                    label: 'Email',
                    lines: ['Sales: sales@brickspring.com', 'Support: support@brickspring.com'],
                  },
                  {
                    icon: 'clock',
                    label: 'Business Hours',
                    lines: [
                      'Monday - Friday: 8:00 AM - 6:00 PM PST',
                      'Saturday: 9:00 AM - 1:00 PM PST',
                      'Sunday: Closed',
                    ],
                  },
                ].map(info => (
                  <div key={info.label} className="flex items-start">
                    <div
                      className="rounded-full p-3 mr-4 flex-shrink-0"
                      style={{ backgroundColor: '#1F6632' }}
                    >
                      <i className={`fas fa-${info.icon} text-white`} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1" style={{ color: '#1F6632' }}>
                        {info.label}
                      </h4>
                      <p className="text-sm" style={{ color: '#1F6632', opacity: 0.8 }}>
                        {info.lines.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-4 text-[#1F6632]">Connect With Us</h4>
                <div className="flex space-x-4">
                  {['linkedin-in','twitter','facebook-f','instagram'].map((soc) => (
                    <a
                      key={soc}
                      href="#"
                      className="rounded-full w-10 h-10 flex items-center justify-center transition"
                      style={{ backgroundColor: '#1F6632' }}
                    >
                      <i className={`fab fa-${soc} text-white`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
