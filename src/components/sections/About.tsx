'use client';

import React from 'react';
import { useI18n } from '@/i18n/context';
import { profileData } from '@/data/profile';
import Card from '../ui/Card';
import { Heart, Target, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const { locale, t } = useI18n();

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-text-primary mb-12 relative pb-3 border-b border-border-custom max-w-max">
          {t.about.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Card hoverEffect={false} className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-accent-custom mb-2">
                <BookOpen className="w-5 h-5" />
                <h3 className="font-bold text-lg text-text-primary">{t.about.story}</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-base">
                {profileData.bio.en ? profileData.bio[locale] : ""}
              </p>
              <p className="text-text-secondary leading-relaxed text-base">
                {profileData.story.en ? profileData.story[locale] : ""}
              </p>
            </Card>
          </div>

          {/* Goals & Passions cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Goals */}
            <Card hoverEffect={true} className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-accent-custom">
                <Target className="w-5 h-5" />
                <h3 className="font-bold text-lg text-text-primary">{t.about.goals}</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-sm">
                {profileData.goals.en ? profileData.goals[locale] : ""}
              </p>
            </Card>

            {/* Passions */}
            <Card hoverEffect={true} className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-accent-custom">
                <Heart className="w-5 h-5" />
                <h3 className="font-bold text-lg text-text-primary">{t.about.passions}</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-sm">
                {profileData.passions.en ? profileData.passions[locale] : ""}
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
