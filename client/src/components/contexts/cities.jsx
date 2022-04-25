// Package imports
import { createContext, useContext } from 'react';

// Local imports
import CITIES from '../helpers/cities.json';
const Context = createContext();

export function useCitiesContext () {
  return useContext(Context);
}

export function CitiesProvider ({ children }) {
  return (
    <Context.Provider value={CITIES}>
      {children}
    </Context.Provider>
  );
}
