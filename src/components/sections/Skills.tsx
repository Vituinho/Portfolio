'use client';

import type { CSSProperties } from 'react';
import { useI18n } from '@/i18n/context';
import { skillsData } from '@/data/skills';
import type { SkillCategory } from '@/types/portfolio';
import { lineVar, type LineColor } from '@/lib/stack';
import { cn } from '@/lib/utils';
import TechLogo from '../ui/TechLogo';

const primaryCategories: SkillCategory[] = ['backend', 'cloud'];
const secondaryCategories: SkillCategory[] = ['databases', 'frontend', 'tools'];
const categoryLine: Record<SkillCategory, LineColor> = { backend: 'backend', cloud: 'cloud', databases: 'data', frontend: 'frontend', tools: 'tools' };

const evidence: Record<SkillCategory, { en: string; pt: string }> = {
  backend: {
    en: 'APIs and services for payments, barcode synchronization and realtime multiplayer games.',
    pt: 'APIs e serviços para pagamentos, sincronização de coletas e jogos multiplayer em tempo real.'
  },
  cloud: {
    en: 'Deployments, backups, monitoring and access control on AWS and other cloud platforms.',
    pt: 'Deploys, backups, monitoramento e controle de acesso na AWS e em outras plataformas de nuvem.'
  },
  databases: {
    en: 'Relational models, migrations and backups for production data.',
    pt: 'Modelagem relacional, migrações e backups de dados em produção.'
  },
  frontend: {
    en: 'Interfaces for the systems I build, from admin panels to storefronts.',
    pt: 'Interfaces dos sistemas que construo, de painéis administrativos a lojas.'
  },
  tools: {
    en: 'Version control, API testing, and unit and end-to-end tests.',
    pt: 'Controle de versão, testes de API e testes unitários e end-to-end.'
  }
};

function SkillPanel({ category, primary }: { category: SkillCategory; primary: boolean }) {
  const { locale, t } = useI18n();
  const group = skillsData.filter(skill => skill.category === category);
  const main = group.filter(skill => !skill.supporting);
  const supporting = group.filter(skill => skill.supporting);
  return (
    <article
      className={cn('relative flex flex-col overflow-hidden rounded-xl border border-border-custom bg-bg-card', primary ? 'p-6 sm:p-8' : 'p-5 sm:p-6')}
      style={{ '--line': lineVar(categoryLine[category]) } as CSSProperties}
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-(--line)" />
      <h3 className={cn('font-semibold tracking-tight', primary ? 'text-2xl sm:text-[1.75rem]' : 'text-lg')}>{t.skills.categories[category]}</h3>
      <p className={cn('mt-2 leading-relaxed text-text-secondary', primary ? 'text-sm sm:text-[15px] max-w-[46ch]' : 'text-sm')}>{evidence[category][locale]}</p>
      <ul className={cn(primary ? 'mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2.5' : 'mt-5 flex flex-wrap gap-2')}>
        {main.map(skill => (
          <li
            key={skill.name}
            className={cn(
              'group/skill flex min-w-0 items-center rounded-lg border border-border-custom bg-bg-secondary/60 font-medium transition-colors hover:border-border-strong',
              primary ? 'gap-3 px-3 py-2.5 text-sm sm:text-[15px]' : 'gap-2 px-2.5 py-1.5 text-sm'
            )}
          >
            <TechLogo
              name={skill.name}
              fallback={skill.icon}
              className={cn('shrink-0 text-text-secondary transition-colors group-hover/skill:text-(--line)', primary ? 'size-5' : 'size-4')}
            />
            <span className="min-w-0 leading-tight">{skill.localizedName?.[locale] ?? skill.name}</span>
          </li>
        ))}
      </ul>
      {supporting.length > 0 && (
        <p className={cn('mt-auto border-t border-border-custom text-text-secondary', primary ? 'pt-5 mt-8 text-sm' : 'pt-4 mt-6 text-xs')}>
          <span className="font-medium text-text-primary">{t.skills.supporting}:</span>{' '}
          {supporting.map(skill => skill.localizedName?.[locale] ?? skill.name).join(', ')}
        </p>
      )}
    </article>
  );
}

export default function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills" className="section-shell">
      <h2 className="section-title mb-4!">{t.skills.title}</h2>
      <p className="section-lead mb-10">{t.skills.subtitle}</p>
      <div className="grid gap-5 lg:gap-6">
        <div className="grid gap-5 lg:gap-6 lg:grid-cols-2">
          {primaryCategories.map(category => <SkillPanel key={category} category={category} primary />)}
        </div>
        <div className="grid gap-5 lg:gap-6 md:grid-cols-3">
          {secondaryCategories.map(category => <SkillPanel key={category} category={category} primary={false} />)}
        </div>
      </div>
    </section>
  );
}
