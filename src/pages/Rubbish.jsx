import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaChevronRight, FaStar, FaTimes } from "react-icons/fa";
import ProductCard, {
  productsData,
  ProductModal,
} from "../components/ProductsCard";

const Products = () => {
  // Use imported products data
  const products = productsData;
  const categories = [
    ...new Set(
      products.map((p) =>
        p.category === "Integration" ? "Services" : p.category
      )
    ),
  ];
  const brands = [...new Set(products.map((p) => p.brand))];

  // State management
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOption, setSortOption] = useState("All");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [showQuickView, setShowQuickView] = useState(null);

  // Filter handlers
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

  // Filter products logic
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

  // Further filter by sortOption (category-based)
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

  // Get current product for modal
  const currentProduct = products.find((p) => p.id === showQuickView);

  // Handle quick view
  const handleQuickView = (productId) => {
    setShowQuickView(productId);
  };

  const closeQuickView = () => {
    setShowQuickView(null);
  };

  useEffect(() => {
    // no side-effects needed here
  }, []);

  return (
    <div className="min-h-screen bg-[#fffbf0] text-[#236434]">
      <main className="pt-0">
        {/* Hero*/}
        <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden bg-gradient-to-r from-[#236837]/80 to-transparent text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/consultation.jpg"
              alt="About background"
              className="w-full h-full object-cover object-top opacity-20"
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
              Products{" & "}
              <span className="inline-block bg-gradient-to-r from-[#1F6632] to-[#4CAF50] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#1F6632] to-[#4CAF50] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-[#1F6632]/80 leading-relaxed">
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
                  className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md flex justify-between items-center cursor-pointer">
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
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md transition cursor-pointer">
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

                {/* Products Grid - Using ProductCard Component */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={handleQuickView}
                    />
                  ))}
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
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition cursor-pointer">
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Product Quick View Modal - Using ProductModal Component */}
      <ProductModal
        product={currentProduct}
        isOpen={showQuickView !== null}
        onClose={closeQuickView}
        allProducts={products}
      />
    </div>
  );
};

export default Products;
