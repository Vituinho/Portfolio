'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en, Translations } from './en';
import { pt } from './pt';

type Language = 'en' | 'pt';

interface I18nContextType {
  locale: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Language;
    if (saved === 'en' || saved === 'pt') {
      setLocale(saved);
    } else {
      const isPt = typeof navigator !== 'undefined' && navigator.language.startsWith('pt');
      setLocale(isPt ? 'pt' : 'en');
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLocale(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  // Fallback to English translation set if not mounted to prevent Server-Client mismatches
  const t = mounted && locale === 'pt' ? pt : en;

  return (
    <I18nContext.Provider value={{ locale, t, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
