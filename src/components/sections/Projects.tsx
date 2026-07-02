'use client';

import React, { useState, useMemo } from 'react';
import { useI18n } from '@/i18n/context';
import { projectsData } from '@/data/projects';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ExternalLink, Github, Sparkles, Folder, Eye, X, Calendar, User, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const { locale, t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [activeDetailProject, setActiveDetailProject] = useState<string | null>(null);

  // Derive categories and technologies lists for filters
  const categories = useMemo(() => {
    const cats = new Set(projectsData.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const technologies = useMemo(() => {
    const techs = new Set<string>();
    projectsData.forEach(p => p.technologies.forEach(t => techs.add(t)));
    return ['All', ...Array.from(techs)];
  }, []);

  // Filter projects list
  const filteredProjects = useMemo(() => {
    return projectsData.filter(p => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchTech = selectedTech === 'All' || p.technologies.includes(selectedTech);
      return matchCat && matchTech;
    });
  }, [selectedCategory, selectedTech]);

  const detailProjectObj = useMemo(() => {
    return projectsData.find(p => p.id === activeDetailProject) || null;
  }, [activeDetailProject]);

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-3 relative pb-3 border-b border-border-custom max-w-max">
              {t.projects.title}
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-accent-custom text-bg-primary border-accent-custom"
                    : "bg-bg-secondary text-text-secondary border-border-custom hover:border-text-secondary/30"
                }`}
              >
                {cat === 'All' ? t.projects.filterAll : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Filter dropdown / list */}
        <div className="mb-8 flex flex-wrap items-center gap-3 bg-bg-secondary border border-border-custom rounded-xl p-4">
          <span className="text-xs font-bold text-text-secondary flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent-custom" />
            {t.projects.filterTech}:
          </span>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-2.5 py-1 rounded-md text-xs transition-all cursor-pointer ${
                  selectedTech === tech
                    ? "bg-accent-custom/10 text-accent-custom border border-accent-custom/30 font-semibold"
                    : "bg-bg-primary text-text-secondary border border-border-custom/50 hover:bg-bg-secondary"
                }`}
              >
                {tech === 'All' ? t.projects.filterAll : tech}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="flex flex-col h-full overflow-hidden p-0">
                  {/* Visual Image/Cover Box */}
                  <div className="relative aspect-video bg-bg-secondary border-b border-border-custom/40 select-none overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title[locale]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                    {/* Featured Overlay Badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-accent-custom text-bg-primary text-[10px] font-bold tracking-wider px-2 py-0.5 rounded uppercase flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        {t.projects.badgeFeatured}
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded border ${
                      project.status === 'completed'
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                    }`}>
                      {project.status === 'completed' ? t.projects.statusCompleted : t.projects.statusInProgress}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg text-text-primary mb-2 line-clamp-1">
                      {project.title[locale]}
                    </h3>
                    
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                      {project.description[locale]}
                    </p>

                    {/* Technologies list */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-bg-secondary border border-border-custom/50 text-[10px] text-text-secondary font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded bg-bg-secondary border border-border-custom/50 text-[10px] text-text-secondary font-bold">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links and Buttons */}
                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-border-custom/40 mt-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setActiveDetailProject(project.id)}
                        className="gap-1.5 flex-grow cursor-pointer text-xs"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        {t.projects.viewDetails}
                      </Button>

                      <div className="flex items-center gap-1">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg border border-border-custom hover:border-accent-custom hover:text-accent-custom transition-all text-text-secondary"
                            aria-label={t.projects.githubLink}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg border border-border-custom hover:border-accent-custom hover:text-accent-custom transition-all text-text-secondary"
                            aria-label={t.projects.demoLink}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Details Dialog Modal */}
      <AnimatePresence>
        {detailProjectObj && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDetailProject(null)}
              className="absolute inset-0 bg-black"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-bg-primary border border-border-custom rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Header section with cover */}
              <div className="relative aspect-video bg-bg-secondary border-b border-border-custom/50">
                <Image
                  src={detailProjectObj.image}
                  alt={detailProjectObj.title[locale]}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveDetailProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-border-custom hover:bg-bg-primary transition-all cursor-pointer text-text-primary z-20 shadow-sm"
                  aria-label={t.projects.closeDetails}
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-bg-primary/95 text-xs text-text-primary font-bold border border-border-custom shadow-sm">
                    {detailProjectObj.category}
                  </span>
                </div>
              </div>

              {/* Scrollable details */}
              <div className="p-6 overflow-y-auto flex-grow flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {detailProjectObj.title[locale]}
                  </h3>
                  <p className="text-xs text-text-secondary flex items-center gap-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {detailProjectObj.year}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {detailProjectObj.duration[locale]}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {detailProjectObj.myRole[locale]}</span>
                  </p>
                </div>

                <div className="text-text-secondary text-sm leading-relaxed flex flex-col gap-4">
                  <p>{detailProjectObj.longDescription[locale]}</p>
                </div>

                {/* Grid details (Challenge & Lessons) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-border-custom/50 pt-4">
                  <div>
                    <h4 className="font-bold text-sm text-text-primary mb-1">
                      {t.projects.details.challenge}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {detailProjectObj.challenges[locale]}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-text-primary mb-1">
                      {t.projects.details.lessons}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {detailProjectObj.lessonsLearned[locale]}
                    </p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="border-t border-border-custom/50 pt-4">
                  <h4 className="font-bold text-sm text-text-primary mb-2">
                    {t.projects.details.highlights}
                  </h4>
                  <ul className="list-disc pl-5 text-xs text-text-secondary flex flex-col gap-1.5">
                    {detailProjectObj.highlights[locale].map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Full tech stack list */}
                <div className="border-t border-border-custom/50 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {detailProjectObj.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-bg-secondary border border-border-custom/50 text-[10px] text-text-primary font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons footer */}
              <div className="border-t border-border-custom/50 p-4 bg-bg-secondary flex justify-between items-center gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setActiveDetailProject(null)}
                  className="cursor-pointer text-xs"
                >
                  {t.projects.closeDetails}
                </Button>

                <div className="flex items-center gap-2">
                  {detailProjectObj.githubUrl && (
                    <a
                      href={detailProjectObj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="gap-1.5 text-xs cursor-pointer">
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </Button>
                    </a>
                  )}
                  {detailProjectObj.demoUrl && (
                    <a
                      href={detailProjectObj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="gap-1.5 text-xs cursor-pointer">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
