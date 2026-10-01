'use client';

import React from 'react';
import { useI18n } from '@/i18n/context';
import { recommendationsData } from '@/data/recommendations';
import Card from '../ui/Card';
import { Quote, Linkedin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Recommendations() {
  const { locale, t } = useI18n();

  return (
    <section id="recommendations" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <h2 className="section-title">
          {t.recommendations.title}
        </h2>

        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendationsData.map((rec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
            >
              <Card className="relative flex flex-col h-full justify-between gap-6 overflow-hidden">
                {/* Visual quote mark indicator */}
                <Quote aria-hidden="true" className="absolute right-4 top-4 w-12 h-12 text-accent-custom/5 pointer-events-none" />

                {/* Testimonial Quote */}
                <p className="max-w-[65ch] text-text-secondary text-sm leading-7 z-10">
                  &ldquo;{rec.testimonial[locale]}&rdquo;
                </p>

                {/* Author Info block */}
                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 border-t border-border-custom pt-4 mt-auto">
                  <div className="flex items-start gap-3 min-w-0">
                    {/* Recommendation Photo */}
                    <div className="size-10 shrink-0 rounded-lg border border-border-custom bg-bg-secondary overflow-hidden relative select-none">
                      {rec.photo ? (
                        <Image
                          src={rec.photo}
                          alt={rec.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-xs text-text-secondary">
                          {rec.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>

                    <div className="text-left min-w-0">
                      <h3 className="font-medium text-sm text-text-primary">
                        {rec.name}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed mt-1">
                        {rec.position[locale]} {locale === 'pt' ? 'na' : 'at'} <span className="font-semibold text-accent-custom">{rec.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-text-secondary flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {rec.date}
                    </span>
                    {rec.linkedin && (
                      <a
                        href={rec.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-11 inline-flex items-center justify-center rounded-lg border border-border-custom hover:border-text-secondary hover:text-accent-custom transition-colors text-text-secondary"
                        aria-label={locale === 'pt' ? 'Perfil no LinkedIn' : 'LinkedIn Profile'}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
