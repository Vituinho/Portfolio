import { skillsData } from '@/data/skills';
import type { SkillCategory } from '@/types/portfolio';

export type LineColor = 'backend' | 'cloud' | 'data' | 'frontend' | 'tools';

const categoryLine: Record<SkillCategory, LineColor> = {
  backend: 'backend',
  cloud: 'cloud',
  databases: 'data',
  frontend: 'frontend',
  tools: 'tools'
};

// Project technologies that are not listed as skills on their own.
const extraLines: Record<string, LineColor> = {
  'Mercado Pago': 'backend',
  'WebSocket': 'backend',
  'Better Auth': 'backend',
  'Zod': 'backend',
  'Pydantic': 'backend',
  'Claude API': 'backend',
  'WinForms': 'backend',
  '.NET Compact Framework 3.5': 'backend',
  'Windows CE': 'backend',
  'AWS IAM': 'cloud',
  'Alembic': 'data',
  'Supabase Storage': 'cloud',
  'Azure Speech': 'cloud',
  'React Hook Form': 'frontend',
  'Framer Motion': 'frontend',
  'HTML': 'frontend',
  'CSS': 'frontend'
};

export function lineFor(technology: string): LineColor {
  const skill = skillsData.find(item => item.name === technology);
  return skill ? categoryLine[skill.category] : extraLines[technology] ?? 'tools';
}

export const lineVar = (line: LineColor) => `var(--line-${line})`;
