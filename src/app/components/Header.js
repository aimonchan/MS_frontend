'use client';

import { useContext, useEffect, useState } from 'react';

//next Image
import Image from 'next/image';

//react scroll
// import { Link } from 'react-scroll';

import Link from 'next/link';

//components
//import SearchMobile from './SearchMobile';

//media query hook
import { useMediaQuery } from 'react-responsive';

//icons
import { BiMenuAltRight, BiX } from 'react-icons/bi';

const Header = () => {
  // const{setSearchActive} = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      //search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    //add event listener
    window.addEventListener('scroll', handleScroll);

    //remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div>
      {/* Transparent background during scroll */}
      <div
        className={`${
          header ? 'bg-background' : 'bg-transparent'
        } w-full fixed top-0 left-0 right-0 h-10 z-50
        md:h-[140px] 
        lg:h-[140px] 
        xl:h-[140px]
        sm:h-[85px]
        `}
      ></div>

      {/* Header with logo and navigation */}
      <header
        className={`${header ? 'bg-gray-500/10 backdrop-blur-md shadow-md py-2 md:py-2 border-gray-200/20' : 'bg-transparent shadow-none py-2 md:py-2'}
        fixed top-0 left-0 right-0 z-50 md:mt-[10px] mt-[5px] mx-[5px] md:mx-[17.5px] rounded-tr-[20px] rounded-tl-[20px] border xl:h-[140px] lg:h-[140px] md:h-[140px] sm:h-[85px] xl:flex transition-all duration-300`}
      >
        <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <div className="flex justify-between items-center px-4">
            
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <div
                className="w-[185.02px] h-[76px] md:w-[250px] md:h-[102px] lg:w-[358px] lg:h-[147px] bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/icons/logo.webp)',
                  backgroundSize: 'cover', // Ensures the image covers the whole div
                  backgroundPosition: 'center', // Centers the image
                }}
              ></div>
            </Link>


            {/* Mobile Menu Button */}
            <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden">
              {nav ? (
                <BiX className="text-4xl" />
              ) : (
                <BiMenuAltRight className="text-4xl" />
              )}
            </div>
          </div>

          {/* Navigation Menu */}

          <nav
            className={`${
              nav
                ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0'
                : 'max-h-0 xl:max-h-max'
            } flex flex-col w-full bg-amctwo gap-y-6 overflow-hidden xl:flex-row xl:w-max xl:gap-x-5 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm  xl:text-[15px] lg:text-sm xl:normal-case `}
          >
            <Link 
            className="cursor-pointer h3 hover:text-accent" 
            href="/" 
            //activeClass="active"
           >
              Home
            </Link>

            <Link href="/about-us" className="cursor-pointer h3 hover:text-accent">
              About Us
            </Link>


            <Link 
            className="cursor-pointer h3 hover:text-accent" 
            href="/our-services" 
            //activeClass="active"
           >
              Our Services
            </Link>

            <Link 
            className="cursor-pointer h3 hover:text-accent" 
            href="/projects" 
            //activeClass="active"
           >
              Projects
            </Link>

            <Link 
            className="cursor-pointer h3 hover:text-accent" 
            href="/custom-creations" 
            //activeClass="active"
           >
              Custom Creations
            </Link>

            <Link 
            className="cursor-pointer h3 hover:text-accent" 
            href="/#testimonial" 
            //activeClass="active"
           >
                Testimonials
            </Link>

            <Link 
            className="cursor-pointer h3 hover:text-accent" 
            href="/blogs" 
           //activeClass="active"
           >
              Blog
            </Link>

            <Link 
            className="cursor-pointer h3 hover:text-accent" 
            href="/news-events" 
           //activeClass="active"
           >
              News & Events
            </Link>

            <Link 
            className="cursor-pointer h3 hover:text-accent" 
            href="/#cta" 
            //activeClass="active"
            >
              Contact
            </Link>
            
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
