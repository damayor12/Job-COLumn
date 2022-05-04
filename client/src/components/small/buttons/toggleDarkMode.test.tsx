import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SecondaryButton from './secondaryButton';
import { MaybeElement } from '@blueprintjs/core';

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

});
