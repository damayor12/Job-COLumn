import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode
} 

const Context = createContext<[boolean, Object]>([true, ()=> {}]);

export const ThemeProvider: React.FC<Props>= ({ children }) => {
  // States
  const [darkMode, toggleDarkMode] = useState<boolean>(true);

  // Because BlueprintJS' dark mode toggle sucks
  const body: HTMLElement = document.body;
  body.className = `background ${darkMode ? 'bp4-dark dark' : 'bp4-body light'}`;

  function toggleTheme(): void {
    toggleDarkMode((mode) => !mode);
  }

  return <Context.Provider value={[ darkMode, toggleTheme ]}>{children}</Context.Provider>;
};

export function useThemeContext() {
  return useContext(Context);
}
