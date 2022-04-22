// Package imports
import { useContext } from 'react';
import { Classes, Button, Colors } from '@blueprintjs/core';

// Local imports
import { ThemeContext } from '../../../App';
import './buttons.scss';
import css from '../../../index.scss';

function PrimaryButton ({ ariaLabel, icon, onClick, text }) {
  const [darkMode,] = useContext(ThemeContext);

  return (
    <Button
      style={{
        backgroundColor: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`,
        color: `${darkMode ? css.almostBlack : css.almostWhite}`
      }}
      aria-label={ariaLabel}
      className={Classes.SMALL}
      fill={false}
      icon={icon}
      intent='primary'
      onClick={onClick}
      outlined
    >
      {text}
    </Button>
  );
}

export default PrimaryButton;