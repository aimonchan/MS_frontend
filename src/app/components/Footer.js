'use client';
import React from 'react';

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
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Our Services</a></li>
              <li className="mb-2"><a href="#">Our Projects</a></li>
              <li className="mb-2"><a href="#">Team Members</a></li>
              <li className="mb-2"><a href="#">Location</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">ABOUT US</h3>
            <ul>
              <li className="mb-2"><a href="#">CEO's Insight</a></li>
              <li className="mb-2"><a href="#">MD's Message</a></li>
              <li className="mb-2"><a href="#">Our Company</a></li>
              <li className="mb-2"><a href="#">Our History</a></li>
              <li className="mb-2"><a href="#">Team Members</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">OUR SERVICES</h3>
            <ul>
              <li className="mb-2"><a href="#">Design & Build</a></li>
              <li className="mb-2"><a href="#">Interior Design</a></li>
              <li className="mb-2"><a href="#">Custom-made Furniture</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
              {/* <li className="mb-2"><a href="#">Chat support</a></li> */}
            </ul>
          </div>
          
          {/* Downloads Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">PROJECTS</h3>
            <ul>
              <li className="mb-2"><a href="#">Condos & Apartments</a></li>
              <li className="mb-2"><a href="#">Offices</a></li>
              <li className="mb-2"><a href="#">Spas & Beauty Saloons</a></li>
              <li className="mb-2"><a href="#">Factories</a></li>
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
            <a href="#" className="text-gray-300 hover:text-white">Terms and Conditions</a> |{' '}
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
          </p>
          <p>Copyright © 2025 by Modern Space Furnishing & Decoration Co.,Ltd (Myanmar)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
