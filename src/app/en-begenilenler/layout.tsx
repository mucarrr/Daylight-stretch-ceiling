import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "En Beğenilen Projeler - Daylight Gergi Tavan",
  description: "Müşterilerimizin memnuniyetle kullandığı, öne çıkan gergi tavan projelerimizi keşfedin. Her proje, kaliteli malzeme ve uzman işçiliğin bir araya geldiği başarı hikayeleridir.",
  keywords: "gergi tavan projeleri, başarılı gergi tavan uygulamaları, referans projeler, gergi tavan örnekleri",
  alternates: {
    canonical: '/en-begenilenler',
  },
  openGraph: {
    title: "En Beğenilen Projeler - Daylight Gergi Tavan",
    description: "Müşterilerimizin memnuniyetle kullandığı, öne çıkan gergi tavan projelerimizi keşfedin.",
    url: 'https://daylightgergitavan.com/en-begenilenler',
    type: 'website',
  },
};

export default function EnBegenilenlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


