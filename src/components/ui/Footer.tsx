import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-start mb-4">
              <Image
                src="/image.png"
                alt="Daylight Logo"
                width={300}
                height={120}
                className="h-28 w-auto object-contain"
                priority
                style={{ width: 'auto', height: '112px' }}
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-left">
              Modern gergi tavan çözümleri ile mekanlarınızı dönüştürüyoruz. 
              Kaliteli malzeme, uzman montaj ve müşteri memnuniyeti odaklı hizmet anlayışımızla yanınızdayız.
            </p>
            <div className="flex space-x-2 justify-start">
              <a 
                href="https://wa.me/905061509841?text=Merhaba!%20Gergi%20tavan%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum." 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                title="WhatsApp ile yazın"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  WhatsApp
                </div>
              </a>
              <a 
                href="mailto:daylightgergitavan@gmail.com" 
                className="group relative p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 hover:text-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-md"
                title="E-posta gönder"
              >
                <Mail size={20} />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  E-posta
                </div>
              </a>
              <a 
                href="https://www.facebook.com/share/1HotGTJZUo/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                title="Facebook'ta takip et"
              >
                <Facebook size={20} />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Facebook
                </div>
              </a>
              <a 
                href="https://instagram.com/daylightgergi" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                title="Instagram'da takip et"
              >
                <Instagram size={20} />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  Instagram
                </div>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/modeller" className="text-gray-300 hover:text-white transition-colors">
                  Modeller
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="text-gray-300 hover:text-white transition-colors">
                  Katalog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400" />
                <a 
                  href="tel:+905061509841" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +90 506 150 98 41
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <a 
                  href="mailto:daylightgergitavan@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  daylightgergitavan@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-gray-300">
                  Kocaeli, Türkiye
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Daylight Gergi Tavan. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
