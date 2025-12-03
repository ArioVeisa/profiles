'use client';

import { Manrope } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const manrope = Manrope({
  weight: ['500', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <title>Ario Veisa - Security Research & Business Development Expert | Indonesia</title>
        <meta name="description" content="Ario Veisa adalah Security Research & Business Development expert di Indonesia. Spesialisasi dalam cybersecurity, web development, dan business consulting dengan pengalaman 250+ proyek." />
        <meta name="keywords" content="security research, business development, cybersecurity, web development, Indonesia, digital forensic, security researcher" />
        <meta name="author" content="Ario Veisa" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Indonesian" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arioveisaa.me/" />
        <meta property="og:title" content="Ario Veisa - Security Research & Business Development Expert" />
        <meta property="og:description" content="Security Research & Business Development expert di Indonesia. Spesialisasi cybersecurity, web development, dan business consulting." />
        <meta property="og:image" content="https://arioveisaa.me/assets/images/hero-img.jpg" />
        <meta property="og:site_name" content="Ario Veisa Portfolio" />
        <meta property="og:locale" content="id_ID" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://arioveisaa.me/" />
        <meta property="twitter:title" content="Ario Veisa - Security Research & Business Development Expert" />
        <meta property="twitter:description" content="Security Research & Business Development expert di Indonesia. Spesialisasi cybersecurity, web development, dan business consulting." />
        <meta property="twitter:image" content="https://arioveisaa.me/assets/images/hero-img.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#c7b1dd" />
        <meta name="msapplication-TileColor" content="#c7b1dd" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ario Veisa" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://arioveisaa.me/" />
        
        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" sizes="64x64" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect untuk performa */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://unpkg.com" />
        
        {/* DNS Prefetch untuk performa */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preload resource penting */}
        <link rel="preload" href="/assets/css/style.css" as="style" />
        <link rel="preload" href="/assets/images/hero-img.jpg" as="image" />
        <link rel="preload" href="/assets/images/logo-dark.svg" as="image" />
        
        {/* Stylesheet */}
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ario Veisa",
              "jobTitle": "Security Research & Business Development",
              "description": "Security Research & Business Development expert di Indonesia",
              "url": "https://arioveisaa.me",
              "image": "https://arioveisaa.me/assets/images/hero-img.jpg",
              "sameAs": [
                "https://twitter.com/arioveisa",
                "https://facebook.com/arioveisa",
                "https://instagram.com/arioveisa",
                "https://youtube.com/@arioveisa"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID",
                "addressLocality": "Indonesia"
              },
              "knowsAbout": [
                "Cybersecurity",
                "Web Development",
                "Business Development",
                "Digital Forensic",
                "Security Research"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Minetech.io"
              }
            })
          }}
        />
      </head>
      <body className={manrope.className}>
        {children}
        
        {/* Ionicons Scripts */}
        <Script 
          type="module" 
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          crossOrigin="anonymous"
        />
        <Script 
          noModule 
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          crossOrigin="anonymous"
        />
        
        {/* Custom Script */}
        <Script src="/assets/js/script.js" />
        
        {/* Google Analytics (opsional) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
