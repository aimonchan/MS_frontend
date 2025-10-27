// 'use client';

// import { newsData } from '@/lib/NewsData.js';
// import MainButton from '../MainButton.js';
// import SecondMainButton from '../SecondMainButton.js';
// import Link from 'next/link';

// const MainNewsAndEvents = () => {
//   // BlogCard Component Definition
//   const BlogCard = ({ id, maintitle, sections }) => {
//     // Use the first section's image and description as a preview
//     const previewImage = sections[0]?.image || '/images/fallback.webp'; // Fallback if no sections
//     const fullDescription = sections[0]?.description || 'No description available';
    
//     // Split the description and take the first 5 words
//     const previewDescription = fullDescription.split(' ').slice(0, 5).join(' ') + (fullDescription.split(' ').length > 5 ? '...' : '');

//     return (
//       <div className="bg-white/2 backdrop-blur-lg border border-grayborder rounded-lg shadow-lg p-4 items-center w-[341px] h-[605px] flex flex-col">
//         <div className="w-[264px] h-[300px]">
//           <img
//             src={previewImage}
//             alt={maintitle}
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//         <div className="w-[267px] flex flex-col justify-center items-center">
//           <h3 className="text-xl font-semibold mt-4 text-accent">{maintitle}</h3>
//           <p className="text-white mt-2 text-justify line-clamp-4">{previewDescription}</p>
//           <SecondMainButton className="mt-4">Read More</SecondMainButton>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="border border-grayborder mt-[10px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] md:h-[1819px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center h-full"
//         style={{
//           backgroundImage: 'url(/images/blog.webp)', // Ensure this path is correct
//           opacity: 0.3, // 70% opacity for the image
//         }}
//       ></div>

//       {/* Black overlay with 30% opacity */}
//       <div className="absolute inset-0 bg-black opacity-30"></div>

//       {/* Content Layout */}
//       <div className="container mx-auto py-12 z-10 mt-[100px] md:mt-[50px]">
//         <div className="text-center mb-12">
//           <h1 className="h2">News & Events</h1>
//           <p className="text-gray-400 mt-4">
//             Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo
//           </p>
//         </div>

//         {/* Blog Cards Section */}
//         <div className="grid grid-cols-1 items-center justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {newsData.map((blog) => (
//             <Link
//             key={blog.id} // Key goes on the outer element in the map
//             href={`/news-events/${blog.id}`}
//             passHref
//             legacyBehavior={false}
//             >
//             {/* No key needed here */}
//                 <BlogCard
//                 key={blog.id} // Use unique blog.id
//                 id={blog.id}
//                 maintitle={blog.maintitle}
//                 sections={blog.sections}
//                 />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MainNewsAndEvents;

// components/MySlider.jsx

'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const MySlider = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  // NEW: State to store the computed gap value
  const [gap, setGap] = useState(0);

  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // --- REVISED: Core Logic to recalculate dimensions ---
  const updateSliderMetrics = useCallback(() => {
    if (containerRef.current && sliderRef.current && sliderRef.current.children.length > 0) {
      const slider = sliderRef.current;
      const containerWidth = containerRef.current.offsetWidth;
      const slideWidth = slider.children[0].offsetWidth;

      // NEW: Get the computed gap from the browser
      // This is the most reliable way to get the actual pixel value of the gap
      const style = window.getComputedStyle(slider);
      const newGap = parseFloat(style.gap) || 0; // Use parseFloat to get number from "16px"
      setGap(newGap);

      if (slideWidth > 0) {
        // Calculate how many full slides + gaps fit into the container
        const totalSlideWidth = slideWidth + newGap;
        const visibleSlides = Math.floor((containerWidth + newGap) / totalSlideWidth);
        
        const newMaxIndex = slides.length - visibleSlides;
        setMaxIndex(newMaxIndex > 0 ? newMaxIndex : 0);

        if (currentIndex > newMaxIndex) {
          setCurrentIndex(newMaxIndex > 0 ? newMaxIndex : 0);
        }
      }
    }
  }, [slides.length, currentIndex]);

  // Effect: Handle window resizing (no changes here)
  useEffect(() => {
    updateSliderMetrics();
    window.addEventListener('resize', updateSliderMetrics);
    return () => {
      window.removeEventListener('resize', updateSliderMetrics);
    };
  }, [updateSliderMetrics]);

  // --- REVISED: Effect to animate the slider ---
  useEffect(() => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const slideWidth = sliderRef.current.children[0].offsetWidth;
      // The total distance to move is the width of the slide PLUS the gap
      const newTransformValue = -currentIndex * (slideWidth + gap);
      sliderRef.current.style.transform = `translateX(${newTransformValue}px)`;
    }
  }, [currentIndex, gap]); // Add gap as a dependency


  // Navigation Handlers (no changes here)
  const goToNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
  };

  return (
    <div className="w-full py-10 px-4">
      <div ref={containerRef} className="relative w-full">
        <div className="overflow-hidden">
          {/* REVISED: Added 'gap-4' for consistent spacing */}
          <div
            ref={sliderRef}
            className="flex gap-4 transition-transform duration-500 ease-in-out"
          >
            {slides.map((slide) => (
              // REVISED: Removed the padding wrapper. The slide itself is now the direct child.
              <div
                key={slide}
                className="bg-indigo-500 h-64 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-2xl
                           w-1/2 sm:w-1/3 md:w-1/4 2xl:w-1/5"
              >
                Slide {slide}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows (no changes) */}
        <>
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-800" />
          </button>
        </>

        {/* Pagination Dots (no changes) */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySlider;