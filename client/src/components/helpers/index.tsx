import Logo from '../small/logo/logo';
import React from 'react';
import Anchor from '../small/buttons/anchor';

export function numberFormatter(number: number): string {
  if (number) {
    return number.toLocaleString('en-US');
  } else {
    return '';
  }
}

export const HeaderAndLogo: React.FC = () => (
  <header>
    <Logo />
  </header>
);

export const Footer: React.FC = () => (
  <footer>
    Powered by <Anchor href="https://www.reed.co.uk/">Reed</Anchor> and{' '}
    <Anchor href="https://www.numbeo.com/">Numbeo</Anchor>.
  </footer>
);
