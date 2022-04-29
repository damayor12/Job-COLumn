// Package imports
import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode
}

interface Filter {
  keywords: string;
  cities: string[];
  salary: number;
}
const Context = createContext<[Filter, Object]>([{
  keywords: '',
  cities: [],
  salary: 0
}, ():void => {}]);

export const FilterProvider: React.FC<Props> = ({ children }) => {
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
