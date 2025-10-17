// src/data/projects.data.ts

import type { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "biologico-blog",
    title: "BioLógico Blog",
    shortDescription: "Blog colaborativo onde usuários podem se cadastrar, publicar e explorar artigos sobre o mundo natural.",
    description: "Desenvolvido como um desafio técnico, o BioLógico é uma aplicação web completa onde qualquer pessoa pode se cadastrar e compartilhar conteúdo sobre Biologia. A plataforma oferece uma experiência de usuário rica, com um sistema de autenticação completo, gerenciamento de posts (CRUD) com upload de imagens, e uma poderosa ferramenta de exploração que permite aos leitores filtrar artigos por categorias dinâmicas ou realizar buscas textuais para encontrar conteúdo específico.", coverImage: "/projects/biologico-blog/Biologico.png",
    gallery: [
      { "type": "image", "path": "/projects/biologico-blog/Biologico.png" },
      { "type": "image", "path": "/projects/biologico-blog/Login.png" }
    ],
    stack: ["Laravel", "PHP", "React", "TypeScript", "MySQL", "JWT", "API Rest"],
    period: "Desenvolvido em Out/2024",
    myRole: "Desenvolvedor Full Stack",
    challenges: "O desafio principal envolveu a criação de uma arquitetura full-stack coesa. No front-end, a lógica de autenticação com JWT e auto-refresh de tokens via interceptors Axios foi crucial para a segurança e UX. No back-end, além de construir uma API RESTful robusta, um desafio interessante foi a implementação de rotinas de limpeza automáticas via agendador de tarefas (schedule) do Laravel. Isso incluiu a criação de comandos para remover refresh tokens expirados e categorias órfãs (sem posts associados), garantindo a integridade do banco de dados e a manutenibilidade do sistema a longo prazo.", links: {
      live: "https://biologico.up.railway.app/",
      github: "https://github.com/AndrewMarques2018/biologico"
    }
  },
  {
    id: "sou-jus",
    title: "Sou Jus",
    shortDescription: "Plataforma SaaS para advogados que automatiza a geração de documentos jurídicos e integra gestão de pagamentos.",
    description: "O Sou Jus é uma plataforma inovadora que revoluciona a interação entre advogados e clientes, combinando tecnologia de ponta para oferecer soluções jurídicas eficientes. A plataforma é focada em automação, produtividade e usabilidade, com funcionalidades como um painel administrativo completo, geração de documentos com variáveis dinâmicas e um sistema de planos de acesso.",
    coverImage: "/projects/sou-jus/Cover.png",
    gallery: [
      { "type": "image", "path": "/projects/sou-jus/Cover.png" },
      { "type": "video", "path": "/projects/sou-jus/NovaReclamacaoTrabalhista.mp4" },
      { "type": "image", "path": "/projects/sou-jus/GerenciamentoTemplates.png" },
      { "type": "image", "path": "/projects/sou-jus/GerenciamentoUsuarios.png" }
    ],
    stack: ["React", "Node.js", "Express", "Firebase", "Mercado Pago"],
    period: "Desenvolvido em Jan/2024 - Out/2024", // Ajustado para a data atual
    myRole: "Desenvolvedor Full Stack",
    challenges: "O maior desafio técnico foi arquitetar o sistema de geração de documentos automatizados, permitindo que administradores criem modelos com regras personalizadas e pré-visualização em tempo real. Além disso, a integração com a API do Mercado Pago foi complexa, exigindo a implementação de um sistema robusto para gerenciar assinaturas, processar pagamentos via Cartão e Pix, e controlar o acesso dos usuários com base no status do plano através de webhooks seguros.",
    links: {
      live: ""
    }
  },
  {
    id: "visa-mob",
    title: "Visa Mob",
    shortDescription: "Aplicativo mobile offline-first para inspeções sanitárias em campo, desenvolvido em React Native.",
    description: "Liderei o desenvolvimento do Visa Mob, um aplicativo projetado para atender às necessidades dos fiscais da VISA durante inspeções em áreas sem acesso à internet. Fui pioneiro na empresa ao introduzir React Native e TypeScript para este projeto, que permite a geração e o preenchimento de formulários complexos de forma totalmente offline, com os dados sendo armazenados em cache local.",
    coverImage: "/projects/visa-mob/Cover.png",
    gallery: [
      { "type": "image", "path": "/projects/visa-mob/Home.jpeg" },
      { "type": "image", "path": "/projects/visa-mob/ConsultarTermos.jpeg" },
      { "type": "image", "path": "/projects/visa-mob/FormAss.jpeg" },
      { "type": "image", "path": "/projects/visa-mob/Login.jpeg" },
      { "type": "image", "path": "/projects/visa-mob/ReportError.jpeg" },
    ],
    stack: ["React Native", "TypeScript", "Offline-first", "Lecom (BPM)"],
    period: "Desenvolvido em 2023", // Ajuste se necessário
    myRole: "Líder de Desenvolvimento Mobile / Desenvolvedor React Native",
    challenges: "O principal desafio técnico foi projetar uma arquitetura offline-first robusta. Isso envolveu o desenvolvimento de um motor de renderização de formulários dinâmicos, capaz de interpretar um JSON complexo (gerado via SQL a partir de um BPM) para criar campos, regras de obrigatoriedade e validações sem conexão com a internet. Outro desafio significativo foi criar um sistema de sincronização confiável, que submete os formulários armazenados em cache para a plataforma Lecom de forma segura e íntegra assim que a conectividade é restabelecida.",
    links: {} // Projeto interno, sem links públicos
  }
];