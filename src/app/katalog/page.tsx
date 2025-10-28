'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import { catalogItems } from '@/lib/data/catalog';
import ImageModal from '@/components/ui/ImageModal';

interface CatalogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default function CatalogPage({ searchParams }: CatalogPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  
  // Unwrap searchParams Promise
  const resolvedSearchParams = use(searchParams);
  
  // Modal state
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  // Update current page when searchParams change
  useEffect(() => {
    const page = parseInt(resolvedSearchParams.page || '1');
    setCurrentPage(page);
    
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [resolvedSearchParams.page]);

  // Show all items (no filtering)
  const filteredItems = catalogItems;

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);


  return (
    <div className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gergi Tavan Katalogu
            </h1>
            <p className="text-lg text-gray-600">
              Geniş ürün yelpazemizden size en uygun gergi tavan modelini seçin. 
              Kaliteli malzeme, uygun fiyat ve uzman montaj garantisi.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {currentItems.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
                {currentItems.map((item) => (
                  <div key={item.id} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                      onClick={() => setSelectedImage({
                        src: item.image,
                        alt: item.title,
                        title: item.title
                      })}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                        <div className="flex flex-col gap-1">
                          <button
                            onClick={() => setSelectedImage({
                              src: item.image,
                              alt: item.title,
                              title: item.title
                            })}
                            className="inline-block bg-white text-gray-900 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
                          >
                            Büyüt
                          </button>
                          <Link
                            href="/iletisim"
                            className="inline-block bg-transparent border border-white text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
                          >
                            Teklif Al
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-1 px-4">
                  {/* Previous Button */}
                  {currentPage > 1 && (
                    <Link
                      href={`/katalog?page=${currentPage - 1}`}
                      className="px-2 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm sm:text-base sm:px-4"
                      scroll={false}
                    >
                      <span className="hidden sm:inline">Önceki</span>
                      <span className="sm:hidden">‹</span>
                    </Link>
                  )}

                  {/* Page Numbers - Show limited on mobile */}
                  <div className="flex space-x-1 overflow-x-auto max-w-full">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // Show all pages on desktop, limited on mobile
                      const shouldShow = totalPages <= 7 || 
                        page === 1 || 
                        page === totalPages || 
                        (page >= currentPage - 1 && page <= currentPage + 1);
                      
                      if (!shouldShow) {
                        // Show dots for hidden pages
                        if (page === 2 && currentPage > 4) {
                          return (
                            <span key={`dots-${page}`} className="px-2 py-2 text-gray-500">
                              ...
                            </span>
                          );
                        }
                        if (page === totalPages - 1 && currentPage < totalPages - 3) {
                          return (
                            <span key={`dots-${page}`} className="px-2 py-2 text-gray-500">
                              ...
                            </span>
                          );
                        }
                        return null;
                      }

                      return (
                        <Link
                          key={page}
                          href={`/katalog?page=${page}`}
                          className={`px-2 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base sm:px-4 ${
                            page === currentPage
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          scroll={false}
                        >
                          {page}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  {currentPage < totalPages && (
                    <Link
                      href={`/katalog?page=${currentPage + 1}`}
                      className="px-2 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm sm:text-base sm:px-4"
                      scroll={false}
                    >
                      <span className="hidden sm:inline">Sonraki</span>
                      <span className="sm:hidden">›</span>
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
      <section className="py-12 bg-gray-900 text-white">
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