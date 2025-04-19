import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OverlayCards = ({ backgroundImage, caption }) => {
  const fallbackImage = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13";

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div className="relative overflow-hidden w-[379px] h-[142px] rounded-[20px] group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500">
      <LazyLoadImage
        src={backgroundImage}
        alt={caption || "Card image"}
        onError={handleImageError}
        effect="blur"
        className="w-full h-full object-cover"
        wrapperClassName="w-full h-full"
      />
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 ease-in-out group-hover:opacity-0 group-focus:opacity-0 z-0 pointer-events-none" />
      {/* Visible caption */}
      <div className="relative flex items-center justify-center w-full h-full text-white font-bold text-lg z-10">
        {caption}
      </div>
      {/* Screen-reader-only caption for accessibility */}
      <span className="sr-only">{caption || "Interactive image card"}</span>
    </div>
  );
};

const Gallery = ({ backgroundImage, caption }) => {
  return (
    <OverlayCards
      backgroundImage={backgroundImage}
      caption={caption}
    />
  );
};

export default Gallery;