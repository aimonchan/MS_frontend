"use client";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ActivityCard({ backgroundImage, caption }) {

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div
      className="group relative cursor-pointer border border-grayborder hover:border-accent w-[379px] h-[142px] rounded-[20px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content */}
      <div className="relative flex items-center justify-center w-full h-full text-white font-bold text-xs md:text-lg z-10">
        {caption}
      </div>


      
      <LazyLoadImage
        src={backgroundImage}
        alt={caption || "Card image"}
        onError={handleImageError}
        effect="blur"
        className="w-full h-full object-cover rounded-[20px]"
        wrapperClassName="w-full h-full rounded-[20px]"
      />
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 ease-in-out group-hover:opacity-0 group-focus:opacity-0 z-0 pointer-events-none rounded-[20px]" />
      {/* Visible caption */}
      <div className="relative flex items-center justify-center w-full h-full text-white font-bold text-lg z-10">
        {caption}
      </div>
      {/* Screen-reader-only caption for accessibility */}
      <span className="sr-only">{caption || "Interactive image card"}</span>
      
    </div>
  );
}

