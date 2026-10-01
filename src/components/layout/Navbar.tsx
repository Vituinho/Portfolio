'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/i18n/context';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
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

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  if (!mounted) return null;

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
        scrolled 
          ? "bg-bg-primary/95 backdrop-blur-sm border-border-custom"
          : "bg-transparent border-transparent"
      )}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="h-px bg-accent-custom origin-left transition-[width] duration-100 absolute top-0 left-0"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a 
          href="#hero"
          onClick={handleNavClick}
          className="font-semibold text-lg tracking-tight min-h-11 inline-flex items-center hover:opacity-85 transition-opacity"
        >
          VE<span className="text-accent-custom">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label={locale === 'pt' ? 'Navegação principal' : 'Main navigation'} className="hidden lg:flex items-center gap-5">
          {navItems.filter(item => !item.secondary).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={handleNavClick}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent-custom relative py-3",
                activeSection === item.id 
                  ? "text-accent-custom"
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
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(locale === 'en' ? 'pt' : 'en')}
            className="min-h-11 px-3 rounded-lg text-text-secondary hover:text-accent-custom hover:bg-bg-secondary transition-colors cursor-pointer flex items-center gap-2 text-sm"
            aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para português'}
          >
            <Globe className="w-4 h-4" />
            <span className="font-semibold uppercase text-xs">{locale}</span>
          </button>

          {/* Theme Selector Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="size-11 inline-flex items-center justify-center rounded-lg text-text-secondary hover:text-accent-custom hover:bg-bg-secondary transition-colors cursor-pointer"
            aria-label={locale === 'pt' ? 'Alternar tema' : 'Toggle theme'}
          >
            {resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="size-11 inline-flex items-center justify-center rounded-lg text-text-secondary hover:text-accent-custom hover:bg-bg-secondary transition-colors lg:hidden cursor-pointer"
            aria-label={locale === 'pt' ? 'Alternar menu' : 'Toggle menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={locale === 'pt' ? 'Navegação móvel' : 'Mobile navigation'}
          className="absolute top-full inset-x-0 lg:hidden bg-bg-primary border-b border-border-custom px-4 sm:px-6 py-3 flex flex-col gap-1 max-h-[calc(100dvh-4rem)] overflow-y-auto shadow-sm"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={handleNavClick}
              className={cn(
                "min-h-11 text-sm font-medium py-3 px-3 rounded-lg transition-colors",
                activeSection === item.id
                  ? "bg-bg-secondary text-accent-custom font-semibold"
                  : "text-text-secondary hover:bg-bg-secondary/50 hover:text-text-primary"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
