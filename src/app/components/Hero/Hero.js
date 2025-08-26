"use client";

import { useContext } from 'react';
import MainButton from '../MainButton';
import SecondMainButton from '../SecondMainButton';
import Image from 'next/image'; // next/image
import { motion } from 'framer-motion'; // motion

import { FadeIn, SlideRight } from '../../../../public/utility/animation';

const Hero = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <section
            className="relative top-0 left-0 right-0 rounded-[20px] xl:h-full lg:h-[622px] md:h-[140px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black"
        >
            {/* Background image */}
            <motion.div
                variants={FadeIn(0.1)} // Fade-in animation with delay
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute inset-0"
            >
                <Image
                    src="/images/newhero_1.webp"
                    alt="Background Image"
                    layout="fill"
                    style={{ objectFit: "cover" }} // Use style instead of objectFit
                    className="absolute inset-0 opacity-30"
                />
            </motion.div>

            {/* Black overlay with 30% opacity */}
            <div className="absolute bg-black opacity-16"></div>

            <div className='mt-[130px] w-[1072px] h-[302.02px] xl:flex xl:flex-col items-center justify-center'>
                <div className="relative z-10">
                    <motion.h1
                        variants={SlideRight(0.2)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="h1 text-center"
                    >
                        Shape Your Future <br />
                        With <span className="text-accent">Modern Space</span> Innovation!
                    </motion.h1>
                </div>

                <div className="xl:w-4/8 xl:flex items-center justify-center mb-2">
                    <motion.h3
                        variants={SlideRight(0.3)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="description text-center"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </motion.h3>
                </div>

                {/* Buttons */}
                <motion.div
                    variants={SlideRight(0.4)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='flex justify-center items-center space-x-8 mt-5 z-10'
                >
                    <MainButton onClick={handleClick}>Contact Now!</MainButton>
                    <SecondMainButton onClick={handleClick}>View Projects</SecondMainButton>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
