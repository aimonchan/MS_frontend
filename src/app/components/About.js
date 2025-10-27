
// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import MainButton from './MainButton';
// import { useRouter } from 'next/navigation';

// const AboutUs = () => {
//   const router = useRouter();
//   const handleClick = () => {
//     router.push('/about-us');
//   };

//   return (
//     <section className="py-[80px] px-2 md:px-0 md:py-0 border border-grayborder mt-[20px] mx-[5px] md:mx-[17.5px] mb-4 relative rounded-[20px] bg-black overflow-hidden 
//       sm:h-auto md:h-auto xl:h-[807px] lg:h-[807px] flex flex-col items-center text-white">
      
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center h-full"
//         style={{ backgroundImage: 'url(/images/aboutus.webp)', opacity: 0.3 }}
//       ></div>


//       {/* Black overlay */}
//       <div className="absolute inset-0 bg-black opacity-16"></div>


//       {/* Text Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-16">
//         <h1 className="h2 text-center xl:mt-[61px]">About Us</h1>
//         <h3 className="h3 text-sm sm:text-lg md:text-xl mt-4 max-w-[529.48px] mx-auto">
//          Crafting modern spaces with integrity, innovation, <br></br> and a passion for exceptional quality and design.
//         </h3>
//       </div>

//       {/* Content Layout */}
//       <div className="relative z-10 flex flex-col lg:flex-row lg:justify-center lg:items-center mt-6 lg:mt-10 gap-6 lg:gap-10">
        
//         {/* Left Image */}
//         <div 
//           className="hidden md:block w-full sm:w-80 md:w-96 lg:w-[460px] h-60 sm:h-72 md:h-80 lg:h-[460px] rounded-2xl bg-cover bg-center"
//           style={{ backgroundImage: "url(/images/group_one.jpg)" }}
//         ></div>

//         {/* Features Section */}
//         <div className="w-full max-w-lg px-4 sm:px-6 md:px-10 lg:px-0 flex flex-col gap-6">
//           {[
//             { icon: "/icons/handshake.svg", title: "Trusted", text: "We build lasting client partnerships based on complete honesty, transparency, and professional integrity." },
//             { icon: "/icons/reliable.svg", title: "Reliable", text: "We are committed to delivering every high-quality project consistently on time and within budget." },
//             { icon: "/icons/accurate.svg", title: "Accurate", text: "Our engineering precision ensures every detail is meticulously planned and executed with flawless accuracy." }
//           ].map((item, index) => (
//             <div key={index} className="flex items-center gap-4">
//               <Image src={item.icon} width={50} height={50} alt={item.title} />
//               <div>
//                 <h4 className="text-lg sm:text-xl font-semibold">{item.title}</h4>
//                 <p className="text-sm sm:text-md text-white h3">{item.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Button */}
//       <MainButton className="z-10 mt-6 mb-4 px-6 py-2" onClick={handleClick}>
//         Show More!
//       </MainButton>
//     </section>
//   );
// };

// export default AboutUs;

// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import MainButton from './MainButton';
// import { useRouter } from 'next/navigation';

// const AboutUs = () => {
//   const router = useRouter();
//   const handleClick = () => {
//     router.push('/about-us');
//   };

//   return (
//     <section className="py-[80px] px-2 md:px-0 md:py-0 border border-grayborder mt-[20px] mx-[5px] md:mx-[17.5px] mb-4 relative rounded-[20px] bg-black overflow-hidden 
//       sm:h-auto md:h-auto xl:h-[807px] lg:h-[807px] flex flex-col items-center text-white">
      
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center h-full"
//         style={{ backgroundImage: 'url(/images/aboutus.webp)', opacity: 0.3 }}
//       ></div>


//       {/* Black overlay */}
//       <div className="absolute inset-0 bg-black opacity-16"></div>


//       {/* Text Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-16">
//         <h1 className="h2 text-center xl:mt-[61px]">About Us</h1>
//         <h3 className="h3 text-sm sm:text-lg md:text-xl mt-4 max-w-[529.48px] mx-auto">
//          Crafting modern spaces with integrity, innovation, <br></br> and a passion for exceptional quality and design.
//         </h3>
//       </div>

//       {/* Content Layout */}
//       <div className="relative z-10 flex flex-col lg:flex-row lg:justify-center lg:items-center mt-6 lg:mt-10 gap-6 lg:gap-10 md:items-stretch">
        
//         {/* Left Image */}
//         <div 
//           className="hidden md:block w-full sm:w-80 md:w-96 lg:w-[460px] h-60 sm:h-72 md:h-80 lg:h-[460px] rounded-2xl bg-cover bg-center"
//           style={{ backgroundImage: "url(/images/group_one.jpg)" }}
//         ></div>

//         {/* Features Section */}
//         <div className="w-full max-w-lg px-4 sm:px-6 md:px-10 lg:px-0 flex flex-col gap-6">
//           {[
//             { icon: "/icons/handshake.svg", title: "Trusted", text: "We build lasting client partnerships based on complete honesty, transparency, and professional integrity." },
//             { icon: "/icons/reliable.svg", title: "Reliable", text: "We are committed to delivering every high-quality project consistently on time and within budget." },
//             { icon: "/icons/accurate.svg", title: "Accurate", text: "Our engineering precision ensures every detail is meticulously planned and executed with flawless accuracy." }
//           ].map((item, index) => (
//             <div key={index} className="flex items-center gap-4">
//               <Image src={item.icon} width={50} height={50} alt={item.title} />
//               <div>
//                 <h4 className="text-lg sm:text-xl font-semibold">{item.title}</h4>
//                 <p className="text-sm sm:text-md text-white h3">{item.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Button */}
//       <MainButton className="z-10 mt-6 mb-4 px-6 py-2" onClick={handleClick}>
//         Show More!
//       </MainButton>
//     </section>
//   );
// };

// export default AboutUs;

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MainButton from './MainButton'; // Assuming MainButton is a pre-styled component

const AboutUs = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/about-us');
  };

  const features = [
    { icon: "/icons/handshake.svg", title: "Trusted", text: "We build lasting client partnerships based on complete honesty, transparency, and professional integrity." },
    { icon: "/icons/reliable.svg", title: "Reliable", text: "We are committed to delivering every high-quality project consistently on time and within budget." },
    { icon: "/icons/accurate.svg", title: "Accurate", text: "Our engineering precision ensures every detail is meticulously planned and executed with flawless accuracy." }
  ];

  return (
    // --- CONTAINER ---
    // - Removed fixed heights (e.g., lg:h-[807px]). Height is now determined by content + padding.
    // - Using consistent, responsive padding (py-16, md:py-24). More space on larger screens.
    // - Removed arbitrary margins (mx-[5px]). Let the parent layout handle centering.
    <section className="relative mx-2 sm:mx-4 my-4 rounded-2xl bg-black text-white overflow-hidden border border-grayborder">
      
      {/* --- BACKGROUND & OVERLAYS --- */}
      {/* - Using Tailwind classes for background image and opacity for cleaner code. */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-[url('/images/aboutus.webp')] opacity-30"
      ></div>
      {/* - Using a semi-transparent black overlay to ensure text readability. */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- CONTENT WRAPPER --- */}
      {/* - This wrapper handles the max-width and centering for all content. */}
      <div className="relative z-10 flex flex-col items-center py-16 px-4 text-center sm:px-6 md:py-24 lg:px-8">
        
        {/* --- HEADER TEXT --- */}
        {/* - Using standard Tailwind text sizes for responsive typography.
            Note: semantically, an `<h1>` shouldn't have a class of `h2`. It's better to style directly. */}
        <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
        {/* - Removed <br> tag for natural, responsive text wrapping.
            - Replaced arbitrary max-width with a standard Tailwind class (max-w-2xl). */}
        <p className="mt-4 text-base text-gray-300 sm:text-lg max-w-2xl">
          Crafting modern spaces with integrity, innovation, and a passion for exceptional quality and design.
        </p>

        {/* --- MAIN LAYOUT (Image + Features) --- */}
        {/* - This is the core responsive layout: stacks vertically on mobile, goes side-by-side on large screens. */}
        <div className="mt-12 flex w-full max-w-6xl flex-col items-center gap-8 text-left lg:mt-16 lg:flex-row lg:items-stretch lg:gap-12">
          
          {/* --- Left Image --- */}
          {/* - Hidden on mobile, appears on tablets and up.
              - Uses proportional width (lg:w-1/2) instead of a fixed width.
              - `aspect-video` gives it a defined shape on mobile/tablet before it stretches on desktop. */}
          <div 
            className="hidden md:block w-full rounded-2xl bg-cover bg-center aspect-video lg:aspect-auto lg:w-1/2"
            style={{ backgroundImage: "url(/images/group_one_.png)" }}
          ></div>

          {/* --- Right Features Section --- */}
          {/* - Uses proportional width (lg:w-1/2) for perfect alignment with the image.
              - `justify-center` keeps the content vertically centered within its column. */}
          <div className="flex w-full flex-col justify-center gap-6 lg:w-1/2">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4 sm:gap-5">
                <Image 
                  src={item.icon} 
                  width={48} 
                  height={48} 
                  alt={`${item.title} icon`} 
                  className="mt-1 flex-shrink-0"
                />
                <div>
                  <h4 className="text-xl font-semibold sm:text-2xl">{item.title}</h4>
                  {/* - Used text-gray-300 for softer body text color against the dark background.
                      - Corrected non-standard 'text-md' to 'text-base'. */}
                  <p className="mt-1 text-base text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Button --- */}
        <MainButton className="z-10 mt-12 px-8 py-3 lg:mt-16" onClick={handleClick}>
          Show More!
        </MainButton>
      </div>
    </section>
  );
};

export default AboutUs;