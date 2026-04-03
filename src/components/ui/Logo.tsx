import { COLORS } from '@/constants/colors';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'horizontal';
  showTagline?: boolean;
}

export const Logo = ({ className = '', variant = 'full', showTagline = true }: LogoProps) => {
  if (variant === 'icon') {
    return (
      <div className={`flex flex-col items-start ${className}`}>
        <span 
          className="text-3xl font-light tracking-wider"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.gold }}
        >
          OLC
        </span>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="flex flex-col">
          <span 
            className="text-xl font-light tracking-wider leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.gold }}
          >
            OLC
          </span>
          <span 
            className="text-[8px] font-mono tracking-[0.2em] uppercase"
            style={{ color: COLORS.textMuted, fontFamily: "'DM Mono', monospace" }}
          >
            ADVOGADOS
          </span>
        </div>
        {showTagline && (
          <>
            <div className="w-px h-6" style={{ background: COLORS.border }} />
            <span 
              className="text-[9px] font-mono tracking-[0.15em] uppercase"
              style={{ color: COLORS.textMuted, fontFamily: "'DM Mono', monospace" }}
            >
              Sociedade de Advogados, RL
            </span>
          </>
        )}
      </div>
    );
  }

  // Variant 'full' (padrão)
  return (
    <div className={`text-center ${className}`}>
      <div className="flex flex-col items-center">
        <span 
          className="text-5xl md:text-6xl font-light tracking-wider leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.gold }}
        >
          OLC
        </span>
        <span 
          className="text-[10px] font-mono tracking-[0.25em] uppercase mt-1"
          style={{ color: COLORS.textMuted, fontFamily: "'DM Mono', monospace", letterSpacing: '0.2em' }}
        >
          ADVOGADOS
        </span>
        {showTagline && (
          <>
            <div className="w-8 h-px my-2" style={{ background: COLORS.gold }} />
            <span 
              className="text-[9px] font-mono tracking-[0.15em] uppercase"
              style={{ color: COLORS.textMutedLight, fontFamily: "'DM Mono', monospace" }}
            >
              Sociedade de Advogados, RL
            </span>
          </>
        )}
      </div>
    </div>
  );
};