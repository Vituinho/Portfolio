'use client';

import { useI18n } from '@/i18n/context';
import { profileData } from '@/data/profile';
import { languagesData } from '@/data/languages';
import { ArrowRight, Download, MapPin, Globe, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { locale, t } = useI18n();
  const pt = locale === 'pt';
  const areas = pt
    ? ['Engenharia de Software', 'Desenvolvimento Full Stack', 'Automação', 'Sistemas de Negócio', 'Soluções de TI']
    : ['Software Engineering', 'Full-Stack Development', 'Automation', 'Business Systems', 'IT Solutions'];

  return (
    <section id="hero" className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 max-w-6xl mx-auto">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
        <div className="min-w-0">
          <p className="eyebrow mb-5">{pt ? 'Tecnologia aplicada a problemas reais' : 'Technology for real-world problems'}</p>
          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] mb-4">{profileData.name}</h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium mb-5">{profileData.title[locale]}</p>
          <p className="max-w-[50ch] text-base sm:text-lg leading-relaxed text-text-secondary">{profileData.shortIntro[locale]}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 my-6 text-xs leading-relaxed text-text-secondary">
            {areas.map(area => <li key={area}>{area}</li>)}
          </ul>
          <div className="flex flex-wrap gap-3 mt-7">
            <a href="#projects" className="action-link flex-1 sm:flex-none bg-accent-custom text-bg-primary hover:bg-accent-muted">{t.hero.ctaProjects}<ArrowRight className="size-4" /></a>
            <a href="#contact" className="action-link flex-1 sm:flex-none border border-border-custom hover:bg-bg-secondary">{t.hero.ctaContact}</a>
            <a href={profileData.cvUrl} download className="action-link basis-full sm:basis-auto text-text-secondary hover:text-text-primary hover:bg-bg-secondary"><Download className="size-4" />{t.hero.downloadCV}</a>
          </div>
        </div>
        <div className="rounded-xl border border-border-custom bg-bg-card p-5 sm:p-6">
          <div className="flex items-center gap-4 pb-5 border-b border-border-custom">
            <div className="relative size-20 shrink-0 rounded-xl overflow-hidden">
              <Image src={profileData.avatarUrl} alt={t.hero.avatarAlt} fill priority sizes="80px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="eyebrow mb-1">{pt ? 'Atualmente' : 'Currently'}</p>
              <p className="font-semibold">Givova Transportes</p>
              <p className="text-sm text-text-secondary mt-1">{pt ? 'Analista de Tecnologia' : 'Technology Analyst'}</p>
            </div>
          </div>
          <p className="flex items-start gap-3 text-sm leading-relaxed py-5"><Briefcase className="size-4 shrink-0 mt-1 text-text-secondary" />{pt ? 'Desenvolvimento de software, sistemas e automações na operação de uma empresa.' : 'Software development, systems and automation in company operations.'}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="info-badge"><MapPin className="size-3.5" />{pt ? 'Brasil' : 'Brazil'}</span>
            <a href="#education" className="info-badge hover:border-text-secondary"><Globe className="size-3.5" />{pt ? 'Experiência no Canadá' : 'Experience in Canada'}</a>
            <a href={languagesData[0].certificate} target="_blank" rel="noopener noreferrer" className="info-badge hover:border-text-secondary">{pt ? 'Inglês C1 · EF SET' : 'English C1 · EF SET'}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
