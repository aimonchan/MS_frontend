"use client";

import TestimonialCard from './Cards/TestimonialCard';
import { TestimonialData } from '../../../public/data/MockData';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./news-and-events-slider.css";


const Testimonial = () => {
    return (
        <section
            id='testimonial'
            className="border border-grayborder mt-[20px] mx-[5px] md:mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:h-[781px] lg:h-[781px] md:h-[140px] h-screen flex flex-col md:items-center md:justify-center overflow-hidden bg-black my-auto py-[100px] md:py-0"
        >
            {/* Background image */}
              <div
                  className="absolute inset-0 bg-cover bg-center h-full"
                  style={{
                      backgroundImage: 'url(/images/testimonial.webp)', // Make sure this path is correct
                      opacity: 0.1, // Adjust the opacity for the image to 70%
                  }}
              ></div>

            {/* Black overlay with 30% opacity */}
              <div className="absolute bg-black opacity-50"></div>

           

          {/* Content Layout */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-10">
              <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                          <h1 className="h2 text-center">Testimonial</h1>
                          <p className="text-gray-300 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                          </p>
                        </div>

                        {/* Swiper Component for Testimonial */}
                        <Swiper
                                modules={[Autoplay]}
                                spaceBetween={100}
                                slidesPerView={5}
                                loop={true}
                                speed={8000}
                                autoplay={{
                                  delay: 0, // No delay between slides
                                  disableOnInteraction: false, // Keep autoplay after interaction
                                  pauseOnMouseEnter: false, // No pause on hover
                                  stopOnLastSlide: false, // Don't stop on the last slide
                                  reverseDirection: true,
                                }}
                                allowTouchMove={true}
                                breakpoints={{
                                  320: { 
                                    slidesPerView: 1 ,
                                    spaceBetween: 0,
                                  },
                                  640: { 
                                    slidesPerView: 2 ,
                                    spaceBetween: 0,
                                  },
                                  768: {
                                    slidesPerView: 3,
                                    spaceBetween: 0,
                                  },
                                  1024: { 
                                    slidesPerView: 3,
                                    spaceBetween: 100,
                                  },
                                }}
                                className="w-full h-full"
                              >
                                {TestimonialData.map((item, index) => (
                                  <SwiperSlide key={item.id} className="h-auto">
                                    <TestimonialCard
                                    image={item.image}
                                    name ={item.name}
                                    location={item.location}
                                    rating={item.rating}
                                    testimonial={item.testimonial}
                                    />
                                  </SwiperSlide>
                                ))}
                        </Swiper>
              </div>
            </div>
        </section>
    );
};

export default Testimonial;

