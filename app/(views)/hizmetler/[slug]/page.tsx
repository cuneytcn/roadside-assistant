import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { siteConfig } from '@/config/site.config';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

export async function generateStaticParams() {
   return siteConfig.services.map((service) => ({
      slug: service.slug,
   }));
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ slug: string }>;
}): Promise<Metadata> {
   const { slug } = await params;
   const service = siteConfig.services.find((s) => s.slug === slug);

   if (!service) {
      return {};
   }

   return {
      title: `${service.title} - İzmir`,
      description: `İzmir genelinde ${service.title.toLowerCase()} hizmeti. 7/24 profesyonel yol yardım. ${
         service.description
      }`,
      openGraph: {
         title: `${service.title} - İzmir Araç Yol Yardım`,
         description: `İzmir genelinde ${service.title.toLowerCase()} hizmeti. 7/24 profesyonel yol yardım.`,
      },
   };
}

export default function HizmetDetayPage({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const { slug } = use(params);
   const service = siteConfig.services.find((s) => s.slug === slug);

   if (!service) {
      notFound();
   }

   const getServiceDetails = (slug: string) => {
      switch (slug) {
         case 'arac-cekici':
            return {
               longDescription:
                  'İzmir genelinde profesyonel araç çekici ve kurtarma hizmetimiz ile aracınız nerede olursa olsun size yardımcı oluyoruz. Modern çekici araçlarımız ve deneyimli ekibimizle aracınızı güvenli bir şekilde istediğiniz yere ulaştırıyoruz.',
               features: [
                  'Tüm araç tiplerine uygun çekici filosu',
                  'GPS takipli güzergah optimizasyonu',
                  'Kapalı kasa çekici seçeneği',
                  'Sigorta anlaşmalı taşıma',
                  'Kaza sonrası araç kurtarma',
                  'İzmir içi ve şehirlerarası taşıma',
               ],
               process: [
                  'Bizi arayın ve aracınızın konumunu bildirin',
                  'En yakın çekici ekibimizi size yönlendiririz',
                  'Ekibimiz 15-20 dakika içinde olay yerinde olur',
                  'Aracınızı güvenli şekilde çekici üzerine alırız',
                  'İstediğiniz adrese güvenli teslimat yaparız',
               ],
            };
         case 'lastik-tamiri':
            return {
               longDescription:
                  'Yolda lastik patlaması veya hasar durumunda yerinde lastik tamiri ve değişimi hizmeti sunuyoruz. Profesyonel ekipmanlarımız ile lastik sorunlarınızı anında çözüyoruz.',
               features: [
                  'Yerinde lastik tamiri',
                  'Acil lastik değişimi',
                  'Stepne montaj hizmeti',
                  'Lastik basınç kontrolü',
                  'Lastik hasar analizi',
                  'Tüm araç tipleri için uygun ekipman',
               ],
               process: [
                  'Acil durum numaramızı arayın',
                  'Konumunuzu ve sorunu bildirin',
                  'Ekibimiz gerekli ekipmanla gelir',
                  'Yerinde lastik tamiri veya değişimi yapılır',
                  'Güvenli sürüş kontrolü yapılır',
               ],
            };
         case 'aku-takviyesi':
            return {
               longDescription:
                  'Aracınızın aküsü bittiğinde veya akü arızası durumunda 7/24 akü takviyesi ve şarj hizmeti sunuyoruz. Profesyonel ekipmanlarımızla aracınızı güvenli şekilde çalıştırıyoruz.',
               features: [
                  'Profesyonel akü takviye cihazları',
                  'Tüm araç tiplerine uygun voltaj',
                  'Akü sağlık kontrolü',
                  'Alternatör test hizmeti',
                  'Gerektiğinde yeni akü temini',
                  'Elektrik sistemi kontrol',
               ],
               process: [
                  'Akü bitti mi? Hemen bizi arayın',
                  'Ekibimiz konumunuza gelir',
                  'Profesyonel ekipmanla akü takviyesi yapılır',
                  'Akü ve elektrik sistemi kontrol edilir',
                  'Güvenli şekilde yola devam edersiniz',
               ],
            };
         case 'arac-kilidi-acma':
            return {
               longDescription:
                  'Anahtarınızı araç içinde unuttuysanız veya kaybettiyseniz, profesyonel araç kilidi açma hizmetimizle size yardımcı oluyoruz. Aracınıza zarar vermeden güvenli kilit açma işlemi yapıyoruz.',
               features: [
                  'Hasarsız kilit açma tekniği',
                  'Tüm araç markalarına uygun',
                  'Elektronik kilit sistemleri uzmanlığı',
                  'Kumanda pil değişimi',
                  'Acil anahtar kopyalama desteği',
                  'Bagaj kilidi açma',
               ],
               process: [
                  'Kilit sorunu için bizi arayın',
                  'Araç marka ve modelini bildirin',
                  'Uzman ekibimiz özel ekipmanla gelir',
                  'Aracınıza zarar vermeden kilit açılır',
                  'Gerekirse yedek anahtar desteği sağlanır',
               ],
            };
         case 'yakit-ikmali':
            return {
               longDescription:
                  'Yolda yakıtınız bittiyse endişelenmeyin! Acil yakıt ikmali hizmetimizle size yakıt ulaştırıyor ve yolunuza devam etmenizi sağlıyoruz.',
               features: [
                  'Hızlı yakıt teslimatı',
                  'Benzin ve motorin seçenekleri',
                  'Hijyenik yakıt taşıma',
                  'Tüm kredi kartları kabul edilir',
                  'Fatura düzenleme',
                  'İzmir genelinde hizmet',
               ],
               process: [
                  'Yakıt bitti mi? Hemen arayın',
                  'Konumunuzu ve yakıt türünü bildirin',
                  'Ekibimiz yakıt ile gelir',
                  'İhtiyacınız kadar yakıt ikmali yapılır',
                  'Ödeme yapıp yolunuza devam edersiniz',
               ],
            };
         case 'oto-elektrik':
            return {
               longDescription:
                  'Aracınızda elektrik arızası mı var? Uzman oto elektrikçi ekibimiz ile yerinde arıza tespiti ve onarım hizmeti sunuyoruz.',
               features: [
                  'Yerinde arıza tespiti',
                  'Elektrik sistemi tamiri',
                  'Sigorta değişimi',
                  'Far ve sinyal arıza giderme',
                  'Marş motoru kontrolü',
                  'Kablo arıza tespiti ve tamiri',
               ],
               process: [
                  'Elektrik arızası için bizi arayın',
                  'Sorunu detaylı anlatın',
                  'Uzman elektrikçimiz gelir',
                  'Arıza tespit edilir ve tamir edilir',
                  'Test edilerek teslim edilir',
               ],
            };
         default:
            return {
               longDescription: service.description,
               features: [],
               process: [],
            };
      }
   };

   const details = getServiceDetails(slug);

   return (
      <>
         <Header />
         <main>
            <section className="py-16 bg-linear-to-br from-blue-50 to-blue-100">
               <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center">
                     <div className="text-6xl mb-6">{service.icon}</div>
                     <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {service.title}
                     </h1>
                     <p className="text-xl text-gray-700">
                        {service.description}
                     </p>
                  </div>
               </div>
            </section>

            <section className="py-16 bg-white">
               <div className="container mx-auto px-4 max-w-4xl">
                  <div className="prose max-w-none">
                     <h2 className="text-3xl font-bold mb-6">
                        Hizmet Detayları
                     </h2>
                     <p className="text-lg text-gray-700 mb-8">
                        {details.longDescription}
                     </p>

                     {details.features.length > 0 && (
                        <>
                           <h3 className="text-2xl font-bold mb-4">
                              Özelliklerimiz
                           </h3>
                           <div className="grid md:grid-cols-2 gap-4 mb-8">
                              {details.features.map((feature, index) => (
                                 <div
                                    key={index}
                                    className="flex items-start space-x-3">
                                    <span className="text-green-600 text-xl shrink-0">
                                       ✓
                                    </span>
                                    <span className="text-gray-700">
                                       {feature}
                                    </span>
                                 </div>
                              ))}
                           </div>
                        </>
                     )}

                     {details.process.length > 0 && (
                        <>
                           <h3 className="text-2xl font-bold mb-4">
                              Hizmet Süreci
                           </h3>
                           <div className="space-y-4 mb-8">
                              {details.process.map((step, index) => (
                                 <div
                                    key={index}
                                    className="flex items-start space-x-4">
                                    <div className="shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                       {index + 1}
                                    </div>
                                    <p className="text-gray-700 pt-1">{step}</p>
                                 </div>
                              ))}
                           </div>
                        </>
                     )}

                     <div className="bg-blue-50 rounded-lg p-8 mt-8">
                        <h3 className="text-2xl font-bold mb-4">
                           Hemen Yardım Alın
                        </h3>
                        <p className="text-gray-700 mb-6">
                           7/24 profesyonel {service.title.toLowerCase()}{' '}
                           hizmeti için bize ulaşın.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                           <a
                              href={`tel:${siteConfig.contact.phone.replace(
                                 /\s/g,
                                 ''
                              )}`}
                              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center">
                              📞 {siteConfig.contact.phone}
                           </a>
                           <a
                              href={siteConfig.social.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors text-center">
                              WhatsApp ile İletişim
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="py-16 bg-gray-50">
               <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-8 text-center">
                     Diğer Hizmetlerimiz
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {siteConfig.services
                        .filter((s) => s.slug !== slug)
                        .slice(0, 3)
                        .map((otherService) => (
                           <Link
                              key={otherService.slug}
                              href={`/hizmetler/${otherService.slug}`}
                              className="border rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                              <div className="text-4xl mb-4">
                                 {otherService.icon}
                              </div>
                              <h3 className="text-xl font-bold mb-2">
                                 {otherService.title}
                              </h3>
                              <p className="text-gray-600">
                                 {otherService.description}
                              </p>
                           </Link>
                        ))}
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
