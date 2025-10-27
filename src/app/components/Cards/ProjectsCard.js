// export default function ProjectsCard({ project }) {
//     return (
//       <div className="bg-white/1 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg w-[304px] h-[388px] border border-grayborder hover:border-accent transition duration-300 ease-in-out py-4 cursor-pointer">
//         <div className="w-[264px] h-[279px] mx-auto border border-grayborder overflow-hidden rounded-lg">
//             <img
//             src={project.image}
//             alt={project.title}
//             className="object-cover w-full h-full"       
//             />
//         </div>
//         <div className="p-4">
//           <h3 className="text-orange-500 font-semibold">{project.title}</h3>
//           <p className="text-gray-400 text-sm">{project.location}</p>
//         </div>
//       </div>
//     );
//   }
// This is the complete, corrected code for your ProjectsCard component.

// This is your original component with the one required fix.

export default function ProjectsCard({ project }) {

    // --- THIS IS THE ONLY CHANGE ---
    // Get the cover image by taking the FIRST item from the `images` array.
    // This allows your card to work with your new data structure.
    const coverImage = project.images && project.images.length > 0
      ? project.images[0]
      : '/images/placeholder.webp'; // A fallback image is good practice

    return (
      // Your original styling is kept exactly as it was.
      <div className="bg-white/1 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg w-[304px] h-[388px] border border-grayborder hover:border-accent transition duration-300 ease-in-out py-4 cursor-pointer">
        <div className="w-[264px] h-[279px] mx-auto border border-grayborder overflow-hidden rounded-lg">
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
}