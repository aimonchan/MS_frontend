"use client";


//motion
import { motion, easeInOut } from 'framer-motion';
import Image from 'next/image';


const ServicesCard= ({ iconImage, caption, description })=> {
  return (
    <div className="bg-white/1 backdrop-blur-lg p-6 rounded-[20px] border border-[#f8951e] w-[344px] h-[865px] md:w-[1204px] md:h-[357px] flex flex-col md:flex md:flex-row gap-9">
        <div className="flex flex-col justify-center mb-4 gap-5 mx-auto">
            <div className="bg-black/20 backdrop-blur-lg p-4 w-[106px] h-[106px] rounded-[20px]">
                <Image 
                  src={iconImage} 
                  width={106}  // Adjust width and height to the actual size
                  height={106} // Adjust width and height to the actual size
                  alt={caption || 'Service Icon'}  // Provide alt text for accessibility
                  className="hover:brightness-100"
                />
            </div>
            <div>
                <h2 className="font-primary font-medium text-[24px] text-center">{caption || "Service Card"}</h2>
            </div>
        </div>
        <div className='my-auto flex flex-col justify-center justify-items-center mx-auto w-[276px] h-[580px] md:w-[811px] md:h-[203px]'>
            <p className="font-secondary text-[14px] text-white text-justify">
                {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </p>
        </div>
    </div>
  );
}

const MainOurServices = () => {

    const handleClick = () => {
        alert('Button clicked!');
      };
    // const { searchActive } = useContext(SearchContext);
    return (
        <section
            className="border border-grayborder mt-[10px] mx-[17.5px] relative top-0 left-0 right-0 rounded-[20px] lg:h-[1697px] flex flex-col items-center justify-center overflow-hidden bg-black"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center h-full"
                style={{
                    backgroundImage: 'url(/images/ourservices.jpg)', // Make sure this path is correct
                    opacity: 0.3, // Adjust the opacity for the image to 70%
                }}
            ></div>

            {/* Black overlay with 30% opacity */}
            <div className="absolute bg-black opacity-16"></div>

           

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-[100px] lg:mt-[25px] gap-6 lg:gap-10">
        <div className="container mx-auto py-12 px-4">
                  <div className="text-center mb-8">
                    <h1 className="h2 text-center xl:mt-[61px]">Our Services</h1>
                    <p className="text-gray-300 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center justify-items-center gap-8">
                    
                    <ServicesCard 
                    caption="Design" 
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,."
                    iconImage="/icons/drawing-box.svg"
                    />

                    <ServicesCard
                    caption="Build" 
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,."
                    iconImage="/icons/construction-crane.svg"
                    />

                    <ServicesCard 
                    caption="Innovation" 
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,."
                    iconImage="/icons/Renovate.svg"
                    />
                    
                  </div>
        </div>
      </div>
        </section>
    );
};

export default MainOurServices;

