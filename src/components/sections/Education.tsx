'use client';

import React from 'react';
import { useI18n } from '@/i18n/context';
import { educationData } from '@/data/education';
import Card from '../ui/Card';
import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  const { locale, t } = useI18n();

  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-text-primary mb-12 relative pb-3 border-b border-border-custom max-w-max">
          {t.education.title}
        </h2>

        {/* Timeline Layout */}
        <div className="relative pl-6 md:pl-8 border-l border-border-custom/80 ml-4 md:ml-6 flex flex-col gap-10">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Cap Icon Bullet */}
              <span className="absolute -left-[35px] md:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-bg-primary border border-border-custom text-accent-custom shadow-sm">
                <GraduationCap className="w-3.5 h-3.5" />
              </span>

              {/* Education Entry Card */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                    <div>
                      <h3 className="font-extrabold text-lg text-text-primary">
                        {edu.course[locale]}
                      </h3>
                      <p className="text-sm font-semibold text-accent-custom mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {edu.degree[locale]}
                      </p>
                    </div>

                    <div className="flex flex-col md:items-end gap-1 text-xs text-text-secondary">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.startDate} – {edu.endDate}
                      </span>
                      {edu.grade && (
                        <span className="px-2 py-0.5 rounded bg-bg-secondary border border-border-custom/50 text-[10px] text-text-primary font-bold max-w-max">
                          {t.education.grade}: {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {edu.description[locale]}
                  </p>

                  {/* Actions (Cert link) */}
                  {edu.certificateLink && (
                    <div className="pt-3 border-t border-border-custom/40 mt-1 flex">
                      <a
                        href={edu.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-custom hover:underline"
                      >
                        <Award className="w-3.5 h-3.5" />
                        Verify Certificate
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
