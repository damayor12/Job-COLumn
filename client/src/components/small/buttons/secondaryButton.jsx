// Package imports
import { Classes, Button } from '@blueprintjs/core';

function SecondaryButton ({
  ariaLabel,
  icon,
  id,
  onClick,
  text
}) {
  return (
    <Button
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
