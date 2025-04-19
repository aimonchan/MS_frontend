"use client";

const OURcompany = () => {

  return (
    <section className="px-2 md:px-0 md:py-0 border border-grayborder mt-[10px] mx-[17.5px] mb-4 relative rounded-[20px] bg-black overflow-hidden md:h-auto xl:h-[1111px] lg:h-[807px] flex flex-col items-center text-white h-[976px]">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: 'url(/images/aboutus.webp)', opacity: 0.3 }}
      ></div>


      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-16"></div>


      {/* Text Content */}
      <div className="mt-[50px] relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-16">
        <h1 className="h2 text-center xl:mt-[61px]">Our Company</h1>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col justify-center  items-center mt-3 lg:mt-10 gap-6 lg:gap-10">
        
        {/* Image */}
        <div 
          className="w-[363px] h-[155.57px] md:w-[1232px] md:h-[528px]  rounded-2xl bg-cover bg-center mx-auto md:mx-0"
          style={{ backgroundImage: "url(/images/our-company.webp)" }}
        ></div>

        {/* Features Section */}
        <div className='px-4'>
          <p className='text-justify description text-white md:w-[1233px] md:h-[256px]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
        </div>
      </div>
    </section>
  );
};

export default OURcompany;
