// "use client";
// import React, { useState } from 'react';
// import { notFound } from 'next/navigation';
// import Header from '@/app/components/Header';
// import Footer from '@/app/components/Footer';
// import Cta from '@/app/components/Cta';
// import Link from 'next/link';
// //import chairsData
// import { chairsData } from '@/lib/ChairData';

// // Import the function to get project data
// import { getChairById } from '@/lib/ChairData'; // Adjust this path based on your file structure!

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
//   const { chairId } = params;

//   // Find the specific project using the ID from the params
//   const chair = getChairById(chairId);

//   // If no project is found for that ID, trigger the 404 page
//   if (!chair) {
//     notFound();
//   }

//   // Initialize projectImages after ensuring project is found
//   const projectImages = chair.images;

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

//   const [selectedCategory, setSelectedCategory] = useState('Chairs');
//     const [visibleProjects, setVisibleProjects] = useState(6); // Initially show 6 projects
    
//     const categories = ['Chairs', 'Cabinet', 'TV Cabinet', 'Kitchen Cabinet'];
    
//     const filteredProjects = chairsData.filter(
//         (chair) => chair.category === selectedCategory
//       );
    
//     const handleShowMore = () => {
//         setVisibleProjects((prev) => prev + 3); // Show 3 more projects on click
//       };

//   return (
//     <div>
//       <Header/>
//       <section className="border border-grayborder mt-[10px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:h-[1317px] lg:h-[1317px] md:h-[140px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black">
        
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
//         <div className="relative overflow-hidden mx-auto">
          
//           {/* Mobile Title Description*/}
//           <div className='fex items-center justify-center mx-auto mt-10 md:hidden'>
//             <h2 className="text-accent text-center mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold md:mt-[18px]">
//               {chair.title}
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
//               <div className='hidden md:block'>
//                 <h2 className="text-accent mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold md:mt-[18px]">
//                   {chair.title}
//                 </h2>
//               </div>
//               {/* paragraph equivalent */}
//               {chair.description && (
//                 <p className="text-sm md:text-base leading-relaxed text-white text-justify w-[302px] h-[544px] md:w-[563px] md:h-[374px] mx-auto">
//                   {chair.description}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Project Details Section */}
//           <div className="mb-16 mx-auto px-5 md:px-0">
//             <h3 className="text-xl md:text-2xl mb-1 text-gray-200 font-medium text-center">
//               YOU MIGHT ALSO LIKE
//             </h3>

//             {/* Projects Grid */}
//             <div className="grid grid-cols-1 items-center justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:w-[1312px]">
//                       {filteredProjects.slice(0, visibleProjects).map((chair) => (

//                             <Link
//                             key={chair.id} // Key goes on the outer element in the map
//                             href={`/custom-creations/${chair.id}`}
//                             passHref
//                             legacyBehavior={false}
//                             >
//                             {/* No key needed here */}
//                             <CustomProductCard project={chair} />
//                             </Link>
//                         ))}
//               </div>
//           </div>
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
import Link from 'next/link';
import { chairsData, getChairById } from '@/lib/ChairData';
import {
  FaRegSmile,
  FaRegBuilding,
  FaMapMarkerAlt,
  FaUsers,
  FaRegClock,
  FaRegCalendarAlt,
} from 'react-icons/fa';
import CustomProductCard from '@/app/components/Cards/CustomProductCard';

export default function ProjectDetailPage({ params }) {
  const { chairId } = params;
  const chair = getChairById(chairId);
  const [selectedImage, setSelectedImage] = useState(chair?.images[0] || '/default-image.jpg');
  const [visibleProjects] = useState(4); // Set to 4 and no setter needed

  if (!chair) {
    notFound();
  }

  const projectImages = chair.images;
  const relatedProjects = chairsData.filter((item) => item.id !== chair.id);

  const projectDetails = [
    { icon: FaRegSmile, label: 'Client', value: 'ABC Co.,Ltd' },
    { icon: FaRegBuilding, label: 'Client Industry', value: 'Pharmaceutical Trading' },
    { icon: FaMapMarkerAlt, label: 'Site Area', value: '3000 SQM (3.5 Floor)' },
    { icon: FaUsers, label: 'Project Type', value: 'Office Renovation' },
    { icon: FaRegSmile, label: 'Services', value: 'Design, Build, Renovation' },
    { icon: FaRegClock, label: 'Project Duration', value: '3 months' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Yangon' },
    { icon: FaRegCalendarAlt, label: 'Completion Date', value: '2 January 2022' },
  ];

  return (
    <div>
      <Header />
      <section className="border border-grayborder mt-[10px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:flex xl:flex-col items-center justify-center bg-black">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center h-full rounded-[20px]"
          style={{ backgroundImage: 'url(/images/project_detail_background.webp)', opacity: 0.3 }}
        ></div>
        {/* Black Overlay */}
        <div className="absolute bg-black opacity-16"></div>

        <div className="relative overflow-hidden mx-auto">
          <div className="flex items-center justify-center mx-auto mt-10 md:hidden">
            <h2 className="text-accent text-center mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold">
              {chair.title}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10 p-6 mt-[150px]">
              
              {/* Image Panel */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="hidden md:flex md:flex-col gap-4 overflow-x-auto">
                  {projectImages.map((img, index) => (
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
                <div>
                  <img
                    src={selectedImage}
                    alt="Selected Product"
                    className="rounded-xl shadow-lg w-[437px] h-[530px] object-cover"
                  />
                </div>
                <div className="flex md:hidden gap-4 overflow-x-auto mx-auto">
                  {projectImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`View ${index + 1}`}
                      className={`w-[111px] h-[106px] object-cover rounded-xl border-2 cursor-pointer ${
                        selectedImage === img ? 'border-blue-500' : 'border-gray-300'
                      }`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              </div>

              {/* Chair Descirption */}
              <div className="flex-1 min-w-0 flex flex-col justify-items-center mx-auto">
                <div className="hidden md:block">
                  <h2 className="text-accent mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold md:mt-[18px]">
                    {chair.title}
                  </h2>
                </div>
                {chair.description && (
                  <p className="text-sm md:text-base leading-relaxed text-white text-justify w-[302px] h-[544px] md:w-[563px] md:h-[374px] mx-auto">
                    {chair.description}
                  </p>
                )}
              </div>

          </div>
            

          

          <div className="mb-16 mx-auto px-5 md:px-0">
            <h3 className="text-xl md:text-2xl mb-1 text-gray-200 font-medium text-center">
              YOU MIGHT ALSO LIKE
            </h3>
            <div className="grid grid-cols-1 items-center justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:w-[1312px]">
              {relatedProjects.slice(0, visibleProjects).map((relatedChair) => (
                <Link key={relatedChair.id} href={`/custom-creations/${relatedChair.id}`} passHref>
                  <CustomProductCard project={relatedChair} />
                </Link>
              ))}
            </div>
           
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </div>
  );
}
