'use client';

import { useState, useRef, useEffect, type CSSProperties } from 'react';
import { useI18n } from '@/i18n/context';
import { projectsData } from '@/data/projects';
import type { Project } from '@/types/portfolio';
import { lineFor, lineVar } from '@/lib/stack';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Github, X, Lock, Globe } from 'lucide-react';
import Image from 'next/image';

type Locale = 'en' | 'pt';

const professionalOrder = ['givova-website', 'gvv-parana', 'givova-pagamentos', 'givova-coleta', 'givova-ticketing'];
const personalOrder = ['keyforge', 'je-parle-francais', 'guessword', 'eventhub'];
const byOrder = (order: string[]) => (a: Project, b: Project) => order.indexOf(a.id) - order.indexOf(b.id);

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, '');
const repoPathOf = (url: string) => new URL(url).host + new URL(url).pathname;

function TechTag({ name }: { name: string }) {
  return (
    <li className="tech-tag gap-1.5">
      <span aria-hidden="true" className="line-dot size-1.5" style={{ '--dot': lineVar(lineFor(name)) } as CSSProperties} />
      {name}
    </li>
  );
}

function ProjectMedia({ project, locale, sizes, className }: { project: Project; locale: Locale; sizes: string; className?: string }) {
  const { t } = useI18n();
  const address = project.demoUrl ? hostOf(project.demoUrl) : project.githubUrl ? repoPathOf(project.githubUrl) : project.title[locale];
  const status = project.status === 'live' ? t.projects.statusLive : project.status === 'in-progress' ? t.projects.statusInProgress : null;

  return (
    <div className={cn('flex flex-col bg-bg-secondary', className)}>
      <div className="flex h-9 items-center gap-2 border-b border-border-custom px-3 text-xs text-text-secondary">
        {project.demoUrl ? <Lock aria-hidden="true" className="size-3 shrink-0" /> : project.githubUrl ? <Github aria-hidden="true" className="size-3 shrink-0" /> : <Globe aria-hidden="true" className="size-3 shrink-0" />}
        <span className="min-w-0 truncate">{address}</span>
        {status && (
          <span className="ml-auto inline-flex shrink-0 items-center gap-1.5">
            <span aria-hidden="true" className="line-dot size-1.5" style={{ '--dot': project.status === 'live' ? 'var(--line-data)' : 'var(--line-backend)' } as CSSProperties} />
            {status}
          </span>
        )}
      </div>
      <div className="relative aspect-[2/1] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt?.[locale] ?? `${project.title[locale]} — ${locale === 'pt' ? 'interface do projeto' : 'project interface'}`}
            fill
            sizes={sizes}
            quality={85}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        ) : (
          <div className="project-cover absolute inset-0 flex flex-col justify-between p-5 sm:p-7" aria-hidden="true">
            <div>
              <p className="font-display text-2xl sm:text-4xl font-semibold tracking-[-0.035em]">{project.title[locale]}</p>
              {project.tagline && <p className="mt-2 font-display text-base sm:text-xl text-text-secondary tracking-[-0.01em]">{project.tagline[locale]}</p>}
            </div>
            {project.coverLabel && (
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs sm:text-sm text-text-secondary">
                {project.coverLabel[locale].split(' → ').map((step, index, steps) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5">
                      <span className="line-dot" style={{ '--dot': lineVar((['frontend', 'backend', 'data', 'cloud'] as const)[index % 4]) } as CSSProperties} />
                      {step}
                    </span>
                    {index < steps.length - 1 && <span className="h-px w-6 bg-border-strong" />}
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectActions({ project, locale, onDetails, size = 'md' }: { project: Project; locale: Locale; onDetails?: () => void; size?: 'md' | 'lg' }) {
  const { t } = useI18n();
  const base = cn('inline-flex items-center gap-1.5 rounded-lg px-3 text-sm font-medium transition-colors', size === 'lg' ? 'min-h-11' : 'min-h-10');
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.demoLink}: ${project.title[locale]}`} className={cn(base, 'bg-accent-custom text-bg-primary hover:bg-accent-muted')}>
          {t.projects.demoLink}<ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      )}
      {project.githubUrl && project.source !== 'private' && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.githubLink}: ${project.title[locale]}`} className={cn(base, 'border border-border-strong hover:bg-bg-secondary')}>
          <Github aria-hidden="true" className="size-4" />{t.projects.githubLink}
        </a>
      )}
      {onDetails && (
        <button type="button" onClick={onDetails} aria-haspopup="dialog" aria-label={`${t.projects.viewDetails}: ${project.title[locale]}`} className={cn(base, 'ml-auto cursor-pointer text-text-secondary hover:text-text-primary hover:bg-bg-secondary')}>
          {t.projects.viewDetails}
        </button>
      )}
    </div>
  );
}

function ProjectCard({ project, locale, lead = false, onDetails }: { project: Project; locale: Locale; lead?: boolean; onDetails: () => void }) {
  const { t } = useI18n();
  const tech = project.coreTechnologies ?? project.technologies.slice(0, 5);
  const heading = (
    <>
      <h4 className={cn('font-semibold tracking-[-0.02em] leading-tight', lead ? 'text-2xl sm:text-[2rem]' : 'text-xl sm:text-2xl')}>{project.title[locale]}</h4>
      <p className="mt-1.5 text-sm text-text-secondary">{project.categoryLabel?.[locale] ?? project.category}</p>
      <p className={cn('mt-4 leading-relaxed text-text-secondary', lead ? 'text-[15px] sm:text-base max-w-[52ch]' : 'text-sm sm:text-[15px]')}>{project.description[locale]}</p>
    </>
  );
  const techList = tech.length > 0 && (
    <ul aria-label={t.projects.technologies} className="mt-5 flex flex-wrap gap-1.5">
      {tech.map(item => <TechTag key={item} name={item} />)}
    </ul>
  );

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-border-custom bg-bg-card transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_24px_48px_-32px_rgb(0_0_0/0.55)] focus-within:border-border-strong">
      <ProjectMedia
        project={project}
        locale={locale}
        className="border-b border-border-custom"
        sizes={lead ? '(max-width: 1151px) calc(100vw - 32px), 1088px' : '(max-width: 767px) calc(100vw - 32px), (max-width: 1151px) 50vw, 544px'}
      />
      {lead ? (
        <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12">
          <div>{heading}</div>
          <div className="flex flex-col">
            <ul className="space-y-2.5 text-sm leading-relaxed">
              {project.highlights[locale].slice(0, 3).map(item => (
                <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-text-secondary" />{item}</li>
              ))}
            </ul>
            {techList}
            <div className="mt-6 border-t border-border-custom pt-4">
              <ProjectActions project={project} locale={locale} onDetails={onDetails} size="lg" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {heading}
          {techList}
          <div className="mt-auto pt-6">
            <div className="border-t border-border-custom pt-4">
              <ProjectActions project={project} locale={locale} onDetails={onDetails} />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const { locale, t } = useI18n();
  const [kind, setKind] = useState('all');
  const [tech, setTech] = useState('all');
  const [showMore, setShowMore] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const technologies = Array.from(new Set(projectsData.flatMap(p => p.technologies))).sort((a, b) => a.localeCompare(b));
  const filtered = projectsData.filter(p => (kind === 'all' || p.kind === kind) && (tech === 'all' || p.technologies.includes(tech)));
  const professional = filtered.filter(p => p.kind === 'professional').sort(byOrder(professionalOrder));
  const personal = filtered.filter(p => p.kind === 'personal').sort(byOrder(personalOrder));
  const filtering = kind !== 'all' || tech !== 'all';
  const personalFeatured = personal.filter(p => p.featured);
  const personalMore = personal.filter(p => !p.featured);

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

  const [lead, ...restProfessional] = professional;

  return (
    <section id="projects" className="section-shell">
      <div className="flex flex-col gap-8 mb-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 lg:flex-1">
          <h2 className="section-title mb-4!">{t.projects.title}</h2>
          <p className="section-lead">{t.projects.subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0">
          <div role="group" aria-label={t.projects.filterCategory} className="grid grid-cols-3 rounded-lg border border-border-custom bg-bg-secondary p-1">
            {['all', 'professional', 'personal'].map(item => (
              <button key={item} type="button" onClick={() => setKind(item)} aria-pressed={kind === item} className={cn(
                'min-h-10 rounded-md px-3 text-sm cursor-pointer transition-colors',
                kind === item ? 'bg-bg-primary text-text-primary shadow-[0_1px_2px_rgb(0_0_0/0.25)] ring-1 ring-border-custom' : 'text-text-secondary hover:text-text-primary'
              )}>
                {item === 'all' ? t.projects.filterAll : item === 'professional' ? t.projects.professionalFilter : t.projects.personalFilter}
              </button>
            ))}
          </div>
          <label className="flex min-w-0 items-center gap-2 text-sm text-text-secondary">
            <span className="shrink-0">{t.projects.filterTech}</span>
            <select value={tech} onChange={e => setTech(e.target.value)} className="min-h-11 min-w-0 flex-1 sm:flex-none cursor-pointer rounded-lg border border-border-custom bg-bg-primary px-3 py-2 text-text-primary">
              <option value="all">{t.projects.filterAll}</option>
              {technologies.map(item => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
      </div>

      {professional.length > 0 && (
        <div className="mb-16">
          <div className="mb-6 flex flex-col gap-1 border-l-2 border-line-backend pl-4">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{t.projects.groupProfessional}</h3>
            <p className="text-sm text-text-secondary">{t.projects.groupProfessionalLead}</p>
          </div>
          <div className="grid gap-6 lg:gap-8">
            {lead && <ProjectCard project={lead} locale={locale} lead onDetails={() => setActiveProject(lead)} />}
            {restProfessional.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {restProfessional.map(project => <ProjectCard key={project.id} project={project} locale={locale} onDetails={() => setActiveProject(project)} />)}
              </div>
            )}
          </div>
        </div>
      )}

      {personal.length > 0 && (
        <div>
          <div className="mb-6 flex flex-col gap-1 border-l-2 border-line-frontend pl-4">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{t.projects.groupPersonal}</h3>
            <p className="text-sm text-text-secondary">{t.projects.groupPersonalLead}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {(filtering ? personal : personalFeatured).map(project => <ProjectCard key={project.id} project={project} locale={locale} onDetails={() => setActiveProject(project)} />)}
          </div>
          {!filtering && personalMore.length > 0 && (
            <div className="mt-8">
              <button type="button" onClick={() => setShowMore(!showMore)} aria-expanded={showMore} aria-controls="more-projects" className="action-link border border-border-custom mb-6 hover:bg-bg-secondary">
                {showMore ? t.projects.hideMore : t.projects.moreProjects} ({personalMore.length})
              </button>
              <div id="more-projects" hidden={!showMore} className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {personalMore.map(project => <ProjectCard key={project.id} project={project} locale={locale} onDetails={() => setActiveProject(project)} />)}
              </div>
            </div>
          )}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="rounded-xl border border-dashed border-border-strong p-8 text-center" role="status">
          <p className="text-text-secondary">{t.projects.empty}</p>
          <button type="button" onClick={() => { setKind('all'); setTech('all'); }} className="action-link mt-4 border border-border-strong hover:bg-bg-secondary">{t.projects.clearFilters}</button>
        </div>
      )}

      <dialog ref={dialogRef} aria-labelledby="project-dialog-title" onCancel={e => { e.preventDefault(); setActiveProject(null); }} onClick={e => { if (e.target === e.currentTarget) setActiveProject(null); }} onKeyDown={e => {
        if (e.key !== 'Tab') return;
        const controls = e.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }} className="m-auto w-[calc(100%_-_1.5rem)] sm:w-[calc(100%_-_3rem)] max-w-3xl max-h-[92dvh] overflow-y-auto overscroll-contain p-0 rounded-2xl border border-border-strong bg-bg-primary text-text-primary shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm">
        {activeProject && (
          <div>
            <div className="sticky top-0 bg-bg-primary/95 backdrop-blur z-10 p-4 sm:p-6 border-b border-border-custom flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 id="project-dialog-title" className="text-xl sm:text-2xl font-semibold leading-snug tracking-tight">{activeProject.title[locale]}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {activeProject.categoryLabel?.[locale] ?? activeProject.category}
                  <span className="mx-2 text-border-strong" aria-hidden="true">/</span>
                  {activeProject.kind === 'professional' ? t.projects.professional : t.projects.personal}
                </p>
              </div>
              <button autoFocus type="button" onClick={() => setActiveProject(null)} aria-label={t.projects.closeDetails} className="size-11 inline-flex items-center justify-center shrink-0 rounded-lg border border-border-custom cursor-pointer hover:bg-bg-secondary transition-colors"><X className="size-5" /></button>
            </div>
            <div className="p-4 sm:p-6 space-y-8">
              <figure className="overflow-hidden rounded-xl border border-border-custom">
                <ProjectMedia project={activeProject} locale={locale} sizes="(max-width: 767px) calc(100vw - 56px), 720px" />
                {activeProject.image && (
                  <figcaption className="border-t border-border-custom px-4 py-1 text-xs text-text-secondary">
                    <a href={activeProject.image} target="_blank" rel="noopener noreferrer" className="min-h-10 inline-flex items-center gap-1.5 font-medium hover:text-text-primary hover:underline underline-offset-4">{t.projects.openImage}<ArrowUpRight className="size-3.5" /></a>
                  </figcaption>
                )}
              </figure>
              <p className="max-w-[65ch] text-[15px] sm:text-base text-text-secondary leading-relaxed">{activeProject.longDescription[locale]}</p>
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 border-y border-border-custom py-6">
                <div><h4 className="font-semibold mb-2">{t.projects.details.challenge}</h4><p className="text-sm text-text-secondary leading-relaxed">{activeProject.challenges[locale]}</p></div>
                <div><h4 className="font-semibold mb-2">{t.projects.details.role}</h4><p className="text-sm text-text-secondary leading-relaxed">{activeProject.myRole[locale]}</p></div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">{t.projects.details.highlights}</h4>
                <ul className="space-y-2.5 text-sm text-text-secondary leading-relaxed">{activeProject.highlights[locale].map(item => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-text-secondary" />{item}</li>)}</ul>
              </div>
              {activeProject.planned && (
                <div className="rounded-xl border border-dashed border-border-strong p-4 sm:p-5">
                  <h4 className="font-semibold mb-3">{t.projects.details.planned}</h4>
                  <ul className="space-y-2.5 text-sm text-text-secondary leading-relaxed">{activeProject.planned[locale].map(item => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-border-strong" />{item}</li>)}</ul>
                </div>
              )}
              {activeProject.technologies.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">{t.projects.technologies}</h4>
                  <ul className="flex flex-wrap gap-2">{activeProject.technologies.map(item => <TechTag key={item} name={item} />)}</ul>
                </div>
              )}
              <div className="border-t border-border-custom pt-5 flex flex-wrap gap-4 items-center justify-between">
                {sourceLabel(activeProject) && <span className="inline-flex items-center gap-2 text-sm text-text-secondary">{activeProject.source === 'private' && <Lock aria-hidden="true" className="size-3.5" />}{sourceLabel(activeProject)}</span>}
                <ProjectActions project={activeProject} locale={locale} size="lg" />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
