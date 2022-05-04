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

// {
//   filter: [filters, setFilters],
//   jobs:[filters, setFilters],
//   theme:[filters, setFilters],
// }

const Context = createContext<[Filter, Function]>([defaultUser, (): void => {}]);

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
