'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { I18nProvider } from '@/i18n/context';
import { MotionConfig } from 'framer-motion';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user"><I18nProvider>
        {children}
      </I18nProvider></MotionConfig>
    </ThemeProvider>
  );
}
