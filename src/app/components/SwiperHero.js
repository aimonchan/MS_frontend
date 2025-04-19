import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "./hero-slider.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Hero from "./Hero/Hero"; // Adjust the path based on your file structure
import HeroTwo from "./Hero/HeroTwo"; // Corrected import path
import HeroThree from "./Hero/HeroThree"; // Added missing import

// Custom button components
const MainButton = ({ onClick, children }) => (
  <button onClick={onClick} className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300">
    {children}
  </button>
);

const SecondMainButton = ({ onClick, children }) => (
  <button onClick={onClick} className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
    {children}
  </button>
);

const HeroSlider = ({ autoplaySpeed = 2000, showNavigation = false, showPagination = true }) => {
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  const slides = [
    {
      type: "component",
      component: <Hero />,
    },
    {
      type: "component",
      component: <HeroTwo />,
    },
    {
      type: "component",
      component: <HeroThree />,
    },
  ];

  const handleAutoplayToggle = useCallback(() => {
    setIsAutoplaying(!isAutoplaying);
  }, [isAutoplaying]);

  const handleClick = () => {
    console.log("Button clicked!");
    // Add your click handler logic here
  };

  const renderSlideContent = (slide) => {
    // If the slide type is "component", render the custom component
    if (slide.type === "component" && slide.component) {
      return slide.component;
    }
    // Fallback in case no component is provided (optional)
    return <div>No content available</div>;
  }; // Added missing closing brace and semicolon

  return (
    <div className="relative w-full h-[622px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="slide"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: false,
        }}
        loop={true}
        direction="horizontal"
        speed={350}
        pagination={showPagination ? { clickable: true } : false}
        navigation={
          showNavigation
            ? {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }
            : false
        }
        onAutoplayTimeLeft={(swiper, time, progress) => {
          console.log(progress);
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            {renderSlideContent(slide)}
          </SwiperSlide>
        ))}

        {showNavigation && (
          <>
            <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all duration-300">
              <FaArrowLeft className="text-indigo-600 text-xl" />
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all duration-300">
              <FaArrowRight className="text-indigo-600 text-xl" />
            </button>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

