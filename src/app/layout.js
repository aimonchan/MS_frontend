import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Modern Space",
  description: "Furnishing & Decoration",
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
