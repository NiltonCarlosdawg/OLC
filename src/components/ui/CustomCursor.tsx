'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle { id: number; x: number; y: number; vx: number; vy: number; life: number; size: number; }
interface Ripple   { id: number; x: number; y: number; }

let _pid = 0;
let _rid = 0;

// ─── Gavel SVG ────────────────────────────────────────────────────────────────
function GavelIcon({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', overflow: 'visible' }}
    >
      <rect x="17" y="12" width="6" height="26" rx="1.5" stroke="white" strokeWidth="1" fill="none" transform="rotate(45 18 13)" />
      <rect x="2" y="2" width="22" height="11" rx="2" stroke="white" strokeWidth="1" fill="none" />
      <line x1="2" y1="7.5" x2="24" y2="7.5" stroke="white" strokeWidth="0.5" strokeOpacity="0.55" />
      <line x1="7" y1="2" x2="7" y2="13" stroke="white" strokeWidth="0.5" strokeOpacity="0.45" />
      <circle cx="18" cy="13" r="1" fill="white" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export function CustomCursor() {
  const [isHovering,    setIsHovering]    = useState(false);
  const [isVisible,     setIsVisible]     = useState(false);
  const [isClicking,    setIsClicking]    = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [particles,     setParticles]     = useState<Particle[]>([]);
  const [ripples,       setRipples]       = useState<Ripple[]>([]);

  // 🔧 ALTERAÇÃO AQUI: Forçar cursor padrão no body quando o componente montar
  useEffect(() => {
    // Forçar o cursor padrão no body e html
    document.body.style.cursor = 'default';
    document.documentElement.style.cursor = 'default';
    
    // Adicionar um estilo global temporário
    const style = document.createElement('style');
    style.id = 'force-default-cursor';
    style.textContent = `
      * {
        cursor: default !important;
      }
      a, button, [role="button"], input, textarea, select, label {
        cursor: pointer !important;
      }
      input, textarea {
        cursor: text !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      // Limpar quando o componente desmontar (opcional)
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
      const existingStyle = document.getElementById('force-default-cursor');
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Spring-delayed position — same config as original
  const springCfg = { damping: 25, stiffness: 300, mass: 0.5 };
  const gavelX = useSpring(cursorX, springCfg);
  const gavelY = useSpring(cursorY, springCfg);

  // Rotation spring
  const rotateVal    = useMotionValue(0);
  const rotateSpring = useSpring(rotateVal, { damping: 10, stiffness: 460, mass: 0.28 });

  // Scale spring
  const scaleVal    = useMotionValue(1);
  const scaleSpring = useSpring(scaleVal, { damping: 20, stiffness: 280 });

  const rafRef = useRef<number>();

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Particle loop
  useEffect(() => {
    const tick = () => {
      setParticles(prev =>
        prev
          .map(p => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, vx: p.vx * 0.90, vy: p.vy * 0.90 + 0.2, life: p.life - 0.048 }))
          .filter(p => p.life > 0)
      );
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current!);
  }, []);

  const spawnParticles = useCallback((x: number, y: number) => {
    const burst: Particle[] = Array.from({ length: 10 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 4;
      return { id: ++_pid, x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 2, life: 1, size: 1 + Math.random() * 2 };
    });
    setParticles(prev => [...prev, ...burst]);
  }, []);

  const spawnRipple = useCallback((x: number, y: number) => {
    const id = ++_rid;
    setRipples(prev => [...prev, { id, x, y }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY); setIsVisible(true); };
    const onLeave  = () => setIsVisible(false);
    const onEnter  = () => setIsVisible(true);

    const onDown = (e: MouseEvent) => {
      setIsClicking(true);
      rotateVal.set(-40);
      animate(scaleVal, 0.78, { duration: 0.08 });
      spawnParticles(e.clientX, e.clientY);
      spawnRipple(e.clientX, e.clientY);
    };

    const onUp = () => {
      setIsClicking(false);
      animate(rotateVal, 0, { type: 'spring', damping: 8, stiffness: 300 });
      animate(scaleVal, isHovering ? 1.5 : 1, { type: 'spring', damping: 14, stiffness: 260 });
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsHovering(!!t.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]'));
    };

    window.addEventListener('mousemove',  onMove,  { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    window.addEventListener('mouseover',  onOver,  { passive: true });

    return () => {
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      window.removeEventListener('mouseover',  onOver);
    };
  }, [isTouchDevice, cursorX, cursorY, rotateVal, scaleVal, isHovering, spawnParticles, spawnRipple]);

  useEffect(() => {
    if (!isClicking) {
      animate(scaleVal, isHovering ? 1.5 : 1, { type: 'spring', damping: 18, stiffness: 280 });
    }
  }, [isHovering, isClicking, scaleVal]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* ── Ripple rings — white border, mix-blend-difference ────────────── */}
      {ripples.map(r => (
        <motion.div
          key={r.id}
          className="fixed top-0 left-0 pointer-events-none z-[9994] mix-blend-difference"
          style={{ x: r.x, y: r.y, translateX: '-50%', translateY: '-50%', position: 'fixed' }}
        >
          <motion.div
            style={{ borderRadius: '50%', border: '1px solid white', position: 'absolute', top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
            initial={{ width: 4, height: 4, opacity: 0.9 }}
            animate={{ width: 110, height: 110, opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.2, 0.8, 0.4, 1] }}
          />
          <motion.div
            style={{ borderRadius: '50%', border: '1px solid white', position: 'absolute', top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
            initial={{ width: 4, height: 4, opacity: 0.5 }}
            animate={{ width: 64, height: 64, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.4, 1], delay: 0.07 }}
          />
        </motion.div>
      ))}

      {/* ── Impact particles — white dots, mix-blend-difference ───────────── */}
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed top-0 left-0 pointer-events-none z-[9995] mix-blend-difference rounded-full bg-white"
          style={{
            transform: `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`,
            width: p.size,
            height: p.size,
            opacity: Math.pow(Math.max(0, p.life), 2),
          }}
        />
      ))}

      {/*
        ── Gavel — replaces the original center dot.
        Spring-lagged (same spring as ring, so they move together).
        Pivot point = junction of head and handle at SVG coord (18,13).
        As % of 44px icon: x=18/44=40.9%, y=13/44=29.5%.
        Translate so that pivot lands on the spring position, then rotate around it.
      */}
     
    </>
  );
}