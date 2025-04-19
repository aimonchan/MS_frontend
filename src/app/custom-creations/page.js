'use client';

import Header from "../components/Header";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import TestTwo from "../components/TestTwo";
import Test from "../components/Test";
import MainCustomCreations from "../components/CustomCreations/MainCustomCreations";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
      <Header />
      <MainCustomCreations/>
      {/* <TestTwo/>
      <Test/> */}
      <Cta/>
      <Footer />
    </main>
  );
}
