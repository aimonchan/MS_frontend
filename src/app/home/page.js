'use client';

import Header from "../components/Header";
import About from "../components/About";
import NewsAndEventsSlider from "../components/NewsAndEventsSlider";
import Brands from "../components/Brands";
import OurServices from "../components/OurServices";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import TeamMembers from "../components/TeamMembers";
import Blogs from "../components/Blogs";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import BackToTopBtn from "../components/BackToTopBtn";
import Hero from "../components/Hero/Hero";
import MainHero from "../components/MainHero";
import Test from "../components/Test";
import TestTwo from "../components/TestTwo";
import OurLocation from "../components/GoogleMap";
import ProductDetail from "../components/DetailProject";
import TestRooCode from "../components/TestRooCode";
import MainProjects from "../components/Projects/MainProjects";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
      <Header />
      <MainHero/>
      
      {/* <NewsAndEventsSlider /> */}
      <About />
      <Brands />
      <OurServices />
      {/* <Projects /> */}
      <MainProjects />
      {/* <Test/> Do not delete */}
      {/* <ProductDetail/> Do not delete */}
      {/* <Testimonial /> */}
      <TeamMembers />
      {/* <Blogs /> */}
      <Cta />
      <OurLocation />
      {/* <TestRooCode /> */}
      {/* <TestTwo/> */}
      <Footer />
      {/* <BackToTopBtn/> */}
    </main>
  );
}
