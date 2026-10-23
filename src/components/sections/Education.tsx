'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Images } from 'lucide-react';
import { useI18n } from '@/i18n/context';
import { educationData } from '@/data/education';
import { languagesData } from '@/data/languages';
import type { GalleryPhoto } from '@/types/portfolio';
import PhotoLightbox from '../ui/PhotoLightbox';

const copy = {
  en: {
    headline: 'Beyond the classroom.',
    story: 'In 2026, I spent six months in Penticton, British Columbia, living with a host family and studying at Princess Margaret Secondary School through the Ganhando o Mundo program. Learning, building projects and making friends in English every day changed how I communicate, adapt and take responsibility, and it shaped the perspective I bring to engineering work.',
    facts: { program: 'Program', school: 'School', place: 'Location', period: 'Period', english: 'English' },
    months: 'months',
    englishLevel: 'Advanced, C1',
    certificate: 'EF SET certificate',
    explore: 'Explore gallery',
    photos: 'photos',
    open: 'Open photo',
    galleryLabel: 'Canada exchange photo gallery',
    changedTitle: 'What it changed',
    changed: [
      { title: 'International perspective', text: 'A different school system and culture showed me new ways to learn, collaborate and solve problems.' },
      { title: 'Communication', text: 'Six months of classes, home life and friendships in English, now certified at C1 by EF SET.' },
      { title: 'Adaptability', text: 'New routines, subjects and people from the first week, and learning to adjust quickly.' },
      { title: 'Independence', text: 'Taking responsibility for my studies, time and decisions far from home.' }
    ]
  },
  pt: {
    headline: 'Muito além da sala de aula.',
    story: 'Em 2026, passei seis meses em Penticton, na Colúmbia Britânica, morando com uma família anfitriã e estudando na Princess Margaret Secondary School pelo programa Ganhando o Mundo. Estudar, desenvolver projetos e fazer amizades em inglês todos os dias mudou a forma como me comunico, me adapto e assumo responsabilidades, e moldou a perspectiva que levo para o trabalho de engenharia.',
    facts: { program: 'Programa', school: 'Escola', place: 'Local', period: 'Período', english: 'Inglês' },
    months: 'meses',
    englishLevel: 'Avançado, C1',
    certificate: 'Certificado EF SET',
    explore: 'Explorar galeria',
    photos: 'fotos',
    open: 'Abrir foto',
    galleryLabel: 'Galeria de fotos do intercâmbio no Canadá',
    changedTitle: 'O que mudou',
    changed: [
      { title: 'Perspectiva internacional', text: 'Um sistema escolar e uma cultura diferentes me mostraram novas formas de aprender, colaborar e resolver problemas.' },
      { title: 'Comunicação', text: 'Seis meses de aulas, convivência em família e amizades em inglês, hoje certificado no nível C1 pelo EF SET.' },
      { title: 'Adaptabilidade', text: 'Novas rotinas, matérias e pessoas desde a primeira semana, aprendendo a me ajustar rápido.' },
      { title: 'Independência', text: 'Assumir a responsabilidade pelos meus estudos, meu tempo e minhas decisões longe de casa.' }
    ]
  }
};

function PhotoButton({ photo, index, locale, label, sizes, className, onOpen }: {
  photo: GalleryPhoto; index: number; locale: 'en' | 'pt'; label: string; sizes: string; className: string; onOpen: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`${label}: ${photo.alt[locale]}`}
      className={`group relative block w-full cursor-zoom-in overflow-hidden bg-bg-secondary ${className}`}
    >
      <Image
        src={photo.src}
        alt=""
        fill
        sizes={sizes}
        quality={85}
        style={{ objectPosition: photo.focus ?? '50% 50%' }}
        className="object-cover transition-[transform,filter] duration-[900ms] ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035] brightness-[0.92] group-hover:brightness-100"
      />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </button>
  );
}

export default function Education() {
  const { locale, t } = useI18n();
  const c = copy[locale];
  const exchange = educationData[0];
  const english = languagesData.find(language => language.cefr === 'C1');
  const photos = exchange.gallery ?? [];
  const [active, setActive] = useState<number | null>(null);
  const [featured, ...rest] = photos;
  const supporting = rest.slice(0, 3);

  return (
    <section id="education" className="section-shell" aria-labelledby="education-title">
      {/* Phones: story, feature photo, facts, more photos. Desktop: feature photo left, everything else in the right column. */}
      <div className="grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] lg:gap-x-14 lg:gap-y-8">

        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:pt-2">
          <p className="eyebrow">{t.education.title}</p>
          <h2 id="education-title" className="mt-3 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            {c.headline}
          </h2>
          <p className="mt-6 max-w-[56ch] text-[15px] leading-7 text-text-secondary sm:text-base">{c.story}</p>
        </div>

        {featured && (
          <PhotoButton
            photo={featured}
            index={0}
            locale={locale}
            label={c.open}
            onOpen={setActive}
            sizes="(max-width: 1023px) calc(100vw - 48px), 620px"
            className="aspect-[4/5] rounded-2xl lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:aspect-auto lg:min-h-[640px]"
          />
        )}

        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
          <dl className="grid grid-cols-[minmax(6.5rem,auto)_1fr] gap-x-6 border-t border-border-custom text-sm">
            {[
              [c.facts.program, exchange.program],
              [c.facts.school, exchange.institution],
              [c.facts.place, exchange.location?.[locale]],
              [c.facts.period, `${exchange.period?.[locale]}, ${exchange.durationMonths} ${c.months}`]
            ].map(([term, value]) => (
              <div key={term} className="contents">
                <dt className="border-b border-border-custom py-3 text-text-secondary">{term}</dt>
                <dd className="border-b border-border-custom py-3 font-medium">{value}</dd>
              </div>
            ))}
            {english && (
              <div className="contents">
                <dt className="border-b border-border-custom py-3 text-text-secondary">{c.facts.english}</dt>
                <dd className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border-custom py-3 font-medium">
                  {c.englishLevel}
                  {english.certificate && (
                    <a href={english.certificate} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1 text-text-secondary hover:text-text-primary hover:underline underline-offset-4">
                      {c.certificate}<ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  )}
                </dd>
              </div>
            )}
          </dl>
        </div>

        <div className="flex flex-col lg:col-span-5 lg:col-start-8 lg:row-start-3 lg:justify-end">
          <div className="grid grid-cols-3 gap-3">
            {supporting.map((photo, i) => (
              <PhotoButton
                key={photo.src}
                photo={photo}
                index={i + 1}
                locale={locale}
                label={c.open}
                onOpen={setActive}
                sizes="(max-width: 1023px) 31vw, 140px"
                className="aspect-[3/4] rounded-xl"
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActive(0)}
            aria-haspopup="dialog"
            className="action-link mt-5 self-start border border-border-strong hover:bg-bg-secondary"
          >
            <Images aria-hidden="true" className="size-4" />
            {c.explore}
            <span className="text-text-secondary">{photos.length} {c.photos}</span>
          </button>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <h3 className="text-lg font-semibold tracking-tight">{c.changedTitle}</h3>
        <ul className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {c.changed.map(item => (
            <li key={item.title} className="border-t border-border-strong pt-4">
              <p className="font-medium">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <PhotoLightbox
        photos={photos}
        index={active}
        locale={locale}
        label={c.galleryLabel}
        onIndexChange={setActive}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
