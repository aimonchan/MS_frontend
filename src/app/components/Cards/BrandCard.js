
// "use client";

// //next Image
// import Image from 'next/image';

// export default function ActivityCard({ backgroundImage}) {
//   return (
//     <div>
//       <Image src={backgroundImage} width={150} height={32} alt=''/>
//     </div>
//   );
// }


// components/Cards/BrandCard.js

"use client";

import Image from 'next/image';

// I'm renaming the component to BrandCard to match your MarqueeSlider
// and using more descriptive props: `logoSrc` and `altText`.
export default function BrandCard({ logoSrc, altText = "Brand Logo" }) {
  return (
    // 1. THE CONTAINER (THE "FRAME")
    // This div creates a consistent box for every logo.
    // Let's make it 140px wide and 70px tall. You can change these values.
    // It needs `relative` positioning for the Next.js Image `fill` prop.
    // The other classes add a white background, padding, and rounded corners for a nice look.
    <div className="relative w-48 h-[93px] flex items-center justify-center rounded-lg">

      {/* 2. THE IMAGE */}
      <Image
        src={logoSrc}
        alt={altText}
        fill // This is the key! It tells the image to fill the parent container.
        // `object-contain` ensures the image scales to fit inside the container
        // while maintaining its aspect ratio. It will never be stretched or squashed.
        className="object-contain"
      />
    </div>
  );
}