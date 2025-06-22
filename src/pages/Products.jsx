import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import ProductCard, {
  productsData,
  ProductModal,
} from "../components/ProductsCard";

const PRODUCTS_PER_PAGE = 6;

const Products = () => {
  const products = productsData;
  const categories = [
    ...new Set(
      products.map((p) =>
        p.category === "Integration" ? "Services" : p.category
      )
    ),
  ];
  const brands = [...new Set(products.map((p) => p.brand))];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOption, setSortOption] = useState("All");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [showQuickView, setShowQuickView] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedBrands, selectedRatings, sortOption]);

  const handleCategoryChange = (c) =>
    setSelectedCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );

  const handleBrandChange = (b) =>
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]
    );

  const filtered = products.filter((p) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(p.category) ||
      (selectedCategories.includes("Services") && p.category === "Integration");
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    const matchesRating =
      selectedRatings.length === 0 ||
      selectedRatings.some((r) => Math.floor(p.rating || 0) === r);
    return matchesCategory && matchesBrand && matchesRating;
  });

  let sorted = [...filtered];
  if (sortOption !== "All") {
    sorted = sorted.filter((p) =>
      sortOption === "Services"
        ? p.category === "Integration"
        : p.category === sortOption
    );
  }
  sorted.sort((a, b) => a.id - b.id);

  const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE);
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = sorted.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

  const currentProduct = products.find((p) => p.id === showQuickView);
  const handleQuickView = (id) => setShowQuickView(id);
  const closeQuickView = () => setShowQuickView(null);

  return (
    <div className="min-h-screen bg-[#fffbf0] text-[#236434]">
      <main>
        {/* Hero Section */}
        <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden bg-gradient-to-r from-[#236837]/80 to-transparent text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/products.jpg"
              alt="About background"
              className="w-full h-full object-cover  opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10 text-center">
            <div className="flex justify-center items-center mb-4 text-xs sm:text-sm">
              <a href="/" className="text-blue-200 hover:text-white">
                Home
              </a>
              <FaChevronRight className="mx-2 text-blue-300" />
              <span className="font-semibold">Products & Services</span>
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

        {/* Filters & Product Grid */}
        <section className="py-6 sm:py-8 lg:py-12">
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="flex flex-col lg:flex-row">
              {/* Sidebar */}
              <div className="lg:w-1/4 xl:w-1/5 mb-4 sm:mb-6 lg:mb-0">
                <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6 sticky top-16 sm:top-20">
                  <button
                    onClick={() => setMobileFiltersOpen((o) => !o)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 sm:py-2 rounded-md block lg:hidden mb-3 sm:mb-4 text-sm sm:text-base">
                    Filters
                  </button>
                  <div
                    className={`space-y-3 sm:space-y-4 ${
                      mobileFiltersOpen ? "block" : "hidden lg:block"
                    }`}>
                    <h2 className="text-base sm:text-lg md:text-xl font-bold border-b pb-1 sm:pb-2">
                      Filters
                    </h2>

                    {/* Categories */}
                    <div>
                      <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                        Categories
                      </h3>
                      <div className="space-y-1 sm:space-y-2">
                        {categories.map((c) => (
                          <label
                            key={c}
                            className="flex items-center text-xs sm:text-sm md:text-base">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(c)}
                              onChange={() => handleCategoryChange(c)}
                              className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                            />
                            {c}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Brands */}
                    <div>
                      <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                        Brands
                      </h3>
                      <div className="space-y-1 sm:space-y-2">
                        {brands.map((b) => (
                          <label
                            key={b}
                            className="flex items-center text-xs sm:text-sm md:text-base">
                            <input
                              type="checkbox"
                              checked={selectedBrands.includes(b)}
                              onChange={() => handleBrandChange(b)}
                              className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                            />
                            {b}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Reset */}
                    <button
                      onClick={() => {
                        setSelectedCategories([]);
                        setSelectedBrands([]);
                        setSelectedRatings([]);
                      }}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-1.5 sm:py-2 rounded-md text-sm sm:text-base">
                      Reset Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Main */}
              <div className="lg:w-3/4 xl:w-4/5">
                <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-center">
                  <p className="text-xs sm:text-sm md:text-base">
                    Showing{" "}
                    <span className="font-semibold">{sorted.length}</span>{" "}
                    products
                  </p>
                  <div className="mt-1 sm:mt-0 flex items-center space-x-1 sm:space-x-2">
                    <label htmlFor="sort" className="text-xs sm:text-sm">
                      Sort by:
                    </label>
                    <select
                      id="sort"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm">
                      <option value="All">All</option>
                      <option value="Hardware">Hardware</option>
                      <option value="Software">Software</option>
                      <option value="Services">Services</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4">
                  {currentProducts.map((p) => (
                    <ProductCard
                      key={p.id}
                      product={p}
                      onQuickView={handleQuickView}
                    />
                  ))}
                </div>

                {sorted.length === 0 && (
                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center mt-6">
                    <h3 className="text-base sm:text-lg font-bold mb-2">
                      No products found
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base mb-4">
                      Adjust filters and try again.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategories([]);
                        setSelectedBrands([]);
                        setSelectedRatings([]);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm">
                      Reset Filters
                    </button>
                  </div>
                )}

                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((c) => c - 1)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm md:text-base ${
                        currentPage === 1
                          ? "bg-gray-300 text-gray-500"
                          : "bg-[#236434] text-white"
                      }`}>
                      Previous
                    </button>
                    <span className="text-xs sm:text-sm md:text-base">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((c) => c + 1)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm md:text-base ${
                        currentPage === totalPages
                          ? "bg-gray-300 text-gray-500"
                          : "bg-[#236434] text-white"
                      }`}>
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

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
