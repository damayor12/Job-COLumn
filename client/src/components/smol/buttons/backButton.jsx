// Package imports
import { useNavigate } from 'react-router-dom';

// Local imports
import Button from './secondaryButton';

function BackButton () {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      text='Back'
      icon='arrow-left'
    />
  );
}

export default BackButton;