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
    <section id="recommendations" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-text-primary mb-12 relative pb-3 border-b border-border-custom max-w-max">
          {t.recommendations.title}
        </h2>

        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendationsData.map((rec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
            >
              <Card className="relative flex flex-col h-full justify-between gap-6 overflow-hidden">
                {/* Visual quote mark indicator */}
                <Quote className="absolute right-4 top-4 w-12 h-12 text-accent-custom/5 pointer-events-none" />

                {/* Testimonial Quote */}
                <p className="text-text-secondary text-sm leading-relaxed italic z-10">
                  &ldquo;{rec.testimonial[locale]}&rdquo;
                </p>

                {/* Author Info block */}
                <div className="flex items-center justify-between border-t border-border-custom/40 pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    {/* Recommendation Photo */}
                    <div className="w-10 h-10 rounded-full border border-border-custom bg-bg-secondary overflow-hidden relative select-none">
                      {rec.photo ? (
                        <Image
                          src={rec.photo}
                          alt={rec.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-xs text-text-secondary">
                          {rec.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>

                    <div className="text-left">
                      <h4 className="font-bold text-sm text-text-primary">
                        {rec.name}
                      </h4>
                      <p className="text-[11px] text-text-secondary leading-snug">
                        {rec.position[locale]} at <span className="font-semibold text-accent-custom">{rec.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-text-secondary flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {rec.date}
                    </span>
                    {rec.linkedin && (
                      <a
                        href={rec.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md border border-border-custom hover:border-accent-custom hover:text-accent-custom transition-all text-text-secondary"
                        aria-label="LinkedIn Profile"
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
