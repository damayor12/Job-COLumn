// Package imports
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { MaybeElement } from '@blueprintjs/core';

// Local imports
import Button from './secondaryButton';

const BackButton: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Button
      ariaLabel="Back button"
      icon={'arrow-left' as unknown as MaybeElement}
      onClick={() => navigate(-1)}
      text="Back"
    />
  );
};

export default BackButton;
