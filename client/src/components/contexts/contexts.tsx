import React, { createContext, useContext, useState } from 'react';
import { Job, Filter, Sort, User } from '../helpers/interfaces';

interface Props {
  children: React.ReactNode;
}

const defaultFilter = {
  keywords: '',
  cities: [],
  salary: 0,
};

const defaultSortValues = {
  category: 'Job Title',
  order: 'asc',
};

const defaultUser: User = {
  location: 'London',
  salary: 20_000,
};

//create General Context - Interfaces
interface allContexts {
  filter: any[];
  filteredjobs: any[];
  jobs: any[];
  sort: any[];
  theme: any[];
  user: any[];
}

//create General Context - Init object
const allContextProps = {
  filter: [defaultFilter, (): void => {}],
  filteredjobs: [[], (): void => {}],
  jobs: [[], (): void => {}],
  sort: [defaultSortValues, (): void => {}],
  theme: [true, () => {}],
  user: [defaultUser, (): void => {}],
};

const Context = createContext<allContexts>(allContextProps);

export const GeneralProvider: React.FC<Props> = ({ children }) => {
  // States
  const [filters, setFilters] = useState({
    keywords: '',
    cities: [],
    salary: 0,
  });
  const [filteredJobs, setFilteredJobs] = useState([]);

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
