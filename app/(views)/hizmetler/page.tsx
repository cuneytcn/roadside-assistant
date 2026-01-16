import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { siteConfig } from '@/config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Hizmetlerimiz',
   description:
      'İzmir genelinde sunduğumuz profesyonel yol yardım hizmetleri. Araç çekici, lastik tamiri, akü takviyesi ve daha fazlası.',
   openGraph: {
      title: 'Hizmetlerimiz | İzmir Araç Yol Yardım',
      description:
         'İzmir genelinde sunduğumuz profesyonel yol yardım hizmetleri. Araç çekici, lastik tamiri, akü takviyesi ve daha fazlası.',
   },
};

export default function HizmetlerPage() {
   return (
      <>
         <Header />
         <main>
            <section className="py-16 bg-linear-to-br from-blue-50 to-blue-100">
               <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center">
                     <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Hizmetlerimiz
                     </h1>
                     <p className="text-xl text-gray-700">
                        İzmir ve çevresinde 7/24 sunduğumuz profesyonel araç yol
                        yardım hizmetleri
                     </p>
                  </div>
               </div>
            </section>

            <section className="py-16 bg-white">
               <div className="container mx-auto px-4">
                  <div className="grid gap-12">
                     {siteConfig.services.map((service, index) => (
                        <div
                           key={service.slug}
                           className={`flex flex-col ${
                              index % 2 === 0
                                 ? 'lg:flex-row'
                                 : 'lg:flex-row-reverse'
                           } gap-8 items-center`}>
                           <div className="flex-1">
                              <div className="bg-blue-50 rounded-lg p-12 flex items-center justify-center">
                                 <span className="text-9xl">
                                    {service.icon}
                                 </span>
                              </div>
                           </div>
                           <div className="flex-1">
                              <h2 className="text-3xl font-bold mb-4">
                                 {service.title}
                              </h2>
                              <p className="text-gray-700 text-lg mb-6">
                                 {service.description}
                              </p>
                              <div className="space-y-3">
                                 <div className="flex items-start space-x-3">
                                    <span className="text-green-600 text-xl">
                                       ✓
                                    </span>
                                    <span className="text-gray-700">
                                       7/24 hızlı ve profesyonel hizmet
                                    </span>
                                 </div>
                                 <div className="flex items-start space-x-3">
                                    <span className="text-green-600 text-xl">
                                       ✓
                                    </span>
                                    <span className="text-gray-700">
                                       Deneyimli ve sertifikalı ekip
                                    </span>
                                 </div>
                                 <div className="flex items-start space-x-3">
                                    <span className="text-green-600 text-xl">
                                       ✓
                                    </span>
                                    <span className="text-gray-700">
                                       İzmir genelinde hizmet kapsamı
                                    </span>
                                 </div>
                                 <div className="flex items-start space-x-3">
                                    <span className="text-green-600 text-xl">
                                       ✓
                                    </span>
                                    <span className="text-gray-700">
                                       Uygun ve şeffaf fiyatlandırma
                                    </span>
                                 </div>
                              </div>
                              <div className="mt-6">
                                 <a
                                    href={`tel:${siteConfig.contact.phone.replace(
                                       /\s/g,
                                       ''
                                    )}`}
                                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    Hemen Ara: {siteConfig.contact.phone}
                                 </a>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            <section className="py-16 bg-blue-600 text-white">
               <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                     Acil Durumda Bize Ulaşın
                  </h2>
                  <p className="text-xl mb-8">
                     7/24 profesyonel yol yardım hizmeti
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
