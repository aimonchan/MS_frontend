
import Link from 'next/link';

// This is the complete, corrected code for your ProjectsCard component.

// This is your original component with the one required fix.

export default function ProjectsCard({ project, href }) {

    // --- THIS IS THE ONLY CHANGE ---
    // Get the cover image by taking the FIRST item from the `images` array.
    // This allows your card to work with your new data structure.
    const coverImage = project.images && project.images.length > 0
      ? project.images[0]
      : '/images/placeholder.webp'; // A fallback image is good practice

    const cardContent = (
      <div className="bg-white/1 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg w-full max-w-[304px] h-full border border-grayborder hover:border-accent transition duration-300 ease-in-out py-4 cursor-pointer">
        <div className="mx-5 aspect-[264/279] border border-grayborder overflow-hidden rounded-lg">
            <img
            src={coverImage} // <-- Use the corrected `coverImage` variable here
            alt={project.title}
            className="object-cover w-full h-full"       
            />
        </div>
        <div className="p-4">
          <h3 className="text-orange-500 font-semibold">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.location}</p>
        </div>
      </div>
    );

    // If an href is provided, wrap the card in a Next.js Link so the whole card is clickable.
    return href ? (
      <Link href={href} className="block w-full max-w-[304px] h-full">{cardContent}</Link>
    ) : cardContent;
}