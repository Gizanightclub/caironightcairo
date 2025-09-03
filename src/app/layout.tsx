import type { Metadata, Viewport } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// تحسين Viewport للجوال والأجهزة اللوحية
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fffcfcff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  colorScheme: 'dark light',
}

// تحسين metadata شامل لـ SEO
export const metadata: Metadata = {
  // العناوين الأساسية
  title: {
    default: "أفضل نايت كلوب و ديسكو  - احجز الآن بخصومات 25% | Night Club ",
    template: "%s | أفضل نايت كلوب في مصر"
  },
  description: "احجز في أفضل نايت كلوب في مصر بأرخص الأسعار! سهرات خليجية فاخرة، موسيقى حية، طاولات VIP، وخصومات تصل إلى 25%. اتصل الآن: 01286110562",

  // الكلمات المفتاحية المحسنة
  keywords: [
    // الكلمات المفتاحية الأساسية المحدثة 2025
    "نايت كلوب مصر", "أفضل نايت كلوب في مصر", " سهرات نايت كلوب", "اسعار نايت كلوب", "Night Club", "نايت كلوب", "ارخص نايت كلوب", "سهرات خليجي", "نايت", "سهرات ديسكو", "كباريه", "ديسكو", "nightclub", "نايت كلوب القاهره", "نايت كلوب في الجيزه",

    // المدن والمناطق المصرية - تحسين محلي
    "نايت كلوب القاهرة", "نايت كلوب الجيزة", "نايت كلوب العجوزة", "نايت كلوب العجوزه", "نايت كلوب الشيخ زايد", "نايت كلوب الهرم", "نايت كلوب التجمع الخامس", "نايت كلوب 6 أكتوبر", "نايت كلوب المعادي", "نايت كلوب الزمالك", "نايت كلوب المهندسين", "نايت كلوب مدينة نصر", "نايت كلوب مصر الجديدة", "نايت كلوب القاهرة الجديدة", "نايت كلوب الدقي",

    // كلمات بحث عربية تفصيلية
    "افضل نايت كلوب في القاهرة", "ارخص نايت كلوب في مصر", "اشهر نايت كلوب", "اجمل نايت كلوب", "ارقى نايت كلوب", "نايت كلوب راقي مصر", "نايت كلوب فخم", "نايت كلوب حديث", "نايت كلوب عصري", "حجز نايت كلوب", "اسعار نايت كلوب", "عروض نايت كلوب", "باقات نايت كلوب", "خصومات نايت كلوب",

    // English keywords for international visitors
    "nightclub Cairo 2025", "best nightclub Egypt", "nightclub Cairo", "VIP nightclub Egypt", "Cairo nightlife", "nightclub Giza", "Egypt nightclub VIP", "Cairo night entertainment", "premium nightclub Egypt", "exclusive nightclub Cairo", "upscale nightclub Egypt",

    // خدمات ومناسبات وفعاليات
    "حفلات ليلية مصر", "سهرات القاهرة", "ترفيه ليلي VIP", "حفلات خاصة", "مناسبات خاصة", "حفلات رقص", "DJ nights Egypt", "live music Cairo", "party nights Egypt", "VIP tables Egypt", "nightclub booking Egypt",

    // Social Media Presence
    "نايت كلوب انستقرام", "نايت كلوب تيك توك", "نايت كلوب فيسبوك", "viral nightclub Egypt", "Instagram worthy nightclub"
  ].join(", "),

  // معلومات المؤلف والناشر
  authors: [
    { name: "Night Club ", url: "https://nightclubcairo.vercel.app" }
  ],
  creator: "Night Club ",
  publisher: "Night Club ",

  // إعدادات الفهرسة
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

  // Open Graph للفيسبوك وتويتر
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://nightclubcairo.vercel.app/",
    siteName: "أفضل نايت كلوب في مصر",
    title: "أفضل نايت كلوب في مصر - احجز الآن بخصومات 25%",
    description: "استمتع بأفضل السهرات الخليجية في أجواء فاخرة مع موسيقى حية وخدمة VIP متميزة. احجز الآن واحصل على خصومات تصل إلى 25%",
    images: [
      {
        url: "https://nightclubcairo.vercel.app/images/nightclub7.jpeg",
        width: 1200,
        height: 630,
        alt: "أفضل نايت كلوب في مصر - سهرات خليجية ",
        type: "image/jpeg",
      },
      {
        url: "https://nightclubcairo.vercel.app/logo.png",
        width: 512,
        height: 512,
        alt: "لوجو نايت كلوب مصر",
        type: "image/png",
      }
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@nightclub_egypt",
    creator: "@nightclub_egypt",
    title: " نايت كلوب - احجز الآن",
    description: "استمتع بأفضل السهرات الخليجية والموسيقى الحية في أجواء فاخرة. احجز الآن: 01286110562",
    images: {
      url: "https://nightclubcairo.vercel.app/images/nightclub1.jpeg",
      alt: "أفضل نايت كلوب في مصر - سهرات خليجية",
    },
  },

  // معلومات إضافية للفهرسة
  category: "Entertainment",
  classification: "Nightclub, Entertainment, VIP Services",

  // روابط بديلة وcanonical
  alternates: {
    canonical: "https://nightclubcairo.vercel.app/",
    languages: {
      'ar': 'https://nightclubcairo.vercel.app/',
      'en': 'https://nightclubcairo.vercel.app/en',
    },
  },

  // معلومات التطبيق
  applicationName: "Night Club Egypt",
  generator: "Next.js 15",
  referrer: "origin-when-cross-origin",

  // إعدادات إضافية للأمان والأداء
  other: {
    'google-site-verification': 'vIFvNXtiEElV5o0_lQyVrK50RaetndJXR4Vu4Qc2ohc',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
    'fb:app_id': 'your-facebook-app-id',
  },

  // App Links للتطبيقات
  appLinks: {
    web: {
      url: 'https://nightclubcairo.vercel.app',
      should_fallback: true,
    },
  },

  // معلومات الاتصال
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        {/* Critical Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />

        {/* Favicons - محسن لجميع الأجهزة */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload Critical Resources */}
        <link
          rel="preload"
          href="/logo.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/mmas.jpg"
          as="image"
          type="image/jpeg"
        />

        {/* Critical CSS للتحسين */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                font-family: var(--font-cairo), Arial, sans-serif;
                background-color: #000;
                color: #fff;
              }
              .loading-screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
              }
              .sr-only:focus {
                position: static;
                width: auto;
                height: auto;
                padding: 0.5rem 1rem;
                margin: 0;
                overflow: visible;
                clip: auto;
                white-space: normal;
              }
            `
          }}
        />
      </head>

      <body
        className={`${cairo.variable} ${inter.variable} font-cairo antialiased bg-black text-white overflow-x-hidden`}
      >
        {/* Skip Links للـ Accessibility */}
        <div className="sr-only">
          <a href="#main-content" className="skip-link">
            الانتقال إلى المحتوى الرئيسي
          </a>
          <a href="#navigation" className="skip-link">
            الانتقال إلى القائمة الرئيسية
          </a>
        </div>

        {children}

        {/* Toast Notifications */}
        <Toaster
          position="top-center"
          richColors
          closeButton
          duration={5000}
        />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-70LH6MQ3QN"
          strategy="afterInteractive"
          async
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-70LH6MQ3QN', {
                page_title: document.title,
                page_location: window.location.href,
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `
          }}
        />

      
        {/* JSON-LD Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://nightclubcairo.vercel.app/#organization",
              "name": "Night Club Egypt",
              "url": "https://nightclubcairo.vercel.app/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nightclubcairo.vercel.app/logo.png",
                "width": 512,
                "height": 512
              },
              "image": "https://nightclubcairo.vercel.app/logo.png",
              "description": "أفضل نايت كلوب في مصر يقدم سهرات خليجية  وخدمات VIP متميزة",
              "telephone": "+201286110562",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "كورنيش النيل، العجوزة",
                "addressLocality": "الجيزة",
                "addressRegion": "القاهرة الكبرى",
                "postalCode": "11511",
                "addressCountry": "EG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.0666,
                "longitude": 31.2240
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "20:00",
                  "closes": "04:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100076355247481",
                "https://www.instagram.com/night_club_5star",
                "https://www.tiktok.com/@night.club993",
                "https://wa.me/201286110562"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+201286110562",
                "contactType": "customer service",
                "areaServed": "EG",
                "availableLanguage": ["Arabic", "English"]
              }
            })
          }}
        />

        {/* Service Worker Registration */}
        <Script
          id="service-worker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
