import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { siteConfig } from '@/config/site.config';
import { slugifyTR } from '@/lib/slugify';
import Link from 'next/link';

export default function Page() {
   return (
      <>
         <Header />
         <main>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-[#0b1e3a] via-[#0f2f63] to-[#123b77] text-white">
               <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#1e90ff_0,#1e90ff_12%,transparent_35%)]" />
               <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_30%,#7dd3fc_0,#7dd3fc_10%,transparent_35%)]" />
               <div className="container mx-auto px-4 py-16 md:py-24 relative">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                           ⚡ 7/24 Acil Yol Yardım
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-sm">
                           İzmir'de Anında Araç Yol Yardım
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                           Çekici, lastik tamiri, akü takviyesi, kilit açma ve
                           yakıt ikmali için profesyonel ekip, modern ekipman ve
                           ortalama 15-20 dakikada müdahale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                           <a
                              href={`tel:${siteConfig.contact.phone.replace(
                                 /\s/g,
                                 ''
                              )}`}
                              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-blue-900 shadow-lg shadow-black/15 transition hover:-translate-y-px hover:shadow-xl">
                              📞 {siteConfig.contact.phone}
                           </a>
                           <a
                              href={siteConfig.social.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-px hover:bg-green-600 hover:shadow-xl">
                              💬 WhatsApp ile İletişim
                           </a>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                           {[
                              { label: 'Hızlı Müdahale', value: '15-20 dk' },
                              { label: 'Hizmet Süresi', value: '7/24' },
                              { label: 'Araç Tipi', value: 'Tüm sınıflar' },
                              { label: 'Memnuniyet', value: '%98+' },
                           ].map((item) => (
                              <div
                                 key={item.label}
                                 className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                                 <div className="text-xs uppercase tracking-wide text-white/60">
                                    {item.label}
                                 </div>
                                 <div className="text-lg font-semibold">
                                    {item.value}
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="relative">
                        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-blue-900/30 backdrop-blur">
                           <div className="grid grid-cols-2 gap-4 text-sm text-white/90">
                              {[
                                 'Araç Çekici',
                                 'Akü Takviyesi',
                                 'Lastik Tamiri',
                                 'Yakıt İkmali',
                                 'Kilit Açma',
                                 'Oto Elektrik',
                              ].map((tag) => (
                                 <div
                                    key={tag}
                                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-center">
                                    {tag}
                                 </div>
                              ))}
                           </div>
                           <div className="mt-6 rounded-2xl bg-white text-blue-900 p-5 shadow-lg">
                              <div className="text-sm font-semibold text-blue-700">
                                 Acil Destek Hattı
                              </div>
                              <div className="text-2xl font-bold mt-1">
                                 {siteConfig.contact.phone}
                              </div>
                              <p className="text-sm text-blue-800/80 mt-2">
                                 Konumunuzu paylaşın, en yakın ekibimizi
                                 yönlendirelim. İzmir genelinde hızlı erişim.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Acil Destek Akışı */}
            <section className="py-12 md:py-16 bg-white">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-10">
                     <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Dakika Dakika Destek Akışı
                     </h2>
                     <p className="text-gray-600 max-w-2xl mx-auto">
                        Tek aramayla süreci başlatın, konumunuzu alın ve en
                        yakın ekibimizi yönlendirelim. Tüm adımları şeffaf
                        biçimde paylaşırız.
                     </p>
                  </div>

                  <div className="grid gap-4 md:gap-6 md:grid-cols-4">
                     {[
                        {
                           step: '01',
                           title: 'Arayın',
                           desc: `${siteConfig.contact.phone} hattından 7/24 ulaşın`,
                        },
                        {
                           step: '02',
                           title: 'Konum & Sorun',
                           desc: 'Konumunuzu ve ihtiyacınızı alın; en yakın ekibi seçeriz',
                        },
                        {
                           step: '03',
                           title: 'Yola Çıkış',
                           desc: '15-20 dk ortalama varış süresini ve canlı durumu paylaşırız',
                        },
                        {
                           step: '04',
                           title: 'Çözüm',
                           desc: 'Çekici, akü takviyesi, lastik veya kilit açma için yerinde çözüm',
                        },
                     ].map((item) => (
                        <div
                           key={item.step}
                           className="relative overflow-hidden rounded-2xl border border-slate-100 bg-linear-to-br from-slate-50 to-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                           <div className="absolute right-4 top-4 text-4xl font-black text-blue-100">
                              {item.step}
                           </div>
                           <div className="relative">
                              <h3 className="text-lg font-bold text-slate-900 mb-2">
                                 {item.title}
                              </h3>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                 {item.desc}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Hizmetler */}
            <section className="py-16 md:py-20 bg-white">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Hizmetlerimiz
                     </h2>
                     <p className="text-gray-600 text-lg">
                        İzmir genelinde sunduğumuz profesyonel yol yardım
                        hizmetleri
                     </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {siteConfig.services.map((service) => (
                        <div
                           key={service.slug}
                           className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
                           <div className="absolute inset-x-0 -top-16 h-32 bg-linear-to-br from-blue-50 to-cyan-50 blur-3xl opacity-80" />
                           <div className="relative flex items-start gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                                 {service.icon}
                              </div>
                              <div className="flex-1">
                                 <h3 className="text-xl font-bold text-slate-900">
                                    {service.title}
                                 </h3>
                                 <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                    {service.description}
                                 </p>
                              </div>
                           </div>
                           <div className="relative mt-5 flex items-center justify-between text-sm">
                              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">
                                 ⚡ 7/24
                              </span>
                              <Link
                                 href={`/hizmetler/${service.slug}`}
                                 className="text-blue-700 font-semibold hover:text-blue-900">
                                 Detaylı Bilgi →
                              </Link>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Neden Biz */}
            <section className="py-16 md:py-20 bg-gray-50">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Neden Bizi Seçmelisiniz?
                     </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        {
                           icon: '⏰',
                           title: '7/24 Hizmet',
                           desc: 'Gece gündüz demeden her an yanınızdayız.',
                        },
                        {
                           icon: '🚀',
                           title: 'Hızlı Müdahale',
                           desc: 'İzmir merkezinde ortalama 15-20 dakikada olay yerindeyiz.',
                        },
                        {
                           icon: '👨‍🔧',
                           title: 'Profesyonel Ekip',
                           desc: 'Deneyimli, sertifikalı teknisyen ve modern ekipman.',
                        },
                        {
                           icon: '💰',
                           title: 'Şeffaf Fiyat',
                           desc: 'Sürpriz yok: şeffaf ve rekabetçi fiyatlandırma.',
                        },
                     ].map((item) => (
                        <div
                           key={item.title}
                           className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                           <div className="absolute inset-x-0 -top-10 h-24 bg-linear-to-br from-blue-50 to-slate-50 blur-2xl" />
                           <div className="relative flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-600/30">
                                 {item.icon}
                              </div>
                              <div>
                                 <h3 className="text-lg font-bold text-slate-900">
                                    {item.title}
                                 </h3>
                                 <p className="text-sm text-slate-600 leading-relaxed">
                                    {item.desc}
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Hizmet Bölgeleri */}
            <section className="py-16 md:py-20 bg-white">
               <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        İzmir Genelinde Hizmet Veriyoruz
                     </h2>
                     <p className="text-gray-600 text-lg">
                        İzmir'in tüm ilçelerinde yol yardım hizmeti sunuyoruz
                     </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                     {siteConfig.districts.map((district) => (
                        <Link
                           key={district}
                           href={`/bolgeler/${slugifyTR(district)}`}
                           className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-center text-sm font-semibold text-slate-800 transition hover:-translate-y-px hover:border-blue-500 hover:bg-blue-50">
                           {district}
                        </Link>
                     ))}
                  </div>
               </div>
            </section>

            {/* SSS */}
            <section className="py-16 md:py-20 bg-gray-50">
               <div className="container mx-auto px-4 max-w-4xl">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Sık Sorulan Sorular
                     </h2>
                     <p className="text-gray-600">
                        En çok merak edilenleri hızlıca yanıtladık.
                     </p>
                  </div>
                  <div className="grid gap-4 md:gap-6">
                     {[
                        {
                           q: 'Kaç dakikada olay yerine geliyorsunuz?',
                           a: 'İzmir merkez ve yakın ilçelerde ortalama 15-20 dakikada, uzak bölgelerde trafik yoğunluğuna göre 25-35 dakikada ulaşıyoruz.',
                        },
                        {
                           q: 'Hangi saatlerde hizmet veriyorsunuz?',
                           a: 'Haftanın 7 günü, günün 24 saati kesintisiz hizmet veriyoruz.',
                        },
                        {
                           q: 'Fiyatlar nasıl belirleniyor?',
                           a: 'Mesafe, hizmet türü ve araç tipine göre şeffaf fiyatlandırma yapıyoruz. Aramadan önce net bilgi paylaşıyoruz.',
                        },
                        {
                           q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
                           a: 'Nakit, kredi kartı ve havale ile ödeme alıyoruz. Kurumsal talepler için fatura düzenlenir.',
                        },
                     ].map((item) => (
                        <div
                           key={item.q}
                           className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                           <div className="flex items-start gap-3">
                              <span className="text-blue-600 text-xl">?</span>
                              <div>
                                 <h3 className="text-lg font-semibold text-slate-900">
                                    {item.q}
                                 </h3>
                                 <p className="text-slate-600 mt-1 leading-relaxed">
                                    {item.a}
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-linear-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
               <div className="container mx-auto px-4 text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold drop-shadow-sm">
                     Yolda Mı Kaldınız? Hemen Arayın!
                  </h2>
                  <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                     En yakın ekibimizi anında yönlendiriyoruz. İzmir genelinde
                     hızlı ve güvenli müdahale.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                     <a
                        href={`tel:${siteConfig.contact.phone.replace(
                           /\s/g,
                           ''
                        )}`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-blue-800 shadow-lg shadow-black/15 transition hover:-translate-y-px hover:shadow-xl">
                        📞 {siteConfig.contact.phone}
                     </a>
                     <a
                        href={siteConfig.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-px hover:bg-green-600 hover:shadow-xl">
                        💬 WhatsApp
                     </a>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
