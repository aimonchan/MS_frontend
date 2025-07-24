
"use client";

import { useState } from 'react';
import Image from 'next/image';
import MainButton from './MainButton';
import { useRouter } from 'next/navigation';

const AboutUs = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/about-us');
  };

  return (
    <section className="py-[80px] px-2 md:px-0 md:py-0 border border-grayborder mt-[20px] mx-[5px] md:mx-[17.5px] mb-4 relative rounded-[20px] bg-black overflow-hidden 
      sm:h-auto md:h-auto xl:h-[807px] lg:h-[807px] flex flex-col items-center text-white">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: 'url(/images/aboutus.webp)', opacity: 0.3 }}
      ></div>


      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-16"></div>


      {/* Text Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-16">
        <h1 className="h2 text-center xl:mt-[61px]">About Us</h1>
        <h3 className="text-sm sm:text-lg md:text-xl mt-4 max-w-[529.48px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt magna aliqua.
        </h3>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-center lg:items-center mt-6 lg:mt-10 gap-6 lg:gap-10">
        
        {/* Left Image */}
        <div 
          className="hidden md:block w-full sm:w-80 md:w-96 lg:w-[460px] h-60 sm:h-72 md:h-80 lg:h-[460px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url(/images/group_one.jpg)" }}
        ></div>

        {/* Features Section */}
        <div className="w-full max-w-lg px-4 sm:px-6 md:px-10 lg:px-0 flex flex-col gap-6">
          {[
            { icon: "/icons/handshake.svg", title: "Trusted", text: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices." },
            { icon: "/icons/reliable.svg", title: "Reliable", text: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices." },
            { icon: "/icons/accurate.svg", title: "Accurate", text: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices." }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={item.icon} width={50} height={50} alt={item.title} />
              <div>
                <h4 className="text-lg sm:text-xl font-semibold">{item.title}</h4>
                <p className="text-sm sm:text-md">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <MainButton className="z-10 mt-6 mb-4 px-6 py-2" onClick={handleClick}>
        Show More!
      </MainButton>
    </section>
  );
};

export default AboutUs;
