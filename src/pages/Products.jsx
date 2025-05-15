import React, { useState } from 'react';

const Products = () => {
  const [, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems((prev) => prev + 1);
  };

  const products = [
    {
      id: 1,
      name: 'SmartScale Pro',
      description:
        'Enterprise-grade digital scale with advanced computer integration capabilities',
      price: 11999.,
      category: 'Hardware',
      imageUrl: 'images/Accessories.png',
    },
    {
      id: 2,
      name: 'WeighConnect Software',
      description:
        'Cloud-based software solution for real-time weight data processing and analysis',
      price: 14999.,
      category: 'Software',
      imageUrl: 'images/Computing.jpg',
    },
    {
      id: 3,
      name: 'ScaleLink Gateway',
      description:
        'Hardware interface for connecting legacy scales to modern computer systems',
      price: 34999.,
      category: 'Integration',
      imageUrl: 'public/images/L36 printer.png',
    },
    {
      id: 4,
      name: 'DataWeight Enterprise',
      description:
        'Complete weight management system for large-scale industrial applications',
      price: 6999.,
      category: 'Hardware',
      imageUrl: 'images/UNIWA V710 PDA.png',
    },
    {
      id: 5,
      name: 'ScaleSync API',
      description:
        'Developer toolkit for custom integration of weight data into existing systems',
      price: 8999.,
      category: 'Software',
      imageUrl: 'images/Low profile platform scale.png',
    },
    {
      id: 6,
      name: 'WeighStation Terminal',
      description:
        'Touchscreen terminal for weight data collection and processing',
      price: 7699.,
      category: 'Hardware',
      imageUrl: '/images/OCS-10A CAP 100-300KG.png',
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOption, setSortOption] = useState('popularity');

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.category === activeFilter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    return a.id - b.id;
  });

  return (
    <section
      className="min-h-screen py-16"
      style={{ backgroundColor: '#FEFAEA' }} // warm cream page bg
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#1F6632]">
            Our Products
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#1F6632]/80">
            Discover our range of innovative solutions designed to transform how weight scales and computers work together.
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {['All', 'Hardware', 'Software', 'Integration'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base transition ${
                  activeFilter === cat
                    ? 'bg-[#1F6632] text-white'
                    : 'bg-[#FFFEFB] text-[#1F6632] hover:bg-[#FFFEEF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-sm sm:text-base text-[#1F6632]">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-[#1F6632] rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1F6632]"
            >
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col bg-[#FFFCED]"
            >
              <div className="w-full aspect-w-16 aspect-h-9">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1F6632]">
                    {product.name}
                  </h3>
                  <span className="bg-[#FFFDEE] text-[#1F6632] text-xs sm:text-sm font-medium px-2 py-0.5 rounded-full">
                    {product.category}
                  </span>
                </div>
                <p className="text-[#1F6632]/80 text-sm sm:text-base mb-4 flex-grow">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#1F6632]">
                    Ksh {product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={addToCart}
                    className="bg-[#1F6632] hover:bg-[#145022] text-white px-4 py-2 rounded-lg text-sm sm:text-base transition focus:outline-none focus:ring-2 focus:ring-[#1F6632]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
