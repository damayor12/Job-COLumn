// Local imports
import Logo from '../small/logo/logo';
import Anchor from '../small/buttons/anchor';

// Add thousands divider
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
