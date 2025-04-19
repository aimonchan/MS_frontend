import Image from 'next/image';

export default function ServicesCard({ iconImage, caption, description }) {
  return (
    <div className="bg-white/1 backdrop-blur-lg p-6 rounded-[20px] border border-[#f8951e] w-[344px] h-[357px]">
        <div className="flex justify-center mb-4">
            <div className="bg-black/20 backdrop-blur-lg p-4 w-[106px] h-[106px] rounded-[20px]">
                <Image 
                  src={iconImage} 
                  width={106}  // Adjust width and height to the actual size
                  height={106} // Adjust width and height to the actual size
                  alt={caption || 'Service Icon'}  // Provide alt text for accessibility
                  className="hover:brightness-100"
                />
            </div>
        </div>
        <h2 className="font-primary font-medium text-[24px] text-center">{caption || "Service Card"}</h2>
        <p className="font-secondary text-[14px] text-white">
            {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
    </div>
  );
}
