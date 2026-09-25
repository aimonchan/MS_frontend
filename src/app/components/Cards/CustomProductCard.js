export default function CustomProductCard({ project }) {
    return (
      <div className="bg-white/1 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg w-full max-w-[304px] h-full border border-grayborder hover:border-accent transition duration-300 ease-in-out py-4 cursor-pointer">
        <div className="mx-5 aspect-[264/279] border border-grayborder overflow-hidden rounded-lg">
        <img
          src={project.images && project.images.length > 0 ? project.images[0] : '/default-image.jpg'}
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