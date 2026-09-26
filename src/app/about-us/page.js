import Header from "../components/Header";
import CEOmessage from "../components/AboutUs/CEOmessage";
import MDmessage from "../components/AboutUs/MDmessage";
import OURcompany from "../components/AboutUs/OURcompany";
import Brands from "../components/Brands";
import TeamMembers from "../components/TeamMembers";
import Footer from "../components/Footer";
import OURhistory from "../components/AboutUs/OURhistory";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Modern Space Furnishing and Decoration Co., Ltd (est. 2019, Yangon) delivers interior design, custom furniture and turnkey fit-outs for homes and offices.",
  path: "/about-us",
});

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
