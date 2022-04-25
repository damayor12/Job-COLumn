// Package imports
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function ThemeProvider ({ children }) {
  // States
  const [darkMode, toggleDarkMode] = useState(true);

  // Because BlueprintJS' dark mode toggle sucks
  document.body.className = `${darkMode ? 'bp4-dark background-dark' : 'bp4-body background-light'}`
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
