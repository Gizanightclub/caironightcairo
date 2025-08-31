import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Night Club نايت كلوب ديسكو",
  description:
    "نايت كلوب VIP في القاهرة - حفلات، عروض حية، نجوم، ترفيه، حجز طاولات، أفضل سهرة ليلية في مصر. استمتع بأجواء فاخرة وخدمة VIP.",
 keywords: [
    // الكلمات المفتاحية الأساسية المحدثة 2025 مع AI-powered keywords
    "نايت كلوب مصر 2025", "أفضل نايت كلوب في مصر", "ملهى ليلي VIP", "نادي ليلي فاخر", "Night Club Egypt", "احجز نايت كلوب", "حفلات ليلية فاخرة", "سهرات مميزة مصر",
    // المدن والمناطق المصرية - تحسين محلي Local SEO
    "نايت كلوب القاهرة", "نايت كلوب الجيزة", "نايت كلوب العجوزة", "نايت كلوب العجوزه", "نايت كلوب الشيخ زايد", "نايت كلوب الهرم",
    "نايت كلوب التجمع الخامس", "نايت كلوب 6 أكتوبر", "نايت كلوب المعادي", "نايت كلوب الزمالك", "نايت كلوب المهندسين",
    "نايت كلوب مدينة نصر", "نايت كلوب هليوبوليس", "نايت كلوب مصر الجديدة", "نايت كلوب القاهرة الجديدة", "نايت كلوب الدقي",
    "نايت كلوب جاردن سيتي", "نايت كلوب وسط البلد", "نايت كلوب كورنيش النيل", "نايت كلوب النيل",
    // كلمات بحث عربية تفصيلية Long-tail Arabic SEO
    "افضل نايت كلوب في القاهرة", "احسن نايت كلوب في مصر", "اشهر نايت كلوب", "اجمل نايت كلوب", "ارقى نايت كلوب",
    "نايت كلوب راقي مصر", "نايت كلوب فخم", "نايت كلوب حديث", "نايت كلوب مودرن", "نايت كلوب عصري",
    "حجز نايت كلوب مصر", "اسعار نايت كلوب", "عروض نايت كلوب", "باقات نايت كلوب", "خصومات نايت كلوب",
    // English keywords for tourists and international visitors
    "nightclub Cairo 2025", "best nightclub Egypt", "luxury nightclub Cairo", "VIP nightclub Egypt", "Cairo nightlife",
    "nightclub Giza", "nightclub Agouza", "nightclub Sheikh Zayed", "nightclub 6th October", "nightclub New Cairo",
    "nightclub Maadi", "nightclub Zamalek", "nightclub Mohandessin", "nightclub Heliopolis", "nightclub Nasr City",
    "Egypt nightclub VIP", "Cairo night entertainment", "Egypt nightlife scene", "premium nightclub Egypt",
    "exclusive nightclub Cairo", "upscale nightclub Egypt", "trendy nightclub Cairo", "modern nightclub Egypt",
    // خدمات ومناسبات وفعاليات Trending Event Keywords
    "حفلات ليلية مصر", "سهرات القاهرة", "ترفيه ليلي VIP", "حفلات خاصة", "مناسبات خاصة", "حفلات اعياد ميلاد",
    "فعاليات شركات", "حفلات زفاف", "احتفالات مصر", "مؤتمرات وفعاليات", "ترفيه شركات",
    "DJ nights Egypt", "live music Cairo", "party nights Egypt", "dance floor Cairo", "nightclub booking Egypt",
    "birthday parties Egypt", "corporate events Cairo", "wedding celebrations", "bachelor parties", "anniversary celebrations",
    // اتجاهات وتقنيات 2025 Trending & Tech Keywords
    "نايت كلوب تكنولوجي", "LED nightclub Egypt", "smart nightclub", "digital entertainment Egypt", "interactive nightlife",
    "نايت كلوب بتقنيات حديثة", "هولوجرام نايت كلوب", "نايت كلوب ثلاثي الأبعاد", "VR nightclub Egypt",
    "اضاءة ليد نايت كلوب", "صوتيات عالية الجودة", "نظام صوت متطور", "اضاءة ذكية",
    // السياحة والترفيه Tourism & Entertainment
    "السياحة الليلية مصر", "اماكن ترفيه ليلي", "كورنيش النيل ترفيه", "سياحة ترفيهية القاهرة",
    "Egypt tourist nightlife", "Cairo tourist attractions", "Egypt entertainment tourism", "Nile entertainment",
    "tourist nightclub Egypt", "visitor nightlife Cairo", "Egypt holiday nightlife", "Cairo vacation entertainment",
    // موسمية وتخصصية Seasonal & Specialized
    "نايت كلوب رأس السنة", "حفلات عيد الحب", "نايت كلوب رمضان", "حفلات العيد", "نايت كلوب الصيف",
    "new year nightclub Egypt", "valentine's day party", "summer nights Egypt", "weekend parties Cairo",
    "ladies night Egypt", "couples night Cairo", "group bookings nightclub", "VIP table booking",
    // Social Media & Digital Presence
    "نايت كلوب انستقرام", "نايت كلوب تيك توك", "نايت كلوب فيسبوك", "night club social media",
    "viral nightclub Egypt", "Instagram worthy nightclub", "TikTok famous nightclub", "social nightclub Cairo"
  ].join(", "),
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Night Club VIP" }],
  openGraph: {
    type: "website",
    url: "https://yourwebsite.com/",
    title: "Night Club VIP | أفضل نايت كلوب في القاهرة",
    description:
      "استمتع بأفضل سهرة ليلية في القاهرة مع حفلات مميزة وخدمة VIP فاخرة.",
    images: [
      {
        url: "https://yourwebsite.com/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Night Club VIP Cairo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Night Club VIP | أفضل نايت كلوب في القاهرة",
    description:
      "استمتع بأفضل سهرة ليلية في القاهرة مع حفلات مميزة وخدمة VIP فاخرة.",
    images: ["https://yourwebsite.com/cover.jpg"],
  },
  alternates: {
    canonical: "https://yourwebsite.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
       <meta name="google-site-verification" content="vIFvNXtiEElV5o0_lQyVrK50RaetndJXR4Vu4Qc2ohc" />
        {/* Favicon محسن لجميع الأجهزة والمتصفحات */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preload critical resources لتحسين LCP وتقليل blocking */}
        <link rel="preload" href="images/496297633_122132908394643264_7862667949279596569_n.jpg" as="image" type="image/jpeg" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Organization Logo JSON-LD for Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={({
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.nightclubegypt.com",
              logo: "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg",
            }),
          })}
        />

        {/* Critical CSS inline لتحسين FCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { font-family: var(--font-cairo), Arial, sans-serif; }
            .nightclub-loader {
              position: fixed; top: 50%; left: 50%;
              transform: translate(-50%, -50%);
              z-index: 9999;
            }
          `
        }} />
      </head>
      <body
        className={`${cairo.variable} ${inter.variable} font-cairo antialiased bg-black text-white overflow-x-hidden`}
      >
        {children}
        <Toaster />

        {/* 🔥 JSON-LD Schema */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NightClub",
              name: "Night Club VIP",
              image: "https://yourwebsite.com/logo.png",
              "@id": "https://yourwebsite.com/",
              url: "https://yourwebsite.com/",
              telephone: "+201012345678",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "نايل كورنيش، العجوزه شارع النيل",
                addressLocality: "القاهرة",
                addressRegion: "القاهرة",
                postalCode: "11511",
                addressCountry: "EG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.0666,
                longitude: 31.2240,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "20:00",
                  closes: "04:00",
                },
              ],
              sameAs: [
            "https://www.facebook.com/profile.php?id=61560900837183",
            "https://www.instagram.com/night_club_5star",
            "https://www.tiktok.com/@night.club993?_t=ZS-8yvVCVK9A5R&_r=1",
            "https://wa.me/201286110562?countryCode=20&countryName=EG&phoneNumber=1286110562",
            "https://maps.app.goo.gl/E5R8oXS1WQfgZ5W66",
            "https://www.nightclubegypt.com"

              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
