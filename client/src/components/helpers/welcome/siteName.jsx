// Local imports
import { rose } from '../index';

// TODO move all styling to scss files
// Search for style={{
export function siteName (darkMode) {
  return (
    <span
      className='bold'
      style={{ color: rose(darkMode) }}
    >Job COLumn</span>
  );
}
