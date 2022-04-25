// Local imports
import { siteName } from './siteName';

export function welcomeMessage (darkMode) {
  return (
    <div className='welcome-text'>
      <p>Hello and welcome to {siteName(darkMode)}!</p>
    </div>
  );
}
