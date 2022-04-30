// Package imports
import { Classes, Button, MaybeElement } from '@blueprintjs/core';

interface Props {
  ariaLabel?: string;
  icon: MaybeElement;
  id?: string;
  onClick?: () => void;
  text: string;
}

const PrimaryButton: React.FC<Props> = ({ ariaLabel, icon, onClick, text }) => {
  return (
    <Button
      aria-label={ariaLabel}
      className={Classes.SMALL}
      fill={false}
      icon={icon}
      intent="primary"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
