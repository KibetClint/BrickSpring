import React, { useState, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
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
  const sectionRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
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
      label: "Email",
      type: "email",
      placeholder: "john@example.com",
      icon: "📧",
    },
    {
      id: "phone",
      label: "Phone",
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
      lines: ["Parklands, Nairobi", "Litein, Kericho"],
    },
    { icon: FaPhone, label: "Phone", lines: ["+254 725 903309"] },
    { icon: FaEnvelope, label: "Email", lines: ["info@brickspring.co.ke"] },
    {
      icon: FaClock,
      label: "Hours",
      lines: [
        "Mon-Fri: 8AM-6PM EAT",
        "Sat: 9AM-1PM EAT",
        "Sun: Emergency Only",
      ],
    },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, name: "LinkedIn", url: "#" },
    { icon: FaTwitter, name: "Twitter", url: "#" },
    { icon: FaFacebookF, name: "Facebook", url: "#" },
    { icon: FaInstagram, name: "Instagram", url: "#" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-[#FEFAEA] overflow-hidden">
      {/* Decorative Background */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-56 h-56 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F6632] mb-4 relative inline-block">
            Contact Us
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#1F6632] to-green-400"></span>
          </h2>
          <p className="text-base sm:text-lg text-[#1F6632]/80">
            Ready for your next project? Reach out and we’ll help you get
            started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg relative z-10">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center text-green-800">
                <FaCheckCircle className="text-green-600 mr-2" />
                Message sent successfully!
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {formFields.map((f) => (
                <div key={f.id}>
                  <label className="block mb-1 text-sm font-medium text-[#1F6632]">
                    {f.icon} {f.label}
                  </label>
                  <input
                    name={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={formData[f.id]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6632] transition"
                  />
                </div>
              ))}
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-[#1F6632]">
                📝 Subject
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6632] transition"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-sm font-medium text-[#1F6632]">
                💬 Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6632] transition resize-none"></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#1F6632] text-white rounded-lg font-semibold hover:bg-[#145022] transition">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1F6632] mb-6">
              Get In Touch
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex">
                  <div className="p-3 bg-[#1F6632] text-white rounded-full mr-4">
                    <info.icon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F6632] mb-1">
                      {info.label}
                    </h4>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-sm text-[#1F6632]/80">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-[#1F6632] mb-4">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    className="w-10 h-10 flex items-center justify-center bg-[#1F6632] rounded-full text-white hover:opacity-80 transition"
                    aria-label={s.name}>
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
