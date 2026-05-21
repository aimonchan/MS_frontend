// "use client";

// import Image from 'next/image';

// const VacancySection = () => {
//     // ပုံ ၇ ပုံအတွက် ယာယီ image paths များ (မိမိပုံများနဲ့ ပြန်ပြောင်းထည့်ပါ)
//     const vacancyImages = [
//         "/images/vacancy-1.jpg",
//         "/images/vacancy-2.jpg",
//         "/images/vacancy-3.jpg",
//         "/images/vacancy-4.jpg",
//         "/images/vacancy-5.jpg",
//         "/images/vacancy-6.jpg",
//         "/images/vacancy-7.jpg",
//     ];

//     return (
//         <section
//             className="border border-gray-600 mt-4 mx-2 sm:mx-4 relative top-0 left-0 right-0 h-auto rounded-[20px] flex flex-col items-center justify-center overflow-hidden bg-black"
//         >
//             {/* Background image & Overlay */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center h-full"
//                 style={{
//                     backgroundImage: 'url(/images/vacancy-bg.jpg)', // နောက်ခံပုံ ပြောင်းရန်
//                     opacity: 0.3,
//                 }}
//             ></div>
//             <div className="absolute bg-black opacity-50 inset-0"></div>

//             {/* Content Layout */}
//             <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4 w-full mt-10">
//                 <div className="container mx-auto max-w-7xl">
                    
//                     {/* Header */}
//                     <div className="text-center mb-12">
//                         <h1 className="text-4xl font-bold text-white sm:text-5xl">We are Hiring!</h1>
//                         <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg">
//                             Join our dynamic team. Explore the vibrant life at our company and find the perfect role for you.
//                         </p>
//                     </div>

//                     {/* 7 Pictures Flex Layout (Maintains 4:5 Aspect Ratio & Centers the bottom row) */}
//                     <div className="flex flex-wrap justify-center gap-6 w-full">
//                         {vacancyImages.map((src, index) => (
//                             <div
//                                 key={index}
//                                 // Mobile မှာ 1 ပုံ (w-full), Tablet မှာ 2 ပုံ, Desktop မှာ 4 ပုံ ပေါ်စေရန် width ကို တွက်ချက်ထားခြင်းဖြစ်သည်
//                                 className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] aspect-[4/5] rounded-[20px] overflow-hidden border border-[#f8951e]/60 hover:border-[#f8951e] bg-white/5 backdrop-blur-lg group"
//                             >
//                                 <Image
//                                     src={src}
//                                     alt={`Vacancy ${index + 1}`}
//                                     fill
//                                     // ပုံထဲမှာ စာသားတွေပါပြီး လုံးဝမပြတ်စေချင်ရင် object-cover နေရာမှာ object-contain ကို ပြောင်းသုံးနိုင်ပါတယ်
//                                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                                 />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Action Button */}
//                     <div className="mt-12 flex justify-center">
//                         <button 
//                             className="px-8 py-3 bg-[#f8951e] text-black font-semibold rounded-full hover:bg-orange-600 transition-colors"
//                         >
//                             Apply Now
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default VacancySection;
"use client";

import { useState } from 'react';
import Image from 'next/image';

const VacancySection = () => {
    // Preview အတွက် လက်ရှိရွေးချယ်ထားသော ပုံကို မှတ်ထားမည့် State
    const [selectedImage, setSelectedImage] = useState(null);

    const vacancyImages = [
        "/images/vacancy-1.jpg",
        "/images/vacancy-2.jpg",
        "/images/vacancy-3.jpg",
        "/images/vacancy-4.jpg",
        "/images/vacancy-5.jpg",
        "/images/vacancy-6.jpg",
        "/images/vacancy-7.jpg",
    ];

    // Modal ပိတ်ရန် Function
    const closeModal = () => setSelectedImage(null);

    return (
        <>
            <section
                className="border border-grayborder mt-4 mx-2 sm:mx-4 relative top-0 left-0 right-0 h-auto rounded-[20px] flex flex-col items-center justify-center overflow-hidden bg-black"
            >
                {/* Background image & Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center h-full"
                    style={{
                        backgroundImage: 'url(/images/vacancy-bg.jpg)',
                        opacity: 0.3,
                    }}
                ></div>
                <div className="absolute bg-black opacity-50 inset-0"></div>

                {/* Content Layout */}
                <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4 w-full mt-10">
                    <div className="container mx-auto max-w-7xl">
                        
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-white sm:text-5xl">We are Hiring!</h1>
                            <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg">
                                Join our dynamic team. Explore the vibrant life at our company and find the perfect role for you.
                            </p>
                        </div>

                        {/* Pictures Flex Layout */}
                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {vacancyImages.map((src, index) => (
                                <div
                                    key={index}
                                    // နှိပ်လို့ရကြောင်းသိစေရန် cursor-pointer ထည့်ထားပါသည်
                                    className="cursor-pointer relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] aspect-[4/5] rounded-[20px] overflow-hidden border border-[#f8951e]/60 hover:border-[#f8951e] bg-white/5 backdrop-blur-lg group"
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <Image
                                        src={src}
                                        alt={`Vacancy ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    
                                    {/* Hover လုပ်ချိန်မှာ Click to view ဆိုတာလေးပေါ်လာစေရန် (Optional) */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <span className="text-white bg-[#f8951e] px-4 py-2 rounded-full text-sm font-medium">View Image</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Button */}
                        <div className="mt-12 flex justify-center">
                            {/* <button href="/home/#cta"
                                className="cursor-pointer px-8 py-3 bg-[#f8951e] text-black font-semibold rounded-full hover:bg-orange-600 transition-colors"
                            >
                                Apply Now
                            </button> */}
                        </div>

                    </div>
                </div>
            </section>

            {/* Full-Screen Image Lightbox / Modal */}
            {selectedImage && (
                <div 
                    // Modal နောက်ခံ (အမည်းရောင် Blur လေးဖြင့်)
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-10"
                    onClick={closeModal} // အပြင်ဘက်ကိုနှိပ်ရင် ပိတ်မည်
                >
                    {/* Close Button */}
                    <button 
                        className="absolute top-6 right-6 text-white bg-black/50 hover:bg-[#f8951e] rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors z-50"
                        onClick={closeModal}
                    >
                        ✕
                    </button>

                    {/* Preview Image Container */}
                    <div 
                        className="relative w-full h-full max-w-5xl" 
                        onClick={(e) => e.stopPropagation()} // ပုံပေါ်ကိုနှိပ်မိရင် မပိတ်သွားစေရန်
                    >
                        <Image
                            src={selectedImage}
                            alt="Full screen preview"
                            fill
                            // ပုံမပြတ်စေရန် object-contain ကို အသုံးပြုထားပါသည်
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default VacancySection;