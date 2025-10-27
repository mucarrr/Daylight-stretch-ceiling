import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Hakkımızda - Daylight Gergi Tavan",
  description: "Daylight Gergi Tavan hakkında bilgi alın. 10+ yıllık deneyim, kaliteli malzeme, uzman montaj ve müşteri memnuniyeti odaklı hizmet anlayışımız.",
  keywords: "daylight gergi tavan hakkında, gergi tavan firması, gergi tavan montaj, kaliteli gergi tavan",
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Daylight Gergi Tavan olarak, mekanlarınızı dönüştüren kaliteli gergi tavan çözümleri sunuyoruz. 
              Müşteri memnuniyeti odaklı hizmet anlayışımızla yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Daylight Gergi Tavan, sektörde yıllarca edinilen deneyimle kurulmuş 
                  bir firmadır. Büyük şirketlerde çalışarak kazanılan uzmanlık ve 
                  birikim, daha kişisel ve kaliteli hizmet sunma arzusuyla birleşti.
                </p>
                <p>
                  2014 yılında kurulan firmamız, büyük firmaların kalite standartlarını 
                  koruyarak, daha samimi ve müşteri odaklı bir yaklaşım benimser. 
                  Bürokrasiden uzak, her projeye özel ilgi gösteren bir anlayışla çalışır.
                </p>
                <p>
                  Yılların deneyimini taşıyan, müşteri memnuniyetini ön planda tutan 
                  bir anlayışla çalışıyoruz. Her projede kalite ve güvenilirliği, 
                  kişisel hizmet anlayışıyla birleştiriyoruz.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-white" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">15+ Yıllık Deneyim</h3>
                <p className="text-gray-600 text-lg">
                  Sektörde edinilen uzmanlık ve birikim
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Çalışma prensiplerimizi oluşturan temel değerlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalite</h3>
              <p className="text-gray-600">
                En kaliteli malzemeleri kullanarak uzun ömürlü çözümler sunuyoruz.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Müşteri Odaklılık</h3>
              <p className="text-gray-600">
                Müşteri memnuniyeti bizim için en önemli önceliktir.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Uzmanlık</h3>
              <p className="text-gray-600">
                10+ yıllık deneyimimizle profesyonel hizmet sunuyoruz.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zamanında Teslimat</h3>
              <p className="text-gray-600">
                Projelerinizi belirlenen sürede tamamlama garantisi veriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/why-choose-us.jpg"
                alt="Neden Daylight Gergi Tavan"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Neden Daylight Gergi Tavan?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Kaliteli Malzeme</h3>
                    <p className="text-gray-600">
                      Sadece en kaliteli, su geçirmez ve uzun ömürlü malzemeleri kullanıyoruz.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Uzman Montaj</h3>
                    <p className="text-gray-600">
                      Deneyimli ekibimizle profesyonel montaj hizmeti sunuyoruz.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Geniş Model Yelpazesi</h3>
                    <p className="text-gray-600">
                      5 farklı model kategorisinde yüzlerce seçenek sunuyoruz.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Uygun Fiyat</h3>
                    <p className="text-gray-600">
                      Kaliteli hizmeti en uygun fiyatlarla sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Uzman ekibimizle birlikte hayalinizdeki gergi tavan projesini gerçekleştirin. 
            Ücretsiz keşif ve danışmanlık hizmetimizden yararlanın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              İletişime Geç
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
