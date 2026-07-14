import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Activewear Clothing Manufacturers | Custom Activewear Manufacturing",
    template: "%s | Activewear Clothing Manufacturers",
  },
  description: "Experts in activewear clothing manufacturing. Custom activewear, private label production, design services, and flexible MOQs. From concept to production.",
  keywords: ["activewear manufacturer", "custom activewear", "private label activewear", "gym wear manufacturer", "athletic apparel", "fitness clothing production"],
  openGraph: {
    title: "Activewear Clothing Manufacturers | Custom Activewear Manufacturing",
    description: "Experts in activewear clothing manufacturing. Custom activewear, private label production, and flexible MOQs.",
    url: "https://activewearclothingmanufacturers.com",
    siteName: "Activewear Clothing Manufacturers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Activewear Clothing Manufacturers | Custom Activewear Manufacturing",
    description: "Experts in activewear clothing manufacturing. From concept to production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Activewear Clothing Manufacturers",
              "description": "Experts in the world of activewear clothing manufacturing. Custom activewear, private label production, and comprehensive manufacturing services.",
              "url": "https://activewearclothingmanufacturers.com",
              "email": "info@activewearmanufacturers.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "sameAs": [],
              "serviceType": ["Custom Activewear Manufacturing", "Private Label Production", "Fabric Sourcing", "Sampling & Prototyping"]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
