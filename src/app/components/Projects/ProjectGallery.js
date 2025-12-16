"use client";

import React, { useState } from 'react';

export default function ProjectGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  return (
    <div className="flex-1 flex flex-col items-center">
      {/* Main Image */}
      <div className="w-full max-w-lg mx-auto mb-4">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/5]"
        />
      </div>

      {/* Thumbnails (limit to first 3) */}
      <div className="flex justify-center gap-2 sm:gap-4 overflow-x-auto w-full max-w-lg">
        {images.slice(0, 3).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`View ${index + 1}`}
            className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-lg border-2 cursor-pointer transition-transform duration-200 transform hover:scale-105 ${
              selectedImage === img ? 'border-blue-500' : 'border-gray-400'
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
