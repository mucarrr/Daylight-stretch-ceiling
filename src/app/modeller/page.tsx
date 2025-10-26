import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { models } from '@/lib/data/models';

export const metadata: Metadata = {
  title: "Gergi Tavan Modelleri - Daylight Gergi Tavan",
  description: "Lake, baskılı, duvar kağıdı, lineer aydınlatma ve lightbox gergi tavan modellerimizi inceleyin. Her mekana uygun çözümler.",
  keywords: "gergi tavan modelleri, lake gergi tavan, baskılı gergi tavan, duvar kağıdı, lineer aydınlatma, lightbox",
};

export default function ModellerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gergi Tavan Modellerimiz
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Her mekana uygun, farklı ihtiyaçlara cevap veren gergi tavan modellerimizi keşfedin. 
              Kaliteli malzeme ve uzman montaj ile mükemmel sonuçlar.
            </p>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {models.map((model, index) => (
              <div key={model.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {model.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {model.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Özellikler:</h3>
                    <ul className="space-y-2">
                      {model.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Uygulama Alanları:</h3>
                    <div className="flex flex-wrap gap-2">
                      {model.applications.map((application, appIndex) => (
                        <span 
                          key={appIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/katalog"
                      className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-center"
                    >
                      Katalogu İncele
                    </Link>
                    <Link
                      href="/iletisim"
                      className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200 text-center"
                    >
                      Teklif Al
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hangi Modeli Seçeceğinizi Bilemiyor musunuz?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size en uygun modeli seçmenizde yardımcı olacak. 
            Ücretsiz keşif ve danışmanlık hizmetimizden yararlanın.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Ücretsiz Danışmanlık Al
          </Link>
        </div>
      </section>
    </div>
  );
}
