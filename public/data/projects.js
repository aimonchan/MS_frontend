// export const projectsData = [
//   { id: 1, category: 'Offices', title: 'Retro Link Co.,Ltd.', location: 'Yangon', image: '/images/retro_1.webp', image2: '/images/retro_2.webp', image3: '/images/retro_3.webp', image4: 'retro_4.webp', image5: 'retro_5.webp', image6: 'retro_6.webp' },
//   { id: 2, category: 'Offices', title: 'Modern Space Co.,Ltd.', location: 'Yangon', image: '/images/mspace_a.webp', image2: '/images/mspace_b.webp', image3: '/images/mspace_c.webp' },
//   { id: 3, category: 'Offices', title: 'Tech Hub', location: 'New York', image: '/images/project_three.webp' },
//   { id: 4, category: 'Condos & Apartments', title: 'South Okkalapa Apartment', location: 'Yangon', image: '/images/SO_1.webp', image2: '/images/SO_2.webp', image3: '/images/SO_3.webp' },
//   { id: 11, category: 'Condos & Apartments', title: 'Yadanar Hninsi', location: 'Yangon', image: '/images/ydnsi_1.webp', image2: '/images/ydnsi_2.webp', image3: '/images/ydnsi_3.webp' },
//   { id: 12, category: 'Spas & Beauty Saloons', title: 'Spa@Thanlyin', location: 'Yangon', image: '/images/project_one.webp' },
//   { id: 13, category: 'Factory', title: 'Modern Manufacturing', location: 'Bago', image: '/images/project_two.webp' },
//   { id: 14, category: 'Hotel', title: 'The Oasis Hotel', location: 'Ngapali', image: '/images/project_three.webp' },
//   { id: 15, category: 'Hotel', title: 'City Center Inn', location: 'Yangon', image: '/images/project_one.webp' },
//   { id: 16, category: 'Offices', title: 'Corporate Towers', location: 'Yangon', image: '/images/project_four.webp' },
// ];

// export const getProjectById = (id) => {
//     const numericId = Number(id);
//     return projectsData.find(project => project.id === numericId);
// }

export const projectsData = [
  { 
    id: 1, 
    category: 'Offices', 
    title: 'Retro Link Office',
    description: "A full-service renovation project for Retro Link's corporate headquarters, focusing on a modern-industrial aesthetic to foster creativity and collaboration. The project involved a complete overhaul of the workspace, meeting rooms, and common areas.",
    images: [
      '/images/retro_1.webp',
      '/images/retro_2.webp',
      '/images/retro_3.webp',
      '/images/retro_4.webp',
      '/images/retro_5.webp',
      '/images/retro_6.webp'
    ],
    details: [
        { label: 'Client', value: 'Retro Link Co.,Ltd.' },
        { label: 'Client Industry', value: 'Technology & Communications' },
        { label: 'Site Area', value: '1,000 Sqft' },
        { label: 'Project Type', value: 'Design & Build' },
        { label: 'Services', value: 'Layout Plans, 3D Designs, Furniture Detailed Drawings' },
        { label: 'Project Duration', value: '5 months' },
        { label: 'Location', value: 'Yangon' },
        { label: 'Completion Date', value: '15 March 2023' },
    ]
  },
  { 
    id: 2, 
    category: 'Offices', 
    title: 'Modern Space Co.,Ltd.', 
    description: "A contemporary design for Modern Space's new office, creating a dynamic and flexible environment for a growing team. The design features open-plan workstations, private pods, and a vibrant communal kitchen.",
    images: [
      '/images/mspace_a.webp',
      '/images/mspace_b.webp',
      '/images/mspace_c.webp'
    ],
    details: [
        { label: 'Client', value: 'Modern Space Co.,Ltd.' },
        { label: 'Client Industry', value: 'Co-working Spaces' },
        { label: 'Site Area', value: '2000 SQM' },
        { label: 'Project Type', value: 'Commercial Fit-Out' },
        { label: 'Services', value: 'Design & Build' },
        { label: 'Project Duration', value: '4 months' },
        { label: 'Location', value: 'Yangon' },
        { label: 'Completion Date', value: '20 August 2022' },
    ]
  },
  { 
    id: 3, 
    category: 'Offices', 
    title: 'Tech Hub', 
    description: "An innovative workspace designed for a leading technology firm, featuring state-of-the-art facilities, collaborative zones, and a minimalist design that reflects the company's forward-thinking culture.",
    images: [
      '/images/project_three.webp'
    ],
    details: [
        { label: 'Client', value: 'Innovate Solutions Inc.' },
        { label: 'Client Industry', value: 'Software Development' },
        { label: 'Site Area', value: '5000 SQM' },
        { label: 'Project Type', value: 'New Office Construction' },
        { label: 'Services', value: 'Architectural Design, Construction' },
        { label: 'Project Duration', value: '8 months' },
        { label: 'Location', value: 'New York' },
        { label: 'Completion Date', value: '01 June 2023' },
    ]
  },
  { 
    id: 4, 
    category: 'Condos & Apartments', 
    title: 'South Okkalapa Apartment', 
    description: 'A complete interior renovation of a residential apartment in South Okkalapa, transforming a classic space into a modern, comfortable, and highly functional home for a young family.',
    images: [
      '/images/SO_1.webp',
      '/images/SO_2.webp',
      '/images/SO_3.webp'
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
    description: 'Luxurious interior design and build for the Yadanar Hninsi condominium complex, offering residents a blend of elegance, comfort, and modern amenities in a prestigious location.',
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
    description: 'Placeholder description for the Spa at Thanlyin project.',
    images: [
      '/images/project_one.webp'
    ],
    details: [
      { label: 'Client', value: 'Serenity Spas' },
      { label: 'Location', value: 'Yangon' },
      // ... add more details
    ]
  },
  { 
    id: 13, 
    category: 'Factory', 
    title: 'Modern Manufacturing', 
    description: 'Placeholder description for the Modern Manufacturing project.',
    images: [
      '/images/project_two.webp'
    ],
    details: [
      { label: 'Client', value: 'Global Manufacturing Ltd.' },
      { label: 'Location', value: 'Bago' },
      // ... add more details
    ]
  },
  { 
    id: 14, 
    category: 'Hotel', 
    title: 'The Oasis Hotel', 
    description: 'Placeholder description for The Oasis Hotel project.',
    images: [
      '/images/project_three.webp'
    ],
    details: [
      { label: 'Client', value: 'Oasis Hospitality Group' },
      { label: 'Location', value: 'Ngapali' },
      // ... add more details
    ]
  },
  { 
    id: 15, 
    category: 'Hotel', 
    title: 'City Center Inn', 
    description: 'Placeholder description for the City Center Inn project.',
    images: [
      '/images/project_one.webp'
    ],
    details: [
      { label: 'Client', value: 'Urban Stays' },
      { label: 'Location', value: 'Yangon' },
      // ... add more details
    ]
  },
  { 
    id: 16, 
    category: 'Offices', 
    title: 'Corporate Towers', 
    description: 'Placeholder description for the Corporate Towers project.',
    images: [
      '/images/project_four.webp'
    ],
    details: [
      { label: 'Client', value: 'Prestige Properties' },
      { label: 'Location', value: 'Yangon' },
      // ... add more details
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