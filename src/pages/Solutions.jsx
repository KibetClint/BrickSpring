
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { FaBoxes, FaCheckCircle, FaCheckDouble, FaCircle, FaClipboardCheck, FaCloud, FaLaptopCode, FaLayerGroup, FaShieldAlt, FaUser, } from "react-icons/fa";
import { FaScaleBalanced, FaShield } from "react-icons/fa6";
import { Link } from "react-router";
const Solutions = () => {
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
.highlight-form {
animation: highlight 2s ease-in-out;
}
@keyframes highlight {
0%, 100% {
background-color: transparent;
}
50% {
background-color: rgba(59, 130, 246, 0.1);
}
}
`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
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
    },
    {
      id: 3,
      client: "Mr Green ",
      industry: "Plastic Collection & Recycling",
      challenge:
        "Inefficient package weighing process causing shipping delays and incorrect billing",
      solution:
        "Integrated MicroScale Portable devices with WeighConnect Enterprise",
      results: "72% reduction in processing time, 99.8% billing accuracy",
      testimonial:
        "Our warehouse efficiency has improved dramatically. The mobile weighing capability has eliminated bottlenecks and the integration with our billing system is seamless.",
      products: ["MicroScale Portable", "WeighConnect Enterprise"],
    },
    {
      id: 4,
      client: "Mogeni Tea Factory ",
      industry: "Plastic Collection & Recycling",
      challenge:
        "Inefficient package weighing process causing shipping delays and incorrect billing",
      solution:
        "Integrated MicroScale Portable devices with WeighConnect Enterprise",
      results: "72% reduction in processing time, 99.8% billing accuracy",
      testimonial:
        "Our warehouse efficiency has improved dramatically. The mobile weighing capability has eliminated bottlenecks and the integration with our billing system is seamless.",
      products: ["MicroScale Portable", "WeighConnect Enterprise"],
    },
  ];
  const integrationSystems = [
    {
      category: "ERP Systems",
      icon : FaLayerGroup,
      systems: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"],
    
    },
    {
      category: "Inventory Management",
      systems: ["Fishbowl", "Zoho Inventory", "inFlow", "Cin7"],
      icon: "fas fa-boxes",
    },
    {
      category: "POS Systems",
      systems: ["Square", "Shopify POS", "Lightspeed", "Vend"],
      icon: "fas fa-cash-register",
    },
    {
      category: "Warehouse Management",
      systems: ["Manhattan Associates", "HighJump", "Logiwa", "3PL Central"],
      icon: "fas fa-warehouse",
    },
  ];
  return (
    <div className="min-h-screen bg-gray text-[#236837]">
      <main className="pt-0">
        {/* Hero Banner */}
        <section className="relative bg-[#236837] text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/public/images/consultation.jpg"
              className="w-full h-full object-cover object-top opacity-20"
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
              <span className="font-semibold">Solutions</span>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Our Solutions</h1>
              <p className="text-xl mb-8">
                Discover how Brickspring's weight scale technology transforms
                operations across industries. Our tailored solutions address
                specific challenges, optimize workflows, and deliver measurable
                business value.
              </p>
              <div className="flex flex-wrap gap-4">
              <Link to="/consultation">
        <button className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition whitespace-nowrap cursor-pointer">
          <i className="mr-2" ><i className="fas fa-head-alt"></i></i>
          Schedule Consultation
        </button>
      </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Industry Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Solutions by Industry</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our weight scale technology adapts to the unique requirements of
                various industries, providing tailored solutions for specific
                operational challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Retail & Commerce */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/public/images/Retail.jpg"
                    alt="Retail & Commerce"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-700">
                    Retail & Commerce
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Streamline checkout processes, improve inventory accuracy,
                    and enhance customer experience with our retail-focused
                    weighing solutions.
                  </p>
                  <ul className="mb-6 text-sm text-gray-600">
                    <li className="flex items-center mb-2">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      Point-of-sale integration
                    </li>
                    <li className="flex items-center mb-2">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      Inventory management
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      Loss prevention systems
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
              {/* Manufacturing & Production */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/public/images/Manufacturing.jpg"
                    alt="Manufacturing & Production"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-700">
                    Manufacturing & Production
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ensure precision in production processes, maintain quality
                    control, and optimize material usage with advanced weighing
                    technology.
                  </p>
                  <ul className="mb-6 text-sm text-gray-600">
                    <li className="flex items-center mb-2">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      Quality assurance
                    </li>
                    <li className="flex items-center mb-2">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      Batch processing
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      Material optimization
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
              {/* Logistics & Warehousing */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/public/images/Logistics.jpg"
                    alt="Logistics & Warehousing"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-700">
                    Logistics & Warehousing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Improve shipping accuracy, optimize load planning, and
                    enhance warehouse efficiency with integrated weighing
                    solutions.
                  </p>
                  <ul className="mb-6 text-sm text-gray-600">
                    <li className="flex items-center mb-2">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>                      Shipping verification
                    </li>
                    <li className="flex items-center mb-2">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>                      Freight management
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>                      Inventory tracking
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
              {/* Healthcare & Laboratory */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/public/images/Healthcare.jpg"
                    alt="Healthcare & Laboratory"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-700">
                    Healthcare & Laboratory
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Maintain precision in critical measurements, ensure
                    compliance with regulations, and streamline laboratory
                    workflows.
                  </p>
                  <ul className="mb-6 text-sm text-gray-600">
                    <li className="flex items-center mb-2">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      Precision measurements
                    </li>
                    <li className="flex items-center mb-2">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      Regulatory compliance
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      Data integrity
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Solution Showcase */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Key Business Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our technology addresses critical business challenges across
                operations, delivering measurable improvements in efficiency,
                accuracy, and profitability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaScaleBalanced className="fas fa-scale text-blue-600 text-2xl"/>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Weights and Measures
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Maintain accurate weighs, reduce discrepancies, and
                  automate stock monitoring.
                </p>
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Related Products:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>SmartScale Pro</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>WeighConnect Software</span>
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>ScaleLink Gateway</span>
                    </li>
                  </ul>
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/>
                      <span>99.8% inventory accuracy</span>
                    </li>
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/>                      <span>60% reduction in stock checks</span>
                    </li>
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/>                      <span>Real-time stock visibility</span>
                    </li>
                  </ul>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-semibold text-gray-700">
                        Implementation
                      </p>
                      <p className="text-gray-600">2-4 weeks</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">
                        ROI Timeline
                      </p>
                      <p className="text-gray-600">3-6 months</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                  Explore Solution
                </button>
              </div>
              {/* Inventory Management */}
              <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaBoxes className="fas fa-boxes text-blue-600 text-2xl"/>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Inventory Management
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Maintain accurate inventory levels, reduce discrepancies, and
                  automate stock monitoring.
                </p>
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Related Products:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>SmartScale Pro</span>
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>WeighConnect Software</span>
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>ScaleLink Gateway</span>
                    </li>
                  </ul>
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/> <span>99.8% inventory accuracy</span>
                    </li>
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/> <span>60% reduction in stock checks</span>
                    </li>
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/>                       <span>Real-time stock visibility</span>
                    </li>
                  </ul>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-semibold text-gray-700">
                        Implementation
                      </p>
                      <p className="text-gray-600">2-4 weeks</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">
                        ROI Timeline
                      </p>
                      <p className="text-gray-600">3-6 months</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                  Explore Solution
                </button>
              </div>
              {/* Quality Control */}
              <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaCheckDouble className="fas fa-check-double text-blue-600 text-2xl"/>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Quality Control
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Ensure product consistency, maintain compliance standards, and
                  reduce quality-related costs.
                </p>
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Related Products:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>DataWeight Enterprise</span>
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>CalibrationMaster Kit</span>
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>ScaleGuard Security Module</span>
                    </li>
                  </ul>
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/>                       <span>75% fewer quality incidents</span>
                    </li>
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/>                       <span>100% audit trail compliance</span>
                    </li>
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/>                       <span>Automated quality reporting</span>
                    </li>
                  </ul>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-semibold text-gray-700">
                        Implementation
                      </p>
                      <p className="text-gray-600">3-6 weeks</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">
                        ROI Timeline
                      </p>
                      <p className="text-gray-600">4-8 months</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                  Explore Solution
                </button>
              </div>
              {/* Supply Chain Optimization */}
              <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaShield className="fas fa-shield text-blue-600 text-2xl"/>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Cybersecurity and Pentesting
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Streamline logistics operations, improve shipping accuracy,
                  and reduce transportation costs.
                </p>
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Related Products:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>MicroScale Portable</span>
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>WeighConnect Enterprise</span>
                    </li>
                    <li className="flex items-center">
                    <FaCheckCircle className="fas fa-check text-green-500 mr-2"/>
                      <span>WeighStation Terminal</span>
                    </li>
                  </ul>
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/> <span>42% faster shipping processing</span>
                    </li>
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/><span>99.5% shipping weight accuracy</span>
                    </li>
                    <li className="flex items-center">
                    <ArrowRightCircleIcon className="fas fa-arrow-right text-blue-500 mr-2 w-4"/><span>Reduced freight claim disputes</span>
                    </li>
                  </ul>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-semibold text-gray-700">
                        Implementation
                      </p>
                      <p className="text-gray-600">4-8 weeks</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">
                        ROI Timeline
                      </p>
                      <p className="text-gray-600">6-12 months</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                  Explore Solution
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our clients have transformed their operations with
                Brickspring's weight scale technology solutions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              {/* Case Study Navigation */}
              <div className="bg-gray-100 p-4 flex overflow-x-auto">
                {caseStudies.map((study, index) => (
                  <button
                    key={study.id}
                    className={`px-6 py-3 rounded-md font-medium whitespace-nowrap mr-2 transition !rounded-button cursor-pointer ${
                      activeStudy === index
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveStudy(index)}>
                    {study.client}
                  </button>
                ))}
              </div>
              {/* Case Study Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                        {caseStudies[activeStudy].industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-6">
                      {caseStudies[activeStudy].client}
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">
                          Challenge
                        </h4>
                        <p className="text-gray-600">
                          {caseStudies[activeStudy].challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">
                          Solution
                        </h4>
                        <p className="text-gray-600">
                          {caseStudies[activeStudy].solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">
                          Results
                        </h4>
                        <p className="text-gray-600">
                          {caseStudies[activeStudy].results}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">
                          Products Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudies[activeStudy].products.map(
                            (product, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded">
                                {product}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                        Read Full Case Study
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                      <img
                        src={`https://readdy.ai/api/search-image?query=Professional%20business%20environment%20showing%20$%7BcaseStudies%5BactiveStudy%5D.industry%7D%20setting%20with%20weight%20scales%20in%20use%2C%20workers%20using%20digital%20systems%2C%20modern%20facility%20with%20blue%20accent%20lighting%2C%20clean%20professional%20environment&width=600&height=400&seq=case${activeStudy}&orientation=landscape`}
                        alt={caseStudies[activeStudy].client}
                        className="w-full h-64 object-cover object-top rounded-lg"
                      />
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-6">
                      "{caseStudies[activeStudy].testimonial}"
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <FaUser className="fas fa-user text-blue-600"/>
                      </div>
                      <div>
                        <p className="font-semibold">Operations Director</p>
                        <p className="text-sm text-gray-600">
                          {caseStudies[activeStudy].client}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-700">
                            Implementation Time
                          </p>
                          <p className="text-gray-600">8 weeks</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700">
                            ROI Achieved
                          </p>
                          <p className="text-green-600 font-semibold">
                            6 months
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Integration & Compatibility */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Integration & Compatibility
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions seamlessly integrate with your existing systems,
                providing a unified workflow without disrupting your operations.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {integrationSystems.map((category, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 transition-transform hover:shadow-md hover:-translate-y-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <i className={`${category.icon} text-blue-600`}></i>
                    </div>
                    <h3 className="text-lg font-bold mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.systems.map((system, idx) => (
                        <li key={idx} className="flex items-center">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          <span className="text-gray-700">{system}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <h3 className="text-xl font-bold mb-2">
                      Custom Integration Services
                    </h3>
                    <p className="text-gray-600">
                      Need to connect with a system not listed? Our integration
                      specialists can develop custom solutions for your unique
                      requirements.
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-cogs mr-2"></i>Request Custom
                    Integration
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FaLaptopCode className="fas fa-laptop-code text-blue-600"/>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Technical Requirements
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                    <span>Windows 10/11, macOS 10.15+, or Linux</span>
                  </li>
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                  <span>Internet connection (for cloud features)</span>
                  </li>
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                  <span>USB, RS-232, or Ethernet connectivity</span>
                  </li>
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                  <span>4GB RAM minimum (8GB recommended)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FaShieldAlt className="fas fa-shield-alt text-blue-600"/>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Security & Compliance
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                  <span>End-to-end data encryption</span>
                  </li>
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                  <span>GDPR, HIPAA, and ISO 27001 compliant</span>
                  </li>
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                  <span>Role-based access control</span>
                  </li>
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                  <span>Comprehensive audit logging</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FaCloud className="fas fa-cloud text-blue-600"/>
                </div>
                <h3 className="text-lg font-bold mb-2">Deployment Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                    <span>Cloud-based SaaS solution</span>
                  </li>
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                    <span>On-premises installation</span>
                  </li>
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                    <span>Hybrid deployment model</span>
                  </li>
                  <li className="flex items-start">
                  <FaCircle className="fas fa-circle text-xs text-green-900 mt-1.5 mr-2"/>
                    <span>Private cloud hosting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Call-to-Action */}

      </main>

    </div>
  );
};
export default Solutions;
