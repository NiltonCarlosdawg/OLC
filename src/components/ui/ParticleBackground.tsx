import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface ParticleBackgroundProps {
  variant?: 'home' | 'portfolio' | 'about' | 'contact';
  intensity?: 'subtle' | 'medium' | 'strong';
  /**
   * fullPage: true  → canvas cobre toda a página (position: fixed, zIndex 0)
   * fullPage: false → canvas cobre apenas o contentor pai (position: absolute)
   */
  fullPage?: boolean;
}

// ── Paletas ───────────────────────────────────────────────────────────────
// Light: cores escuras e saturadas sobre fundo branco
// Dark:  cores claras e brilhantes sobre fundo escuro

const PALETTES = {
  light: {
    home:      ['#1e293b', '#334155', '#475569', '#0f172a'],
    portfolio: ['#4f46e5', '#7c3aed', '#6d28d9', '#4338ca'],
    about:     ['#0369a1', '#0284c7', '#0891b2', '#0e7490'],
    contact:   ['#047857', '#059669', '#0d9488', '#0f766e'],
  },
  dark: {
    home:      ['#f8fafc', '#e2e8f0', '#94a3b8', '#cbd5e1'],
    portfolio: ['#818cf8', '#a78bfa', '#c4b5fd', '#6366f1'],
    about:     ['#22d3ee', '#38bdf8', '#7dd3fc', '#0ea5e9'],
    contact:   ['#34d399', '#6ee7b7', '#a7f3d0', '#10b981'],
  },
};

// ── Intensidade ───────────────────────────────────────────────────────────

const INTENSITY = {
  subtle: { count: 60,  speed: [0.25, 0.55] as [number,number], lineWidth: 1.0 },
  medium: { count: 90,  speed: [0.40, 0.80] as [number,number], lineWidth: 1.3 },
  strong: { count: 130, speed: [0.60, 1.20] as [number,number], lineWidth: 1.6 },
};

const FADE = { light: 0.12, dark: 0.05 };

// ─────────────────────────────────────────────────────────────────────────

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  variant   = 'home',
  intensity = 'medium',
  fullPage  = false,
}) => {
  const canvasRef      = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;

    // fullPage → mede o viewport | normal → mede o contentor pai
    const getSize = () => fullPage
      ? { w: window.innerWidth, h: document.documentElement.scrollHeight }
      : { w: canvas.parentElement!.offsetWidth, h: canvas.parentElement!.offsetHeight };

    let { w, h } = getSize();
    canvas.width  = w;
    canvas.height = h;

    const isDark     = resolvedTheme === 'dark';
    const theme      = isDark ? 'dark' : 'light';
    const palette    = PALETTES[theme][variant];
    const cfg        = INTENSITY[intensity];
    const fadeAlpha  = FADE[theme];
    const fadeFill   = isDark
      ? `rgba(0,0,0,${fadeAlpha})`
      : `rgba(255,255,255,${fadeAlpha})`;

    let zoomX      = 0.005;
    let zoomY      = 0.005;
    let complexity = 2;

    class Particle {
      x = 0; y = 0;
      lastX = 0; lastY = 0;
      vx = 0; vy = 0;
      color = '';
      speed = 0;

      constructor() {
        this.reset();
        this.color = palette[Math.floor(Math.random() * palette.length)];
      }

      reset() {
        this.x     = Math.random() * w;
        this.y     = Math.random() * h;
        this.lastX = this.x;
        this.lastY = this.y;
        this.vx    = 0;
        this.vy    = 0;
        this.speed = Math.random() * (cfg.speed[1] - cfg.speed[0]) + cfg.speed[0];
      }

      update() {
        this.lastX = this.x;
        this.lastY = this.y;

        const angle =
          (Math.cos(this.x * zoomX) + Math.sin(this.y * zoomY)) *
          Math.PI * complexity;

        this.vx = Math.cos(angle) * this.speed;
        this.vy = Math.sin(angle) * this.speed;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) {
          this.reset();
        }
      }

      draw() {
        ctx!.beginPath();
        ctx!.strokeStyle = this.color;
        ctx!.lineWidth   = cfg.lineWidth;
        ctx!.globalAlpha = isDark ? 0.75 : 0.55;
        ctx!.moveTo(this.lastX, this.lastY);
        ctx!.lineTo(this.x, this.y);
        ctx!.stroke();
        ctx!.globalAlpha = 1;
      }
    }

    let particles: Particle[] = [];

    const init = () => {
      const size = getSize();
      w = canvas.width  = size.w;
      h = canvas.height = size.h;
      ctx.clearRect(0, 0, w, h);
      particles = Array.from({ length: cfg.count }, () => new Particle());
    };

    const mutatePattern = () => {
      zoomX      = Math.random() * 0.01 + 0.001;
      zoomY      = Math.random() * 0.01 + 0.001;
      complexity = Math.random() * 4    + 1;
    };

    const animate = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = fadeFill;
      ctx.fillRect(0, 0, w, h);

      for (const p of particles) { p.update(); p.draw(); }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();

    const mutationInterval = setInterval(mutatePattern, 60_000);

    // fullPage → ouve o window resize | normal → ouve o ResizeObserver do pai
    let resizeObserver: ResizeObserver | null = null;
    if (fullPage) {
      window.addEventListener('resize', handleResize);
    } else {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(canvas.parentElement!);
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(mutationInterval);
      if (fullPage) {
        window.removeEventListener('resize', handleResize);
      } else {
        resizeObserver?.disconnect();
      }
    };
  }, [variant, intensity, resolvedTheme, fullPage]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position : fullPage ? 'fixed' : 'absolute',
        inset    : 0,
        width    : '100%',
        height   : fullPage ? '100%' : '100%',
        zIndex   : 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
