/**
 * ThemeProvider — configuração para o site institucional
 *
 * defaultTheme: 'light'  → O site carrega sempre em modo claro por defeito.
 * O utilizador pode alternar para dark mode através do ThemeToggle no Header.
 * A preferência é guardada em localStorage sob a chave 'theme'.
 */

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"        // ← Light mode por defeito
      enableSystem={false}        // ← Não seguir preferência do sistema
      disableTransitionOnChange   // ← Sem flash ao trocar de tema
      storageKey="theme"          // ← Chave no localStorage
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}