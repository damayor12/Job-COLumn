import '@testing-library/jest-dom';
import {render , screen} from '@testing-library/react';
import PrimaryButton  from './primaryButton';
import { MaybeElement } from '@blueprintjs/core';
import userEvent from '@testing-library/user-event'

describe('PrimaryButton', () => {
  test('should respond to the onClick method', () => {
    const ariaLabel : string = 'test';
    const icon : MaybeElement = null;
    const id : string = '1';
    const onClick : (event: React.MouseEvent<HTMLElement>) => void = jest.fn();
    const text : string = 'text';

    render(<PrimaryButton ariaLabel={ariaLabel} icon={icon} id={id} onClick={onClick} text={text}/>);

    userEvent.click(screen.getByTestId('primary-btn'));

    expect(onClick).toHaveBeenCalled();

  })
})