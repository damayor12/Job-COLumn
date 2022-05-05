import React from 'react';
import { arrOfJobs } from '../helpers/sidebar/mockDataFilterJobs';
import { useGeneralContext } from './contexts';

export const TestComponent : React.FC = () => {
  const  {
    filter: [filters, setFilters],
    filteredjobs: [filteredJobs, setFilteredJobs],
    jobs: [jobs, setJobs],
    sort: [sort, setSort],
    theme: [darkMode, toggleTheme],
    user: [user, setUser],
  } = useGeneralContext();

  function setTheFilter(): void {
    setFilters({...filters, keywords: 'filter'});
  }

  function setTheFilteredJobs(): void {
    setFilteredJobs(arrOfJobs);
  }

  function setTheJobs(): void {
    setJobs(arrOfJobs);
  }

  function setTheSort(): void {
    setSort({ category: 'Location', order: 'desc'});
  }

  function setDarkMode(): void {
    toggleTheme(false);
  }

  function setTheUser(): void {
    setUser({ location: 'Bristol', salary: 40_000 })
  }

  return (<>
    <div data-testid="filters-value">{filters.keywords}</div>
    <div data-testid="users-value">{user.location}</div>
    <div data-testid="users-salary">{user.salary}</div>
    <div data-testid="filteredJobs">{filteredJobs.length > 0 ? filteredJobs[0].employerName : filteredJobs[0]}</div>
    <div data-testid="jobs">{jobs.length > 0 ? jobs[0].employerName : jobs[0]}</div>
    <div data-testid="sort-category">{sort.category}</div>
    <div data-testid="sort-order">{sort.order}</div>
    <div data-testid="darkMode">{darkMode ? 'bp4-dark dark' : 'bp4-body light'}</div>

    <button onClick={setTheFilter}>Set Filter</button>
    <button onClick={setTheFilteredJobs}>Set FilteredJobs</button>
    <button onClick={setTheJobs}>Set setJobs</button>
    <button onClick={setTheSort}>Set setSort</button>
    <button onClick={setDarkMode}>Set DarkMode</button>
    <button onClick={setTheUser}>SetUser</button>

  </>
  );
}