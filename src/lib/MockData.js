// Your project data
export const projectsData = [
  { 
      id: 1, 
      category: 'Offices', 
      title: 'ABC Holdings', 
      location: 'New York', 
      images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
      description: 'Detailed info about ABC Holdings...' 
  },
  { 
      id: 2, 
      category: 'Offices', 
      title: 'XYZ Tower', 
      location: 'Chicago', 
      images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'],
      description: 'Detailed info about XYZ Tower...' 
  },
  { 
      id: 3, 
      category: 'Offices', 
      title: 'Corporate Hub', 
      location: 'San Francisco', 
      images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'],
      description: 'Detailed info about Corporate Hub...' 
  },
  { 
      id: 4, 
      category: 'Shopping Malls', 
      title: 'Grand Mall', 
      location: 'Los Angeles', 
      images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
      description: 'Detailed info about Grand Mall...' 
  },
  { 
      id: 5, 
      category: 'Shopping Malls', 
      title: 'City Centre', 
      location: 'Miami', 
      images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
      description: 'Detailed info about City Centre...' 
  },
  { 
      id: 6, 
      category: 'Warehouses', 
      title: 'Logistics Central', 
      location: 'Houston', 
      images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
      description: 'Detailed info about Logistics Central...' 
  },
  { 
      id: 7, 
      category: 'Hotels', 
      title: 'Ocean View Hotel', 
      location: 'San Diego', 
      images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
      description: 'Detailed info about Ocean View Hotel...' 
  },
  { 
      id: 8, 
      category: 'Hotels', 
      title: 'Mountain Resort', 
      location: 'Denver', 
      images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
      description: 'Detailed info about Mountain Resort...' 
  },
  { 
      id: 9, 
      category: 'Offices', 
      title: 'Tech Park Offices', 
      location: 'Austin', 
      images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
      description: 'Detailed info about Tech Park Offices...' 
  },
];

// --- ADD THIS FUNCTION ---
export const getProjectById = (id) => {
  // Convert the incoming id (string from URL param) to a number for comparison
  // Adjust this if your project IDs are actually strings
  const numericId = Number(id);
  if (isNaN(numericId)) {
      return undefined; // Handle non-numeric IDs if necessary
  }
  return projectsData.find(project => project.id === numericId);
};