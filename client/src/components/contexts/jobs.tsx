// Package imports
import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode
}
interface Job {
    jobId: number,
    employerId: number,
    employerName: string,
    employerProfileId: number,
    employerProfileName: string,
    jobTitle: string,
    locationName: string,
    minimumSalary: number,
    maximumSalary: number,
    currency: string,
    expirationDate: string,
    date: string,
    jobDescription: string,
    applications: number,
    jobUrl: string,
}


// React.Dispatch<User>
const Context = createContext<[Job[]|Object[], Function]>([ [{}], ():void =>{} ]);

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
