

import Header from "../components/Header";
import About from "../components/About";
import NewsAndEventsSlider from "../components/NewsAndEventsSlider";
import Brands from "../components/Brands";
import OurServices from "../components/OurServices";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import TeamMembers from "../components/TeamMembers";
import Blogs from "../components/Blogs";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import BackToTopBtn from "../components/BackToTopBtn";
import Hero from "../components/Hero/Hero";
import MainHero from "../components/MainHero";
import Test from "../components/Test";
import TestTwo from "../components/TestTwo";
import OurLocation from "../components/GoogleMap";
import ProductDetail from "../components/DetailProject";
import TestRooCode from "../components/TestRooCode";
import MainProjects from "../components/Projects/MainProjects";

// ၁။ SEO Metadata ထည့်ခြင်း
export const metadata = {
  title: 'Modern Space Furnishing & Decoration Co., Ltd.',
  description: 'Modern Space တွင် ခေတ်မီဆန်းသစ်သော အိမ်တွင်းအလှဆင်ခြင်း (Interior Design) ဝန်ဆောင်မှုများနှင့် အရည်အသွေးမြင့် ပရိဘောဂများကို တစ်နေရာတည်းတွင် စိတ်တိုင်းကျ ရရှိနိုင်ပါသည်။ စိတ်ကူးထဲက အိမ်မက်များကို အကောင်အထည်ဖော်ရန် ယနေ့ပဲ ဆက်သွယ်လိုက်ပါ။',
  openGraph: {
    title: 'Modern Space Furnishing & Decoration Co., Ltd.',
    description: 'Modern Space တွင် ခေတ်မီဆန်းသစ်သော အိမ်တွင်းအလှဆင်ခြင်း (Interior Design) ဝန်ဆောင်မှုများနှင့် အရည်အသွေးမြင့် ပရိဘောဂများကို တစ်နေရာတည်းတွင် စိတ်တိုင်းကျ ရရှိနိုင်ပါသည်။ စိတ်ကူးထဲက အိမ်မက်များကို အကောင်အထည်ဖော်ရန် ယနေ့ပဲ ဆက်သွယ်လိုက်ပါ။',
    url: 'https://www.mspace-deco.com',
    siteName: 'Modern Space Furnishing & Decoration Co., Ltd.',
    images: [{ url: 'https://yourwebsite.com/og-image.png' }],
    locale: 'my_MM',
    type: 'website',
  },
};

export default function Home() {
  // ၂။ Sitelinks ပေါ်ဖို့အတွက် JSON-LD Schema Markup
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Modern Space Furnishing & Decoration Co., Ltd.',
    'url': 'https://www.mspace-deco.com',
  };
  return (
    <>
    {/* Google အတွက် Schema ထည့်ခြင်း */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    <main className="max-w-[1920px] bg-background mx-auto relative overflow-hidden">
      <Header />
      <MainHero/>
      
      {/* <NewsAndEventsSlider /> */}
      <About />
      <Brands />
      <OurServices />
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
    </>
    
  );
}
