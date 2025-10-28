import Link from 'next/link';
import HeroSlider from '@/components/ui/HeroSlider';
import ModelCard from '@/components/ui/ModelCard';
import FeaturedProjectsSlider from '@/components/ui/FeaturedProjectsSlider';
import { models } from '@/lib/data/models';
import { featuredProjects } from '@/lib/data/featured';

export default function Home() {
  // İlk 5 modeli göster
  const featuredModels = models.slice(0, 5);
  
  // Slider tüm öne çıkanları gösterecek

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Hızlı Tanıtım */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Gergi Tavan Çözümleri
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mekanlarınızı dönüştüren, kaliteli malzeme ve uzman montaj ile 
              mükemmel sonuçlar sunan gergi tavan sistemlerimizi keşfedin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Model Çeşidi</h3>
              <p className="text-gray-600">Farklı ihtiyaçlarınıza uygun çeşitli model seçenekleri</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Yıllık Deneyim</h3>
              <p className="text-gray-600">Sektörde uzun yılların getirdiği deneyim ve uzmanlık</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">Kaliteli hizmet anlayışımızla müşteri memnuniyeti odaklı çalışma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modeller Önizleme */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gergi Tavan Modellerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her mekana uygun, farklı ihtiyaçlara cevap veren gergi tavan modellerimizi inceleyin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredModels.map((model) => (
              <ModelCard
                key={model.id}
                id={model.id}
                name={model.name}
                description={model.description}
                image={model.image}
                video={model.video}
                slug={model.slug}
                features={model.features}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/modeller"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Tüm Modelleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* En Beğenilenler - Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              En Beğenilen Projelerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Müşterilerimizin memnuniyetle kullandığı, öne çıkan projelerimizi keşfedin.
            </p>
          </div>

          <FeaturedProjectsSlider />

          <div className="text-center mt-10">
            <Link
              href="/en-begenilenler"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Tüm Projeleri İncele
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projenizi Hayata Geçirin
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Uzman ekibimizle birlikte hayalinizdeki gergi tavan projesini gerçekleştirin. 
            Ücretsiz keşif ve teklif için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Ücretsiz Teklif Al
            </Link>
            <Link
              href="/katalog"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Katalogu İncele
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
