export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  year: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'featured-001',
    title: 'Optik Projesi',
    description: 'Duvarlara uygulanan gergiler ile tasarlanan modern optik mağazası. Profesyonel aydınlatma ve ürün sergileme çözümleri.',
    image: '/images/featured/fav1.jpeg',
    location: 'İstanbul',
    year: '2024'
  },
  {
    id: 'featured-002',
    title: 'Eczane Projesi',
    description: 'Modern eczane tasarımı ile hijyenik ve güvenli ortam. Müşteri konforu ve profesyonel hizmet odaklı çözüm.',
    image: '/images/featured/fav2.jpeg',
    location: 'Canakkale',
    year: '2024'
  },
  {
    id: 'featured-003',
    title: 'Eczane',
    description: 'Duvar aydınlatma sistemi ile tasarlanan modern eczane. Profesyonel ışıklandırma ve hijyenik ortam.',
    image: '/images/featured/fav3.jpeg',
    location: 'Canakkale Burda AVM',
    year: '2023'
  },
  {
    id: 'featured-008',
    title: 'Otel Projesi',
    description: 'Modern tavan ve aydınlatma seçenekleri ile otelinizin dış görünümünü şık ve profesyonel hale getirebilirsiniz.',
    image: '/images/featured/fav8.jpeg',
    location: 'Istanbul',
    year: '2024'
  },
  {
    id: 'featured-005',
    title: 'Eczane Projesi',
    description: 'Modern eczane tasarımı ile temiz ve hijyenik ortam. Profesyonel görünüm ve müşteri memnuniyeti odaklı çözüm.',
    image: '/images/featured/fav5.jpeg',
    location: 'Canakkale',
    year: '2023'
  },
  {
    id: 'featured-006',
    title: 'Eczane Projesi',
    description: 'Duvar ve tavana uygulanan gergiler ile tasarlanan modern eczane. Hijyenik ve profesyonel ortam.',
    image: '/images/featured/fav6.jpeg',
    location: 'Bursa',
    year: '2024'
  },
  {
    id: 'featured-009',
    title: 'Spor Salonu Projesi',
    description: 'Lineer LED aydınlatma sistemi ile tasarlanan modern spor salonu. Enerji tasarrufu ve profesyonel aydınlatma.',
    image: '/images/featured/fav9.jpeg',
    location: 'İstanbul',
    year: '2024'
  },
  {
    id: 'featured-010',
    title: 'Kuyumcu Projesi',
    description: 'Lightbox sistemi ile tasarlanan modern kuyumcu mağazası.',
    image: '/images/featured/fav10.jpeg',
    location: 'İstanbul',
    year: '2024'
  },
  {
    id: 'featured-011',
    title: 'AVM Projesi',
    description: 'Baskılı gergi tavan ile tasarlanan modern AVM projesi. Özel desenler ve kişiselleştirilebilir tasarım seçenekleri.',
    image: '/images/featured/fav11.jpeg',
    location: 'Kocaeli NCIT AVM',
    year: '2024'
  }
  
];
