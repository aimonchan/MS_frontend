// Your project data
export const blogsData = [
    {
        "id": 1,
        "category": "Decoration",
        "maintitle": "How to Make Your Room Look Luxurious",
        "sections": [
          {
            "subtitle": "Step One",
            "image": "/images/project_one.webp",
            "description": "We would like to inform you about the Thingyan Water Festival and Myanmar New Year holidays break of GMO-Z.com ACE                          During the holidays, our office will close and all customer support windows will not be available. Phone, Email, Facebook Messenger If you have service renewal or inquiries, please make sure you proceed before HOLIDAYS."
          },
          {
            "subtitle": "Step Two",
            "image": "/images/project_two.webp",
            "description": "Cleaning into the room..."
          }
        ]
      },
    {
        "id": 2,
        "category": "Construction",
        "maintitle": "5 Ideas to Decorate Your Home",
        "sections": [
          {
            "subtitle": "Step One",
            "image": "/images/project_one.webp",
            "description": "Detailed info about XYZ Tower..."
          },
          {
            "subtitle": "Step Two",
            "image": "/images/project_two.webp",
            "description": "Cleaning into the room..."
          }
        ]
      },
    {
        "id": 3,
        "category":"Fashion",
        "maintitle": "How to Make Your Room Look Luxurious",
        "sections": [
          {
            "subtitle": "Step One",
            "image": "/images/project_one.webp",
            "description": "Detailed info about XYZ Tower..."
          },
          {
            "subtitle": "Step Two",
            "image": "/images/project_two.webp",
            "description": "Cleaning into the room..."
          }
        ]
      },
    {
        "id": 4,
        "category": "Design",
        "maintitle": "How to Make Your Room Look Luxurious",
        "sections": [
          {
            "subtitle": "Step One",
            "image": "/images/project_one.webp",
            "description": "Detailed info about XYZ Tower..."
          },
          {
            "subtitle": "Step Two",
            "image": "/images/project_two.webp",
            "description": "Cleaning into the room..."
          }
        ]
    },
    {
        "id": 5,
        "category": "Technology",
        "maintitle": "How to Make Your Room Look Luxurious",
        "sections": [
          {
            "subtitle": "Step One",
            "image": "/images/project_one.webp",
            "description": "Detailed info about XYZ Tower..."
          },
          {
            "subtitle": "Step Two",
            "image": "/images/project_two.webp",
            "description": "Cleaning into the room..."
          }
        ]
    },
    {
        "id": 6,
        "category": "Motivation",
        "maintitle": "How to Make Your Room Look Luxurious",
        "sections": [
          {
            "subtitle": "Step One",
            "image": "/images/project_one.webp",
            "description": "Detailed info about XYZ Tower..."
          },
          {
            "subtitle": "Step Two",
            "image": "/images/project_two.webp",
            "description": "Cleaning into the room..."
          }
        ]
    },
  ];
  
  // --- ADD THIS FUNCTION ---
  export const getBlogById = (id) => {
    // Convert the incoming id (string from URL param) to a number for comparison
    // Adjust this if your project IDs are actually strings
    const numericId = Number(id);
    if (isNaN(numericId)) {
        return undefined; // Handle non-numeric IDs if necessary
    }
    return blogsData.find(blog => blog.id === numericId);
  };