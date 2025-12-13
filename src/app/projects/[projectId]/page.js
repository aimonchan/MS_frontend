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
      <Header />
      <section className="border-t border-gray-200 mt-4 md:mt-5 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 rounded-lg overflow-hidden bg-black text-white">
        
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/project_detail_background.webp)',
            opacity: 0.3,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 mt-30">
          
          <h2 className="text-accent text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
            {project.title}
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Image Gallery */}
            <div className="flex-1 flex flex-col items-center">
              {/* Main Image */}
              <div className="w-full max-w-lg mx-auto mb-4">
                <img
                  src={selectedImage}
                  alt="Selected Product"
                  className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/5]"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-2 sm:gap-4 overflow-x-auto w-full max-w-lg">
                {projectImages.slice(0, 3).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`View ${index + 1}`}
                    className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-lg border-2 cursor-pointer transition-transform duration-200 transform hover:scale-105 ${
                      selectedImage === img ? 'border-blue-500' : 'border-gray-400'
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div className="flex-1 flex flex-col justify-start">
              {project.description && (
                <p className="text-sm sm:text-base leading-relaxed text-gray-300 text-justify">
                  {project.description}
                </p>
              )}
            </div>
          </div>

          {/* Project Details Section */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 text-white font-medium">
              Project Details
            </h3>
            <div className="w-24 h-1 bg-orange-500 mt-2 mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {project.details && project.details.map((item, index) => {
                const IconComponent = iconMap[item.label] || FaRegBuilding;
                return (
                  <div key={index} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-gray-700 rounded-full w-12 h-12 flex justify-center items-center flex-shrink-0">
                      <IconComponent className="text-xl sm:text-2xl text-gray-300" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-sm text-gray-400 mb-1 truncate">
                        {item.label}
                      </span>
                      <span className="text-sm sm:text-base font-medium text-white truncate">
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
      <Cta />
      <Footer />
    </div>
  );
}

// "use client";
// import React, { useState } from 'react';
// import { notFound } from 'next/navigation';
// import Header from '@/app/components/Header';
// import Footer from '@/app/components/Footer';
// import Cta from '@/app/components/Cta';

// import { getProjectById } from '@/lib/MockData.js'; 

// import {
//   FaRegSmile,
//   FaRegBuilding,
//   FaMapMarkerAlt,
//   FaUsers,
//   FaRegClock,
//   FaRegCalendarAlt,
//   FaArrowLeft
// } from 'react-icons/fa';

// export default function ProjectDetailPage({ params }) {
//   const { projectId } = params;
//   const project = getProjectById(projectId);

//   if (!project) {
//     notFound();
//   }

//   const projectImages = project.images;
//   const [selectedImage, setSelectedImage] = useState(projectImages[0]);

//   const iconMap = {
//     'Client': FaRegSmile,
//     'Client Industry': FaRegBuilding,
//     'Site Area': FaMapMarkerAlt,
//     'Project Type': FaUsers,
//     'Services': FaRegSmile,
//     'Project Duration': FaRegClock,
//     'Location': FaMapMarkerAlt,
//     'Completion Date': FaRegCalendarAlt,
//   };

//   return (
//     <div>
//       <Header/>
//       <section className="border border-grayborder mt-[10px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:h-[1317px] lg:h-[1317px] xl:flex xl:flex-col flex flex-col items-center justify-center overflow-hidden bg-black">
        
//         <div
//           className="absolute inset-0 bg-cover bg-center h-full"
//           style={{
//             backgroundImage: 'url(/images/project_detail_background.webp)',
//             opacity: 0.3,
//           }}
//         ></div>
//         <div className="absolute bg-black opacity-16"></div>

//         <div className="relative overflow-hidden mx-auto mt-[75px]">
          
//           <div className='fex items-center justify-center mx-auto mt-10 md:hidden'>
//             <h2 className="text-accent text-center mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold md:mt-[18px]">
//               {project.title}
//             </h2>
//           </div>

//           <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">
//             <div className="p-6 gap-3 flex flex-row">
//               <div className='flex flex-col gap-2 md:flex md:flex-row md:gap-3'>
//                 {/* --- DESKTOP THUMBNAILS --- */}
//                 <div className="hidden md:flex md:col-span-1 md:flex-col gap-4 overflow-x-auto">
//                   {/* THE FIX IS HERE: Limit to the first 3 images */}
//                   {projectImages.slice(0, 3).map((img, index) => (
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
//                 {/* --- MOBILE THUMBNAILS --- */}
//                 <div className="flex col-span-1 md:hidden gap-4 overflow-x-auto mx-auto">
//                   {/* THE FIX IS HERE: Limit to the first 3 images */}
//                   {projectImages.slice(0, 3).map((img, index) => (
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
//             {/* Project Description */}
//             <div className="flex-1 min-w-0 flex flex-col justify-items-center align-items-center mx-auto">
//               <div className='hidden md:hidden lg:block'>
//                 <h2 className="text-accent mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold md:mt-[18px]">
//                   {project.title}
//                 </h2>
//               </div>
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
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//               {project.details && project.details.map((item, index) => {
//                 const IconComponent = iconMap[item.label] || FaRegBuilding;
//                 return (
//                   <div key={index} className="bg-gray-700 hover:bg-gray-600 transition-colors duration-200 ease-in-out rounded-lg p-4 flex items-center gap-4">
//                     <div className="bg-gray-600 rounded-full w-10 h-10 flex justify-center items-center flex-shrink-0">
//                       <IconComponent className="text-xl text-gray-200" />
//                     </div>
//                     <div className="flex flex-col min-w-0">
//                       <span className="text-xs text-gray-400 mb-0.5 whitespace-nowrap">
//                         {item.label}
//                       </span>
//                       <span className="text-sm font-medium text-gray-200 whitespace-now-hidden text-ellipsis">
//                         {item.value}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//       <Cta/>
//       <Footer/>
//     </div>
//   );
// }