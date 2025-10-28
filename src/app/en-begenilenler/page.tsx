'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { featuredProjects } from '@/lib/data/featured';
import ImageModal from '@/components/ui/ImageModal';

export default function EnBegenilenlerPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              En Beğenilen Projelerimiz
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Müşterilerimizin memnuniyetle kullandığı, öne çıkan gergi tavan projelerimizi keşfedin. 
              Her proje, kaliteli malzeme ve uzman işçiliğin bir araya geldiği başarı hikayeleridir.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({
                    src: project.image,
                    alt: project.title,
                    title: project.title
                  })}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        Büyüt
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-600 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proje Kategorileri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Farklı mekan türlerinde gerçekleştirdiğimiz başarılı projelerimizi kategorilere göre inceleyin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Konut Projeleri</h3>
              <p className="text-gray-600 text-sm">
                Evler, daireler ve villa projelerinde gergi tavan uygulamaları
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ticari Projeler</h3>
              <p className="text-gray-600 text-sm">
                Ofisler, mağazalar ve ticari mekanlarda profesyonel çözümler
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🍽️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Restoran & Kafe</h3>
              <p className="text-gray-600 text-sm">
                Restoran, kafe ve otel projelerinde özel tasarımlar
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Özel Tasarımlar</h3>
              <p className="text-gray-600 text-sm">
                Baskılı ve özel tasarımlı gergi tavan uygulamaları
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proje Sürecimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her projede takip ettiğimiz adım adım süreç
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Keşif</h3>
              <p className="text-gray-600 text-sm">
                Mekanınızı inceleyerek en uygun çözümü belirliyoruz
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tasarım</h3>
              <p className="text-gray-600 text-sm">
                İhtiyaçlarınıza uygun tasarım ve model seçimi yapıyoruz
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Montaj</h3>
              <p className="text-gray-600 text-sm">
                Uzman ekibimizle profesyonel montaj gerçekleştiriyoruz
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teslimat</h3>
              <p className="text-gray-600 text-sm">
                Projenizi zamanında ve kaliteli şekilde teslim ediyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sizin Projeniz de Burada Olsun
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Hayalinizdeki gergi tavan projesini gerçekleştirin. Uzman ekibimizle birlikte 
            mekanınızı dönüştürelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Proje Başlat
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

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
        />
      )}
    </div>
  );
}
