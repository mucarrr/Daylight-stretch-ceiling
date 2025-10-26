export interface CatalogItem {
  id: string;
  title: string;
  description: string;
  image: string;
  modelType: string;
  price?: string;
  features: string[];
}

export const catalogItems: CatalogItem[] = [
  // Lake Gergi Tavan
  {
    id: 'lake-001',
    title: 'Lake Klasik Beyaz',
    description: 'Klasik beyaz renkte Lake gergi tavan, her mekana uyum sağlar.',
    image: '/images/catalog/catalog-1.jpg',
    modelType: 'lake',
    price: '₺150/m²',
    features: ['Su geçirmez', 'Kolay temizlik', 'Uzun ömürlü']
  },
  {
    id: 'lake-002',
    title: 'Lake Modern Gri',
    description: 'Modern gri tonunda Lake gergi tavan, şık ve minimal tasarım.',
    image: '/images/catalog/catalog-2.jpg',
    modelType: 'lake',
    price: '₺160/m²',
    features: ['Su geçirmez', 'Modern tasarım', 'Kolay montaj']
  },
  {
    id: 'lake-003',
    title: 'Lake Premium Siyah',
    description: 'Premium siyah Lake gergi tavan, lüks ve şık görünüm.',
    image: '/images/catalog/catalog-3.jpg',
    modelType: 'lake',
    price: '₺180/m²',
    features: ['Premium kalite', 'Lüks görünüm', 'Dayanıklı']
  },
  {
    id: 'lake-004',
    title: 'Lake Doğal Bej',
    description: 'Doğal bej tonunda Lake gergi tavan, sıcak ve huzurlu atmosfer.',
    image: '/images/catalog/catalog-4.jpg',
    modelType: 'lake',
    price: '₺155/m²',
    features: ['Doğal ton', 'Sıcak atmosfer', 'Çok amaçlı']
  },

  // Baskılı Gergi Tavan
  {
    id: 'baskili-001',
    title: 'Baskılı Bulut Deseni',
    description: 'Bulut desenli baskılı gergi tavan, çocuk odaları için ideal.',
    image: '/images/catalog/catalog-5.jpg',
    modelType: 'baskili',
    price: '₺200/m²',
    features: ['Özel baskı', 'Çocuk dostu', 'Renkli tasarım']
  },
  {
    id: 'baskili-002',
    title: 'Baskılı Geometrik',
    description: 'Modern geometrik desenli baskılı gergi tavan.',
    image: '/images/catalog/catalog-6.jpg',
    modelType: 'baskili',
    price: '₺220/m²',
    features: ['Geometrik desen', 'Modern tasarım', 'Özelleştirilebilir']
  },
  {
    id: 'baskili-003',
    title: 'Baskılı Doğa Teması',
    description: 'Doğa temalı baskılı gergi tavan, huzurlu atmosfer yaratır.',
    image: '/images/catalog/catalog-7.jpg',
    modelType: 'baskili',
    price: '₺190/m²',
    features: ['Doğa teması', 'Huzurlu atmosfer', 'Yüksek kalite']
  },
  {
    id: 'baskili-004',
    title: 'Baskılı Minimalist',
    description: 'Minimalist çizgilerle tasarlanmış baskılı gergi tavan.',
    image: '/images/catalog/catalog-8.jpg',
    modelType: 'baskili',
    price: '₺210/m²',
    features: ['Minimalist tasarım', 'Şık görünüm', 'Çok amaçlı']
  },

  // Duvar Kağıdı
  {
    id: 'duvar-001',
    title: 'Duvar Kağıdı Çiçekli',
    description: 'Çiçekli desenli duvar kağıdı, romantik ve şık atmosfer.',
    image: '/images/catalog/catalog-9.jpg',
    modelType: 'duvar-kagidi',
    price: '₺120/m²',
    features: ['Çiçekli desen', 'Romantik atmosfer', 'Kolay uygulama']
  },
  {
    id: 'duvar-002',
    title: 'Duvar Kağıdı Taş Deseni',
    description: 'Taş desenli duvar kağıdı, doğal ve rustik görünüm.',
    image: '/images/catalog/catalog-10.jpg',
    modelType: 'duvar-kagidi',
    price: '₺130/m²',
    features: ['Taş deseni', 'Doğal görünüm', 'Dayanıklı']
  },
  {
    id: 'duvar-003',
    title: 'Duvar Kağıdı Ahşap',
    description: 'Ahşap desenli duvar kağıdı, sıcak ve doğal atmosfer.',
    image: '/images/catalog/catalog-11.jpg',
    modelType: 'duvar-kagidi',
    price: '₺125/m²',
    features: ['Ahşap desen', 'Sıcak atmosfer', 'Doğal görünüm']
  },
  {
    id: 'duvar-004',
    title: 'Duvar Kağıdı Modern',
    description: 'Modern çizgilerle tasarlanmış duvar kağıdı.',
    image: '/images/catalog/catalog-12.jpg',
    modelType: 'duvar-kagidi',
    price: '₺135/m²',
    features: ['Modern tasarım', 'Şık görünüm', 'Çok amaçlı']
  },

  // Lineer Aydınlatma
  {
    id: 'lineer-001',
    title: 'Lineer LED Beyaz',
    description: 'Beyaz LED lineer aydınlatma sistemi, parlak ve temiz ışık.',
    image: '/images/catalog/catalog-13.jpg',
    modelType: 'lineer-aydinlatma',
    price: '₺300/m²',
    features: ['LED teknolojisi', 'Enerji tasarrufu', 'Parlak ışık']
  },
  {
    id: 'lineer-002',
    title: 'Lineer LED Sıcak',
    description: 'Sıcak tonlu LED lineer aydınlatma, huzurlu atmosfer.',
    image: '/images/catalog/catalog-14.jpg',
    modelType: 'lineer-aydinlatma',
    price: '₺320/m²',
    features: ['Sıcak ton', 'Huzurlu atmosfer', 'Dimmer özelliği']
  },
  {
    id: 'lineer-003',
    title: 'Lineer LED RGB',
    description: 'RGB renkli LED lineer aydınlatma, dinamik ışık efektleri.',
    image: '/images/catalog/catalog-15.jpg',
    modelType: 'lineer-aydinlatma',
    price: '₺400/m²',
    features: ['RGB renkler', 'Dinamik efektler', 'Uzaktan kumanda']
  },
  {
    id: 'lineer-004',
    title: 'Lineer LED Minimal',
    description: 'Minimal tasarımlı LED lineer aydınlatma sistemi.',
    image: '/images/catalog/catalog-16.jpg',
    modelType: 'lineer-aydinlatma',
    price: '₺280/m²',
    features: ['Minimal tasarım', 'Şık görünüm', 'Enerji verimli']
  },

  // Lightbox
  {
    id: 'lightbox-001',
    title: 'Lightbox Klasik',
    description: 'Klasik tasarımlı iç aydınlatmalı gergi tavan.',
    image: '/images/catalog/catalog-17.jpg',
    modelType: 'lightbox',
    price: '₺250/m²',
    features: ['İç aydınlatma', 'Klasik tasarım', 'Kolay montaj']
  },
  {
    id: 'lightbox-002',
    title: 'Lightbox Modern',
    description: 'Modern tasarımlı iç aydınlatmalı gergi tavan.',
    image: '/images/catalog/catalog-18.jpg',
    modelType: 'lightbox',
    price: '₺280/m²',
    features: ['Modern tasarım', 'Çoklu renk', 'Uzaktan kumanda']
  },
  {
    id: 'lightbox-003',
    title: 'Lightbox Premium',
    description: 'Premium kalitede iç aydınlatmalı gergi tavan.',
    image: '/images/catalog/catalog-19.jpg',
    modelType: 'lightbox',
    price: '₺350/m²',
    features: ['Premium kalite', 'Lüks görünüm', 'Gelişmiş özellikler']
  },
  {
    id: 'lightbox-004',
    title: 'Lightbox RGB',
    description: 'RGB renkli iç aydınlatmalı gergi tavan.',
    image: '/images/catalog/catalog-20.jpg',
    modelType: 'lightbox',
    price: '₺320/m²',
    features: ['RGB renkler', 'Dinamik efektler', 'Uzaktan kumanda']
  }
];
