import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {Footer} from './index';

describe('helpers/index.ts test', () => {
  test('footer renders text', () => {
    render(<Footer />);
    expect(screen.getByText('Powered by', {exact: false})).toBeInTheDocument();
  })
})