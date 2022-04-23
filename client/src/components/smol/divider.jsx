// React imports
import { useContext } from 'react';

// BlueprintJS imports
import { Divider } from '@blueprintjs/core';

// Local component imports
import { ThemeContext } from '../../App';

// Styling
import css from '../../index.scss';

function GenericDivider () {
  // Contexts
  const [darkMode,] = useContext(ThemeContext);

  return (
    <Divider
      style={{
        borderColor: `${darkMode ? css.almostWhite : css.almostBlack} !important`
      }}
    />
  );
}

export default GenericDivider;