'use client';

import React, { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/context';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Laptop, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'education', 'recommendations', 'languages', 'books', 'contact'];

export default function Navbar() {
  const { locale, t, setLanguage } = useI18n();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'education', label: t.nav.education },
    { id: 'recommendations', label: t.nav.recommendations },
    { id: 'languages', label: t.nav.languages },
    { id: 'books', label: t.nav.books },
    { id: 'contact', label: t.nav.contact }
  ];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Scrolled state for backdrop blur
      setScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Intersection observer for section tracking
    const sections = SECTION_IDS.map(id => document.getElementById(id));
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [mounted]); // Re-run when locale changes to bind correct IDs

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      const offset = 80; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled 
          ? "bg-bg-primary/80 backdrop-blur-md border-border-custom" 
          : "bg-transparent border-transparent"
      )}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="h-1 bg-accent-custom origin-left transition-all duration-100 absolute top-0 left-0"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, 'about')}
          className="font-bold text-lg tracking-tight hover:opacity-85 transition-opacity"
        >
          VE<span className="text-accent-custom">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent-custom relative py-1",
                activeSection === item.id 
                  ? "text-accent-custom font-semibold" 
                  : "text-text-secondary"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span 
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-custom rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Actions Controls (Theme + Lang + Hamburger) */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(locale === 'en' ? 'pt' : 'en')}
            className="p-2 rounded-lg text-text-secondary hover:text-accent-custom hover:bg-bg-secondary transition-all cursor-pointer flex items-center gap-1.5 text-sm"
            aria-label="Switch Language"
          >
            <Globe className="w-4 h-4" />
            <span className="font-semibold uppercase text-xs">{locale}</span>
          </button>

          {/* Theme Selector Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg text-text-secondary hover:text-accent-custom hover:bg-bg-secondary transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-text-secondary hover:text-accent-custom hover:bg-bg-secondary transition-all lg:hidden cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-bg-primary border-b border-border-custom px-4 py-6 flex flex-col gap-4 overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn(
                  "text-base font-medium py-2 px-3 rounded-lg transition-colors",
                  activeSection === item.id 
                    ? "bg-bg-secondary text-accent-custom font-semibold" 
                    : "text-text-secondary hover:bg-bg-secondary/50 hover:text-text-primary"
                )}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
