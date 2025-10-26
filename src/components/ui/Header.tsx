'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const navigation = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Modeller', href: '/modeller' },
  { name: 'En Beğenilenler', href: '/en-begenilenler' },
  { name: 'Katalog', href: '/katalog' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center h-28 w-80">
            <Image
              src="/image.png"
              alt="Daylight Logo"
              width={300}
              height={120}
              className="h-28 w-auto object-contain"
              priority
              style={{ width: 'auto', height: '112px' }}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium text-lg transition-colors duration-200 whitespace-nowrap ${
                    isActive 
                      ? 'text-gray-900 font-semibold' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Social Media & Contact Icons */}
          <div className="hidden md:flex items-center space-x-3 w-80 justify-end">
            <a href="tel:+905551234567" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Phone size={24} />
            </a>
            <a href="mailto:info@daylight.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="Menüyü aç/kapat"
          >
            {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white" role="navigation" aria-label="Mobil menü">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-lg transition-colors ${
                      isActive 
                        ? 'text-gray-900 font-semibold bg-gray-100' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}