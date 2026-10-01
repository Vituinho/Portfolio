'use client';

import { useI18n } from '@/i18n/context';
import { profileData } from '@/data/profile';
import Card from '../ui/Card';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  const { locale, t } = useI18n();
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-text-secondary leading-relaxed">
          <p>{profileData.bio[locale]}</p>
          <p>{profileData.story[locale]}</p>
          <p>{profileData.passions[locale]}</p>
        </div>
        <Card hoverEffect={false} className="flex flex-col justify-between gap-6">
          <div>
            <h3 className="font-semibold mb-3">{locale === 'pt' ? 'O próximo passo' : 'Looking ahead'}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{profileData.goals[locale]}</p>
          </div>
          <a href="#education" className="inline-flex items-center gap-2 text-sm font-semibold">
            {locale === 'pt' ? 'Minha experiência internacional' : 'My international experience'}<ArrowUpRight className="size-4" />
          </a>
        </Card>
      </div>
    </section>
  );
}

