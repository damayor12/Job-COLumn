import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import Error from './error';

describe('Error component', () => {
  test('should render the error component text', async () => {
    render(
      <Router>
        <Error/>
      </Router>);
    expect(screen.getByTestId('error-div').textContent).toContain('Error 404: Page not found');
  })
})