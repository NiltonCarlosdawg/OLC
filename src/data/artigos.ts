// src/data/artigos.ts
import imagemadvertencia from '@/assets/advertencia a classe.jpeg';

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
  },
  {
  id: 4,
  titulo: "Ordem dos Advogados de Angola adverte sobre publicidade indevida nas redes sociais",
  descricao: "A OAA manifesta preocupação com o aumento de práticas de publicidade por advogados e estagiários em violação do Estatuto e do Código de Ética.",
  conteudo: `
    <h2>Preocupação da Ordem</h2>
    <p>A Ordem dos Advogados de Angola tem constatado, com elevada preocupação, o aumento de práticas de publicidade por advogados e advogados estagiários nas redes sociais, em manifesta violação do Estatuto da OAA (EOAA), bem como do Código de Ética e Deontologia Profissional (CEDP).</p>
    
    <p>Tais comportamentos não são compatíveis com a dignidade, a sobriedade e a natureza da profissão, colidindo directamente com normas essenciais da advocacia.</p>
    
    <h2>Normas violadas</h2>
    <ul>
      <li><strong>Princípios gerais:</strong> dever de dignidade, probidade e respeito pela função da advocacia (artigos 60.º do EOAA e 1.º do CEDP);</li>
      <li><strong>Independência e isenção do advogado</strong> (artigos 60.º do EOAA e 2.º do CEDP);</li>
      <li><strong>Proibição de publicidade incompatível com a dignidade da profissão</strong> (artigos 64.º do EOAA e 7.º do CEDP);</li>
      <li><strong>Dever de actuação leal e proibição de captação indevida de clientela</strong> (artigo 8.º do CEDP);</li>
      <li><strong>Uso do Traje Profissional (Toga)</strong> nos termos previstos pelo Estatuto (artigos 61.º do EOAA e 26.º do CEDP).</li>
    </ul>
    
    <h2>Posição da Ordem</h2>
    <p>A Ordem adverte, de forma firme e inequívoca, que não permitirá a banalização destas práticas nem tolerará comportamentos que fragilizem a imagem, a credibilidade e o prestígio da advocacia angolana.</p>
    
    <p>A advocacia não é uma actividade comercial. A promoção pessoal excessiva, a exposição imprópria de serviços jurídicos e a captação de clientela por vias inadequadas constituem desvios graves aos deveres éticos da classe.</p>
    
    <h2>Consequências disciplinares</h2>
    <p>Informa-se que tais condutas implicarão a instauração de processos disciplinares, com a aplicação rigorosa das consequências previstas nos normativos da Ordem dos Advogados de Angola, sem margem para complacência. A actuação disciplinar será conduzida com a firmeza e a solidez necessárias para erradicar estas práticas do seio da classe.</p>
    
    <p>A advocacia sem ética não cumpre a sua missão. Impõe-se, por isso, a observância escrupulosa dos princípios que regem a profissão.</p>
    
    <hr />
    <p><strong>Luanda, 25 de Março de 2026.</strong></p>
    <p><strong>O PRESIDENTE DO CONSELHO NACIONAL</strong><br />Jose Luis Domingos</p>
  `,
  data: "25 de março de 2026",
  minutosLeitura: 3,
  imagemCapa: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
  imagemUrl: imagemadvertencia
}
];