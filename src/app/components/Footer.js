'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-40 mt-[20px] md:h-[647px]">
      <div className="container mx-auto px-4">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Product Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">HOME</h3>
            <ul>
              <li className="mb-2"><Link href="/about-us" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li className="mb-2"><Link href="/our-services" className="text-gray-300 hover:text-white">Our Services</Link></li>
              <li className="mb-2"><Link href="/projects" className="text-gray-300 hover:text-white">Our Projects</Link></li>
              <li className="mb-2"><Link href="/about-us#team" className="text-gray-300 hover:text-white">Team Members</Link></li>
              <li className="mb-2"><Link href="/location" className="text-gray-300 hover:text-white">Location</Link></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">ABOUT US</h3>
            <ul>
              <li className="mb-2"><Link href="/about-us#ceo" className="text-gray-300 hover:text-white">CEO's Insight</Link></li>
              <li className="mb-2"><Link href="/about-us#md" className="text-gray-300 hover:text-white">MD's Message</Link></li>
              <li className="mb-2"><Link href="/about-us#company" className="text-gray-300 hover:text-white">Our Company</Link></li>
              <li className="mb-2"><Link href="/about-us#history" className="text-gray-300 hover:text-white">Our History</Link></li>
              <li className="mb-2"><Link href="/about-us#team" className="text-gray-300 hover:text-white">Team Members</Link></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">OUR SERVICES</h3>
            <ul>
              <li className="mb-2"><Link href="/our-services#design-build" className="text-gray-300 hover:text-white">Design & Build</Link></li>
              <li className="mb-2"><Link href="/our-services#interior-design" className="text-gray-300 hover:text-white">Interior Design</Link></li>
              <li className="mb-2"><Link href="/our-services#custom-furniture" className="text-gray-300 hover:text-white">Custom-made Furniture</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              {/* <li className="mb-2"><a href="#">Chat support</a></li> */}
            </ul>
          </div>
          
          {/* Downloads Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">PROJECTS</h3>
            <ul>
              <li className="mb-2"><Link href="/projects#condos" className="text-gray-300 hover:text-white">Condos & Apartments</Link></li>
              <li className="mb-2"><Link href="/projects#offices" className="text-gray-300 hover:text-white">Offices</Link></li>
              <li className="mb-2"><Link href="/projects#spas" className="text-gray-300 hover:text-white">Spas & Beauty Saloons</Link></li>
              <li className="mb-2"><Link href="/projects#factories" className="text-gray-300 hover:text-white">Factories</Link></li>
              {/* <li className="mb-2"><a href="#">Chrome</a></li> */}
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center mt-8 text-gray-500">
          <p>
            All Rights Reserved |{' '}
            <Link href="/terms" className="text-gray-300 hover:text-white">Terms and Conditions</Link> |{' '}
            <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
          </p>
          <p>Copyright © 2025 by Modern Space Furnishing & Decoration Co.,Ltd (Myanmar)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
