import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Numeric from './numeric';

describe('numeric inputs', () => {
  const func = jest.fn();

  test('should render a numeric input', () => {
    render(<Numeric fill={true} onValueChange={func} />);
    const numericInput = screen.getByTestId('numeric');

    expect(numericInput).toBeTruthy();
  });

  test('change on input', () => {
    render(<Numeric fill={true} onValueChange={func} />);
    const numericInput = screen.getByTestId('numeric');

    fireEvent.change(numericInput, {target: {value: '50000'}});


    expect(screen.getByTestId('numeric')).toHaveValue('50000');
  });
});

// const setUser = jest.fn()
// const { getByTestId } = render(<Numeric fill={true} onValueChange=(/>)

// const username_input = screen.getByTestId('numeric');
