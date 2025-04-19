import React from 'react';

// Import Icons (make sure you have react-icons installed)
import {
  FaRegSmile,
  FaRegBuilding,
  FaMapMarkerAlt,
  FaUsers,
  FaRegClock,
  FaRegCalendarAlt,
  FaArrowLeft
} from 'react-icons/fa';

// Import Images (adjust paths as needed)
// import mainBuildingImage from './assets/main-image.png';
// import office1Image from './images/office1.jpg';
// import office2Image from './images/office2.jpg';
// import officeConstructionImage from './images/office-construction.jpg';

const Test = () => {
  const projectDetails = [
    { icon: FaRegSmile, label: 'Client', value: 'ABC Co.,Ltd' },
    { icon: FaRegBuilding, label: 'Client Industry', value: 'Pharmaceutical Trading' },
    { icon: FaMapMarkerAlt, label: 'Site Area', value: '3000 SQM (3.5 Floor)' },
    { icon: FaUsers, label: 'Project Type', value: 'Office Renovation' },
    { icon: FaRegSmile, label: 'Services', value: 'Design, Build, Renovation' },
    { icon: FaRegClock, label: 'Project Duration', value: '3 months' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Yangon' },
    { icon: FaRegCalendarAlt, label: 'Completion Date', value: '2 January 2022' },
  ];

  return (
    // pageContainer equivalent
    <div className="bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 min-h-screen flex justify-center items-start font-sans">
      {/* card equivalent */}
      <div className="bg-gray-800 text-gray-200 rounded-xl shadow-xl p-6 sm:p-8 lg:p-10 max-w-6xl w-full relative overflow-hidden">

        {/* Top Section: Images and Description */}
        {/* topSection equivalent - stack vertically on small screens, row on medium+ */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">

          {/* imageGallery equivalent - main image above thumbnails on small screens */}
          <div className="flex flex-col-reverse md:flex-row gap-4 flex-1 min-w-0">

            {/* thumbnails equivalent - row on small screens, column on medium+ */}
            <div className="flex flex-row md:flex-col gap-2.5 md:w-24 w-full justify-center md:justify-start">
              <img src={'./assets/small-image1.png'} alt="Office Interior 1" className="object-cover rounded-lg w-16 h-12 sm:w-20 sm:h-16 md:w-full md:aspect-[4/3]" />
              <img src={'./assets/small-image2.png'} alt="Office Interior 2" className="object-cover rounded-lg w-16 h-12 sm:w-20 sm:h-16 md:w-full md:aspect-[4/3]" />
              <img src={'./assets/main-image.png'} alt="Office Under Construction" className="object-cover rounded-lg w-16 h-12 sm:w-20 sm:h-16 md:w-full md:aspect-[4/3]" />
            </div>

            {/* mainImage equivalent - full width on small, grows on medium+ */}
            {/* Note: max-h requires arbitrary values or config setup in Tailwind */}
            <img
              src={'./assets/main-image.png'}
              alt="Main Building Exterior"
              className="w-full md:flex-grow object-cover rounded-lg max-h-[250px] sm:max-h-[300px] md:max-h-[350px]"
            />
          </div>

          {/* textDescription equivalent */}
          <div className="flex-1 min-w-0">
            {/* title equivalent */}
            <h2 className="text-orange-500 mt-0 mb-4 text-xl sm:text-2xl md:text-3xl font-semibold">
              Office Renovation at ABC Co.,Ltd
            </h2>
            {/* paragraph equivalent */}
            <p className="text-sm md:text-base leading-relaxed text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        {/* Project Details Section */}
        {/* detailsSection equivalent */}
        <div className="mb-16"> {/* Added more bottom margin to account for absolute positioned button */}
          {/* detailsTitle equivalent */}
          <h3 className="text-xl md:text-2xl mb-1 text-gray-200 font-medium">
            Project Details
          </h3>
          {/* Underline for Title */}
          <div className="w-20 h-0.5 bg-orange-500 mt-2 mb-6"></div>

          {/* detailsGrid equivalent - 1 col default, 2 cols on sm+, 4 cols on lg+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projectDetails.map((item, index) => {
              const IconComponent = item.icon; // Get the icon component
              return (
                // detailItem equivalent
                <div key={index} className="bg-gray-700 hover:bg-gray-600 transition-colors duration-200 ease-in-out rounded-lg p-4 flex items-center gap-4">
                  {/* iconWrapper equivalent */}
                  <div className="bg-gray-600 rounded-full w-10 h-10 flex justify-center items-center flex-shrink-0">
                    {/* iconWrapper svg equivalent */}
                    <IconComponent className="text-xl text-gray-200" />
                  </div>
                  {/* detailText equivalent */}
                  <div className="flex flex-col min-w-0">
                    {/* detailLabel equivalent */}
                    <span className="text-xs text-gray-400 mb-0.5 whitespace-nowrap">
                      {item.label}
                    </span>
                    {/* detailValue equivalent */}
                    <span className="text-sm font-medium text-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        {/* navigation equivalent */}
        <div className="absolute bottom-4 right-5 sm:bottom-6 sm:right-8 lg:bottom-8 lg:right-10">
          {/* backButton equivalent */}
          <button className="bg-transparent border-none text-gray-400 hover:text-orange-500 transition-colors duration-200 ease-in-out cursor-pointer p-1 text-2xl md:text-3xl">
            <FaArrowLeft />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Test;