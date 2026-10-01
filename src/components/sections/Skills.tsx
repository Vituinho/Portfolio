'use client';

import { useI18n } from '@/i18n/context';
import { skillsData } from '@/data/skills';
import Card from '../ui/Card';
import { Atom, Cloud, Code2, Container, Cpu, Database, FileCode, GitBranch, Github, Layout, Send, Server, Wind, Workflow } from 'lucide-react';
import type { SkillCategory } from '@/types/portfolio';

const icons = { Atom, Cloud, Code2, Container, Cpu, Database, FileCode, GitBranch, Github, Layout, Send, Server, Wind, Workflow };
const categories: SkillCategory[] = ['frontend', 'backend', 'databases', 'tools', 'other'];

export default function Skills() {
  const { locale, t } = useI18n();
  return (
    <section id="skills" className="section-shell">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {categories.map(category => {
          const group = skillsData.filter(skill => skill.category === category);
          return (
            <Card key={category} hoverEffect={false} className={category === 'other' ? 'md:col-span-2' : ''}>
              <h3 className="font-semibold mb-5">{t.skills.categories[category]}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.filter(skill => !skill.supporting).map(skill => {
                  const Icon = icons[skill.icon as keyof typeof icons] ?? Code2;
                  return <li key={skill.name} className="info-badge text-sm"><Icon className="size-4 text-text-secondary" />{skill.localizedName?.[locale] ?? skill.name}</li>;
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
