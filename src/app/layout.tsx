import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans, Alex_Brush } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blue Bell Resort – Luxury Retreat in Wayanad, Kerala",
  description:
    "Experience the magic of Wayanad at Blue Bell Resort. Nestled amidst lush tea estates and misty hills, we offer world-class stays, curated experiences, and timeless hospitality in the heart of Kerala.",
  keywords: "Blue Bell Resort, Wayanad resort, Kerala luxury resort, nature retreat Kerala, Wayanad hotel",
  openGraph: {
    title: "Blue Bell Resort – Luxury Retreat in Wayanad, Kerala",
    description: "Nestled in the misty hills of Wayanad, Blue Bell Resort offers an unparalleled luxury escape amidst nature.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${plusJakarta.variable} ${alexBrush.variable}`}>
      <body>
        <LenisProvider>
          <Navbar />
          <main className="page-wrapper">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
