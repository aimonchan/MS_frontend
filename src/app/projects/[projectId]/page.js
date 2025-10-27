// "use client";
// import React, { useState } from 'react';
// import { notFound } from 'next/navigation';
// import Header from '@/app/components/Header';
// import Footer from '@/app/components/Footer';
// import Cta from '@/app/components/Cta';

// // Import the function to get project data
// import { getProjectById } from '@/lib/MockData.js'; // Adjust this path based on your file structure!

// // Import Icons (make sure you have react-icons installed)
// import {
//   FaRegSmile,
//   FaRegBuilding,
//   FaMapMarkerAlt,
//   FaUsers,
//   FaRegClock,
//   FaRegCalendarAlt,
//   FaArrowLeft
// } from 'react-icons/fa';

// // --- The Page Component ---
// export default function ProjectDetailPage({ params }) {
//   // params.projectId comes directly from the folder name [projectId]
//   // It will be the value from the URL (e.g., "1", "5", "abc-holdings")
//   const { projectId } = params;

//   // Find the specific project using the ID from the params
//   const project = getProjectById(projectId);

//   // If no project is found for that ID, trigger the 404 page
//   if (!project) {
//     notFound();
//   }

//   // Initialize projectImages after ensuring project is found
//   const projectImages = project.images;

//   // Initialize the selectedImage state with the first image from projectImages
//   const [selectedImage, setSelectedImage] = useState(projectImages[0]);

//   const projectDetails = [
//     { icon: FaRegSmile, label: 'Client', value: 'ABC Co.,Ltd' },
//     { icon: FaRegBuilding, label: 'Client Industry', value: 'Pharmaceutical Trading' },
//     { icon: FaMapMarkerAlt, label: 'Site Area', value: '3000 SQM (3.5 Floor)' },
//     { icon: FaUsers, label: 'Project Type', value: 'Office Renovation' },
//     { icon: FaRegSmile, label: 'Services', value: 'Design, Build, Renovation' },
//     { icon: FaRegClock, label: 'Project Duration', value: '3 months' },
//     { icon: FaMapMarkerAlt, label: 'Location', value: 'Yangon' },
//     { icon: FaRegCalendarAlt, label: 'Completion Date', value: '2 January 2022' },
//   ];

//   return (
//     <div>
//       <Header/>
//       <section className="border border-grayborder mt-[10px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:h-[1317px] lg:h-[1317px] xl:flex xl:flex-col flex flex-col items-center justify-center overflow-hidden bg-black">
        
//         <div
//           className="absolute inset-0 bg-cover bg-center h-full"
//           style={{
//             backgroundImage: 'url(/images/project_detail_background.webp)', // Make sure this path is correct
//             opacity: 0.3, // Adjust the opacity for the image to 70%
//           }}
//         ></div>

//         {/* Black overlay with 30% opacity */}
//         <div className="absolute bg-black opacity-16"></div>

//         {/* card equivalent */}
//         <div className="relative overflow-hidden mx-auto mt-[75px]">
          
//           {/* Mobile Title Description*/}
//           <div className='fex items-center justify-center mx-auto mt-10 md:hidden'>
//             <h2 className="text-accent text-center mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold md:mt-[18px]">
//               {project.title}
//             </h2>
//           </div>

//           {/* Top Section: Images and Description */}
//           <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">
            
//             {/* imageGallery equivalent - main image above thumbnails on small screens */}
//             <div className="p-6 gap-3 flex flex-row">
              
//               {/* Side Thumbnails */}
//               <div className='flex flex-col gap-2 md:flex md:flex-row md:gap-3'>
//                 <div className="hidden md:flex md:col-span-1 md:flex-col gap-4 overflow-x-auto">
//                   {projectImages.map((img, index) => (
//                     <img
//                       key={index}
//                       src={img}
//                       alt={`View ${index + 1}`}
//                       className={`w-[111px] h-[106px] md:w-[152px] md:h-[168px] object-cover rounded-xl border-2 cursor-pointer ${
//                         selectedImage === img ? 'border-blue-500' : 'border-gray-300'
//                       }`}
//                       onClick={() => setSelectedImage(img)}
//                     />
//                   ))}
//                 </div>

//                 {/* Main Image */}
//                 <div className="md:col-span-2 object-contain">
//                   <img
//                     src={selectedImage}
//                     alt="Selected Product"
//                     className="rounded-xl shadow-lg w-[437px] h-[530px] object-cover"
//                   />
//                 </div>

//                 {/* Mobile Side Thumbnails */}
//                 <div className="flex col-span-1 md:hidden gap-4 overflow-x-auto mx-auto">
//                   {projectImages.map((img, index) => (
//                     <img
//                       key={index}
//                       src={img}
//                       alt={`View ${index + 1}`}
//                       className={`w-[111px] h-[106px] md:w-[152px] md:h-[168px] object-cover rounded-xl border-2 cursor-pointer ${
//                         selectedImage === img ? 'border-blue-500' : 'border-gray-300'
//                       }`}
//                       onClick={() => setSelectedImage(img)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* textDescription equivalent */}
//             <div className="flex-1 min-w-0 flex flex-col justify-items-center align-items-center mx-auto">
//               {/* title equivalent */}
//               <div className='hidden md:hidden lg:block'>
//                 <h2 className="text-accent mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold md:mt-[18px]">
//                   {project.title}
//                 </h2>
//               </div>
//               {/* paragraph equivalent */}
//               {project.description && (
//                 <p className="text-sm md:text-base leading-relaxed text-white text-justify w-[302px] h-[544px] md:w-[563px] md:h-[374px] mx-auto">
//                   {project.description}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Project Details Section */}
//           <div className="mb-16 mx-auto px-5 md:px-0">
//             <h3 className="text-xl md:text-2xl mb-1 text-gray-200 font-medium">
//               Project Details
//             </h3>
//             <div className="w-20 h-0.5 bg-orange-500 mt-2 mb-6"></div>

//             {/* detailsGrid equivalent - 1 col default, 2 cols on sm+, 4 cols on lg+ */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//               {projectDetails.map((item, index) => {
//                 const IconComponent = item.icon; // Get the icon component
//                 return (
//                   <div key={index} className="bg-gray-700 hover:bg-gray-600 transition-colors duration-200 ease-in-out rounded-lg p-4 flex items-center gap-4">
//                     <div className="bg-gray-600 rounded-full w-10 h-10 flex justify-center items-center flex-shrink-0">
//                       <IconComponent className="text-xl text-gray-200" />
//                     </div>
//                     <div className="flex flex-col min-w-0">
//                       <span className="text-xs text-gray-400 mb-0.5 whitespace-nowrap">
//                         {item.label}
//                       </span>
//                       <span className="text-sm font-medium text-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
//                         {item.value}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Navigation */}
//           {/* <div className="absolute bottom-4 right-5 sm:bottom-6 sm:right-8 lg:bottom-8 lg:right-10">
//             <button className="bg-transparent border-none text-gray-400 hover:text-orange-500 transition-colors duration-200 ease-in-out cursor-pointer p-1 text-2xl md:text-3xl">
//               <FaArrowLeft />
//             </button>
//           </div> */}

//         </div>
//       </section>
//       <Cta/>
//       <Footer/>
//     </div>
//   );
// }

"use client";
import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Cta from '@/app/components/Cta';

import { getProjectById } from '@/lib/MockData.js'; 

import {
  FaRegSmile,
  FaRegBuilding,
  FaMapMarkerAlt,
  FaUsers,
  FaRegClock,
  FaRegCalendarAlt,
  FaArrowLeft
} from 'react-icons/fa';

export default function ProjectDetailPage({ params }) {
  const { projectId } = params;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  const projectImages = project.images;
  const [selectedImage, setSelectedImage] = useState(projectImages[0]);

  const iconMap = {
    'Client': FaRegSmile,
    'Client Industry': FaRegBuilding,
    'Site Area': FaMapMarkerAlt,
    'Project Type': FaUsers,
    'Services': FaRegSmile,
    'Project Duration': FaRegClock,
    'Location': FaMapMarkerAlt,
    'Completion Date': FaRegCalendarAlt,
  };

  return (
    <div>
      <Header/>
      <section className="border border-grayborder mt-[10px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:h-[1317px] lg:h-[1317px] xl:flex xl:flex-col flex flex-col items-center justify-center overflow-hidden bg-black">
        
        <div
          className="absolute inset-0 bg-cover bg-center h-full"
          style={{
            backgroundImage: 'url(/images/project_detail_background.webp)',
            opacity: 0.3,
          }}
        ></div>
        <div className="absolute bg-black opacity-16"></div>

        <div className="relative overflow-hidden mx-auto mt-[75px]">
          
          <div className='fex items-center justify-center mx-auto mt-10 md:hidden'>
            <h2 className="text-accent text-center mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold md:mt-[18px]">
              {project.title}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">
            <div className="p-6 gap-3 flex flex-row">
              <div className='flex flex-col gap-2 md:flex md:flex-row md:gap-3'>
                {/* --- DESKTOP THUMBNAILS --- */}
                <div className="hidden md:flex md:col-span-1 md:flex-col gap-4 overflow-x-auto">
                  {/* THE FIX IS HERE: Limit to the first 3 images */}
                  {projectImages.slice(0, 3).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`View ${index + 1}`}
                      className={`w-[111px] h-[106px] md:w-[152px] md:h-[168px] object-cover rounded-xl border-2 cursor-pointer ${
                        selectedImage === img ? 'border-blue-500' : 'border-gray-300'
                      }`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
                {/* Main Image */}
                <div className="md:col-span-2 object-contain">
                  <img
                    src={selectedImage}
                    alt="Selected Product"
                    className="rounded-xl shadow-lg w-[437px] h-[530px] object-cover"
                  />
                </div>
                {/* --- MOBILE THUMBNAILS --- */}
                <div className="flex col-span-1 md:hidden gap-4 overflow-x-auto mx-auto">
                  {/* THE FIX IS HERE: Limit to the first 3 images */}
                  {projectImages.slice(0, 3).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`View ${index + 1}`}
                      className={`w-[111px] h-[106px] md:w-[152px] md:h-[168px] object-cover rounded-xl border-2 cursor-pointer ${
                        selectedImage === img ? 'border-blue-500' : 'border-gray-300'
                      }`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Project Description */}
            <div className="flex-1 min-w-0 flex flex-col justify-items-center align-items-center mx-auto">
              <div className='hidden md:hidden lg:block'>
                <h2 className="text-accent mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold md:mt-[18px]">
                  {project.title}
                </h2>
              </div>
              {project.description && (
                <p className="text-sm md:text-base leading-relaxed text-white text-justify w-[302px] h-[544px] md:w-[563px] md:h-[374px] mx-auto">
                  {project.description}
                </p>
              )}
            </div>
          </div>

          {/* Project Details Section */}
          <div className="mb-16 mx-auto px-5 md:px-0">
            <h3 className="text-xl md:text-2xl mb-1 text-gray-200 font-medium">
              Project Details
            </h3>
            <div className="w-20 h-0.5 bg-orange-500 mt-2 mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {project.details && project.details.map((item, index) => {
                const IconComponent = iconMap[item.label] || FaRegBuilding;
                return (
                  <div key={index} className="bg-gray-700 hover:bg-gray-600 transition-colors duration-200 ease-in-out rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-gray-600 rounded-full w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <IconComponent className="text-xl text-gray-200" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-gray-400 mb-0.5 whitespace-nowrap">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-gray-200 whitespace-now-hidden text-ellipsis">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Cta/>
      <Footer/>
    </div>
  );
}