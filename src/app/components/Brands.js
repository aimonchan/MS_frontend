'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./news-and-events-slider.css";
import BrandCard from "./Cards/BrandCard";

const MarqueeSlider = () => {
    const cards = [
        {
          id: 1,
          title: "Corporate Sports Event",
          description: "Explore the majestic peaks",
          image: '/icons/brands/AFD.svg'
        },
        {
          id: 2, 
          title: "We Protect Global Warming",
          description: "Relax on pristine shores",
          image: '/icons/brands/ConX.svg'
        },
        {
          id: 3,
          title: "Urban Explorer",
          description: "Discover city secrets",
          image: '/icons/brands/LYChi.svg'
        },
        {
          id: 4,
          title: "Urban Explorer",
          description: "Discover city secrets",
          image: '/icons/brands/Min Ga Taw.svg'
        },
        {
          id: 5, 
          title: "We Protect Global Warming",
          description: "Relax on pristine shores",
          image: '/icons/brands/ParkRoyal.svg'
        },
        {
          id: 6,
          title: "Corporate Sports Event",
          description: "Explore the majestic peaks",
          image: '/icons/brands/Pizza.svg'
        },
        {
          id: 7, 
          title: "We Protect Global Warming",
          description: "Relax on pristine shores",
          image: '/icons/brands/Retro.svg'
        },
        {
          id: 8,
          title: "Urban Explorer",
          description: "Discover city secrets",
          image: '/icons/brands/Shwe Oh.svg'
        },
        {
          id: 9,
          title: "Corporate Sports Event",
          description: "Explore the majestic peaks",
          image: '/icons/brands/AFD.svg'
        },
        {
          id: 10,
          title: "Corporate Sports Event",
          description: "Explore the majestic peaks",
          image: '/icons/brands/ConX.svg'
        },
        {
          id: 11, 
          title: "We Protect Global Warming",
          description: "Relax on pristine shores",
          image: '/icons/brands/LYChi.svg'
        },
        {
          id: 12,
          title: "Urban Explorer",
          description: "Discover city secrets",
          image: '/icons/brands/Maresk.svg'
        },
      ];

return (
    
  <div className="mt-[20px] w-full py-4 bg-[#171717] h-[191px]" role="region" aria-label="Product carousel">
      <div className="xl:ml-[174px] font-primary uppercase text-white mb-[20px]">Trusted By</div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
        slidesPerView={7}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0, // No delay between slides
          disableOnInteraction: false, // Keep autoplay after interaction
          pauseOnMouseEnter: false, // No pause on hover
          stopOnLastSlide: false, // Don't stop on the last slide
          reverseDirection: false,
        }}
        allowTouchMove={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className="w-full h-full"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="flex justify-center items-center">
            <BrandCard
                logoSrc={card.image}
                altText={`${card.title} logo`} // Good for accessibility!
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueeSlider;
