"use client";

import React, { useState } from 'react'; // Optional: For additional custom styles if needed
import '../Projects.css';

import MainButton from '../MainButton';

import ProjectsCard from '../Cards/ProjectsCard';

//next image
import Image from 'next/image';

//motion
import { motion, easeInOut } from 'framer-motion';
import Link from 'next/link';


const projectsData = [
  { id: 1, category: 'Offices', title: 'ABC Holdings', location: 'New York', image: '/images/project_one.webp' },
  { id: 2, category: 'Offices', title: 'ABC Holdings', location: 'New York', image: '/images/project_two.webp' },
  { id: 3, category: 'Offices', title: 'ABC Holdings', location: 'New York', image: '/images/project_three.webp' },
  { id: 4, category: 'Shopping Malls', title: 'ABC Holdings', location: 'New York', image: '/images/project_four.webp' },
  { id: 5, category: 'Shopping Malls', title: 'ABC Holdings', location: 'New York', image: '/images/project_six.webp' },
  { id: 6, category: 'Warehouses', title: 'ABC Holdings', location: 'New York', image: '/images/project_four.webp' },
  { id: 7, category: 'Hotels', title: 'ABC Holdings', location: 'New York', image: '/images/project_one.webp' },
  { id: 8, category: 'Hotels', title: 'ABC Holdings', location: 'New York', image: '/images/project_three.webp' },
  { id: 9, category: 'Offices', title: 'ABC Offices', location: 'New York', image: '/images/project_four.webp' },
];

export const getProjectById= (id) => {
    const numericId = Number(id);
    return projectsData.find(project => project.id === numericId);
}

const MainProjects = () => {

  const [selectedCategory, setSelectedCategory] = useState('Offices');
  const [visibleProjects, setVisibleProjects] = useState(6); // Initially show 6 projects
  
  const categories = ['Offices', 'Shopping Malls', 'Warehouses', 'Hotels'];
  
  const filteredProjects = projectsData.filter(
      (project) => project.category === selectedCategory
    );
  
  const handleShowMore = () => {
      setVisibleProjects((prev) => prev + 3); // Show 3 more projects on click
    };


    // const { searchActive } = useContext(SearchContext);
    return (
        <section
            id="projects" // Add an ID if you want to link back to this section
            className="border border-grayborder mt-[10px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] md:h-[950px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black py-4"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center h-full"
                style={{
                    backgroundImage: 'url(/images/projects.webp)', // Make sure this path is correct
                    opacity: 0.3, // Adjust the opacity for the image to 70%
                }}
            ></div>

            {/* Black overlay with 30% opacity */}
            <div className="absolute bg-black opacity-16"></div>

           

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-center lg:items-center mt-[75px] lg:mt-10 gap-6 lg:gap-10">
        <div className="container mx-auto px-4 mt-[25px]">
                  <div className="text-center mb-8">
                    <h1 className="h2 text-center">projects</h1>
                    <p className="text-gray-300 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et
                    </p>
                  </div>

                  {/* Tabs Section */}
                    {/* <div className="flex space-x-6 border-b border-gray-600 mb-6"> */}
                    <div className="flex justify-between border-b border-gray-600 mb-6">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setVisibleProjects(6); // Reset visible projects when category changes
                          }}
                          className={`pb-2 text-[15px] md:text-[22px] font-primary cursor-pointer ${
                            selectedCategory === category
                              ? 'text-accent border-b-2 border-accent'
                              : 'text-gray-400'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    {/* Projects Grid */}
                      <div className="grid grid-cols-1 items-center justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:w-[1312px]">
                      {filteredProjects.slice(0, visibleProjects).map((project) => (

                            <Link
                            key={project.id} // Key goes on the outer element in the map
                            href={`/projects/${project.id}`}
                            passHref
                            legacyBehavior={false}
                            >
                            {/* No key needed here */}
                            <ProjectsCard project={project} />
                            </Link>
                    ))}
                      </div>

                      {/* Show More Button */}
                      {visibleProjects < filteredProjects.length && (
                        <div className="flex justify-center mt-6">
                          <MainButton
                            onClick={handleShowMore}
                            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
                          >
                            SHOW MORE
                          </MainButton>
                        </div>
                      )}
                  
                  <MainButton className='mx-auto my-4'>Show More!</MainButton>
                  
        </div>
      </div>
        </section>
    );
};

export default MainProjects;

