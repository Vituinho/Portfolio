'use client';

import React from 'react';
import { useI18n } from '@/i18n/context';
import { recommendationsData } from '@/data/recommendations';
import type { RecommendationItem } from '@/types/portfolio';
import Card from '../ui/Card';
import { Quote, Linkedin, Calendar, MapPin, Languages } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Image from 'next/image';

type Locale = 'en' | 'pt';

function formatDate(value: string, locale: Locale) {
  const [year, month] = value.split('-').map(Number);
  if (!month) return String(year);
  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1, 1)));
}

function Avatar({ rec, size }: { rec: RecommendationItem; size: 'sm' | 'lg' }) {
  return (
    <div className={`${size === 'lg' ? 'size-12 rounded-xl text-sm' : 'size-10 rounded-lg text-xs'} shrink-0 border border-border-custom bg-bg-secondary overflow-hidden relative select-none`}>
      {rec.photo ? (
        <Image src={rec.photo} alt={rec.name} fill sizes={size === 'lg' ? '48px' : '40px'} className="object-cover" />
      ) : (
        <div aria-hidden="true" className="w-full h-full flex items-center justify-center font-semibold text-text-secondary">
          {rec.name.split(' ').map(n => n[0]).join('')}
        </div>
      )}
    </div>
  );
}

/** A recommendation that carries the international experience: full width, original quote first. */
function FeaturedRecommendation({ rec, locale }: { rec: RecommendationItem; locale: Locale }) {
  const pt = locale === 'pt';
  const original = rec.originalLanguage ?? locale;
  const translated = original !== locale;
  const traits = pt
    ? ['Comunicação em inglês e português', 'Adaptabilidade', 'Liderança']
    : ['Communication in English and Portuguese', 'Adaptability', 'Leadership'];

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-border-strong bg-bg-card p-6 sm:p-10 shadow-[inset_0_1px_0_0_color-mix(in_srgb,var(--text-primary)_7%,transparent)]">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-line-cloud via-line-data to-transparent" />
      <Quote aria-hidden="true" className="absolute right-6 top-6 size-16 sm:size-20 text-text-primary/5 pointer-events-none" />

      <p className="eyebrow mb-5">{pt ? 'Programa internacional no Canadá' : 'International program in Canada'}</p>

      <blockquote lang={original === 'en' ? 'en' : 'pt-BR'} className="relative max-w-[60ch] font-display text-xl sm:text-2xl lg:text-[1.75rem] font-medium leading-snug tracking-[-0.015em] text-text-primary">
        &ldquo;{rec.testimonial[original]}&rdquo;
      </blockquote>

      {translated && (
        <div className="mt-6 max-w-[65ch] border-l-2 border-border-strong pl-4">
          <p className="flex items-center gap-1.5 text-xs font-medium text-text-secondary">
            <Languages aria-hidden="true" className="size-3.5" />
            {pt ? 'Tradução para o português; o original acima está em inglês.' : 'English translation; the original above is in Portuguese.'}
          </p>
          <p lang={locale === 'pt' ? 'pt-BR' : 'en'} className="mt-2 text-sm leading-7 text-text-secondary">{rec.testimonial[locale]}</p>
        </div>
      )}

      <ul aria-label={pt ? 'Destaques da recomendação' : 'Recommendation highlights'} className="mt-7 flex flex-wrap gap-2 text-xs">
        {traits.map(trait => <li key={trait} className="info-badge">{trait}</li>)}
      </ul>

      <figcaption className="mt-8 flex flex-col gap-4 border-t border-border-custom pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3 min-w-0">
          <Avatar rec={rec} size="lg" />
          <div className="min-w-0">
            <p className="font-semibold text-text-primary">{rec.name}</p>
            <p className="mt-0.5 text-sm text-text-secondary leading-relaxed">{rec.position[locale]}</p>
            {rec.location && (
              <p className="mt-1 flex items-center gap-1.5 text-xs text-text-secondary">
                <MapPin aria-hidden="true" className="size-3.5 shrink-0" />{rec.location[locale]}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-secondary sm:justify-end">
          <span className="flex items-center gap-1.5">
            <Calendar aria-hidden="true" className="size-3.5" />
            <time dateTime={rec.date}>{formatDate(rec.date, locale)}</time>
          </span>
          {rec.source && <span>{rec.source[locale]}</span>}
        </div>
      </figcaption>
    </figure>
  );
}

export default function Recommendations() {
  const { locale, t } = useI18n();
  const featured = recommendationsData.filter(rec => rec.featured);
  const others = recommendationsData.filter(rec => !rec.featured);

  return (
    <section id="recommendations" className="section-shell">
      <Reveal className="w-full">
        <h2 className="section-title">
          {t.recommendations.title}
        </h2>

        <div className="flex flex-col gap-6">
          {featured.map(rec => (
            <Reveal key={rec.name}>
              <FeaturedRecommendation rec={rec} locale={locale} />
            </Reveal>
          ))}

          {/* Responsive Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((rec, idx) => (
              <Reveal key={rec.name} delay={idx * 50}>
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
                      <Avatar rec={rec} size="sm" />

                      <div className="text-left min-w-0">
                        <h3 className="font-medium text-sm text-text-primary">
                          {rec.name}
                        </h3>
                        <p className="text-xs text-text-secondary leading-relaxed mt-1">
                          {rec.position[locale]}
                          {rec.company && <> {locale === 'pt' ? 'na' : 'at'} <span className="font-semibold text-accent-custom">{rec.company}</span></>}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-text-secondary flex items-center gap-1.5">
                        <Calendar aria-hidden="true" className="w-3 h-3" />
                        <time dateTime={rec.date}>{formatDate(rec.date, locale)}</time>
                      </span>
                      {rec.linkedin && (
                        <a
                          href={rec.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="size-11 inline-flex items-center justify-center rounded-lg border border-border-custom hover:border-text-secondary hover:text-accent-custom transition-colors text-text-secondary"
                          aria-label={`${locale === 'pt' ? 'Perfil no LinkedIn' : 'LinkedIn profile'}: ${rec.name}`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
