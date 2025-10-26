import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import JsonLd from "@/components/ui/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Daylight Gergi Tavan - Modern Gergi Tavan Çözümleri",
  description: "Modern gergi tavan çözümleri ile mekanlarınızı dönüştürün. Lake, baskılı, duvar kağıdı, lineer aydınlatma ve lightbox sistemleri. Uzman montaj hizmeti.",
  keywords: "gergi tavan, lake gergi tavan, baskılı gergi tavan, duvar kağıdı, lineer aydınlatma, lightbox, tavan sistemleri",
  authors: [{ name: "Daylight Gergi Tavan" }],
  creator: "Daylight Gergi Tavan",
  publisher: "Daylight Gergi Tavan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://daylightgergitavan.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Daylight Gergi Tavan - Modern Gergi Tavan Çözümleri",
    description: "Modern gergi tavan çözümleri ile mekanlarınızı dönüştürün. Kaliteli malzeme, uzman montaj ve müşteri memnuniyeti odaklı hizmet.",
    url: 'https://daylightgergitavan.com',
    siteName: 'Daylight Gergi Tavan',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Daylight Gergi Tavan - Modern Gergi Tavan Çözümleri",
    description: "Modern gergi tavan çözümleri ile mekanlarınızı dönüştürün.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Daylight Gergi Tavan",
    "description": "Modern gergi tavan çözümleri ile mekanlarınızı dönüştürün. Lake, baskılı, duvar kağıdı, lineer aydınlatma ve lightbox sistemleri.",
    "url": "https://daylightgergitavan.com",
    "logo": "https://daylightgergitavan.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-555-123-45-67",
      "contactType": "customer service",
      "email": "daylightgergitavan@gmail.com",
      "availableLanguage": "Turkish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "sameAs": [
      "https://instagram.com/daylightgergitavan",
      "https://facebook.com/daylightgergitavan"
    ],
    "foundingDate": "2014",
    "numberOfEmployees": "10-50",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.0082,
        "longitude": 28.9784
      },
      "geoRadius": "50000"
    }
  };

  return (
    <html lang="tr" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
