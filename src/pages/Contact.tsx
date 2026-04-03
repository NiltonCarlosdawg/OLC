import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { Reveal } from '@/components/ui/animations';
import { Logo } from '@/components/ui/Logo';
import { COLORS } from '@/constants/colors';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contacto | OLC Advogados"
        description={`Solicite uma consulta jurídica com a ${photographerInfo.name}. Sociedade de Advogados em Luanda, Angola. Resposta garantida em 24 a 48 horas úteis.`}
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
            className="absolute right-0 bottom-0 text-[16vw] font-light leading-none select-none pointer-events-none hidden xl:block"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.018)' }}
          >
            Contacto
          </div>

          <div className="relative max-w-4xl mx-auto text-center space-y-6" style={{ zIndex: 2 }}>
            <Reveal type="blur">
              <Logo variant="full" showTagline />
              <div className="h-6" />
              <p
                className="font-mono text-[10px] tracking-[0.22em] uppercase mb-4"
                style={{ color: COLORS.gold, fontFamily: "'DM Mono', monospace" }}
              >
                Agende a sua consulta jurídica
              </p>
              <h1
                className="font-light tracking-wide mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 7vw, 6rem)', color: COLORS.textLight }}
              >
                Contacto
              </h1>
              <p
                className="text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto"
                style={{ color: COLORS.textMutedLight, fontFamily: "'DM Sans', sans-serif" }}
              >
                Estamos à sua disposição para esclarecer dúvidas e prestar assessoria jurídica especializada.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Formulário + Informações */}
        <section className="py-16 md:py-24 px-6 lg:px-8" style={{ borderTop: `1px solid ${COLORS.border}` }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

              {/* Esquerda — formulário */}
              <Reveal type="fadeLeft">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p
                      className="font-mono text-[10px] tracking-[0.2em] uppercase"
                      style={{ color: COLORS.gold, fontFamily: "'DM Mono', monospace" }}
                    >
                      Formulário de Contacto
                    </p>
                    <h2
                      className="font-light tracking-wide"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: COLORS.textDark }}
                    >
                      Solicitar Consulta
                    </h2>
                    <p
                      className="font-light"
                      style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8', fontSize: '14px', color: COLORS.textMuted }}
                    >
                      Preencha o formulário com os seus dados e a descrição da sua situação jurídica. Um advogado especializado na matéria em causa responderá dentro de 24 a 48 horas úteis.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </Reveal>

              {/* Direita — informações de contacto */}
              <Reveal type="fadeRight" delay={0.15}>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <p
                      className="font-mono text-[10px] tracking-[0.2em] uppercase"
                      style={{ color: COLORS.gold, fontFamily: "'DM Mono', monospace" }}
                    >
                      Informações
                    </p>
                    <h2
                      className="font-light tracking-wide"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: COLORS.textDark }}
                    >
                      Contactos Directos
                    </h2>
                    <p
                      className="font-light"
                      style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8', fontSize: '14px', color: COLORS.textMuted }}
                    >
                      Prefere um contacto directo? A nossa equipa está disponível pelos seguintes canais durante o horário de expediente.
                    </p>
                  </div>

                  <Separator className="bg-[#e8e8e6] dark:bg-[#1e1e1c]" />

                  <div className="space-y-6">

                    <div className="flex items-start gap-4">
                      <div className="p-3 border" style={{ borderColor: COLORS.border, background: COLORS.lightBg }}>
                        <Mail className="size-5" style={{ color: COLORS.gold }} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] tracking-[0.15em] uppercase font-light" style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}>
                          Correio Electrónico
                        </p>
                        <a
                          href="mailto:geral@olcadvogados.ao"
                          className="text-base md:text-lg font-light transition-colors"
                          style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.textDark }}
                        >
                          geral@olcadvogados.ao
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 border" style={{ borderColor: COLORS.border, background: COLORS.lightBg }}>
                        <Phone className="size-5" style={{ color: COLORS.gold }} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] tracking-[0.15em] uppercase font-light" style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}>
                          Telefone
                        </p>
                        <a
                          href="tel:+244923481472"
                          className="text-base md:text-lg font-light transition-colors"
                          style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.textDark }}
                        >
                          +244 923 481 472
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 border" style={{ borderColor: COLORS.border, background: COLORS.lightBg }}>
                        <Phone className="size-5" style={{ color: COLORS.gold }} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] tracking-[0.15em] uppercase font-light" style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}>
                          Telefone
                        </p>
                        <a
                          href="tel:+244958087582"
                          className="text-base md:text-lg font-light transition-colors"
                          style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.textDark }}
                        >
                          +244 958 087 582
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 border" style={{ borderColor: COLORS.border, background: COLORS.lightBg }}>
                        <MapPin className="size-5" style={{ color: COLORS.gold }} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] tracking-[0.15em] uppercase font-light" style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}>
                          Morada
                        </p>
                        <p
                          className="text-base font-light"
                          style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.textDark }}
                        >
                          Luanda, Angola
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 border" style={{ borderColor: COLORS.border, background: COLORS.lightBg }}>
                        <Clock className="size-5" style={{ color: COLORS.gold }} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] tracking-[0.15em] uppercase font-light" style={{ color: '#bbb', fontFamily: "'DM Mono', monospace" }}>
                          Horário de Atendimento
                        </p>
                        <p
                          className="text-sm font-light"
                          style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.75', color: COLORS.textDark }}
                        >
                          Segunda a Sexta-feira: 08h00 – 18h00
                          <br />
                          Sábado: 09h00 – 13h00
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Badge disponibilidade */}
                  <div className="pt-2">
                    <span
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-3 py-1.5"
                      style={{ background: COLORS.navy, color: COLORS.textLight, fontFamily: "'DM Mono', monospace" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {photographerInfo.availability}
                    </span>
                  </div>

                  {/* Nota de sigilo */}
                  <div
                    className="border p-4"
                    style={{ borderColor: COLORS.border, background: 'rgba(201,168,76,0.03)' }}
                  >
                    <p
                      className="text-[11px] font-light leading-relaxed"
                      style={{ color: '#999', fontFamily: "'DM Sans', sans-serif", lineHeight: '1.75' }}
                    >
                      <span className="font-mono text-[9px] tracking-[0.15em] uppercase mr-2" style={{ color: COLORS.gold, fontFamily: "'DM Mono', monospace" }}>
                        Sigilo Profissional
                      </span>
                      Toda a informação partilhada com a nossa firma é tratada com rigorosa confidencialidade, ao abrigo das normas deontológicas da Ordem dos Advogados de Angola.
                    </p>
                  </div>

                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}