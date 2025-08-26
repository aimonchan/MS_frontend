

"use client";

import { useContext } from 'react';

import MainButton from '../../components/MainButton';

import SwiperHero from '../../components/SwiperHero';

//next image
import Image from 'next/image';

//motion
import { motion, easeInOut } from 'framer-motion';
import SecondMainButton from '../SecondMainButton';

//context
//import { SearchContext } from '../context/search';

//variants
//import { fadeIn } from '../../../variants';



const HeroTwo = () => {

    const handleClick = () => {
        alert('Button clicked!');
      };
    // const { searchActive } = useContext(SearchContext);
    return (
        <section
            className="relative top-0 left-0 right-0 rounded-[20px] xl:h-[622px] lg:h-[622px] md:h-[140px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/images/newhero_3.webp)', // Make sure this path is correct
                    opacity: 0.3, // Adjust the opacity for the image to 70%
                }}
            ></div>

            {/* Black overlay with 30% opacity */}
            <div className="absolute bg-black opacity-16"></div>

            <div className='mt-[130px] w-[1072px] h-[302.02px] xl:flex xl:flex-col items-center justify-center'>
                <div className="relative z-10">
                    <h1 className="h1 text-center">Shape Your World<br />
                    with <span className="text-accent">Modern Space</span> Excellence!
                    </h1>
                </div>
                <div className="xl:w-4/8 xl:flex items-center justify-center mb-2">
                    <h3 className="description text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</h3>
                </div>

                {/* Buttons */}
                <div className='flex justify-center items-center space-x-8 mt-5'>
                    <MainButton onClick={handleClick}>Contact Now!</MainButton>
                    <SecondMainButton onClick={handleClick}>Get Started!</SecondMainButton>
                </div>
            </div>
            {/* Content */}
           
        </section>
    );
};

export default HeroTwo;
