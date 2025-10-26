export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  modelType: string;
  year: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'featured-001',
    title: 'Modern Villa Projesi',
    description: 'Beyaz Lake gergi tavan ile tasarlanan modern villa projesi. Minimalist tasarım ve mükemmel işçilik.',
    image: '/images/featured/villa-modern.jpg',
    location: 'İstanbul, Beşiktaş',
    modelType: 'lake',
    year: '2024'
  },
  {
    id: 'featured-002',
    title: 'Çocuk Odası Tasarımı',
    description: 'Baskılı gergi tavan ile tasarlanan çocuk odası. Bulut deseni ve renkli aydınlatma ile eğlenceli atmosfer.',
    image: '/images/featured/cocuk-odasi.jpg',
    location: 'Ankara, Çankaya',
    modelType: 'baskili',
    year: '2024'
  },
  {
    id: 'featured-003',
    title: 'Ofis Kompleksi',
    description: 'Lineer LED aydınlatma sistemi ile tasarlanan modern ofis kompleksi. Enerji tasarrufu ve estetik bir arada.',
    image: '/images/featured/ofis-kompleksi.jpg',
    location: 'İzmir, Konak',
    modelType: 'lineer-aydinlatma',
    year: '2023'
  },
  {
    id: 'featured-004',
    title: 'Lüks Otel Odası',
    description: 'Premium Lightbox sistemi ile tasarlanan lüks otel odası. RGB aydınlatma ve uzaktan kumanda özelliği.',
    image: '/images/featured/otel-odasi.jpg',
    location: 'Antalya, Konyaaltı',
    modelType: 'lightbox',
    year: '2024'
  },
  {
    id: 'featured-005',
    title: 'Restoran Tasarımı',
    description: 'Duvar kağıdı ve Lake gergi tavan kombinasyonu ile tasarlanan şık restoran. Sıcak ve davetkar atmosfer.',
    image: '/images/featured/restoran.jpg',
    location: 'Bursa, Nilüfer',
    modelType: 'duvar-kagidi',
    year: '2023'
  },
  {
    id: 'featured-006',
    title: 'Spa Merkezi',
    description: 'Doğa temalı baskılı gergi tavan ile tasarlanan spa merkezi. Huzurlu ve rahatlatıcı atmosfer.',
    image: '/images/featured/spa-merkezi.jpg',
    location: 'Muğla, Bodrum',
    modelType: 'baskili',
    year: '2024'
  },
  {
    id: 'featured-007',
    title: 'Modern Ev Projesi',
    description: 'Geometrik baskılı gergi tavan ile tasarlanan modern ev. Şık ve çağdaş tasarım anlayışı.',
    image: '/images/featured/modern-ev.jpg',
    location: 'İstanbul, Kadıköy',
    modelType: 'baskili',
    year: '2024'
  },
  {
    id: 'featured-008',
    title: 'Mağaza Tasarımı',
    description: 'Lineer LED aydınlatma ile tasarlanan modern mağaza. Ürünleri öne çıkaran profesyonel aydınlatma.',
    image: '/images/featured/magaza.jpg',
    location: 'İstanbul, Şişli',
    modelType: 'lineer-aydinlatma',
    year: '2023'
  }
];
