import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Logo } from '@/components/ui/Logo';
import { COLORS } from '@/constants/colors';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Página não encontrada | OLO Advogados"
        description="A página que procura não existe. Volte à página inicial da Sociedade de Advogados."
      />

      {/* Gold hairline */}
      <div className="fixed top-0 inset-x-0 z-50 h-[1.5px]" style={{ background: COLORS.gold }} />

      {/* Glow + linha editorial */}
      <div
        className="fixed top-0 right-0 w-[45vw] h-[45vw] pointer-events-none"
        style={{ background: COLORS.goldGlow, zIndex: 0 }}
      />
      <div
        className="fixed left-[9vw] top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ background: `linear-gradient(to bottom, transparent, ${COLORS.gold}18, transparent)`, zIndex: 0 }}
      />

      <main
        className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center px-6"
        style={{ background: COLORS.lightBg, zIndex: 1 }}
      >
        <motion.div
          className="max-w-2xl w-full text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Logo variant="full" showTagline />
          </motion.div>

          {/* 404 */}
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

          {/* Conteúdo */}
          <div className="space-y-4 -mt-8">
            <motion.p
              className="font-mono text-[10px] tracking-[0.22em] uppercase"
              style={{ color: COLORS.gold, fontFamily: "'DM Mono', monospace" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              OLO Advogados · Sociedade de Advogados, RL
            </motion.p>

            <motion.h2
              className="font-light tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: COLORS.textDark }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Página não encontrada
            </motion.h2>

            <motion.p
              className="font-light leading-relaxed max-w-md mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8', fontSize: '15px', color: COLORS.textMuted }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              A página que procura não existe ou foi movida. Navegue pelas nossas áreas de prática ou contacte-nos directamente.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase px-6 py-3 transition-all hover:opacity-90 group"
              style={{ background: COLORS.gold, color: COLORS.navy, fontFamily: "'DM Mono', monospace" }}
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Página Inicial
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border text-sm font-mono tracking-widest uppercase px-6 py-3 transition-colors group"
              style={{ borderColor: COLORS.border, color: COLORS.textDark, fontFamily: "'DM Mono', monospace" }}
            >
              Contactar a Firma
            </Link>
          </motion.div>

          {/* Divisor decorativo */}
          <motion.div
            className="pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="h-px w-24 mx-auto" style={{ background: COLORS.border }} />
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default NotFound;