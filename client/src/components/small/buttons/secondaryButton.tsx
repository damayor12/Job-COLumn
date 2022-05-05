import { Classes, Button, MaybeElement, Intent } from '@blueprintjs/core';

interface Props {
  ariaLabel?: string;
  icon: MaybeElement;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  text?: string;
}


const SecondaryButton: React.FC<Props> = ({ ariaLabel, icon, id, onClick, text }) => {
  return (
    <Button
      aria-label={ariaLabel}
      className={Classes.SMALL}
      fill={false}
      icon={icon}
      
      data-testid='dark-mode-secondary' 
      role='darkmode'
      id={id}
      intent={'secondary' as Intent}
      onClick={onClick}
      outlined
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
