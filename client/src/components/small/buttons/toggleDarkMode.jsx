// Local imports
import { useThemeContext } from '../../contexts/theme';
import Button from './secondaryButton';

function ToggleDarkMode ({ text }) {
  // Contexts
  const [darkMode, toggleTheme] = useThemeContext();

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
