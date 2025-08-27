// "use client";

// import React, { useState } from 'react'; // Optional: For additional custom styles if needed
// import '../Projects.css';

// import MainButton from '../MainButton';

// import ProjectsCard from '../Cards/ProjectsCard';

// //next image
// import Image from 'next/image';

// //motion
// import { motion, easeInOut } from 'framer-motion';
// import Link from 'next/link';


// const projectsData = [
//   { id: 1, category: 'Offices', title: 'ABC Holdings', location: 'New York', image: '/images/project_one.webp' },
//   { id: 2, category: 'Offices', title: 'ABC Holdings', location: 'New York', image: '/images/project_two.webp' },
//   { id: 3, category: 'Offices', title: 'ABC Holdings', location: 'New York', image: '/images/project_three.webp' },
//   { id: 4, category: 'Shopping Malls', title: 'ABC Holdings', location: 'New York', image: '/images/project_four.webp' },
//   { id: 5, category: 'Shopping Malls', title: 'ABC Holdings', location: 'New York', image: '/images/project_six.webp' },
//   { id: 6, category: 'Warehouses', title: 'ABC Holdings', location: 'New York', image: '/images/project_four.webp' },
//   { id: 7, category: 'Hotels', title: 'ABC Holdings', location: 'New York', image: '/images/project_one.webp' },
//   { id: 8, category: 'Hotels', title: 'ABC Holdings', location: 'New York', image: '/images/project_three.webp' },
//   { id: 9, category: 'Offices', title: 'ABC Offices', location: 'New York', image: '/images/project_four.webp' },
// ];

// export const getProjectById= (id) => {
//     const numericId = Number(id);
//     return projectsData.find(project => project.id === numericId);
// }

// const MainProjects = () => {

//   const [selectedCategory, setSelectedCategory] = useState('Offices');
//   const [visibleProjects, setVisibleProjects] = useState(6); // Initially show 6 projects
  
//   const categories = ['Offices', 'Shopping Malls', 'Warehouses', 'Hotels'];
  
//   const filteredProjects = projectsData.filter(
//       (project) => project.category === selectedCategory
//     );
  
//   const handleShowMore = () => {
//       setVisibleProjects((prev) => prev + 3); // Show 3 more projects on click
//     };


//     // const { searchActive } = useContext(SearchContext);
//     return (
//         <section
//             id="projects" // Add an ID if you want to link back to this section
//             className="border border-grayborder mt-[10px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] md:h-[950px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black py-4"
//         >
//             {/* Background image */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center h-full"
//                 style={{
//                     backgroundImage: 'url(/images/projects.webp)', // Make sure this path is correct
//                     opacity: 0.3, // Adjust the opacity for the image to 70%
//                 }}
//             ></div>

//             {/* Black overlay with 30% opacity */}
//             <div className="absolute bg-black opacity-16"></div>

           

//       {/* Content Layout */}
//       <div className="relative z-10 flex flex-col lg:flex-row lg:justify-center lg:items-center mt-[75px] lg:mt-10 gap-6 lg:gap-10">
//         <div className="container mx-auto px-4 mt-[25px]">
//                   <div className="text-center mb-8">
//                     <h1 className="h2 text-center">projects</h1>
//                     <p className="text-gray-300 mt-2">
//                       Our project showcase our unwavering commitment to superior craftsmanship, innovative design, and a meticulous attention to detail.
//                     </p>
//                   </div>

//                   {/* Tabs Section */}
//                     {/* <div className="flex space-x-6 border-b border-gray-600 mb-6"> */}
//                     <div className="flex justify-between border-b border-gray-600 mb-6">
//                       {categories.map((category) => (
//                         <button
//                           key={category}
//                           onClick={() => {
//                             setSelectedCategory(category);
//                             setVisibleProjects(6); // Reset visible projects when category changes
//                           }}
//                           className={`pb-2 text-[15px] md:text-[22px] font-primary cursor-pointer ${
//                             selectedCategory === category
//                               ? 'text-accent border-b-2 border-accent'
//                               : 'text-gray-400'
//                           }`}
//                         >
//                           {category}
//                         </button>
//                       ))}
//                     </div>

//                     {/* Projects Grid */}
//                       <div className="grid grid-cols-1 items-center justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:w-[1312px]">
//                       {filteredProjects.slice(0, visibleProjects).map((project) => (

//                             <Link
//                             key={project.id} // Key goes on the outer element in the map
//                             href={`/projects/${project.id}`}
//                             passHref
//                             legacyBehavior={false}
//                             >
//                             {/* No key needed here */}
//                             <ProjectsCard project={project} />
//                             </Link>
//                     ))}
//                       </div>

//                       {/* Show More Button */}
//                       {visibleProjects < filteredProjects.length && (
//                         <div className="flex justify-center mt-6">
//                           <MainButton
//                             onClick={handleShowMore}
//                             className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
//                           >
//                             SHOW MORE
//                           </MainButton>
//                         </div>
//                       )}
                  
//                   <MainButton className='mx-auto my-4'>Show More!</MainButton>
                  
//         </div>
//       </div>
//         </section>
//     );
// };

// export default MainProjects;


"use client";

import React, { useState } from 'react';
import '../Projects.css';
import MainButton from '../MainButton';
import ProjectsCard from '../Cards/ProjectsCard';
import Link from 'next/link';

// You should populate this with your real project data for all categories
const projectsData = [
  { id: 1, category: 'Offices', title: 'Retro Link Co.,Ltd.', location: 'New York', image: '/images/project_one.webp' },
  { id: 2, category: 'Offices', title: 'Design Co.', location: 'New York', image: '/images/project_two.webp' },
  { id: 3, category: 'Offices', title: 'Tech Hub', location: 'New York', image: '/images/project_three.webp' },
  { id: 10, category: 'Condos & Apartments', title: 'The Grand Residence', location: 'Yangon', image: '/images/project_four.webp' },
  { id: 11, category: 'Condos & Apartments', title: 'Skyline Living', location: 'Mandalay', image: '/images/project_six.webp' },
  { id: 12, category: 'Spas & Beauty Saloons', title: 'Serenity Spa', location: 'Yangon', image: '/images/project_one.webp' },
  { id: 13, category: 'Factory', title: 'Modern Manufacturing', location: 'Bago', image: '/images/project_two.webp' },
  { id: 14, category: 'Hotel', title: 'The Oasis Hotel', location: 'Ngapali', image: '/images/project_three.webp' },
  { id: 15, category: 'Hotel', title: 'City Center Inn', location: 'Yangon', image: '/images/project_one.webp' },
  { id: 16, category: 'Offices', title: 'Corporate Towers', location: 'Yangon', image: '/images/project_four.webp' },
];

export const getProjectById = (id) => {
    const numericId = Number(id);
    return projectsData.find(project => project.id === numericId);
}

const MainProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'); // <-- CHANGE 1: Set initial state to 'All'
  const [visibleProjects, setVisibleProjects] = useState(8); // Initially show 8 projects

  const categories = [ // <-- CHANGE 2: Update the categories array
    "All",
    "Condos & Apartments",
    "Offices",
    "Spas & Beauty Saloons",
    "Factory",
    "Hotel"
  ];

  // <-- CHANGE 3: Add logic to handle the 'All' category
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 4); // Show 4 more projects on click
  };

  return (
    <section
      id="projects"
      className="border border-grayborder mt-[10px] mx-[17.5px] relative rounded-[20px] bg-black py-12"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: 'url(/images/projects.webp)', opacity: 0.3 }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-16"></div>

      {/* Content Layout */}
      <div className="relative z-10 container mx-auto px-4 mt-[75px] lg:mt-[150px]">
        <div className="text-center mb-8">
          <h1 className="h2 text-center">Projects</h1>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Our projects showcase our unwavering commitment to superior craftsmanship, innovative design, and a meticulous attention to detail.
          </p>
        </div>

        {/* Tabs Section - Now scrolls on small screens */}
        <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide justify-center border-b border-gray-600 mb-6 -mx-4 px-4">
          <div className="flex space-x-4 md:space-x-[80px]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(8); // Reset visible projects when category changes
                }}
                className={`pb-2 text-[14px] md:text-[18px] font-primary cursor-pointer transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 items-center justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} passHref>
              <ProjectsCard project={project} />
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-8">
            <MainButton
              onClick={handleShowMore}
              className="bg-accent text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
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