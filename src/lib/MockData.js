// Your project data
// export const projectsData = [
//   { 
//       id: 1, 
//       category: 'Offices', 
//       title: 'ABC Holdings', 
//       location: 'New York', 
//       images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
//       description: 'Detailed info about ABC Holdings...' 
//   },
//   { 
//       id: 2, 
//       category: 'Offices', 
//       title: 'XYZ Tower', 
//       location: 'Chicago', 
//       images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'],
//       description: 'Detailed info about XYZ Tower...' 
//   },
//   { 
//       id: 3, 
//       category: 'Offices', 
//       title: 'Corporate Hub', 
//       location: 'San Francisco', 
//       images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'],
//       description: 'Detailed info about Corporate Hub...' 
//   },
//   { 
//       id: 4, 
//       category: 'Shopping Malls', 
//       title: 'Grand Mall', 
//       location: 'Los Angeles', 
//       images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
//       description: 'Detailed info about Grand Mall...' 
//   },
//   { 
//       id: 5, 
//       category: 'Shopping Malls', 
//       title: 'City Centre', 
//       location: 'Miami', 
//       images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
//       description: 'Detailed info about City Centre...' 
//   },
//   { 
//       id: 6, 
//       category: 'Warehouses', 
//       title: 'Logistics Central', 
//       location: 'Houston', 
//       images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
//       description: 'Detailed info about Logistics Central...' 
//   },
//   { 
//       id: 7, 
//       category: 'Hotels', 
//       title: 'Ocean View Hotel', 
//       location: 'San Diego', 
//       images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
//       description: 'Detailed info about Ocean View Hotel...' 
//   },
//   { 
//       id: 8, 
//       category: 'Hotels', 
//       title: 'Mountain Resort', 
//       location: 'Denver', 
//       images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
//       description: 'Detailed info about Mountain Resort...' 
//   },
//   { 
//       id: 9, 
//       category: 'Offices', 
//       title: 'Tech Park Offices', 
//       location: 'Austin', 
//       images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
//       description: 'Detailed info about Tech Park Offices...' 
//   },
// ];

// // --- ADD THIS FUNCTION ---
// export const getProjectById = (id) => {
//   // Convert the incoming id (string from URL param) to a number for comparison
//   // Adjust this if your project IDs are actually strings
//   const numericId = Number(id);
//   if (isNaN(numericId)) {
//       return undefined; // Handle non-numeric IDs if necessary
//   }
//   return projectsData.find(project => project.id === numericId);
// };

export const projectsData = [
  { 
    id: 1, 
    category: 'Offices', 
    title: 'Retro Link Office',
    description: "A full-service renovation project for Retro Link's corporate headquarters, focusing on a modern-industrial aesthetic to foster creativity and collaboration. This comprehensive **full-service design and build renovation project** successfully transformed Retro Link's 1,000 Sqft corporate headquarters located in the bustling city of Yangon. The core objective was to move beyond conventional office design and establish a dynamic, high-energy environment that truly reflected the client's forward-thinking brand in the Technology & Communications sector. The implemented design utilizes a strong **modern-industrial aesthetic**, strategically featuring raw materials like exposed ceiling conduits, polished concrete flooring, and bespoke metalwork, thoughtfully balanced with warm, natural wood elements to prevent the space from feeling sterile. This blend was intended to actively foster creativity and enhance open collaboration. ",
    images: [
      '/images/retro_1.webp',
      '/images/retro_2.webp',
      '/images/retro_3.webp',
      '/images/retro_4.webp',
      '/images/retro_5.webp',
      '/images/retro_6.webp'
    ],
    details: [
        { label: 'Client', value: 'Retro Link Office' },
        { label: 'Client Industry', value: 'Technology & Communications' },
        { label: 'Site Area', value: '1,000 Sqft' },
        { label: 'Project Type', value: 'Design & Build' },
        { label: 'Services', value: 'Layout Plans, 3D Designs and Furniture Detailed Drawings' },
        { label: 'Project Duration', value: '5 months' },
        { label: 'Location', value: 'Yangon' },
        { label: 'Completion Date', value: '15 March 2023' },
    ]
  },
  { 
    id: 2, 
    category: 'Offices', 
    title: 'Modern Space Co.,Ltd.', 
    description: "A contemporary design for Modern Space's new office, creating a dynamic and flexible environment for a growing team. The design features open-plan workstations, private pods, and a vibrant communal kitchen. This project delivered a **dynamic, contemporary design and build solution** for Modern Space Co.,Ltd.'s new 1,200 Sqft office, perfectly tailored for their needs within the competitive Co-working Spaces industry. The central goal was to create a **flexible and scalable environment** that could comfortably accommodate their growing team and reflect a modern, professional identity. The design strategically integrates various work settings to promote both collaboration and focus. Key features include **spacious open-plan workstations** that maximize team synergy, dedicated **private soundproof pods** for confidential calls and deep work, and a **vibrant communal kitchen and lounge area** designed as a central hub for social interaction and informal meetings. This highly adaptable layout was completed on August 20, 2022, after a focused four-month duration, successfully providing Modern Space with a state-of-the-art facility ready to drive future expansion.",
    images: [
      '/images/mspace_a.webp',
      '/images/mspace_b.webp',
      '/images/mspace_c.webp'
    ],
    details: [
        { label: 'Client', value: 'Modern Space Co.,Ltd.' },
        { label: 'Client Industry', value: 'Co-working Spaces' },
        { label: 'Site Area', value: '1,200 Sqft' },
        { label: 'Project Type', value: 'Design & Build' },
        { label: 'Services', value: 'Design & Build' },
        { label: 'Project Duration', value: '4 months' },
        { label: 'Location', value: 'Yangon' },
        { label: 'Completion Date', value: '20 August 2022' },
    ]
  },
  { 
    id: 3, 
    category: 'Condos & Apartments', 
    title: 'South Okkalapa Apartment', 
    description: "A complete interior renovation of a residential apartment in South Okkalapa, transforming a classic space into a modern, comfortable, and highly functional home for a young family. This project involved a **complete interior renovation and furnishing** of a 150 SQM residential apartment located in South Okkalapa, Yangon. The primary objective was to transform a classic, dated space into a **modern, comfortable, and highly functional home** specifically tailored for a young family's dynamic lifestyle. Our services encompassed full **Interior Design and customized Furnishing**, focusing on optimizing the layout for better flow, maximizing natural light, and integrating smart storage solutions. Completed in a focused two-month duration on November 10, 2022, the result is a beautiful, contemporary residence that meets all the practical demands of family living while reflecting a warm, updated aesthetic. ",
    images: [
      '/images/SO_1.webp',
      '/images/SO_2.webp',
      '/images/SO_4.webp'
    ],
    details: [
        { label: 'Client', value: 'Private Residence' },
        { label: 'Client Industry', value: 'Residential' },
        { label: 'Site Area', value: '150 SQM' },
        { label: 'Project Type', value: 'Apartment Renovation' },
        { label: 'Services', value: 'Interior Design, Furnishing' },
        { label: 'Project Duration', value: '2 months' },
        { label: 'Location', value: 'Yangon' },
        { label: 'Completion Date', value: '10 November 2022' },
    ]
  },
  { 
    id: 11, 
    category: 'Condos & Apartments', 
    title: 'Yadanar Hninsi', 
    description: 'Luxurious interior design and build for the Yadanar Hninsi condominium complex, offering residents a blend of elegance, comfort, and modern amenities in a prestigious location. This major, year-long **luxurious interior design and build project** was executed for the prestigious Yadanar Hninsi condominium complex, spanning an impressive 10,000 SQM. Working closely with the Real Estate client, the mandate was to create a refined and captivating residential experience. We delivered a seamless blend of **elegance, comfort, and modern amenities** across all common areas, lobbies, and model units. Our comprehensive services included full-scope **Design & Build and rigorous Project Management**, ensuring every detail—from the selection of high-end finishes to the installation of bespoke fixtures—met uncompromising standards. Completed on May 05, 2023, the final result establishes the complex as a benchmark for **high-end, sophisticated living** in a sought-after location within Yangon.',
    images: [
      '/images/ydnsi_1.webp',
      '/images/ydnsi_2.webp',
      '/images/ydnsi_3.webp'
    ],
    details: [
        { label: 'Client', value: 'Yadanar Hninsi Development' },
        { label: 'Client Industry', value: 'Real Estate' },
        { label: 'Site Area', value: '10,000 SQM' },
        { label: 'Project Type', value: 'Condominium Interior' },
        { label: 'Services', value: 'Design & Build, Project Management' },
        { label: 'Project Duration', value: '12 months' },
        { label: 'Location', value: 'Yangon' },
        { label: 'Completion Date', value: '05 May 2023' },
    ]
  },
  // --- NOTE: Add details and descriptions for the remaining projects as well ---
  { 
    id: 12, 
    category: 'Spas & Beauty Saloons', 
    title: 'Spa@Thanlyin', 
    description: "Placeholder description for the Spa at Thanlyin project. This project involved the complete **design and build** for 'White (Nail & Spa)' in the Thanlyin area of Yangon, transforming a 792 Sqft space into a luxurious, tranquil wellness destination. The design focus was on creating a **serene and calming atmosphere**, utilizing a soft, contemporary palette and strategic lighting to enhance the customer experience. Our services covered all aspects of the fit-out, from layout optimization to ensure privacy and flow, to the installation of high-end fixtures for treatment rooms and manicure/pedicure stations. Through dedicated **Design & Build and Project Management** over the project's duration, we successfully delivered a premium, fully functional spa environment that reflects the brand’s commitment to relaxation and superior client service, completed on May 05, 2023.",
    images: [
      '/images/tlnspa_1.png',
      '/images/tlnspa_2.png',
      '/images/tlnspa_3.png',
    ],
    details: [
      { label: 'Client', value: 'White (Nail & Spa)' },
      { label: 'Location', value: 'Yangon (Thanlyin)' },
      { label: 'Site Area', value: '792 Sqft' },
      { label: 'Project Type', value: 'Condominium Interior' },
      { label: 'Services', value: 'Design & Build, Project Management' },
      { label: 'Project Duration', value: '12 months' },
      { label: 'Location', value: 'Yangon' },
      { label: 'Completion Date', value: '05 May 2023' },
      // ... add more details
    ]
  },
  { 
    id: 13, 
    category: 'Factory', 
    title: 'Trinity Apparels Garment Factory', 
    description: 'Placeholder description for the Modern Manufacturing project. This is a monumental industrial undertaking for Trinity Apparels, involving the comprehensive **construction and development** of a new garment factory spanning an immense **6.54 Acres** in Yangon. As an ongoing project, the scope is far-reaching, encompassing every critical phase required for a modern manufacturing facility. Our responsibilities include heavy **Infrastructure** development, core factory **Construction**, essential **MEP Work** (Mechanical, Electrical, and Plumbing), and the full **Interior Fit-out** of all administrative and production areas. Furthermore, we are providing complete **Furnishing** to ensure a high-performance, efficient, and comfortable working environment. This massive project aims to establish a state-of-the-art facility designed for high-volume, modern apparel production, demonstrating expertise across all facets of industrial build and design.',
    images: [
      '/images/trinity_1.webp',
      '/images/trinity_2.webp',
      '/images/trinity_3.webp',
    ],
    details: [
      { label: 'Client', value: 'Trinity Apparels Garment Factory' },
      { label: 'Location', value: 'Yangon' },
      { label: 'Site Area', value: '6.54 Acres' },
      { label: 'Project Type', value: 'Condominium Interior' },
      { label: 'Services', value: 'Construction, Infrastructure, MEP Work, Interior Fit-out, Furnishing' },
      // { label: 'Project Duration', value: '12 months' },
      { label: 'Location', value: 'Yangon' },
      { label: 'Completion Date', value: 'Ongoing' },
      // ... add more details
    ]
  },
  { 
    id: 14, 
    category: 'Condos & Apartments', 
    title: 'Estella by Start City (Japandi Design)', 
    description: 'Luxurious interior design and build for the Yadanar Hninsi condominium complex, offering residents a blend of elegance, comfort, and modern amenities in a prestigious location. This project entailed the comprehensive **interior design and build** of a luxurious 1,200 Sqft apartment within the prestigious Estella by Star City complex. The design strictly adhered to the **Japandi aesthetic**—a minimalist fusion of Scandinavian functionality and Japanese rustic minimalism. This approach emphasizes clean lines, natural materials (light wood, linen), and a neutral, calming color palette to create spaces that are both elegant and highly functional. Our services covered full **Design & Build and Project Management**, ensuring the highest quality of finishes and bespoke furnishings throughout the residence. Completed on May 05, 2023, the result is a serene, tranquil home environment that offers residents a blend of understated luxury, comfort, and modern sophistication in a highly sought-after location in Yangon.',
    images: [
      '/images/japandi_1.jpg',
      '/images/japandi_2.jpg',
      '/images/japandi_3.jpg',
    ],
    details: [
        { label: 'Client', value: 'Estella by Star City' },
        { label: 'Client Industry', value: 'Real Estate' },
        { label: 'Site Area', value: '1,200 Sqft' },
        { label: 'Project Type', value: 'Condominium Interior' },
        { label: 'Services', value: 'Design & Build, Project Management' },
        { label: 'Project Duration', value: '12 months' },
        { label: 'Location', value: 'Yangon' },
        { label: 'Completion Date', value: '05 May 2023' },
    ]
  },
  { 
    id: 15, 
    category: 'Condos & Apartments', 
    title: 'Estella by Start City', 
    description: "Luxurious interior design and build for the Yadanar Hninsi condominium complex, offering residents a blend of elegance, comfort, and modern amenities in a prestigious location. This project involved the comprehensive **luxury interior design and build** of a high-end 1,200 Sqft residential unit within the acclaimed Estella by Star City condominium complex. The design mandate was to create a sophisticated living space that offers residents a seamless blend of **modern elegance, ultimate comfort, and high-spec amenities**. Our services encompassed the entire **Design & Build and Project Management** scope, including space planning, material sourcing, bespoke cabinetry, and the installation of premium fixtures. Over the project's duration, we ensured every element contributed to a refined, tranquil environment. Completed on May 05, 2023, the final apartment delivers a truly prestigious living experience that meets the highest standards of contemporary residential luxury in Yangon.",
    images: [
      '/images/sophy_1.jpg',
      '/images/sophy_2.jpg',
      '/images/sophy_3.jpg',
    ],
    details: [
        { label: 'Client', value: 'Estella by Star City' },
        { label: 'Client Industry', value: 'Real Estate' },
        { label: 'Site Area', value: '1,200 Sqft' },
        { label: 'Project Type', value: 'Condominium Interior' },
        { label: 'Services', value: 'Design & Build, Project Management' },
        { label: 'Project Duration', value: '12 months' },
        { label: 'Location', value: 'Yangon' },
        { label: 'Completion Date', value: '05 May 2023' },
    ]
  },
];

/**
 * Finds a project by its ID.
 * Uses a loose equality check (==) to compare the ID from the URL (string)
 * with the ID in the data (number) without needing type conversion.
 */
export const getProjectById = (id) => {
    return projectsData.find(project => project.id == id);
}