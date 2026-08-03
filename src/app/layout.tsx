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

const SITE_URL = "https://bluebellwayand.com";
const SITE_TITLE = "Blue Bell Resort – Treehouses & Private-Pool Domes in Wayanad, Kerala";
const SITE_DESCRIPTION =
  "Blue Bell is a treehouse and private-pool dome resort in Periya, Wayanad, Kerala. Book direct for earthen-dome stays with private pools, Tree Trunk and Tree Hut rooms for two, campfires, and easy access to Wayanad's waterfalls and wildlife sanctuaries.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Blue Bell Resort",
    "Blue Bell Wayanad",
    "resort in Periya Wayanad",
    "treehouse resort Wayanad",
    "private pool dome Wayanad",
    "Wayanad resort with private pool",
    "Kerala treehouse stay",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Blue Bell Resort",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  colorScheme: "only light",
  themeColor: "#FFFFFF",
};

const lodgingBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Blue Bell Resort",
  "description": SITE_DESCRIPTION,
  "url": SITE_URL,
  "telephone": "+91-73060-45321",
  "email": "bluebelllwayanad0@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Peria Korome Rd, Alattil",
    "addressLocality": "Periya, Wayanad",
    "addressRegion": "Kerala",
    "postalCode": "670644",
    "addressCountry": "IN",
  },
  "checkinTime": "14:00",
  "checkoutTime": "11:00",
  "priceRange": "₹₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${plusJakarta.variable} ${alexBrush.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessJsonLd) }}
        />
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
