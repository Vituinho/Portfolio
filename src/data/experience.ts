import { Experience } from '../types/portfolio';

export const experienceData: Experience[] = [
  {
    company: 'Givova Transportes',
    position: {
      en: 'Technology Analyst — Software Development & IT',
      pt: 'Analista de Tecnologia — Desenvolvimento de Software e TI'
    },
    location: { en: 'Brazil', pt: 'Brasil' },
    description: {
      en: 'Developing software, internal systems and automations for company operations, alongside IT support and infrastructure. I identify operational problems and build solutions to reduce manual work and improve productivity.',
      pt: 'Desenvolvimento de software, sistemas internos e automações para a operação da empresa, junto ao suporte e à infraestrutura de TI. Identifico problemas operacionais e construo soluções para reduzir tarefas manuais e melhorar a produtividade.'
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'C#', 'Windows CE'],
    achievements: {
      en: [
        'Developed an internal IT ticketing platform, automations, monitoring tools and operational systems.',
        'Worked on barcode/data collection solutions integrating legacy handheld devices with modern services.',
        'Developed the Givova institutional website and GVV Paraná sofa and mattress e-commerce website.',
        'Install and configure computers and workstations; troubleshoot hardware, software, printers and devices.',
        'Support employees and company departments, the IT environment and business systems including DBFrete.'
      ],
      pt: [
        'Desenvolvi uma plataforma interna de chamados de TI, automações, ferramentas de monitoramento e sistemas operacionais.',
        'Atuei em soluções de códigos de barras e coleta de dados integrando dispositivos legados a serviços modernos.',
        'Desenvolvi o site institucional da Givova e o e-commerce de sofás e colchões GVV Paraná.',
        'Instalo e configuro computadores e estações de trabalho; resolvo problemas de hardware, software, impressoras e dispositivos.',
        'Presto suporte aos colaboradores e setores da empresa, ao ambiente de TI e aos sistemas de negócio, incluindo o DBFrete.'
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
