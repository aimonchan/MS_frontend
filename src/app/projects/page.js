import Header from "../components/Header";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import MainProjects from "../components/Projects/MainProjects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects Portfolio",
  description:
    "Browse Modern Space interior projects in Yangon: offices, condos and apartments, spas and factories, from design and build to custom furniture and fit-out.",
  path: "/projects",
});

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
