'use client';

import React from 'react';
import { useI18n } from '@/i18n/context';
import { languagesData } from '@/data/languages';
import Card from '../ui/Card';
import { Globe, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Languages() {
  const { locale, t } = useI18n();

  return (
    <section id="languages" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <h2 className="section-title">
          {t.languages.title}
        </h2>

        {/* Display as a horizontal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languagesData.map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
            >
              <Card className="flex flex-col gap-4 h-full">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="p-2 rounded-lg bg-accent-custom/5 text-accent-custom border border-accent-custom/10">
                      <Globe className="w-4 h-4" />
                    </span>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg text-text-primary">
                        {lang.name[locale]}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mt-1">
                        {lang.level[locale]}
                      </p>
                    </div>
                  </div>

                  {/* CEFR Level Tag */}
                  <span className="info-badge text-xs text-text-secondary shrink-0">
                    {t.languages.cefr}: {lang.cefr}
                  </span>
                </div>

                {/* Certificate verified link */}
                {lang.certificate && (
                  <div className="pt-2 border-t border-border-custom/30 mt-1 flex">
                    <a
                      href={lang.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-custom hover:underline underline-offset-4 rounded-md"
                    >
                      <Award className="w-3.5 h-3.5" />
                      {locale === 'pt' ? 'Ver certificado EF SET' : 'View EF SET certificate'}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
