'use client';

import Header from "../components/Header";
import CEOmessage from "../components/AboutUs/CEOmessage";
import MDmessage from "../components/AboutUs/MDmessage";
import OURcompany from "../components/AboutUs/OURcompany";
import Brands from "../components/Brands";
import TeamMembers from "../components/TeamMembers";
import Footer from "../components/Footer";
import BackToTopBtn from "../components/BackToTopBtn";
import OURhistory from "../components/AboutUs/OURhistory";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
      <Header />
      
      <CEOmessage/>
      <MDmessage/>
      <OURcompany/>
      <OURhistory/>
      
      <Brands />
      
      <TeamMembers />
      <Footer />
      {/* <BackToTopBtn/> */}
    </main>
  );
}
