import { siteConfig } from '@/config/site.config';
import { slugifyTR } from '@/lib/slugify';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
   const baseUrl = siteConfig.url;

   // Ana sayfalar
   const staticPages: MetadataRoute.Sitemap = [
      {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: 'daily',
         priority: 1,
      },
      {
         url: `${baseUrl}/hizmetler`,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.9,
      },
      {
         url: `${baseUrl}/hakkimizda`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
      },
      {
         url: `${baseUrl}/iletisim`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.8,
      },
   ];

   // Hizmet sayfaları
   const servicePages: MetadataRoute.Sitemap = siteConfig.services.map(
      (service) => ({
         url: `${baseUrl}/hizmetler/${service.slug}`,
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 0.8,
      })
   );

   // Bölge sayfaları
   const districtPages: MetadataRoute.Sitemap = siteConfig.districts.map(
      (district) => ({
         url: `${baseUrl}/bolgeler/${slugifyTR(district)}`,
         lastModified: new Date(),
         changeFrequency: 'weekly' as const,
         priority: 0.7,
      })
   );

   return [...staticPages, ...servicePages, ...districtPages];
}
