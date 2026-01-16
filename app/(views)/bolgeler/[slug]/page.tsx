import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { siteConfig } from '@/config/site.config';
import { slugifyTR } from '@/lib/slugify';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

export async function generateStaticParams() {
   return siteConfig.districts.map((district) => ({
      slug: slugifyTR(district),
   }));
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ slug: string }>;
}): Promise<Metadata> {
   const { slug } = await params;
   const slugParam = slugifyTR(slug);
   const district = siteConfig.districts.find(
      (d) => slugifyTR(d) === slugParam
   );

   if (!district) {
      return {};
   }

   return {
      title: `${district} Araç Yol Yardım`,
      description: `${district}, İzmir'de 7/24 profesyonel araç yol yardım hizmeti. Çekici, lastik tamiri, akü takviyesi ve daha fazlası. Hemen arayın!`,
      keywords: [
         `${district} yol yardım`,
         `${district} araç çekici`,
         `${district} oto kurtarma`,
         `${district} acil yol yardım`,
         `${district} lastik tamiri`,
         `${district} akü takviyesi`,
      ],
      openGraph: {
         title: `${district} Araç Yol Yardım - İzmir`,
         description: `${district}, İzmir'de 7/24 profesyonel araç yol yardım hizmeti. Çekici, lastik tamiri, akü takviyesi.`,
      },
   };
}

export default function BolgePage({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const { slug } = use(params);
   const slugParam = slugifyTR(slug);
   const district = siteConfig.districts.find(
      (d) => slugifyTR(d) === slugParam
   );

   if (!district) {
      notFound();
   }

   return (
      <>
         <Header />
         <main>
            <section className="py-16 bg-linear-to-br from-blue-50 to-blue-100">
               <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center">
                     <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {district} Araç Yol Yardım
                     </h1>
                     <p className="text-xl text-gray-700">
                        {district}, İzmir'de 7/24 profesyonel yol yardım hizmeti
                     </p>
                  </div>
               </div>
            </section>

            <section className="py-16 bg-white">
               <div className="container mx-auto px-4 max-w-4xl">
                  <div className="prose max-w-none">
                     <h2 className="text-3xl font-bold mb-6">
                        {district} Bölgesinde Hizmetlerimiz
                     </h2>
                     <p className="text-lg text-gray-700 mb-6">
                        {district} ilçesinde ve çevresinde 7/24 kesintisiz araç
                        yol yardım hizmeti sunmaktayız. Deneyimli ekibimiz ve
                        modern ekipmanlarımızla {district}
                        &apos;da yolda kalan her sürücüye hızlı ve profesyonel
                        yardım sağlamaktayız.
                     </p>
                     <p className="text-lg text-gray-700 mb-8">
                        {district} bölgesinde ortalama 15-20 dakika içinde olay
                        yerine ulaşıyor, araç çekici, lastik tamiri, akü
                        takviyesi, araç kilidi açma gibi tüm yol yardım
                        ihtiyaçlarınıza anında çözüm üretiyoruz.
                     </p>

                     <h3 className="text-2xl font-bold mb-4">
                        {district}&apos;da Sunduğumuz Hizmetler
                     </h3>
                     <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {siteConfig.services.map((service) => (
                           <div
                              key={service.slug}
                              className="bg-blue-50 rounded-lg p-6">
                              <div className="text-4xl mb-3">
                                 {service.icon}
                              </div>
                              <h4 className="text-xl font-bold mb-2">
                                 {service.title}
                              </h4>
                              <p className="text-gray-700 mb-3">
                                 {service.description}
                              </p>
                              <Link
                                 href={`/hizmetler/${service.slug}`}
                                 className="text-blue-600 hover:underline font-medium">
                                 Detaylı Bilgi →
                              </Link>
                           </div>
                        ))}
                     </div>

                     <h3 className="text-2xl font-bold mb-4">
                        Neden {district}&apos;da Bizi Tercih Etmelisiniz?
                     </h3>
                     <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-start space-x-3">
                           <span className="text-green-600 text-xl shrink-0">
                              ✓
                           </span>
                           <span className="text-gray-700">
                              {district} bölgesinde 7/24 kesintisiz hizmet
                           </span>
                        </div>
                        <div className="flex items-start space-x-3">
                           <span className="text-green-600 text-xl shrink-0">
                              ✓
                           </span>
                           <span className="text-gray-700">
                              15-20 dakikada olay yerinde
                           </span>
                        </div>
                        <div className="flex items-start space-x-3">
                           <span className="text-green-600 text-xl shrink-0">
                              ✓
                           </span>
                           <span className="text-gray-700">
                              Profesyonel ve deneyimli ekip
                           </span>
                        </div>
                        <div className="flex items-start space-x-3">
                           <span className="text-green-600 text-xl shrink-0">
                              ✓
                           </span>
                           <span className="text-gray-700">
                              Modern araç ve ekipman
                           </span>
                        </div>
                        <div className="flex items-start space-x-3">
                           <span className="text-green-600 text-xl shrink-0">
                              ✓
                           </span>
                           <span className="text-gray-700">
                              Uygun ve şeffaf fiyatlandırma
                           </span>
                        </div>
                        <div className="flex items-start space-x-3">
                           <span className="text-green-600 text-xl shrink-0">
                              ✓
                           </span>
                           <span className="text-gray-700">
                              Müşteri memnuniyeti garantisi
                           </span>
                        </div>
                     </div>

                     <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-bold mb-3">
                           {district}&apos;da Acil Durumda Ne Yapmalısınız?
                        </h3>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                           <li>
                              Aracınızı güvenli bir yere çekin ve sinyal verin
                           </li>
                           <li>
                              Hemen bizi arayın: {siteConfig.contact.phone}
                           </li>
                           <li>Konumunuzu ve sorunun ne olduğunu bildirin</li>
                           <li>Güvenli bir yerde ekibimizi bekleyin</li>
                           <li>
                              Ekibimiz 15-20 dakika içinde yanınızda olacaktır
                           </li>
                        </ol>
                     </div>

                     <div className="bg-blue-600 text-white rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-4">
                           {district}&apos;da Acil Yol Yardım İçin
                        </h3>
                        <p className="text-xl mb-6 text-blue-100">
                           7/24 profesyonel hizmet - Hızlı müdahale garantisi
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                           <a
                              href={`tel:${siteConfig.contact.phone.replace(
                                 /\s/g,
                                 ''
                              )}`}
                              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors text-center">
                              📞 {siteConfig.contact.phone}
                           </a>
                           <a
                              href={siteConfig.social.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors text-center">
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
                     İzmir&apos;deki Diğer Hizmet Bölgelerimiz
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                     {siteConfig.districts
                        .filter((d) => d !== district)
                        .map((otherDistrict) => (
                           <Link
                              key={otherDistrict}
                              href={`/bolgeler/${slugifyTR(otherDistrict)}`}
                              className="border rounded-lg p-4 text-center bg-white hover:bg-blue-50 hover:border-blue-600 transition-all">
                              <span className="font-medium">
                                 {otherDistrict}
                              </span>
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
