'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageModal from './ImageModal';

interface ModelCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  features: string[];
}

export default function ModelCard({ id, name, description, image, slug, features }: ModelCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div 
          className="relative h-48 cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                Büyüt
              </div>
            </div>
          </div>
        </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Özellikler:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={() => setIsDetailModalOpen(true)}
          className="inline-block w-full text-center bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Detayları Gör
        </button>
      </div>
    </div>

    {/* Image Modal */}
    <ImageModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      imageSrc={image}
      imageAlt={name}
      title={name}
    />

    {/* Detail Modal */}
    {isDetailModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsDetailModalOpen(false)}
        />
        <div className="relative z-10 max-w-4xl max-h-[90vh] w-full mx-4 bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row max-h-[90vh]">
            {/* Image Section */}
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                priority
                quality={95}
              />
            </div>
            
            {/* Content Section */}
            <div className="lg:w-1/2 p-6 overflow-y-auto">
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 z-20"
                aria-label="Kapat"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {name}
              </h2>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Özellikler:</h3>
                <ul className="space-y-2">
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/katalog"
                  className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                >
                  <span>Katalogu İncele</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/iletisim"
                  className="group relative inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-xl border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                >
                  <span>Teklif Al</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
