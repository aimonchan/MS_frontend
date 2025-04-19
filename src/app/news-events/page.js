'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Cta from "@/app/components/Cta";
import MainNewsAndEvents from "@/app/components/NewsAndEvents/MainNewsAndEvents";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
      <Header />
      <MainNewsAndEvents/>
      <Cta/>
      <Footer />
    </main>
  );
}
