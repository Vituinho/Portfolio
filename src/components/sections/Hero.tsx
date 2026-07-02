'use client';

import React from 'react';
import { useI18n } from '@/i18n/context';
import { profileData } from '@/data/profile';
import Button from '../ui/Button';
import { ArrowRight, Download, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const { locale, t } = useI18n();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  } as const;

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 max-w-6xl mx-auto"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full"
      >
        {/* Intro copy */}
        <div className="md:col-span-7 flex flex-col items-start text-left order-2 md:order-1">
          <motion.p 
            variants={itemVariants}
            className="text-accent-custom font-semibold text-base mb-3 tracking-wide"
          >
            {locale === 'pt' ? "Olá, meu nome é" : "Hi, my name is"}
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-4"
          >
            {profileData.name}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-text-secondary mb-6"
          >
            {profileData.title[locale]}
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-text-secondary max-w-lg mb-8 leading-relaxed"
          >
            {profileData.shortIntro[locale]}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <Button
              onClick={() => handleScrollTo('projects')}
              className="group gap-2 w-full sm:w-auto cursor-pointer"
            >
              {t.hero.ctaProjects}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              onClick={() => handleScrollTo('contact')}
              className="gap-2 w-full sm:w-auto cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              {t.hero.ctaContact}
            </Button>

            <a 
              href={profileData.cvUrl} 
              download 
              className="w-full sm:w-auto"
            >
              <Button
                variant="ghost"
                className="gap-2 w-full sm:w-auto cursor-pointer border border-transparent hover:border-border-custom"
              >
                <Download className="w-4 h-4" />
                {t.hero.downloadCV}
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Profile Picture Container */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div 
            variants={itemVariants}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-border-custom bg-bg-secondary flex items-center justify-center shadow-inner group"
          >
            <Image 
              src={profileData.avatarUrl} 
              alt={t.hero.avatarAlt} 
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
