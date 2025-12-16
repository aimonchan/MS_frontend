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
    "Factories",
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
      className="relative my-4 mx-2 sm:mx-4 rounded-2xl overflow-hidden bg-black border border-grayborder"
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