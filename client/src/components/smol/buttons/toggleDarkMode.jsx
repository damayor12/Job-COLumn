// Package imports
import { useContext } from 'react';

// Local imports
import Button from './secondaryButton';
import { ThemeContext } from '../../../App';

function ToggleDarkMode ({ text }) {
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
