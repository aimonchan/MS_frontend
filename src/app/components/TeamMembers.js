'use client';

import { TeamData } from '../../../public/data/MockData.js';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// A fully responsive and robust Team Member Card
const TeammemberCard = ({ image, name, position, description }) => {
  return (
    // Card is flexible with `w-full` and maintains consistent height with `h-full` and `flex`.
    <div className='border border-gray-800 bg-white/5 p-6 rounded-2xl shadow-lg w-full h-full flex flex-col text-center'>
      <img
        alt={name || "Team member"}
        className='border-2 border-gray-700 w-40 h-40 mx-auto rounded-full mb-6 object-cover'
        src={image}
      />
      
      <div className="flex flex-col flex-grow">
        {name && <h2 className='text-xl font-semibold text-accent'>{name}</h2>}
        {position && <p className='text-gray-400 mt-1'>{position}</p>}
        {description && <p className='text-gray-300 mt-4 text-sm leading-relaxed'>{description}</p>}

        {/* `mt-auto` pushes this block to the bottom, aligning social icons across cards. */}
        <div className="flex justify-center mt-auto pt-6 space-x-4">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

const TeamMembers = () => {
  return (
    // Section uses padding for space, not fixed heights.
    <section className="relative my-4 mx-2 sm:mx-4 rounded-2xl overflow-hidden bg-black border border-gray-800">
      {/* Background image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/images/aboutus.webp)' }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto py-16 px-4 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">MEET OUR TEAM MEMBERS</h1>
          <p className="text-gray-300 mt-4 text-lg">
            A passionate team dedicated to crafting personalized environments, ensuring your entire decoration and installation journey is seamless.
          </p>
        </div>

        {/* Responsive Team Members Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {TeamData.map((member, index) => (
            <TeammemberCard
              // FIX APPLIED HERE: Using 'index' as the key to resolve the React warning.
              key={index} 
              image={member.imageURL}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

// 'use client';

// import { TeamData } from '../../../public/data/MockData.js';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// // A fully responsive and robust Team Member Card
// const TeammemberCard = ({ image, name, position, description }) => {
//   return (
//     // Card is flexible with `w-full` and maintains consistent height with `h-full` and `flex`.
//     <div className='border border-gray-800 bg-white/5 p-6 rounded-2xl shadow-lg w-full h-full flex flex-col text-center'>
//       <img
//         alt={name || "Team member"}
//         className='border-2 border-gray-700 w-40 h-40 mx-auto rounded-full mb-6 object-cover'
//         src={image}
//       />
      
//       <div className="flex flex-col flex-grow">
//         {name && <h2 className='text-xl font-semibold text-accent'>{name}</h2>}
//         {position && <p className='text-gray-400 mt-1'>{position}</p>}
//         {description && <p className='text-gray-300 mt-4 text-sm leading-relaxed'>{description}</p>}

//         {/* `mt-auto` pushes this block to the bottom, aligning social icons across cards. */}
//         <div className="flex justify-center mt-auto pt-6 space-x-4">
//           <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
//             <FaFacebookF size={20} />
//           </a>
//           <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
//             <FaTwitter size={20} />
//           </a>
//           <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
//             <FaInstagram size={20} />
//           </a>
//           <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
//             <FaLinkedinIn size={20} />
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// const TeamMembers = () => {
//   return (
//     // Section uses padding for space, not fixed heights.
//     <section className="relative my-4 mx-2 sm:mx-4 rounded-2xl overflow-hidden bg-black border border-gray-800">
//       {/* Background image & Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-10"
//         style={{ backgroundImage: 'url(/images/aboutus.webp)' }}
//       ></div>
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto py-16 px-4 md:py-24">
//         <div className="text-center max-w-3xl mx-auto">
//           <h1 className="text-4xl font-bold text-white sm:text-5xl">MEET OUR TEAM MEMBERS</h1>
//           <p className="text-gray-300 mt-4 text-lg">
//             A passionate team dedicated to crafting personalized environments, ensuring your entire decoration and installation journey is seamless.
//           </p>
//         </div>

//         {/* Responsive Team Members Grid */}
//         <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
//           {TeamData.map((member) => (
//             <TeammemberCard
//               key={member.id} // Assumes your data has a unique `id` field.
//               image={member.imageURL}
//               name={member.name}
//               position={member.position}
//               description={member.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamMembers;