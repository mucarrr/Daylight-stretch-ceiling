'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { featuredProjects } from '@/lib/data/featured';
import ImageModal from './ImageModal';

export default function FeaturedProjectsSlider() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={16}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 24 }
        }}
        className="!pb-10 [&_.swiper-button-next]:!text-gray-600 [&_.swiper-button-prev]:!text-gray-600 [&_.swiper-button-next]:!bg-transparent [&_.swiper-button-prev]:!bg-transparent [&_.swiper-button-next]:!shadow-none [&_.swiper-button-prev]:!shadow-none [&_.swiper-pagination-bullet-active]:!bg-gray-600"
      >
        {featuredProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
              <div 
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage({
                  src: project.image,
                  alt: project.title,
                  title: project.title,
                  description: project.description
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
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400 ml-2 whitespace-nowrap">{project.location}</span>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
          description={selectedImage.description}
        />
      )}
    </div>
  );
}


