import Header from "../components/Header";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import MainOurServices from "../components/OurServices/MainOurServices";
import JsonLd from "../components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbStructuredData } from "@/lib/structuredData";

const crumbs = [{ name: 'Our Services', path: '/our-services' }];

export const metadata = pageMetadata({
  title: "Interior Design & Custom Furniture Services",
  description:
    "Design & build turnkey solutions, interior design and custom-made furniture for homes, offices and commercial spaces in Yangon, Myanmar, by Modern Space.",
  path: "/our-services",
});

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
      <JsonLd data={breadcrumbStructuredData(crumbs)} />
      <Header />
      <MainOurServices/>
      <Cta/>
      <Footer />
    </main>
  );
}
