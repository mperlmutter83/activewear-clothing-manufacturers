import type { Metadata } from "next";
import { Abril_Fatface, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://activewearclothingmanufacturers.com"),
  title:
    "Activewear Clothing Manufacturers | Experts in the world of activewear clothing manufacturing",
  description:
    "Activewear Clothing Manufacturers designs, develops, and manufactures high-quality activewear with flexible minimums and quick delivery times. Get a quote today.",
  openGraph: {
    siteName: "Activewear Clothing Manufacturers",
    locale: "en_US",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Activewear Clothing Manufacturers",
  url: "https://activewearclothingmanufacturers.com",
  telephone: "(310) 499-2160",
  email: "info@activewearclothingmanufacturers.com",
  logo: "https://activewearclothingmanufacturers.com/images/logo.png",
  image: "https://activewearclothingmanufacturers.com/images/hero.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${abril.variable} ${poppins.variable}`}>
      <head>
        {/* RFM site data - pushed before GTM loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  rfm: {
    schema_version: "1.0",
    site_id: "activewear_clothing_manufacturers",
    provider_id: "11e4ec61-5314-464f-851f-b7e9e72ecfda",
    provider_name: "Activewear Clothing Manufacturers",
    service_category: "clothing_manufacturing",
    market: "national"
  }
});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
