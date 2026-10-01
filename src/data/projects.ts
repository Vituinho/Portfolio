import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'givova-ticketing', slug: 'givova-ticketing',
    title: { en: 'IT Ticketing System — Givova', pt: 'Sistema de Chamados TI — Givova' },
    description: {
      en: 'An internal support platform that brings IT requests, technician workflows and status tracking into one place.',
      pt: 'Plataforma interna que reúne solicitações de TI, fluxo de trabalho dos técnicos e acompanhamento de chamados.'
    },
    longDescription: {
      en: 'Built for Givova Transportes operations, the system organizes ticket creation and tracking through an authenticated platform with a dedicated IT technician area. Notifications and automatic status updates keep employees informed as requests move through the internal workflow.',
      pt: 'Desenvolvido para a operação da Givova Transportes, o sistema organiza a abertura e o acompanhamento de chamados em uma plataforma autenticada com área dedicada aos técnicos de TI. Notificações e atualizações automáticas de status mantêm os colaboradores informados durante o atendimento.'
    },
    coverLabel: { en: 'Requests → Workflow → Resolution', pt: 'Solicitações → Atendimento → Resolução' },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    coreTechnologies: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    categoryLabel: { en: 'Business Systems', pt: 'Sistemas de Negócio' },
    category: 'Business Systems', kind: 'professional', source: 'public', featured: false,
    githubUrl: 'https://github.com/Vituinho/SistemaChamadosTI',
    myRole: { en: 'Software development', pt: 'Desenvolvimento de software' },
    highlights: {
      en: ['Ticket creation, tracking and a dedicated technician area.', 'Authentication, notifications and automatic status updates.', 'Production-oriented architecture with security-conscious implementation.'],
      pt: ['Abertura e acompanhamento de chamados com área dedicada aos técnicos.', 'Autenticação, notificações e atualizações automáticas de status.', 'Arquitetura voltada à produção, com atenção à segurança.']
    },
    challenges: {
      en: 'Organize internal IT support around a traceable workflow and clear communication with employees.',
      pt: 'Organizar o suporte interno de TI com um fluxo rastreável e comunicação clara com os colaboradores.'
    }
  },
  {
    id: 'givova-coleta', slug: 'givova-coleta',
    title: { en: 'Givova Coleta', pt: 'Givova Coleta' },
    description: {
      en: 'Offline-first barcode collection connecting legacy Windows CE handhelds to a modern backend and admin panel.',
      pt: 'Coleta de códigos de barras com operação offline, conectando coletores Windows CE a um backend e painel administrativo modernos.'
    },
    longDescription: {
      en: 'A C# WinForms client on .NET Compact Framework 3.5 collects scans on Windows CE handhelds. A durable local queue/journal preserves scans offline and synchronizes with a Python/FastAPI backend and PostgreSQL. A Next.js admin panel completes the system, bridging legacy equipment and modern business tools.',
      pt: 'Um cliente C# WinForms em .NET Compact Framework 3.5 coleta leituras em dispositivos Windows CE. Uma fila e um registro local persistentes preservam os dados offline e sincronizam com um backend Python/FastAPI e PostgreSQL. Um painel administrativo Next.js completa o sistema, integrando equipamentos legados a ferramentas modernas de negócio.'
    },
    coverLabel: { en: 'Scan → Persist → Synchronize', pt: 'Coletar → Persistir → Sincronizar' },
    technologies: ['C#', 'WinForms', '.NET Compact Framework 3.5', 'Windows CE', 'Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'TypeScript'],
    coreTechnologies: ['C#', 'Windows CE', 'FastAPI', 'PostgreSQL', 'Next.js'],
    categoryLabel: { en: 'Software Engineering · Legacy Integration', pt: 'Engenharia de Software · Integração Legada' },
    category: 'Systems Integration', kind: 'professional', source: 'private', featured: true,
    myRole: { en: 'Client, backend and admin panel development', pt: 'Desenvolvimento do cliente, backend e painel administrativo' },
    highlights: {
      en: ['Offline-first operation with a durable local scan queue/journal.', 'Synchronization and idempotency to handle retries without duplicate processing.', 'Integration with legacy handhelds over unreliable connections.'],
      pt: ['Operação offline com fila e registro local persistentes de leituras.', 'Sincronização e idempotência para lidar com novas tentativas sem processamento duplicado.', 'Integração de coletores legados em conexões instáveis.']
    },
    challenges: {
      en: 'Keep collected data reliable when connectivity is intermittent and the client runs on constrained legacy devices.',
      pt: 'Manter a confiabilidade dos dados com conectividade intermitente e um cliente executado em dispositivos legados com recursos limitados.'
    }
  },
  {
    id: 'keyforge', slug: 'keyforge',
    title: { en: 'KeyForge', pt: 'KeyForge' },
    description: {
      en: 'A modern typing platform combining progression, statistics and multiplayer game systems.',
      pt: 'Plataforma moderna de digitação que combina progressão, estatísticas e sistemas de jogo multiplayer.'
    },
    longDescription: {
      en: 'KeyForge explores the engineering behind a typing game: progression, performance statistics, multiplayer/PvP architecture and synchronization. Next.js, React and TypeScript power the interface, with Supabase and PostgreSQL supporting data and realtime systems. Internationalization makes the experience accessible in multiple languages.',
      pt: 'O KeyForge explora a engenharia de um jogo de digitação: progressão, estatísticas de desempenho, arquitetura multiplayer/PvP e sincronização. Next.js, React e TypeScript compõem a interface, com Supabase e PostgreSQL para dados e sistemas em tempo real. A internacionalização permite a experiência em vários idiomas.'
    },
    coverLabel: { en: 'Type → Progress → Compete', pt: 'Digitar → Evoluir → Competir' },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    coreTechnologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    categoryLabel: { en: 'Software Engineering · Realtime Systems', pt: 'Engenharia de Software · Sistemas em Tempo Real' },
    category: 'Realtime Systems', kind: 'personal', source: 'public', featured: true,
    githubUrl: 'https://github.com/Vituinho/KeyForge',
    myRole: { en: 'Full-stack development and game systems', pt: 'Desenvolvimento full stack e sistemas de jogo' },
    highlights: {
      en: ['Typing progression and performance statistics.', 'Realtime synchronization and multiplayer/PvP architecture.', 'Game systems and internationalization.'],
      pt: ['Progressão de digitação e estatísticas de desempenho.', 'Sincronização em tempo real e arquitetura multiplayer/PvP.', 'Sistemas de jogo e internacionalização.']
    },
    challenges: {
      en: 'Coordinate realtime game state and player progression across a responsive, multilingual experience.',
      pt: 'Coordenar o estado do jogo em tempo real e a progressão dos jogadores em uma experiência responsiva e multilíngue.'
    }
  },
  {
    id: 'gvv-parana', slug: 'gvv-parana',
    title: { en: 'GVV Paraná', pt: 'GVV Paraná' },
    description: {
      en: 'A professional sofa and mattress storefront connecting the product catalog to purchasing and store operations.',
      pt: 'E-commerce profissional de sofás e colchões, conectando o catálogo de produtos às compras e à operação da loja.'
    },
    longDescription: {
      en: 'An e-commerce website for GVV Paraná with a sofa and mattress catalog, product variants, inventory, cart, checkout and orders. A responsive storefront serves customers while the admin area supports store management and payment integration connects the purchasing flow.',
      pt: 'Site de e-commerce para a GVV Paraná com catálogo de sofás e colchões, variantes de produtos, estoque, carrinho, checkout e pedidos. A vitrine responsiva atende os clientes, enquanto a área administrativa apoia a gestão da loja e a integração de pagamentos conecta o fluxo de compra.'
    },
    coverLabel: { en: 'Catalog → Checkout → Orders', pt: 'Catálogo → Checkout → Pedidos' },
    technologies: [], category: 'E-commerce', kind: 'professional', source: 'private', featured: true,
    categoryLabel: { en: 'E-commerce · Business Systems', pt: 'E-commerce · Sistemas de Negócio' },
    myRole: { en: 'E-commerce development', pt: 'Desenvolvimento de e-commerce' },
    highlights: {
      en: ['Product catalog, variants and inventory.', 'Cart, checkout, orders and payment integration.', 'Admin area and responsive storefront.'],
      pt: ['Catálogo de produtos, variantes e estoque.', 'Carrinho, checkout, pedidos e integração de pagamentos.', 'Área administrativa e vitrine responsiva.']
    },
    challenges: {
      en: 'Connect the customer purchasing journey with product, inventory and order management.',
      pt: 'Conectar a jornada de compra dos clientes à gestão de produtos, estoque e pedidos.'
    }
  },
  {
    id: 'givova-website', slug: 'givova-website',
    title: { en: 'Givova Transportes Website', pt: 'Site da Givova Transportes' },
    description: {
      en: 'A corporate transportation and logistics website with clear service information and a responsive interface.',
      pt: 'Site corporativo de transporte e logística com informações claras sobre serviços e uma interface responsiva.'
    },
    longDescription: {
      en: 'A corporate website focused on a professional digital presence for Givova Transportes. The modern frontend organizes transportation, logistics, company and service information with a responsive interface and clear navigation for desktop and mobile.',
      pt: 'Site corporativo voltado à presença digital profissional da Givova Transportes. O frontend moderno organiza informações de transporte, logística, empresa e serviços com uma interface responsiva e navegação clara para desktop e dispositivos móveis.'
    },
    coverLabel: { en: 'Company → Services → Contact', pt: 'Empresa → Serviços → Contato' },
    technologies: [], category: 'Corporate Website', kind: 'professional', source: 'private', featured: true,
    categoryLabel: { en: 'Corporate Website · Transport & Logistics', pt: 'Site Corporativo · Transporte e Logística' },
    myRole: { en: 'Website development', pt: 'Desenvolvimento do site' },
    highlights: {
      en: ['Professional corporate presence.', 'Company and services presentation.', 'Responsive UI and modern frontend.'],
      pt: ['Presença corporativa profissional.', 'Apresentação da empresa e dos serviços.', 'Interface responsiva e frontend moderno.']
    },
    challenges: {
      en: 'Present company information and services clearly on different screen sizes.',
      pt: 'Apresentar informações da empresa e dos serviços com clareza em diferentes tamanhos de tela.'
    }
  },
  {
    id: 'guessword', slug: 'guessword',
    title: { en: 'GuessWord', pt: 'GuessWord' },
    description: {
      en: 'A word guessing game with authentication, internationalization and a Laravel backend.',
      pt: 'Jogo de adivinhação de palavras com autenticação, internacionalização e backend Laravel.'
    },
    longDescription: {
      en: 'GuessWord combines a Next.js frontend with a Laravel API. An earlier personal project focused on application organization, authentication, responsive design and internationalization.',
      pt: 'O GuessWord combina um frontend Next.js com uma API Laravel. Um projeto pessoal anterior com foco em organização da aplicação, autenticação, design responsivo e internacionalização.'
    },
    image: '/images/projects/guessword.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Laravel'],
    category: 'Full Stack', kind: 'personal',
    githubUrl: 'https://github.com/Vituinho/GuessWord',
    featured: false, status: 'completed', year: 2026,
    myRole: { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
    highlights: {
      en: ['Next.js frontend integrated with Laravel.', 'Responsive interface and internationalization.', 'Authentication and application structure.'],
      pt: ['Frontend Next.js integrado ao Laravel.', 'Interface responsiva e internacionalização.', 'Autenticação e estrutura da aplicação.']
    },
    challenges: {
      en: 'Structure a complete application and integrate frontend and backend.',
      pt: 'Estruturar uma aplicação completa e integrar frontend e backend.'
    }
  },
  {
    id: 'eventhub', slug: 'eventhub',
    title: { en: 'EventHub', pt: 'EventHub' },
    description: {
      en: 'An early full-stack milestone built with PHP and MySQL.',
      pt: 'Um marco inicial de desenvolvimento full stack construído com PHP e MySQL.'
    },
    longDescription: {
      en: 'My first complete full-stack web project, connecting PHP, HTML, CSS and JavaScript to MySQL. It established a foundation in application organization, frontend/backend communication and web security.',
      pt: 'Meu primeiro projeto web full stack completo, conectando PHP, HTML, CSS e JavaScript ao MySQL. Estabeleceu uma base em organização de aplicações, comunicação entre frontend e backend e segurança web.'
    },
    image: '/images/projects/eventhub.jpg',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    category: 'Full Stack', kind: 'personal',
    githubUrl: 'https://github.com/Vituinho/EventHub',
    featured: false, status: 'completed', year: 2025,
    myRole: { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
    highlights: {
      en: ['Complete PHP and MySQL application.', 'Frontend/backend integration.', 'Foundations in code organization and web security.'],
      pt: ['Aplicação completa em PHP e MySQL.', 'Integração entre frontend e backend.', 'Fundamentos de organização de código e segurança web.']
    },
    challenges: {
      en: 'Connect frontend and backend securely while keeping the code organized.',
      pt: 'Conectar frontend e backend com segurança e manter o código organizado.'
    }
  }
];
