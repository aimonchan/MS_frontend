export default function TestimonialCard({image, name, location, rating, testimonial}) {
  return (
    <div>
      {/* Testimonial 1 */}
        <div className="bg-white/1 backdrop-blur-lg p-6 rounded-lg border border-orange-500 w-[400px] h-[230px] cursor-pointer">
        <div className="flex items-center mb-4">
            <img
                alt="Profile picture of Viez Robert"
                className="w-10 h-10 rounded-full mr-4"
                height="40"
                src={image}
                width="40"
            />
        <div>
            <h3 className="text-orange-500 font-bold">{name}</h3>
            <p className="text-gray-400 text-sm">{location}</p>
        </div>
        <div className="ml-auto text-orange-500 font-bold">{rating}</div>
        </div>
        <p className="text-gray-300">
       {testimonial}
        </p>
        </div>
    </div>
  )
}
