import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Libre_Franklin } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const libreFranklin = Libre_Franklin({
  weight: [ '100', '300', '600', '700', '900' ],
  style: [ 'normal', 'italic' ],
  subsets: [ 'latin' ],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Pretty Heailth",
  description: "Healthcare App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ libreFranklin.className } antialiased bg-white text-black`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Navbar />
          {children}
        {/* <div className="bg-[#D8D8FF] bg-[#0094DE] bg-[#008000] bg-[#6867AD] bg-[#331C4C] bg-[#4E96D1] bg-[#F3E8FF] bg-[#B6B5FF] bg-[#E8D3FF] bg-[#FFE6D4] bg-[#D9D9D9] bg-[#BFA161]"></div> */}
        <Footer />
      </body>
    </html>
  );
}
