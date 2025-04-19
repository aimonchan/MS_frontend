// Your project data
export const chairsData = [
    { 
        id: 1, 
        category: 'Chairs', 
        title: 'Modern Chair 01', 
        location: 'New York', 
        images: ['/images/chair_one.jpg', '/images/chair_two.jpg', '/images/chair_three.jpg'], 
        description: 'Detailed info about ABC Holdings...' 
    },
    { 
        id: 2, 
        category: 'Chairs', 
        title: 'Modern Chair 02', 
        location: 'Chicago', 
        images: ['/images/chair_four.jpg', '/images/chair_five.jpg', '/images/chair_six.jpg'], 
        description: 'Detailed info about XYZ Tower...' 
    },
    { 
        id: 3, 
        category: 'Chairs', 
        title: 'Modern Chair 03', 
        location: 'San Francisco', 
        images: ['/images/chair_two.jpg', '/images/project_two.webp', '/images/project_three.webp'],
        description: 'Detailed info about Corporate Hub...' 
    },
    { 
        id: 4, 
        category: 'Chairs', 
        title: 'Modern Chair 04', 
        location: 'Los Angeles', 
        images: ['/images/chair_three.jpg', '/images/project_two.webp', '/images/project_three.webp'], 
        description: 'Detailed info about Grand Mall...' 
    },
    { 
        id: 5, 
        category: 'Chairs', 
        title: 'Modern Chair 05', 
        location: 'Miami', 
        images: ['/images/chair_five.jpg', '/images/project_two.webp', '/images/project_three.webp'], 
        description: 'Detailed info about City Centre...' 
    },
    { 
        id: 6, 
        category: 'Chairs', 
        title: 'Modern Chair 06', 
        location: 'Houston', 
        images: ['/images/chair_six.jpg', '/images/project_two.webp', '/images/project_three.webp'], 
        description: 'Detailed info about Logistics Central...' 
    },
    { 
        id: 7, 
        category: 'Chairs', 
        title: 'Modern Chair 07', 
        location: 'San Diego', 
        images: ['/images/chair_one.jpg', '/images/project_two.webp', '/images/project_three.webp'], 
        description: 'Detailed info about Ocean View Hotel...' 
    },
    { 
        id: 8, 
        category: 'chairs', 
        title: 'Modern Chair 08', 
        location: 'Denver', 
        images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
        description: 'Detailed info about Mountain Resort...' 
    },
    { 
        id: 9, 
        category: 'Offices', 
        title: 'TModern Chair 09', 
        location: 'Austin', 
        images: ['/images/project_one.webp', '/images/project_two.webp', '/images/project_three.webp'], 
        description: 'Detailed info about Tech Park Offices...' 
    },
  ];
  
  // --- ADD THIS FUNCTION ---
  export const getChairById = (id) => {
    // Convert the incoming id (string from URL param) to a number for comparison
    // Adjust this if your project IDs are actually strings
    const numericId = Number(id);
    if (isNaN(numericId)) {
        return undefined; // Handle non-numeric IDs if necessary
    }
    return chairsData.find(chair => chair.id === numericId);
  };