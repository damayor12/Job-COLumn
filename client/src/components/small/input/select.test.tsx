import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GenericSelect from './select';

const options = ['Location', 'Salary', 'Expiry Date', 'Posted Date', 'Job Title'];
describe('testing select functionality', () => {
  
  test('should render', () => {
    const onItemSelect = jest.fn();
    render(<GenericSelect items={options} onItemSelect={onItemSelect} />);

    const Select = screen.getByTestId('select');

    expect(Select).toBeTruthy();
  });


  test('should render it', () => {
    const onItemSelect = jest.fn();
    const { container, getByText } = render(
      <GenericSelect items={options} onItemSelect={onItemSelect} />,
    );

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeTruthy();
  });

  
});
