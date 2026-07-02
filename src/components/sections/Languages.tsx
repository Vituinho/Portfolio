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
    <section id="languages" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-text-primary mb-12 relative pb-3 border-b border-border-custom max-w-max">
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
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-accent-custom/5 text-accent-custom border border-accent-custom/10">
                      <Globe className="w-4 h-4" />
                    </span>
                    <div className="text-left">
                      <h3 className="font-extrabold text-base text-text-primary">
                        {lang.name[locale]}
                      </h3>
                      <p className="text-xs text-text-secondary">
                        {lang.level[locale]}
                      </p>
                    </div>
                  </div>

                  {/* CEFR Level Tag */}
                  <span className="px-2.5 py-1 rounded bg-bg-secondary border border-border-custom/50 text-xs text-text-primary font-bold shadow-sm">
                    {t.languages.cefr}: {lang.cefr}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="flex flex-col gap-1.5 mt-2">
                  <div className="w-full h-2 bg-bg-secondary rounded-full overflow-hidden border border-border-custom/30">
                    <motion.div 
                      className="h-full bg-accent-custom rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Certificate verified link */}
                {lang.certificate && (
                  <div className="pt-2 border-t border-border-custom/30 mt-1 flex">
                    <a
                      href={lang.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-custom hover:underline"
                    >
                      <Award className="w-3.5 h-3.5" />
                      View Verification Certificate
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
