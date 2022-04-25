// Package imports
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function FilterProvider ({ children }) {
  // States
  const [filters, setFilters] = useState({
    keywords: '',
    cities: [],
    salary: 0
  });

  return (
    <Context.Provider value={[filters, setFilters]}>
      {children}
    </Context.Provider>
  );
}

export function useFilterContext () {
  return useContext(Context);
}
