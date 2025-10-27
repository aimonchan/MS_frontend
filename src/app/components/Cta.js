// "use client";


// import MainButton from './MainButton';

// //motion
// import { motion, easeInOut } from 'framer-motion';
// import SecondMainButton from './SecondMainButton';

// import ServicesCard from './Cards/ServicesCard';

// import { useState } from 'react';

// const ContactUs = () => {
//    const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Here you would handle form submission logic, like sending data to a server
//       console.log(formData);
//     };

//     const handleClick = () => {
//         alert('Button clicked!');
//       };
//     // const { searchActive } = useContext(SearchContext);
//     return (
//         <section
//             id='cta'
//             className="border border-grayborder mt-[20px] mx-[5px] md:mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:h-[781px] lg:h-[781px] md:h-[140px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black"
//         >
//             {/* Background image */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center h-full"
//                 style={{
//                     backgroundImage: 'url(/images/cta.webp)', // Make sure this path is correct
//                     opacity: 0.1, // Adjust the opacity for the image to 70%
//                 }}
//             ></div>

//             {/* Black overlay with 30% opacity */}
//             <div className="absolute bg-black opacity-16"></div>




//             <div className="flex items-center justify-center min-h-screen">
//               <div className="p-8 rounded-lg max-w-4xl w-full mx-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {/* Contact Info Section */}
//                   <div className="text-white">
//                     <h2 className="text-sm font-semibold">CONTACT US</h2>
//                     <h1 className="text-4xl font-bold text-accent mt-2">GET IN TOUCH TODAY</h1>
//                     <p className="mt-4 text-gray-300">
//                       Our expert team is ready to discuss your ideas and help you get started.
//                     </p>
//                     <div className="mt-6 space-y-4">
//                       <div className="flex items-center">
//                         <i className="fas fa-envelope text-accent mr-3"></i>
//                         <span>contact@mspace-deco.com</span>
//                       </div>
//                       <div>
//                         <i className="fas fa-phone-alt text-accent mr-3"></i>
//                         <div>(+95) 99717 494 83</div>
//                         <div>(+95) 99740 875 22</div>
//                         <div>(+95) 97631 284 61</div>
//                       </div>
//                       <div className="flex items-center">
//                         <i className="fas fa-map-marker-alt text-accent mr-3"></i>
//                         <span>#5A-1202, Yadanar HninSi Condo,
// <br />Yadanar Rd, Dagon Seikkan, Yangon, Myanmar.</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Form Section */}
//                   <div className="p-1 rounded-lg z-10">
//                     <form onSubmit={handleSubmit}>
//                       <div className="space-y-4">
//                         <input
//                           type="text"
//                           placeholder="John Carter"
//                           className="w-full p-3 rounded-[20px] bg-transparent border border-accent h3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                         />
//                         <input
//                           type="email"
//                           placeholder="example@email.com"
//                           className="w-full p-3 rounded-[20px] bg-transparent border border-accent h3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                         <input
//                           type="text"
//                           placeholder="(123) 456 - 789"
//                           className="w-full p-3 rounded-[20px] bg-transparent border border-accent text-white h3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                         />
//                         <textarea
//                           placeholder="Message"
//                           className="w-full p-3 rounded-[20px] bg-transparent border border-accent text-white h3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent h-32"
//                           name="message"
//                           value={formData.message}
//                           onChange={handleChange}
//                         ></textarea>
//                       </div>
//                       <MainButton
//                         type="submit"
//                         className="mt-6 w-full bg-accent py-3  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-accent"
//                       >
//                         Send message
//                       </MainButton>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//     </div>

           

      
                  
       
//         </section>
//     );
// };

// export default ContactUs;

"use client";

import { useState } from 'react';
import MainButton from './MainButton';
// Your other imports like motion, etc., can remain if you use them elsewhere.

const ContactUs = () => {
  // STATE 1: For form input fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // STATE 2: For submission status (loading, error, success messages)
  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: '',
  });

  // Handles changes in form inputs (This is the same as your original)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handles the form submission (This is the logic from your old project)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    try {
      const response = await fetch('/api/contact', { // This points to the API route we just modified
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: result.message || 'Your message has been sent. Thank you!', error: '' });
        // Clear the form fields on success
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ loading: false, error: result.message || 'An error occurred. Please try again.', success: '' });
      }
    } catch (err) {
      setStatus({ loading: false, error: 'An unexpected error occurred. Please check your connection.', success: '' });
    }
  };

  return (
    <section
      id='cta'
      className="border border-grayborder mt-[20px] mx-[5px] md:mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] py-16 xl:py-0 xl:h-[781px] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: 'url(/images/cta.webp)', opacity: 0.1 }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-16"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="p-8 rounded-lg max-w-4xl w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

            {/* Contact Info Section (No changes here) */}
            <div className="text-white">
              <h2 className="text-sm font-semibold">CONTACT US</h2>
              <h1 className="text-4xl font-bold text-accent mt-2">GET IN TOUCH TODAY</h1>
              <p className="mt-4 text-gray-300">
                Our expert team is ready to discuss your ideas and help you get started.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-accent mr-3"></i>
                  <span>marketing.team@mspace-deco.com</span>
                </div>
                <div>
                  <i className="fas fa-phone-alt text-accent mr-3"></i>
                  <div>(+95) 9449 556 610</div>
                  <div>(+95) 9449 556 620</div>
                  <div>(+95) 9449 556 630</div>
                  <div>(+95) 9449 556 640</div>
                  <div>(+95) 9449 556 650</div>
                  <div>(+95) 9449 556 680</div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-accent mr-3"></i>
                  <span>#5A-1202, Yadanar HninSi Condo,<br />Yadanar Rd, Dagon Seikkan, Yangon, Myanmar.</span>
                </div>
              </div>
            </div>

            {/* Form Section (Now with submission logic) */}
            <div className="p-1 rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="John Carter"
                    className="w-full p-3 rounded-[20px] bg-transparent border border-accent h3 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full p-3 rounded-[20px] bg-transparent border border-accent h3 placeholder-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="(123) 456 - 789"
                    className="w-full p-3 rounded-[20px] bg-transparent border border-accent text-white h3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    placeholder="Message"
                    className="w-full p-3 rounded-[20px] bg-transparent border border-accent text-white h3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent h-32"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* --- UI FEEDBACK MESSAGES --- */}
                <div className="my-3 text-center h-5">
                  {status.loading && <div className="text-white">Sending...</div>}
                  {status.error && <div className="text-red-500">{status.error}</div>}
                  {status.success && <div className="text-green-500">{status.success}</div>}
                </div>

                <MainButton
                  type="submit"
                  disabled={status.loading} // Disable button while sending
                  className="mt-2 w-full bg-accent py-3 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-accent disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  {status.loading ? 'Sending...' : 'Send message'}
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

