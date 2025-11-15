import type { Metadata } from "next";
import JsonLd from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular - Daylight Gergi Tavan",
  description: "Gergi tavan hizmetlerimiz hakkında sık sorulan sorular ve cevapları. Montaj süresi, fiyatlandırma, garanti ve daha fazlası.",
  keywords: "gergi tavan sss, gergi tavan sorular, gergi tavan montaj süresi, gergi tavan fiyat, gergi tavan garanti",
  alternates: {
    canonical: '/sss',
  },
  openGraph: {
    title: "Sık Sorulan Sorular - Daylight Gergi Tavan",
    description: "Gergi tavan hizmetlerimiz hakkında sık sorulan sorular ve cevapları. Montaj süresi, fiyatlandırma, garanti ve daha fazlası.",
    url: 'https://daylightgergitavan.com/sss',
    type: 'website',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Gergi tavan montajı ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Montaj süresi mekanın büyüklüğüne ve seçilen modele göre değişir. Genellikle 1-3 gün arasında tamamlanır."
      }
    },
    {
      "@type": "Question",
      "name": "Hangi alanlarda gergi tavan uygulayabilirsiniz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evler, ofisler, restoranlar, oteller, mağazalar ve tüm kapalı mekanlarda gergi tavan uygulaması yapabiliriz."
      }
    },
    {
      "@type": "Question",
      "name": "Fiyatlarınız nasıl belirleniyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fiyatlarımız mekanın büyüklüğü, seçilen model, montaj zorluğu ve ek özellikler göz önünde bulundurularak belirlenir."
      }
    },
    {
      "@type": "Question",
      "name": "Garanti süreniz ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tüm işlerimizde 2 yıl garanti veriyoruz. Malzeme ve işçilik garantisi kapsamındadır."
      }
    },
    {
      "@type": "Question",
      "name": "Gergi tavan temizliği nasıl yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gergi tavanlar kolay temizlenebilir malzemeden üretilir. Nemli bez ile silinebilir, özel temizlik maddesi gerektirmez."
      }
    },
    {
      "@type": "Question",
      "name": "Mevcut tavanın altına uygulanabilir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, mevcut tavanın altına uygulanabilir. Bu durumda önce mevcut tavanın durumu kontrol edilir ve gerekli önlemler alınır."
      }
    },
    {
      "@type": "Question",
      "name": "Aydınlatma entegrasyonu yapabilir misiniz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elbette! Spot ışık, LED şerit, avize ve diğer aydınlatma elemanlarını gergi tavana entegre edebiliriz."
      }
    },
    {
      "@type": "Question",
      "name": "Özel tasarım yapabilir misiniz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, müşterilerimizin istekleri doğrultusunda özel tasarım ve baskılı gergi tavan uygulamaları yapıyoruz."
      }
    },
    {
      "@type": "Question",
      "name": "Gergi tavan su geçirir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hayır, gergi tavanlar tamamen su geçirmez malzemeden üretilir. Su sızıntısı durumunda tavanı korur ve suyu toplar."
      }
    },
    {
      "@type": "Question",
      "name": "Gergi tavan yanıcı mıdır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gergi tavan malzemelerimiz yangına dayanıklı ve yanıcı olmayan özel malzemelerden üretilmiştir. Güvenlik standartlarına uygundur."
      }
    }
  ]
};

export default function SSSPage() {
  return (
    <main className="min-h-screen pt-32">
      <JsonLd data={faqSchema} />
      {/* Hero Section */}
      <section className="py-8 bg-gray-50" aria-label="SSS Başlık">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sık Sorulan Sorular
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Gergi tavan hizmetlerimiz hakkında merak ettiğiniz her şey.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8" aria-label="Sık Sorulan Sorular">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
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

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gergi tavan temizliği nasıl yapılır?
              </h3>
              <p className="text-gray-600">
                Gergi tavanlar kolay temizlenebilir malzemeden üretilir. 
                Nemli bez ile silinebilir, özel temizlik maddesi gerektirmez.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mevcut tavanın altına uygulanabilir mi?
              </h3>
              <p className="text-gray-600">
                Evet, mevcut tavanın altına uygulanabilir. Bu durumda önce 
                mevcut tavanın durumu kontrol edilir ve gerekli önlemler alınır.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Aydınlatma entegrasyonu yapabilir misiniz?
              </h3>
              <p className="text-gray-600">
                Elbette! Spot ışık, LED şerit, avize ve diğer aydınlatma 
                elemanlarını gergi tavana entegre edebiliriz.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Özel tasarım yapabilir misiniz?
              </h3>
              <p className="text-gray-600">
                Evet, müşterilerimizin istekleri doğrultusunda özel tasarım 
                ve baskılı gergi tavan uygulamaları yapıyoruz.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Montaj sırasında evde kalabilir miyim?
              </h3>
              <p className="text-gray-600">
                Montaj sırasında evde kalabilirsiniz. Çalışma alanını 
                güvenli şekilde izole ederiz ve minimum rahatsızlık veririz.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hangi ödeme yöntemlerini kabul ediyorsunuz?
              </h3>
              <p className="text-gray-600">
                Nakit, kredi kartı, banka havalesi ve taksitli ödeme 
                seçeneklerimiz mevcuttur. Detaylar için iletişime geçin.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gergi tavan su geçirir mi?
              </h3>
              <p className="text-gray-600">
                Hayır, gergi tavanlar tamamen su geçirmez malzemeden üretilir. 
                Su sızıntısı durumunda tavanı korur ve suyu toplar.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Montaj öncesi ne yapmam gerekiyor?
              </h3>
              <p className="text-gray-600">
                Montaj öncesi mekanın temizlenmesi ve değerli eşyaların 
                korunması yeterlidir. Detaylı bilgi montaj öncesi verilir.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gergi tavan yanıcı mıdır?
              </h3>
              <p className="text-gray-600">
                Gergi tavan malzemelerimiz yangına dayanıklı ve yanıcı olmayan 
                özel malzemelerden üretilmiştir. Güvenlik standartlarına uygundur.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Renk seçenekleri nelerdir?
              </h3>
              <p className="text-gray-600">
                Yüzlerce renk seçeneğimiz mevcuttur. Mat, parlak, metalik ve 
                özel efektli renkler arasından seçim yapabilirsiniz.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Montaj sırasında toz çıkar mı?
              </h3>
              <p className="text-gray-600">
                Montaj sırasında minimum toz çıkar. Çalışma alanını 
                izole ederiz ve temizlik işlemi yaparız.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gergi tavan sökülebilir mi?
              </h3>
              <p className="text-gray-600">
                Evet, gergi tavanlar sökülebilir. Söküm işlemi uzman 
                ekibimiz tarafından güvenli şekilde yapılır.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hangi mevsimde montaj yapabilirsiniz?
              </h3>
              <p className="text-gray-600">
                Tüm mevsimlerde montaj yapabiliriz. Sıcaklık ve nem 
                koşulları uygun olduğu sürece montaj gerçekleştirilir.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gergi tavan ses yalıtımı sağlar mı?
              </h3>
              <p className="text-gray-600">
                Gergi tavanlar hafif ses yalıtımı sağlar. Daha iyi ses 
                yalıtımı için ek malzemeler kullanılabilir.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Montaj sonrası bakım gerekir mi?
              </h3>
              <p className="text-gray-600">
                Özel bir bakım gerektirmez. Düzenli temizlik yeterlidir. 
                Garanti süresi boyunca ücretsiz bakım hizmeti sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Başka Sorunuz mu Var?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Aradığınız cevabı bulamadıysanız, uzman ekibimizle iletişime geçin. 
            Size yardımcı olmaktan mutluluk duyarız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              İletişime Geç
            </a>
            <a
              href="tel:+905061509841"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
