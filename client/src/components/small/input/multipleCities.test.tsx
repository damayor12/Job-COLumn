import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import MultipleCitiesSelector from './multipleCities';

describe('TESTING MULTIPLE CITIES', () => {
  test('placeholder should be visible', () => {
    render(<MultipleCitiesSelector />);
    const citiesInput = screen.getByPlaceholderText('Desired City/Cities');
    expect(citiesInput).toBeTruthy();
  });
  test('should match inputed values', () => {
    render(<MultipleCitiesSelector />);
    const citiesInput = screen.getByPlaceholderText('Desired City/Cities');
    fireEvent.change(citiesInput, { target: { value: '12345' } });
    expect(citiesInput).toHaveValue('12345');
  });
  test('should focus on keydown event', async() => {
    render(<MultipleCitiesSelector />);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async() => {
      const citiesInput = screen.getByPlaceholderText('Desired City/Cities');
      userEvent.tab()
      expect(citiesInput).toHaveFocus();
    });
  });
});
