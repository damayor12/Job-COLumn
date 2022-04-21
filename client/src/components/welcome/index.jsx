// Package imports
import { useNavigate } from 'react-router-dom';

// Local imports
import Logo from '../../logo';
import Button from '../smol/buttons/primaryButton'

function Welcome () {
  const navigate = useNavigate();

  return (
    <div>
      <Logo />
      <div>
        Welcome message.
      </div>
      <div>
        Describe the app.
      </div>
      <div>
        Explain why I need some details from the user.
      </div>
      <div>
        Form.
        <form>
          <input
            type='text'
            placeholder='Current location'
          />
          <input
            type='number'
            placeholder='Current salary'
          />
          <Button onClick={() => navigate('/jobs')} text='Submit' icon='key-enter' />
        </form>
      </div>
    </div>
  );
}

export default Welcome;
