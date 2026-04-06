// src/data/artigos.ts

export interface Artigo {
  id: number;
  titulo: string;
  descricao: string;
  conteudo: string;      // HTML ou texto completo para o modal
  data: string;
  minutosLeitura: number;
  imagemCapa?: string;
  imagemUrl?: string;    // Para imagem principal do artigo
}

export const artigos: Artigo[] = [
  {
    id: 1,
    titulo: "Tribunal indefere pedido de caução em providência cautelar laboral",
    descricao: "Análise da recente decisão judicial que indefere pedido de caução em providência cautelar laboral.",
    conteudo: `
      <h2>Entenda a decisão</h2>
      <p>O Tribunal decidiu recentemente que... (aqui vai o conteúdo completo do artigo)</p>
      <p>Esta decisão tem implicações importantes para os trabalhadores e empresas, pois...</p>
      <h3>O que muda na prática?</h3>
      <p>Com esta decisão, fica estabelecido que...</p>
      
    `,
    data: "12 de março de 2026",
    minutosLeitura: 2,
    imagemCapa: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    imagemUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200"
  },
  {
    id: 2,
    titulo: "Pode ser decretado luto nacional na sequência do falecimento do antigo Presidente da Assembleia Nacional?",
    descricao: "Análise jurídica sobre as formalidades e implicações do decreto de luto nacional em Angola.",
    conteudo: `
      <h2>Enquadramento legal</h2>
      <p>O luto nacional é regulado pelo Decreto Presidencial... (conteúdo completo)</p>
      <p>Neste artigo, analisamos os requisitos e precedentes para a decretação de luto nacional...</p>
    `,
    data: "18 de dezembro de 2025",
    minutosLeitura: 3,
    imagemCapa: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    imagemUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200"
  },
  {
    id: 3,
    titulo: "Implicações laborais da greve dos taxistas",
    descricao: "Impactos legais e direitos dos trabalhadores durante a paralisação dos taxistas em Angola.",
    conteudo: `
      <h2>Contexto da greve</h2>
      <p>A greve dos taxistas que ocorreu em... (conteúdo completo)</p>
      <p>Analisamos as implicações para os contratos de trabalho e as faltas justificadas...</p>
    `,
    data: "29 de julho de 2025",
    minutosLeitura: 3,
    imagemCapa: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    imagemUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200"
  }
];