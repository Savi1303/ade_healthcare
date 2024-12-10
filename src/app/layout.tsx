import type { Metadata } from "next";
import { Libre_Franklin } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
      >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
