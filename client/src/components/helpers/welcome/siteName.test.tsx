import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import  SiteName  from './siteName';

test('Shows the site name', () => {
  const name : string = 'Job COLumn';
  render(<SiteName/>);
  expect(screen.getByText(name)).toBeInTheDocument();
})