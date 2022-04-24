// Package imports
import { useContext } from 'react';

// Local imports
import { ThemeContext } from '../../../App';
import Button from './secondaryButton';

function ToggleDarkMode ({ text }) {
  // Contexts
  const [darkMode, toggleTheme] = useContext(ThemeContext);

  return (
    <Button
      ariaLabel={`Toggle ${darkMode ? 'Light' : 'Dark'} Mode`}
      icon={darkMode ? 'flash' : 'moon'}
      onClick={toggleTheme}
      text={text}
    />
  )
}

export default ToggleDarkMode;
