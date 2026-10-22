'use client';

import type { CSSProperties } from 'react';
import { useI18n } from '@/i18n/context';
import { profileData } from '@/data/profile';
import { languagesData } from '@/data/languages';
import { systemRoute, stackDomainLabels, type StackDomain } from '@/data/systemRoute';
import { ArrowRight, Download, Globe, Award } from 'lucide-react';
import Image from 'next/image';

const primaryStack: { name: string; domain: StackDomain }[] = [
  { name: 'TypeScript', domain: 'backend' },
  { name: 'Node.js', domain: 'backend' },
  { name: 'NestJS', domain: 'backend' },
  { name: 'Python', domain: 'backend' },
  { name: 'FastAPI', domain: 'backend' },
  { name: 'PostgreSQL', domain: 'data' },
  { name: 'AWS', domain: 'cloud' }
];

const lineVar = (domain: StackDomain) => `var(--line-${domain})`;

function RouteCard({ locale }: { locale: 'en' | 'pt' }) {
  const pt = locale === 'pt';
  const domains = Array.from(new Set(systemRoute.map(station => station.domain)));
  return (
    <figure aria-labelledby="route-title" aria-describedby="route-summary" className="rise-in relative min-w-0 rounded-2xl border border-border-custom bg-bg-card/85 p-5 sm:p-7 backdrop-blur-sm [animation-delay:120ms] shadow-[inset_0_1px_0_0_color-mix(in_srgb,var(--text-primary)_7%,transparent),0_40px_80px_-48px_rgb(0_0_0/0.65)]">
      <figcaption className="mb-6">
        <p id="route-title" className="font-display text-lg sm:text-xl font-semibold tracking-tight">{pt ? 'Do checkout ao backup externo' : 'From checkout to off-site backup'}</p>
        <p id="route-summary" className="mt-1 text-sm leading-relaxed text-text-secondary">{pt ? 'Como os dados de pedidos percorrem o e-commerce GVV Paraná que desenvolvi.' : 'How order data moves through the GVV Paraná e-commerce I built.'}</p>
      </figcaption>
      <div className="relative">
        <span aria-hidden="true" className="route-packet" />
        <ol className="route">
          {systemRoute.map((station, index) => (
            <li key={station.name.en} className="route-station" data-terminal={index === systemRoute.length - 1} style={{ '--i': index, '--line': lineVar(station.domain) } as CSSProperties}>
              <span aria-hidden="true" className="route-dot" />
              <div className="min-w-0">
                <p className="text-sm font-medium leading-snug">{station.name[locale]}</p>
                <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-text-secondary">{station.detail[locale]}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <ul aria-label={pt ? 'Legenda das cores' : 'Color legend'} className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-border-custom pt-4 text-xs text-text-secondary">
        {domains.map(domain => (
          <li key={domain} className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="line-dot" style={{ '--dot': lineVar(domain) } as CSSProperties} />
            {stackDomainLabels[domain][locale]}
          </li>
        ))}
      </ul>
    </figure>
  );
}

export default function Hero() {
  const { locale, t } = useI18n();
  const pt = locale === 'pt';

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-backdrop absolute inset-0 -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 grid gap-12 lg:gap-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] items-center">
        <div className="min-w-0">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="relative size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-border-strong">
              <Image src={profileData.avatarUrl} alt={t.hero.avatarAlt} fill priority sizes="44px" className="object-cover" />
            </div>
            <p className="min-w-0 text-sm leading-snug">
              <span className="block font-medium">{pt ? 'Engenheiro de Software na Givova Transportes' : 'Software Engineer at Givova Transportes'}</span>
              <span className="block text-text-secondary">{pt ? `Brasil, ${profileData.age} anos` : `Brazil, ${profileData.age} years old`}</span>
            </p>
          </div>

          <h1 className="font-bold text-[clamp(2.875rem,8.5vw,4.75rem)] leading-[0.95] tracking-[-0.045em]">{profileData.name}</h1>
          <p className="mt-5 sm:mt-6 max-w-[24ch] font-display text-[clamp(1.375rem,3vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em]">
            {pt ? 'Engenheiro de Software especializado em backend, nuvem e automação.' : 'Software Engineer specializing in backend, cloud and automation.'}
          </p>
          <p className="mt-5 max-w-[52ch] text-base sm:text-lg leading-relaxed text-text-secondary">{profileData.shortIntro[locale]}</p>

          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
            <a href="#projects" className="action-link col-span-2 bg-accent-custom text-bg-primary hover:bg-accent-muted">{t.hero.ctaProjects}<ArrowRight className="size-4" /></a>
            <a href={profileData.cvUrl} download aria-label={t.hero.downloadCV} className="action-link whitespace-nowrap border border-border-strong hover:bg-bg-secondary">
              <Download aria-hidden="true" className="size-4" />
              <span className="sm:hidden">{pt ? 'Currículo' : 'Resume'}</span>
              <span className="hidden sm:inline">{t.hero.downloadCV}</span>
            </a>
            <a href="#contact" className="action-link whitespace-nowrap border border-border-custom sm:border-transparent text-text-secondary hover:text-text-primary hover:bg-bg-secondary">{t.hero.ctaContact}</a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2 text-xs">
            <li><a href="#education" className="info-badge min-h-9 hover:border-border-strong transition-colors"><Globe className="size-3.5" />{pt ? 'Intercâmbio no Canadá, 2026' : 'Exchange in Canada, 2026'}</a></li>
            <li><a href={languagesData[0].certificate} target="_blank" rel="noopener noreferrer" className="info-badge min-h-9 hover:border-border-strong transition-colors"><Award className="size-3.5" />{pt ? 'Inglês C1 (EF SET)' : 'English C1 (EF SET)'}</a></li>
          </ul>

          <div className="mt-10 border-t border-border-custom pt-5">
            <p className="eyebrow mb-3">{pt ? 'Stack principal' : 'Primary stack'}</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {primaryStack.map(item => (
                <li key={item.name} className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="line-dot" style={{ '--dot': lineVar(item.domain) } as CSSProperties} />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <RouteCard locale={locale} />
      </div>
    </section>
  );
}
