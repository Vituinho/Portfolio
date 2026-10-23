import { Experience } from '../types/portfolio';

export const experienceData: Experience[] = [
  {
    company: 'Givova Transportes',
    position: {
      en: 'Software Engineer',
      pt: 'Engenheiro de Software'
    },
    location: { en: 'Brazil', pt: 'Brasil' },
    description: {
      en: "I design and build the backend systems, APIs, cloud infrastructure and automations behind Givova Transportes' operations, from payments and barcode collection to customer-facing websites, and I support the company's IT environment.",
      pt: 'Projeto e desenvolvo os sistemas backend, APIs, infraestrutura em nuvem e automações da operação da Givova Transportes, de pagamentos e coleta de códigos de barras a sites para clientes, e dou suporte ao ambiente de TI da empresa.'
    },
    technologies: ['TypeScript', 'Node.js', 'Python', 'FastAPI', 'Laravel', 'PostgreSQL', 'AWS', 'GitHub Actions', 'Next.js', 'C#', 'Windows CE'],
    achievements: {
      en: [
        'Built Givova Pagamentos, a payment-management system with authentication, authorization and operational workflows from payment request to receipt.',
        'Built Givova Coleta, an offline-first barcode collection platform: a C# client for Windows CE handhelds, a FastAPI sync API with idempotent retries, PostgreSQL and a Next.js admin panel.',
        'Designed automated, monitored database backups on AWS, run by GitHub Actions without long-lived credentials.',
        'Developed the Givova Transportes corporate website and the GVV Paraná e-commerce, including checkout with signed Mercado Pago webhooks.',
        'Built an internal IT ticketing platform (FastAPI, SQLAlchemy, Next.js), automations and monitoring tools.',
        'Configure cloud and hosting services on AWS, Railway and cPanel, including transactional email and deployments.',
        'Support employees, workstations, devices and business systems such as DBFrete.'
      ],
      pt: [
        'Desenvolvi o Givova Pagamentos, sistema de gestão de pagamentos com autenticação, autorização e fluxos operacionais da solicitação ao comprovante.',
        'Desenvolvi o Givova Coleta, plataforma de coleta de códigos de barras com operação offline: cliente C# para coletores Windows CE, API de sincronização em FastAPI com novas tentativas idempotentes, PostgreSQL e painel administrativo em Next.js.',
        'Projetei backups automatizados e monitorados de banco de dados na AWS, executados pelo GitHub Actions sem credenciais de longa duração.',
        'Desenvolvi o site corporativo da Givova Transportes e o e-commerce GVV Paraná, incluindo checkout com webhooks assinados do Mercado Pago.',
        'Desenvolvi uma plataforma interna de chamados de TI (FastAPI, SQLAlchemy, Next.js), automações e ferramentas de monitoramento.',
        'Configuro serviços de nuvem e hospedagem na AWS, no Railway e no cPanel, incluindo e-mails transacionais e deploys.',
        'Dou suporte a colaboradores, estações de trabalho, dispositivos e sistemas de negócio como o DBFrete.'
      ]
    }
  },
  {
    company: "Portal da Cidade Douradina",
    position: {
      en: "Photographer, Cameraman & Content Editor",
      pt: "Fotógrafo, Cinegrafista e Editor de Conteúdo"
    },
    location: {
      en: "Douradina, Paraná, Brazil",
      pt: "Douradina, Paraná, Brasil"
    },
    employmentType: "part-time",
    startDate: "2024-03",
    endDate: "2026-01",
    description: {
      en: "Worked with photography, video recording, image editing, and publishing news for an online news portal. Covered events and created visual content for digital communication.",
      pt: "Trabalhei com fotografia, captação de vídeos, edição de imagens e publicação de notícias em um portal de notícias online. Realizei coberturas de eventos e produzi materiais visuais para comunicação digital."
    },
    technologies: [
      "Adobe Photoshop",
      "Canva",
      "Photography",
      "Video Editing"
    ],
    achievements: {
      en: [
        "Covered local events as photographer and cameraman.",
        "Edited photos and videos for online publication.",
        "Published news and multimedia content for the portal."
      ],
      pt: [
        "Realizei cobertura de eventos como fotógrafo e cinegrafista.",
        "Editei fotos e vídeos para publicação online.",
        "Publiquei notícias e conteúdos multimídia no portal."
      ]
    }
  },
  {
    company: "GazinBank",
    position: {
      en: "Young Apprentice",
      pt: "Jovem Aprendiz"
    },
    location: {
      en: "Douradina, Paraná, Brazil",
      pt: "Douradina, Paraná, Brasil"
    },
    employmentType: "internship",
    startDate: "2025-02",
    endDate: "2026-02",
    description: {
      en: "Worked as a Young Apprentice, continuously improving my technical and professional skills with a strong focus on software development and technology.",
      pt: "Atuei como Jovem Aprendiz, desenvolvendo minhas habilidades profissionais e técnicas com foco em desenvolvimento de software e tecnologia."
    },
    technologies: [
      "Gazin Systems"
    ],
    achievements: {
      en: [
        "Collaborated in a professional corporate environment.",
        "Strengthened my communication, teamwork, and organizational skills.",
        "Continued building web development projects alongside my professional experience."
      ],
      pt: [
        "Atuei em ambiente corporativo desenvolvendo competências profissionais.",
        "Fortaleci minhas habilidades de comunicação, organização e trabalho em equipe.",
        "Mantive o desenvolvimento de projetos web em paralelo à experiência profissional."
      ]
    }
  }
];
