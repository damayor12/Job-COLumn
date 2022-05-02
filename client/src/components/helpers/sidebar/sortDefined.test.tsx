import '@testing-library/jest-dom';
import {render , screen} from '@testing-library/react';
import { sortDefined as SortDefined } from './sortDefined';

describe('sortDefined renders content', () => {
  // test('should call sortOnClick button', () => {

  //   const filterAndSort : (event: React.MouseEvent<HTMLElement>) => void = jest.fn();
  //   const sortOrder : string = 'asc';
  //   const sortOnClick : (event: React.MouseEvent<HTMLElement>) => void = jest.fn();

  //   render(<SortDefined filterAndSort={filterAndSort} sortOrder={sortOrder} sortOnClick={sortOnClick}/>);

  //   userEvent.click(screen.getByTestId('secondary-btn'));
  //   expect(sortOnClick).toHaveBeenCalled();

  // })
  test('should display sort by', () => {
    const filterAndSort : (event: React.MouseEvent<HTMLElement>) => void = jest.fn();
    const sortOrder : string = 'asc';
    const sortOnClick : (event: React.MouseEvent<HTMLElement>) => void = jest.fn();

    render(<SortDefined filterAndSort={filterAndSort} sortOrder={sortOrder} sortOnClick={sortOnClick}/>);
    expect(screen.getByTestId('h5-label').textContent).toEqual('Sort by');
  })

})