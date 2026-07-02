import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: "guessword",
    slug: "guessword",
    title: {
      en: "GuessWord",
      pt: "GuessWord"
    },
    description: {
      en: "A modern word guessing game built to improve my full stack development skills.",
      pt: "Um jogo moderno de adivinhação de palavras desenvolvido para aprimorar minhas habilidades em desenvolvimento Full Stack."
    },
    longDescription: {
      en: "GuessWord is my largest personal project so far. It combines a modern Next.js frontend with a backend API and focuses on clean architecture, responsive design, authentication, internationalization, and a great user experience. Throughout the project I learned how to structure larger applications and work with both frontend and backend technologies.",
      pt: "GuessWord é meu maior projeto pessoal até o momento. Ele combina um frontend moderno em Next.js com uma API backend e tem foco em arquitetura limpa, design responsivo, autenticação, internacionalização e uma boa experiência do usuário. Durante o desenvolvimento aprimorei minhas habilidades em aplicações Full Stack."
    },
    image: "/images/projects/guessword.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel"
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/Vituinho/GuessWord",
    demoUrl: "",
    featured: true,
    status: "completed",
    year: 2026,
    duration: {
      en: "6 weeks",
      pt: "6 Semanas"
    },
    teamSize: 1,
    myRole: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack"
    },
    highlights: {
      en: [
        "Built with a modern Next.js architecture.",
        "Responsive interface.",
        "Internationalization support.",
        "Backend integration with Laravel."
      ],
      pt: [
        "Construído com arquitetura moderna em Next.js.",
        "Interface responsiva.",
        "Suporte a internacionalização.",
        "Integração com backend em Laravel."
      ]
    },
    challenges: {
      en: "Designing a scalable architecture while learning new technologies.",
      pt: "Projetar uma arquitetura escalável enquanto aprendia novas tecnologias."
    },
    lessonsLearned: {
      en: "This project taught me how to organize a larger application and integrate frontend and backend technologies.",
      pt: "Esse projeto me ensinou a organizar uma aplicação maior e integrar frontend e backend."
    }
  },

  {
    id: "eventhub",
    slug: "eventhub",
    title: {
      en: "EventHub",
      pt: "EventHub"
    },
    description: {
      en: "My first full stack project, built to learn how frontend and backend work together in a real-world web application.",
      pt: "Meu primeiro projeto Full Stack, desenvolvido para aprender como frontend e backend trabalham juntos em uma aplicação web real."
    },
    longDescription: {
      en: "EventHub was my first full stack project and a major milestone in my programming journey. It was built using PHP, HTML, CSS, JavaScript, and MySQL, giving me my first experience developing a complete web application from scratch. Throughout the project, I learned how frontend and backend communicate, how to organize a larger codebase, and the importance of security in web applications. Building EventHub helped me grow as a developer and laid the foundation for learning modern technologies like Next.js, TypeScript, and Laravel.",
      pt: "O EventHub foi meu primeiro projeto Full Stack e um marco importante na minha jornada como desenvolvedor. Ele foi desenvolvido utilizando PHP, HTML, CSS, JavaScript e MySQL, proporcionando minha primeira experiência criando uma aplicação web completa do zero. Durante o desenvolvimento, aprendi como frontend e backend se comunicam, como organizar um projeto maior e a importância da segurança em aplicações web. Construir o EventHub foi essencial para minha evolução como desenvolvedor e serviu como base para aprender tecnologias mais modernas, como Next.js, TypeScript e Laravel."
    },
    image: "/images/projects/eventhub.jpg",
    technologies: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL"
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/Vituinho/EventHub",
    demoUrl: "",
    featured: true,
    status: "completed",
    year: 2025,
    duration: {
      en: "2 Months",
      pt: "2 Meses"
    },
    teamSize: 1,
    myRole: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack"
    },
    highlights: {
      en: [
        "My first complete full stack web application.",
        "Built using PHP, HTML, CSS, JavaScript, and MySQL.",
        "Learned essential concepts about web application security.",
        "Established the foundation for learning modern web technologies."
      ],
      pt: [
        "Meu primeiro projeto web Full Stack completo.",
        "Desenvolvido utilizando PHP, HTML, CSS, JavaScript e MySQL.",
        "Aprendi conceitos fundamentais sobre segurança em aplicações web.",
        "Serviu como base para minha evolução com tecnologias modernas."
      ]
    },
    challenges: {
      en: "Understanding how to securely connect the frontend and backend while keeping the application organized as it became more complex.",
      pt: "Entender como conectar frontend e backend de forma segura, mantendo a aplicação organizada conforme ela crescia em complexidade."
    },
    lessonsLearned: {
      en: "EventHub taught me much more than programming syntax. I learned how to structure a complete application, the importance of writing organized code, fundamental security practices, and how building real projects is the best way to improve as a developer.",
      pt: "O EventHub me ensinou muito mais do que sintaxe de programação. Aprendi como estruturar uma aplicação completa, a importância de escrever um código organizado, conceitos fundamentais de segurança e como desenvolver projetos reais é a melhor forma de evoluir como desenvolvedor."
    }
  }
]