// Package imports
import { useContext } from 'react';
import { Colors, H1 } from '@blueprintjs/core';

// Local imports
import { ThemeContext } from './App';

// CSS
import '@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/normalize.css/normalize.css';

function Logo () {
  const [darkMode,] = useContext(ThemeContext);

  return (
    <>
      <H1
        style={{
          color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
        }}
      >
        Job COLumn
      </H1>
      {/* Remove hyperlink coloring */}
      <p>Jobs for every cost of living</p>
    </>
  );
}

export default Logo;
