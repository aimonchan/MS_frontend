// src/app/sitemap.js

export default async function sitemap() {
  const baseUrl = "https://www.mspace-deco.com";

  // ၁။ ပုံသေရှိနေတဲ့ Static Pages များ
  const routes = [
    "",
    "/home",
    "/about-us",
    "/our-services",
    "/projects",
    "/blogs",
    "/custom-creations",
    "/news-events",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" || route === "/home" ? 1.0 : 0.8,
  }));

  // ၂။ တကယ်လို့ Dynamic Pages တွေဖြစ်တဲ့ /blogs/[id] သို့မဟုတ် /projects/[id] တွေကိုပါ 
  // API ကနေ လှမ်းခေါ်ပြီး ထည့်ချင်ရင် ဒီနေရာမှာ Fetch လုပ်ပြီး Map ဆွဲထည့်ပေးလို့ရပါတယ်။
  // အခုလောလောဆယ် Static Pages တွေကို အရင် Run လိုက်ပါမယ်။

  return [...routes];
}