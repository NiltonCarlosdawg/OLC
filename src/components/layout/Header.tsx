import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { photographerInfo } from '@/data/photographer';
import { cn } from '@/lib/utils';

// ── Paleta institucional ─────────────────────────────────────────
const GOLD = '#C9A84C';
const NAVY = '#0A0F1E';

const navLinks = [
  { name: 'Início',          path: '/'         },
  { name: 'Áreas de Prática',path: '/portfolio' },
  { name: 'A Firma',         path: '/about'     },
  { name: 'Contacto',        path: '/contact'   },
];

export function Header() {
  const location       = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Transparente apenas na homepage antes do scroll
  const isHero = location.pathname === '/' && !isScrolled;

  // Cores adaptativas: hero → sempre branco | sólido → segue o tema
  const linkColor    = isHero ? 'text-white hover:text-white/70'   : 'text-foreground hover:text-muted-foreground';
  const logoColor    = isHero ? 'text-white hover:text-white/70'   : 'text-foreground hover:text-muted-foreground';
  const menuBtnColor = isHero ? 'text-white hover:bg-white/10'     : 'text-foreground';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isHero
          ? 'bg-transparent border-transparent'
          : 'bg-white/95 dark:bg-[#111110]/90 backdrop-blur-lg border-b border-[#e8e8e6] dark:border-[#1e1e1c] shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo / Nome da Firma ─────────────────────────────── */}
          <Link
            to="/"
            className={cn(
              'font-light tracking-widest transition-colors duration-300',
              logoColor
            )}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', letterSpacing: '0.12em' }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {photographerInfo.name.toUpperCase()}
            </motion.span>
          </Link>

          {/* ── Navegação Desktop ────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'relative font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-300',
                      isActive
                        ? (isHero ? 'text-white' : 'text-[#111110] dark:text-[#FAFAF8]')
                        : linkColor
                    )}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {link.name}

                    {/* Indicador de rota activa — dourado */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-[1.5px]"
                        style={{ background: GOLD }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>
          </nav>

          {/* ── Mobile ───────────────────────────────────────────── */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn('size-9', menuBtnColor)}
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:w-80 bg-white dark:bg-[#111110]">
                {/* Linha dourada no topo do menu mobile */}
                <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: GOLD }} />

                <nav className="flex flex-col gap-8 mt-14">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'font-light tracking-widest uppercase transition-colors duration-200',
                          isActive
                            ? 'text-[#111110] dark:text-[#FAFAF8]'
                            : 'text-[#777] hover:text-[#111110] dark:hover:text-[#FAFAF8]'
                        )}
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 'clamp(1.4rem, 5vw, 1.8rem)',
                        }}
                      >
                        {isActive && (
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full mr-3 mb-0.5"
                            style={{ background: GOLD }}
                          />
                        )}
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                {/* Rodapé do menu mobile */}
                <div className="absolute bottom-8 left-6 right-6 space-y-2 border-t border-[#e8e8e6] dark:border-[#1e1e1c] pt-6">
                  <p
                    className="text-[9px] font-mono tracking-[0.2em] uppercase"
                    style={{ color: GOLD, fontFamily: "'DM Mono', monospace" }}
                  >
                    Luanda · Angola
                  </p>
                  <a
                    href={`mailto:${photographerInfo.email}`}
                    className="block text-xs font-light text-[#777] hover:text-[#111110] dark:hover:text-[#FAFAF8] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {photographerInfo.email}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </motion.header>
  );
}