// src/pages/Artigos.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { Reveal } from '@/components/ui/animations';
import { Logo } from '@/components/ui/Logo';
import { ArtigoModal } from '@/components/Artigos/ArtigoModal';
import { artigos, Artigo } from '@/data/artigos';
import { COLORS } from '@/constants/colors';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

export default function Artigos() {
  const [selectedArtigo, setSelectedArtigo] = useState<Artigo | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (artigo: Artigo) => {
    setSelectedArtigo(artigo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedArtigo(null);
  };

  return (
    <>
      <SEOHead
        title="Artigos | Publicações Jurídicas - OLC Advogados"
        description="Artigos e publicações jurídicas da OLC Advogados sobre Direito Empresarial, Laboral e outras áreas do direito em Angola."
      />

      <div className="fixed top-0 inset-x-0 z-50 h-[1.5px]" style={{ background: COLORS.gold }} />

      <div className="min-h-screen" style={{ background: COLORS.white }}>

        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 text-center" style={{ background: COLORS.navy }}>
          <div className="absolute top-0 right-0 w-[45vw] h-[45vw] pointer-events-none" style={{ background: `radial-gradient(ellipse at top right, ${COLORS.gold}12 0%, transparent 65%)` }} />
          <div className="relative z-10">
            <Logo variant="full" showTagline />
            <div className="h-8" />
            <motion.p
              className="font-mono text-[10px] tracking-[0.22em] uppercase mb-4"
              style={{ color: COLORS.gold }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Doutrina · Opinião · Análise Jurídica
            </motion.p>
            <motion.h1
              className="font-light tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 7vw, 5rem)', color: COLORS.white }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Artigos e Publicações
            </motion.h1>
            <motion.p
              className="text-lg font-light max-w-2xl mx-auto mt-4"
              style={{ color: `${COLORS.white}cc` }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Análises jurídicas e atualizações relevantes para o seu negócio
            </motion.p>
          </div>
        </section>

        {/* Lista de Artigos */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {artigos.map((artigo, index) => (
                <Reveal key={artigo.id} type="fadeUp" delay={index * 0.1}>
                  <motion.article
                    className="group cursor-pointer border-b pb-12 last:border-b-0"
                    style={{ borderColor: COLORS.border }}
                    onClick={() => openModal(artigo)}
                  >
                    {/* Imagem (opcional) */}
                    {artigo.imagemCapa && (
                      <div className="mb-6 overflow-hidden rounded-lg">
                        <img
                          src={artigo.imagemCapa}
                          alt={artigo.titulo}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Metadata */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="size-3.5" style={{ color: COLORS.gold }} />
                        <span className="text-xs font-light" style={{ color: COLORS.navy }}>
                          {artigo.data}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="size-3.5" style={{ color: COLORS.gold }} />
                        <span className="text-xs font-light" style={{ color: COLORS.navy }}>
                          {artigo.minutosLeitura} min de leitura
                        </span>
                      </div>
                    </div>

                    {/* Título */}
                    <h2
                      className="text-2xl md:text-3xl font-light tracking-wide mb-3 transition-colors group-hover:text-gold"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.navy }}
                    >
                      {artigo.titulo}
                    </h2>

                    {/* Descrição */}
                    <p className="text-base font-light leading-relaxed mb-4" style={{ color: COLORS.textMuted }}>
                      {artigo.descricao}
                    </p>

                    {/* Ler mais */}
                    <div className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase transition-colors group-hover:gap-3" style={{ color: COLORS.gold }}>
                      Ler artigo completo
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Modal do Artigo */}
      <ArtigoModal
        artigo={selectedArtigo}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </>
  );
}