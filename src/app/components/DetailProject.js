import React, { useState } from 'react';

const productImages = [
  '/assets/main-image.png',
  '/assets/small-image1.png',
  '/assets/small-image2.png',
];

export default function ProjectDetail() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <div className="p-6 gap-3 flex flex-row">
      {/* Side Thumbnails */}
      <div className="md:col-span-1 flex md:flex-col gap-4 overflow-x-auto">
        {productImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`View ${index + 1}`}
            className={`w-[152px] h-[168px] object-cover rounded-xl border-2 cursor-pointer ${
              selectedImage === img ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="md:col-span-2 object-contain">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="rounded-xl shadow-lg w-[437px] h-[530px] object-cover"
        />
      </div>
    </div>
  );
}
