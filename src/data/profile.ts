import { ProfileInfo } from '../types/portfolio';

export const profileData: ProfileInfo = {
  name: 'Victor Emanuel',
  title: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
  age: 17,
  shortIntro: {
    en: 'I build backend systems, APIs, cloud infrastructure and automations that a logistics company runs on every day.',
    pt: 'Construo sistemas backend, APIs, infraestrutura em nuvem e automações que uma empresa de logística usa todos os dias.'
  },
  bio: {
    en: "I'm a 17-year-old Software Engineer from Brazil specializing in backend engineering, cloud infrastructure, APIs and automation. I work mainly with TypeScript, Node.js, NestJS, Python, FastAPI and PostgreSQL, and with AWS services such as S3, IAM and SES.",
    pt: 'Sou um Engenheiro de Software brasileiro de 17 anos, especializado em engenharia backend, infraestrutura em nuvem, APIs e automação. Trabalho principalmente com TypeScript, Node.js, NestJS, Python, FastAPI e PostgreSQL, e com serviços da AWS como S3, IAM e SES.'
  },
  story: {
    en: "At Givova Transportes, I build the company's software: a payment-management system, an offline-first barcode collection platform, the corporate website and the GVV Paraná e-commerce. I also keep the IT environment, equipment and business systems running.",
    pt: 'Na Givova Transportes, desenvolvo os softwares da empresa: um sistema de gestão de pagamentos, uma plataforma de coleta de códigos de barras com operação offline, o site corporativo e o e-commerce GVV Paraná. Também mantenho o ambiente de TI, os equipamentos e os sistemas de negócio funcionando.'
  },
  goals: {
    en: 'I want to keep growing as a backend and cloud engineer and build an international career, combining hands-on engineering with an understanding of how businesses operate.',
    pt: 'Quero continuar evoluindo como engenheiro backend e de nuvem e construir uma carreira internacional, unindo a prática da engenharia ao entendimento de como as empresas operam.'
  },
  passions: {
    en: 'In 2026, I lived and studied in Canada for six months through an international exchange program. I communicate in English at an advanced (C1) level, and the exchange strengthened my independence, adaptability and communication in multicultural environments.',
    pt: 'Em 2026, morei e estudei no Canadá por seis meses por meio de um intercâmbio internacional. Tenho inglês avançado (C1), e a experiência fortaleceu minha independência, adaptabilidade e comunicação em ambientes multiculturais.'
  },
  avatarUrl: '/images/avatar.jpeg',
  cvUrl: '/vituinho-cv.pdf'
};
