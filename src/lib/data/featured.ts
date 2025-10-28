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
    description: 'Beyaz Lake gergi tavan ile tasarlanan modern villa projesi. Minimalist tasarım ve mükemmel işçilik.',
    image: '/images/featured/fav1.jpeg',
    location: 'İstanbul',
    year: '2024'
  },
  {
    id: 'featured-002',
    title: 'Eczane Projesi',
    description: 'Baskılı gergi tavan ile tasarlanan çocuk odası. Bulut deseni ve renkli aydınlatma ile eğlenceli atmosfer.',
    image: '/images/featured/fav2.jpeg',
    location: 'Canakkale',
    year: '2024'
  },
  {
    id: 'featured-003',
    title: 'Eczane Projesi',
    description: 'Lineer LED aydınlatma sistemi ile tasarlanan modern ofis kompleksi. Enerji tasarrufu ve estetik bir arada.',
    image: '/images/featured/fav3.jpeg',
    location: 'Canakkale Burda AVM',
    year: '2023'
  },
  {
    id: 'featured-008',
    title: 'Otel Projesi',
    description: 'Premium Lightbox sistemi ile tasarlanan lüks otel odası. RGB aydınlatma ve uzaktan kumanda özelliği.',
    image: '/images/featured/fav8.jpeg',
    location: 'Istanbul',
    year: '2024'
  },
  {
    id: 'featured-005',
    title: 'Eczane Projesi',
    description: 'Duvar kağıdı ve Lake gergi tavan kombinasyonu ile tasarlanan şık restoran. Sıcak ve davetkar atmosfer.',
    image: '/images/featured/fav5.jpeg',
    location: 'Canakkale',
    year: '2023'
  },
  {
    id: 'featured-006',
    title: 'Eczane Projesi',
    description: 'Doğa temalı baskılı gergi tavan ile tasarlanan spa merkezi. Huzurlu ve rahatlatıcı atmosfer.',
    image: '/images/featured/fav6.jpeg',
    location: 'Bursa',
    year: '2024'
  },
  {
    id: 'featured-009',
    title: 'Spor Salonu Projesi',
    description: 'Doğa temalı baskılı gergi tavan ile tasarlanan spa merkezi. Huzurlu ve rahatlatıcı atmosfer.',
    image: '/images/featured/fav9.jpeg',
    location: 'İstanbul',
    year: '2024'
  },
  {
    id: 'featured-010',
    title: 'Kuyumcu Projesi',
    description: 'Doğa temalı baskılı gergi tavan ile tasarlanan spa merkezi. Huzurlu ve rahatlatıcı atmosfer.',
    image: '/images/featured/fav10.jpeg',
    location: 'İstanbul',
    year: '2024'
  },
  {
    id: 'featured-011',
    title: 'Konut Projesi',
    description: 'Doğa temalı baskılı gergi tavan ile tasarlanan spa merkezi. Huzurlu ve rahatlatıcı atmosfer.',
    image: '/images/featured/fav11.jpeg',
    location: 'Kocaeli',
    year: '2024'
  }
  
];
