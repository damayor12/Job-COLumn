// Package imports
import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}
const Context = createContext<[any[], Object]>([[], (): void => {}]);

export const FilteredJobsProvider: React.FC<Props> = ({ children }) => {
  // States
  const [filteredJobs, setFilteredJobs] = useState([]);

  return <Context.Provider value={[filteredJobs, setFilteredJobs]}>{children}</Context.Provider>;
};

export function useFilteredJobsContext() {
  return useContext(Context);
}
