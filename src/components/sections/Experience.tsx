'use client';

import React from 'react';
import { useI18n } from '@/i18n/context';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';
import { languagesData } from '@/data/languages';
import TechTag from '../ui/TechTag';
import { MapPin, ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { cn } from '@/lib/utils';

function formatMonth(value: string, locale: 'en' | 'pt') {
  const [year, month] = value.split('-').map(Number);
  if (!month) return String(year);
  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1, 1)));
}

export default function Experience() {
  const { locale, t } = useI18n();
  const pt = locale === 'pt';
  const exchange = educationData[0];
  const english = languagesData.find(language => language.cefr === 'C1');
  // Current role first, then the most recently finished.
  const roles = [...experienceData].sort((a, b) => (b.endDate ?? '9999').localeCompare(a.endDate ?? '9999'));

  return (
    <section id="experience" className="section-shell">
      <h2 className="section-title">{t.experience.title}</h2>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
        {/* Timeline: each role is a station on one line; the current role is the lit one */}
        <ol className="relative">
          {roles.map((exp, idx) => {
            const current = !exp.endDate;
            const period = exp.startDate
              ? `${formatMonth(exp.startDate, locale)} – ${exp.endDate ? formatMonth(exp.endDate, locale) : pt ? 'Atual' : 'Present'}`
              : pt ? 'Atual' : 'Present';
            const last = idx === roles.length - 1;

            return (
              <Reveal
                as="li"
                key={exp.company}
                delay={idx * 60}
                className="relative grid gap-x-8 md:grid-cols-[9.5rem_minmax(0,1fr)]"
              >
                <div className="pl-8 md:pl-0 md:pt-1 md:text-right">
                  <p className={cn('text-sm font-medium', current ? 'text-now' : 'text-text-primary')}>{period}</p>
                  {exp.employmentType && <p className="mt-0.5 text-xs text-text-secondary">{t.experience.types[exp.employmentType]}</p>}
                </div>

                <div className={cn('relative pl-8 pt-2 md:pt-0', last ? 'pb-0' : 'pb-12')}>
                  {!last && <span aria-hidden="true" className={cn('absolute left-[5px] top-3 -bottom-1.5 w-0.5 rounded-full', current ? 'bg-linear-to-b from-now/70 to-border-strong' : 'bg-border-strong')} />}
                  <span aria-hidden="true" className={cn(
                    'absolute left-0 top-1.5 size-3 rounded-full border-2',
                    current ? 'border-now bg-now shadow-[0_0_0_5px_color-mix(in_srgb,var(--line-backend)_22%,transparent)]' : 'border-border-strong bg-bg-primary'
                  )} />
                  <h3 className={cn('font-semibold tracking-tight leading-snug', current ? 'text-2xl sm:text-[1.75rem]' : 'text-lg sm:text-xl')}>
                    {exp.position[locale]}
                  </h3>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-secondary">
                    <span className="font-medium text-text-primary">{exp.company}</span>
                    <span className="inline-flex items-center gap-1"><MapPin aria-hidden="true" className="size-3.5" />{exp.location[locale]}</span>
                  </p>
                  <p className={cn('mt-4 max-w-[68ch] leading-relaxed text-text-secondary', current ? 'text-[15px] sm:text-base' : 'text-sm sm:text-[15px]')}>
                    {exp.description[locale]}
                  </p>
                  <ul className="mt-4 max-w-[72ch] space-y-2.5 text-sm leading-relaxed text-text-secondary">
                    {exp.achievements[locale].map(item => (
                      <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-border-strong" />{item}</li>
                    ))}
                  </ul>
                  <ul aria-label={pt ? 'Tecnologias' : 'Technologies'} className="mt-5 flex flex-wrap gap-1.5">
                    {exp.technologies.map(tech => <TechTag key={tech} name={tech} />)}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <aside aria-labelledby="international-profile" className="self-start rounded-xl border border-border-custom bg-bg-card p-6 lg:sticky lg:top-24">
          <h3 id="international-profile" className="text-lg font-semibold tracking-tight">{pt ? 'Perfil internacional' : 'International profile'}</h3>
          <dl className="mt-5 space-y-5 text-sm">
            {english && (
              <div>
                <dt className="text-text-secondary">{pt ? 'Inglês' : 'English'}</dt>
                <dd className="mt-1 font-display text-2xl font-semibold tracking-tight">C1 <span className="font-sans text-sm font-normal text-text-secondary">{pt ? 'avançado' : 'advanced'}</span></dd>
                {english.certificate && (
                  <dd className="mt-1">
                    <a href={english.certificate} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 font-medium hover:underline underline-offset-4">
                      {pt ? 'Certificado EF SET' : 'EF SET certificate'}<ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  </dd>
                )}
              </div>
            )}
            <div className="border-t border-border-custom pt-5">
              <dt className="text-text-secondary">{pt ? 'Intercâmbio' : 'Exchange'}</dt>
              <dd className="mt-1 leading-relaxed">
                {pt
                  ? `${exchange.durationMonths} meses em Penticton, British Columbia, Canadá (${exchange.startDate})`
                  : `${exchange.durationMonths} months in Penticton, British Columbia, Canada (${exchange.startDate})`}
              </dd>
              <dd className="mt-1 text-text-secondary">{exchange.institution}</dd>
            </div>
            <div className="border-t border-border-custom pt-5">
              <dt className="text-text-secondary">{pt ? 'Português' : 'Portuguese'}</dt>
              <dd className="mt-1">{pt ? 'Nativo' : 'Native'}</dd>
            </div>
          </dl>
          <a href="#education" className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium hover:underline underline-offset-4">
            {pt ? 'Sobre o intercâmbio' : 'About the exchange'}<ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </aside>
      </div>
    </section>
  );
}
