// Package imports
import { useNavigate } from 'react-router-dom';

// Local imports
import Button from './secondaryButton';

function BackButton () {
  const navigate = useNavigate();

  return (
    <Button
      ariaLabel='Back button'
      icon='arrow-left'
      onClick={() => navigate(-1)}
      text='Back'
    />
  );
}

export default BackButton;
