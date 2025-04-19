'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBlog from "@/app/components/Blogs/MainBlog";
import Cta from "@/app/components/Cta";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
      <Header />
      <MainBlog/>
      <Cta/>
      <Footer />
    </main>
  );
}
