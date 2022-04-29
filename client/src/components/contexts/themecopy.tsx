// // Package imports
// import { createContext, useContext, useState, FC, PropsWithChildren } from 'react';

// interface IThemeContext {
//   darkMode: boolean;
//   toggleTheme?: () => void;
// }

// const defaultState = {
//   darkMode: true,
// };

// const Context = createContext<IThemeContext>(defaultState);

//  const ThemeProvider: FC = ({ children }: PropsWithChildren<unknown>) => {
//   // States
//   const [darkMode, toggleDarkMode] = useState(true);

//   // Because BlueprintJS' dark mode toggle sucks
//   const body = document.body;
//   body.className = `background ${darkMode ? 'bp4-dark dark' : 'bp4-body light'}`;

//   function toggleTheme() {
//     toggleDarkMode((mode) => !mode);
//   }

//   return <Context.Provider value={{darkMode, toggleTheme}}>{children}</Context.Provider>;
// };

// // export function useThemeContext() {
// //   return useContext(Context);
// // }
