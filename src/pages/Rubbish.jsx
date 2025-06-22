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
        {/* Hero Banner */}
        <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden bg-gradient-to-r from-[#236837]/80 to-transparent text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/consultation.jpg"
              alt="About background"
              className="w-full h-full object-cover object-top opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 py-10 relative z-10 text-center">
            <div className="flex justify-center items-center mb-4 text-xs sm:text-sm">
              <a href="/" className="text-blue-200 hover:text-white">
                Home
              </a>
              <FaChevronRight className="mx-2 text-blue-300" />
              <span className="font-semibold">About Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1F6632] leading-tight">
              Who We{" "}
              <span className="inline-block bg-gradient-to-r from-[#1F6632] to-[#4CAF50] bg-clip-text text-transparent">
                Are
              </span>
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#1F6632] to-[#4CAF50] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-[#1F6632]/80 leading-relaxed">
              Brickspring delivers a comprehensive ecosystem that empowers
              organizations to modernize operations with everything from
              field-level IoT hardware and scale systems, to secure enterprise
              software and professional integration, development, and
              cybersecurity services. Whether upgrading infrastructure,
              enhancing safety, automating finance and payroll, or deploying
              custom software, Brickspring provides the tools and expertise for
              a seamless digital transformation journey.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Our Story
                </h2>
                <p className="text-base sm:text-lg mb-4">
                  Brickspring Enterprises began with a vision: to unify weighing
                  technology and computing systems for smarter business
                  solutions.
                </p>
                <p className="text-base sm:text-lg mb-4">
                  From Nairobi to the world, we support clients in construction,
                  logistics, retail, and manufacturing by providing integrated
                  systems that improve data accuracy and operational efficiency.
                </p>
                <p className="text-base sm:text-lg">
                  We're proud of our roots and excited for the future as we
                  expand our innovation and impact.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Year Founded", value: "2023" },
                  { label: "Sectors Served", value: "10+" },
                  { label: "Core Services", value: "4" },
                  { label: "Client Focus", value: "100%" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 shadow rounded-lg text-center">
                    <div className="text-3xl sm:text-4xl font-bold mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-12 bg-[#fffbf0]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Our Mission & Values
              </h2>
              <p className="text-base sm:text-lg max-w-3xl mx-auto">
                We aim to simplify data collection and decision-making through
                technology that's accurate, adaptable, and empowering.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: FaLightbulb,
                  title: "Innovation",
                  desc: "Exploring and creating technologies that redefine efficiency.",
                },
                {
                  icon: FaBalanceScale,
                  title: "Precision",
                  desc: "Ensuring accuracy from weighing to analytics.",
                },
                {
                  icon: FaUsers,
                  title: "Collaboration",
                  desc: "Partnering closely with clients for tailored solutions.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 shadow rounded-lg text-center hover:scale-105 transition-transform">
                  <item.icon className="text-3xl text-[#236837] mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-1 text-[#236837]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CSR Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Corporate Social Responsibility
              </h2>
              <p className="text-base sm:text-lg max-w-3xl mx-auto">
                Committed to sustainable operations, ethical practices, and
                inclusive growth for long-term community benefit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: FaLeaf,
                  title: "Environmental Focus",
                  desc: "Promoting digital solutions that reduce waste and improve efficiency.",
                },
                {
                  icon: FaGraduationCap,
                  title: "Knowledge Sharing",
                  desc: "Supporting education and training initiatives in tech.",
                },
                {
                  icon: FaUsers,
                  title: "Community Involvement",
                  desc: "Building lasting impact through partnerships.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 shadow rounded-lg text-center hover:scale-105 transition-transform">
                  <item.icon className="text-3xl text-[#236837] mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-1 text-[#236837]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-12 bg-[#fffbf0]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Meet Our Team
              </h2>
              <p className="text-base sm:text-lg max-w-3xl mx-auto">
                A dedicated team leading Brickspring into a smarter future.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="bg-white p-6 shadow rounded-lg text-center hover:-translate-y-1 hover:shadow-lg transition-transform">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#236837] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm italic text-gray-700 mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600">"{member.paragraph}"</p>
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
