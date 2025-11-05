import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gergi Tavan Katalogu - Daylight Gergi Tavan",
  description: "Geniş gergi tavan katalogumuzu inceleyin. Yüzlerce farklı model ve tasarım seçeneği. Kaliteli malzeme, uygun fiyat ve uzman montaj garantisi.",
  keywords: "gergi tavan katalog, gergi tavan modelleri, gergi tavan fiyatları, gergi tavan çeşitleri, tavan katalogu",
  alternates: {
    canonical: '/katalog',
  },
  openGraph: {
    title: "Gergi Tavan Katalogu - Daylight Gergi Tavan",
    description: "Geniş gergi tavan katalogumuzu inceleyin. Yüzlerce farklı model ve tasarım seçeneği.",
    url: 'https://daylightgergitavan.com/katalog',
    type: 'website',
  },
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


