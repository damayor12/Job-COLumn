// Package imports
import { useContext } from 'react';

// Local imports
import Button from './secondaryButton';
import { ThemeContext } from '../../../App';

function ToggleDarkMode () {
  const [darkMode, toggleTheme] = useContext(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      icon={darkMode ? 'flash' : 'moon'}
    />
  )
}

export default ToggleDarkMode;