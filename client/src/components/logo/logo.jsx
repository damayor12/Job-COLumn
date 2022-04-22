// Package imports
import { useContext } from 'react';
import { Colors } from '@blueprintjs/core';

// Local imports
import { ThemeContext } from '../../App';
import { ReactComponent as Icon } from './logo.svg';

function Logo () {
  const [darkMode,] = useContext(ThemeContext);

  return (
    <>
      <Icon
        style={{
          fill: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
        }}
      />
      <p>Jobs for every cost of living</p>
    </>
  );
}

export default Logo;

