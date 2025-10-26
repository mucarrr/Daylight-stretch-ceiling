import type { Metadata } from "next";
import ContactForm from '@/components/ui/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "İletişim - Daylight Gergi Tavan",
  description: "Daylight Gergi Tavan ile iletişime geçin. Ücretsiz keşif, teklif ve danışmanlık hizmeti için bize ulaşın. Telefon: 0555 123 45 67",
  keywords: "gergi tavan iletişim, gergi tavan teklif, gergi tavan keşif, daylight gergi tavan telefon",
};

export default function IletisimPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              İletişim
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Projeniz hakkında bilgi almak, ücretsiz keşif ve teklif için bizimle iletişime geçin. 
              Uzman ekibimiz size en uygun çözümü sunmak için burada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
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
                    <p className="text-gray-600 mb-1">0555 123 45 67</p>
                    <p className="text-sm text-gray-500">Pazartesi - Cumartesi: 09:00 - 18:00</p>
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
                    <p className="text-gray-600 mb-1">İstanbul, Türkiye</p>
                    <p className="text-sm text-gray-500">Tüm İstanbul'a hizmet veriyoruz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Çalışma Saatleri</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                      <p>Cumartesi: 09:00 - 16:00</p>
                      <p>Pazar: Kapalı</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı İletişim</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+905551234567"
                    className="block w-full bg-gray-900 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-gray-800 transition-colors"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905551234567"
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
      <section className="py-16 bg-gray-50">
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ücretsiz Keşif</h3>
              <p className="text-gray-600 text-sm">
                Mekanınızı inceleyerek en uygun çözümü belirliyoruz
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ücretsiz Teklif</h3>
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

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Müşterilerimizin en çok merak ettiği konular
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gergi tavan montajı ne kadar sürer?
              </h3>
              <p className="text-gray-600">
                Montaj süresi mekanın büyüklüğüne ve seçilen modele göre değişir. 
                Genellikle 1-3 gün arasında tamamlanır.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hangi alanlarda gergi tavan uygulayabilirsiniz?
              </h3>
              <p className="text-gray-600">
                Evler, ofisler, restoranlar, oteller, mağazalar ve tüm kapalı mekanlarda 
                gergi tavan uygulaması yapabiliriz.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fiyatlarınız nasıl belirleniyor?
              </h3>
              <p className="text-gray-600">
                Fiyatlarımız mekanın büyüklüğü, seçilen model, montaj zorluğu ve 
                ek özellikler göz önünde bulundurularak belirlenir.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Garanti süreniz ne kadar?
              </h3>
              <p className="text-gray-600">
                Tüm işlerimizde 2 yıl garanti veriyoruz. Malzeme ve işçilik 
                garantisi kapsamındadır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
