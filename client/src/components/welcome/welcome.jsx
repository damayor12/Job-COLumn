// Package imports
import { useNavigate } from 'react-router-dom';

// Local imports
import { useUserContext } from '../contexts/user';
import {
  footer,
  headerAndLogo,
} from '../helpers/index';
import {
  userForm,
  welcomeMessage,
  introduction,
  functionality,
  privacyDisclosure
} from '../helpers/welcome';

// Styling
import './welcome.scss';

function Welcome () {
  const navigate = useNavigate();
  // Contexts
  const [user, setUser] = useUserContext();

  // User salary input's onValueChange
  function onValueChange (value) {
    setUser({
      ...user,
      salary: value
    });
  }

  return (
    <div className='welcome'>
      {/* Header and logo */}
      {headerAndLogo}
      <main className='welcome-container'>
        {/* Welcome message */}
        {welcomeMessage}
        {/* Describing the app */}
        {introduction}
        {functionality}
        {privacyDisclosure}
        {/* User details and theme preference */}
        {userForm({
          defaultValue: user.salary,
          onValueChange: onValueChange,
          buttonOnClick: () => navigate('/jobs')
        })}
      </main>
      {/* APIs used */}
      {footer}
    </div>
  );
}

export default Welcome;
