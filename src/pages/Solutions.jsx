import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import {
  FaBoxes,
  FaCheckCircle,
  FaCheckDouble,
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
        "Inventory discrepancies across 500+ locations leading to stock issues and revenue loss",
      solution:
        "Implemented SmartScale Pro with WeighConnect Software across all locations",
      results: "98% reduction in inventory discrepancies, $2.4M annual savings",
      testimonial:
        "Brickspring's solution transformed our inventory management process. What used to take days now happens in real-time with unprecedented accuracy.",
      products: ["SmartScale Pro", "WeighConnect Software"],
      image: "/images/kisyet.jpg",
    },
    {
      id: 2,
      client: "Browns Group",
      industry: "Retail & Commerce",
      challenge:
        "Maintaining precise measurements for pharmaceutical compounds with regulatory compliance",
      solution:
        "Deployed DataWeight Enterprise with ScaleGuard Security Module",
      results:
        "100% compliance with FDA regulations, 45% faster compound preparation",
      testimonial:
        "The precision and security features have been game-changing for our lab operations. The audit trail capabilities alone have saved us countless hours during inspections.",
      products: ["DataWeight Enterprise", "ScaleGuard Security Module"],
      image: "/images/browns.png",
    },
    {
      id: 3,
      client: "Mr Green",
      industry: "Plastic Collection & Recycling",
      challenge:
        "Inefficient package weighing process causing shipping delays and incorrect billing",
      solution:
        "Integrated MicroScale Portable devices with WeighConnect Enterprise",
      results: "72% reduction in processing time, 99.8% billing accuracy",
      testimonial:
        "Our warehouse efficiency has improved dramatically. The mobile weighing capability has eliminated bottlenecks and the integration with our billing system is seamless.",
      products: ["MicroScale Portable", "WeighConnect Enterprise"],
      image: "/images/mrgreen.webp",
    },
    {
      id: 4,
      client: "Kiron Construction Ltd",
      industry: "Plastic Collection & Recycling",
      challenge:
        "Inefficient package weighing process causing shipping delays and incorrect billing",
      solution:
        "Integrated MicroScale Portable devices with WeighConnect Enterprise",
      results: "72% reduction in processing time, 99.8% billing accuracy",
      testimonial:
        "Our warehouse efficiency has improved dramatically. The mobile weighing capability has eliminated bottlenecks and the integration with our billing system is seamless.",
      products: ["MicroScale Portable", "WeighConnect Enterprise"],
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
    <div className="min-h-screen bg-gray-50 text-[#236837]">
      <main>
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-[#236837]/80 to-transparent text-white overflow-hidden h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]">
          <div className="absolute inset-0">
            <img
              src="/images/consultation.jpg"
              alt="Background"
              className="w-full h-full object-cover object-top opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative z-10">
            <nav className="text-sm mb-4">
              <Link to="/" className="text-blue-200 hover:text-white">
                Home
              </Link>
              <span className="mx-2 text-blue-300">/</span>
              <span className="font-semibold">Solutions</span>
            </nav>
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1F6632] to-[#4CAF50]">
                  Solutions
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 text-[#1F6632]/80">
                Discover how Brickspring’s weight scale technology transforms
                operations across industries.
              </p>
              <Link
                to="/consultation"
                className="inline-block bg-white text-blue-800 px-5 py-2 rounded-md font-semibold hover:bg-blue-50 transition">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Industry Categories */}
        <section className="py-8 sm:py-12 md:py-16 bg-white">
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
                  img: "/images/Retail.jpg",
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
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Business Solutions */}
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
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
                  <sol.icon className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{sol.title}</h3>
                <p className="text-sm text-gray-600">{sol.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-8 sm:py-12 md:py-16 bg-white">
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
                  <span className="inline-block text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded mb-2">
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
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
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
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
                    "{caseStudies[activeStudy].testimonial}"
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <FaUser className="text-blue-600" />
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
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
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
                  <sys.icon className="text-blue-600 text-xl" />
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
