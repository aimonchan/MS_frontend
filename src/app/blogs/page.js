import Header from "../components/Header";
import Footer from "../components/Footer";
import MainBlog from "@/app/components/Blogs/MainBlog";
import Cta from "@/app/components/Cta";
import { pageMetadata } from "@/lib/seo";

// noindex until the blog has real posts (current data is placeholder content).
export const metadata = pageMetadata({
  title: "Blog",
  description: "Interior design and furniture ideas from Modern Space in Yangon.",
  path: "/blogs",
  noindex: true,
});

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
