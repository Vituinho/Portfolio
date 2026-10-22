import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'givova-website', slug: 'givova-website',
    image: '/images/projects/givova-transportes.webp',
    imageAlt: { en: 'Givova Transportes homepage with logistics services, quotation and tracking options', pt: 'Página inicial da Givova Transportes com serviços de logística, cotação e rastreamento' },
    title: { en: 'Givova Transportes', pt: 'Givova Transportes' },
    description: {
      en: 'The corporate website of a Brazilian road transport and logistics company, with B2B quote requests, shipment tracking and service pages.',
      pt: 'Site corporativo de uma transportadora rodoviária brasileira, com solicitação de cotações B2B, rastreamento de cargas e páginas de serviços.'
    },
    longDescription: {
      en: "A rebuild of the Givova Transportes website as a fast, mostly pre-rendered Next.js site. It presents the company's road, air, dedicated and less-than-truckload freight services, a coverage map of the states it serves and a shipment tracking entry point. Quote and contact forms are validated with Zod on both client and server, and server-side services handle rate limiting and delivery. Vitest, Playwright and axe cover business rules, user flows and accessibility.",
      pt: 'Uma reconstrução do site da Givova Transportes como um site Next.js rápido e majoritariamente pré-renderizado. Ele apresenta os serviços de transporte rodoviário, frete aéreo, carga dedicada e carga fracionada, um mapa de cobertura dos estados atendidos e o acesso ao rastreamento de cargas. Os formulários de cotação e contato são validados com Zod no cliente e no servidor, e serviços no servidor cuidam do limite de requisições e do envio. Vitest, Playwright e axe cobrem regras de negócio, fluxos de usuário e acessibilidade.'
    },
    coverLabel: { en: 'Company → Services → Quote', pt: 'Empresa → Serviços → Cotação' },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zod', 'React Hook Form', 'Vitest', 'Playwright', 'cPanel'],
    coreTechnologies: ['Next.js', 'TypeScript', 'Zod', 'Playwright'],
    categoryLabel: { en: 'Corporate Website', pt: 'Site Corporativo' },
    category: 'Corporate Website', kind: 'professional', source: 'private', featured: true, status: 'live',
    demoUrl: 'https://givovatransportes.com.br',
    myRole: { en: 'Full-stack development and deployment', pt: 'Desenvolvimento full stack e deploy' },
    highlights: {
      en: ['Quote and contact forms validated with Zod on client and server, with rate limiting.', 'Service, segment and tracking pages pre-rendered for speed and SEO.', 'Unit, end-to-end and accessibility tests with Vitest, Playwright and axe.'],
      pt: ['Formulários de cotação e contato validados com Zod no cliente e no servidor, com limite de requisições.', 'Páginas de serviços, segmentos e rastreamento pré-renderizadas para desempenho e SEO.', 'Testes unitários, end-to-end e de acessibilidade com Vitest, Playwright e axe.']
    },
    challenges: {
      en: 'Give a regional logistics company a fast, credible web presence that turns visitors into quote requests on any device.',
      pt: 'Dar a uma empresa de logística regional uma presença digital rápida e confiável, que transforme visitantes em pedidos de cotação em qualquer dispositivo.'
    }
  },
  {
    id: 'gvv-parana', slug: 'gvv-parana',
    image: '/images/projects/gvv-parana.webp',
    imageAlt: { en: 'GVV Paraná storefront homepage presenting sofas, mattresses and the shopping cart', pt: 'Página inicial da loja GVV Paraná com sofás, colchões e carrinho de compras' },
    title: { en: 'GVV Paraná', pt: 'GVV Paraná' },
    description: {
      en: 'An online store for sofas and mattresses with a product catalog, cart, Mercado Pago checkout and an admin panel for products, stock and orders.',
      pt: 'Loja online de sofás e colchões com catálogo de produtos, carrinho, checkout com Mercado Pago e painel administrativo de produtos, estoque e pedidos.'
    },
    longDescription: {
      en: 'A full-stack e-commerce for GVV Paraná, a sofa and mattress store in Douradina, Paraná. The storefront offers a filterable catalog, product pages, cart and checkout. Payments go through Mercado Pago, and its webhooks are verified by signature before an order is updated. An admin area manages products, variants, stock and orders. Data lives in PostgreSQL through Prisma, product images in Supabase Storage, and the database is backed up to Amazon S3 by an automated GitHub Actions pipeline.',
      pt: 'E-commerce full stack para a GVV Paraná, loja de sofás e colchões em Douradina, Paraná. A vitrine oferece catálogo com filtros, páginas de produto, carrinho e checkout. Os pagamentos passam pelo Mercado Pago, e os webhooks são verificados por assinatura antes de atualizar o pedido. Uma área administrativa gerencia produtos, variantes, estoque e pedidos. Os dados ficam no PostgreSQL via Prisma, as imagens no Supabase Storage, e o banco tem backup automatizado para o Amazon S3 com GitHub Actions.'
    },
    coverLabel: { en: 'Catalog → Checkout → Orders', pt: 'Catálogo → Checkout → Pedidos' },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Supabase Storage', 'Mercado Pago', 'AWS S3', 'GitHub Actions', 'Vitest'],
    coreTechnologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Mercado Pago', 'AWS S3'],
    categoryLabel: { en: 'E-commerce', pt: 'E-commerce' },
    category: 'E-commerce', kind: 'professional', source: 'private', featured: true, status: 'live',
    demoUrl: 'https://givovashopping.com.br',
    myRole: { en: 'Full-stack development, payments and infrastructure', pt: 'Desenvolvimento full stack, pagamentos e infraestrutura' },
    highlights: {
      en: ['Checkout with Mercado Pago and signature-verified payment webhooks.', 'Catalog with filters synced to the URL, product variants and stock control.', 'Admin sessions with hashed passwords, encrypted HTTP-only cookies and rate limiting.', 'Automated PostgreSQL backups to Amazon S3 through IAM OIDC, with no stored AWS keys.'],
      pt: ['Checkout com Mercado Pago e webhooks de pagamento verificados por assinatura.', 'Catálogo com filtros sincronizados à URL, variantes de produto e controle de estoque.', 'Sessões administrativas com senhas criptografadas, cookies HTTP-only encriptados e limite de tentativas.', 'Backups automatizados do PostgreSQL para o Amazon S3 via IAM OIDC, sem chaves AWS armazenadas.']
    },
    challenges: {
      en: "Connect a small store's purchasing journey to reliable payment confirmation, inventory and order management.",
      pt: 'Conectar a jornada de compra de uma pequena loja a uma confirmação de pagamento confiável e à gestão de estoque e pedidos.'
    }
  },
  {
    id: 'givova-pagamentos', slug: 'givova-pagamentos',
    image: '/images/projects/givova-pagamentos.webp',
    imageAlt: { en: 'Givova Pagamentos sign-in screen for corporate users', pt: 'Tela de acesso do Givova Pagamentos para usuários corporativos' },
    title: { en: 'Givova Pagamentos', pt: 'Givova Pagamentos' },
    description: {
      en: 'A business system for Givova Transportes that tracks every payment from request to receipt, with authentication, permissions and operational workflows.',
      pt: 'Sistema de negócio da Givova Transportes que acompanha cada pagamento da solicitação ao comprovante, com autenticação, permissões e fluxos operacionais.'
    },
    longDescription: {
      en: 'Givova Pagamentos replaces scattered payment requests with one controlled workflow. Employees sign in with corporate accounts, administrators manage who can access what, and each payment moves through defined operational steps from request to proof of payment with a complete history. A Next.js frontend works with a Laravel backend and PostgreSQL, deployed across Railway and cPanel. As an internal business system, its source code, endpoints and data are private.',
      pt: 'O Givova Pagamentos substitui solicitações de pagamento dispersas por um único fluxo controlado. Os colaboradores entram com contas corporativas, administradores definem quem acessa o quê, e cada pagamento percorre etapas operacionais definidas, da solicitação ao comprovante, com histórico completo. Um frontend Next.js trabalha com um backend Laravel e PostgreSQL, implantados entre Railway e cPanel. Por ser um sistema interno, o código-fonte, os endpoints e os dados são privados.'
    },
    coverLabel: { en: 'Request → Payment → Receipt', pt: 'Solicitação → Pagamento → Comprovante' },
    technologies: ['Next.js', 'React', 'Laravel', 'PHP', 'PostgreSQL', 'Railway', 'cPanel'],
    coreTechnologies: ['Next.js', 'Laravel', 'PostgreSQL', 'Railway'],
    categoryLabel: { en: 'Payment Management System', pt: 'Sistema de Gestão de Pagamentos' },
    category: 'Business Systems', kind: 'professional', source: 'private', featured: true, status: 'live',
    demoUrl: 'https://pagamentos.givovatransportes.com.br',
    myRole: { en: 'Full-stack development, backend integrations and deployment', pt: 'Desenvolvimento full stack, integrações de backend e deploy' },
    highlights: {
      en: ['Authentication with corporate accounts and administrator-managed access.', 'Authorization rules around each step of the payment workflow.', 'A complete, traceable history for every payment, from request to receipt.', 'Laravel backend and PostgreSQL integrated with the Next.js frontend.'],
      pt: ['Autenticação com contas corporativas e acesso gerenciado por administradores.', 'Regras de autorização em cada etapa do fluxo de pagamento.', 'Histórico completo e rastreável de cada pagamento, da solicitação ao comprovante.', 'Backend Laravel e PostgreSQL integrados ao frontend Next.js.']
    },
    challenges: {
      en: 'Give the operations and finance teams one traceable place to request, follow and prove payments.',
      pt: 'Dar às equipes de operação e financeiro um único lugar rastreável para solicitar, acompanhar e comprovar pagamentos.'
    }
  },
  {
    id: 'givova-coleta', slug: 'givova-coleta',
    image: '/images/projects/givova-coleta.png',
    imageAlt: {
      en: 'Givova Coleta administration dashboard for inventory, shipments, scans and collector devices.',
      pt: 'Painel administrativo do Givova Coleta para controle de estoque, cargas, leituras e coletores.'
    },
    title: { en: 'Givova Coleta', pt: 'Givova Coleta' },
    description: {
      en: 'Offline-first barcode collection connecting legacy Windows CE handhelds to a FastAPI backend and a Next.js panel for stock, loads and shipments.',
      pt: 'Coleta de códigos de barras com operação offline, conectando coletores Windows CE a um backend FastAPI e a um painel Next.js de estoque, cargas e expedições.'
    },
    longDescription: {
      en: 'A C# WinForms client on .NET Compact Framework 3.5 collects scans on Windows CE handhelds. A durable local queue/journal preserves scans offline and synchronizes with a Python/FastAPI backend and PostgreSQL. A Next.js admin panel completes the system, bridging legacy equipment and modern business tools.',
      pt: 'Um cliente C# WinForms em .NET Compact Framework 3.5 coleta leituras em dispositivos Windows CE. Uma fila e um registro local persistentes preservam os dados offline e sincronizam com um backend Python/FastAPI e PostgreSQL. Um painel administrativo Next.js completa o sistema, integrando equipamentos legados a ferramentas modernas de negócio.'
    },
    coverLabel: { en: 'Scan → Persist → Synchronize', pt: 'Coletar → Persistir → Sincronizar' },
    technologies: ['C#', 'WinForms', '.NET Compact Framework 3.5', 'Windows CE', 'Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'TypeScript'],
    coreTechnologies: ['FastAPI', 'PostgreSQL', 'C#', 'Windows CE', 'Next.js'],
    categoryLabel: { en: 'Collection Management System', pt: 'Sistema de Gestão de Coletas' },
    category: 'Systems Integration', kind: 'professional', source: 'private', featured: true, status: 'live',
    demoUrl: 'https://coleta.givovatransportes.com.br',
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
    id: 'givova-ticketing', slug: 'givova-ticketing',
    image: '/images/projects/sistema-chamados-ti.webp',
    imageAlt: { en: 'Givova IT support homepage with ticket creation and tracking options', pt: 'Página inicial do suporte de TI da Givova com abertura e acompanhamento de chamados' },
    title: { en: 'Givova IT Ticketing', pt: 'Chamados de TI Givova' },
    description: {
      en: 'An internal support platform that brings IT requests, technician workflows and status tracking into one place.',
      pt: 'Plataforma interna que reúne solicitações de TI, fluxo de trabalho dos técnicos e acompanhamento de chamados.'
    },
    longDescription: {
      en: 'Built for Givova Transportes operations, the system organizes ticket creation and tracking through an authenticated platform with a dedicated IT technician area. A FastAPI backend with SQLAlchemy, Alembic migrations and Pydantic validation serves a Next.js frontend, and notifications and automatic status updates keep employees informed as requests move through the workflow.',
      pt: 'Desenvolvido para a operação da Givova Transportes, o sistema organiza a abertura e o acompanhamento de chamados em uma plataforma autenticada com área dedicada aos técnicos de TI. Um backend FastAPI com SQLAlchemy, migrações Alembic e validação Pydantic atende um frontend Next.js, e notificações e atualizações automáticas de status mantêm os colaboradores informados durante o atendimento.'
    },
    coverLabel: { en: 'Requests → Workflow → Resolution', pt: 'Solicitações → Atendimento → Resolução' },
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Pydantic', 'PostgreSQL', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    coreTechnologies: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Next.js'],
    categoryLabel: { en: 'Internal Support Platform', pt: 'Plataforma Interna de Suporte' },
    category: 'Business Systems', kind: 'professional', source: 'public', featured: false,
    githubUrl: 'https://github.com/Vituinho/SistemaChamadosTI',
    myRole: { en: 'Software development', pt: 'Desenvolvimento de software' },
    highlights: {
      en: ['Ticket creation, tracking and a dedicated technician area.', 'Authentication, notifications and automatic status updates.', 'Database migrations with Alembic and validated API contracts with Pydantic.'],
      pt: ['Abertura e acompanhamento de chamados com área dedicada aos técnicos.', 'Autenticação, notificações e atualizações automáticas de status.', 'Migrações de banco com Alembic e contratos de API validados com Pydantic.']
    },
    challenges: {
      en: 'Organize internal IT support around a traceable workflow and clear communication with employees.',
      pt: 'Organizar o suporte interno de TI com um fluxo rastreável e comunicação clara com os colaboradores.'
    }
  },
  {
    id: 'keyforge', slug: 'keyforge',
    image: '/images/projects/keyforge.webp',
    imageAlt: { en: 'KeyForge typing game homepage with a boss battle preview', pt: 'Página inicial do jogo de digitação KeyForge com prévia de uma batalha contra chefe' },
    title: { en: 'KeyForge', pt: 'KeyForge' },
    description: {
      en: 'An anime-inspired typing game with 1v1 PvP battles over WebSockets, a server-authoritative Node.js backend and a touch-typing academy.',
      pt: 'Jogo de digitação inspirado em animes, com batalhas PvP 1v1 via WebSocket, backend Node.js com servidor autoritativo e uma academia de digitação.'
    },
    longDescription: {
      en: 'KeyForge turns touch-typing practice into a competitive game. In 1v1 battles, a Node.js/Fastify server is the only authority on damage, health and rewards, and both players receive identical word sequences from a shared seed, so no client can cheat by reporting its own results. Players authenticate with Better Auth and play over an authenticated WebSocket connection; progress, skins and statistics persist in PostgreSQL through Prisma. Solo modes, a typing academy with weak-key training and full English/Portuguese support complete the experience.',
      pt: 'O KeyForge transforma a prática de digitação em um jogo competitivo. Nas batalhas 1v1, um servidor Node.js/Fastify é a única autoridade sobre dano, vida e recompensas, e os dois jogadores recebem sequências idênticas de palavras a partir de uma semente compartilhada, para que nenhum cliente trapaceie informando os próprios resultados. Os jogadores se autenticam com Better Auth e jogam por uma conexão WebSocket autenticada; progresso, skins e estatísticas ficam no PostgreSQL via Prisma. Modos solo, uma academia de digitação com treino de teclas fracas e suporte completo a inglês e português completam a experiência.'
    },
    coverLabel: { en: 'Type → Battle → Progress', pt: 'Digitar → Batalhar → Evoluir' },
    technologies: ['TypeScript', 'Node.js', 'Fastify', 'WebSocket', 'Better Auth', 'Prisma', 'PostgreSQL', 'Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Railway'],
    coreTechnologies: ['TypeScript', 'Node.js', 'Fastify', 'WebSocket', 'PostgreSQL'],
    categoryLabel: { en: 'Realtime Multiplayer Game', pt: 'Jogo Multiplayer em Tempo Real' },
    category: 'Realtime Systems', kind: 'personal', source: 'public', featured: true,
    githubUrl: 'https://github.com/Vituinho/KeyForge',
    myRole: { en: 'Full-stack development and realtime backend', pt: 'Desenvolvimento full stack e backend em tempo real' },
    highlights: {
      en: ['Server-authoritative combat: clients never report damage or winners.', 'Deterministic, seed-synchronized word sequences for fair matches.', 'Anti-cheat checks with monotonic progress, seed validation and WPM limits.', 'Matchmaking queue, private rooms and a 15-second reconnection grace period.'],
      pt: ['Combate com servidor autoritativo: clientes nunca informam dano ou vencedor.', 'Sequências de palavras determinísticas, sincronizadas por semente, para partidas justas.', 'Antitrapaça com progresso monotônico, validação da semente e limite de WPM.', 'Fila de matchmaking, salas privadas e 15 segundos de tolerância para reconexão.']
    },
    challenges: {
      en: 'Keep a fast-paced realtime match fair and in sync when the network is unreliable and clients cannot be trusted.',
      pt: 'Manter uma partida rápida em tempo real justa e sincronizada mesmo com rede instável e clientes que não são confiáveis.'
    }
  },
  {
    id: 'je-parle-francais', slug: 'je-parle-francais',
    title: { en: 'Je Parle Français', pt: 'Je Parle Français' },
    description: {
      en: 'A French-learning platform for Brazilians preparing to study, work or live in Canada or France, with adaptive placement, personalized daily plans and an AI tutor.',
      pt: 'Plataforma de francês para brasileiros que vão estudar, trabalhar ou morar no Canadá ou na França, com nivelamento adaptativo, planos diários personalizados e um tutor com IA.'
    },
    longDescription: {
      en: 'Je Parle Français teaches French to Brazilian Portuguese speakers from the very beginning, with destination tracks for life in Québec/Canada and in France. An adaptive placement test estimates each skill, and a daily planner builds a personalized 5 to 60 minute session that mixes spaced review (FSRS), new lessons, listening and pronunciation. Learners practice in context through real-life scenarios, from opening a bank account in Québec to renting an apartment in France, and an AI tutor runs roleplays whose corrections flow back into review. The project is in early development: the core learning loop is implemented and tested, while voice tutoring and exam preparation are still experimental.',
      pt: 'O Je Parle Français ensina francês para falantes de português desde o início, com trilhas para viver no Québec/Canadá e na França. Um teste de nivelamento adaptativo estima cada habilidade, e um planejador diário monta uma sessão personalizada de 5 a 60 minutos que combina revisão espaçada (FSRS), novas lições, compreensão oral e pronúncia. O aluno pratica em contexto com situações reais, de abrir uma conta no Québec a alugar um apartamento na França, e um tutor com IA conduz conversas cujas correções voltam para a revisão. O projeto está em desenvolvimento inicial: o ciclo principal de aprendizado está implementado e testado, enquanto o tutor por voz e a preparação para exames ainda são experimentais.'
    },
    coverLabel: { en: 'Place → Practice → Review', pt: 'Nivelar → Praticar → Revisar' },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Better Auth', 'Zod', 'Claude API', 'Azure Speech', 'Vitest', 'Playwright'],
    coreTechnologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Claude API'],
    categoryLabel: { en: 'Language Learning Platform', pt: 'Plataforma de Ensino de Idiomas' },
    category: 'EdTech', kind: 'personal', source: 'open', featured: true, status: 'in-progress', year: 2026,
    githubUrl: 'https://github.com/Vituinho/Je-Parle-France',
    myRole: { en: 'Product, full-stack development and learning engines', pt: 'Produto, desenvolvimento full stack e motores de aprendizado' },
    highlights: {
      en: ['Adaptive placement with per-skill level estimates and uncertainty.', 'Personalized daily sessions sized to 5, 15, 30 or 60 minutes.', 'Spaced repetition with FSRS and mastery tracked per skill.', 'Contextual practice in the Vivre au Canada and Vivre en France tracks.', 'AI tutor for roleplays with four correction modes; mistakes return to review.'],
      pt: ['Nivelamento adaptativo com estimativa de nível e incerteza por habilidade.', 'Sessões diárias personalizadas de 5, 15, 30 ou 60 minutos.', 'Repetição espaçada com FSRS e domínio acompanhado por habilidade.', 'Prática contextual nas trilhas Vivre au Canada e Vivre en France.', 'Tutor com IA para conversas, com quatro modos de correção; os erros voltam para a revisão.']
    },
    planned: {
      en: ['Voice conversations with the tutor (experimental).', 'TEF/TCF Canada and DELF/DALF exam practice (experimental).', 'Curriculum beyond B1.1, up to C1.', 'Email verification and password reset.'],
      pt: ['Conversas por voz com o tutor (experimental).', 'Prática para os exames TEF/TCF Canada e DELF/DALF (experimental).', 'Currículo além do B1.1, até o C1.', 'Verificação de e-mail e redefinição de senha.']
    },
    challenges: {
      en: 'Help Brazilians reach usable French for a move abroad by spending study time where it matters most, instead of following a fixed course.',
      pt: 'Ajudar brasileiros a chegar a um francês útil para morar fora, usando o tempo de estudo onde ele mais importa em vez de seguir um curso fixo.'
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
    imageAlt: { en: 'GuessWord recall arena with a fill-in-the-blank English sentence', pt: 'Arena do GuessWord com uma frase em inglês para completar' },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Laravel'],
    categoryLabel: { en: 'Full-stack Game', pt: 'Jogo Full Stack' },
    category: 'Full Stack', kind: 'personal', source: 'public',
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
    imageAlt: { en: 'EventHub homepage with featured events', pt: 'Página inicial do EventHub com eventos em destaque' },
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    categoryLabel: { en: 'Full-stack Web App', pt: 'Aplicação Web Full Stack' },
    category: 'Full Stack', kind: 'personal', source: 'public',
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
