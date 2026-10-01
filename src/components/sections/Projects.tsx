'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/i18n/context';
import { projectsData } from '@/data/projects';
import type { Project } from '@/types/portfolio';
import Card from '../ui/Card';
import { ArrowUpRight, Github, X, ScanBarcode, Ticket, Keyboard, ShoppingBag, Building2 } from 'lucide-react';
import Image from 'next/image';

const coverIcons = { 'givova-ticketing': Ticket, 'givova-coleta': ScanBarcode, keyforge: Keyboard, 'gvv-parana': ShoppingBag };
const featuredOrder = ['givova-website', 'gvv-parana', 'givova-coleta', 'keyforge'];

function ProjectCover({ project, locale }: { project: Project; locale: 'en' | 'pt' }) {
  const Icon = coverIcons[project.id as keyof typeof coverIcons] ?? Building2;
  if (project.image) return (
    <div className="relative aspect-[2/1] overflow-hidden border-b border-border-custom">
      <Image src={project.image} alt={project.title[locale]} fill sizes="(max-width: 767px) 100vw, 560px" className="object-cover" />
    </div>
  );
  return (
    <div className="project-cover aspect-[2/1] border-b border-border-custom p-6 sm:p-8 flex flex-col justify-between" aria-hidden="true">
      <div className="flex justify-between items-center">
        <Icon className="size-8 text-text-secondary" strokeWidth={1.4} />
        <span className="text-xs font-mono text-text-secondary">{project.kind === 'professional' ? 'GIVOVA /' : locale === 'pt' ? 'PESSOAL /' : 'PERSONAL /'}</span>
      </div>
      <div>
        <p className="text-xl sm:text-2xl font-semibold tracking-tight">{project.id === 'givova-coleta' ? 'Givova Coleta' : project.title[locale]}</p>
        <p className="text-xs sm:text-sm text-text-secondary mt-2">{project.coverLabel?.[locale]}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const { locale, t } = useI18n();
  const [kind, setKind] = useState('all');
  const [tech, setTech] = useState('all');
  const [showMore, setShowMore] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const technologies = Array.from(new Set(projectsData.flatMap(p => p.technologies)));
  const filtered = projectsData.filter(p => (kind === 'all' || p.kind === kind) && (tech === 'all' || p.technologies.includes(tech)));
  const featured = filtered.filter(p => p.featured).sort((a, b) => featuredOrder.indexOf(a.id) - featuredOrder.indexOf(b.id));
  const more = filtered.filter(p => !p.featured);
  const filtering = kind !== 'all' || tech !== 'all';

  useEffect(() => {
    if (!activeProject) return;
    const dialog = dialogRef.current;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      trigger?.focus();
    };
  }, [activeProject]);

  const sourceLabel = (project: Project) => project.source === 'private'
    ? t.projects.privateSource : project.source === 'public' ? t.projects.publicSource : project.source === 'open' ? t.projects.openSource : null;
  const links = (project: Project) => (
    <div className="flex gap-3 text-sm">
      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline"><Github className="size-4" />{t.projects.githubLink}</a>}
      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">{t.projects.demoLink}<ArrowUpRight className="size-4" /></a>}
    </div>
  );
  const renderGrid = (items: Project[]) => (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map(project => (
        <article key={project.id} className="min-w-0">
          <Card className="overflow-hidden p-0 h-full flex flex-col">
            <ProjectCover project={project} locale={locale} />
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                <span className={project.kind === 'professional' ? 'project-kind-professional info-badge' : 'info-badge'}>
                  {project.kind === 'professional' ? t.projects.professional : t.projects.personal}
                </span>
                {sourceLabel(project) && <span className="info-badge text-text-secondary">{sourceLabel(project)}</span>}
                {project.status && <span className="info-badge text-text-secondary">{project.status === 'completed' ? t.projects.statusCompleted : project.status === 'live' ? t.projects.statusLive : t.projects.statusInProgress}</span>}
              </div>
              <h3 className="text-lg font-semibold mb-3 leading-snug">{project.title[locale]}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{project.description[locale]}</p>
              <p className="text-sm leading-relaxed text-text-secondary mb-5 border-l-2 border-border-custom pl-3">{project.highlights[locale][0]}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 5).map(item => <span key={item} className="text-xs text-text-secondary rounded border border-border-custom px-2 py-1">{item}</span>)}
                {project.technologies.length > 5 && <span className="text-xs text-text-secondary px-2 py-1">+{project.technologies.length - 5}</span>}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-custom pt-4 mt-auto">
                <button onClick={() => setActiveProject(project)} aria-haspopup="dialog" className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer hover:underline">
                  {t.projects.viewDetails}<ArrowUpRight className="size-4" />
                </button>
                {links(project)}
              </div>
            </div>
          </Card>
        </article>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <div className="flex flex-col gap-5 mb-8">
        <div>
          <p className="eyebrow mb-3">{t.projects.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{t.projects.title}</h2>
          <p className="text-text-secondary max-w-2xl leading-relaxed">{t.projects.subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" aria-label={t.projects.filterCategory}>
            {['all', 'professional', 'personal'].map(item => (
              <button key={item} onClick={() => setKind(item)} aria-pressed={kind === item} className={`px-3 py-2 rounded-lg text-sm border cursor-pointer transition-colors ${kind === item ? 'bg-accent-custom text-bg-primary border-accent-custom' : 'border-border-custom text-text-secondary hover:bg-bg-secondary'}`}>
                {item === 'all' ? t.projects.filterAll : item === 'professional' ? t.projects.professionalFilter : t.projects.personalFilter}
              </button>
            ))}
          </div>
          <label className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
            {t.projects.filterTech}
            <select value={tech} onChange={e => setTech(e.target.value)} className="border border-border-custom bg-bg-primary rounded-lg px-3 py-2 max-w-full">
              <option value="all">{t.projects.filterAll}</option>
              {technologies.map(item => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
      </div>
      {renderGrid(featured)}
      {more.length > 0 && (
        <div className="mt-10">
          {filtering ? <h3 className="text-xl font-semibold mb-6">{t.projects.moreProjects}</h3> : <button onClick={() => setShowMore(!showMore)} aria-expanded={showMore} aria-controls="more-projects" className="action-link border border-border-custom mb-6 hover:bg-bg-secondary">
            {showMore ? t.projects.hideMore : t.projects.moreProjects} ({more.length})
          </button>}
          <div id="more-projects" hidden={!showMore && !filtering}>{renderGrid(more)}</div>
        </div>
      )}
      {filtered.length === 0 && <p className="text-text-secondary py-8" role="status">{t.projects.empty}</p>}
      <dialog ref={dialogRef} aria-labelledby="project-dialog-title" onCancel={e => { e.preventDefault(); setActiveProject(null); }} onClick={e => { if (e.target === e.currentTarget) setActiveProject(null); }} onKeyDown={e => {
        if (e.key !== 'Tab') return;
        const controls = e.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }} className="m-auto w-[calc(100%_-_2rem)] max-w-3xl max-h-[90dvh] overflow-y-auto p-0 rounded-2xl border border-border-custom bg-bg-primary text-text-primary shadow-xl backdrop:bg-black/60">
        {activeProject && (
          <div>
            <div className="sticky top-0 bg-bg-primary z-10 p-5 sm:p-6 border-b border-border-custom flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-2">{activeProject.kind === 'professional' ? t.projects.professional : t.projects.personal}</p>
                <h3 id="project-dialog-title" className="text-xl sm:text-2xl font-semibold">{activeProject.title[locale]}</h3>
              </div>
              <button autoFocus onClick={() => setActiveProject(null)} aria-label={t.projects.closeDetails} className="p-2 shrink-0 rounded-lg border border-border-custom cursor-pointer hover:bg-bg-secondary"><X className="size-5" /></button>
            </div>
            <div className="p-5 sm:p-6 space-y-6">
              <p className="text-text-secondary leading-relaxed">{activeProject.longDescription[locale]}</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div><h4 className="font-semibold mb-2">{t.projects.details.challenge}</h4><p className="text-sm text-text-secondary leading-relaxed">{activeProject.challenges[locale]}</p></div>
                <div><h4 className="font-semibold mb-2">{t.projects.details.role}</h4><p className="text-sm text-text-secondary leading-relaxed">{activeProject.myRole[locale]}</p></div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">{t.projects.details.highlights}</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-text-secondary leading-relaxed">{activeProject.highlights[locale].map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              {activeProject.technologies.length > 0 && <div><h4 className="font-semibold mb-3">{t.projects.technologies}</h4><div className="flex flex-wrap gap-2">{activeProject.technologies.map(item => <span key={item} className="info-badge text-xs">{item}</span>)}</div></div>}
              <div className="border-t border-border-custom pt-4 flex flex-wrap gap-4 items-center justify-between">
                {sourceLabel(activeProject) && <span className="text-sm text-text-secondary">{sourceLabel(activeProject)}</span>}
                {links(activeProject)}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
