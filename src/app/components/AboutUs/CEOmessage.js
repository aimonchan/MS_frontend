"use client";

import { useState } from 'react';
import Image from 'next/image';

const CEOmessage = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <section className="px-2 md:px-0 md:py-0 border border-grayborder mt-[10px] mx-[17.5px] mb-4 relative rounded-[20px] bg-black overflow-hidden md:h-auto xl:h-[877px] lg:h-[807px] flex flex-col items-center text-white h-[1185px]">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: 'url(/images/aboutus.webp)', opacity: 0.3 }}
      ></div>


      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-16"></div>


      {/* Text Content */}
      <div className="mt-[140px] relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-16">
        <h1 className="h2 text-center xl:mt-[61px]">Insight from Our CEO</h1>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col justify-center  lg:flex-row lg:justify-center lg:items-center mt-3 lg:mt-10 gap-6 lg:gap-10">
        
        {/* Left Image */}
        <div 
          className="w-[300px] h-[350px] sm:w-80 md:w-96 lg:w-[400px] lg:h-[528px] sm:h-72 md:h-80  rounded-2xl bg-cover bg-center mx-auto md:mx-0"
          style={{ backgroundImage: "url(/images/CEO_.png)" }}
        ></div>

        {/* Features Section */}
        <div className="w-full max-w-lg px-4 sm:px-6 md:px-10 lg:px-0 flex flex-col gap-6">
          <p className='text-justify description text-white'>
          To our valued clients and dedicated team, I want to share a key insight driving our approach this year. The design market is shifting rapidly, demanding not just aesthetic innovation, but also unwavering partnership in bringing your visions to life. The adaptability shown by our team confirms our core strength: our collective commitment to quality.

We must embrace change—in trends, technology, and project needs—as our guide. Our success is not defined by avoiding design complexity, but by how skillfully we transform spaces alongside you. This means we are doubling down on our client-centric approach, ensuring every decision starts and ends with creating your perfect environment. We are not just selling furnishings; we are building lasting, meaningful value and comfort together.

I thank our team for their relentless pursuit of excellence and I thank our clients for their trust. As we look ahead, remember that every space we furnish contributes to a larger vision of modern living. We remain curious about new materials and bold in our solutions. Together, we will redefine what is possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOmessage;
