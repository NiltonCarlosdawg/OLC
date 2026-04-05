import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COLORS } from '@/constants/colors';

import logoSvg from '@/assets/logo.png';

const navLinks = [
  { name: 'Início',          path: '/'         },
  { name: 'Áreas de Prática',path: '/portfolio' },
  { name: 'A Firma',         path: '/about'     },
  { name: 'Contacto',        path: '/contact'   },
];

const areasLinks = [
  { name: 'Direito Empresarial',       path: '/portfolio' },
  { name: 'Propriedade Intelectual',   path: '/portfolio' },
  { name: 'Direito Societário',        path: '/portfolio' },
  { name: 'Contencioso e Arbitragem',  path: '/portfolio' },
  { name: 'Direito Internacional',     path: '/portfolio' },
  { name: 'Assessoria Estratégica',    path: '/portfolio' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: COLORS.navy, color: COLORS.white }}>

      {/* Linha dourada no topo */}
      <div className="h-[1.5px] w-full" style={{ background: COLORS.gold }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Coluna 1 — Logo */}
          <div className="space-y-4">
            <img src={logoSvg} alt="OLC Advogados" className="h-20 w-auto" />
            <p className="text-sm font-light leading-relaxed" style={{ color: `${COLORS.white}cc` }}>
              Assessoria jurídica especializada ao serviço das empresas e particulares em Angola.
            </p>
            <div className="inline-flex items-center gap-2 text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 border" style={{ borderColor: COLORS.gold, color: COLORS.gold }}>
              <span className="w-1 h-1 rounded-full" style={{ background: COLORS.gold }} />
              Membro da Ordem dos Advogados de Angola
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div className="space-y-4">
            <p className="text-[9px] tracking-[0.22em] uppercase" style={{ color: COLORS.gold }}>Navegação</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm font-light transition-colors hover:text-gold" style={{ color: `${COLORS.white}cc` }}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Áreas de Prática */}
          <div className="space-y-4">
            <p className="text-[9px] tracking-[0.22em] uppercase" style={{ color: COLORS.gold }}>Áreas de Prática</p>
            <nav className="flex flex-col gap-3">
              {areasLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-sm font-light transition-colors hover:text-gold" style={{ color: `${COLORS.white}cc` }}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 4 — Contactos */}
          <div className="space-y-4">
            <p className="text-[9px] tracking-[0.22em] uppercase" style={{ color: COLORS.gold }}>Contactos</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:geral@olcadvogados.ao" className="flex items-center gap-3 text-sm" style={{ color: `${COLORS.white}cc` }}>
                <Mail className="size-4" style={{ color: COLORS.gold }} />
                geral@olcadvogados.ao
              </a>
              <a href="tel:+244923481427" className="flex items-center gap-3 text-sm" style={{ color: `${COLORS.white}cc` }}>
                <Phone className="size-4" style={{ color: COLORS.gold }} />
                +244 923 481 472
              </a>
              <a href="tel:+244958087582" className="flex items-center gap-3 text-sm" style={{ color: `${COLORS.white}cc` }}>
                <Phone className="size-4" style={{ color: COLORS.gold }} />
                +244 958 087 582
              </a>
              <span className="flex items-center gap-3 text-sm" style={{ color: `${COLORS.white}cc` }}>
                <MapPin className="size-4" style={{ color: COLORS.gold }} />
                Luanda, Angola
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-6 px-6 lg:px-8" style={{ borderColor: `${COLORS.gold}30` }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: `${COLORS.white}80` }}>
            © {currentYear} OLC Advogados. Todos os direitos reservados.
          </p>
          <p className="text-[9px] tracking-[0.15em] uppercase" style={{ color: `${COLORS.white}50` }}>
            Lei n.º 11/15 · E.A. n.º 22/20
          </p>
        </div>
      </div>

    </footer>
  );
}