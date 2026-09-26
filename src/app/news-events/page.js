import Header from "../components/Header";
import Footer from "../components/Footer";
import Cta from "@/app/components/Cta";
import MainNewsAndEvents from "@/app/components/NewsAndEvents/MainNewsAndEvents";
import { pageMetadata } from "@/lib/seo";

// noindex until this section has real content (currently a placeholder slider).
export const metadata = pageMetadata({
  title: "News & Events",
  description: "News and events from Modern Space, custom furniture and interior design in Yangon.",
  path: "/news-events",
  noindex: true,
});

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
