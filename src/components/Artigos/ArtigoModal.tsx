// src/components/artigos/ArtigoModal.tsx

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar } from 'lucide-react';
import { Artigo } from '@/data/artigos';
import { COLORS } from '@/constants/colors';

interface ArtigoModalProps {
  artigo: Artigo | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArtigoModal({ artigo, isOpen, onClose }: ArtigoModalProps) {
  // Prevenir scroll do body quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!artigo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/80 z-[10000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[10001] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div
                className="relative max-w-3xl w-full rounded-lg shadow-xl overflow-hidden"
                style={{ background: COLORS.white }}
              >
                {/* Botão fechar */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors hover:bg-black/10"
                  aria-label="Fechar"
                >
                  <X className="size-5" style={{ color: COLORS.navy }} />
                </button>

                {/* Imagem de capa (se existir) */}
                {artigo.imagemUrl && (
                  <div className="w-full h-64 md:h-96 overflow-hidden">
                    <img
                      src={artigo.imagemUrl}
                      alt={artigo.titulo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Conteúdo */}
                <div className="p-6 md:p-8">
                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-4" style={{ color: COLORS.gold }} />
                      <span className="text-sm font-light" style={{ color: COLORS.navy }}>
                        {artigo.data}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-4" style={{ color: COLORS.gold }} />
                      <span className="text-sm font-light" style={{ color: COLORS.navy }}>
                        {artigo.minutosLeitura} min de leitura
                      </span>
                    </div>
                  </div>

                  {/* Título */}
                  <h1
                    className="text-2xl md:text-4xl font-light tracking-wide mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.navy }}
                  >
                    {artigo.titulo}
                  </h1>

                  {/* Linha decorativa */}
                  <div className="w-12 h-px mb-6" style={{ background: COLORS.gold }} />

                  {/* Conteúdo do artigo (HTML) */}
                  <div
                    className="prose prose-lg max-w-none"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.navy }}
                    dangerouslySetInnerHTML={{ __html: artigo.conteudo }}
                  />

                  {/* Rodapé do modal */}
                  <div className="mt-8 pt-6 border-t" style={{ borderColor: COLORS.border }}>
                    <p className="text-xs text-center" style={{ color: COLORS.textMuted }}>
                      © {new Date().getFullYear()} OLC Advogados - Sociedade de Advogados, RL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}