// "use client";

// import React, { useState } from 'react';
// import '../Projects.css';
// import MainButton from '../MainButton';
// import ProjectsCard from '../Cards/ProjectsCard';
// import Link from 'next/link'; 
// // import {projectsData} from '../../../../public/data/Projects'; // <-- Import the data
// import {projectsData} from '@/lib/MockData.js';

// const MainProjects = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [visibleProjects, setVisibleProjects] = useState(8);

//   const categories = [
//     "All",
//     "Condos & Apartments",
//     "Offices",
//     "Spas & Beauty Saloons",
//     "Factory",
//     "Hotel"
//   ];

//   const filteredProjects = selectedCategory === 'All'
//     ? projectsData
//     : projectsData.filter((project) => project.category === selectedCategory);

//   const handleShowMore = () => {
//     setVisibleProjects((prev) => prev + 4);
//   };

//   return (
//     <section
//       id="projects"
//       className="border border-grayborder mt-[10px] mx-[17.5px] relative rounded-[20px] bg-black py-12"
//     >
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center h-full"
//         style={{ backgroundImage: 'url(/images/projects.webp)', opacity: 0.3 }}
//       ></div>

//       {/* Black overlay */}
//       <div className="absolute inset-0 bg-black opacity-16"></div>

//       {/* Content Layout */}
//       <div className="relative z-10 container mx-auto px-4 mt-[75px] lg:mt-[150px]">
//         <div className="text-center mb-8">
//           <h1 className="h2 text-center">Projects</h1>
//           <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
//             Our projects showcase our unwavering commitment to superior craftsmanship, innovative design, and a meticulous attention to detail.
//           </p>
//         </div>

//         {/* Tabs Section - Now scrolls on small screens */}
//         <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide justify-center border-b border-gray-600 mb-6 -mx-4 px-4">
//           <div className="flex space-x-4 md:space-x-[80px]">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => {
//                   setSelectedCategory(category);
//                   setVisibleProjects(8);
//                 }}
//                 className={`pb-2 text-[14px] md:text-[18px] font-primary cursor-pointer transition-colors duration-300 ${
//                   selectedCategory === category
//                     ? 'text-accent border-b-2 border-accent'
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 items-center justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredProjects.slice(0, visibleProjects).map((project) => (
//             <Link key={project.id} href={`/projects/${project.id}`} passHref>
//               <ProjectsCard project={project} />
//             </Link>
//           ))}
//         </div>

//         {/* Show More Button */}
//         {visibleProjects < filteredProjects.length && (
//           <div className="flex justify-center mt-8">
//             <MainButton
//               onClick={handleShowMore}
//               className="bg-accent text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
//             >
//               SHOW MORE
//             </MainButton>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default MainProjects;

"use client";

import React, { useState } from 'react';
import '../Projects.css';
import MainButton from '../MainButton';
import ProjectsCard from '../Cards/ProjectsCard';
import Link from 'next/link'; 
import {projectsData} from '@/lib/MockData.js';

const MainProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(8);

  const categories = [
    "All",
    "Condos & Apartments",
    "Offices",
    "Spas & Beauty Saloons",
    "Factory",
    "Hotel"
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <section
      id="projects"
      // Using standard Tailwind spacing for better consistency
      className="relative my-4 mx-2 sm:mx-4 rounded-2xl bg-black border border-gray-800"
    >
      {/* Background image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/images/projects.webp)' }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Layout */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 mt-[75px] lg:mt-[150px]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Projects</h1>
          <p className="text-gray-300 mt-4 text-lg">
            Our projects showcase our unwavering commitment to superior craftsmanship, innovative design, and a meticulous attention to detail.
          </p>
        </div>

        {/* --- THIS IS THE NEW RESPONSIVE FILTER TAB SECTION --- */}
        <div className="mt-12 mb-8 flex justify-center flex-wrap gap-x-6 gap-y-4 border-b border-gray-700 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProjects(8); // Kept original logic to show 8 projects
              }}
              className={`pb-2 text-base md:text-lg font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} passHref>
              {/* Ensure your ProjectsCard is also responsive (flexible width/height) */}
              <ProjectsCard project={project} />
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <MainButton
              onClick={handleShowMore}
            >
              SHOW MORE
            </MainButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainProjects;