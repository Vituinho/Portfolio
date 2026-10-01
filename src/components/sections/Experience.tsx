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
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <h2 className="section-title">
          {t.experience.title}
        </h2>

        {/* Timeline Layout */}
        <div className="relative pl-5 md:pl-8 border-l border-border-custom ml-3 md:ml-4 flex flex-col gap-6 sm:gap-8">
          {experienceData.map((exp, idx) => {
            const displayEndDate = exp.endDate 
              ? exp.endDate 
              : (locale === 'pt' ? "Atual" : "Present");

            return (
              <div key={idx} className="relative">
                {/* Timeline Bullet Dot */}
                <span className="absolute -left-[33px] md:-left-[47px] top-5 flex items-center justify-center size-6 md:size-7 rounded-full bg-bg-primary border border-border-custom text-text-secondary">
                  <Briefcase className="w-3.5 h-3.5" />
                </span>

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                >
                  <Card hoverEffect={false} className={`flex flex-col gap-4 ${!exp.endDate ? 'border-text-secondary/50 bg-bg-secondary md:p-8' : ''}`}>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="min-w-0">
                        {!exp.endDate && <span className="info-badge mb-3 text-xs">{locale === 'pt' ? 'Experiência atual' : 'Current experience'}</span>}
                        <h3 className={`font-semibold leading-snug tracking-tight text-text-primary ${!exp.endDate ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
                          {exp.position[locale]}
                        </h3>
                        <p className="text-sm font-medium text-text-secondary mt-2">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap md:flex-col md:items-end md:shrink-0 gap-x-4 gap-y-2 text-xs leading-relaxed text-text-secondary">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.startDate ? `${exp.startDate} – ${displayEndDate}` : displayEndDate}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {exp.location[locale]}
                        </span>
                        {exp.employmentType && <span className="px-2 py-0.5 rounded bg-bg-secondary border border-border-custom/50 max-w-max">
                          {t.experience.types[exp.employmentType]}
                        </span>}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="max-w-[72ch] text-sm sm:text-base text-text-secondary leading-relaxed">
                      {exp.description[locale]}
                    </p>

                    {/* Achievements List */}
                    <div className="flex flex-col gap-2">
                      <ul className="max-w-[80ch] list-disc pl-5 text-sm text-text-secondary flex flex-col gap-2.5">
                        {exp.achievements[locale].map((item, id) => (
                          <li key={id} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack used */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border-custom">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="tech-tag"
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
