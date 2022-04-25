// Local imports
import Logo from '../small/logo/logo';
import Anchor from '../small/buttons/anchor';

// Styling
import css from '../../App.scss';

// Common functions
// TODO these are both just CSS.
// See if you can apply CSS conditions in SCSS files instead.
export function rose (darkMode) {
  return darkMode ? css.roseDark : css.roseLight;
}

export function background (darkMode) {
  return darkMode ? css.almostBlack : css.almostWhite;
}

export function numberFormatter(number) {
  return number.toLocaleString('en-US');
}

// Header and logo
export const headerAndLogo = <header>
  <Logo />
</header>

// Footer
export const footer = <footer>
  Powered by <Anchor href='https://www.reed.co.uk/'>
    Reed
  </Anchor> and <Anchor href='https://www.numbeo.com/'>
    Numbeo
  </Anchor>.
</footer>
