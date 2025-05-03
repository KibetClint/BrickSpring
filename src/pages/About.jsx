import React from 'react';

export default function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Company Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Brickspring Enterprises</h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg lg:text-xl">
          Established in 2023, Brickspring Enterprises is a leading IT firm dedicated to revolutionizing how weight scales and computer systems work together. Our mission is to provide innovative and reliable technology solutions tailored to the specific needs of our clients, ensuring they achieve operational excellence and sustainable growth.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 text-base sm:text-lg lg:text-xl">
          We envision a future where technology seamlessly integrates into various industries, improving processes and driving growth. Our vision is to be the go-to firm recognized for pioneering advancements in weight scale technology and computer systems.
        </p>
      </div>

      {/* Team Section */}
      <div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">Our Leadership Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Members */}
          {[
            { name: 'Enoch Koech', title: 'Chief Executive Officer', img: '/src/assets/img/C.E.O.jpg', desc: 'Visionary leader driving our strategic direction and fostering partnerships.' },
            { name: 'Japheth Kibet', title: 'Chief Technology Officer', img: '/src/assets/img/KIBET.jpg', desc: 'Leading R&D and innovation to deliver cutting-edge scale-integration solutions.' },
            { name: 'Hillary Kipyegon', title: 'Technician', img: '/src/assets/img/HILLARY.jpg', desc: 'Ensuring seamless hardware integration and on-site support for our clients.' },
            { name: 'Clinton Kibet', title: 'Software Engineer', img: '/src/assets/img/CLINT.jpg', desc: 'Ensuring seamless software integration and development on-site and off-site support for our clients.' }
          ].map(member => (
            <div key={member.name} className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col items-center">
              <div className="w-32 h-32 mb-4">
                <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold">{member.name}</h4>
              <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">{member.title}</p>
              <p className="text-gray-600 text-sm sm:text-base">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company Timeline */}
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">Our Journey</h3>
        <ol className="relative border-l-2 border-blue-600 ml-4 sm:ml-6 lg:ml-8">
          {[
            { year: '2023', title: 'Founded', desc: 'Brickspring Enterprises launches with a vision to integrate weight-scale and computing technologies.' },
            { year: '2024', title: 'Pilot Programs', desc: 'Completed pilot integrations across manufacturing, construction, and retail sectors.' },
            { year: '2025', title: 'Expansion & Innovation', desc: 'Expanded service offerings and began R&D for next-generation IoT scale solutions.' }
          ].map((step, i) => (
            <li key={step.year} className={`mb-8 ml-6 relative ${i === 2 ? 'mb-0' : ''}`}>
              <span className="absolute -left-4 top-1 w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white"></span>
              <h4 className="text-xl sm:text-2xl font-semibold">{step.year} – {step.title}</h4>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
