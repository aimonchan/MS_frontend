'use client';

import Header from '@/app/components/Header';
import Cta from '@/app/components/Cta';
import Footer from '@/app/components/Footer';
import { getNewsById } from '@/lib/NewsData.js';
import { notFound } from 'next/navigation'; // Import for 404 handling in Next.js

export default function newsDetailPage({ params }) {
  const { newsId } = params;
  const news = getNewsById(newsId);

  // If news not found, trigger Next.js 404
  if (!news) {
    notFound();
  }

  // Extract sections from news (assuming your data matches the earlier structure)
  const { maintitle, category, sections } = news;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main news Section */}
      <section
        id="news-detail"
        className="border border-gray-600 mt-[10px] mx-[17.5px] relative rounded-[20px] h-auto xl:flex xl:flex-col items-center justify-center overflow-hidden bg-black py-8"
        style={{
          background: 'linear-gradient(-33deg, #050B20, #171717, #050B20)',
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* news Content */}
        <div className="relative z-10 container md:w-[800px] mt-[150px] mb-12 h-auto">

        {/* Category Badge */}
        <div className="bg-gray-500 text-white text-[14px] font-secondary rounded-md w-[99px] h-[32px] p-1 md:p-1 mb-7 ml-2">
            <h1 className='text-center'>{category}</h1>
        </div>

          {/* news Header */}
          <div className="mb-12 px-2 md:px-0">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{maintitle}</h1>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-6">
                {/* Image */}
                <div className="w-[368px] h-[246px] md:w-[780px] md:h-[520px] object-contain mx-auto">
                  <img
                    src={section.image}
                    alt={section.subtitle}
                    className="w-[368px] h-[246px] md:w-[780px] md:h-[520px] object-cover rounded-lg shadow-md"
                  />
                </div>
                {/* Text Content */}
                <div className="w-full">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 px-2 md:px-0">
                    {section.subtitle}
                  </h2>
                  <p className="text-gray-300 text-justify px-2 md:px-0">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}