import React, { createContext, useContext, useState } from 'react';
import { Job } from '../helpers/interfaces';

interface Props {
  children: React.ReactNode;
}
const Context = createContext<[Job[] , Function]>([[], (): void => {}]);

export const FilteredJobsProvider: React.FC<Props> = ({ children }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  return <Context.Provider value={[filteredJobs, setFilteredJobs]}>{children}</Context.Provider>;
};

export function useFilteredJobsContext() {
  return useContext(Context);
}
