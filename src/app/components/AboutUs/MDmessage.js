"use client";

import { useState } from 'react';
import Image from 'next/image';

const MDmessage = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <section id='md' className="px-2 md:px-0 md:py-0 border border-grayborder mt-[10px] mx-[17.5px] mb-4 relative rounded-[20px] bg-black overflow-hidden md:h-auto xl:h-[877px] lg:h-[807px] flex flex-col items-center text-white h-[1185px]">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: 'url(/images/aboutus.webp)', opacity: 0.3 }}
      ></div>


      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-16"></div>


      {/* Text Content */}
      <div className="mt-[140px] relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-16">
        <h1 className="h2 text-center xl:mt-[61px]">Message from Our Managing Director</h1>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col justify-center  lg:flex-row lg:justify-center lg:items-center mt-3 lg:mt-10 gap-6 lg:gap-10">

        {/* Right Image Mobile */}
        <div 
          className="block md:hidden w-[300px] h-[350px] sm:w-80 md:w-96 lg:w-[400px] lg:h-[528px] sm:h-72 md:h-80  rounded-2xl bg-cover bg-center mx-auto md:mx-0"
          style={{ backgroundImage: "url(/images/MD_.jpg)" }}
        ></div>
        
        {/* Features Section */}
        <div className="w-full max-w-lg px-4 sm:px-6 md:px-10 lg:px-0 flex flex-col gap-6">
          <p className='text-justify description text-white'>
         To our cherished clients and skilled team, I want to highlight the operational principle that defines Modern Space Furnishing and Decoration Co.,Ltd.: precision in delivery. While our CEO speaks to the vision, my focus is ensuring that vision becomes a flawless reality in your space.

In the world of furnishing and decoration, success isn't just about bold ideas; it’s about the meticulous details—the perfect finish, the on-time installation, and the seamless project management. We achieve this by prioritizing operational excellence across every single workflow, from initial sketches to final walkthroughs.

Our team continuously works to streamline our processes and enhance our quality assurance measures. This commitment guarantees that every element we produce and install not only meets but exceeds your expectations for beauty and functionality. We are dedicated to translating complexity into simplicity for you. Thank you, clients, for trusting our capabilities, and thank you, team, for your relentless focus on tangible results. Let’s continue to build beautiful, lasting spaces together.
          </p>
        </div>

        {/* Right Image Mobile */}
        <div 
          className="hidden md:block w-[300px] h-[350px] sm:w-80 md:w-96 lg:w-[400px] lg:h-[528px] sm:h-72 md:h-80  rounded-2xl bg-cover bg-center mx-auto md:mx-0"
          style={{ backgroundImage: "url(/images/MD_.jpg)" }}
        ></div>

      </div>
    </section>
  );
};

export default MDmessage;
