import React, { createContext, useContext, useState } from 'react';

interface Filter {
  keywords: string;
  cities: string[];
  salary: number;
}

interface Props {
  children: React.ReactNode;
}

const defaultUser: Filter = {
  keywords: '',
  cities: [],
  salary: 0,
};

const Context = createContext<[Filter, Object]>([defaultUser, (): void => {}]);

export const FilterProvider: React.FC<Props> = ({ children }) => {
  // States
  const [filters, setFilters] = useState({
    keywords: '',
    cities: [],
    salary: 0,
  });

  return <Context.Provider value={[filters, setFilters]}>{children}</Context.Provider>;
};

export function useFilterContext() {
  return useContext(Context);
}
