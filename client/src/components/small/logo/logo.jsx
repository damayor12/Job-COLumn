// Package imports
import { Colors } from '@blueprintjs/core';

// Local imports
import { useThemeContext } from '../../contexts/theme';
// TODO make new logo and set it as favicon
import { ReactComponent as Icon } from './logo.svg';

function Logo () {
  // Contexts
  const [darkMode] = useThemeContext();

  return (
    <Icon style={{
      fill: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
    }} />
  );
}

export default Logo;
