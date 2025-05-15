import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Animation Variants
const headingVariant = {
  hidden: { x: -50, opacity: 0 },
  visible: (delay) => ({
    x: 0,
    opacity: 1,
    transition: { delay: delay * 0.2, duration: 0.6 },
  }),
};
const paragraphVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: (delay) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.4 + delay * 0.1, duration: 0.6 },
  }),
};
const cardVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.8 },
  },
};
const listItemVariant = {
  hidden: { x: -30, opacity: 0 },
  visible: (delay) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 + delay * 0.2, duration: 0.5 },
  }),
};

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const sectionY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const team = [
    {
      name: "Enoch Koech",
      title: "Chief Executive Officer",
      img: "/images/C.E.O.jpg",
      desc: "Visionary leader driving our strategic direction and fostering partnerships.",
    },
    {
      name: "Japheth",
      title: "Chief Technology Officer",
      img: "/images/KIBET.jpg",
      desc: "Leading R&D and innovation to deliver cutting-edge scale-integration solutions.",
    },
    {
      name: "Hillary",
      title: "Technician",
      img: "/images/HILLARY.jpg",
      desc: "Ensuring seamless hardware integration and on-site support for our clients.",
    },
    {
      name: "Clinton",
      title: "Software Engineer",
      img: "/images/CLINT.jpg",
      desc: "Developing robust software integration and providing support to maximize uptime.",
    },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Founded",
      desc: "Launched with the vision to integrate weight-scale and computing technologies.",
    },
    {
      year: "2024",
      title: "Pilot Programs",
      desc: "Completed pilot integrations across manufacturing, construction, and retail sectors.",
    },
    {
      year: "2025",
      title: "Expansion & Innovation",
      desc: "Expanded service offerings and began R&D for next-gen IoT scale solutions.",
    },
  ];

  // Common viewport settings to trigger animations in both scroll directions
  const viewportSettings = { once: false, amount: 0.3 };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#FFF9E6]"
      style={{ y: sectionY }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}>
      {/* Company Overview */}
      <motion.div
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
        <motion.h2
          variants={headingVariant}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#236837]">
          About Brickspring Enterprises
        </motion.h2>
        <motion.p
          variants={paragraphVariant}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-gray-700 leading-relaxed text-base sm:text-lg lg:text-xl">
          Established in 2023, Brickspring Enterprises is a leading IT firm
          dedicated to revolutionizing how weight scales and computer systems
          work together. Our mission is to provide innovative and reliable
          technology solutions tailored to the specific needs of our clients,
          ensuring they achieve operational excellence and sustainable growth.
        </motion.p>
        <motion.p
          variants={paragraphVariant}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-gray-700 leading-relaxed mt-4 text-base sm:text-lg lg:text-xl">
          We envision a future where technology seamlessly integrates into
          various industries, improving processes and driving growth. Our vision
          is to be the go-to firm recognized for pioneering advancements in
          weight scale technology and computer systems.
        </motion.p>
      </motion.div>

      {/* Team Section */}
      <div>
        <motion.h3
          variants={headingVariant}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 text-[#236837]">
          Our Leadership Team
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col items-center">
              <motion.div
                variants={cardVariant}
                className="w-32 h-32 mb-4 overflow-hidden rounded-full">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.h4
                variants={headingVariant}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="text-lg sm:text-xl font-bold text-[#236837]">
                {member.name}
              </motion.h4>
              <motion.p
                variants={paragraphVariant}
                custom={i + 2}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="text-[#236837] font-medium mb-2 text-sm sm:text-base">
                {member.title}
              </motion.p>
              <motion.p
                variants={paragraphVariant}
                custom={i + 3}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="text-gray-600 text-sm sm:text-base">
                {member.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Company Timeline */}
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
        <motion.h3
          variants={headingVariant}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-[#236837]">
          Our Journey
        </motion.h3>
        <ol className="relative border-l-2 border-[#236837] ml-4 sm:ml-6 lg:ml-8 space-y-8">
          {timeline.map((step, i) => (
            <motion.li
              key={step.year}
              variants={listItemVariant}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="ml-6 relative">
              <span className="absolute -left-4 top-1 w-6 h-6 bg-[#236837] rounded-full ring-4 ring-white"></span>
              <motion.h4
                variants={paragraphVariant}
                custom={i}
                className="text-xl sm:text-2xl font-semibold text-[#236837]">
                {step.year} – {step.title}
              </motion.h4>
              <motion.p
                variants={paragraphVariant}
                custom={i + 1}
                className="text-gray-600 mt-2 text-sm sm:text-base">
                {step.desc}
              </motion.p>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
