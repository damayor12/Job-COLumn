// Package imports
import { Classes, Button, Colors } from '@blueprintjs/core';

function GenericButton ({ onClick, text, icon }) {
  return (
  <Button
    style={{
      backgroundColor: Colors.ROSE1,
      color: 'white'
    }}
    intent='primary'
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