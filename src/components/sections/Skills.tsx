'use client';

import React from 'react';
import { useI18n } from '@/i18n/context';
import { skillsData } from '@/data/skills';
import Card from '../ui/Card';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamic Lucide icon lookup component
function SkillIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) {
    return <LucideIcons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function Skills() {
  const { t } = useI18n();

  // Group skills by category
  const categories = Array.from(new Set(skillsData.map(s => s.category)));

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-text-primary mb-12 relative pb-3 border-b border-border-custom max-w-max">
          {t.skills.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const groupedSkills = skillsData.filter(s => s.category === category);
            
            return (
              <Card key={category} className="flex flex-col h-full">
                <h3 className="font-bold text-lg text-text-primary mb-6 flex items-center border-b border-border-custom/40 pb-2">
                  {t.skills.categories[category] || category}
                </h3>
                
                {/* Wrapped chip layout for skills */}
                <div className="flex flex-wrap gap-2.5">
                  {groupedSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-bg-secondary border border-border-custom hover:border-accent-custom/40 hover:bg-bg-primary hover:shadow-sm transition-all duration-300 group select-none cursor-default"
                    >
                      <span className="text-text-secondary group-hover:text-accent-custom group-hover:scale-110 transition-all duration-200">
                        <SkillIcon name={skill.icon} className="w-4 h-4" />
                      </span>
                      <span className="text-sm font-medium text-text-primary">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
