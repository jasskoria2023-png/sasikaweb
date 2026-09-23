import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vactionstnh.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vactionstnh.com | International Travel & Holidays",
    template: "%s | Vactionstnh.com",
  },
  description: "Plan international group tours, free and easy holidays, corporate travel, visa assistance, and flights with Vactionstnh.com.",
  keywords: [
    "Sri Lanka travel agency",
    "international group tours",
    "outbound holidays",
    "corporate travel",
    "visa assistance",
    "flight ticketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Vactionstnh.com",
    title: "Vactionstnh.com | International Travel & Holidays",
    description: "Discover international group tours, customized holidays, corporate travel, visa assistance, and flight services from Sri Lanka.",
    images: [
      {
        url: "/images/logo.jpg",
        alt: "Vactionstnh.com travel logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vactionstnh.com | International Travel & Holidays",
    description: "Plan unforgettable international journeys with Vactionstnh.com.",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/tablogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Vactionstnh.com",
              url: siteUrl,
              logo: `${siteUrl}/images/logo.jpg`,
              email: "info@vactionstnh.com",
              areaServed: "Sri Lanka",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
