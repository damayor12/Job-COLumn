import {  GeneralProvider } from './contexts';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { TestComponent } from './testComponent';

describe('GeneralProvider', () => {
  
  test('filters-value', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('filters-value').textContent).toEqual('');
  })

  test('SetFilter', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    userEvent.click(screen.getByText('Set Filter'));
    expect(screen.getByTestId('filters-value').textContent).toEqual('filter');
  })

  test('users-value', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('users-value').textContent).toEqual('London');
  })

  test('users-salary', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('users-salary').textContent).toEqual('20000');
  })

  test('set the user', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    userEvent.click(screen.getByText('SetUser'));
    expect(screen.getByTestId('users-value').textContent).toEqual('Bristol');
    expect(screen.getByTestId('users-salary').textContent).toEqual('40000');
  })

  test('filteredJobs', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.getByTestId('filteredJobs').textContent).toEqual('');
  })

  test('Set the filteredJobs', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    userEvent.click(screen.getByText('Set FilteredJobs'));
    expect(screen.getByTestId('filteredJobs').textContent).toEqual('test');
  })

  test('jobs', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.getByTestId('jobs').textContent).toEqual('');
  })

  test('set the Jobs', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    userEvent.click(screen.getByText('Set setJobs'));
    expect(screen.getByTestId('jobs').textContent).toEqual('test');
  })

  test('sort-category', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('sort-category').textContent).toEqual('Job Title');
  })

  test('sort-order', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('sort-order').textContent).toEqual('asc');
  })

  test('set the sort', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    userEvent.click(screen.getByText('Set setSort'));
    expect(screen.getByTestId('sort-category').textContent).toEqual('Location');
    expect(screen.getByTestId('sort-order').textContent).toEqual('desc');

  })

  test('dark mode', () => {
    render(<GeneralProvider><TestComponent/></GeneralProvider>)
    expect(screen.getByTestId('darkMode').textContent).toEqual('bp4-dark dark');
  })

})