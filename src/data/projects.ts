import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Direito Empresarial',
    category: 'empresarial',
    year: '2015',
    slug: 'direito-empresarial',
    badge: 'Área Principal',
    // Handshake / business deal — M&A e contratos comerciais
    coverImage: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description:
      'Assessoria completa a empresas nacionais e internacionais. Contratos comerciais, fusões e aquisições, reestruturações e negociações estratégicas no mercado angolano.',
    stack:
      'Contratos Comerciais · Fusões e Aquisições · Reestruturações · Due Diligence · Negociações Estratégicas',
    location: 'Luanda, Angola',
    images: [
      {
        id: '1-1',
        // Business handshake — acordo comercial
        src: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Acordo comercial — Direito Empresarial',
        aspectRatio: 'landscape',
      },
      {
        id: '1-2',
        // Signing contract — assinatura de contrato
        src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Assinatura de contrato comercial',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '2',
    title: 'Propriedade Intelectual',
    category: 'intelectual',
    year: '2016',
    slug: 'propriedade-intelectual',
    badge: 'Área Principal',
    // Light bulb / idea — criatividade e protecção de activos intelectuais
    coverImage: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description:
      'Protecção e gestão estratégica de activos intelectuais. Registo de marcas e patentes, defesa de direitos de autor e combate à contrafacção junto do IAPI e tribunais angolanos.',
    stack:
      'Registo de Marcas · Patentes · Direitos de Autor · Combate à Contrafacção · Licenciamento',
    location: 'Luanda, Angola',
    images: [
      {
        id: '2-1',
        // Creative/IP concept — protecção de propriedade intelectual
        src: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Protecção de propriedade intelectual',
        aspectRatio: 'landscape',
      },
      {
        id: '2-2',
        // Patent document / stamp — registo de patentes
        src: 'https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Registo de marcas e patentes — IAPI',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '3',
    title: 'Direito Societário',
    category: 'societario',
    year: '2015',
    slug: 'direito-societario',
    badge: 'Especialização',
    // Boardroom / corporate governance — órgãos de administração
    coverImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description:
      'Constituição de sociedades, pactos sociais, governação corporativa e assessoria a órgãos de administração. Expertise nos quadros regulatórios angolanos ao abrigo da Lei n.º 11/15.',
    stack:
      'Constituição de Sociedades · Pactos Sociais · Governação Corporativa · Compliance · Dissolução',
    location: 'Luanda, Angola',
    images: [
      {
        id: '3-1',
        // Corporate boardroom meeting — conselho de administração
        src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Governação corporativa — conselho de administração',
        aspectRatio: 'landscape',
      },
      {
        id: '3-2',
        // Corporate documents — pactos sociais e estatutos
        src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Pactos sociais e documentação societária',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '4',
    title: 'Contencioso e Arbitragem',
    category: 'contencioso',
    year: '2018',
    slug: 'contencioso-arbitragem',
    badge: 'Especialização',
    // Gavel / scales of justice — tribunal e arbitragem
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description:
      'Representação em litígios comerciais perante os tribunais angolanos e em processos de arbitragem nacional e internacional, incluindo execução de sentenças ao abrigo da Convenção de Nova Iorque.',
    stack:
      'Litígios Comerciais · Arbitragem Nacional · Arbitragem Internacional · Mediação · Execução de Sentenças',
    location: 'Luanda, Angola',
    images: [
      {
        id: '4-1',
        // Lady Justice / scales — tribunal e justiça
        src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Tribunal — contencioso e arbitragem comercial',
        aspectRatio: 'landscape',
      },
      {
        id: '4-2',
        // Law books / gavel — processo judicial
        src: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Processo de arbitragem internacional',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '5',
    title: 'Direito Internacional',
    category: 'internacional',
    year: '2017',
    slug: 'direito-internacional',
    badge: 'Especialização',
    // Globe / international trade — operações transfronteiriças
    coverImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description:
      'Apoio jurídico a investimento estrangeiro em Angola e a empresas angolanas em expansão regional na SADC. Estruturação de operações transfronteiriças e joint ventures internacionais.',
    stack:
      'Investimento Estrangeiro · Contratos Internacionais · Joint Ventures · Expansão Regional SADC',
    location: 'Luanda, Angola',
    images: [
      {
        id: '5-1',
        // International business / handshake across borders
        src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Investimento estrangeiro — operações internacionais',
        aspectRatio: 'landscape',
      },
      {
        id: '5-2',
        // World map / flags — expansão regional SADC
        src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Expansão regional SADC — direito internacional',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '6',
    title: 'Assessoria Estratégica',
    category: 'assessoria',
    year: '2015',
    slug: 'assessoria-estrategica',
    badge: 'Retainer',
    // Strategy meeting / whiteboard — parceria jurídica contínua
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description:
      'Parceria jurídica contínua com a direcção das empresas através de retainer jurídico. Identificação proactiva de riscos, oportunidades e enquadramento regulatório em tempo real.',
    stack:
      'Retainer Jurídico · Análise de Riscos · Pareceres Jurídicos · Formação Legal · Compliance',
    location: 'Luanda, Angola',
    images: [
      {
        id: '6-1',
        // Executive strategy meeting — assessoria a direcção
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Assessoria estratégica — reunião executiva',
        aspectRatio: 'landscape',
      },
      {
        id: '6-2',
        // Legal analysis / lawyer at desk — pareceres jurídicos
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        alt: 'Pareceres jurídicos — análise de riscos legais',
        aspectRatio: 'landscape',
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

export const getAdjacentProjects = (
  currentSlug: string,
): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};