import { siteConfig } from '@/config/site.config';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import '../styles/globals.css';

export const poppins = Poppins({
   subsets: ['latin'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
   variable: '--font-poppins',
});

export const metadata: Metadata = {
   title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
   },
   description: siteConfig.description,
   keywords: siteConfig.keywords,
   authors: [
      {
         name: siteConfig.author,
      },
   ],
   creator: siteConfig.creator,
   metadataBase: new URL(siteConfig.url),
   openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
         {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: siteConfig.name,
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: '@izmiryolyardim',
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },
   icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
   },
   manifest: '/site.webmanifest',
};

export default function Layout({ children }: { children: ReactNode }) {
   return (
      <html lang="tr">
         <head>
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(siteConfig.jsonLd),
               }}
            />
         </head>
         <body className={poppins.className}>{children}</body>
      </html>
   );
}
