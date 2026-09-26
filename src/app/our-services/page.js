import Header from "../components/Header";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import MainOurServices from "../components/OurServices/MainOurServices";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Interior Design & Custom Furniture Services",
  description:
    "Design & build turnkey solutions, interior design and custom-made furniture for homes, offices and commercial spaces in Yangon, Myanmar, by Modern Space.",
  path: "/our-services",
});

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
      <Header />
      <MainOurServices/>
      <Cta/>
      <Footer />
    </main>
  );
}
