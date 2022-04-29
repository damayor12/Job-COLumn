// Package imports
import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode
}

const Context = createContext<[Object[], Object]>([ [{}], ():void =>{} ]);

export const JobsProvider: React.FC<Props> = ({ children }) => {
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
