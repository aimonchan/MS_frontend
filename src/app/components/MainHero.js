// "use client";

// import React, { useState, useEffect } from 'react';

// import MainButton from '../components/MainButton';
// import SecondMainButton from '../components/SecondMainButton';

// //next image
// import Image from 'next/image';

// //motion
// import { motion, easeInOut, AnimatePresence } from 'framer-motion';

// import { FadeIn, SlideRight } from '../../../public/utility/animation';

// import { HeroData } from '../../../public/data/MockData';

// //context
// //import { SearchContext } from '../context/search';

// //variants
// //import { fadeIn } from '../../../variants';

// const TestTwo = () => {

//     const [activeData, setActiveData] = useState(HeroData[0]);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(()=>{
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroData.length);
//         }, 5000); // Change image every 3 seconds

//         return () => clearInterval(interval); // clean up interval on component unmount
//     },[currentIndex]);

//     useEffect(() => {
//         setActiveData(HeroData[currentIndex]);
//     }
//     , [currentIndex]);

//     const handleClick = () => {
//         alert('Button clicked!');
//       };
//     // const { searchActive } = useContext(SearchContext);
//     return (
//         <section
//         className="border border-grayborder md:mt-[10px] mt-[5px] mx-[5px] md:mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] md:h-[622px] h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        
//         {/* Background image */}
//         <div
//             className="absolute inset-0 bg-cover bg-center h-full">
//             <AnimatePresence mode='wait'>
//                 <motion.div
//                     key={activeData.id}
//                     variants={FadeIn(0.1)} // Fade-in animation with delay
//                     initial="hidden"
//                     animate="show"
//                     exit="exit"
//                     className="absolute inset-0"
//                 >
//                     <Image
//                         src={activeData.image}
//                         alt="Background Image"
//                         layout="fill" // Use layout fill to cover the entire div
//                         objectFit="cover" // Cover the div with the image
//                         className="absolute inset-0 object-cover opacity-50" // Set opacity to 30% 
//                     />
//                 </motion.div>
//             </AnimatePresence>
//         </div>

//         {/* Black overlay with 30% opacity */}
//         <div className="absolute bg-black opacity-16"></div>

//         <div className='-mt-[200px] md:mt-[130px] w-[342px] h-[80px] md:w-[1072px] md:h-[302.02px] xl:flex xl:flex-col items-center justify-center'>
            
           
//                 <AnimatePresence mode='wait'>
//                     <motion.h1
//                     key={activeData.id}
//                     variants={SlideRight(0.2)}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit" 
//                     className="h1 text-center text-white">{activeData.title}
//                     </motion.h1>
//                 </AnimatePresence>
           
//             <div className="xl:w-4/8 xl:flex items-center justify-center mb-2">
//             <AnimatePresence mode='wait'>
//                 <motion.h3
//                     key={activeData.id}
//                     variants={SlideRight(0.3)}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit" 
//                     className="description text-center text-white">{activeData.desc}
//                 </motion.h3>
//             </AnimatePresence>
//             </div>

//             {/* Buttons */}
//             <AnimatePresence mode='wait'>
//                 <motion.div
//                     key={activeData.id}
//                     variants={SlideRight(0.4)}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit" 
//                     className='w-full flex flex-col md:flex md:flex-col lg:flex lg:flex-row justify-center items-center md:space-x-8 lg:space-x-8 mt-5'
//                 >
//                     <MainButton className='w-full md:w-[210px] z-10' href="/home/#cta">Contact Now!</MainButton>
//                     <SecondMainButton href="/projects" className='w-full md:w-[210px] my-4 z-10'>View Projects</SecondMainButton>
          

//                 </motion.div>
//             </AnimatePresence>
//         </div>
//         {/* Content */}
       
//     </section>
        
//     );
// };

// export default TestTwo;

"use client";

import React, { useState, useEffect } from 'react';

import MainButton from '../components/MainButton';
import SecondMainButton from '../components/SecondMainButton';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, SlideRight } from '../../../public/utility/animation';
import { HeroData } from '../../../public/data/MockData';

const TestTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeData = HeroData[currentIndex];

  return (
    // This section is responsive and flexible
    <section className="relative flex items-center justify-center overflow-hidden
      border border-grayborder mt-[5px] mx-[5px] md:mt-[10px] md:mx-[17.5px] rounded-[20px]
      min-h-[80vh] md:min-h-[622px] py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background and Overlay are responsive */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={activeData.image}
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content area is responsive */}
      <div className='relative z-10 flex flex-col items-center w-full max-w-5xl text-center'>
        <AnimatePresence mode='wait'>
          <motion.h1
            key={activeData.id}
            variants={SlideRight(0.2)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="h1 text-white"
          >
            {activeData.title}
          </motion.h1>
        </AnimatePresence>
        
        <AnimatePresence mode='wait'>
          <motion.p
            key={activeData.id}
            variants={SlideRight(0.3)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="description text-white mt-4 max-w-3xl"
          >
            {activeData.desc}
          </motion.p>
        </AnimatePresence>

        {/* --- BUTTON SECTION RESTORED TO ORIGINAL APPEARANCE --- */}
        <motion.div
            key={activeData.id}
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="show"
            exit="exit"
            // REVERT: Using your original flexbox logic for layout.
            // Buttons stack vertically by default, and switch to horizontal on large screens (`lg`).
            className='w-full flex flex-col lg:flex-row justify-center items-center lg:space-x-8 mt-8'
        >
          {/* REVERT: Restored original classes for button sizing. */}
          {/* Full-width on mobile, fixed 210px width on medium screens and up. */}
          <MainButton className='w-full md:w-[210px]' href="/home/#cta">
            Contact Now!
          </MainButton>
          
          {/* REVERT: Restored original classes for the second button. */}
          {/* `my-4` provides vertical space when stacked, `lg:my-0` removes it when horizontal. */}
          <SecondMainButton href="/projects" className='w-full md:w-[210px] my-4 lg:my-0'>
            View Projects
          </SecondMainButton>
        </motion.div>
      </div>
    </section>
  );
};

export default TestTwo;

