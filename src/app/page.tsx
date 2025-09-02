"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VideoCarousel from "@/components/VideoCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import ShareButtons from "@/components/ShareButtons";

export default function Home() {
  const [backgroundParticles, setBackgroundParticles] = useState<
    Array<{ left: string; top: string; delay: string; duration: string }>
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted to avoid hydration mismatch
    setMounted(true);

    // Generate background particles on client side only
    const particles = Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
    setBackgroundParticles(particles);
  }, []);

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[70] bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
      >
        الانتقال إلى المحتوى الرئيسي
      </a>

      <div className="min-h-screen bg-black text-white overflow-x-hidden" role="document">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main id="main-content" role="main" aria-label="المحتوى الرئيسي للموقع">
          {/* Hero Section */}
          <section id="home" aria-labelledby="hero-title">
            <HeroSection />
          </section>

          {/* About Section */}
          <section id="about" aria-labelledby="about-title">
            <About />
          </section>

          {/* Video Carousel Section */}
          <section id="videos" aria-labelledby="videos-title" className="bg-gradient-to-b from-black via-purple-900/10 to-black">
            <VideoCarousel />
          </section>

          {/* Gallery Section */}
          <section id="gallery" aria-labelledby="gallery-title">
            <Gallery />
          </section>

          {/* Pricing Section */}
          <section id="packages" aria-labelledby="packages-title">
            <Pricing />
          </section>

          {/* Contact Section */}
          <section id="contact" aria-labelledby="contact-title">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer role="contentinfo" aria-label="معلومات الاتصال وروابط الموقع">
          <Footer />
        </footer>

        {/* Fixed Elements */}
        {/* Floating WhatsApp Button */}
        <WhatsAppButton
          phoneNumber="201286110562"
          message="مرحباً، أود معرفة تفاصيل الحجز والأسعار في أفضل نايت كلوب مصر 🌟"
          position="bottom-right"
          showTooltip={true}
        />

        {/* Share Buttons - Fixed */}
        <div className="fixed bottom-6 left-6 z-40" role="complementary" aria-label="أزرار المشاركة الاجتماعية">
          <ShareButtons
            url="https://nightclubcairo.vercel.app"
            title="أفضل نايت كلوب في مصر - احجز الآن بخصومات 25%"
            description="استمتع بأفضل السهرات الخليجية والموسيقى الحية في أجواء فاخرة مع خدمة VIP متميزة"
            showLabels={false}
            size="lg"
          />
        </div>

        {/* Background Elements */}
        {mounted && (
          <div className="particles-bg" aria-hidden="true">
            {/* Floating particles for ambiance */}
            {backgroundParticles.map((particle, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-nightclub-purple/20 rounded-full animate-sparkle pointer-events-none"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        )}

        {/* Accessibility Enhancements */}
        {/* Screen reader announcements */}
        <div
          id="live-region"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
          role="status"
        />

        {/* Focus management for keyboard navigation */}
        <div
          id="focus-management"
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://nightclubcairo.vercel.app/#website",
                  "url": "https://nightclubcairo.vercel.app/",
                  "name": "أفضل نايت كلوب  ",
                  "description": "احجز في أفضل نايت كلوب في مصر بأرخص الأسعار مع خصومات تصل إلى 25%",
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://nightclubcairo.vercel.app/?s={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "ar"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://nightclubcairo.vercel.app/#webpage",
                  "url": "https://nightclubcairo.vercel.app/",
                  "name": "أفضل نايت كلوب في مصر - احجز الآن",
                  "isPartOf": {
                    "@id": "https://nightclubcairo.vercel.app/#website"
                  },
                  "description": "استمتع بأفضل السهرات الخليجية في أجواء فاخرة مع موسيقى حية وخدمة VIP",
                  "breadcrumb": {
                    "@id": "https://nightclubcairo.vercel.app/#breadcrumb"
                  },
                  "inLanguage": "ar"
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://nightclubcairo.vercel.app/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "الرئيسية",
                      "item": "https://nightclubcairo.vercel.app/"
                    }
                  ]
                },
                {
                  "@type": "NightClub",
                  "@id": "https://nightclubcairo.vercel.app/#nightclub",
                  "name": "Night Club Egypt",
                  "image": [
                    "https://nightclubcairo.vercel.app/logo.png",
                    "https://nightclubcairo.vercel.app/images/nightclub-hero.jpg"
                  ],
                  "description": "أفضل نايت كلوب في مصر يقدم أجواء فاخرة وموسيقى حية مع خدمات VIP متميزة",
                  "url": "https://nightclubcairo.vercel.app/",
                  "telephone": "+201286110562",
                  "priceRange": "750-2000 EGP",
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
                      "dayOfWeek": [
                        "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday", "Sunday"
                      ],
                      "opens": "20:00",
                      "closes": "04:00"
                    }
                  ],
                  "amenityFeature": [
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "VIP Tables",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Live Music",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Dance Floor",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Bar Service",
                      "value": true
                    }
                  ],
                  "sameAs": [
                    "https://www.facebook.com/profile.php?id=100076355247481",
                    "https://www.instagram.com/night_club_5star",
                    "https://www.tiktok.com/@night.club993",
                    "https://wa.me/201286110562"
                  ]
                }
              ]
            })
          }}
        />
      </div>
    </>
  );
}
