'use client';

import {TeamData} from '../../../public/data/MockData.js';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


{/* Team Member Card */}
const TeammemberCard = ({image, name, position, description})=>{
  return (
    <div className='border border-grayborder p-6 rounded-[24px] shadow-lg text-center w-[341px] h-[720px] md:w-[388px] md:h-[535px]'>
      <img 
      alt=""
      className='border border-grayborder w-[208px] h-[208px] mx-auto rounded-full mb-4 object-cover' 
      height='100'
      src={image}
      width='100'
      />
      {name && <h2 className='text-xl font-bold text-accent'>{name}</h2>}
        {position && <p className='text-gray-400'>{position}</p>}
        {description && <p className='text-gray-400 mt-4'>{description}</p>}

        <div className="flex justify-center mt-4 space-x-4">
              <a className="text-gray-400 hover:text-white" href="#">
                <FaFacebookF />
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <FaTwitter />
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <FaInstagram />
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <FaLinkedinIn />
              </a>
        </div>
    </div>
  )
}

const TeamMembers = () => {

 return (
    
    <section
            className="border border-grayborder mt-[20px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px]  md:h-[1542.76px] sm:h-[85px] xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black"
        >

          {/* Background image */}
      <div
                className="absolute inset-0 bg-cover bg-center h-full"
                style={{
                    backgroundImage: 'url(/images/aboutus.webp)', // Make sure this path is correct
                    opacity: 0.3, // Adjust the opacity for the image to 70%
                }}
            ></div>

            {/* Black overlay with 30% opacity */}
            <div className="absolute bg-black opacity-16"></div>
            
      
      {/* Content Layout */}
      <div className="container mx-auto py-12 z-10">
        <div className="text-center mb-12">
          <h1 className="h2">MEET OUR TEAM MEMBERS</h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo
          </p>
        </div>


        {/* Team Members Section */}
        <div className="grid grid-cols-1 items-center justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TeamData.map((member, index) => (
            <TeammemberCard
              key={index} // Ensure that `member.id` is unique
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
