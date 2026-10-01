'use client';

import { useI18n } from '@/i18n/context';
import { educationData } from '@/data/education';
import { languagesData } from '@/data/languages';
import { Globe, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function Education() {
  const { locale, t } = useI18n();
  const pt = locale === 'pt';
  const education = educationData[0];
  const skills = pt
    ? ['Comunicação em inglês', 'Independência', 'Adaptabilidade', 'Consciência cultural', 'Confiança na comunicação internacional', 'Perspectiva global']
    : ['English communication', 'Independence', 'Adaptability', 'Cultural awareness', 'Confidence communicating internationally', 'Global perspective'];
  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <h2 className="section-title">{t.education.title}</h2>
      <div className="grid lg:grid-cols-[1fr_1.4fr] rounded-2xl overflow-hidden border border-border-custom">
        <div className="bg-bg-secondary p-6 sm:p-8 flex flex-col justify-between gap-8">
          <div>
            <Globe className="size-8 text-text-secondary mb-6" />
            <p className="eyebrow mb-3">Ganhando o Mundo · 2026</p>
            <h3 className="text-4xl font-bold tracking-tight">{pt ? 'Canadá' : 'Canada'}</h3>
            <p className="text-sm text-text-secondary mt-3">Penticton, British Columbia</p>
          </div>
          <div className="border-t border-border-custom pt-5">
            <p className="text-2xl font-semibold">{pt ? 'Inglês' : 'English'} <span className="text-text-secondary">/ C1</span></p>
            <a href={languagesData[0].certificate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm mt-3 hover:underline">
              {pt ? 'Certificado EF SET' : 'EF SET certified'}<ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <p className="flex items-center gap-2 text-sm text-text-secondary mb-3"><GraduationCap className="size-4" />{education.course[locale]}</p>
          <h3 className="text-xl font-semibold mb-4">{education.institution}</h3>
          <p className="text-text-secondary leading-relaxed">{education.description[locale]}</p>
          <ul className="flex flex-wrap gap-2 my-6">
            {skills.map(skill => <li key={skill} className="info-badge text-xs">{skill}</li>)}
          </ul>
          <p className="text-sm text-text-secondary leading-relaxed">
            {pt ? 'A convivência em um ambiente multicultural ampliou minha visão de mundo e minha confiança para colaborar em inglês. Levo essa experiência para o trabalho em tecnologia e para meu interesse em uma carreira internacional.' : 'Living in a multicultural environment broadened my perspective and confidence collaborating in English. I bring that experience to my technology work and my interest in an international career.'}
          </p>
        </div>
      </div>
    </section>
  );
}
