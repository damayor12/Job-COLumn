import React, { createContext, useContext, useState } from 'react';
import {  User } from '../helpers/interfaces';

import { Props, allContexts, allContextProps } from './defaults-types';

const Context = createContext<allContexts>(allContextProps);

export const GeneralProvider: React.FC<Props> = ({ children }) => {
  // States
  const [filters, setFilters] = useState({
    keywords: '',
    cities: [],
    salary: 0,
  });
  const [filteredJobs, setFilteredJobs] = useState([]);

  //General state
  const [jobs, setJobs] = useState([]);
  const [sort, setSort] = useState({
    category: 'Job Title',
    order: 'asc',
  });
  const [darkMode, toggleDarkMode] = useState<boolean>(true);

  const [user, setUser] = useState<User>({
    location: 'London',
    salary: 20_000,
  });

  //Logic
  const body: HTMLElement = document.body;
  body.className = `background ${darkMode ? 'bp4-dark dark' : 'bp4-body light'}`;

  function toggleTheme(): void {
    toggleDarkMode((mode) => !mode);
  }

  const valuesObj = {
    filter: [filters, setFilters],
    filteredjobs: [filteredJobs, setFilteredJobs],
    jobs: [jobs, setJobs],
    sort: [sort, setSort],
    theme: [darkMode, toggleTheme],
    user: [user, setUser],
  };

  return <Context.Provider value={valuesObj}>{children}</Context.Provider>;
};

export function useGeneralContext() {
  return useContext(Context);
}
