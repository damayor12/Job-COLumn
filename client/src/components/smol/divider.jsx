// Package imports
import { useContext } from 'react';
import { Divider } from '@blueprintjs/core';

// Local imports
import { ThemeContext } from '../../App';
import css from '../../index.scss';

function GenericDivider () {
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