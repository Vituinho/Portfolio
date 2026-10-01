'use client';

import { useI18n } from '@/i18n/context';
import { educationData } from '@/data/education';
import { languagesData } from '@/data/languages';
import { GraduationCap, ArrowUpRight, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Education() {
  const { locale, t } = useI18n();
  const pt = locale === 'pt';
  const education = educationData[0];
  const skills = pt
    ? ['Comunicação internacional', 'Independência', 'Adaptabilidade', 'Consciência cultural']
    : ['International communication', 'Independence', 'Adaptability', 'Cultural awareness'];
  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <p className="eyebrow mb-3">{pt ? 'Educação além das fronteiras' : 'Education beyond borders'}</p>
      <h2 className="section-title">{t.education.title}</h2>
      <div className="rounded-2xl overflow-hidden border border-border-custom bg-bg-card">
        {education.image && (
          <figure className="bg-bg-secondary">
            <Image src={education.image} alt={education.imageAlt?.[locale] ?? (pt ? 'Intercâmbio no Canadá' : 'Canada exchange')} width={1672} height={941} sizes="(max-width: 1151px) calc(100vw - 32px), 1120px" quality={90} className="w-full h-auto" />
            <figcaption className="px-6 sm:px-8 lg:px-10 py-3 border-t border-border-custom">
              <a href={education.image} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
                {pt ? 'Ver colagem completa' : 'View full collage'}<ArrowUpRight className="size-4" />
              </a>
            </figcaption>
          </figure>
        )}
        <div className="grid lg:grid-cols-[1fr_2fr] border-t border-border-custom">
          <div className="bg-bg-secondary flex flex-col">
            {!education.image && (
              <div className="project-cover p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between gap-12">
                <p className="eyebrow">Ganhando o Mundo</p>
                <div>
                  <p className="text-6xl sm:text-8xl font-semibold tracking-tighter text-text-secondary">{education.startDate}</p>
                  <h3 className="text-4xl sm:text-5xl font-semibold mt-4 tracking-tight">{pt ? 'Canadá' : 'Canada'}</h3>
                </div>
              </div>
            )}
            <div className="p-6 sm:p-8 lg:px-10">
              {education.image && <p className="font-semibold text-xl mb-3">{pt ? 'Canadá' : 'Canada'} · {education.startDate}</p>}
              <p className="flex items-center gap-2 text-sm text-text-secondary"><MapPin className="size-4 shrink-0" />Penticton, British Columbia</p>
              <div className="flex flex-wrap gap-2 mt-4 text-xs">
                {education.durationMonths && <span className="info-badge">{education.durationMonths} {pt ? 'meses' : 'months'}</span>}
                <span className="info-badge">{pt ? 'Intercâmbio Internacional' : 'International Exchange'}</span>
                {education.image && <span className="info-badge">Ganhando o Mundo</span>}
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <p className="flex items-center gap-2 text-sm text-text-secondary mb-4"><GraduationCap className="size-4 shrink-0" />{education.course[locale]}</p>
            <h3 className="text-2xl font-semibold mb-5 tracking-tight">{education.institution}</h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">{education.description[locale]}</p>
            <ul className="flex flex-wrap gap-2 my-6">
              {skills.map(skill => <li key={skill} className="info-badge text-xs">{skill}</li>)}
            </ul>
            <p className="text-sm text-text-secondary leading-relaxed mb-7">
              {pt ? 'A experiência ampliou minha perspectiva global e minha confiança para colaborar em inglês. São habilidades que levo para o trabalho em tecnologia e para a construção de uma carreira internacional.' : 'The experience broadened my global perspective and confidence collaborating in English. I bring those skills to my technology work and to building an international career.'}
            </p>
            <div className="border-t border-border-custom pt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xl font-semibold">{pt ? 'Inglês' : 'English'} <span className="text-text-secondary">/ C1</span></p>
              <a href={languagesData[0].certificate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium rounded-lg border border-border-custom px-3 py-2 hover:bg-bg-secondary transition-colors">
                {pt ? 'Certificado EF SET' : 'EF SET certified'}<ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
