import { Mail, MapPin, Phone } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { Reveal, StaggerReveal } from '@/components/ui/animations';

// ── Paleta institucional ─────────────────────────────────────────
const GOLD = '#C9A84C';

// ── Equipa da firma ──────────────────────────────────────────────
const TEAM = [
  {
    initials: 'AC',
    name: 'Dr. António Carvalho',
    role: 'Sócio-Gerente',
    area: 'Direito Empresarial · Fusões e Aquisições',
    oaa: 'N.º 1.247 — OAA',
  },
  {
    initials: 'MF',
    name: 'Dra. Mariana Ferreira',
    role: 'Sócia',
    area: 'Propriedade Intelectual · Direito Digital',
    oaa: 'N.º 1.583 — OAA',
  },
  {
    initials: 'JL',
    name: 'Dr. João Lopes',
    role: 'Sócio',
    area: 'Direito Internacional · Comércio Externo',
    oaa: 'N.º 1.792 — OAA',
  },
  {
    initials: 'CN',
    name: 'Dra. Catarina Neto',
    role: 'Associada Sénior',
    area: 'Direito Societário · Reestruturação Empresarial',
    oaa: 'N.º 2.105 — OAA',
  },
  {
    initials: 'PA',
    name: 'Dr. Pedro Almada',
    role: 'Associado Sénior',
    area: 'Contencioso · Arbitragem Comercial',
    oaa: 'N.º 2.318 — OAA',
  },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="A Firma"
        description={`${photographerInfo.name} — Sociedade de Advogados em Luanda, Angola. ${photographerInfo.tagline}`}
      />

      {/* Linha dourada no topo */}
      <div className="fixed top-0 inset-x-0 z-50 h-[1.5px]" style={{ background: GOLD }} />

      <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#111110]">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative py-24 md:py-40 px-6 lg:px-8 overflow-hidden bg-[#111110]">

          <div
            className="absolute top-0 right-0 w-[45vw] h-[45vw] pointer-events-none"
            style={{ background: `radial-gradient(ellipse at top right, ${GOLD}10 0%, transparent 65%)` }}
          />
          <div
            className="absolute left-[9vw] top-[8%] bottom-[10%] w-px pointer-events-none hidden lg:block"
            style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}25, transparent)` }}
          />
          <div
            className="absolute right-0 bottom-0 text-[20vw] font-light leading-none select-none pointer-events-none hidden xl:block"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.018)' }}
          >
            Firma
          </div>

          <div className="relative max-w-4xl mx-auto text-center space-y-6" style={{ zIndex: 2 }}>
            <Reveal type="blur">
              <p
                className="font-mono text-[10px] tracking-[0.22em] uppercase mb-4"
                style={{ color: GOLD, fontFamily: "'DM Mono', monospace" }}
              >
                Missão · Valores · Equipa
              </p>
              <h1
                className="font-light tracking-wide mb-4 text-[#FAFAF8]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}
              >
                A Firma
              </h1>
              <p
                className="text-lg md:text-xl font-light tracking-wide"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif" }}
              >
                Sociedade de Advogados · Luanda · Angola
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Apresentação e Contactos ─────────────────────────────── */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-[#e8e8e6] dark:border-[#1e1e1c]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Esquerda — imagem do escritório */}
              <Reveal type="fadeLeft">
                <div className="space-y-6">
                  <div className="aspect-[3/4] relative overflow-hidden bg-[#e8e8e6] dark:bg-[#1e1e1c]">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=crop&h=800&w=600"
                      alt="Escritório da Sociedade de Advogados"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to top, ${GOLD}18, transparent)` }}
                    />
                  </div>

                  {/* Contactos rápidos */}
                  <div className="flex flex-col gap-3">
                    <a
                      href="mailto:geral@sociedade.ao"
                      className="inline-flex items-center gap-3 text-sm font-light text-[#777] hover:text-[#111110] dark:hover:text-[#FAFAF8] transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <Mail className="size-4 shrink-0" style={{ color: GOLD }} />
                      geral@sociedade.ao
                    </a>
                    <a
                      href="tel:+244900000000"
                      className="inline-flex items-center gap-3 text-sm font-light text-[#777] hover:text-[#111110] dark:hover:text-[#FAFAF8] transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <Phone className="size-4 shrink-0" style={{ color: GOLD }} />
                      +244 900 000 000
                    </a>
                    <span
                      className="inline-flex items-center gap-3 text-sm font-light text-[#777]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <MapPin className="size-4 shrink-0" style={{ color: GOLD }} />
                      {photographerInfo.location}
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Direita — apresentação institucional */}
              <Reveal type="fadeRight" delay={0.15}>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h2
                      className="font-light tracking-wide text-[#111110] dark:text-[#FAFAF8]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                    >
                      {photographerInfo.name}
                    </h2>
                    <p
                      className="text-xl font-light tracking-wide text-[#777]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {photographerInfo.tagline}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-3 py-1.5"
                      style={{ background: '#111110', color: '#FAFAF8', fontFamily: "'DM Mono', monospace" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {photographerInfo.availability}
                    </span>
                  </div>

                  <Separator className="bg-[#e8e8e6] dark:bg-[#1e1e1c]" />

                  {/* Biografia institucional */}
                  <div className="space-y-4">
                    {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                      <p
                        key={index}
                        className="font-light leading-relaxed text-[#777]"
                        style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.85', fontSize: '15px' }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Registo e conformidade */}
                  <div className="pt-4 space-y-2">
                    <div className="text-sm font-light tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <span className="text-[10px] tracking-[0.15em] uppercase mr-3" style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}>
                        Registo
                      </span>
                      <span className="text-[#111110] dark:text-[#FAFAF8]">
                        Ordem dos Advogados de Angola · Lei n.º 11/15
                      </span>
                    </div>
                    <div className="text-sm font-light tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <span className="text-[10px] tracking-[0.15em] uppercase mr-3" style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}>
                        Sede
                      </span>
                      <span className="text-[#111110] dark:text-[#FAFAF8]">
                        {photographerInfo.location}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Equipa ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-[#e8e8e6] dark:border-[#1e1e1c]">
          <div className="max-w-4xl mx-auto">
            <Reveal type="fadeUp">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: GOLD, fontFamily: "'DM Mono', monospace" }}>
                Os nossos advogados
              </p>
              <h2
                className="font-light tracking-wide text-[#111110] dark:text-[#FAFAF8] mb-12"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                A Equipa
              </h2>
            </Reveal>

            <StaggerReveal type="fadeUp" staggerDelay={0.12} className="space-y-10">
              {TEAM.map((member) => (
                <div key={member.name} className="border-b border-[#e8e8e6] dark:border-[#1e1e1c] pb-10 last:border-b-0">
                  <div className="flex justify-between items-start gap-4 mb-1 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 flex items-center justify-center text-sm font-light shrink-0"
                        style={{ background: '#111110', color: GOLD, fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.05em' }}
                      >
                        {member.initials}
                      </div>
                      <div>
                        <h3
                          className="text-xl font-light tracking-wide text-[#111110] dark:text-[#FAFAF8]"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {member.name}
                        </h3>
                        <span
                          className="font-mono text-[9px] tracking-[0.15em] uppercase"
                          style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}
                        >
                          {member.oaa}
                        </span>
                      </div>
                    </div>
                    <span
                      className="font-mono text-[10px] tracking-[0.15em] uppercase whitespace-nowrap"
                      style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}
                    >
                      {member.role}
                    </span>
                  </div>
                  <p
                    className="text-sm font-light italic ml-14"
                    style={{ color: GOLD, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {member.area}
                  </p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ── Competências Jurídicas ───────────────────────────────── */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-[#e8e8e6] dark:border-[#1e1e1c]">
          <div className="max-w-4xl mx-auto">
            <Reveal type="fadeUp">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: GOLD, fontFamily: "'DM Mono', monospace" }}>
                As nossas especialidades
              </p>
              <h2
                className="font-light tracking-wide text-[#111110] dark:text-[#FAFAF8] mb-12"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Competências Jurídicas
              </h2>
            </Reveal>

            <StaggerReveal type="scale" staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {photographerInfo.skills?.map((group) => (
                <div key={group.title}>
                  <h3 className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}>
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-sm border border-[#e8e8e6] dark:border-[#1e1e1c] px-3 py-1.5 text-[#111110] dark:text-[#FAFAF8] bg-[#FAFAF8] dark:bg-[#111110] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ── Conformidade Regulatória ─────────────────────────────── */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-[#e8e8e6] dark:border-[#1e1e1c] bg-[#111110]">
          <div className="max-w-4xl mx-auto">
            <Reveal type="fadeUp">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: `${GOLD}80`, fontFamily: "'DM Mono', monospace" }}>
                Enquadramento legal
              </p>
              <h2
                className="font-light tracking-wide text-[#FAFAF8] mb-12"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Conformidade Regulatória
              </h2>
            </Reveal>

            <StaggerReveal type="fadeUp" staggerDelay={0.1} className="space-y-0">
              {[
                { code: 'Lei n.º 11/15',   title: 'Lei das Sociedades Comerciais',  body: 'Constituída nos termos da Lei das Sociedades Comerciais de Angola, aprovada a 17 de Junho de 2015.' },
                { code: 'E.A. n.º 22/20',  title: 'Estatuto da Advocacia',          body: 'Todos os advogados da firma são membros regulares da Ordem dos Advogados de Angola, com inscrição activa.' },
                { code: 'D.P. n.º 153/16', title: 'Decreto Presidencial',           body: 'Actividade exercida em plena conformidade com o Decreto Presidencial de 5 de Agosto de 2016.' },
                { code: 'RGPD-AO',         title: 'Protecção de Dados Pessoais',    body: 'Tratamento de dados pessoais em conformidade com a legislação angolana aplicável e as melhores práticas internacionais.' },
              ].map((item) => (
                <div
                  key={item.code}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b last:border-b-0"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span
                    className="font-mono text-[10px] tracking-[0.15em] uppercase shrink-0 w-32"
                    style={{ color: GOLD, fontFamily: "'DM Mono', monospace" }}
                  >
                    {item.code}
                  </span>
                  <div>
                    <p className="font-light text-[#FAFAF8] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}>
                      {item.title}
                    </p>
                    <p
                      className="text-sm font-light"
                      style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'DM Sans', sans-serif", lineHeight: '1.75' }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

      </div>
    </>
  );
}