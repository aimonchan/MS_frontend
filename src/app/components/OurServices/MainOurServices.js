// "use client";


// //motion
// import { motion, easeInOut } from 'framer-motion';
// import Image from 'next/image';


// const ServicesCard= ({ iconImage, caption, description })=> {
//   return (
//     <div className="bg-white/1 backdrop-blur-lg p-6 rounded-[20px] border border-[#f8951e] w-[344px] h-[865px] md:w-[1204px] md:h-[357px] flex flex-col md:flex md:flex-row gap-9">
//         <div className="flex flex-col justify-center mb-4 gap-5 mx-auto">
//             <div className="bg-black/20 backdrop-blur-lg p-4 w-[106px] h-[106px] rounded-[20px]">
//                 <Image 
//                   src={iconImage} 
//                   width={106}  // Adjust width and height to the actual size
//                   height={106} // Adjust width and height to the actual size
//                   alt={caption || 'Service Icon'}  // Provide alt text for accessibility
//                   className="hover:brightness-100"
//                 />
//             </div>
//             <div>
//                 <h2 className="font-primary font-medium text-[24px] text-center">{caption || "Service Card"}</h2>
//             </div>
//         </div>
//         <div className='my-auto flex flex-col justify-center justify-items-center mx-auto w-[276px] h-[580px] md:w-[811px] md:h-[203px]'>
//             <p className="font-secondary text-[14px] text-white text-justify">
//                 {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
//             </p>
//         </div>
//     </div>
//   );
// }

// const MainOurServices = () => {

//     const handleClick = () => {
//         alert('Button clicked!');
//       };
//     // const { searchActive } = useContext(SearchContext);
//     return (
//         <section
//             className="border border-grayborder mt-[10px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] lg:h-[1697px] flex flex-col items-center justify-center overflow-hidden bg-black"
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
//       <div className="relative z-10 flex flex-col items-center justify-center mt-[100px] lg:mt-[25px] gap-6 lg:gap-10">
//         <div className="container mx-auto py-12 px-4">
//                   <div className="text-center mb-8">
//                     <h1 className="h2 text-center xl:mt-[61px]">Our Services</h1>
//                     <p className="text-gray-300 mt-2">
//                       We provide comprehensive, end-to-end services, ensuring a seamless and hassle-free experience for our clients.
//                     </p>
//                   </div>
                  
//                   <div className="flex flex-col items-center justify-items-center gap-8">
                    
//                     <ServicesCard 
//                     caption="Design & Build (Turnkey Solution)" 
//                     description="We handle the entire process from design to completion, saving you time and hassle."
//                     iconImage="/icons/drawing-box.svg"
//                     />

//                     <ServicesCard
//                     caption="Interior Design" 
//                     description="We specialize in creating innovative designs that perfectly align with your unique style and requirements."
//                     iconImage="/icons/construction-crane.svg"
//                     />

//                     <ServicesCard 
//                     caption="Custom Furniture"
//                     description="We build and install high quality, custom-made furniture that perfectly fits your space."
//                     iconImage="/icons/Renovate.svg"
//                     />
                    
//                   </div>
//         </div>
//       </div>
//         </section>
//     );
// };

// export default MainOurServices;

"use client";

import { motion, easeInOut } from 'framer-motion';
import Image from 'next/image';
// import MainButton from './MainButton'; // Uncomment if you are using a custom MainButton component

// --- SERVICESCARD COMPONENT ---
// Defines the layout for a single service item.
const ServicesCard = ({ iconImage, caption, description }) => {
    return (
        // Card Container: full width, max-w-5xl (to control desktop size), horizontal flex on desktop.
        <div className="bg-white/1 backdrop-blur-lg p-6 sm:p-8 rounded-[20px] border border-[#f8951e] w-full max-w-5xl h-auto 
                        flex flex-col gap-6 md:flex-row md:gap-10 items-start mx-auto">
            
            {/* Left Block: Icon and Caption. Stacks vertically on desktop, inline on mobile. */}
            <div className="flex flex-row items-center gap-6 md:flex-col md:items-center md:gap-4 md:w-1/4 flex-shrink-0">
                
                {/* Icon Wrapper */}
                <div className="bg-black/20 backdrop-blur-lg p-4 w-[80px] h-[80px] sm:w-[106px] sm:h-[106px] rounded-[20px]">
                    <Image 
                        src={iconImage} 
                        width={106} 
                        height={106} 
                        alt={caption || 'Service Icon'} 
                        className="hover:brightness-100 w-full h-full object-contain"
                    />
                </div>
                
                {/* Caption */}
                <div className="w-full">
                    <h2 className="font-primary font-medium text-[24px] text-white text-left md:text-center">
                        {caption || "Service Card"}
                    </h2>
                </div>
            </div>

            {/* Right Block: Description. Takes up the remaining space (3/4 of width on desktop). */}
            <div className='flex flex-col justify-center w-full md:w-3/4'>
                <p className="font-secondary text-[14px] text-white my-auto text-justify">
                    {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </p>
            </div>
        </div>
    );
}

// --- MAINOURSERVICES COMPONENT ---
// This component renders the section and uses the ServicesCard component.
const MainOurServices = () => {

    const handleClick = () => {
        // Replace alert with router.push('/services') if using Next.js routing
        alert('Button clicked!');
    };
    
    return (
        // Main Section: Responsive margins/padding, h-auto.
        <section
            className="border border-grayborder mt-4 mx-2 sm:mx-4 relative top-0 left-0 right-0 h-auto rounded-[20px] flex flex-col items-center justify-center overflow-hidden bg-black"
        >
            {/* Background image & Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center h-full"
                style={{
                    backgroundImage: 'url(/images/ourservices.jpg)',
                    opacity: 0.3,
                }}
            ></div>
            <div className="absolute bg-black opacity-16 inset-0"></div> 

            
            {/* Content Layout */}
            <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4 w-full mt-30">
                
                <div className="container mx-auto">
                    
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
                        <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg">
                            We provide comprehensive, end-to-end services, ensuring a seamless and hassle-free experience for our clients.
                        </p>
                    </div>
                    
                    {/* Cards Container: Flexible column layout for stacking cards */}
                    <div className="flex flex-col items-center gap-8">
                        
                        <ServicesCard 
                        caption="Design & Build (Turnkey Solution)" 
                        description="We handle the entire process from design to completion, saving you time and hassle. We offer a truly comprehensive, turnkey service that meticulously manages the entire project lifecycle from start to finish. Our involvement begins with innovative conceptual design and detailed technical planning, seamlessly transitioning through expert procurement, rigorous construction management, and culminating in flawless final completion and handover. This holistic, single-point-of-contact approach is expertly designed to remove the burden of coordination and complexity from your shoulders. By taking full responsibility for the entire process, we significantly reduce your administrative time, mitigate project risks, and guarantee a completely hassle-free and smooth experience every step of the way."
                        iconImage="/icons/drawing-box.svg"
                        />

                        <ServicesCard
                        caption="Interior Design" 
                        description="We specialize in creating innovative designs that perfectly align with your unique style and requirements.We specialize in the art of creating innovative, custom-tailored designs that go beyond mere aesthetics. Our process begins with a deep, collaborative understanding of your unique personal style, functional requirements, and aspirational goals. We leverage cutting-edge techniques and creative problem-solving to develop solutions that are both beautiful and highly practical. This ensures every element of the final design perfectly aligns with your vision, delivering a truly bespoke result that not only meets but exceeds your expectations for form, function, and enduring quality."
                        iconImage="/icons/construction-crane.svg"
                        />

                        <ServicesCard 
                        caption="Custom-made Furniture"
                        description="We build and install high quality, custom-made furniture that perfectly fits your space. We are dedicated to the meticulous construction and professional installation of truly high-quality, custom-made furniture. Our approach ensures every piece is built with superior materials and expert craftsmanship, guaranteeing longevity and durability. We start by precisely measuring your environment to create designs that not only maximize utility but also perfectly integrate and fit your unique space and functional needs. By managing the entire process, from initial fabrication in our workshop to flawless, on-site final installation, we deliver beautiful, bespoke solutions that transform your space with unparalleled precision."
                        iconImage="/icons/Renovate.svg"
                        />
                        
                    </div>

                    {/* Centered Button Wrapper */}
                    <div className="mt-10 flex justify-center">
                        {/* Use <MainButton> here if available, otherwise use a standard button */}
                        {/* <button 
                            onClick={handleClick}
                            className="px-8 py-3 bg-[#f8951e] text-black font-semibold rounded-full hover:bg-orange-600 transition-colors"
                        >
                            Show More!
                        </button> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MainOurServices;