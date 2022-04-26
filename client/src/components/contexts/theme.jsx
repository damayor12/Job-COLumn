// Package imports
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function ThemeProvider ({ children }) {
  // States
  const [darkMode, toggleDarkMode] = useState(true);

  // Because BlueprintJS' dark mode toggle sucks
  const body = document.body;
  body.className = `background ${darkMode ? 'bp4-dark dark' : 'bp4-body light'}`

  function toggleTheme () {
    toggleDarkMode(mode => !mode);
  }

  return (
    <Context.Provider value={[darkMode, toggleTheme]}>
      {children}
    </Context.Provider>
  );
}

export function useThemeContext () {
  return useContext(Context);
}
