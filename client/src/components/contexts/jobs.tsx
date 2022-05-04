// Package imports
import React, { createContext, useContext, useState } from 'react';
import { Job } from '../helpers/interfaces';

interface Props {
  children: React.ReactNode
}

const Context = createContext<[Job[], Function]>([ [], ():void =>{} ]);

export const JobsProvider: React.FC<Props> = ({ children }) => {

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
