'use client';

// import Header from "./components/Header";
// import About from "./components/About";
// import NewsAndEventsSlider from "./components/NewsAndEventsSlider";
// import Brands from "./components/Brands";
// import OurServices from "./components/OurServices";
// import Projects from "./components/Projects";
// import Testimonial from "./components/Testimonial";
// import TeamMembers from "./components/TeamMembers";
// import Blogs from "./components/Blogs";
// import Cta from "./components/Cta";
// import Footer from "./components/Footer";
// import BackToTopBtn from "./components/BackToTopBtn";
// import Hero from "./components/Hero/Hero";
// import MainHero from "./components/MainHero";
// import Test from "./components/Test";
// import TestTwo from "./components/TestTwo";
// import OurLocation from "./components/GoogleMap";
// import ProductDetail from "./components/DetailProject";
// import TestRooCode from "./components/TestRooCode";

// export default function Home() {
//   return (
//     <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
//       <Header />
//       <MainHero/>
      
//       <NewsAndEventsSlider />
//       <About />
//       <Brands />
//       <OurServices />
//       <Projects />
//       {/* <Test/> Do not delete */}
//       {/* <ProductDetail/> Do not delete */}
//       <Testimonial />
//       <TeamMembers />
//       <Blogs />
//       <Cta />
//       <OurLocation />
//       {/* <TestRooCode /> */}
//       {/* <TestTwo/> */}
//       <Footer />
//       {/* <BackToTopBtn/> */}
//     </main>
//   );
// }

// Filename: app/page.tsx

// Filename: app/page.js

// Filename: app/page.js

// Filename: app/coming-soon-client.js

// Filename: app/page.js

// Filename: app/page.js

 // This directive is necessary because we are using the <Head> component.

import Head from 'next/head'; // Import the Head component for client-side head management
import { Montserrat } from 'next/font/google';

// Configure and optimize the Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function ComingSoonPage() {
  return (
    <>
      {/* 
        This Head component injects the title and meta tags into the document's <head>.
        This is the correct way to do it in a component marked with "use client".
      */}
      <Head>
        <title>Launching Soon | M-Space Deco</title>
        <meta name="description" content="Our new website is under construction, but we are working hard to get it ready for you." />
      </Head>

      <main className={`${montserrat.className} bgImage`}>
        <div className="bgOverlay"></div>
        <div className="content">
          
          {/* ===== CUSTOMIZE YOUR CONTENT BELOW ===== */}
          
          <h1>We're Launching Soon</h1>
          <p>
            Our new website is under construction, but we are working hard to get it ready for you.
            <br />
            Something exciting is coming your way!
          </p>
          
          {/* <div className="contactInfo">
            <a href="mailto:info@mspace-deco.com">Get In Touch</a>
          </div> */}

          {/* ===== END OF CUSTOMIZABLE CONTENT ===== */}

        </div>
      </main>

      {/* Styled-JSX for component-scoped CSS */}
      <style jsx>{`
        .bgImage {
          background-image: url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2070&auto=format&fit=crop');
          min-height: 100vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .bgOverlay {
          background-color: rgba(0, 0, 0, 0.6);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 20px;
          max-width: 800px;
        }

        .content h1 {
          font-size: 3.5rem;
          margin-bottom: 15px;
          font-weight: 700;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
        }

        .content p {
          font-size: 1.25rem;
          line-height: 1.5;
          margin-bottom: 30px;
        }

        .contactInfo a {
          color: #fff;
          text-decoration: none;
          border: 2px solid white;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 700;
          transition: background-color 0.3s, color 0.3s;
        }

        .contactInfo a:hover {
          background-color: white;
          color: #333;
        }

        @media (max-width: 768px) {
          .content h1 {
            font-size: 2.5rem;
          }
          .content p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}