// Package imports
import { Classes, Button, Colors } from '@blueprintjs/core';

function GenericButton ({ onClick, text, icon }) {
  return (
  <Button
    style={{
      borderColor: Colors.ROSE1,
      color: Colors.ROSE1
    }}
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

export default GenericButton;