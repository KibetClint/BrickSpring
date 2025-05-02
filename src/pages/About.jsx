import React from 'react';

export default function AboutUs() {
  return (
    <section className=" mx-auto p-6 space-y-12">
      {/* Company Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-4">About Brickspring Enterprises</h2>
        <p className="text-gray-700 leading-relaxed">
          Established in 2023, Brickspring Enterprises is a leading IT firm dedicated to revolutionizing how weight scales and computer systems work together. Our mission is to provide innovative and reliable technology solutions tailored to the specific needs of our clients, ensuring they achieve operational excellence and sustainable growth.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We envision a future where technology seamlessly integrates into various industries, improving processes and driving growth. Our vision is to be the go-to firm recognized for pioneering advancements in weight scale technology and computer systems.
        </p>
      </div>

      {/* Team Section */}
      <div>
        <h3 className="text-3xl font-semibold text-center mb-8">Our Leadership Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CEO */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img src="/src/assets/img/C.E.O.jpg" alt="Enoch Koech" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
            <h4 className="text-xl font-bold">Enoch Koech</h4>
            <p className="text-blue-600 font-medium mb-2">Chief Executive Officer</p>
            <p className="text-gray-600">Visionary leader driving our strategic direction and fostering partnerships.</p>
          </div>
          {/* CTO */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img src="/src/assets/img/KIBET.jpg" alt="Japheth Kibet" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
            <h4 className="text-xl font-bold">Japheth Kibet</h4>
            <p className="text-blue-600 font-medium mb-2">Chief Technology Officer</p>
            <p className="text-gray-600">Leading R&D and innovation to deliver cutting-edge scale-integration solutions.</p>
          </div>
          {/* Lead Technician */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img src="/src/assets/img/HILLARY.jpg" alt="Hillary Kipyegon" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
            <h4 className="text-xl font-bold">Hillary Kipyegon</h4>
            <p className="text-blue-600 font-medium mb-2">Technician</p>
            <p className="text-gray-600">Ensuring seamless hardware integration and on-site support for our clients.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img src="/src/assets/img/CLINT.jpg" alt="Clinton Kibet" className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
            <h4 className="text-xl font-bold">Clinton Kibet</h4>
            <p className="text-blue-600 font-medium mb-2">Software Engineer</p>
            <p className="text-gray-600">Ensuring seamless Software integration and development on-site and off-site support for our clients.</p>
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-3xl font-semibold mb-6">Our Journey</h3>
        <ol className="border-l-2 border-blue-600 relative">
          <li className="mb-8 ml-6 relative">
            <span className="absolute -left-3 top-1 flex justify-center items-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white"></span>
            <h4 className="text-xl font-semibold">2023 – Founded</h4>
            <p className="text-gray-600">Brickspring Enterprises launches with a vision to integrate weight-scale and computing technologies.</p>
          </li>
          <li className="mb-8 ml-6 relative">
            <span className="absolute -left-3 top-1 flex justify-center items-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white"></span>
            <h4 className="text-xl font-semibold">2024 – Pilot Programs</h4>
            <p className="text-gray-600">Completed pilot integrations across manufacturing, construction, and retail sectors.</p>
          </li>
          <li className="ml-6 relative">
            <span className="absolute -left-3 top-1 flex justify-center items-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white"></span>
            <h4 className="text-xl font-semibold">2025 – Expansion & Innovation</h4>
            <p className="text-gray-600">Expanded service offerings and began R&D for next-generation IoT scale solutions.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
