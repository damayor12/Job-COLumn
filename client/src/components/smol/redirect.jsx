// Package imports
import { useEffect, /* useState */ } from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton () {
  const navigate = useNavigate();
  // const userDetails = useState(['London', 30_000]);

  useEffect(() => {
    // if (userDetails[0] && userDetails[1]) navigate('/jobs')
    navigate('/welcome')
  }, []);
}

export default BackButton;