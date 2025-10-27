// 'use client';

// import { useContext, useEffect, useState } from 'react';

// //next Image
// import Image from 'next/image';

// //react scroll
// // import { Link } from 'react-scroll';

// import Link from 'next/link';

// //components
// //import SearchMobile from './SearchMobile';

// //media query hook
// import { useMediaQuery } from 'react-responsive';

// //icons
// import { BiMenuAltRight, BiX } from 'react-icons/bi';

// const Header = () => {
//   // const{setSearchActive} = useContext(SearchContext);

//   const [header, setHeader] = useState(false);
//   const [nav, setNav] = useState(false);

//   const desktopMode = useMediaQuery({
//     query: '(min-width: 1300px)',
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 5) {
//         setHeader(true);
//       } else {
//         setHeader(false);
//       }

//       //search
//       if (window.scrollY > 800) {
//         setSearchActive(true);
//       } else {
//         setSearchActive(false);
//       }
//     };

//     //add event listener
//     window.addEventListener('scroll', handleScroll);

//     //remove event listener
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   });

//   return (
//     <div>
//       {/* Transparent background during scroll */}
//       <div
//         className={`${
//           header ? 'bg-background' : 'bg-transparent'
//         } w-full fixed top-0 left-0 right-0 h-10 z-50
//         md:h-[140px] 
//         lg:h-[140px] 
//         xl:h-[140px]
//         sm:h-[85px]
//         `}
//       ></div>

//       {/* Header with logo and navigation */}
//       <header
//         className={`${header ? 'bg-gray-500/10 backdrop-blur-md shadow-md py-2 md:py-2 border-gray-200/20' : 'bg-transparent shadow-none py-2 md:py-2'}
//         fixed top-0 left-0 right-0 z-50 md:mt-[10px] mt-[5px] mx-[5px] md:mx-[17.5px] rounded-tr-[20px] rounded-tl-[20px] border xl:h-[140px] lg:h-[140px] md:h-[140px] sm:h-[85px] xl:flex transition-all duration-300`}
//       >
//         <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
//           <div className="flex justify-between items-center px-4">
            
//             {/* Logo */}
//             <Link href="/" className="cursor-pointer">
//               <div
//                 className="w-[185.02px] h-[76px] md:w-[250px] md:h-[102px] lg:w-[358px] lg:h-[147px] bg-cover bg-center"
//                 style={{
//                   backgroundImage: 'url(/icons/logo.png)',
//                   backgroundSize: 'cover', // Ensures the entire image is visible
//                   // backgroundRepeat: 'no-repeat', // Prevents the image from repeating
//                   backgroundPosition: 'center', // Centers the image
//                 }}
//               ></div>
//             </Link>


//             {/* Mobile Menu Button */}
//             <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden">
//               {nav ? (
//                 <BiX className="text-4xl" />
//               ) : (
//                 <BiMenuAltRight className="text-4xl" />
//               )}
//             </div>
//           </div>

//           {/* Navigation Menu */}

//           <nav
//             className={`${
//               nav
//                 ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0'
//                 : 'max-h-0 xl:max-h-max'
//             } flex flex-col w-full bg-amctwo gap-y-6 overflow-hidden xl:flex-row xl:w-max xl:gap-x-5 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm  xl:text-[15px] lg:text-sm xl:normal-case `}
//           >
//             <Link 
//             className="cursor-pointer h3 hover:text-accent" 
//             href="/home" 
//             //activeClass="active"
//            >
//               Home
//             </Link>

//             <Link href="/about-us" className="cursor-pointer h3 hover:text-accent">
//               About Us
//             </Link>


//             <Link 
//             className="cursor-pointer h3 hover:text-accent" 
//             href="/our-services" 
//             //activeClass="active"
//            >
//               Our Services
//             </Link>

//             <Link 
//             className="cursor-pointer h3 hover:text-accent" 
//             href="/projects" 
//             //activeClass="active"
//            >
//               Projects
//             </Link>

//             <Link 
//             className="cursor-pointer h3 hover:text-accent" 
//             href="/custom-creations" 
//             //activeClass="active"
//            >
//               Custom Creations
//             </Link>

//             <Link 
//             className="cursor-pointer h3 hover:text-accent" 
//             href="/#testimonial" 
//             //activeClass="active"
//            >
//                 Testimonials
//             </Link>

//             <Link 
//             className="cursor-pointer h3 hover:text-accent" 
//             href="/blogs" 
//            //activeClass="active"
//            >
//               Blog
//             </Link>

//             <Link 
//             className="cursor-pointer h3 hover:text-accent" 
//             href="/news-events" 
//            //activeClass="active"
//            >
//               News & Events
//             </Link>

//             <Link 
//             className="cursor-pointer h3 hover:text-accent" 
//             href="/home/#cta" 
//             //activeClass="active"
//             >
//               Contact
//             </Link>
            
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

'use client';

import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// I've removed useMediaQuery as it wasn't being used in the logic.
// import { useMediaQuery } from 'react-responsive';
import { BiMenuAltRight, BiX } from 'react-icons/bi';

// I've commented out the context-related lines to avoid errors if they aren't fully set up.
// import { SearchContext } from '../context/search';

const Header = () => {
  // const { setSearchActive } = useContext(SearchContext);

  const [headerActive, setHeaderActive] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use a small threshold (e.g., 10px) to activate the header style
      if (window.scrollY > 10) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }

      // Your search logic
      // if (window.scrollY > 800) {
      //   setSearchActive(true);
      // } else {
      //   setSearchActive(false);
      // }
    };

    window.addEventListener('scroll', handleScroll);

    // CRITICAL FIX: Added the empty dependency array [].
    // This stops the code from adding a new event listener on every single re-render.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // <-- This is a crucial performance fix.

  // NOTE: I have removed the outer transparent `div`. It was redundant and conflicting
  // with the <header> element's own height styles. All logic is now in the <header>.
  return (
    // 
    <header
      className={`${
        headerActive || navOpen // <-- LOGIC CHANGE HERE
          ? 'bg-gray-500/10 backdrop-blur-md shadow-md border-gray-200/20'
          : 'bg-transparent shadow-none border-transparent' // <-- ADDED border-transparent
      }
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      // PRESERVING YOUR DESIGN: These margins create the "floating" effect
      mt-[5px] mx-[5px] md:mt-[10px] md:mx-[17.5px]
      // PRESERVING YOUR DESIGN: The rounded corners
      rounded-tr-[20px] rounded-tl-[20px] border
      `}
    >
      <div className="container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        {/* This container holds the logo and mobile menu button */}
        <div className="flex justify-between items-center px-4 py-2">
          {/* FIX 1: Responsive Logo */}
          <Link href="/" className="cursor-pointer">
            {/* Replaced the background-image div with a proper next/image component. */}
            {/* It is styled to be responsive while matching your original sizes. */}
            <Image
              src="/icons/logo.png"
              width={358} // Based on your largest size: lg:w-[358px]
              height={147} // Based on your largest size: lg:h-[147px] for aspect ratio
              alt="Company Logo"
              priority // Good for performance (Largest Contentful Paint)
              // RESPONSIVE SIZING: Controls the displayed size fluidly.
              className="w-[185px] h-auto md:w-[250px] lg:w-[320px]"
            />
          </Link>

          {/* Mobile Menu Button - No changes needed */}
          <div onClick={() => setNavOpen(!navOpen)} className="cursor-pointer xl:hidden">
            {navOpen ? <BiX className="text-4xl" /> : <BiMenuAltRight className="text-4xl" />}
          </div>
        </div>

        {/* Navigation Menu - Preserving the exact "push-down" effect and styling */}
        <nav
          className={`${
            navOpen
              ? 'max-h-[800px] py-8 px-4 xl:py-0 xl:px-0' // Use a large max-h to allow animation
              : 'max-h-0 xl:max-h-max' // This ensures it's visible on desktop but hidden on mobile
          } flex flex-col w-full bg-amctwo gap-y-6 overflow-hidden 
            xl:flex-row xl:w-max xl:gap-x-5 xl:h-max xl:bg-transparent xl:pb-0 
            transition-all duration-300 text-center xl:text-left 
            uppercase text-sm xl:text-[15px] lg:text-sm xl:normal-case`}
        >
          {/* FIX 2: Consistent Link Styling */}
          {/* Replaced 'h3' class with more appropriate text styling for consistency */}
          <Link href="/home" className="cursor-pointer font-semibold hover:text-accent">Home</Link>
          <Link href="/about-us" className="cursor-pointer font-semibold hover:text-accent">About Us</Link>
          <Link href="/our-services" className="cursor-pointer font-semibold hover:text-accent">Our Services</Link>
          <Link href="/projects" className="cursor-pointer font-semibold hover:text-accent">Projects</Link>
          {/* <Link href="/custom-creations" className="cursor-pointer font-semibold hover:text-accent">Custom Creations</Link>
          <Link href="/#testimonial" className="cursor-pointer font-semibold hover:text-accent">Testimonials</Link>
          <Link href="/blogs" className="cursor-pointer font-semibold hover:text-accent">Blog</Link>
          <Link href="/news-events" className="cursor-pointer font-semibold hover:text-accent">News & Events</Link> */}
          <Link href="/home/#cta" className="cursor-pointer font-semibold hover:text-accent">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;