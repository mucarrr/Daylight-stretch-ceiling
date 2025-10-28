export interface Model {
  id: string;
  name: string;
  description: string;
  features: string[];
  applications: string[];
  image: string;
  video?: string;
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
    image: '/images/models/lake.jpeg',
    video: '/images/models/lake.mp4',
    slug: 'lake-gergi-tavan'
  },
  {
    id: 'baskili',
    name: 'Baskılı Tavan',
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
    image: '/images/models/baski.jpeg',
    slug: 'baskili-gergi-tavan'
  },
  {
    id: 'duvar-kagidi',
    name: 'Duvar Kağıdı',
    description: 'Duvar kağıdı çözümleri ile mekanınıza ferahlık ve şıklık kazandırın. Estetik ve pratik bir seçim.',
    features: [
      'Kolay uygulama',
      'Geniş desen yelpazesi',
      'Silinebilir'
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
    image: '/images/models/linear-aydinlatma.jpeg',
    slug: 'lineer-aydinlatma'
  },
  {
    id: 'lightbox',
    name: 'Lightbox',
    description: 'İç aydınlatmalı gergi tavan sistemleri ile mekanınızı aydınlatın. Hem dekoratif hem de fonksiyonel çözüm.',
    features: [
      'İç ve dış aydınlatma',
      'Baskılı modeller',
      'Mağaza ve iş yerleri'
    ],
    applications: [
      'Yatak odaları',
      'Oturma odaları',
      'Banyolar',
      'Koridorlar',
      'Ofisler'
    ],
    image: '/images/models/lightbox.jpeg',
    slug: 'lightbox'
  },
  {
    id: 'matrix',
    name: 'Matrix Picsel Led',
    description: 'Özel Matrix Picsel Led ile mekanınıza modern ve şık bir görünüm kazandırın. Enerji tasarrufu ve uzun ömürlü.',
    features: [
      'LED aydınlatma entegrasyonu',
      'Özel Picsel deseni',
      'Uzaktan kumanda',
      'Renk değiştirme özelliği',
      'Enerji tasarrufu'
    ],
    applications: [
      'Ofisler',
      'Restoranlar',
      'Barlar',
      'Eğlence mekanları',
      'Modern evler'
    ],
    image: '/images/models/matrix.mp4',
    video: '/images/models/matrix.mp4',
    slug: 'matrix-gergi-tavan'
  }
];
