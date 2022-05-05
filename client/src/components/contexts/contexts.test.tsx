import React from 'react';
import { useGeneralContext, GeneralProvider } from './contexts';
import { render, screen } from '@testing-library/react';

describe('GeneralProvider', () => {

    const TestComponent : React.FC = () => {
      const  {
        filter: [filters, setFilters],
        filteredjobs: [filteredJobs, setFilteredJobs],
        jobs: [jobs, setJobs],
        sort: [sort, setSort],
        theme: [darkMode, toggleTheme],
        user: [user, setUser],
      } = useGeneralContext();

      return (<>
        <div data-testid="filters-value">{filters.keywords}</div>
        <div data-testid="users-value">{user.location}</div>
        <div data-testid="users-salary">{user.salary}</div>
        <div data-testid="filteredJobs">{filteredJobs[0]}</div>
        <div data-testid="jobs-category">{jobs[0]}</div>
        <div data-testid="sort-category">{sort.category}</div>
        <div data-testid="sort-order">{sort.order}</div>
        <div data-testid="darkMode">{darkMode ? 'bp4-dark dark' : 'bp4-body light'}</div>
      </>
      );
    }

  
  test('filters-value', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('filters-value').textContent).toEqual('');
    
  })

  test('users-value', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('users-value').textContent).toEqual('London');
  })

  test('users-salary', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('users-salary').textContent).toEqual('20000');
  })

  test('filteredJobs', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.getByTestId('filteredJobs').textContent).toEqual('');
  })

  test('jobs-category', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.getByTestId('jobs-category').textContent).toEqual('');
  })

  test('sort-category', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('sort-category').textContent).toEqual('Job Title');
  })

  test('sort-order', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('sort-order').textContent).toEqual('asc');
  })

  test('dark mode', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('darkMode').textContent).toEqual('bp4-dark dark');
  })
})