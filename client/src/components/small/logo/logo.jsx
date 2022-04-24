// Package imports
import { useContext } from 'react';
import { Colors } from '@blueprintjs/core';

// Local imports
import { ThemeContext } from '../../../App';
// TODO make new logo
// And set it as favicon
import { ReactComponent as Icon } from './logo.svg';

function Logo () {
  // Contexts
  const [darkMode] = useContext(ThemeContext);

  return (
    <Icon style={{
      fill: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
    }} />
  );
}

export default Logo;
