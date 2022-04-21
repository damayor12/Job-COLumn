// Package imports
import { Classes, Button, Colors } from '@blueprintjs/core';

function GenericButton ({ onClick, text, icon }) {
  return (
  <Button
    style={{
      borderColor: Colors.ROSE1,
      color: Colors.ROSE1
    }}
    intent='secondary'
    className={Classes.SMALL}
    outlined
    icon={icon}
    onClick={onClick}
  >
    {text}
  </Button>
  );
}

export default GenericButton;