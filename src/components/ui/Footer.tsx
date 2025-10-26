import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">D</span>
              </div>
              <div>
                <div className="text-xl font-bold">DAYLIGHT</div>
                <div className="text-sm text-gray-400 -mt-1">GERGİ TAVAN</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Modern gergi tavan çözümleri ile mekanlarınızı dönüştürüyoruz. 
              Kaliteli malzeme, uzman montaj ve müşteri memnuniyeti odaklı hizmet anlayışımızla yanınızdayız.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/daylightgergitavan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/daylightgergitavan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Facebook size={20} />
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
                  href="tel:+905551234567" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  0555 123 45 67
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
                  İstanbul, Türkiye
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
