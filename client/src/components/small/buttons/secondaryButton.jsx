// Package imports
import { Classes, Button, Colors } from '@blueprintjs/core';

// Local imports
import { useThemeContext } from '../../contexts/theme';

function SecondaryButton ({
  ariaLabel,
  icon,
  id,
  onClick,
  text
}) {
  // Contexts
  const [darkMode] = useThemeContext();

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
      id={id}
      intent='secondary'
      onClick={onClick}
      outlined
    >
      {text}
    </Button>
    );
}

export default SecondaryButton;
