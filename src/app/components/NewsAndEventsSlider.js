
// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "./news-and-events-slider.css";
// import ActivityCard from "./Cards/ActivityCard";
// import { newsData } from "@/lib/NewsData";

// const MarqueeSlider = () => {
//   // Transform the data for use in the slider
//   const cards = newsData.map(item => ({
//     id: item.id,
//     title: item.maintitle,
//     image: item.sections[0]?.image || "", // fallback in case image is missing
//   }));

//   return (
//     <div className="w-full py-4 bg-background" role="region" aria-label="Product carousel">
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={80}
//         slidesPerView={5}
//         loop={true}
//         speed={6000}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false,
//           stopOnLastSlide: false,
//           reverseDirection: true,
//         }}
//         allowTouchMove={false}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 80,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 400,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 100,
//           },
//         }}
//         className="w-full"
//       >
//         {cards.map((card) => (
//           <SwiperSlide key={card.id} className="h-auto">
//             <ActivityCard 
//               backgroundImage={card.image}
//               caption={card.title}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MarqueeSlider;

"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./news-and-events-slider.css";
import ActivityCard from "./Cards/ActivityCard";
import { newsData } from "@/lib/NewsData";

const MarqueeSlider = () => {
  const cards = newsData.map(item => ({
    id: item.id,
    title: item.maintitle,
    image: item.sections[0]?.image || "",
  }));

  return (
    <div className="w-full py-4 bg-background" role="region" aria-label="Product carousel">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={80}
        slidesPerView={5}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          reverseDirection: true,
        }}
        allowTouchMove={false}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 80,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 400,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
        }}
        className="w-full"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="h-auto">
            <Link href={`/news-events/${card.id}`}>
              <ActivityCard
                backgroundImage={card.image}
                caption={card.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueeSlider;
