// Package imports
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function JobsProvider ({ children }) {
  // States
  const [jobs, setJobs] = useState([]);

  return (
    <Context.Provider value={[jobs, setJobs]}>
      {children}
    </Context.Provider>
  );
}

export function useJobsContext () {
  return useContext(Context);
}
