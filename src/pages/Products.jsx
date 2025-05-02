import React, { useState } from 'react';

const Home = () => {
  const [, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems((prevItems) => prevItems + 1);
  };

  const products = [
    {
      id: 1,
      name: "SmartScale Pro",
      description:
        "Enterprise-grade digital scale with advanced computer integration capabilities",
      price: 1299.99,
      category: "Hardware",
      imageUrl: "/src/assets/img/Accessories.png" // replace with your actual URL
    },
    {
      id: 2,
      name: "WeighConnect Software",
      description:
        "Cloud-based software solution for real-time weight data processing and analysis",
      price: 499.99,
      category: "Software",
      imageUrl: "/src/assets/img/Computing.jpg"
    },
    {
      id: 3,
      name: "ScaleLink Gateway",
      description:
        "Hardware interface for connecting legacy scales to modern computer systems",
      price: 349.99,
      category: "Integration",
      imageUrl: "/src/assets/img/L36 printer.png"
    },
    {
      id: 4,
      name: "DataWeight Enterprise",
      description:
        "Complete weight management system for large-scale industrial applications",
      price: 2499.99,
      category: "Hardware",
      imageUrl: "/src/assets/img/UNIWA V710 PDA.png"
    },
    {
      id: 5,
      name: "ScaleSync API",
      description:
        "Developer toolkit for custom integration of weight data into existing systems",
      price: 799.99,
      category: "Software",
      imageUrl: "/src/assets/img/Low profile platform scale.png"
    },
    {
      id: 6,
      name: "WeighStation Terminal",
      description:
        "Touchscreen terminal for weight data collection and processing",
      price: 1899.99,
      category: "Hardware",
      imageUrl: "/src/assets/img/OCS-10A CAP 100-300KG.png"
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOption, setSortOption] = useState("popularity");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    return a.id - b.id;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main>
        {/* Products Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Products</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our range of innovative solutions designed to transform
                how weight scales and computers work together.
              </p>
            </div>

            {/* Filters & Sort */}
            <div className="mb-8 flex flex-wrap justify-between items-center">
              <div className="flex space-x-2 mb-4 md:mb-0">
                {['All', 'Hardware', 'Software', 'Integration'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-md transition cursor-pointer ${
                      activeFilter === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}>
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                  {/* Product Image */}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-700">
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={addToCart}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition cursor-pointer">
                        <i className="fas fa-shopping-cart mr-2"></i>Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
