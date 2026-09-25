'use client';

import { blogsData } from '@/lib/BlogData.js';
import MainButton from '../MainButton.js';
import SecondMainButton from '../SecondMainButton.js';
import Link from 'next/link';

const MainBlog = () => {
  // BlogCard Component Definition
  const BlogCard = ({ id, maintitle, sections }) => {
    // Use the first section's image and description as a preview
    const previewImage = sections[0]?.image || '/images/fallback.webp'; // Fallback if no sections
    const fullDescription = sections[0]?.description || 'No description available';
    
    // Split the description and take the first 5 words
    const previewDescription = fullDescription.split(' ').slice(0, 5).join(' ') + (fullDescription.split(' ').length > 5 ? '...' : '');

    return (
      <div className="bg-white/2 backdrop-blur-lg border border-grayborder rounded-lg shadow-lg p-4 items-center w-full h-full flex flex-col">
        <div className="w-full aspect-[264/300]">
          <img
            src={previewImage}
            alt={maintitle}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold mt-4 text-accent">{maintitle}</h3>
          <p className="text-white mt-2 text-justify line-clamp-4">{previewDescription}</p>
          <SecondMainButton className="mt-4">Read More</SecondMainButton>
        </div>
      </div>
    );
  };

  return (
    <section className="border border-grayborder mt-[5px] md:mt-[10px] mx-[5px] md:mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{
          backgroundImage: 'url(/images/blog.webp)', // Ensure this path is correct
          opacity: 0.3, // 70% opacity for the image
        }}
      ></div>

      {/* Black overlay with 30% opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content Layout */}
      <div className="relative container mx-auto px-4 py-12 z-10 mt-[100px] md:mt-[120px] lg:mt-[150px]">
        <div className="text-center mb-12">
          <h1 className="h2">Blogs</h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <Link
            key={blog.id} // Key goes on the outer element in the map
            href={`/blogs/${blog.id}`}
            className="block w-full max-w-[341px] h-full"
            passHref
            legacyBehavior={false}
            >
            {/* No key needed here */}
                <BlogCard
                key={blog.id} // Use unique blog.id
                id={blog.id}
                maintitle={blog.maintitle}
                sections={blog.sections}
                />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainBlog;