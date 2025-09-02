"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Music, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";

const Gallery = () => {
  const [currentProgram, setCurrentProgram] = useState(0);
  const [currentPastEvent, setCurrentPastEvent] = useState(0);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string }>>([]);

  // Auto-slide للبرامج اليومية
  useEffect(() => {
    const interval = setInterval(() => {
      nextProgram();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentProgram]);

  // Auto-slide للحفلات السابقة
  useEffect(() => {
    const interval = setInterval(() => {
      nextPastEvent();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentPastEvent]);

  // بيانات البرامج اليومية
  const dailyPrograms = [
    "images/nightclubegypt.com (2).jpg",
    "images/nightclubegypt.com (6).jpg",
    "images/nightclubegypt.com (9).jpg",
    "images/nightclubegypt.com (15).jpg",
    "images/nightclubegypt.com.jpg",
  ];

  // بيانات الحفلات السابقة
  const pastEvents = [
    "images/نايت كلوب العجزه.jpg",
    "images/nightclub1.jpeg",
    "images/nightclub0.jpeg",
    "images/nightclub3.jpeg",
    "images/nightclub4.jpeg",
    "images/nightclub5.jpeg",
    "images/nightclub6.jpeg",
    "images/nightclub7.jpeg",
    "images/nightclub8.jpeg",
    "images/nightclub9.jpeg",
    "images/نايت كلوب العجزه3.jpg",
  ];

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(newParticles);
  }, []);

  const nextProgram = () => {
    setCurrentProgram((prev) => (prev + 1) % dailyPrograms.length);
  };

  const prevProgram = () => {
    setCurrentProgram((prev) => (prev - 1 + dailyPrograms.length) % dailyPrograms.length);
  };

  const nextPastEvent = () => {
    setCurrentPastEvent((prev) => (prev + 1) % pastEvents.length);
  };

  const prevPastEvent = () => {
    setCurrentPastEvent((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
  };

  return (
    <section id="gallery" className="relative min-h-screen py-10 md:py-20 bg-black overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
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

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
            <span className="text-yellow-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-yellow-400 sm:to-yellow-600">
              معرض
            </span>
      
            <span className="block text-yellow-400 text-2xl md:text-4xl mt-2">الفعاليات والحفلات</span>
          </h2>
        </motion.div>

         

        {/* البرامج اليومية */}
        <div className="mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-8"
          >
            <Music className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            <h3 className="text-xl md:text-3xl font-bold text-white">البرامج اليومية</h3>
            <Calendar className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="relative h-[50vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl bg-black/50 border-2 border-purple-500/30">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentProgram}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={dailyPrograms[currentProgram]}
                      alt={`برنامج يومي ${currentProgram + 1}`}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain"
                      quality={100}
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <Button
                onClick={prevProgram}
                variant="ghost"
                size="icon"
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-9 md:h-9 rounded-full bg-black/70 border border-purple-500/30 hover:bg-purple-500/20"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              </Button>

              <Button
                onClick={nextProgram}
                variant="ghost"
                size="icon"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-9 md:h-9 rounded-full bg-black/70 border border-purple-500/30 hover:bg-purple-500/20"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              </Button>
            </div>
          </div>
        </div>

        {/* الحفلات السابقة */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-8"
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
            <h3 className="text-xl md:text-3xl font-bold text-white">حفلاتنا السابقة</h3>
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="relative h-[50vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl bg-black/50 border-2 border-purple-500/30">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentPastEvent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={pastEvents[currentPastEvent]}
                      alt={`حفلة سابقة ${currentPastEvent + 1}`}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain"
                      quality={100}
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <Button
                onClick={prevPastEvent}
                variant="ghost"
                size="icon"
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-9 md:h-9 rounded-full bg-black/70 border border-purple-500/30 hover:bg-purple-500/20"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              </Button>

              <Button
                onClick={nextPastEvent}
                variant="ghost"
                size="icon"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-9 md:h-9 rounded-full bg-black/70 border border-purple-500/30 hover:bg-purple-500/20"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;