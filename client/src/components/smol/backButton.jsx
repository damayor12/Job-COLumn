// Package imports
import { Classes, Button, Colors } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

function BackButton () {
  const navigate = useNavigate();

  return (
  <Button
    style={{
      backgroundColor: Colors.ROSE1,
      color: 'white'
    }}
    className={Classes.SMALL}
    onClick={() => navigate(-1)}
  >
    Back
  </Button>
  );
}

export default BackButton;