import React, { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const formFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "John Smith",
      icon: "👤",
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
      icon: "📧",
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "(123) 456-7890",
      icon: "📱",
    },
    {
      id: "company",
      label: "Company",
      type: "text",
      placeholder: "Your Company, Inc.",
      icon: "🏢",
    },
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      lines: [
        "Nairobi National Park Road",
        "Karen, Nairobi",
        "Kenya, East Africa",
      ],
      color: "text-red-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      lines: ["+254 700 123 456", "+254 720 987 654"],
      color: "text-green-500",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      lines: ["info@msafari-tribe.com", "bookings@msafari-tribe.com"],
      color: "text-blue-500",
    },
    {
      icon: FaClock,
      label: "Business Hours",
      lines: [
        "Monday - Friday: 8:00 AM - 6:00 PM EAT",
        "Saturday: 9:00 AM - 1:00 PM EAT",
        "Sunday: Emergency Only",
      ],
      color: "text-purple-500",
    },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, name: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: FaTwitter, name: "Twitter", color: "hover:bg-blue-400" },
    { icon: FaFacebookF, name: "Facebook", color: "hover:bg-blue-700" },
    { icon: FaInstagram, name: "Instagram", color: "hover:bg-pink-500" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#FEFAEA" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F6632] relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#1F6632] to-green-400 transform scale-x-0 animate-expand-width"></div>
            </h2>
          </div>
          <p className="text-xl max-w-3xl mx-auto text-[#1F6632]/80 leading-relaxed">
            Ready for your next adventure? Our safari experts are here to help
            you plan the perfect journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Form */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl shadow-xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              style={{ backgroundColor: "#FFFEFB" }}>
              {/* Form Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Success Message */}
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center animate-bounce-in">
                    <FaCheckCircle className="text-green-600 mr-3 text-xl" />
                    <span className="text-green-800 font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {formFields.map((field) => (
                    <div key={field.id} className="relative group">
                      <label
                        htmlFor={field.id}
                        className="block mb-2 font-medium text-[#1F6632] transition-colors duration-300">
                        <span className="mr-2">{field.icon}</span>
                        {field.label}
                      </label>
                      <div className="relative">
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          value={formData[field.id]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 transform focus:scale-105"
                          style={{
                            borderColor:
                              focusedField === field.id ? "#16a085" : "#1F6632",
                            color: "#1F6632",
                            boxShadow:
                              focusedField === field.id
                                ? "0 0 20px rgba(22, 160, 133, 0.3)"
                                : "none",
                          }}
                        />
                        {/* Animated border */}
                        <div
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#16a085] to-green-400 transition-all duration-300 ${
                            focusedField === field.id ? "w-full" : "w-0"
                          }`}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subject Field */}
                <div className="mb-6 relative group">
                  <label
                    htmlFor="subject"
                    className="block mb-2 font-medium text-[#1F6632]">
                    <span className="mr-2">📝</span>
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 transform focus:scale-105"
                      style={{
                        borderColor:
                          focusedField === "subject" ? "#16a085" : "#1F6632",
                        color: "#1F6632",
                        boxShadow:
                          focusedField === "subject"
                            ? "0 0 20px rgba(22, 160, 133, 0.3)"
                            : "none",
                      }}
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#16a085] to-green-400 transition-all duration-300 ${
                        focusedField === "subject" ? "w-full" : "w-0"
                      }`}></div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-8 relative group">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-[#1F6632]">
                    <span className="mr-2">💬</span>
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your dream safari adventure..."
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 transform focus:scale-105 resize-none"
                      style={{
                        borderColor:
                          focusedField === "message" ? "#16a085" : "#1F6632",
                        color: "#1F6632",
                        boxShadow:
                          focusedField === "message"
                            ? "0 0 20px rgba(22, 160, 133, 0.3)"
                            : "none",
                      }}
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#16a085] to-green-400 transition-all duration-300 ${
                        focusedField === "message" ? "w-full" : "w-0"
                      }`}></div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 relative overflow-hidden group disabled:opacity-70"
                  style={{ backgroundColor: "#1F6632" }}>
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  <span className="relative z-10">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Enhanced Contact Info */}
          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}>
            <div
              className="rounded-2xl shadow-xl p-8 h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              style={{ backgroundColor: "#FFFCED" }}>
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-[#1F6632] flex items-center">
                  <span className="mr-3">🌍</span>
                  Get In Touch
                </h3>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.label}
                      className="flex items-start group/item hover:transform hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 200}ms` }}>
                      <div
                        className="rounded-full p-4 mr-6 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 shadow-lg"
                        style={{ backgroundColor: "#1F6632" }}>
                        <info.icon
                          className={`text-white text-xl ${info.color}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-2 text-lg text-[#1F6632] group-hover/item:text-green-600 transition-colors duration-300">
                          {info.label}
                        </h4>
                        <div className="text-sm text-[#1F6632]/80 leading-relaxed">
                          {info.lines.map((line, idx) => (
                            <div
                              key={idx}
                              className="mb-1 hover:text-[#1F6632] transition-colors duration-300 cursor-default">
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media Section */}
                <div className="mt-12 pt-8 border-t border-[#1F6632]/20">
                  <h4 className="font-bold mb-6 text-xl text-[#1F6632] flex items-center">
                    <span className="mr-3">🤝</span>
                    Connect With Us
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href="#"
                        className={`rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 shadow-lg group ${social.color}`}
                        style={{
                          backgroundColor: "#1F6632",
                          animationDelay: `${index * 100}ms`,
                        }}
                        title={social.name}>
                        <social.icon className="text-white text-lg group-hover:rotate-12 transition-transform duration-300" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-yellow-100 rounded-xl border-l-4 border-[#1F6632]">
                  <h5 className="font-semibold text-[#1F6632] mb-2">
                    🎯 Ready for Adventure?
                  </h5>
                  <p className="text-sm text-[#1F6632]/80">
                    Join thousands of travelers who've experienced the magic of
                    African safaris with us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes expand-width {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-expand-width {
          animation: expand-width 1s ease-out 0.5s forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }

        /* Enhanced hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}
