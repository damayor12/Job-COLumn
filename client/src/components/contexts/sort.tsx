// Package imports
import { createContext, useContext, useState } from 'react';

interface Sort {
  category: string;
  order: string;
}

interface Props {
  children: React.ReactNode;
}

const defaultValues = {
  category: 'Job Title',
  order: 'asc',
};

const Context = createContext<[Sort, Function]>([defaultValues, (): void => {}]);

export const SortProvider: React.FC<Props> = ({ children }) => {
  // States
  const [sort, setSort] = useState({
    category: 'Job Title',
    order: 'asc',
  });

  return <Context.Provider value={[sort, setSort]}>{children}</Context.Provider>;
};

export function useSortContext() {
  return useContext(Context);
}
