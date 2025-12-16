"use client";

import MainButton from './MainButton';
import ServicesCard from './Cards/ServicesCard';
import Link from 'next/link';

const ServicesSection = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <section
            className="border border-grayborder relative my-4 mx-2 sm:mx-4 rounded-2xl overflow-hidden bg-black"
        >
            {/* Background & Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: 'url(/images/ourservices.jpg)' }}
            ></div>
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto py-16 px-4 md:py-24">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
                    <p className="text-gray-300 mt-4 text-lg">
                        We provide comprehensive, end-to-end services, ensuring a seamless and hassle-free experience.
                    </p>
                </div>

                {/* --- RESPONSIVE GRID WITH CENTERING ---
                    - 'place-items-center' will center the cards on mobile (in the single column)
                    - It also ensures content is centered within each grid cell on larger screens.
                */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    <ServicesCard
                        caption="Design & Build
                        (Turnkey Solution)"
                        description="We handle the entire process from design to completion, saving you time and hassle."
                        iconImage="/icons/drawing-box.svg"
                    />
                    <ServicesCard
                        caption="Interior Design"
                        description="We specialize in creating innovative designs that perfectly align with your unique style and requirements."
                        iconImage="/icons/construction-crane.svg"
                    />
                    <ServicesCard
                        caption="Custom-made Furniture"
                        description="We build and install high quality, custom-made furniture that perfectly fits your space."
                        iconImage="/icons/Renovate.svg"
                    />
                </div>

                {/* Centered Button Wrapper */}
                <div className="mt-16 flex justify-center">
                    <Link href="/our-services">
                        <MainButton>Show More!</MainButton>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;


