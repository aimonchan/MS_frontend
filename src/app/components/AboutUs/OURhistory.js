"use client";

const OURhistory = () => {

  return (
    <section id="history" className="px-2 md:px-0 md:py-0 border border-grayborder mt-[10px] mx-[17.5px] mb-4 relative rounded-[20px] bg-black overflow-hidden xl:h-[650px] flex flex-col items-center text-white h-[976px]">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{ backgroundImage: 'url(/images/aboutus.webp)', opacity: 0.3 }}
      ></div>


      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-16"></div>


      {/* Text Content */}
      <div className="mt-[50px] relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-16">
        <h1 className="h2 text-center xl:mt-[61px]">Our History</h1>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col justify-center  items-center mt-3 lg:mt-10 gap-6 lg:gap-10">        

        {/* Features Section */}
        <div className='px-4'>
          <p className='text-justify description text-white md:w-[1233px] md:h-[256px]'>
          Modern Space Furnishing and Decoration Co.,Ltd. was proudly established in 2019 with a vision to redefine the standards of interior design and furnishing across the region. The founders recognized a critical need in the market for a reliable partner that could seamlessly integrate high-quality design with efficient construction and fit-out execution. Our journey began with a core focus on Interior Design, cultivating an early reputation for creating innovative and beautiful concepts tailored precisely to each client's unique requirements and aesthetic goals.

Driven by a commitment to becoming a true One-Stop Solution, we quickly expanded our capabilities to encompass Design & Build (Turnkey Solutions). This strategic move allowed us to manage the entire project lifecycle—from initial conceptual sketches through to the final installation—significantly reducing hassle, minimizing risks, and saving valuable time for our clients. Parallel to this, we invested heavily in our fabrication capacity to launch our high-end Custom Furniture service, ensuring bespoke quality pieces that guarantee a perfect fit and exceptional durability in every space we touch.



          <br/>

          By focusing relentlessly on Quality & Punctuality, we successfully built deep trust across varied industries. Our portfolio rapidly grew beyond typical projects, enabling us to confidently serve All Sectors, including demanding Residential, large-scale Commercial, specialized Hospitality & Institutional, and complex Industrial environments. Today, Modern Space stands as a resilient market leader, grounded in its founding principles while continuously adapting to new material technologies and design trends. Our enduring dedication is cemented by our promise of reliable Post-Handover Support, confirming that our partnership with every client is designed to last long after project completion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OURhistory;
