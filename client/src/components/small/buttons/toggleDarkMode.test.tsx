import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SecondaryButton from './secondaryButton';
import { MaybeElement } from '@blueprintjs/core';
import Welcome from '../../welcome/welcome';
import { ThemeProvider } from '../../contexts/theme';


// ariaLabel={'Toggle Light Mode'}
describe('testing themebutton functionality', () => {
  test('testing default theme', () => {
    render(
      <SecondaryButton icon={'flash' as unknown as MaybeElement} ariaLabel={'Toggle Light Mode'} />,
    );
    const toggleButton = screen.getByTestId('dark-mode-secondary');

    expect(toggleButton).toHaveAttribute('aria-label', 'Toggle Light Mode');
  });

  test('button should display', () => {
    render(
      <SecondaryButton icon={'flash' as unknown as MaybeElement} ariaLabel={'Toggle Light Mode'} />,
    );
    const toggleButton = screen.getByRole('darkmode');

    expect(toggleButton).toBeTruthy();
  });

  // test('icon should be flash', () => {

  //   render(
  //     <ThemeProvider>
  //        <SecondaryButton icon={'flash' as unknown as MaybeElement} ariaLabel={'Toggle Light Mode'} />
  //     </ThemeProvider>
     
  //   );
  //   const toggleButton = screen.getByRole('darkmode');

  //   expect(toggleButton).toHaveAttribute('icon', 'flash' as unknown as MaybeElement);
  // });

  // test('onClick the background color should change', async () => {
  //   render(
  //     <SecondaryButton icon={'flash' as unknown as MaybeElement} ariaLabel={'Toggle Light Mode'} />,
  //   );

  //   const toggleButton = screen.getByRole('darkmode');
  //   userEvent.click(toggleButton);
   
  //   expect(toggleButton).toHaveClass('dark');
  // });
});
//  expect(toggleButton.classList).toHaveClass('dark');
// expect(toggleButton).toBeTruthy();