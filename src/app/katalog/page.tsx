import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { catalogItems } from '@/lib/data/catalog';

export const metadata: Metadata = {
  title: "Gergi Tavan Katalogu - Daylight Gergi Tavan",
  description: "Geniş gergi tavan katalogumuzu inceleyin. Lake, baskılı, duvar kağıdı, lineer aydınlatma ve lightbox modelleri. Fiyat bilgileri ve detaylar.",
  keywords: "gergi tavan katalogu, gergi tavan fiyatları, lake gergi tavan, baskılı gergi tavan, duvar kağıdı, lineer aydınlatma, lightbox",
};

interface CatalogPageProps {
  searchParams: {
    page?: string;
    model?: string;
  };
}

export default function CatalogPage({ searchParams }: CatalogPageProps) {
  const currentPage = parseInt(searchParams.page || '1');
  const selectedModel = searchParams.model || 'all';
  const itemsPerPage = 16;

  // Filter items by model type
  const filteredItems = selectedModel === 'all' 
    ? catalogItems 
    : catalogItems.filter(item => item.modelType === selectedModel);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Model types for filter
  const modelTypes = [
    { value: 'all', label: 'Tümü' },
    { value: 'lake', label: 'Lake Gergi Tavan' },
    { value: 'baskili', label: 'Baskılı Gergi Tavan' },
    { value: 'duvar-kagidi', label: 'Duvar Kağıdı' },
    { value: 'lineer-aydinlatma', label: 'Lineer Aydınlatma' },
    { value: 'lightbox', label: 'Lightbox' },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gergi Tavan Katalogu
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Geniş ürün yelpazemizden size en uygun gergi tavan modelini seçin. 
              Kaliteli malzeme, uygun fiyat ve uzman montaj garantisi.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {modelTypes.map((type) => (
              <Link
                key={type.value}
                href={`/katalog?model=${type.value}&page=1`}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedModel === type.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {currentItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {currentItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          {item.modelType}
                        </span>
                        {item.price && (
                          <span className="text-sm font-semibold text-gray-900">
                            {item.price}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Özellikler:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {item.features.slice(0, 2).map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        href="/iletisim"
                        className="inline-block w-full text-center bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      >
                        Teklif Al
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                  {/* Previous Button */}
                  {currentPage > 1 && (
                    <Link
                      href={`/katalog?model=${selectedModel}&page=${currentPage - 1}`}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                      Önceki
                    </Link>
                  )}

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Link
                      key={page}
                      href={`/katalog?model=${selectedModel}&page=${page}`}
                      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        page === currentPage
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {page}
                    </Link>
                  ))}

                  {/* Next Button */}
                  {currentPage < totalPages && (
                    <Link
                      href={`/katalog?model=${selectedModel}&page=${currentPage + 1}`}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                      Sonraki
                    </Link>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bu kategoride ürün bulunamadı
              </h3>
              <p className="text-gray-600 mb-6">
                Farklı bir kategori seçerek katalogumuzu inceleyebilirsiniz.
              </p>
              <Link
                href="/katalog"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Tüm Ürünleri Görüntüle
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beğendiğiniz Ürün İçin Teklif Alın
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Katalogumuzda beğendiğiniz ürünler için ücretsiz keşif ve teklif alın. 
            Uzman ekibimiz size en uygun çözümü sunacak.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Ücretsiz Teklif Al
          </Link>
        </div>
      </section>
    </div>
  );
}
