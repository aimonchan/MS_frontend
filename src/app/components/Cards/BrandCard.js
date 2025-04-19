
"use client";

//next Image
import Image from 'next/image';

export default function ActivityCard({ backgroundImage}) {
  return (
    <div>
      <Image src={backgroundImage} width={150} height={32} alt=''/>
    </div>
  );
}

