'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/lib/data/hero-slides';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="relative h-[95vh] min-h-[700px] overflow-hidden pt-32">
        <div className="relative h-full">
          <div className="absolute inset-0">
            {heroSlides[0].video ? (
              <video
                src={heroSlides[0].video}
                poster={heroSlides[0].image}
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onTimeUpdate={(e) => {
                  if (e.currentTarget.currentTime >= 3) {
                    e.currentTarget.currentTime = 0;
                  }
                }}
              />
            ) : (
              <Image
                src={heroSlides[0].image}
                alt={heroSlides[0].title}
                fill
                className="object-cover object-center"
                priority
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-end z-10">
              <div className="container mx-auto px-4 pb-16">
                <div className="max-w-2xl text-white text-center md:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    {heroSlides[0].title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200">
                    {heroSlides[0].subtitle}
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Link
                      href={heroSlides[0].ctaLink}
                      className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 relative z-20"
                    >
                      {heroSlides[0].ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="relative h-[95vh] min-h-[700px] overflow-hidden pt-32">
      {/* Slides */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.video ? (
              <video
                src={slide.video}
                poster={slide.image}
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onTimeUpdate={(e) => {
                  if (e.currentTarget.currentTime >= 3) {
                    e.currentTarget.currentTime = 0;
                  }
                }}
              />
            ) : (
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-end z-10">
              <div className="container mx-auto px-4 pb-16">
                <div className="max-w-2xl text-white text-center md:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200">
                    {slide.subtitle}
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Link
                      href={slide.ctaLink}
                      className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 relative z-20"
                    >
                      {slide.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={goToPrevious}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200 z-10"
        aria-label="Önceki slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200 z-10"
        aria-label="Sonraki slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}'e git`}
          />
        ))}
      </div>
    </div>
  );
}
