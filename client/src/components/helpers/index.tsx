// Local imports
import Logo from '../small/logo/logo';
import React from 'react';
import Anchor from '../small/buttons/anchor';

// Add thousands divider
export function numberFormatter(number: number): string {
  return number.toLocaleString('en-US');
}

// Header and logo
export const HeaderAndLogo: React.FC = () => (
  <header>
    <Logo />
  </header>
);

// Footer
export const Footer: React.FC = () => (
  <footer>
    Powered by <Anchor href="https://www.reed.co.uk/">Reed</Anchor> and{' '}
    <Anchor href="https://www.numbeo.com/">Numbeo</Anchor>.
  </footer>
);
