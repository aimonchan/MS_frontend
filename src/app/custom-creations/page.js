import Header from "../components/Header";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import MainCustomCreations from "../components/CustomCreations/MainCustomCreations";
import { pageMetadata } from "@/lib/seo";

// noindex until the catalogue has real products (current data is placeholder content).
export const metadata = pageMetadata({
  title: "Custom Creations",
  description: "Custom-made chairs, cabinets and kitchen cabinets designed and built by Modern Space in Yangon.",
  path: "/custom-creations",
  noindex: true,
});

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
