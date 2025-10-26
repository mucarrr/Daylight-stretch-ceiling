export interface Model {
  id: string;
  name: string;
  description: string;
  features: string[];
  applications: string[];
  image: string;
  slug: string;
}

export const models: Model[] = [
  {
    id: 'lake',
    name: 'Lake Gergi Tavan',
    description: 'Modern ve şık tasarımıyla Lake gergi tavan, her mekana zarafet katar. Yüksek kaliteli malzeme ve uzman montaj ile mükemmel sonuç.',
    features: [
      'Su geçirmez özellik',
      'Kolay temizlik',
      'Uzun ömürlü',
      'Çok çeşitli renk seçenekleri',
      'Hızlı montaj'
    ],
    applications: [
      'Evler',
      'Ofisler',
      'Restoranlar',
      'Otel odaları',
      'Mağazalar'
    ],
    image: '/images/models/lake-gergi-tavan.jpg',
    slug: 'lake-gergi-tavan'
  },
  {
    id: 'baskili',
    name: 'Baskılı Gergi Tavan',
    description: 'Özel baskı teknikleri ile tasarlanan baskılı gergi tavanlar, mekanınıza kişilik katar. Her türlü desen ve renk seçeneği.',
    features: [
      'Özel baskı teknolojisi',
      'Yüksek çözünürlük',
      'UV dayanıklı',
      'Özelleştirilebilir tasarım',
      'Profesyonel görünüm'
    ],
    applications: [
      'Çocuk odaları',
      'Kafeler',
      'Spa merkezleri',
      'Eğitim kurumları',
      'Tema odaları'
    ],
    image: '/images/models/baskili-gergi-tavan.jpg',
    slug: 'baskili-gergi-tavan'
  },
  {
    id: 'duvar-kagidi',
    name: 'Duvar Kağıdı',
    description: 'Gergi tavan üzerine uygulanan duvar kağıdı çözümleri ile mekanınızı dönüştürün. Estetik ve pratik bir seçim.',
    features: [
      'Kolay uygulama',
      'Geniş desen yelpazesi',
      'Su geçirmez',
      'Kolay değiştirilebilir',
      'Ekonomik çözüm'
    ],
    applications: [
      'Yatak odaları',
      'Oturma odaları',
      'Banyolar',
      'Mutfaklar',
      'Koridorlar'
    ],
    image: '/images/models/duvar-kagidi.jpg',
    slug: 'duvar-kagidi'
  },
  {
    id: 'lineer-aydinlatma',
    name: 'Lineer Aydınlatma',
    description: 'Modern LED teknolojisi ile entegre edilmiş lineer aydınlatma sistemleri. Hem fonksiyonel hem de estetik.',
    features: [
      'LED teknolojisi',
      'Enerji tasarrufu',
      'Uzun ömürlü',
      'Dimmer özelliği',
      'Modern tasarım'
    ],
    applications: [
      'Ofisler',
      'Mağazalar',
      'Restoranlar',
      'Evler',
      'Sergi alanları'
    ],
    image: '/images/models/lineer-aydinlatma.jpg',
    slug: 'lineer-aydinlatma'
  },
  {
    id: 'lightbox',
    name: 'Lightbox',
    description: 'İç aydınlatmalı gergi tavan sistemleri ile mekanınızı aydınlatın. Hem dekoratif hem de fonksiyonel çözüm.',
    features: [
      'İç aydınlatma',
      'Çoklu renk seçenekleri',
      'Uzaktan kumanda',
      'Enerji verimli',
      'Kolay montaj'
    ],
    applications: [
      'Yatak odaları',
      'Oturma odaları',
      'Banyolar',
      'Koridorlar',
      'Ofisler'
    ],
    image: '/images/models/lightbox.jpg',
    slug: 'lightbox'
  }
];
