import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Home = () => {
  // Placeholder cart function
  const addToCart = () => {};

  // Hero slides data
  const slides = [
    { id: 1, title: 'Revolutionizing Weight Scale Technology Integration', subtitle: 'Seamless solutions for modern business operations', imgUrl: 'public/img/UNIWA V710 PDA.png' },
    { id: 2, title: 'Optimize Operations with Real-Time Data', subtitle: 'Harness the power of instant weight analytics', imgUrl: 'public/img/Checkered plate platform scales.png' },
    { id: 3, title: 'Custom Integration, Maximum ROI', subtitle: 'Tailored solutions for your unique business needs', imgUrl: 'public/img/Computing.jpg' }
  ];

  // Product data
  const products = [
    { id: 1, name: 'SmartScale Pro', description: 'Enterprise-grade digital scale with advanced computer integration', price: 1299.99, category: 'Hardware', imageUrl: 'public/img/Accessories.png' },
    { id: 2, name: 'WeighConnect Software', description: 'Cloud-based software for real-time weight data analysis', price: 499.99, category: 'Software', imageUrl: 'public/img/Computing.jpg' },
    { id: 3, name: 'ScaleLink Gateway', description: 'Interface for connecting legacy scales to modern systems', price: 349.99, category: 'Integration', imageUrl: 'public/img/L36 printer.png' }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOption, setSortOption] = useState('category');

  const filtered = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter);
  const sorted = [...filtered].sort((a, b) =>
    sortOption === 'price-low' ? a.price - b.price :
    sortOption === 'price-high' ? b.price - a.price : a.id - b.id
  );

  return (
    <div className="bg-gray-50 text-gray-800">
      <main>
        {/* Hero Slider */}
        <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop
            className="h-full"
          >
            {slides.map(slide => (
              <SwiperSlide key={slide.id} className="relative h-full">
                <img
                  src={slide.imgUrl}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent z-10" />
                <div className="max-w-3xl mx-auto px-4 py-16 h-full flex items-center relative z-20">
                  <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-8">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md text-sm sm:text-base md:text-lg transition">
                        Explore Products
                      </button>
                      <button className="border-2 border-white hover:bg-white/20 text-white px-5 py-3 rounded-md text-sm sm:text-base md:text-lg transition">
                        Book Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="text-center mb-12 px-4">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Our Products
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of innovative solutions designed to transform how weight scales and computers work together.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4">
            {/* Filters & Sort UI */}
            <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
              <div className="flex flex-wrap gap-2">
                {['All', 'Hardware', 'Software', 'Integration'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1.5 rounded-full transition ${
                      activeFilter === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    } text-xs sm:text-sm md:text-base`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-xs sm:text-sm md:text-base text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={e => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-md px-2 py-1 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="category">Category</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sorted.map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                  <div className="h-48 sm:h-56 w-full">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                        {product.name}
                      </h3>
                      <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm md:text-base font-medium px-2 py-0.5 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700">
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={addToCart}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs sm:text-sm md:text-base transition focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      </main>
    </div>
  );
};

export default Home;
