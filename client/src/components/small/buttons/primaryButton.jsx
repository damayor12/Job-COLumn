// Package imports
import { Classes, Button } from '@blueprintjs/core';

function PrimaryButton ({
  ariaLabel,
  icon,
  onClick,
  text
}) {
  return (
    <Button
      aria-label={ariaLabel}
      className={Classes.SMALL}
      fill={false}
      icon={icon}
      intent='primary'
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default PrimaryButton;
