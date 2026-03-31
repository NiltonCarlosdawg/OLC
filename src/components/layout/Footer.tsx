import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { photographerInfo } from '@/data/photographer';

// ── Paleta institucional ─────────────────────────────────────────
const GOLD = '#C9A84C';

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
    <footer className="bg-[#111110] text-[#FAFAF8]">

      {/* Linha dourada no topo */}
      <div className="h-[1.5px] w-full" style={{ background: GOLD }} />

      {/* ── Corpo principal ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Coluna 1 — Identidade da Firma */}
          <div className="space-y-5 lg:col-span-1">
            <div>
              <p
                className="font-light tracking-widest uppercase text-[#FAFAF8] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', letterSpacing: '0.14em' }}
              >
                {photographerInfo.name.toUpperCase()}
              </p>
              <p
                className="text-[9px] tracking-[0.2em] uppercase"
                style={{ color: GOLD, fontFamily: "'DM Mono', monospace" }}
              >
                Sociedade de Advogados
              </p>
            </div>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'DM Sans', sans-serif", lineHeight: '1.8' }}
            >
              Assessoria jurídica especializada ao serviço das empresas e particulares em Angola, com rigor, ética e visão estratégica.
            </p>
            {/* Registo OAA */}
            <div
              className="inline-flex items-center gap-2 text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 border"
              style={{ borderColor: 'rgba(201,168,76,0.25)', color: 'rgba(255,255,255,0.35)', fontFamily: "'DM Mono', monospace" }}
            >
              <span className="w-1 h-1 rounded-full" style={{ background: GOLD }} />
              Membro da Ordem dos Advogados de Angola
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div className="space-y-5">
            <p
              className="text-[9px] tracking-[0.22em] uppercase"
              style={{ color: GOLD, fontFamily: "'DM Mono', monospace" }}
            >
              Navegação
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-light transition-colors duration-200 hover:text-[#C9A84C]"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Áreas de Prática */}
          <div className="space-y-5">
            <p
              className="text-[9px] tracking-[0.22em] uppercase"
              style={{ color: GOLD, fontFamily: "'DM Mono', monospace" }}
            >
              Áreas de Prática
            </p>
            <nav className="flex flex-col gap-3">
              {areasLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-light transition-colors duration-200 hover:text-[#C9A84C]"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 4 — Contactos */}
          <div className="space-y-5">
            <p
              className="text-[9px] tracking-[0.22em] uppercase"
              style={{ color: GOLD, fontFamily: "'DM Mono', monospace" }}
            >
              Contactos
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${photographerInfo.email}`}
                className="flex items-start gap-3 text-sm font-light transition-colors duration-200 hover:text-[#C9A84C] group"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif" }}
              >
                <Mail className="size-4 mt-0.5 shrink-0 group-hover:text-[#C9A84C] transition-colors" style={{ color: GOLD }} />
                {photographerInfo.email}
              </a>
              <a
                href="tel:+244900000000"
                className="flex items-start gap-3 text-sm font-light transition-colors duration-200 hover:text-[#C9A84C] group"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif" }}
              >
                <Phone className="size-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                +244 900 000 000
              </a>
              <span
                className="flex items-start gap-3 text-sm font-light"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif" }}
              >
                <MapPin className="size-4 mt-0.5 shrink-0" style={{ color: GOLD }} />
                {photographerInfo.location}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Rodapé inferior — copyright e legal ──────────────────── */}
      <div
        className="border-t max-w-7xl mx-auto px-6 lg:px-8 py-6"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-xs font-light"
            style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif" }}
          >
            © {currentYear} {photographerInfo.name}. Todos os direitos reservados. Luanda, Angola.
          </p>
          <p
            className="text-[9px] tracking-[0.15em] uppercase"
            style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'DM Mono', monospace" }}
          >
            Constituída nos termos da Lei n.º 11/15 · E.A. n.º 22/20
          </p>
        </div>
      </div>

    </footer>
  );
}