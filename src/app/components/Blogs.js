"use client";


import MainButton from './MainButton';
import { motion, easeInOut } from 'framer-motion';
import { BlogData } from '../../../public/data/MockData';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./news-and-events-slider.css";
import { DialogTitle } from '@headlessui/react';


const BlogCard = ({id,image, title, description})=>{
    return(
        <div className="bg-white/2 backdrop-blur-lg border border-grayborder rounded-lg shadow-lg p-4 items-center w-[640px] h-[360px] flex flex-col md:flex md:flex-row md:space-x-6">
            <div className='w-[264px] h-[300px]'>
              <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className='w-[267px] flex flex-col justify-center items-center'>
              <h3 className="text-xl font-semibold mt-4 text-accent">{title}</h3>
              <p className="text-white mt-2 text-justify">{description}</p>
              <MainButton className='mt-4'>Read More</MainButton>
            </div>
        </div>
    );
}

const Blog = () => {

    return (
        <section
            className="border border-grayborder mt-[20px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:h-[781px] lg:h-[781px] md:h-[140px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center h-full"
                style={{
                    backgroundImage: 'url(/images/blog.webp)', // Make sure this path is correct
                    opacity: 0.3, // Adjust the opacity for the image to 70%
                }}
            ></div>

            {/* Black overlay with 30% opacity */}
            <div className="absolute bg-black opacity-16"></div>

           

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-center lg:items-center mt-6 lg:mt-10 gap-6 lg:gap-10">
        <div className="container mx-auto px-4">
                  <div className="text-center mb-8">
                    <h1 className="h2 text-center xl:mt-[61px]">Blog</h1>
                    <p className="text-gray-300 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et
                    </p>
                  </div>


                  {/* Swiper Component for Testimonial */}
                                          <Swiper
                                                  modules={[Autoplay]}
                                                  spaceBetween={100}
                                                  slidesPerView={2}
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
                                                    320: { slidesPerView: 1 },
                                                    640: { slidesPerView: 2 },
                                                    768: { slidesPerView: 2 },
                                                    1024: { slidesPerView: 2 }
                                                  }}
                                                  className="w-full h-full"
                                                >
                                                  {BlogData.map((item, index) => (
                                                    <SwiperSlide key={index} className="h-auto">
                                                      <BlogCard
                                                      key={index}
                                                      image={item.image}
                                                      title ={item.title}
                                                      description={item.desc}
                                                      />
                                                    </SwiperSlide>
                                                  ))}
                                          </Swiper>
                  
                    <MainButton className='mx-auto mt-[68px]'>Show More!</MainButton>
                  
        </div>
      </div>
        </section>
    );
};

export default Blog;

