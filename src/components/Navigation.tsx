
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Menu,
  X,
  Home,
  Star,
  // Calendar,
  DollarSign,
  Phone,
  Music,
  User,
} from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const navItems = [
    { name: "الرئيسية", href: "#home", icon: Home },
    { name: "عن النادي", href: "#about", icon: Star },
    { name: "المعرض", href: "#gallery", icon: Music },
    // { name: "البرامج", href: "#programs", icon: Calendar },
    { name: "الباقات", href: "#packages", icon: DollarSign },
    { name: "التواصل", href: "#contact", icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-purple-500/30"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-14">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              {/* لوجو داخل دائرة متجاوبة */}
              <div className="relative lg:left-0 left-8 w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-fuchsia-500 bg-white/10 p-1 shadow-lg ">
                <Image
                  src="/logo.png"
                  alt="Night Party Logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* اسم الموقع ووصف صغير */}
              <div className="text-right hidden sm:block">
                <div className="text-lg sm:text-xl font-bold text-yellow-400 drop-shadow-md">
                  Night Party
                </div>
                <div className="text-xs sm:text-sm text-white">
                  اجمل سهرات خليجي
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <>
                <div className="hidden lg:flex items-center gap-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-yellow-400 transition-all duration-200"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium text-sm">{item.name}</span>
                    </motion.button>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-5 py-2 rounded-full hover:scale-105 transition-all duration-300"
                  >
                    احجز الآن
                    <User className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="absolute left-0 ml-8 text-white hover:bg-purple-500/10 hover:text-white"
              >
                {isOpen ? (
                  <X className="w-10 h-10" size={14} />
                ) : (
                  <Menu className="w-10 h-10" size={14} />
                )}
              </Button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-72 bg-black/95 backdrop-blur-xl border-l border-purple-500/30 z-50 lg:hidden"
          >
            <div className="p-5 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="relative w-10 h-10 rounded-full border-2 border-fuchsia-500 bg-white/10 p-1 shadow-lg lg:block">
                  <Image
                    src="/logo.png"
                    alt="Night Party Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-yellow-400">
                    Night Club
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center justify-end gap-3 w-full p-3 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-purple-500/10 transition-all duration-200 text-right"
                  >
                    <span className="font-medium">{item.name}</span>
                    <item.icon className="w-4 h-4" />
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto"
              >
                <Button
                  onClick={() => {
                    scrollToSection("#contact");
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg hover:scale-105 transition-all duration-300"
                >
                  احجز الآن
                  <User className="w-4 h-4 mr-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
