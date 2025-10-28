export interface CatalogItem {
  id: string;
  title: string;
  description: string;
  image: string;
  modelType: string;
  price?: string;
  features: string[];
}

// 127 fotoğraf için otomatik oluşturulan katalog verisi
export const catalogItems: CatalogItem[] = Array.from({ length: 127 }, (_, i) => {
  const num = i + 1;
  const categories = ['Lake', 'Baskılı', 'Duvar Kağıdı', 'Lineer Aydınlatma', 'Lightbox', 'Modern', 'Klasik', 'Premium'];
  const category = categories[i % categories.length];
  
  return {
    id: `catalog-${num.toString().padStart(3, '0')}`,
    title: `Gergi Tavan Modeli ${num}`,
    description: `${category} tasarımda gergi tavan çözümü. Modern ve kaliteli malzeme kullanılarak üretilmiştir.`,
    image: `/images/catalog/${num}.jpeg`,
    modelType: 'genel',
    price: `₺${150 + (i % 50)}/m²`,
    features: [
      'Kaliteli malzeme',
      'Modern tasarım', 
      'Uzun ömürlü',
      'Kolay temizlik'
    ]
  };
});