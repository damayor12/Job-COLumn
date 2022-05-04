import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import  { filtersDefined as FiltersDefined }   from './filtersDefined';

describe('FiltersDefined renders elements', () => {
  const keywordsOnChange : React.ChangeEventHandler<HTMLInputElement> = jest.fn();
  const numericOnChange : (value: number) => void = jest.fn();
  test('FiltersDefined renders the text', () => {
    render(<FiltersDefined keywords={'test'} keywordsOnChange={keywordsOnChange} numericOnChange={numericOnChange}/>)
    expect(screen.getByText('Filter', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('Keywords', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('Locations', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('Salary', {exact: false})).toBeInTheDocument();
  });
});