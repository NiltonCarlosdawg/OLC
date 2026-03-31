import { motion, useInView, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';

// ─── Variantes ────────────────────────────────────────────────────────────

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
};

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Tipos ────────────────────────────────────────────────────────────────

export type AnimationType = keyof typeof variants;

interface RevealProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

interface StaggerRevealProps {
  children: ReactNode;
  type?: AnimationType;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  once?: boolean;
}

// ─── Reveal ───────────────────────────────────────────────────────────────

/**
 * Reveal — animação de entrada activada por scroll
 *
 * @example
 * <Reveal type="fadeUp" delay={0.2}>
 *   <h1>Olá</h1>
 * </Reveal>
 */
export function Reveal({
  children,
  type = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' as any });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[type]}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerReveal ────────────────────────────────────────────────────────

/**
 * StaggerReveal — anima os filhos em sequência
 *
 * @example
 * <StaggerReveal type="fadeUp" className="grid grid-cols-3 gap-6">
 *   <Card /> <Card /> <Card />
 * </StaggerReveal>
 */
export function StaggerReveal({
  children,
  type = 'fadeUp',
  staggerDelay = 0.1,
  duration = 0.5,
  className,
  once = true,
}: StaggerRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px' as any });

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  const itemVariant: Variants = {
    hidden: variants[type].hidden as object,
    visible: {
      ...(variants[type].visible as object),
      transition: { duration, ease: EASE },
    },
  };

  const items = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={container}
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={itemVariant}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── TextReveal ───────────────────────────────────────────────────────────

/**
 * TextReveal — revela texto palavra a palavra com máscara
 *
 * @example
 * <TextReveal text="Nilton Costa" className="text-9xl font-extralight" />
 */
export function TextReveal({
  text,
  className,
  delay = 0,
  wordDelay = 0.06,
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' as any });

  const words = text.split(' ');

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em]" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: '105%', opacity: 0 }}
            animate={
              isInView
                ? { y: 0, opacity: 1 }
                : { y: '105%', opacity: 0 }
            }
            transition={{
              duration: 0.55,
              delay: delay + i * wordDelay,
              ease: EASE,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
