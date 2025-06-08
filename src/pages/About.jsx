// Tailwind styling adjusted to reflect Brickspring's brand colors (#236434) and white text where suitable
// Font styles remain semantically clear and consistent

import React from "react";
import {
  FaBalanceScale,
  FaChevronRight,
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
      id: 4,
      name: "Hillary Ngeno",
      position: "Technician",
      paragraph:
        "Precision and service matter. I'm proud to help deliver reliable solutions to our customers.",
      image: "/images/HILLARY.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffbf0] text-[#236434]">
      <main>
        <section className="relative bg-gradient-to-r from-[#236837]/80 to-transparent text-white h-[60vh] sm:h-[50vh] lg:h-[80vh] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/consultation.jpg"
              className="w-full h-full object-cover object-top opacity-20"
              alt="Consultation background"
            />
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="flex items-center mb-4">
              <a
                href="/"
                className="text-blue-200 hover:text-white cursor-pointer">
                <i className="fas fa-home mr-2"></i>Home
              </a>
              <i className="fas fa-chevron-right mx-2 text-blue-300 text-xs"></i>
              <span className="font-semibold">About Us</span>
            </div>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#1F6632] leading-tight">
                Who We{" "}
                <span className="inline-block bg-gradient-to-r from-[#1F6632] to-[#4CAF50] bg-clip-text text-transparent">
                  Are
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-[#1F6632] to-[#4CAF50] mx-auto rounded-full mb-6" />
              <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-[#1F6632]/80 leading-relaxed">
                We're on a mission to transform industries through innovative
                weight scale technology. Since 2023, we've been pioneering
                solutions that connect precision measurement with intelligent
                data systems.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg mb-6">
                  Brickspring Enterprises began with a vision: to unify weighing
                  technology and computing systems for smarter business
                  solutions.
                </p>
                <p className="text-lg mb-6">
                  From Nairobi to the world, we now support clients in
                  construction, logistics, retail, and manufacturing by
                  providing integrated systems that improve data accuracy and
                  operational efficiency.
                </p>
                <p className="text-lg mb-6">
                  We're proud of our roots and excited for the future as we
                  expand our innovation and impact.
                </p>
                {/* <button className="bg-[#236434] hover:bg-[#1a5129] text-white px-6 py-3 rounded-md mt-4 transition">
                  Learn More About Our Journey
                </button> */}
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white text-center p-6 shadow-md rounded-md">
                  <div className="text-4xl font-bold mb-2">2023</div>
                  <div className="text-sm font-medium">Year Founded</div>
                </div>
                <div className="bg-white text-center p-6 shadow-md rounded-md">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-sm font-medium">Sectors Served</div>
                </div>
                <div className="bg-white text-center p-6 shadow-md rounded-md">
                  <div className="text-4xl font-bold mb-2">4</div>
                  <div className="text-sm font-medium">Core Services</div>
                </div>
                <div className="bg-white text-center p-6 shadow-md rounded-md">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm font-medium">
                    Client-Centric Focus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-xl max-w-3xl mx-auto">
                We aim to simplify data collection and decision-making through
                technology that's accurate, adaptable, and empowering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow p-6 text-center transition-transform hover:scale-105">
                <FaLightbulb className="text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p>
                  We constantly explore and create technologies that redefine
                  efficiency and usability in our industry.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center transition-transform hover:scale-105">
                <FaBalanceScale className="text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Precision</h3>
                <p>
                  Our systems prioritize accuracy, from weighing to analytics
                  and beyond.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center transition-transform hover:scale-105">
                <FaUsers className="text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p>
                  Partnership and client engagement fuel our tailored solutions
                  and service quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Corporate Social Responsibility
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Brickspring is committed to sustainable operations, ethical
                practices, and inclusive growth. Our work contributes to better
                environmental outcomes and long-term community benefit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow p-6 text-center transition-transform hover:scale-105">
                <FaLeaf className="text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Environmental Focus</h3>
                <p>
                  We promote digital solutions that reduce paper waste and
                  improve energy efficiency for our clients and infrastructure.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center transition-transform hover:scale-105">
                <FaGraduationCap className="text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Knowledge Sharing</h3>
                <p>
                  We support education and training initiatives that empower
                  young professionals and raise awareness about emerging tech.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center transition-transform hover:scale-105">
                <FaUsers className="text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Community Involvement
                </h3>
                <p>
                  Through partnerships and local engagement, we strive to build
                  lasting impact across regions where we operate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl max-w-3xl mx-auto">
                A dedicated team leading Brickspring into a smarter future.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#f7fdf9]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="font-bold text-lg text-[#236837]">
                    {member.name}
                  </h3>
                  <p className="text-sm italic text-gray-700">
                    {member.position}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    "{member.paragraph}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
