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
            <h3 className="text-orange-500 font-bold mb-4">PRODUCT</h3>
            <ul>
              <li className="mb-2"><a href="#">Features</a></li>
              <li className="mb-2"><a href="#">Pricing</a></li>
              <li className="mb-2"><a href="#">Case studies</a></li>
              <li className="mb-2"><a href="#">Reviews</a></li>
              <li className="mb-2"><a href="#">Updates</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">COMPANY</h3>
            <ul>
              <li className="mb-2"><a href="#">About</a></li>
              <li className="mb-2"><a href="#">Contact us</a></li>
              <li className="mb-2"><a href="#">Careers</a></li>
              <li className="mb-2"><a href="#">Culture</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">SUPPORT</h3>
            <ul>
              <li className="mb-2"><a href="#">Getting started</a></li>
              <li className="mb-2"><a href="#">Help center</a></li>
              <li className="mb-2"><a href="#">Server status</a></li>
              <li className="mb-2"><a href="#">Report a bug</a></li>
              <li className="mb-2"><a href="#">Chat support</a></li>
            </ul>
          </div>
          
          {/* Downloads Links */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">DOWNLOADS</h3>
            <ul>
              <li className="mb-2"><a href="#">iOS</a></li>
              <li className="mb-2"><a href="#">Android</a></li>
              <li className="mb-2"><a href="#">Mac</a></li>
              <li className="mb-2"><a href="#">Windows</a></li>
              <li className="mb-2"><a href="#">Chrome</a></li>
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
