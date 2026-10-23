'use client';

import type { CSSProperties } from 'react';
import { useI18n } from '@/i18n/context';
import { profileData } from '@/data/profile';
import { languagesData } from '@/data/languages';
import { projectsData } from '@/data/projects';
import { engineeringLayers, type StackDomain } from '@/data/engineeringLayers';
import TechLogo from '../ui/TechLogo';
import { ArrowRight, Download, Globe, Award } from 'lucide-react';
import Image from 'next/image';

const primaryStack = ['TypeScript', 'Node.js', 'NestJS', 'Python', 'FastAPI', 'PostgreSQL', 'AWS'];

const lineVar = (domain: StackDomain) => `var(--line-${domain})`;

function LayersCard({ locale }: { locale: 'en' | 'pt' }) {
  const pt = locale === 'pt';
  const liveSystems = projectsData.filter(project => project.kind === 'professional' && project.status === 'live').length;
  return (
    <figure aria-labelledby="layers-title" aria-describedby="layers-summary" className="rise-in relative min-w-0 rounded-2xl border border-border-custom bg-bg-card/85 p-5 sm:p-7 backdrop-blur-sm [animation-delay:120ms] shadow-[inset_0_1px_0_0_color-mix(in_srgb,var(--text-primary)_7%,transparent),0_40px_80px_-48px_rgb(0_0_0/0.65)]">
      <figcaption className="mb-6">
        <p id="layers-title" className="font-display text-lg sm:text-xl font-semibold tracking-tight">{pt ? 'Como construo software' : 'How I build software'}</p>
        <p id="layers-summary" className="mt-1 text-sm leading-relaxed text-text-secondary">{pt ? 'Da interface à nuvem: as camadas que projeto e mantenho em produção.' : 'From the interface to the cloud: the layers I design and run in production.'}</p>
      </figcaption>
      <div className="relative">
        <span aria-hidden="true" className="route-packet" />
        <ol className="route">
          {engineeringLayers.map((layer, index) => (
            <li key={layer.name.en} className="route-station" data-terminal={index === engineeringLayers.length - 1} style={{ '--i': index, '--line': lineVar(layer.domain) } as CSSProperties}>
              <span aria-hidden="true" className="route-dot" />
              <div className="min-w-0 sm:flex sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug">{layer.name[locale]}</p>
                  <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-text-secondary">{layer.detail[locale]}</p>
                </div>
                <ul aria-label={layer.tools.join(', ')} className="mt-2 flex shrink-0 items-center gap-1.5 sm:mt-0">
                  {layer.tools.map(tool => (
                    <li key={tool} title={tool} className="inline-flex size-8 items-center justify-center rounded-lg border border-border-custom bg-bg-secondary/70 text-text-secondary">
                      <TechLogo name={tool} className="size-4" />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <a href="#projects" className="mt-6 flex min-h-11 items-center gap-2 border-t border-border-custom pt-4 text-sm text-text-secondary transition-colors hover:text-text-primary">
        <span aria-hidden="true" className="line-dot" style={{ '--dot': 'var(--line-data)' } as CSSProperties} />
        {pt ? `${liveSystems} sistemas em produção na Givova Transportes` : `${liveSystems} systems live at Givova Transportes`}
        <ArrowRight aria-hidden="true" className="ml-auto size-4" />
      </a>
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
          <p className="mt-4 sm:mt-5 font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.025em]">
            {profileData.title[locale]}
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
            <ul className="flex flex-wrap gap-x-5 gap-y-2.5 text-sm">
              {primaryStack.map(name => (
                <li key={name} className="inline-flex items-center gap-2">
                  <TechLogo name={name} className="size-4 text-text-secondary" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <LayersCard locale={locale} />
      </div>
    </section>
  );
}
