import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { siteConfig } from '@/config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'İletişim',
   description:
      'İzmir araç yol yardım hizmeti için bize ulaşın. 7/24 acil yol yardım, çekici, lastik tamiri ve daha fazlası.',
   openGraph: {
      title: 'İletişim | İzmir Araç Yol Yardım',
      description:
         'İzmir araç yol yardım hizmeti için bize ulaşın. 7/24 acil yol yardım, çekici, lastik tamiri ve daha fazlası.',
   },
};

export default function IletisimPage() {
   return (
      <>
         <Header />
         <main>
            <section className="py-16 bg-linear-to-br from-blue-50 to-blue-100">
               <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center">
                     <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        İletişim
                     </h1>
                     <p className="text-xl text-gray-700">
                        7/24 yol yardım hizmeti için bize ulaşın
                     </p>
                  </div>
               </div>
            </section>

            <section className="py-16 bg-white">
               <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                     <div>
                        <h2 className="text-3xl font-bold mb-6">Bize Ulaşın</h2>
                        <div className="space-y-6">
                           <div className="flex items-start space-x-4">
                              <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                                 📞
                              </div>
                              <div>
                                 <h3 className="font-semibold text-lg mb-1">
                                    Telefon
                                 </h3>
                                 <a
                                    href={`tel:${siteConfig.contact.phone.replace(
                                       /\s/g,
                                       ''
                                    )}`}
                                    className="text-blue-600 hover:underline text-lg">
                                    {siteConfig.contact.phone}
                                 </a>
                                 <p className="text-sm text-gray-600 mt-1">
                                    7/24 Acil Hizmet
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start space-x-4">
                              <div className="shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                                 💬
                              </div>
                              <div>
                                 <h3 className="font-semibold text-lg mb-1">
                                    WhatsApp
                                 </h3>
                                 <a
                                    href={siteConfig.social.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:underline text-lg">
                                    WhatsApp ile İletişim
                                 </a>
                                 <p className="text-sm text-gray-600 mt-1">
                                    Hızlı Mesajlaşma
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start space-x-4">
                              <div className="shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-2xl">
                                 ✉️
                              </div>
                              <div>
                                 <h3 className="font-semibold text-lg mb-1">
                                    E-posta
                                 </h3>
                                 <a
                                    href={`mailto:${siteConfig.contact.email}`}
                                    className="text-blue-600 hover:underline text-lg">
                                    {siteConfig.contact.email}
                                 </a>
                                 <p className="text-sm text-gray-600 mt-1">
                                    Genel Sorularınız İçin
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start space-x-4">
                              <div className="shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                                 📍
                              </div>
                              <div>
                                 <h3 className="font-semibold text-lg mb-1">
                                    Adres
                                 </h3>
                                 <p className="text-gray-700">
                                    {siteConfig.contact.address}
                                 </p>
                                 <p className="text-sm text-gray-600 mt-1">
                                    Hizmet Bölgesi
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start space-x-4">
                              <div className="shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                                 ⏰
                              </div>
                              <div>
                                 <h3 className="font-semibold text-lg mb-1">
                                    Çalışma Saatleri
                                 </h3>
                                 <p className="text-gray-700 font-medium">
                                    {siteConfig.contact.workingHours}
                                 </p>
                                 <p className="text-sm text-gray-600 mt-1">
                                    Her Gün Hizmetinizdeyiz
                                 </p>
                              </div>
                           </div>
                        </div>

                        <div className="mt-8">
                           <h3 className="font-semibold text-lg mb-4">
                              Sosyal Medya
                           </h3>
                           <div className="flex space-x-4">
                              <a
                                 href={siteConfig.social.facebook}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                 aria-label="Facebook">
                                 <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                 </svg>
                              </a>
                              <a
                                 href={siteConfig.social.instagram}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                                 aria-label="Instagram">
                                 <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                 </svg>
                              </a>
                              <a
                                 href={siteConfig.social.twitter}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                                 aria-label="Twitter">
                                 <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                 </svg>
                              </a>
                           </div>
                        </div>
                     </div>

                     <div>
                        <h2 className="text-3xl font-bold mb-6">
                           Hizmet Verdiğimiz Bölgeler
                        </h2>
                        <p className="text-gray-700 mb-6">
                           İzmir'in tüm ilçelerinde 7/24 yol yardım hizmeti
                           sunuyoruz. Bulunduğunuz bölgeden bağımsız olarak size
                           en yakın ekibimizi yönlendiriyoruz.
                        </p>
                        <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
                           {siteConfig.districts.map((district) => (
                              <div
                                 key={district}
                                 className="bg-blue-50 rounded-lg px-4 py-3 text-center hover:bg-blue-100 transition-colors">
                                 <span className="font-medium text-gray-800">
                                    {district}
                                 </span>
                              </div>
                           ))}
                        </div>
                        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                           <p className="text-sm text-gray-700">
                              <strong>Not:</strong> Listelenen bölgelerin
                              dışında kalan yerlerde de hizmet veriyoruz.
                              Detaylı bilgi için lütfen bizi arayın.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="py-16 bg-blue-600 text-white">
               <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                     Acil Durumda Hemen Arayın
                  </h2>
                  <p className="text-xl mb-8 text-blue-100">
                     Profesyonel ekibimiz her an hizmetinizde
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <a
                        href={`tel:${siteConfig.contact.phone.replace(
                           /\s/g,
                           ''
                        )}`}
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
                        📞 {siteConfig.contact.phone}
                     </a>
                     <a
                        href={siteConfig.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors">
                        WhatsApp ile İletişim
                     </a>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
