import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { userDetails as UserDetails } from './userDetails';

describe('UserDetails component renders', () => {
  test('UserDetails renders the Location', () => {
    render(<UserDetails location= {'London'} salary={40000}/>);
    expect(screen.getByText('London')).toBeInTheDocument();
  });

  test('UserDetails renders the Salary', () => {
    render(<UserDetails location= {'London'} salary={40000}/>);
    expect(screen.getByText('£40,000')).toBeInTheDocument();
  });
})