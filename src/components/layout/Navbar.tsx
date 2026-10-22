'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/i18n/context';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Globe, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { profileData } from '@/data/profile';
import { cn } from '@/lib/utils';

const SECTION_IDS = ['hero', 'projects', 'experience', 'skills', 'about', 'education', 'languages', 'recommendations', 'contact'];

export default function Navbar() {
  const { locale, t, setLanguage } = useI18n();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pt = locale === 'pt';

  const navItems = [
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'about', label: t.nav.about },
    { id: 'education', label: t.nav.education },
    { id: 'languages', label: t.nav.languages, secondary: true },
    { id: 'recommendations', label: t.nav.recommendations, secondary: true },
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

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection observer for section tracking
    const sections = SECTION_IDS.map(id => document.getElementById(id));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { root: null, rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      onKeyDown={e => {
        if (e.key === 'Escape' && mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200 border-b",
        scrolled || mobileMenuOpen
          ? "bg-bg-primary/85 backdrop-blur-md border-border-custom"
          : "bg-transparent border-transparent"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-accent-custom focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg-primary"
      >
        {pt ? 'Pular para o conteúdo' : 'Skip to content'}
      </a>

      {/* Scroll Progress Bar */}
      <div
        aria-hidden="true"
        className="h-px bg-accent-custom origin-left absolute top-0 left-0 w-full"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={handleNavClick}
          aria-label={`${profileData.name}, ${pt ? 'início' : 'home'}`}
          className="font-display font-bold text-lg tracking-tight min-h-11 inline-flex items-center hover:opacity-85 transition-opacity"
        >
          VE<span className="text-text-secondary">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label={pt ? 'Navegação principal' : 'Main navigation'} className="hidden lg:flex items-center gap-1">
          {navItems.filter(item => !item.secondary).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={handleNavClick}
              className={cn(
                "relative px-3 py-3 text-sm font-medium rounded-md transition-colors hover:text-text-primary",
                activeSection === item.id ? "text-text-primary" : "text-text-secondary"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-1.5 left-3 right-3 h-px bg-accent-custom"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Actions Controls (Resume + Lang + Theme + Hamburger) */}
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={profileData.cvUrl}
            download
            className="hidden lg:inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-border-strong px-3 text-sm font-medium hover:bg-bg-secondary transition-colors"
          >
            <Download className="size-3.5" />{pt ? 'Currículo' : 'Resume'}
          </a>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(locale === 'en' ? 'pt' : 'en')}
            className="min-h-11 px-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer flex items-center gap-2 text-sm"
            aria-label={pt ? 'Switch to English' : 'Mudar para português'}
          >
            <Globe className="w-4 h-4" />
            <span className="font-semibold uppercase text-xs">{locale}</span>
          </button>

          {/* Theme Selector Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="size-11 inline-flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
            aria-label={pt ? 'Alternar tema' : 'Toggle theme'}
          >
            {!mounted ? <span className="size-4" /> : resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="size-11 inline-flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors lg:hidden cursor-pointer"
            aria-label={pt ? 'Alternar menu' : 'Toggle menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label={pt ? 'Navegação móvel' : 'Mobile navigation'}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full inset-x-0 lg:hidden bg-bg-primary border-b border-border-custom px-4 sm:px-6 pt-2 pb-4 max-h-[calc(100dvh-4rem)] overflow-y-auto shadow-[0_24px_48px_-24px_rgb(0_0_0/0.5)]"
          >
            <ul className="grid sm:grid-cols-2 gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={activeSection === item.id ? 'location' : undefined}
                    onClick={handleNavClick}
                    className={cn(
                      "flex min-h-12 items-center text-base font-medium px-3 rounded-lg transition-colors",
                      activeSection === item.id
                        ? "bg-bg-secondary text-text-primary"
                        : "text-text-secondary hover:bg-bg-secondary/60 hover:text-text-primary"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profileData.cvUrl}
              download
              onClick={handleNavClick}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border-strong text-sm font-medium hover:bg-bg-secondary transition-colors"
            >
              <Download className="size-4" />{t.hero.downloadCV}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
