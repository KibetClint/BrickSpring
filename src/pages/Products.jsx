import React, { useState, useEffect } from "react";
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
    {
      id: 1,
      name: "SmartScale Pro",
      image: "OCS SB1.png",
      description:
        "Enterprise-grade digital scale with advanced computer integration capabilities",
      category: "Hardware",
      brand: "Brickspring",
      features: [
        "High precision sensors",
        "Touchscreen interface",
        "Wireless connectivity",
        "Cloud data storage",
      ],
      specifications: {
        dimensions: '12" x 12" x 3"',
        weight: "5.2 lbs",
        powerSupply: "AC adapter or rechargeable battery",
        connectivity: "Wi-Fi, Bluetooth, Ethernet",
        accuracy: "±0.01%",
        capacity: "Up to 100 kg",
      },
      compatibility: [
        "WeighConnect Software",
        "ScaleSync API",
        "Major ERP systems",
      ],
      releaseDate: "2024-11-15",
    },
    {
      id: 2,
      name: "WeighConnect Software",
      image: "Pallet scale.png",
      description:
        "Cloud-based software solution for real-time weight data processing and analysis",
      category: "Software",
      brand: "Brickspring",
      features: [
        "Real-time data processing",
        "Advanced analytics",
        "Custom reporting",
        "Multi-user access",
      ],
      specifications: {
        platform: "Cloud-based, Web interface",
        devices: "Windows, macOS, iOS, Android",
        dataStorage: "Unlimited",
        updates: "Automatic monthly updates",
        security: "256-bit encryption",
        apiAccess: "REST API with documentation",
      },
      compatibility: [
        "SmartScale Pro",
        "ScaleLink Gateway",
        "DataWeight Enterprise",
      ],
      releaseDate: "2024-10-01",
    },
    {
      id: 3,
      name: "ScaleLink Gateway",
      image: "Pallet scale.png",
      description:
        "Hardware interface for connecting legacy scales to modern computer systems",
      category: "Integration",
      brand: "Brickspring",
      features: [
        "Legacy system compatibility",
        "Plug-and-play setup",
        "Data conversion",
        "Multiple protocol support",
      ],
      specifications: {
        dimensions: '6" x 4" x 1.5"',
        weight: "0.8 lbs",
        powerSupply: "USB or AC adapter",
        connectivity: "USB, RS-232, Ethernet",
        supportedProtocols: "Modbus, Profibus, DeviceNet",
        dataRate: "Up to 100 samples/second",
      },
      compatibility: [
        "Most analog scales",
        "WeighConnect Software",
        "ScaleSync API",
      ],
      releaseDate: "2024-09-10",
    },
    {
      id: 4,
      name: "DataWeight Enterprise",
      image: "Pallet scale.png",
      description:
        "Complete weight management system for large-scale industrial applications",
      category: "Hardware",
      brand: "Brickspring",
      features: [
        "Industrial-grade construction",
        "Multi-scale management",
        "Advanced data processing",
        "Integration with manufacturing systems",
      ],
      specifications: {
        dimensions: '18" x 14" x 6"',
        weight: "12.5 lbs",
        powerSupply: "AC power with backup battery",
        connectivity: "Wi-Fi, Ethernet, Serial, USB",
        accuracy: "±0.005%",
        capacity: "Up to 2000 kg",
      },
      compatibility: [
        "WeighConnect Software",
        "ScaleSync API",
        "Major MES and ERP systems",
      ],
      releaseDate: "2025-01-20",
    },
    {
      id: 5,
      name: "ScaleSync API",
      image: "Pallet scale.png",
      description:
        "Developer toolkit for custom integration of weight data into existing systems",
      category: "Software",
      brand: "Brickspring",
      features: [
        "Comprehensive documentation",
        "Sample code",
        "Technical support",
        "Regular updates",
      ],
      specifications: {
        platform: "Language-agnostic REST API",
        authentication: "OAuth 2.0",
        rateLimit: "10,000 requests/day",
        responseTime: "<100ms",
        dataFormats: "JSON, XML",
        webhooks: "Supported for real-time events",
      },
      compatibility: [
        "All Brickspring hardware",
        "Major programming languages",
        "Cloud platforms",
      ],
      releaseDate: "2024-11-05",
    },
    {
      id: 6,
      name: "WeighStation Terminal",
      image: "Pallet scale.png",
      description:
        "Touchscreen terminal for weight data collection and processing",
      category: "Hardware",
      brand: "Brickspring",
      features: [
        '10" touchscreen display',
        "Barcode scanner",
        "Receipt printer",
        "User authentication",
      ],
      specifications: {
        dimensions: '12" x 8" x 2"',
        weight: "3.8 lbs",
        powerSupply: "AC adapter",
        processor: "Quad-core 2.4GHz",
        memory: "8GB RAM, 128GB SSD",
        operatingSystem: "Brickspring OS (Linux-based)",
      },
      compatibility: [
        "WeighConnect Software",
        "ScaleSync API",
        "All Brickspring scales",
      ],
      releaseDate: "2024-12-10",
    },
    {
      id: 7,
      name: "MicroScale Portable",
      image: "Pallet scale.png",
      description:
        "Compact, battery-powered scale with wireless connectivity for field operations",
      category: "Hardware",
      brand: "Brickspring",
      features: [
        "Portable design",
        "Long battery life",
        "Wireless data transmission",
        "Rugged construction",
      ],
      specifications: {
        dimensions: '8" x 8" x 1.5"',
        weight: "2.1 lbs",
        powerSupply: "Rechargeable battery (24hr operation)",
        connectivity: "Bluetooth, Wi-Fi",
        accuracy: "±0.05%",
        capacity: "Up to 25 kg",
      },
      compatibility: ["WeighConnect Software", "Mobile apps", "ScaleSync API"],
      releaseDate: "2024-08-15",
    },
    {
      id: 8,
      name: "WeighConnect Mobile",
      image: "Pallet scale.png",
      description: "Mobile application for accessing weight data on the go",
      category: "Software",
      brand: "Brickspring",
      features: [
        "Real-time data access",
        "Push notifications",
        "Offline mode",
        "User-friendly interface",
      ],
      specifications: {
        platform: "iOS and Android",
        minVersion: "iOS 14+ / Android 10+",
        size: "45MB",
        languages: "English, Spanish, French, German, Chinese",
        updates: "Monthly",
        dataSync: "Automatic or manual",
      },
      compatibility: ["WeighConnect Software", "All Brickspring hardware"],
      releaseDate: "2024-09-01",
    },
    {
      id: 9,
      name: "ScaleLink Pro",
      image: "Pallet scale.png",
      description:
        "Advanced integration module for complex multi-scale environments",
      category: "Integration",
      brand: "TechWeigh",
      features: [
        "Multi-scale support",
        "Advanced protocol conversion",
        "Data aggregation",
        "Custom mapping",
      ],
      specifications: {
        dimensions: '8" x 6" x 2"',
        weight: "1.5 lbs",
        powerSupply: "AC adapter",
        connectivity: "USB, RS-485, Ethernet, Wi-Fi",
        supportedSystems: "Up to 32 scales simultaneously",
        dataBuffering: "64MB onboard memory",
      },
      compatibility: [
        "Most industrial scales",
        "WeighConnect Software",
        "Third-party ERP systems",
      ],
      releaseDate: "2024-10-20",
    },
    {
      id: 10,
      name: "WeighConnect Enterprise",
      image: "Pallet scale.png",
      description:
        "Full-featured enterprise version of WeighConnect with advanced security and management features",
      category: "Software",
      brand: "Brickspring",
      features: [
        "Role-based access control",
        "Audit logging",
        "Enterprise reporting",
        "White labeling",
      ],
      specifications: {
        deployment: "Cloud or on-premises",
        users: "Unlimited",
        dataRetention: "Configurable up to 10 years",
        sso: "SAML, OAuth support",
        compliance: "GDPR, HIPAA, ISO 27001",
        backup: "Automated with point-in-time recovery",
      },
      compatibility: [
        "All Brickspring hardware",
        "Major ERP and MES systems",
        "Custom integrations",
      ],
      releaseDate: "2025-02-01",
    },
    {
      id: 11,
      name: "ScaleGuard Security Module",
      image: "Pallet scale.png",
      description:
        "Security enhancement module for weight data protection and compliance",
      category: "Software",
      brand: "SecureWeigh",
      features: [
        "Data encryption",
        "Tamper detection",
        "Compliance reporting",
        "Access control",
      ],
      specifications: {
        encryption: "AES-256",
        certification: "NIST FIPS 140-2",
        auditTrail: "Comprehensive logging",
        authentication: "Multi-factor",
        alerts: "Real-time security notifications",
        updates: "Automatic security patches",
      },
      compatibility: [
        "All Brickspring hardware and software",
        "Third-party systems via API",
      ],
      releaseDate: "2024-11-30",
    },
    {
      id: 12,
      name: "CalibrationMaster Kit",
      image: "Pallet scale.png",
      description:
        "Professional calibration kit for maintaining scale accuracy",
      category: "Hardware",
      brand: "PrecisionTech",
      features: [
        "Certified weights",
        "Calibration software",
        "Documentation tools",
        "Carrying case",
      ],
      specifications: {
        weightSet: "1g to 10kg, NIST traceable",
        software: "CalibrationMaster Pro included",
        certificate: "Calibration certificate included",
        recertification: "Annual recertification service available",
        accuracy: "Class F1 weights",
        case: "Waterproof, impact-resistant",
      },
      compatibility: ["All weighing equipment", "WeighConnect Software"],
      releaseDate: "2024-07-15",
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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="pt-0">
        {/* Page Header */}
        <section className="bg-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-4">
              <a
                href="/"
                className="text-blue-200 hover:text-white cursor-pointer"
              >
                <i className="fas fa-home mr-2"></i>Home
              </a>
              <i className="fas fa-chevron-right mx-2 text-blue-300 text-xs"></i>
              <span className="font-semibold">Products</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Our Products and Services
            </h1>
            <p className="text-xl max-w-3xl">
              Explore our comprehensive range of weight scale technology solutions
              designed for seamless integration and optimal performance.
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
                  className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md flex justify-between items-center !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <span className="font-medium">Filters</span>
                  <i
                    className={`fas fa-chevron-${
                      mobileFiltersOpen ? "up" : "down"
                    }`}
                  ></i>
                </button>
              </div>

              {/* Filters Sidebar */}
              <div
                className={`lg:w-1/4 xl:w-1/5 pr-0 lg:pr-8 ${
                  mobileFiltersOpen ? "block" : "hidden lg:block"
                }`}
              >
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
                            className="ml-2 text-gray-700 cursor-pointer"
                          >
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
                            className="ml-2 text-gray-700 cursor-pointer"
                          >
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
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer"
                  >
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
                        className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      >
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
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg"
                      >
                        <div className="h-56 overflow-hidden relative group">
                          <img
                            src={imgSrc}
                            alt={product.name}
                            className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-gray-800">
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
                              {product.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <i className="fas fa-check text-green-500 mr-1 mt-0.5"></i>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <i
                                  key={i}
                                  className={`fas fa-star text-sm ${
                                    i < Math.floor(product.rating || 0)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                ></i>
                              ))}
                              <span className="ml-1 text-sm text-gray-600">
                                {product.rating || 0}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <button
                              onClick={() => setShowQuickView(product.id)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition text-sm !rounded-button whitespace-nowrap cursor-pointer"
                            >
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
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition !rounded-button whitespace-nowrap cursor-pointer"
                    >
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
          onClick={() => setShowQuickView(null)}
        >
          {/* Modal Content: stop propagation so clicks inside don’t close */}
          <div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
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
                      className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
                    >
                      <i className="fas fa-times text-xl"></i>
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
                      <p className="text-gray-700 mb-4">{product.description}</p>
                      <div className="flex items-center mb-4">
                        <div className="flex items-center mr-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i
                              key={i}
                              className={`fas fa-star ${
                                i < Math.floor(product.rating || 0)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            ></i>
                          ))}
                          <span className="ml-1 text-gray-600">
                            {product.rating || 0}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">
                          Stock:{" "}
                          <span className="font-semibold">
                            {product.stock ?? "N/A"} available
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
                              <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
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
                              {Object.entries(
                                product.specifications || {}
                              ).map(([key, value]) => (
                                <tr
                                  key={key}
                                  className="border-b border-gray-200 last:border-0"
                                >
                                  <td className="py-2 font-medium text-gray-700 capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </td>
                                  <td className="py-2 text-gray-600">{value}</td>
                                </tr>
                              ))}
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
                              className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <Link
                          to="/quote"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition whitespace-nowrap cursor-pointer flex items-center"
                        >
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
                              className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4"
                            >
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
                                    className="ml-auto text-xs text-blue-600 hover:text-blue-800 cursor-pointer"
                                  >
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
