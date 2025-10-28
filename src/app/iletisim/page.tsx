import type { Metadata } from "next";
import ContactForm from '@/components/ui/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "İletişim - Daylight Gergi Tavan",
  description: "Daylight Gergi Tavan ile iletişime geçin. Ücretsiz keşif, teklif ve danışmanlık hizmeti için bize ulaşın. Telefon: +90 506 150 98 41",
  keywords: "gergi tavan iletişim, gergi tavan teklif, gergi tavan keşif, daylight gergi tavan telefon",
};

export default function IletisimPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              İletişim
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Projeniz hakkında bilgi almak, ücretsiz keşif ve teklif için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600 mb-1">+90 506 150 98 41</p>
                    <p className="text-sm text-gray-500">WhatsApp ile de ulaşabilirsiniz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">daylightgergitavan@gmail.com</p>
                    <p className="text-sm text-gray-500">24 saat içinde yanıt veriyoruz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600 mb-1">Kocaeli, Türkiye</p>
                    <p className="text-sm text-gray-500">Tüm bölgeye hizmet veriyoruz</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı İletişim</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+905061509841"
                    className="block w-full bg-gray-900 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-gray-800 transition-colors"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905061509841?text=Merhaba!%20Gergi%20tavan%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="mailto:daylightgergitavan@gmail.com"
                    className="block w-full border-2 border-gray-900 text-gray-900 py-3 px-4 rounded-lg text-center font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    ✉️ Email Gönder
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Size sunduğumuz kapsamlı hizmet yelpazesi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Profesyonel Keşif</h3>
              <p className="text-gray-600 text-sm">
                Mekanınızı inceleyerek en uygun çözümü belirliyoruz
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Özel Teklif</h3>
              <p className="text-gray-600 text-sm">
                Detaylı ve şeffaf fiyat teklifi sunuyoruz
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Uzman Montaj</h3>
              <p className="text-gray-600 text-sm">
                Deneyimli ekibimizle profesyonel montaj
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Garanti</h3>
              <p className="text-gray-600 text-sm">
                Tüm işlerimizde kalite garantisi veriyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
