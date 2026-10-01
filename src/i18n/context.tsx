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

  useEffect(() => {
    if (!mounted) return;
    const isPt = locale === 'pt';
    const title = isPt ? 'Victor Emanuel | Engenheiro de Software' : 'Victor Emanuel | Software Engineer';
    const description = isPt
      ? 'Engenheiro de Software desenvolvendo aplicações web, sistemas internos e automações com Next.js, TypeScript, Python, FastAPI e PostgreSQL.'
      : 'Software Engineer building web applications, internal systems and automation with Next.js, TypeScript, Python, FastAPI and PostgreSQL.';
    document.documentElement.lang = isPt ? 'pt-BR' : 'en';
    document.title = title;
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      document.querySelector(selector)?.setAttribute('content', description);
    }
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      document.querySelector(selector)?.setAttribute('content', title);
    }
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', isPt ? 'pt_BR' : 'en_US');
    document.querySelector('meta[property="og:locale:alternate"]')?.setAttribute('content', isPt ? 'en_US' : 'pt_BR');

    // Next.js can hydrate the static title after this effect on the first load.
    const observer = new MutationObserver(() => {
      if (document.title !== title) document.title = title;
    });
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [locale, mounted]);

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
