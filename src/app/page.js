import Header from "./components/Header";
import About from "./components/About";
import Brands from "./components/Brands";
import VacancySection from "./components/VacancySection/VacancySection";
import OurServices from "./components/OurServices";
import TeamMembers from "./components/TeamMembers";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import MainHero from "./components/MainHero";
import OurLocation from "./components/GoogleMap";
import MainProjects from "./components/Projects/MainProjects";
import JsonLd from "./components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { homeStructuredData } from "@/lib/structuredData";
import { HOME_DESCRIPTION } from "@/lib/site";

export const metadata = pageMetadata({
  description: HOME_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
      <JsonLd data={homeStructuredData()} />
      <Header />
      <MainHero/>

      {/* <NewsAndEventsSlider /> */}
      <About />
      <Brands />
      <OurServices />
      <VacancySection />
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
