import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeMode } from '../types/portfolio';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ma_portfolio_theme') as ThemeMode;
      if (saved && ['dark-glass', 'light-glass', 'black-premium'].includes(saved)) {
        return saved;
      }
    }
    return 'dark-glass';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ma_portfolio_theme', newTheme);
      applyThemeClass(newTheme);
    }
  };

  const toggleTheme = () => {
    const cycle: ThemeMode[] = ['dark-glass', 'light-glass', 'black-premium'];
    const nextIdx = (cycle.indexOf(theme) + 1) % cycle.length;
    setTheme(cycle[nextIdx]);
  };

  const applyThemeClass = (currentTheme: ThemeMode) => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light-glass', 'black-premium');

    if (currentTheme === 'light-glass') {
      root.classList.add('light-glass');
    } else if (currentTheme === 'black-premium') {
      root.classList.add('dark', 'black-premium');
    } else {
      root.classList.add('dark');
    }
  };

  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
