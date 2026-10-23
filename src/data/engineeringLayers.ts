export type StackDomain = 'frontend' | 'backend' | 'data' | 'cloud';

export interface EngineeringLayer {
  domain: StackDomain;
  name: { en: string; pt: string };
  detail: { en: string; pt: string };
  tools: string[];
}

// The layers of a business system, from what people use down to where it runs.
export const engineeringLayers: EngineeringLayer[] = [
  {
    domain: 'frontend',
    name: { en: 'Business applications', pt: 'Aplicações de negócio' },
    detail: { en: 'Interfaces for teams and customers', pt: 'Interfaces para equipes e clientes' },
    tools: ['Next.js', 'React', 'TypeScript']
  },
  {
    domain: 'backend',
    name: { en: 'Backend and APIs', pt: 'Backend e APIs' },
    detail: { en: 'Business rules, authentication and integrations', pt: 'Regras de negócio, autenticação e integrações' },
    tools: ['Node.js', 'NestJS', 'Python', 'Laravel']
  },
  {
    domain: 'data',
    name: { en: 'Data', pt: 'Dados' },
    detail: { en: 'Relational models, migrations and backups', pt: 'Modelos relacionais, migrações e backups' },
    tools: ['PostgreSQL', 'Prisma', 'MySQL']
  },
  {
    domain: 'cloud',
    name: { en: 'Cloud and delivery', pt: 'Nuvem e entrega' },
    detail: { en: 'Deployments, automation and monitoring', pt: 'Deploys, automação e monitoramento' },
    tools: ['AWS', 'Docker', 'GitHub Actions']
  }
];
