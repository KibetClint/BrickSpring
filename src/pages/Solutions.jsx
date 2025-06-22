import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import {
  FaBoxes,
  FaCheckCircle,
  FaCheckDouble,
  FaChevronRight,
  FaCircle,
  FaLaptopCode,
  FaLayerGroup,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";
import { FaScaleBalanced, FaShield } from "react-icons/fa6";
import { Link } from "react-router";

export default function Solutions() {
  const [activeStudy, setActiveStudy] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: "Kisyet Tea Factory",
      industry: "Manufacturing & Processing",
      challenge:
        "Inventory discrepancies across 500+ collection sites leading to stock issues and revenue loss.",
      solution:
        "Installed Bluetooth-enabled OCS hanging scales paired with PDA and portable thermal printers to issue on-the-spot weight receipts and transmit data via GSM to central servers.",
      results:
        "Achieved a 98% reduction in inventory discrepancies and saved approximately $2.4 million annually.",
      testimonial:
        "Brickspring’s field weighing solution revolutionized our operations—data is captured accurately at source, receipts printed on the spot, and central systems updated seamlessly.",
      products: ["OCS Bluetooth Hanging Scale", "Bluetooth Thermal Printer"],
      image: "/images/kisyet.jpg",
    },

    {
      id: 2,
      client: "Browns Group",
      industry: "Agriculture",
      challenge:
        "Lack of accurate farm-produce weighing at factory intake enabled cheating and manual manipulation of farmer deliveries.",
      solution:
        "Installed precision farm-produce digital scales (±0.1% accuracy) with Bluetooth thermal printers at factory intake points to issue tamper-proof weight tickets and record real-time delivery data.",
      results:
        "Dramatically reduced measurement disputes; ensured transparency and fairness, empowering farmers and protecting factory margins.",
      testimonial:
        "The Bluetooth printer and accurate scales have transformed our intake process—farmers trust the system and data is instantly recorded with zero room for manipulation.",
      products: ["Scales (≤±0.1%)", "Bluetooth Thermal Printer"],
      image: "/images/browns.png",
    },

    {
      id: 3,
      client: "Mr Green Africa",
      industry: "Plastic Collection & Recycling",
      challenge:
        "Inefficient bulk weighing process at the recycling plant causing delays in material intake and billing discrepancies.",
      solution:
        "Installed a high‑accuracy 100 ton digital weighbridge fully integrated with WeighConnect Enterprise for real‑time data capture.",
      results:
        "70% faster intake processing, 99.8% billing accuracy, and seamless integration into their ERP workflows.",
      testimonial:
        "Our operations at the plant have been greatly streamlined. The weighbridge integration eliminated bottlenecks in raw material intake and ensures precise billing every time.",
      products: ["100 T Digital Weighbridge", "WeighConnect Enterprise"],
      image: "/images/Mrgreen.webp",
    },

    {
      id: 4,
      client: "Kiron Construction Ltd",
      industry: "Construction & Project Management",
      challenge:
        "Coordinating real-time communication across multiple sites and ensuring timely delivery of critical project updates.",
      solution:
        "Deployed **Timespring**, enabling scheduled messaging and instant alerts to site teams, supervisors, and management across mobile and desktop platforms.",
      results:
        "Enhanced coordination—project updates now delivered 48 hours in advance, reducing miscommunication by 65 % and boosting on-site task alignment.",
      testimonial:
        "Timespring has transformed how we communicate our teams now receive clear, timely updates without chasing information. Scheduled alerts have kept projects running smoothly.",
      products: ["Timespring Software"],
      image: "/images/kiron.png",
    },
  ];

  const integrationSystems = [
    {
      category: "ERP Systems",
      icon: FaLayerGroup,
      systems: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"],
    },
    {
      category: "Inventory Management",
      icon: FaBoxes,
      systems: ["Fishbowl", "Zoho Inventory", "inFlow", "Cin7"],
    },
    {
      category: "POS Systems",
      icon: FaShieldAlt,
      systems: ["Square", "Shopify POS", "Lightspeed", "Vend"],
    },
    {
      category: "Warehouse Management",
      icon: FaLaptopCode,
      systems: ["Manhattan Associates", "HighJump", "Logiwa", "3PL Central"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9E6] text-[#236837]">
      <main>
        {/* Hero Banner */}
        <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden bg-gradient-to-r from-[#236837]/80 to-transparent text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/solution.jpg"
              alt="About background"
              className="w-full h-full object-cover object opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10 text-center">
            <div className="flex justify-center items-center mb-4 text-xs sm:text-sm">
              <a href="/" className="text-blue-200 hover:text-white">
                Home
              </a>
              <FaChevronRight className="mx-2 text-blue-300" />
              <span className="font-semibold">Products and Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1F6632] leading-tight">
              Our{" "}
              <span className="inline-block bg-gradient-to-r from-[#1F6632] to-[#4CAF50] bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#1F6632] to-[#4CAF50] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-[#1F6632]/80 leading-relaxed">
              Discover how Brickspring’s weight scale technology transforms
              operations across industries.
            </p>
            <Link
              to="/consultation"
              className="inline-block bg-green-800 text-white px-4 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
              Schedule Consultation
            </Link>
          </div>
        </section>

        {/* Industry Categories */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Solutions by Industry
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Tailored solutions to meet unique operational challenges across
              sectors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Retail & Commerce",
                  img: "/images/Retail.webp",
                  highlights: [
                    "Point-of-sale integration",
                    "Inventory management",
                    "Loss prevention systems",
                  ],
                },
                {
                  title: "Manufacturing & Production",
                  img: "/images/Manufacturing.jpg",
                  highlights: [
                    "Quality assurance",
                    "Batch processing",
                    "Material optimization",
                  ],
                },
                {
                  title: "Logistics & Warehousing",
                  img: "/images/Logistics.jpg",
                  highlights: [
                    "Shipping verification",
                    "Freight management",
                    "Inventory tracking",
                  ],
                },
                {
                  title: "Healthcare & Laboratory",
                  img: "/images/Healthcare.jpg",
                  highlights: [
                    "Precision measurements",
                    "Regulatory compliance",
                    "Data integrity",
                  ],
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                      {cat.highlights.map((h) => (
                        <li key={h} className="flex items-center">
                          <FaCheckCircle className="text-green-500 mr-2" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-green-800 hover:bg-blue-700 text-white py-2 rounded-md transition">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Business Solutions */}
        <section className="py-8 sm:py-12 md:py-16 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Key Business Solutions
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our technology addresses critical challenges across operations.
            </p>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: FaScaleBalanced,
                title: "Weights & Measures",
                desc: "Automate stock monitoring, reduce discrepancies.",
              },
              {
                icon: FaBoxes,
                title: "Inventory Management",
                desc: "Maintain accurate inventory levels.",
              },
              {
                icon: FaCheckDouble,
                title: "Quality Control",
                desc: "Ensure product consistency.",
              },
              {
                icon: FaShield,
                title: "Cybersecurity",
                desc: "Secure your weight data & systems.",
              },
            ].map((sol) => (
              <div
                key={sol.title}
                className="bg-white rounded-lg shadow p-6 transition hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <sol.icon className="text-green-600 text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{sol.title}</h3>
                <p className="text-sm text-gray-600">{sol.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Success Stories
              </h2>
              <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Real-world impact of our solutions.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg">
              {/* Nav */}
              <div className="overflow-x-auto whitespace-nowrap px-4 py-2">
                {caseStudies.map((cs, idx) => (
                  <button
                    key={cs.id}
                    onClick={() => setActiveStudy(idx)}
                    className={`inline-block px-4 py-2 mr-2 rounded ${
                      activeStudy === idx
                        ? "bg-[#236837] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-200"
                    }`}>
                    {cs.client}
                  </button>
                ))}
              </div>
              {/* Content */}
              <div className="px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <span className="inline-block text-sm bg-blue-100 text-green-800 px-3 py-1 rounded mb-2">
                    {caseStudies[activeStudy].industry}
                  </span>
                  <h3 className="text-xl font-bold mb-4">
                    {caseStudies[activeStudy].client}
                  </h3>
                  {["challenge", "solution", "results"].map((f) => (
                    <div key={f} className="mb-4">
                      <h4 className="font-semibold capitalize mb-1">{f}</h4>
                      <p className="text-gray-600">
                        {caseStudies[activeStudy][f]}
                      </p>
                    </div>
                  ))}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Products Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudies[activeStudy].products.map((p) => (
                        <span
                          key={p}
                          className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link to={`/case-study/${caseStudies[activeStudy].id}`}>
                    <button className="bg-green-800 hover:bg-blue-700 text-white px-4 py-2 rounded">
                      Read Full Case Study
                    </button>
                  </Link>
                </div>
                <div>
                  <div
                    className="w-full h-64 bg-cover bg-center rounded-lg mb-4"
                    style={{
                      backgroundImage: `url(${caseStudies[activeStudy].image})`,
                    }}
                  />
                  <blockquote className="border-l-4 border-green-800 pl-4 italic text-gray-600 mb-4">
                    "{caseStudies[activeStudy].testimonial}"
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <FaUser className="text-green-800" />
                      </div>
                      <div>
                        <p className="font-semibold">Operations Director</p>
                        <p className="text-sm text-gray-600">
                          {caseStudies[activeStudy].client}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">8 weeks to implement</p>
                      <p className="text-green-600 font-semibold">
                        6 months to ROI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Compatibility */}
        <section className="py-8 sm:py-12 md:py-16 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Integration & Compatibility
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Seamless integration with your existing systems.
            </p>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationSystems.map((sys) => (
              <div
                key={sys.category}
                className="bg-white rounded-lg shadow p-6 transition hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <sys.icon className="text-green-800 text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">
                  {sys.category}
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {sys.systems.map((s) => (
                    <li key={s} className="flex items-center">
                      <FaCircle className="text-green-500 mr-2 text-xs" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
