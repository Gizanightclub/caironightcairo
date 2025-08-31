"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles, Music, Users, Crown } from "lucide-react";

const HeroSection = () => {
  const [particles, setParticles] = useState<
    Array<{ left: string; top: string; delay: string }>
  >([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-sparkle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center mt-5 lg:mt-0 lg:text-right">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <Badge className=" bg-black/50 lg:px-6 lg:py-2 py-2 px-4 lg:text-lg text-md border border-purple-500/50 text-purple-300">
                <Crown className="w-5 h-5 ml-2 text-yellow-400" />
                النادي الأول في القاهرة
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
            >
              <span className="text-yellow-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-yellow-400 sm:to-yellow-600">
                Night Club
              </span>
              <span className="text-yellow-400">VIP</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg mb-6 text-gray-300 leading-relaxed"
            >
               عاوز تسهر في افضل السهرات خليجي في مستوي مصر مستني اي احجز دلوقني 
              <br />
              حفلات خليحي • بروجرم كل يوم •  خصومات كل يوم
              <br />
              01286110562
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg px-6 py-5 rounded-full hover:scale-105 transition-all"
              >
                احجز الآن مع خصومات تبدأ من 20 %
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Features & Social Proof */}
          {!isMobile && (
            <div className="space-y-8">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Music, text: "موسيقى حية", bg: "bg-purple-500/10" },
                  { icon: Users, text: "5000+ عميل", bg: "bg-yellow-400/10" },
                  {
                    icon: Sparkles,
                    text: "أجواء فاخرة",
                    bg: "bg-purple-500/10",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl ${feature.bg} border border-purple-500/30 h-full`}
                  >
                    <feature.icon className="w-8 h-8 mb-2 text-yellow-400" />
                    <span className="text-white text-sm md:text-base text-center">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-4 rounded-xl border border-yellow-400/30 flex flex-col items-center justify-center"
                >
                  <Crown className="w-8 h-8 mb-2 text-yellow-400" />
                  <span className="text-white text-sm md:text-base text-center">
                    طاولات VIP
                  </span>
                </motion.div>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-black/50 p-6 rounded-xl border border-purple-500/30"
              >
                <h3 className="text-yellow-400 text-lg font-bold mb-4 text-center">
                  يثق بنا الآلاف
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      5000+
                    </div>
                    <div className="text-gray-300 text-sm">عميل سعيد</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      100+
                    </div>
                    <div className="text-gray-300 text-sm">حفلة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      24/7
                    </div>
                    <div className="text-gray-300 text-sm">خدمة عملاء</div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>

        {/* Mobile Version - Features & Social Proof */}
        {isMobile && (
          <div className="mt-12 space-y-8">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Music, text: "موسيقى حية", bg: "bg-purple-500/10" },
                { icon: Users, text: "5000+ عميل", bg: "bg-yellow-400/10" },
                { icon: Sparkles, text: "أجواء فاخرة", bg: "bg-purple-500/10" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl ${feature.bg} border border-purple-500/30 h-full`}
                >
                  <feature.icon className="w-8 h-8 mb-2 text-yellow-400" />
                  <span className="text-white text-sm md:text-base text-center">
                    {feature.text}
                  </span>
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-4 rounded-xl border border-yellow-400/30 flex flex-col items-center justify-center"
              >
                <Crown className="w-8 h-8 mb-2 text-yellow-400" />
                <span className="text-white text-sm md:text-base text-center">
                  طاولات VIP
                </span>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-black/50 p-6 rounded-xl border border-purple-500/30"
            >
              <h3 className="text-yellow-400 text-lg font-bold mb-4 text-center">
                يثق بنا الآلاف
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    5000+
                  </div>
                  <div className="text-gray-300 text-sm">عميل سعيد</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">100+</div>
                  <div className="text-gray-300 text-sm">حفلة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                  <div className="text-gray-300 text-sm">خدمة عملاء</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
