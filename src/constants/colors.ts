/**
 * Paleta de cores institucional
 * Baseada no logotipo OLO ADVOGADOS
 */

export const COLORS = {
  // Cores principais do logotipo
  navy: '#0A0F1E',      // Dark blue
  gold: '#C9A84C',      // Golden
  white: '#FAFAF8',     // Off-white
  
  /*// Variações e suporte
  whitePure: '#FFFFFF',
  darkBg: '#111110',
  lightBg: '#FAFAF8',
  
  // Bordas e divisores
  border: '#e8e8e6',
  borderDark: '#1e1e1c',
  
  // Textos
  textDark: '#111110',
  textLight: '#FAFAF8',
  textMuted: '#777',
  textMutedLight: 'rgba(255,255,255,0.5)',
  textMutedGold: 'rgba(201,168,76,0.8)',
  
  // Gradientes e overlays
  goldTransparent: 'rgba(201,168,76,0.1)',
  goldGlow: 'radial-gradient(ellipse at top right, rgba(201,168,76,0.12) 0%, transparent 65%)',
  */
} as const;

export type ColorKey = keyof typeof COLORS;