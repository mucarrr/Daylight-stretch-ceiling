export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-001',
    title: 'Modern Gergi Tavan Çözümleri',
    subtitle: 'Mekanınızı dönüştüren, kaliteli ve şık gergi tavan sistemleri',
    image: '/images/hero/hero-1.jpg',
    ctaText: 'Modelleri İncele',
    ctaLink: '/modeller'
  },
  {
    id: 'slide-002',
    title: 'Premium Lake Gergi Tavan',
    subtitle: 'Su geçirmez, uzun ömürlü ve kolay temizlenebilir Lake gergi tavanlar',
    image: '/images/hero/hero-2.jpg',
    ctaText: 'Katalogu Görüntüle',
    ctaLink: '/katalog'
  },
  {
    id: 'slide-003',
    title: 'Özel Baskılı Tasarımlar',
    subtitle: 'Hayalinizdeki desenleri gergi tavanınıza yansıtın',
    image: '/images/hero/hero-3.jpg',
    ctaText: 'Projelerimizi İncele',
    ctaLink: '/en-begenilenler'
  },
  {
    id: 'slide-004',
    title: 'LED Aydınlatma Sistemleri',
    subtitle: 'Enerji tasarruflu ve modern LED aydınlatma entegrasyonu',
    image: '/images/hero/hero-4.jpg',
    ctaText: 'İletişime Geç',
    ctaLink: '/iletisim'
  },
  {
    id: 'slide-005',
    title: 'Uzman Montaj Hizmeti',
    subtitle: 'Profesyonel ekibimizle hızlı ve güvenilir montaj',
    image: '/images/hero/hero-5.jpg',
    ctaText: 'Teklif Al',
    ctaLink: '/iletisim'
  }
];
