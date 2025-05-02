// src/components/Card.jsx
import React from 'react';

export default function Card({ imgSrc, title, children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
    >
      {imgSrc && (
        <div className="h-48 w-full">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-gray-600 flex-grow">{children}</div>
        <button className="mt-4 self-start bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}
