// "use client";


// import MainButton from './MainButton';

// //motion
// import { motion, easeInOut } from 'framer-motion';
// import SecondMainButton from './SecondMainButton';

// import ServicesCard from './Cards/ServicesCard';

// const Hero = () => {

//     const handleClick = () => {
//         alert('Button clicked!');
//       };
//     // const { searchActive } = useContext(SearchContext);
//     return (
//         <section
//             className="border border-grayborder mt-[20px] mx-[5px] md:mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:h-[781px] lg:h-[781px] md:h-[140px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black"
//         >
//             {/* Background image */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center h-full"
//                 style={{
//                     backgroundImage: 'url(/images/ourservices.jpg)', // Make sure this path is correct
//                     opacity: 0.3, // Adjust the opacity for the image to 70%
//                 }}
//             ></div>

//             {/* Black overlay with 30% opacity */}
//             <div className="absolute bg-black opacity-16"></div>

           

//       {/* Content Layout */}
//       <div className="relative z-10 flex flex-col items-center justify-center lg:flex-row lg:justify-center lg:items-center mt-6 lg:mt-10 gap-6 lg:gap-10">
//         <div className="container mx-auto py-12 px-4">
//                   <div className="text-center mb-8">
//                     <h1 className="h2 text-center xl:mt-[61px]">Our Services</h1>
//                     <p className="text-gray-300 mt-2">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                       eiusmod tempor incididunt ut labore et
//                     </p>
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                    
//                     <ServicesCard 
//                     caption="Design" 
//                     description="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis."
//                     iconImage="/icons/drawing-box.svg"
//                     />

//                     <ServicesCard
//                     caption="Build" 
//                     description="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis."
//                     iconImage="/icons/construction-crane.svg"
//                     />

//                     <ServicesCard 
//                     caption="Innovation" 
//                     description="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis."
//                     iconImage="/icons/Renovate.svg"
//                     />
                    
//                   </div>
                  
//                     <MainButton className='mx-auto mt-[68px]'>Show More!</MainButton>
                  
//         </div>
//       </div>
//         </section>
//     );
// };

// export default Hero;
"use client";

import MainButton from './MainButton';
import ServicesCard from './Cards/ServicesCard';
import Link from 'next/link';

const ServicesSection = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <section
            className="border border-grayborder relative my-4 mx-2 sm:mx-4 rounded-2xl overflow-hidden bg-black"
        >
            {/* Background & Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: 'url(/images/ourservices.jpg)' }}
            ></div>
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto py-16 px-4 md:py-24">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
                    <p className="text-gray-300 mt-4 text-lg">
                        We provide comprehensive, end-to-end services, ensuring a seamless and hassle-free experience.
                    </p>
                </div>

                {/* --- RESPONSIVE GRID WITH CENTERING ---
                    - 'place-items-center' will center the cards on mobile (in the single column)
                    - It also ensures content is centered within each grid cell on larger screens.
                */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    <ServicesCard
                        caption="Design & Build
                        (Turnkey Solution)"
                        description="We handle the entire process from design to completion, saving you time and hassle."
                        iconImage="/icons/drawing-box.svg"
                    />
                    <ServicesCard
                        caption="Interior Design"
                        description="We specialize in creating innovative designs that perfectly align with your unique style and requirements."
                        iconImage="/icons/construction-crane.svg"
                    />
                    <ServicesCard
                        caption="Custom-made Furniture"
                        description="We build and install high quality, custom-made furniture that perfectly fits your space."
                        iconImage="/icons/Renovate.svg"
                    />
                </div>

                {/* Centered Button Wrapper */}
                <div className="mt-16 flex justify-center">
                    <Link href="/our-services">
                        <MainButton>Show More!</MainButton>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;


