"use client";

import MainButton from './MainButton';

//motion
import { motion, easeInOut } from 'framer-motion';
import SecondMainButton from './SecondMainButton';

import ServicesCard from './Cards/ServicesCard';

const Hero = () => {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <section
      className="border border-grayborder mt-[20px] mx-[5px] md:mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:h-[781px] lg:h-[781px] md:h-[140px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden h-screen flex flex-col md:flex-row"
      style={{ background: 'linear-gradient(35deg, #171717, #1E2226, #000000)' }}
    >
      <div className="rounded-lg p-8 md:p-12 lg:p-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="text-white md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            OUR LOCATION
          </h1>
          <p className="mb-4">
            Contact our Sales Department
          </p>
          
          {/* Contact Info */}
          <div className="flex items-center mb-8">
            <i className="fas fa-phone-alt text-white bg-orange-500 p-2 rounded-full mr-4"></i>
            <span className="bg-orange-500 text-white py-2 px-4 rounded-full">
              +76 956 039 999
            </span>
          </div>
          
          {/* Business Hours */}
          <ul className="space-y-2">
            <li>Monday: 9:00-13:00</li>
            <li>Tuesday: 9:00-13:00</li>
            <li>Wednesday: 9:00-13:00</li>
            <li>Thursday: 9:00-13:00</li>
            <li>Friday: 9:00-13:00</li>
            <li>Saturday: 9:00-13:00</li>
            <li>Sunday: CLOSED</li>
          </ul>
        </div>

        {/* Right Section (Google Map Embed) */}
        <div className="w-full h-[484px] md:w-[683px] md:h-[484px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.251296167827!2d-122.42026168468158!3d37.778256179759736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808fcb2786d9%3A0x2d9b60bbf2d0cf00!2sGoogle!5e0!3m2!1sen!2sus!4v1676356420112!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            className="rounded-lg" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
