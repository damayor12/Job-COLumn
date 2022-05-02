import '@testing-library/jest-dom';
import {render , screen} from '@testing-library/react';
import { MaybeElement } from '@blueprintjs/core';
import userEvent from '@testing-library/user-event';

import SecondaryButton from './secondaryButton';

describe('SecondaryButton', () => {
  test('should respond to click event', () => {
    const ariaLabel : string = 'test';
    const icon : MaybeElement = null;
    const id : string = '1';
    const onClick : (event: React.MouseEvent<HTMLElement>) => void = jest.fn();
    const text : string = 'text';

    render(<SecondaryButton 
              ariaLabel={ariaLabel} 
              icon={icon} id={id} 
              onClick={onClick} 
              text={text}
            />);
    
    userEvent.click(screen.getByTestId('dark-mode-secondary'));

    expect(onClick).toHaveBeenCalled();
  })
})