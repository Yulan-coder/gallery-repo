'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function applyThemeToDOM(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check localStorage first, then system preference
    const storedTheme = localStorage.getItem('theme');
    const isValidTheme = storedTheme === 'light' || storedTheme === 'dark';
    
    if (isValidTheme) {
      setTheme(storedTheme);
      applyThemeToDOM(storedTheme);
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      setTheme(systemTheme);
      applyThemeToDOM(systemTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyThemeToDOM(newTheme);
  };

  return { theme, toggleTheme, mounted };
}
