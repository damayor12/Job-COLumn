// Package imports
import { useContext } from 'react';

// Local imports
import Button from './primaryButton';
import { ThemeContext } from '../../../App';

function ToggleDarkMode () {
  const [darkMode, toggleTheme] = useContext(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      text={darkMode ? 'Light Mode' : 'Dark Mode'}
      icon={darkMode ? 'flash' : 'moon'}
    />
  )
}

export default ToggleDarkMode;