import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { siteConfig } from '@/config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Hakkımızda',
   description:
      'İzmir genelinde 7/24 profesyonel araç yol yardım hizmeti sunan deneyimli ekibimiz hakkında bilgi edinin.',
   openGraph: {
      title: 'Hakkımızda | İzmir Araç Yol Yardım',
      description:
         'İzmir genelinde 7/24 profesyonel araç yol yardım hizmeti sunan deneyimli ekibimiz hakkında bilgi edinin.',
   },
};

export default function HakkimizdaPage() {
   return (
      <>
         <Header />
         <main>
            <section className="py-16 bg-linear-to-br from-blue-50 to-blue-100">
               <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center">
                     <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Hakkımızda
                     </h1>
                     <p className="text-xl text-gray-700">
                        İzmir'de güvenilir ve profesyonel yol yardım hizmetleri
                     </p>
                  </div>
               </div>
            </section>

            <section className="py-16 bg-white">
               <div className="container mx-auto px-4 max-w-4xl">
                  <div className="prose max-w-none">
                     <h2 className="text-3xl font-bold mb-6">Biz Kimiz?</h2>
                     <p className="text-lg text-gray-700 mb-6">
                        İzmir Araç Yol Yardım olarak, 2010 yılından bu yana
                        İzmir ve çevresinde kesintisiz araç yol yardım hizmeti
                        sunmaktayız. Deneyimli ekibimiz, modern ekipmanlarımız
                        ve 7/24 hizmet anlayışımızla sürücülerin güvenini
                        kazanmış bir firmayız.
                     </p>
                     <p className="text-lg text-gray-700 mb-8">
                        Misyonumuz, yolda kalan her sürücüye hızlı, güvenli ve
                        profesyonel yardım sağlamaktır. Gece gündüz demeden,
                        İzmir'in her noktasında müşterilerimizin yanında olmanın
                        gururunu yaşıyoruz.
                     </p>

                     <h2 className="text-3xl font-bold mb-6">
                        Neden Bizi Seçmelisiniz?
                     </h2>
                     <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-blue-50 rounded-lg p-6">
                           <div className="text-4xl mb-4">🏆</div>
                           <h3 className="text-xl font-bold mb-2">
                              10+ Yıllık Tecrübe
                           </h3>
                           <p className="text-gray-700">
                              2010'dan beri İzmir'de binlerce müşteriye hizmet
                              verdik
                           </p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-6">
                           <div className="text-4xl mb-4">⚡</div>
                           <h3 className="text-xl font-bold mb-2">
                              Hızlı Müdahale
                           </h3>
                           <p className="text-gray-700">
                              Ortalama 15-20 dakikada olay yerine ulaşıyoruz
                           </p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-6">
                           <div className="text-4xl mb-4">👨‍🔧</div>
                           <h3 className="text-xl font-bold mb-2">
                              Uzman Ekip
                           </h3>
                           <p className="text-gray-700">
                              Sertifikalı ve deneyimli teknisyenlerle hizmet
                           </p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-6">
                           <div className="text-4xl mb-4">🚗</div>
                           <h3 className="text-xl font-bold mb-2">
                              Modern Filo
                           </h3>
                           <p className="text-gray-700">
                              Son teknoloji araç ve ekipmanlarla donatılmış
                              filomuz
                           </p>
                        </div>
                     </div>

                     <h2 className="text-3xl font-bold mb-6">Değerlerimiz</h2>
                     <div className="space-y-4 mb-8">
                        <div className="flex items-start space-x-4">
                           <div className="shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                           <div>
                              <h3 className="text-xl font-bold mb-2">
                                 Müşteri Memnuniyeti
                              </h3>
                              <p className="text-gray-700">
                                 Her zaman müşterilerimizin memnuniyetini ön
                                 planda tutuyoruz. Geri bildirimleriniz bizim
                                 için çok değerli.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-4">
                           <div className="shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                           <div>
                              <h3 className="text-xl font-bold mb-2">
                                 Güvenilirlik
                              </h3>
                              <p className="text-gray-700">
                                 Sözümüzün arkasında duruyoruz. Verdiğimiz
                                 hizmette kalite ve güvenilirlik önceliğimizdir.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-4">
                           <div className="shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                           <div>
                              <h3 className="text-xl font-bold mb-2">
                                 Şeffaflık
                              </h3>
                              <p className="text-gray-700">
                                 Fiyatlandırmamız şeffaf ve adildir. Hiçbir
                                 gizli ücret bulunmamaktadır.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-4">
                           <div className="shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                           <div>
                              <h3 className="text-xl font-bold mb-2">
                                 Profesyonellik
                              </h3>
                              <p className="text-gray-700">
                                 Ekibimiz sürekli eğitim alır ve sektördeki
                                 yenilikleri takip eder.
                              </p>
                           </div>
                        </div>
                     </div>

                     <h2 className="text-3xl font-bold mb-6">
                        Hizmet Bölgemiz
                     </h2>
                     <p className="text-lg text-gray-700 mb-6">
                        İzmir'in tüm ilçelerinde hizmet vermekteyiz. Merkez
                        ilçelerden uzak bölgelere kadar, her yere
                        ulaşabiliyoruz:
                     </p>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                        {siteConfig.districts.map((district) => (
                           <div
                              key={district}
                              className="bg-gray-50 rounded px-4 py-2 text-center text-sm">
                              {district}
                           </div>
                        ))}
                     </div>

                     <div className="bg-blue-600 text-white rounded-lg p-8 mt-12">
                        <h2 className="text-3xl font-bold mb-4">
                           İletişime Geçin
                        </h2>
                        <p className="text-xl mb-6 text-blue-100">
                           7/24 profesyonel yol yardım hizmeti için bize ulaşın
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                           <a
                              href={`tel:${siteConfig.contact.phone.replace(
                                 /\s/g,
                                 ''
                              )}`}
                              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center">
                              📞 {siteConfig.contact.phone}
                           </a>
                           <a
                              href={siteConfig.social.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors text-center">
                              WhatsApp ile İletişim
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
