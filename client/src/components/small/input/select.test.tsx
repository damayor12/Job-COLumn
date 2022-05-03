import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import GenericSelect from './select';
import CITIES from '../../helpers/cities.json';
import userEvent from '@testing-library/user-event';

const options = ['Location', 'Salary', 'Expiry Date', 'Posted Date', 'Job Title'];
describe('testing select functionality', () => {
  // const onItemSelect = {
  //   "name": "Aberdeen",
  //   "index": 43.22642063546455,
  //   "latitude": 57.149717,
  //   "longitude": -2.094278
  // }

  test('should render', () => {
    const onItemSelect = jest.fn();
    render(<GenericSelect items={options} onItemSelect={onItemSelect} />);

    const Select = screen.getByTestId('select');

    expect(Select).toBeTruthy();
  });

  test('expect the Item Select to be fired', () => {
    const onItemSelect = jest.fn();
    render(<GenericSelect items={options} onItemSelect={onItemSelect} />);
    const Select = screen.getByTestId('select');

    userEvent.selectOptions(Select, 'Expiry Date');
    expect((screen.getByText('Expiry Date') as HTMLOptionElement).selected).toBeTruthy();
  });
});
