import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DEFAULT_OG_IMAGE, DEFAULT_TITLE, HOME_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
  verification: {
    // Google Search Console က ပေးတဲ့ content="..." ထဲက စာသားအရှည်ကြီးကို ဒီနေရာမှာ အစားထိုးထည့်ပါ
    google: "z-7I0O5xihQoxPUgGJrWh5POrsPIFKS67YYzwPZW_NY", 
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en"
    suppressHydrationWarning="true"
    data-qb-installed="true"
    style={{ colorScheme: 'light dark' }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
