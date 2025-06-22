import React from "react";
import { FaCheck, FaStar, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Product data - centralized in the ProductCard component
export const productsData = [
  {
    id: 1,
    name: "Weighspring",
    image: "cctv-weighspring.png",
    description:
      "Advanced weighbridge management software with integrated camera functionality for real-time vehicle monitoring and transaction verification.",
    category: "Software",
    brand: "Brickspring",
    features: [
      "Real-time weight data capture",
      "Integrated camera support",
      "Automated ticket generation",
      "Comprehensive reporting tools",
    ],
    specifications: {
      platform: "Windows",
      database: "SQL Server",
      cameraIntegration: true,
      reporting: "Customizable reports and dashboards",
    },
    compatibility: ["Brickspring hardware", "Third-party weighbridge systems"],
    releaseDate: "2025-03-15",
  },
  {
    id: 2,
    name: "Timespring",
    image: "TimeSpringMockup.jpg",
    description:
      "Time-released messaging application enabling users to schedule messages for future delivery, enhancing communication planning.",
    category: "Software",
    brand: "Brickspring",
    features: [
      "Scheduled message delivery",
      "User-friendly interface",
      "Cross-platform support",
      "Secure data handling",
    ],
    specifications: {
      platform: "iOS, Android, Windows",
      messageTypes: "Text, Images, Videos",
      encryption: "End-to-end encryption",
      scheduling: "Flexible date and time settings",
    },
    compatibility: ["Mobile devices", "Web browsers"],
    releaseDate: "2025-04-10",
  },
  {
    id: 3,
    name: "Payrollspring",
    image: "payrollspring.png",
    description:
      "Comprehensive payroll processing software designed to automate salary calculations, tax deductions, and employee payments.",
    category: "Software",
    brand: "Brickspring",
    features: [
      "Automated payroll calculations",
      "Tax compliance management",
      "Employee self-service portal",
      "Integration with accounting systems",
    ],
    specifications: {
      platform: "Web-based",
      compliance: "Local tax regulations",
      reporting: "Detailed payroll reports",
      userAccess: "Role-based permissions",
    },
    compatibility: ["Accounting software", "HR management systems"],
    releaseDate: "2025-05-05",
  },
  {
    id: 4,
    name: "Secuspring",
    image: "secuspring.jpeg",
    description:
      "Robust security module offering data encryption, access control, and compliance reporting to safeguard organizational information.",
    category: "Software",
    brand: "Brickspring",
    features: [
      "Advanced data encryption",
      "Multi-factor authentication",
      "Real-time threat detection",
      "Compliance reporting tools",
    ],
    specifications: {
      platform: "Cross-platform",
      encryptionStandards: "AES-256",
      authentication: "Biometric, OTP",
      compliance: "GDPR, HIPAA",
    },
    compatibility: ["Brickspring software", "Third-party applications"],
    releaseDate: "2025-06-01",
  },
  {
    id: 5,
    name: "Safetyspring",
    image: "safestyspring.png",
    description:
      "Safety management software facilitating incident reporting, hazard analysis, and compliance tracking to promote workplace safety.",
    category: "Software",
    brand: "Brickspring",
    features: [
      "Incident reporting system",
      "Risk assessment tools",
      "Safety training modules",
      "Regulatory compliance tracking",
    ],
    specifications: {
      platform: "Web-based",
      reporting: "Customizable safety reports",
      alerts: "Real-time notifications",
      training: "Interactive e-learning modules",
    },
    compatibility: ["HR systems", "Compliance databases"],
    releaseDate: "2025-06-20",
  },
  {
    id: 6,
    name: "Parkspring",
    image: "parking-system.jpeg",
    description:
      "Park management software offering tools for facility booking, maintenance scheduling, and visitor analytics to enhance park operations.",
    category: "Software",
    brand: "Brickspring",
    features: [
      "Facility reservation system",
      "Maintenance tracking",
      "Visitor analytics dashboard",
      "Mobile access for staff",
    ],
    specifications: {
      platform: "Web and mobile",
      bookingSystem: "Real-time availability",
      analytics: "Visitor trends and reports",
      maintenance: "Automated scheduling",
    },
    compatibility: ["Municipal systems", "Payment gateways"],
    releaseDate: "2025-07-10",
  },
  {
    id: 7,
    name: "OCS SB1 Hanging Scale",
    image: "OCS SB1 Hanging Scale.jpg",
    description:
      "Durable and compact crane scale ideal for industrial weight lifting and shipping applications.",
    category: "Hardware",
    brand: "Brickspring",
    features: [
      "LCD display",
      "Wireless remote control",
      "High-capacity load cell",
      "Overload protection",
    ],
    specifications: {
      capacity: "100kg to 1,000kg",
      display: "LED / LCD",
      battery: "Rechargeable",
      material: "Aluminum die-cast housing",
    },
    releaseDate: "2024-10-01",
  },
  {
    id: 8,
    name: "SS Indicator with Bluetooth",
    image: "SS Indicator.png",
    description:
      "Stainless steel indicator with Bluetooth support for smart data transmission and analysis.",
    category: "Hardware",
    brand: "Brickspring",
    features: ["Bluetooth data sync", "Bright LED screen", "Waterproof design"],
    specifications: {
      casing: "Stainless steel",
      output: "RS232 / Bluetooth",
      compatibility: "WeighConnect, Android App",
    },
    releaseDate: "2024-10-15",
  },
  {
    id: 9,
    name: "SCS Pallet Truck Scale",
    image: "SCS Pallet Truck Scale .webp",
    description:
      "Combines the utility of a pallet jack with accurate weighing for efficient logistics.",
    category: "Hardware",
    brand: "Brickspring",
    features: [
      "Integrated Weighing System",
      "High-precision Load Cells",
      "Rugged Construction",
      "User-friendly Interface",
    ],
    specifications: {
      capacity: "2000 kg",
      platform: "Standard Pallet Size",
      material: "Steel",
      display: "LCD",
      accuracy: "±0.1%",
      power: "Rechargeable Battery",
    },
    compatibility: ["WeighConnect", "Brickspring API", "Timespring"],
    releaseDate: "2024-09-01",
  },
  {
    id: 10,
    name: "Checkered Plate Platform Scale",
    image: "Checker-Plate-Platform-Floor-Weight-Scale.png",
    description:
      "Heavy-duty industrial weighing scale with anti-slip checkered plate surface.",
    category: "Hardware",
    brand: "Brickspring",
    features: [
      "Slip-resistant Platform",
      "Robust Build",
      "Load Cell Technology",
      "Customizable Dimensions",
    ],
    specifications: {
      capacity: "5000 kg",
      platform: "Up to 2000 x 3000 mm",
      material: "Checkered Steel",
      accuracy: "±0.2%",
      power: "AC + Battery",
    },
    compatibility: ["WeighConnect", "ScaleSync API", "ERP Systems"],
    releaseDate: "2024-08-20",
  },
  {
    id: 11,
    name: "Mini Bluetooth Thermal Printers",
    image: "Bt Printer.jpg",
    description:
      "Portable Bluetooth printer for receipts and weight tickets, optimized for field use.",
    category: "Hardware",
    brand: "Brickspring",
    features: [
      "Bluetooth Connectivity",
      "High-speed Thermal Printing",
      "Rechargeable Battery",
      "Compact Design",
    ],
    specifications: {
      dimensions: "106.5 × 78 × 47 mm",
      printingSpeed: "62 mm/s",
      weight: "0.37 kg",
      connection: "Bluetooth/USB",
      paperWidth: "58 mm",
      battery: "Rechargeable Lithium",
    },
    compatibility: ["Android", "iOS", "Weighspring", "Mobile POS Apps"],
    releaseDate: "2024-07-15",
  },
  {
    id: 12,
    name: "Bench Scale",
    image: "Table Scale.jpg",
    description:
      "Precision bench scale designed for manufacturing, packaging, and laboratory environments.",
    category: "Hardware",
    brand: "Brickspring",
    features: [
      "High Precision",
      "Compact Size",
      "Stainless Steel Platter",
      "Digital Indicator",
    ],
    specifications: {
      capacity: "Up to 150 kg",
      accuracy: "±0.05%",
      display: "LED",
      connectivity: "USB, RS-232",
    },
    compatibility: ["WeighConnect", "PayrollSpring", "QA Systems"],
    releaseDate: "2024-10-01",
  },
  {
    id: 13,
    name: "Electronic Platform Scale",
    image: "Electronic Platform Scale.webp",
    description:
      "Durable electronic scale for large weight ranges, ideal for warehouse and shipping docks.",
    category: "Hardware",
    brand: "Brickspring",
    features: [
      "Large Weighing Area",
      "Digital Indicator",
      "Robust Load Cells",
      "High Weight Capacity",
    ],
    specifications: {
      capacity: "Up to 3000 kg",
      material: "Carbon Steel",
      accuracy: "±0.1%",
      platformSize: "Up to 1500 x 2000 mm",
    },
    compatibility: ["WeighConnect", "ERP/MRP Systems", "DataSpring"],
    releaseDate: "2024-09-25",
  },
  {
    id: 14,
    name: "Pallet Weighing Scale",
    image: "Pallet scale.png",
    description:
      "Heavy-duty scale integrated with pallet platform for efficient material handling and weighing.",
    category: "Hardware",
    brand: "Brickspring",
    features: [
      "Easy Pallet Loading",
      "Industrial-grade Sensors",
      "LCD Display",
      "Weather-resistant Coating",
    ],
    specifications: {
      capacity: "Up to 2500 kg",
      platform: "Fits Euro & Standard Pallets",
      accuracy: "±0.1%",
      material: "Mild Steel with Powder Coating",
    },
    compatibility: ["WeighConnect", "Parkspring", "Logistics Software"],
    releaseDate: "2024-10-10",
  },
  {
    id: 15,
    name: "Cybersecurity & Penetration Testing",
    image: "cybersecurity.webp",
    description:
      "Comprehensive security assessments to identify vulnerabilities, ensure data protection, and maintain regulatory compliance. Our expert team simulates real-world cyberattacks to strengthen your infrastructure.",
    category: "Services",
    features: [
      "Vulnerability scanning",
      "Penetration testing (black-box, white-box, grey-box)",
      "Compliance auditing (GDPR, HIPAA, ISO 27001)",
      "Security awareness training",
      "Incident response planning",
    ],
    compatibility: ["Client systems", "Network infrastructure"],
    brand: "Brickspring",
  },
  {
    id: 16,
    name: "Web & App Development",
    description:
      "Custom web and mobile applications tailored to your business needs. From UI/UX design to full-stack development, we deliver performant and scalable digital solutions.",
    category: "Services",
    image: "web.jpg",
    features: [
      "Responsive website development",
      "Mobile app development (Android/iOS)",
      "UI/UX design",
      "API integration and cloud deployment",
      "E-commerce and CMS platforms",
    ],
    compatibility: ["Client systems", "Network infrastructure"],
    brand: "Brickspring",
  },
  {
    id: 17,
    name: "Integration Services",
    image: "integration.jpeg",
    description:
      "Our Integration Services are designed to seamlessly connect disparate systems, applications, and data sources within your organization. By ensuring smooth communication between various platforms, we help eliminate data silos, enhance operational efficiency, and provide a unified view of your business processes.",
    category: "Services",
    brand: "Brickspring",
    features: [
      "System Integration: Linking various IT systems and software applications to act as a coordinated whole.",
      "Data Integration: Combining data from different sources to provide a unified view, facilitating better decision-making.",
      "API Development and Management: Creating and managing APIs to enable applications to communicate effectively.",
      "Middleware Solutions: Implementing middleware to allow communication and data management between different systems.",
      "Real-time Data Synchronization: Ensuring that data across all systems is updated in real-time, maintaining consistency and accuracy.",
      "Custom Integration Solutions: Tailoring integration strategies to meet specific business needs and objectives.",
    ],
    specifications: {
      integrationTypes: [
        "System Integration",
        "Data Integration",
        "API Development",
        "Middleware Solutions",
        "Real-time Synchronization",
        "Custom Solutions",
      ],
      supportedPlatforms: ["On-premises", "Cloud-based", "Hybrid"],
      complianceStandards: ["GDPR", "HIPAA", "ISO 27001"],
      toolsAndTechnologies: [
        "REST APIs",
        "SOAP",
        "GraphQL",
        "Apache Camel",
        "Microsoft BizTalk Server",
        "Boomi",
      ],
    },
    compatibility: [
      "CRM Systems",
      "ERP Systems",
      "HR Management Systems",
      "E-commerce Platforms",
      "Legacy Systems",
    ],
    releaseDate: "2025-06-15",
  },
  {
    id: 18,
    name: "Laptops and Desktops ",
    image: "pc-and-laptops.png",
    description: "A versatile laptop suitable for both work and play.",
    category: "Hardware",
    brand: "HP",
    features: [
      "Intel Core i5 Processor",
      "8GB RAM",
      "512GB SSD",
      "15.6-inch Full HD Display",
    ],
    specifications: {
      processor: "Intel Core i5-1135G7",
      memory: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6-inch Full HD",
      operatingSystem: "Latest OS",
    },
    compatibility: ["Windows 10", "Linux"],
    releaseDate: "2024-11-01",
  },
  {
    id: 19,
    name: "Smartphones",
    image: "Mobile-Phones.png",
    description: "A mid-range smartphone with impressive features.",
    category: "Hardware",
    brand: "Samsung",
    features: [
      "6.5-inch Super AMOLED Display",
      "64MP Quad Camera",
      "4500mAh Battery",
      "5G Connectivity",
    ],
    specifications: {
      processor: "Snapdragon 750G",
      memory: "6GB RAM",
      storage: "128GB",
      battery: "4500mAh",
      operatingSystem: "Android 11",
    },
    compatibility: ["Android Apps", "5G Networks"],
    releaseDate: "2024-10-15",
  },
  {
    id: 20,
    name: "Accessories",
    image: "Accessories.jpg",
    description: "Compact and powerful portable charger.",
    category: "Hardware",
    brand: "Anker",
    features: [
      "10000mAh Capacity",
      "High-Speed Charging",
      "Compact Design",
      "MultiProtect Safety System",
    ],
    specifications: {
      capacity: "10000mAh",
      input: "5V/2A",
      output: "5V/2.4A",
      weight: "180g",
    },
    compatibility: ["Smartphones", "Tablets", "USB Devices"],
    releaseDate: "2024-09-20",
  },
  {
    id: 21,
    name: "CS30 Multipurpose Android POS",
    image: "Smart POS.jpg",
    description:
      "Rugged and compact Android POS terminal with built-in printer, NFC, and barcode scanner.",
    category: "Hardware",
    brand: "Ciontek",
    features: [
      "Safedroid OS based on Android 14",
      "Octa-core Cortex-A53 processor @2.0GHz",
      "6.0 inch HD IPS touchscreen",
      "Built-in 58mm thermal printer",
      "4G LTE, Wi-Fi, Bluetooth & GPS",
      "NFC and contactless payment support",
    ],
    specifications: {
      memory: "2GB RAM + 16GB ROM",
      expandableStorage: "Up to 128GB via microSD",
      displayResolution: "1440 x 720",
      battery: "7.6V / 2600mAh rechargeable Li-ion",
      printer: "58mm thermal, 70mm/s speed",
      weight: "≈380g",
    },
    compatibility: [
      "POS Applications",
      "Payment Gateways",
      "Barcode Scanning",
      "NFC/EMV Payments",
    ],
    releaseDate: "2024-09-20",
  },
  {
    id: 22,
    name: "CCTV Installations as a Service",
    image: "CCTV.jpg",
    description:
      "Professional CCTV installation services for homes, businesses, schools, and institutions with customizable surveillance solutions.",
    category: "Services",
    brand: "Client's Specifications",
    features: [
      "Site survey and security consultation",
      "Indoor & outdoor camera installations",
      "IP and analog CCTV systems",
      "Mobile & remote viewing setup",
      "Night vision & motion detection integration",
      "Maintenance and support contracts",
    ],
    specifications: {
      cameraTypes: ["Bullet", "Dome", "PTZ", "Wireless", "Thermal"],
      videoQuality: "Up to 4K UHD resolution",
      recording: "NVR/DVR setup with cloud or local storage",
      coverage: "Scalable from single-home setups to enterprise-grade systems",
      monitoring: "24/7 recording with optional alarm system integration",
    },
    compatibility: [
      "Hikvision",
      "Dahua",
      "TP-Link VIGI",
      "UNV",
      "CP Plus",
      "Ezviz",
      "mobile apps",
    ],
    releaseDate: "2023-01-15",
  },
];

// ProductCard Component
const ProductCard = ({ product, onQuickView }) => {
  const imgSrc = `/images/${product.image.replace(/^\//, "")}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
      <div className="h-56 overflow-hidden relative group">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {product.category === "Integration" ? "Services" : product.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Key Features:
          </h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <FaCheck className="text-green-900 mr-1 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => onQuickView(product.id)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition text-sm cursor-pointer">
            <i className="fas fa-shopping-cart mr-1"></i> View Product
          </button>
        </div>
      </div>
    </div>
  );
};

// ProductModal Component
export const ProductModal = ({ product, isOpen, onClose, allProducts }) => {
  if (!isOpen || !product) return null;

  const modalImgSrc = `/images/${product.image.replace(/^\//, "")}`;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition cursor-pointer">
              <FaTimes className="text-xl" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side: Image */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={modalImgSrc}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>

            {/* Right side: Details */}
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded mr-2">
                  {product.category === "Integration"
                    ? "Services"
                    : product.category}
                </span>
                <span className="text-gray-600 text-sm">
                  Brand: <span className="font-semibold">{product.brand}</span>
                </span>
              </div>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.floor(product.rating || 4.5)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  Stock:{" "}
                  <span className="font-semibold">
                    {product.stock ?? ""} available
                  </span>
                </span>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Key Features:
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-900 mr-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.specifications && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Technical Specifications:
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <tbody>
                        {Object.entries(product.specifications).map(
                          ([key, value]) => (
                            <tr
                              key={key}
                              className="border-b border-green-200 last:border-0">
                              <td className="py-2 font-medium text-gray-700 capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </td>
                              <td className="py-2 text-gray-600">
                                {Array.isArray(value)
                                  ? value.join(", ")
                                  : value}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {product.compatibility && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Compatibility:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.compatibility.map((item, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <Link
                  to="/quote"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition whitespace-nowrap cursor-pointer flex items-center">
                  <i className="fas fa-shopping-cart mr-2"></i>Request a Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Related Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {allProducts
                .filter(
                  (p) =>
                    p.id !== product.id &&
                    ((product.category === "Integration" &&
                      p.category === "Integration") ||
                      p.category === product.category)
                )
                .slice(0, 3)
                .map((related) => {
                  const relImgSrc = `/images/${related.image.replace(/^\//, "")}`;
                  return (
                    <div
                      key={related.id}
                      className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={relImgSrc}
                          alt={related.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-800 truncate">
                          {related.name}
                        </h4>
                        <div className="flex items-center mt-1">
                          <button
                            onClick={() => {
                              onClose();
                              setTimeout(() => {
                                // This would need to be handled by the parent component
                                // You can pass a callback to handle related product clicks
                              }, 100);
                            }}
                            className="ml-auto text-xs text-blue-600 hover:text-blue-800 cursor-pointer">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
