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
    title: 'Lake Gergi Tavan',
    subtitle: 'Su geçirmez, uzun ömürlü ve kolay temizlenebilir Lake gergi tavan sistemleri ile mekanınızı dönüştürün',
    image: '/images/hero/hero5.jpeg',
    ctaText: 'Modelleri İncele',
    ctaLink: '/modeller'
  },
  {
    id: 'slide-002',
    title: 'Baskılı Gergi Tavan',
    subtitle: 'Hayalinizdeki desenleri ve motifleri gergi tavanınıza yansıtan özel baskılı tasarım çözümleri',
    image: '/images/hero/hero1.jpeg',
    ctaText: 'Kataloğu Görüntüle',
    ctaLink: '/katalog'
  },
  {
    id: 'slide-003',
    title: 'Duvar Kağıdı',
    subtitle: 'Modern ve şık duvar kağıdı çözümleri ile mekanlarınıza yeni bir boyut kazandırın',
    image: '/images/hero/hero6.jpeg',
    ctaText: 'Projelerimizi İncele',
    ctaLink: '/en-begenilenler'
  },
  {
    id: 'slide-004',
    title: 'Lineer Aydınlatma',
    subtitle: 'Enerji tasarruflu ve estetik lineer LED aydınlatma sistemleri ile modern aydınlatma çözümleri',
    image: '/images/hero/hero3.jpeg',
    ctaText: 'İletişime Geç',
    ctaLink: '/iletisim'
  },
  {
    id: 'slide-005',
    title: 'Lightbox',
    subtitle: 'Profesyonel lightbox sistemleri ile mekanlarınızda etkileyici görsel deneyimler yaratın',
    image: '/images/hero/hero4.jpeg',
    ctaText: 'Teklif Al',
    ctaLink: '/iletisim'
  }
];
