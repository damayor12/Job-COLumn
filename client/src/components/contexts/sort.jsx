// Package imports
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function SortProvider ({ children }) {
  // States
  const [sort, setSort] = useState({
    category: 'Job Title',
    order: 'asc'
  });

  return (
    <Context.Provider value={[sort, setSort]}>
      {children}
    </Context.Provider>
  );
}

export function useSortContext () {
  return useContext(Context);
}
