// Package imports
import { Classes, Button, Colors } from '@blueprintjs/core';

function GenericButton ({ onClick, text, icon }) {

  return (
  <Button
    style={{
      backgroundColor: Colors.ROSE1,
      color: 'white'
    }}
    className={Classes.SMALL}
    fill={false}
    icon={icon}
    intent='primary'
    onClick={onClick}
    outlined
  >
    {text}
  </Button>
  );
}

export default GenericButton;