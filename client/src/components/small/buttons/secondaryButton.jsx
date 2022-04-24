// Package imports
import { useContext } from 'react';
import { Classes, Button, Colors } from '@blueprintjs/core';

// Local imports
import { ThemeContext } from '../../../App';

function SecondaryButton ({
  ariaLabel,
  icon,
  onClick,
  text
}) {
  // Contexts
  const [darkMode] = useContext(ThemeContext);

  return (
    <Button
      style={{
        borderColor: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`,
        color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
      }}
      aria-label={ariaLabel}
      className={Classes.SMALL}
      fill={false}
      icon={icon}
      intent='secondary'
      onClick={onClick}
      outlined
    >
      {text}
    </Button>
    );
}

export default SecondaryButton;
