// Package imports
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function FilteredJobsProvider ({ children }) {
  // States
  const [filteredJobs, setFilteredJobs] = useState([]);

  return (
    <Context.Provider value={[filteredJobs, setFilteredJobs]}>
      {children}
    </Context.Provider>
  );
}

export function useFilteredJobsContext () {
  return useContext(Context);
}
