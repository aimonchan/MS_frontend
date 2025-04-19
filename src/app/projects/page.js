'use client';

import Header from "../components/Header";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import MainProjects from "../components/Projects/MainProjects";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
      <Header />
      <MainProjects/>
      <Cta/>
      <Footer />
    </main>
  );
}
