import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { COLORS } from '@/constants/colors';

import logoSvg from '@/assets/logo.png';

const navLinks = [
  { name: 'Início',          path: '/'         },
  { name: 'Áreas de Prática',path: '/portfolio' },
  { name: 'A Firma',         path: '/about'     },
  { name: 'Contacto',        path: '/contact'   },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Header sempre com fundo branco e texto escuro (exceto links ativos)
  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm"
      style={{ borderColor: COLORS.gold, backgroundColor: COLORS.white }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo OLC Advogados (IMAGEM) ───────────────────────── */}
          <Link to="/" className="shrink-0" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src={logoSvg} 
              alt="OLC Advogados - Sociedade de Advogados, RL"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* ── Navegação Desktop ────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-300"
                  style={{ 
                    fontFamily: "'DM Mono', monospace",
                    color: isActive ? COLORS.gold : COLORS.navy,
                  }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px]"
                      style={{ background: COLORS.gold }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Mobile ───────────────────────────────────────────── */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="size-9" style={{ color: COLORS.navy }}>
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:w-80" style={{ backgroundColor: COLORS.white }}>
                <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: COLORS.gold }} />

                {/* Logo no menu mobile */}
                <div className="mt-6 mb-8">
                  <img src={logoSvg} alt="OLC Advogados"                   className="h-14 w-auto" />
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => {
                    const isActive = isActiveLink(link.path);
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-light tracking-widest uppercase text-lg transition-colors"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          color: isActive ? COLORS.gold : COLORS.navy,
                        }}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="absolute bottom-8 left-6 right-6 border-t pt-6" style={{ borderColor: COLORS.gold }}>
                  <p className="text-[9px] font-mono tracking-[0.2em] uppercase" style={{ color: COLORS.gold }}>
                    Luanda · Angola
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </motion.header>
  );
}