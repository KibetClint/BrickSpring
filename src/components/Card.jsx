import React from 'react';

export default function Card({ imgSrc, title, children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full sm:max-w-sm bg-[#FFFEFB] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-200 ease-in-out cursor-pointer flex flex-col"
    >
      {imgSrc && (
        <div className="w-full aspect-w-16 aspect-h-9">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#1F6632]">
          {title}
        </h3>

        <div className="flex-grow text-sm sm:text-base text-[#1F6632]/80">
          {children}
        </div>

        <button
          className="mt-4 w-full sm:w-auto px-4 py-2 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 transition"
          style={{ backgroundColor: '#1F6632', ringColor: '#1F6632' }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
