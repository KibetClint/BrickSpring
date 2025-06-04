// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from "react";
import {
  FaBalanceScale,
  FaEnvelope,
  FaFacebookF,
  FaGraduationCap,
  FaInstagram,
  FaLeaf,
  FaLightbulb,
  FaLinkedinIn,
  FaPhone,
  FaUsers,
} from "react-icons/fa";
import { FaGlobe, FaSquareXTwitter } from "react-icons/fa6";

const About = () => {
  // Removed unused activeTab state

  const team = [
    {
      id: 1,
      name: "Enoch Koech",
      position: "Chief Executive Officer",
      paragraph:
        "Visionary leader driving our strategic direction and fostering partnerships.",
      image: "/images/C.E.O.jpg",
    },
    {
      id: 2,
      name: "Japhet Kibet",
      position: "Chief Technical Officer",
      paragraph:
        "The technical challenges we solve at Brickspring are fascinating. We're constantly pushing the boundaries of what's possible in weight scale technology integration.",
      image: "/images/KIBET.jpg",
    },
    {
      id: 3,
      name: "Clinton Kibet",
      position: "Software Engineer",
      paragraph:
        "I'm proud to represent a company that puts customers first. The solutions we provide make a real difference in our clients' operations and efficiency.",
      image: "/images/CLINT.jpg",
    },
    {
      id: 3,
      name: "Hillary Ngeno",
      position: "Technician",
      paragraph:
        "I'm proud to represent a company that puts customers first. The solutions we provide make a real difference in our clients' operations and efficiency.",
      image: "/images/HILLARY.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-green-800">
      <main className="pt-0">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r  from-[#236837]/80 to-transparent text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20environment%20with%20team%20collaboration%2C%20elegant%20business%20setting%20with%20blue%20color%20scheme%2C%20professional%20workspace%20with%20subtle%20technology%20elements%2C%20clean%20minimal%20design%20with%20soft%20lighting%2C%20high%20quality%20professional%20photography&width=1440&height=500&seq=about-hero&orientation=landscape"
              alt="About Brickspring Enterprises"
              className="w-full h-full object-cover object-top opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="flex items-center mb-4">
              <a
                href="https://readdy.ai/home/c125cf22-2be8-43c6-945e-47ccd4911098/3caed3c2-93dd-4704-9eeb-fabe4faf526e"
                data-readdy="true"
                className="text-green-200 hover:text-white cursor-pointer">
                <i className="fas fa-home mr-2"></i>Home
              </a>
              <i className="fas fa-chevron-right mx-2 text-green-300 text-xs"></i>
              <span className="font-semibold">About Us</span>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">
                About Brickspring Enterprises
              </h1>
              <p className="text-xl mb-8">
                We're on a mission to transform industries through innovative
                weight scale technology. Since 2005, we've been pioneering
                solutions that connect precision measurement with intelligent
                data systems, empowering businesses to make better decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-700">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2005 by a team of engineers and business
                  visionaries, Brickspring Enterprises began with a simple idea:
                  weight scales should do more than just measure—they should
                  provide actionable insights that drive business value.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  What started as a small operation in San Francisco has grown
                  into a global enterprise with offices across four continents.
                  Today, our solutions power critical operations for thousands
                  of businesses in retail, manufacturing, healthcare, logistics,
                  and beyond.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our commitment to innovation, precision, and customer success
                  has established Brickspring as the industry leader in
                  integrated weighing technology solutions.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition mt-4 !rounded-button whitespace-nowrap cursor-pointer">
                  Learn More About Our Journey
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                  <div className="text-4xl font-bold text-blue-700 mb-2">
                    20+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Years in Business
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                  <div className="text-4xl font-bold text-blue-700 mb-2">
                    35+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Countries Served
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                  <div className="text-4xl font-bold text-blue-700 mb-2">
                    5,000+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Clients Worldwide
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                  <div className="text-4xl font-bold text-blue-700 mb-2">
                    350+
                  </div>
                  <div className="text-gray-700 font-medium">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-green-700">
                Our Mission & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Brickspring, we're guided by a clear mission and core values
                that shape everything we do.
              </p>
            </div>

            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-green-700">
                  Our Mission
                </h3>
                <p className="text-xl text-gray-700">
                  To empower businesses with intelligent weighing solutions that
                  transform data into actionable insights, driving efficiency,
                  accuracy, and growth across industries.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaLightbulb className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-700">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  We continuously push the boundaries of what's possible,
                  developing cutting-edge solutions that anticipate and address
                  evolving industry needs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaBalanceScale className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-700">
                  Precision
                </h3>
                <p className="text-gray-700">
                  We are committed to accuracy in everything we do, from the
                  measurements our products provide to the way we conduct
                  business with our clients and partners.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaUsers className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-700">
                  Collaboration
                </h3>
                <p className="text-gray-700">
                  We believe in the power of partnership—working closely with
                  our clients, understanding their unique challenges, and
                  developing tailored solutions together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Social Responsibility */}
        <section className="py-0 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-green-700">
                Corporate Social Responsibility
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to making a positive impact on our communities
                and the environment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaLeaf className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-700">
                  Environmental Sustainability
                </h3>
                <p className="text-gray-700">
                  Our commitment to reducing environmental impact includes
                  sustainable manufacturing practices, energy-efficient
                  facilities, and a comprehensive recycling program.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaGraduationCap className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-700">
                  STEM Education
                </h3>
                <p className="text-gray-700">
                  We partner with schools and universities to promote STEM
                  education, offering scholarships, internships, and educational
                  resources to develop future innovators.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaUsers className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-700">
                  Community Engagement
                </h3>
                <p className="text-gray-700">
                  Through volunteer programs and charitable donations, we
                  actively support the communities where our employees live and
                  work around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-green-700">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The talented individuals who make Brickspring's success
                possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {team.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 rounded-lg shadow-lg p-8 transition-transform hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-900 pl-4 italic text-gray-600">
                    "{testimonial.paragraph}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}

      </main>
    </div>
  );
};

export default About;
