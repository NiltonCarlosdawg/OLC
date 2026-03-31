import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';

// ── Paleta ibm.tsx ───────────────────────────────────────────────
const GOLD = '#C9A84C';
const NAVY = '#0A0F1E';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Página não encontrada"
        description="A página que procura não existe. Volte à página inicial da Sociedade de Advogados."
      />

      {/* Gold hairline */}
      <div className="fixed top-0 inset-x-0 z-50 h-[1.5px]" style={{ background: GOLD }} />

      {/* Glow + linha editorial decorativos */}
      <div
        className="fixed top-0 right-0 w-[45vw] h-[45vw] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top right, ${GOLD}07 0%, transparent 65%)`, zIndex: 0 }}
      />
      <div
        className="fixed left-[9vw] top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}18, transparent)`, zIndex: 0 }}
      />

      {/* Estrutura original: min-h-[calc(100vh-8rem)] centrado */}
      <main
        className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center px-6 bg-[#FAFAF8] dark:bg-[#111110]"
        style={{ zIndex: 1 }}
      >
        <motion.div
          className="max-w-2xl w-full text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 — estrutura original, cor ajustada */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1
              className="font-extralight tracking-wider leading-none"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(7rem, 20vw, 12rem)',
                color: 'rgba(17,17,16,0.06)',
              }}
            >
              404
            </h1>
          </motion.div>

          {/* Conteúdo — estrutura original -mt-8 */}
          <div className="space-y-4 -mt-8">
            <motion.p
              className="font-mono text-[10px] tracking-[0.22em] uppercase"
              style={{ color: GOLD, fontFamily: "'DM Mono', monospace" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              Sociedade de Advogados
            </motion.p>

            <motion.h2
              className="font-light tracking-wide text-[#111110] dark:text-[#FAFAF8]"
              style={{ fontFamily: "'Cormorant Garamond', serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Página não encontrada
            </motion.h2>

            <motion.p
              className="font-light leading-relaxed max-w-md mx-auto text-[#777]"
              style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8', fontSize: '15px' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              A página que procura não existe ou foi movida. Navegue pelas nossas áreas de prática ou contacte-nos directamente.
            </motion.p>
          </div>

          {/* CTAs — estrutura original, estilo ibm */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {/* Primário — ouro */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase px-6 py-3 transition-all hover:opacity-90 group"
              style={{ background: GOLD, color: NAVY, fontFamily: "'DM Mono', monospace" }}
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Página Inicial
            </Link>

            {/* Secundário — outline */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-[#ddd] dark:border-[#2a2a2a] text-[#111110] dark:text-[#FAFAF8] text-sm font-mono tracking-widest uppercase px-6 py-3 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors group"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Contactar a Firma
            </Link>
          </motion.div>

          {/* Divisor decorativo — estrutura original */}
          <motion.div
            className="pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="h-px w-24 mx-auto" style={{ background: '#e8e8e6' }} />
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default NotFound;