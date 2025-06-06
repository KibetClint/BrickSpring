import React, { useState, useEffect } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Products = () => {
  // State hooks
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOption, setSortOption] = useState("All");
  const [showQuickView, setShowQuickView] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Product data
  const products = [
    // Existing hardware and software entries...

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
      compatibility: [
        "Brickspring hardware",
        "Third-party weighbridge systems",
      ],
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
        platform: "iOS, Android",
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
      features: [
        "Bluetooth data sync",
        "Bright LED screen",
        "Waterproof design",
      ],
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
      name: "Mini Bluetooth Thermal Printer",
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
  ];

  // Branding and category options
  const brands = ["Brickspring", "TechWeigh", "SecureWeigh", "PrecisionTech"];
  const categories = ["Hardware", "Software", "Services"];

  // Handlers
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Filter products based on selected categories, brands, and ratings
  const filteredProducts = products.filter((product) => {
    const matchesCategoryFilter =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category) ||
      // Treat "Services" as matching "Integration"
      (selectedCategories.includes("Services") &&
        product.category === "Integration");

    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    const matchesRating =
      selectedRatings.length === 0 ||
      selectedRatings.some((r) => Math.floor(product.rating || 0) === r);

    return matchesCategoryFilter && matchesBrand && matchesRating;
  });

  // Further filter by sortOption (category‐based)
  let displayedProducts = filteredProducts;
  if (sortOption === "Hardware") {
    displayedProducts = displayedProducts.filter(
      (p) => p.category === "Hardware"
    );
  } else if (sortOption === "Software") {
    displayedProducts = displayedProducts.filter(
      (p) => p.category === "Software"
    );
  } else if (sortOption === "Services") {
    // Treat "Integration" as "Services"
    displayedProducts = displayedProducts.filter(
      (p) => p.category === "Integration"
    );
  }

  // Sort by ID ascending
  const sortedProducts = [...displayedProducts].sort((a, b) => a.id - b.id);

  useEffect(() => {
    // no side-effects needed here
  }, []);

  return (
    <div className="min-h-screen bg-[#fffbf0] text-[#236434]">
      <main className="pt-0">
        {/* Page Header */}
        <section className="bg-gradient-to-r  from-[#236837]/100 to-transparent text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-4">
              <a
                href="/"
                className="text-blue-200 hover:text-white cursor-pointer">
                <i className="fas fa-home mr-2"></i>Home
              </a>
              <i className="fas fa-chevron-right mx-2 text-blue-300 text-xs"></i>
              <span className="font-semibold">Products</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Our Products and Services
            </h1>
            <p className="text-xl max-w-3xl">
              Explore our comprehensive range of weight scale technology
              solutions designed for seamless integration and optimal
              performance.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md flex justify-between items-center !rounded-button whitespace-nowrap cursor-pointer">
                  <span className="font-medium">Filters</span>
                  <i
                    className={`fas fa-chevron-${
                      mobileFiltersOpen ? "up" : "down"
                    }`}></i>
                </button>
              </div>

              {/* Filters Sidebar */}
              <div
                className={`lg:w-1/4 xl:w-1/5 pr-0 lg:pr-8 ${
                  mobileFiltersOpen ? "block" : "hidden lg:block"
                }`}>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-20">
                  <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                    Filters
                  </h2>

                  {/* Category Checkboxes */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="ml-2 text-gray-700 cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Brand Checkboxes */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Brands</h3>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <div key={brand} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`brand-${brand}`}
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor={`brand-${brand}`}
                            className="ml-2 text-gray-700 cursor-pointer">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reset Filters Button */}
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedBrands([]);
                      setSelectedRatings([]);
                    }}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                    Reset Filters
                  </button>
                </div>
              </div>

              {/* Products Grid & Sort */}
              <div className="lg:w-3/4 xl:w-4/5">
                {/* Sort Dropdown */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
                  <p className="text-gray-600 mb-2 sm:mb-0">
                    Showing{" "}
                    <span className="font-semibold">
                      {sortedProducts.length}
                    </span>{" "}
                    products
                  </p>
                  <div className="flex items-center">
                    <label htmlFor="sort" className="mr-2 text-gray-700">
                      Sort by:
                    </label>
                    <div className="relative">
                      <select
                        id="sort"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                        <option value="All">All</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Software">Software</option>
                        <option value="Services">Services</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <i className="fas fa-chevron-down text-xs"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => {
                    // normalize image path
                    const imgSrc = `/images/${product.image.replace(/^\//, "")}`;

                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
                        <div className="h-56 overflow-hidden relative group">
                          <img
                            src={imgSrc}
                            alt={product.name}
                            className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-gra-800">
                              {product.name}
                            </h3>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                              {/* Show category (treat "Integration" as "Services") */}
                              {product.category === "Integration"
                                ? "Services"
                                : product.category}
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
                              {product.features
                                .slice(0, 3)
                                .map((feature, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <FaCheck className="fas fa-check text-green-900 mr-1 mt-0.5" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>

                          {/* Rating */}
                          {/* <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <i
                                  key={i}
                                  className={`fas fa-star text-sm ${
                                    i < Math.floor(product.rating || 0)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }`}></i>
                              ))}
                              <span className="ml-1 text-sm text-gray-600">
                                {product.rating || 4.5}
                              </span>
                            </div>
                          </div> */}

                          <div className="mt-4 flex items-center justify-between">
                            <button
                              onClick={() => setShowQuickView(product.id)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition text-sm !rounded-button whitespace-nowrap cursor-pointer">
                              <i className="fas fa-shopping-cart mr-1"></i> View
                              Product
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Empty State */}
                {sortedProducts.length === 0 && (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <i className="fas fa-search text-blue-200 text-5xl mb-4"></i>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      No products found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any products matching your current
                      filters. Try adjusting your filter criteria.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategories([]);
                        setSelectedBrands([]);
                        setSelectedRatings([]);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer">
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Product Quick View Modal */}
      {showQuickView !== null && (
        // Overlay: clicking anywhere here will close the modal
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowQuickView(null)}>
          {/* Modal Content: stop propagation so clicks inside don’t close */}
          <div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            {(() => {
              const product = products.find((p) => p.id === showQuickView);
              if (!product) return null;

              const modalImgSrc = `/images/${product.image.replace(/^\//, "")}`;

              return (
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {product.name}
                    </h2>
                    <button
                      onClick={() => setShowQuickView(null)}
                      className="text-gray-500 hover:text-gray-700 transition cursor-pointer">
                      <FaTimes className="fas fa-times text-xl" />
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
                          Brand:{" "}
                          <span className="font-semibold">{product.brand}</span>
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center mb-4">
                        <div className="flex items-center mr-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                              key={i}
                              className={`fas fa-star ${
                                i < Math.floor(product.rating || 4.5)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          {/* <span className="ml-1 text-gray-600">
                            {product.rating || 0}
                          </span> */}
                        </div>
                        <span className="text-sm text-gray-600">
                          Stock:{""}
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
                              <FaCheck className="fas fa-check text-green-900 mr-2 mt-1" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Technical Specifications:
                        </h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <table className="w-full text-sm">
                            <tbody>
                              {Object.entries(product.specifications || {}).map(
                                ([key, value]) => (
                                  <tr
                                    key={key}
                                    className="border-b border-green-200 last:border-0">
                                    <td className="py-2 font-medium text-gray-700 capitalize">
                                      {key.replace(/([A-Z])/g, " $1").trim()}
                                    </td>
                                    <td className="py-2 text-gray-600">
                                      {value}
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>

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

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <Link
                          to="/quote"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition whitespace-nowrap cursor-pointer flex items-center">
                          <i className="fas fa-shopping-cart mr-2"></i>Request a
                          Quote
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
                      {products
                        .filter(
                          (p) =>
                            p.id !== product.id &&
                            ((product.category === "Integration" &&
                              p.category === "Integration") ||
                              p.category === product.category)
                        )
                        .slice(0, 3)
                        .map((related) => {
                          const relImgSrc = `/images/${related.image.replace(
                            /^\//,
                            ""
                          )}`;

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
                                      setShowQuickView(related.id);
                                      window.scrollTo(0, 0);
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
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
