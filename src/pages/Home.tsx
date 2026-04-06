import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/data/projects';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { Reveal, TextReveal } from '@/components/ui/animations';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, ArrowUpRight, Scale, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COLORS } from '@/constants/colors';
import fotoDestaque from '@/assets/4.webp';



// ── Conteúdo institucional ───────────────────────────────────────
const FIRMA_NOME     = 'OLC';
const FIRMA_APELLIDO = 'Advogados';
const FIRMA_TAGLINE  = 'Excelência jurídica ao serviço do seu negócio em Angola.';
const FIRMA_DESC     =
  'Assessoria jurídica especializada em Direito Empresarial e Propriedade Intelectual, ' +
  'prestada por advogados inscritos na Ordem dos Advogados de Angola. ' +
  'Protegemos e valorizamos os activos da sua empresa com rigor, ética e visão estratégica.';

const PILARES = [
  {
    icon: Scale,
    label: 'Rigor Jurídico',
    desc: 'Actualização permanente do conhecimento jurídico, acompanhando a evolução legislativa, doutrinária e jurisprudencial angolana.',
  },
  {
    icon: Globe,
    label: 'Visão Estratégica',
    desc: 'Soluções jurídicas modernas e adaptadas à realidade do mercado angolano, com perspectiva de negócio e conhecimento do quadro regulatório.',
  },
  {
    icon: ShieldCheck,
    label: 'Confidencialidade',
    desc: 'Protecção absoluta das informações dos clientes, assegurada pelo sigilo profissional e por protocolos rigorosos de segurança.',
  },
];

const NUMEROS = [
  { valor: '+15',  descricao: 'Anos de experiência jurídica' },
  { valor: '+500', descricao: 'Clientes assessorados' },
  { valor: '6',    descricao: 'Áreas de prática especializadas' },
  { valor: '100%', descricao: 'Compromisso ético e deontológico' },
];

export default function Home() {
  const featuredProject = getFeaturedProjects()[0];

  return (
    <>
      <SEOHead
        title="OLC Advogados — Sociedade de Advogados, RL | Luanda, Angola"
        description={FIRMA_DESC}
      />

      {/* Linha dourada no topo */}
      <div className="fixed top-0 inset-x-0 z-50 h-[1.5px]" style={{ background: COLORS.gold }} />

      <div className="min-h-screen" style={{ background: COLORS.white }}>

        {/* HERO - fundo NAVY */}
        <section className="relative h-screen w-full overflow-hidden" style={{ background: COLORS.navy }}>

          {/* Imagem de fundo */}
          <img
            src={fotoDestaque}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ zIndex: 0, opacity: 0.25 }}
          />

          {/* Overlay gradiente para reforçar legibilidade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, ${COLORS.navy}55 0%, ${COLORS.navy}80 60%, ${COLORS.navy}cc 100%)`,
              zIndex: 0,
            }}
          />

          {/* Glow dourado */}
          <div
            className="absolute top-0 right-0 w-[45vw] h-[45vw] pointer-events-none"
            style={{ background: `radial-gradient(ellipse at top right, ${COLORS.gold}12 0%, transparent 65%)`, zIndex: 1 }}
          />

          {/* Linha editorial vertical */}
          <div
            className="absolute left-[9vw] top-[8%] bottom-[10%] w-px pointer-events-none hidden lg:block"
            style={{ background: `linear-gradient(to bottom, transparent, ${COLORS.gold}30, transparent)`, zIndex: 2 }}
          />

          {/* Conteúdo central */}
          <div className="relative h-full flex flex-col items-center justify-center px-6" style={{ zIndex: 3 }}>
            <div className="text-center space-y-6 max-w-4xl">

              {/* Eyebrow */}
              <motion.p
                className="font-mono text-[10px] tracking-[0.22em] uppercase"
                style={{ color: COLORS.gold, fontFamily: "'DM Mono', monospace" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Direito Empresarial · Propriedade Intelectual · Luanda, Angola
              </motion.p>

              {/* H1 */}
              <h1
                className="font-extralight tracking-widest text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                  lineHeight: '1.2',
                  marginBottom: '0.25rem',
                }}
              >
                <TextReveal text={FIRMA_NOME} delay={0.3} wordDelay={0.12} />
                <br />
                <TextReveal
                  text={FIRMA_APELLIDO}
                  delay={0.5}
                  wordDelay={0.12}
                  className="italic font-light"
                  style={{ color: COLORS.gold }}
                />
              </h1>

              {/* Tagline */}
              <motion.p
                className="text-lg md:text-xl font-light tracking-wide text-white/75"
                style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {FIRMA_TAGLINE}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase px-6 py-3 transition-all hover:opacity-90 group"
                  style={{ background: COLORS.gold, color: COLORS.navy, fontFamily: "'DM Mono', monospace" }}
                >
                  Agendar Consulta
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-mono tracking-widest uppercase px-6 py-3 hover:border-white/80 transition-colors group"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Conhecer a Firma
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              
            </motion.div>
          </div>
        </section>

        {/* ── Apresentação da Firma ─────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 lg:px-8" style={{ background: COLORS.white, borderBottom: `1px solid ${COLORS.border}` }}>
          <div className="max-w-5xl mx-auto">

            <Reveal type="fadeUp">
              <p
                className="font-mono text-[10px] tracking-[0.22em] uppercase mb-4"
                style={{ color: COLORS.gold, fontFamily: "'DM Mono', monospace" }}
              >
                Sobre a Firma
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-wide mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.navy }}
              >
                Assessoria jurídica especializada{' '}
                <em className="italic font-light" style={{ color: COLORS.gold }}>
                  ao seu alcance.
                </em>
              </h2>
            </Reveal>

            <Reveal type="fadeUp" delay={0.1}>
              <p
                className="text-base md:text-lg font-light leading-relaxed max-w-2xl mb-14"
                style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.85', color: COLORS.navy }}
              >
                {FIRMA_DESC}
              </p>
            </Reveal>

            {/* Três pilares */}
            <Reveal type="fadeUp" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: COLORS.border }}>
                {PILARES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="px-6 py-8 space-y-4"
                      style={{ background: COLORS.white }}
                    >
                      <Icon className="size-5" style={{ color: COLORS.gold }} />
                      <p
                        className="font-mono text-xs tracking-widest uppercase"
                        style={{ color: COLORS.gold, fontFamily: "'DM Mono', monospace" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm font-light leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8', color: COLORS.navy }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal type="fadeUp" delay={0.3}>
              <div className="mt-12">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase transition-colors group"
                  style={{ color: COLORS.navy, fontFamily: "'DM Mono', monospace" }}
                >
                  Conhecer a nossa equipa
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Números da Firma ─────────────────────────────────────── */}
        <section className="py-16 md:py-20 px-6 lg:px-8" style={{ background: COLORS.navy }}>
          <div className="max-w-5xl mx-auto">
            <Reveal type="fadeUp">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
                {NUMEROS.map((item) => (
                  <div
                    key={item.descricao}
                    className="px-6 py-10 text-center space-y-2"
                    style={{ background: COLORS.navy }}
                  >
                    <p
                      className="font-extralight"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: COLORS.gold }}
                    >
                      {item.valor}
                    </p>
                    <p
                      className="text-xs font-light leading-relaxed"
                      style={{ color: `${COLORS.white}cc`, fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Área em destaque ─────────────────────────────────────── */}
        {featuredProject && (
          <section className="py-20 md:py-28 px-6 lg:px-8" style={{ background: COLORS.white }}>
            <div className="max-w-5xl mx-auto">

              <Reveal type="fadeUp">
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-10"
                  style={{ color: COLORS.gold, fontFamily: "'DM Mono', monospace" }}
                >
                  Área em Destaque
                </p>
              </Reveal>

              <Reveal type="fadeUp" delay={0.1}>
                <Link to={`/project/${featuredProject.slug}`} className="group block">
                  <div className="relative overflow-hidden aspect-video mb-6" style={{ background: COLORS.border }}>
                    <img
                      src={fotoDestaque}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2" style={{ background: COLORS.gold }}>
                        <ArrowUpRight className="size-4" style={{ color: COLORS.navy }} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2
                        className="text-2xl md:text-3xl font-light tracking-wide mb-1 transition-colors"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.navy }}
                      >
                        {featuredProject.title}
                      </h2>
                      <p
                        className="text-sm font-mono tracking-wide capitalize"
                        style={{ color: COLORS.navy, fontFamily: "'DM Mono', monospace", opacity: 0.6 }}
                      >
                        {featuredProject.category} · {featuredProject.year}
                      </p>
                    </div>
                    <ArrowRight className="size-5 mt-1 transition-transform group-hover:translate-x-1 shrink-0" style={{ color: COLORS.navy }} />
                  </div>
                </Link>
              </Reveal>

              <Reveal type="fadeUp" delay={0.2}>
                <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${COLORS.border}` }}>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase transition-colors group"
                    style={{ color: COLORS.navy, fontFamily: "'DM Mono', monospace" }}
                  >
                    Ver todas as áreas de prática
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>

            </div>
          </section>
        )}

      </div>
    </>
  );
}
