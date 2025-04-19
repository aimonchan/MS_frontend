"use client";


import MainButton from './MainButton';

//motion
import { motion, easeInOut } from 'framer-motion';
import SecondMainButton from './SecondMainButton';

import ServicesCard from './Cards/ServicesCard';

import { useState } from 'react';

const ContactUs = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you would handle form submission logic, like sending data to a server
      console.log(formData);
    };

    const handleClick = () => {
        alert('Button clicked!');
      };
    // const { searchActive } = useContext(SearchContext);
    return (
        <section
            id='cta'
            className="border border-grayborder mt-[20px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:h-[781px] lg:h-[781px] md:h-[140px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center h-full"
                style={{
                    backgroundImage: 'url(/images/cta.webp)', // Make sure this path is correct
                    opacity: 0.1, // Adjust the opacity for the image to 70%
                }}
            ></div>

            {/* Black overlay with 30% opacity */}
            <div className="absolute bg-black opacity-16"></div>




            <div className="flex items-center justify-center min-h-screen">
              <div className="p-8 rounded-lg max-w-4xl w-full mx-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Contact Info Section */}
                  <div className="text-white">
                    <h2 className="text-sm font-semibold">CONTACT US</h2>
                    <h1 className="text-4xl font-bold text-accent mt-2">GET IN TOUCH TODAY</h1>
                    <p className="mt-4 text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
                    </p>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center">
                        <i className="fas fa-envelope text-accent mr-3"></i>
                        <span>contact@company.com</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-phone-alt text-accent mr-3"></i>
                        <span>(123) 456 - 789</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-accent mr-3"></i>
                        <span>794 Mcallister St<br />San Francisco, 94102</span>
                      </div>
                    </div>
                  </div>

                  {/* Form Section */}
                  <div className="p-6 rounded-lg z-10">
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="John Carter"
                          className="w-full p-3 rounded-[20px] bg-transparent border border-accent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <input
                          type="email"
                          placeholder="example@email.com"
                          className="w-full p-3 rounded-[20px] bg-transparent border border-accent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          placeholder="(123) 456 - 789"
                          className="w-full p-3 rounded-[20px] bg-transparent border border-accent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <textarea
                          placeholder="Message"
                          className="w-full p-3 rounded-[20px] bg-transparent border border-accent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent h-32"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <MainButton
                        type="submit"
                        className="mt-6 w-full bg-accent py-3  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        Send message
                      </MainButton>
                    </form>
                  </div>
                </div>
              </div>
    </div>

           

      
                  
       
        </section>
    );
};

export default ContactUs;

