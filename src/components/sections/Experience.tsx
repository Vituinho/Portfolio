'use client';

import React from 'react';
import { useI18n } from '@/i18n/context';
import { experienceData } from '@/data/experience';
import Card from '../ui/Card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const { locale, t } = useI18n();

  return (
    <section id="experience" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="section-title">
          {t.experience.title}
        </h2>

        {/* Timeline Layout */}
        <div className="relative pl-6 md:pl-8 border-l border-border-custom/80 ml-4 md:ml-6 flex flex-col gap-10">
          {experienceData.map((exp, idx) => {
            const displayEndDate = exp.endDate 
              ? exp.endDate 
              : (locale === 'pt' ? "Atual" : "Present");

            return (
              <div key={idx} className="relative">
                {/* Timeline Bullet Dot */}
                <span className="absolute -left-[35px] md:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-bg-primary border border-border-custom text-accent-custom shadow-sm">
                  <Briefcase className="w-3.5 h-3.5" />
                </span>

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card hoverEffect={false} className={`flex flex-col gap-4 ${!exp.endDate ? 'border-text-secondary/50 bg-bg-secondary md:p-8' : ''}`}>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                      <div>
                        {!exp.endDate && <span className="info-badge mb-3 text-xs">{locale === 'pt' ? 'Experiência atual' : 'Current experience'}</span>}
                        <h3 className="font-extrabold text-lg text-text-primary">
                          {exp.position[locale]}
                        </h3>
                        <p className="text-sm font-semibold text-accent-custom mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col md:items-end gap-1 text-xs text-text-secondary">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.startDate ? `${exp.startDate} – ${displayEndDate}` : displayEndDate}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location[locale]}
                        </span>
                        {exp.employmentType && <span className="px-2 py-0.5 rounded bg-bg-secondary border border-border-custom/50 max-w-max">
                          {t.experience.types[exp.employmentType]}
                        </span>}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {exp.description[locale]}
                    </p>

                    {/* Achievements List */}
                    <div className="flex flex-col gap-2">
                      <ul className="list-disc pl-5 text-sm text-text-secondary flex flex-col gap-2">
                        {exp.achievements[locale].map((item, id) => (
                          <li key={id} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack used */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-custom/40">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-0.5 rounded bg-bg-secondary border border-border-custom/50 text-[10px] text-text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
