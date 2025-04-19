export default function ProjectsCard({ project }) {
    return (
      <div className="bg-white/1 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg w-[304px] h-[388px] border border-grayborder hover:border-accent transition duration-300 ease-in-out py-4 cursor-pointer">
        <div className="w-[264px] h-[279px] mx-auto border border-grayborder overflow-hidden rounded-lg">
            <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"       
            />
        </div>
        <div className="p-4">
          <h3 className="text-orange-500 font-semibold">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.location}</p>
        </div>
      </div>
    );
  }