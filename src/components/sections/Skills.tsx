'use client';

import { useI18n } from '@/i18n/context';
import { skillsData } from '@/data/skills';
import Card from '../ui/Card';
import { Atom, Cloud, Code2, Container, Cpu, Database, FileCode, GitBranch, Github, Layout, Send, Server, Wind, Workflow } from 'lucide-react';
import type { SkillCategory } from '@/types/portfolio';

const icons = { Atom, Cloud, Code2, Container, Cpu, Database, FileCode, GitBranch, Github, Layout, Send, Server, Wind, Workflow };
const categories: SkillCategory[] = ['frontend', 'backend', 'databases', 'tools', 'other'];
const categoryIcons = { frontend: Layout, backend: Server, databases: Database, tools: Container, other: Workflow };

export default function Skills() {
  const { locale, t } = useI18n();
  return (
    <section id="skills" className="section-shell">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map(category => {
          const group = skillsData.filter(skill => skill.category === category);
          const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons] ?? Code2;
          return (
            <Card key={category} hoverEffect={false} className={`${category === 'other' ? 'md:col-span-2' : ''} ${category === 'backend' ? 'border-text-secondary/40' : ''}`}>
              <h3 className="flex items-start gap-3 text-lg font-medium leading-snug mb-5"><CategoryIcon className="size-5 shrink-0 mt-0.5 text-text-secondary" />{t.skills.categories[category]}</h3>
              <ul className={`grid gap-x-5 gap-y-3 ${category === 'other' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2'}`}>
                {group.filter(skill => !skill.supporting).map(skill => {
                  const Icon = icons[skill.icon as keyof typeof icons] ?? Code2;
                  return <li key={skill.name} className="min-w-0 flex items-start gap-2.5 text-sm leading-relaxed"><Icon className="size-4 shrink-0 mt-0.5 text-text-secondary" /><span>{skill.localizedName?.[locale] ?? skill.name}</span></li>;
                })}
              </ul>
              {group.some(skill => skill.supporting) && (
                <p className="text-xs text-text-secondary mt-5 pt-4 border-t border-border-custom">
                  {t.skills.supporting}: {group.filter(skill => skill.supporting).map(skill => skill.name).join(' · ')}
                </p>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
