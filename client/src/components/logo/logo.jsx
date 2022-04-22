// Package imports
import { useContext } from 'react';
import { Colors, H1 } from '@blueprintjs/core';

// Local imports
import { ThemeContext } from '../../App';
import { ReactComponent as Image } from './logo.svg';

// CSS
import '@blueprintjs/core/lib/css/blueprint.css';
import '../../../node_modules/normalize.css/normalize.css';

function Logo () {
  const [darkMode,] = useContext(ThemeContext);

  return (
    <>
      <Image
        style={{
          fill: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
        }}
      />
      {/* Remove hyperlink coloring */}
      <p>Jobs for every cost of living</p>
    </>
  );
}

export default Logo;
