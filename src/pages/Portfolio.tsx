import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { SEOHead } from '@/components/seo/SEOHead';
import { Reveal, StaggerReveal } from '@/components/ui/animations';
import { Logo } from '@/components/ui/Logo';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COLORS } from '@/constants/colors';


const INTRO = 'A nossa firma presta assessoria jurídica especializada em seis grandes domínios do Direito, ' +
  'assegurando aos clientes um serviço integrado, rigoroso e orientado para os resultados, ' +
  'em plena conformidade com o ordenamento jurídico angolano.';

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Áreas de Prática | OLC Advogados"
        description="Conheça as áreas de prática jurídica da OLO Advogados: Direito Empresarial, Propriedade Intelectual, Direito Societário, Contencioso e Arbitragem, Direito Internacional e Assessoria Estratégica. Luanda, Angola."
      />

      {/* Linha dourada no topo */}
      <div className="fixed top-0 inset-x-0 z-50 h-[1.5px]" style={{ background: COLORS.gold }} />

      <div className="min-h-screen" style={{ background: COLORS.lightBg }}>

        {/* Hero */}
        <section className="relative py-24 md:py-40 px-6 lg:px-8 overflow-hidden" style={{ background: COLORS.navy }}>

          <div
            className="absolute top-0 right-0 w-[45vw] h-[45vw] pointer-events-none"
            style={{ background: COLORS.goldGlow }}
          />
          <div
            className="absolute left-[9vw] top-[8%] bottom-[10%] w-px pointer-events-none hidden lg:block"
            style={{ background: `linear-gradient(to bottom, transparent, ${COLORS.gold}25, transparent)` }}
          />
          <div
            className="absolute right-0 bottom-0 text-[18vw] font-light leading-none select-none pointer-events-none hidden xl:block"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.018)' }}
          >
            Prática
          </div>

          <div className="relative max-w-7xl mx-auto text-center space-y-6" style={{ zIndex: 2 }}>
            <Reveal type="blur">
              <Logo variant="full" showTagline />
              <div className="h-6" />
              <p
                className="font-mono text-[10px] tracking-[0.22em] uppercase mb-4"
                style={{ color: COLORS.gold, fontFamily: "'DM Mono', monospace" }}
              >
                Direito Empresarial · Propriedade Intelectual · Angola
              </p>
              <h1
                className="font-light tracking-wide mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 7vw, 6rem)', color: COLORS.textLight }}
              >
                Áreas de Prática
              </h1>
              <p
                className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto"
                style={{ color: COLORS.textMutedLight, fontFamily: "'DM Sans', sans-serif" }}
              >
                Seis especialidades jurídicas para proteger e valorizar o seu negócio em Angola
              </p>
            </Reveal>
          </div>
        </section>

        {/* Introdução institucional */}
        <section className="py-12 md:py-16 px-6 lg:px-8" style={{ borderTop: `1px solid ${COLORS.border}`, background: COLORS.lightBg }}>
          <div className="max-w-4xl mx-auto">
            <Reveal type="fadeUp">
              <p
                className="text-base md:text-lg font-light leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.85', color: COLORS.textMuted }}
              >
                {INTRO}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Grelha de áreas */}
        <section className="py-8 md:py-12 px-4 md:px-6" style={{ borderTop: `1px solid ${COLORS.border}` }}>
          <StaggerReveal
            type="fadeUp"
            staggerDelay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory
                index={index}
              />
            ))}
          </StaggerReveal>
        </section>

        {/* CTA — Agendar Consulta */}
        <section className="py-16 md:py-20 px-6 lg:px-8" style={{ background: COLORS.navy, borderTop: `1px solid rgba(255,255,255,0.06)` }}>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Reveal type="fadeUp">
              <p
                className="font-mono text-[10px] tracking-[0.22em] uppercase"
                style={{ color: `${COLORS.gold}80`, fontFamily: "'DM Mono', monospace" }}
              >
                Próximos passos
              </p>
              <h2
                className="font-light tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: COLORS.textLight }}
              >
                Precisa de assessoria jurídica especializada?
              </h2>
              <p
                className="text-base font-light leading-relaxed max-w-xl mx-auto"
                style={{ color: COLORS.textMutedLight, fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8' }}
              >
                Contacte a nossa firma para agendar uma consulta inicial com o advogado especializado na área jurídica do seu interesse.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase px-6 py-3 transition-all hover:opacity-90 group"
                  style={{ background: COLORS.gold, color: COLORS.navy, fontFamily: "'DM Mono', monospace" }}
                >
                  Solicitar Consulta
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="h-16" style={{ background: COLORS.lightBg }} />
      </div>
    </>
  );
}