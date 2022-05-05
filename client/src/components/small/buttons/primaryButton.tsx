import { Classes, Button, MaybeElement } from '@blueprintjs/core';

interface Props {
  ariaLabel?: string;
  icon: MaybeElement;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  text: string;
}

const PrimaryButton: React.FC<Props> = ({ ariaLabel, icon, onClick, text }) => {
  return (
    <Button
      data-testid='primary-btn'
      aria-label={ariaLabel}
      className={Classes.SMALL}
      fill={false}
      icon={icon}
      role='primary'
      intent="primary"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
